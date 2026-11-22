import gzip
import copy
import io
import json
import os
import re
import sqlite3
import struct
import tarfile
import tempfile
import unittest
from collections import defaultdict
from contextlib import closing, redirect_stdout
from pathlib import Path
from unittest.mock import patch

from indexer.ci_structure import unpack
from indexer.reference import function_path, reference_path
from indexer.reference_structure import listing
from indexer.run import headless
from indexer.store import LOCAL, connect, digest, read_json, write_json
from matcher import blocks, instruction_matcher, logic, structure, tracking, tracking_pages, tracking_pair
from matcher.comparison_pages import carry_function_comparisons, comparison_catalog, comparison_identity, valid_comparison_entries, catalog_path, function_comparison_links, render_links


def op(name, *values, output=None):
    return [name, output, list(values)]


def record(address, instructions):
    sites = [[f'{int(address, 16) + 4*i:08x}', 'op', 'FALL_THROUGH', [operation]]
             for i, operation in enumerate(instructions)]
    size = len(sites) * 4
    return {'type': 'function', 'address': address, 'ranges': [[address, f'{int(address, 16)+size-1:08x}']],
            'blocks': [[address, [], []]], 'refs': [], 'instructions': sites, 'instruction_count': len(sites),
            'instruction_bytes': size, 'body_bytes': size, 'unresolved': 0, 'indirect': 0,
            'bytes_sha256': structure.fingerprint(instructions)}


def export(path, header, rows, complete=True):
    with gzip.open(path, 'wt', encoding='utf-8') as out:
        for row in [header, *rows, *([{'type': 'complete', 'functions': len(rows), 'seconds': 0.01}] if complete else [])]:
            out.write(structure.pack(row) + '\n')


def make_elf(path, threshold, write=True):
    # 独立したAArch64 ELF。分岐・閾値・ストア・呼出を明示した命令列を用いる。
    instructions = (0xF100001F | (threshold << 10), 0x5400004B if write else 0x5400004A,
                    0xF9000020 if write else 0xD503201F, 0x94000002 if write else 0x94000004,
                    0xD65F03C0, 0xD2800020, 0xD65F03C0, 0xD2800040, 0xD65F03C0)
    code = struct.pack('<12I', *instructions, 0x10007EE2, 0xB9400040, 0xD65F03C0)
    names = b'\0.text\0.symtab\0.strtab\0.shstrtab\0.rodata\0'
    strings = b'\0_start\0helper_a\0helper_b\0data_reader\0'
    text_offset, entry = 4096, 0x10000
    symbols = bytes(24) + b''.join(struct.pack('<IBBHQQ', strings.index(name), 0x12, 0, 1, entry+start, size)
                                  for name, start, size in ((b'_start', 0, 20), (b'helper_a', 20, 8), (b'helper_b', 28, 8), (b'data_reader', 36, 12)))
    offset = text_offset + len(code)
    sh_offset = offset + len(symbols) + len(strings) + len(names)
    header = struct.pack('<16sHHIQQQIHHHHHH', b'\x7fELF\x02\x01\x01', 2, 183, 1, entry, 64, sh_offset,
                         0, 64, 56, 2, 64, 6, 4)
    segment = struct.pack('<IIQQQQQQ', 1, 5, text_offset, entry, entry, len(code), len(code), 4096)
    segment += struct.pack('<IIQQQQQQ', 1, 4, 8192, 0x11000, 0x11000, 4, 4, 4096)
    sections = bytes(64) + b''.join(struct.pack('<IIQQQQIIQQ', names.index(name), kind, flags, addr,
                                                start, size, link, info, align, entsize)
        for name, kind, flags, addr, start, size, link, info, align, entsize in (
            (b'.text', 1, 6, entry, text_offset, len(code), 0, 0, 4, 0),
            (b'.symtab', 2, 0, 0, offset, len(symbols), 3, 1, 4, 24),
            (b'.strtab', 3, 0, 0, offset+len(symbols), len(strings), 0, 0, 1, 0),
            (b'.shstrtab', 3, 0, 0, offset+len(symbols)+len(strings), len(names), 0, 0, 1, 0),
            (b'.rodata', 1, 2, 0x11000, 8192, 4, 0, 0, 4, 0)))
    path.write_bytes((header + segment).ljust(text_offset, b'\0') + code + symbols + strings + names + sections + bytes(8192-sh_offset-len(sections)) + bytes.fromhex('44332211'))


class TrackingTests(unittest.TestCase):
    def test_preview_links_can_cross_local_drives(self):
        with tempfile.TemporaryDirectory() as temporary:
            root = Path(temporary).resolve()
            target = root / 'function name.md'
            target.write_text('function')
            preview = root / 'preview'
            preview.mkdir()
            page = preview / 'README.md'
            with patch.object(tracking_pages.os.path, 'relpath', side_effect=ValueError('different drive')):
                href = tracking_pages.link(target, page)
            self.assertEqual(href, target.as_uri())
            page.write_text(f'[function]({href})', encoding='utf-8')
            self.assertEqual(tracking_pages.verify_links(preview, root, None, None), 1)

    def test_unmatched_function_links_to_review_and_pair_index(self):
        with tempfile.TemporaryDirectory() as temporary:
            root = Path(temporary)
            identities = [{'version': f'16.0.{i}', 'architecture': 'arm64-v8a', 'sha256': 'a' * 64, 'analysis_revision': 'b' * 16}
                          for i in (1, 2, 3)]
            reference = root / 'research/reference'
            address = '00010000'
            page = reference / reference_path(identities[-1]) / function_path(address)
            page.parent.mkdir(parents=True)
            page.write_text('# Entry\n\n## 関数情報\n', encoding='utf-8-sig')
            destination = root / 'research/comparisons'
            for name in ('0-1', '1-2'):
                (destination / name).mkdir(parents=True)
            (destination / '0-1/README.md').touch()
            review = destination / '1-2/review-0001.md'
            review.write_text('<a id="review-1-00010000"></a>\n', encoding='utf-8-sig')
            write_json(page.parents[2] / 'manifest.json', identities[-1])
            write_json(destination / 'navigation.json', {'format': 1, 'sources': [comparison_identity(identity) for identity in identities], 'pairs': [
                {'pair': '0-1', 'older': 0, 'newer': 1, 'details': {}, 'reviews': [{}, {}]},
                {'pair': '1-2', 'older': 1, 'newer': 2, 'details': {},
                 'reviews': [{}, {address: [review.name, 'review-1-00010000']}]},
            ]})
            tracking_pages.attach_adjacent_links(reference, destination, identities)
            links = function_comparison_links(page)
            self.assertTrue(links['v16.0.1 → v16.0.2'].endswith('0-1/README.md)（版の比較一覧）'))
            self.assertTrue(links['v16.0.2 → v16.0.3'].endswith('1-2/review-0001.md#review-1-00010000)（要確認）'))

    def test_logic_scope_and_changes(self):
        a, b = '00010000', '00020000'
        before = record(a, [op('INT_LESS', 'register:0:8', 'const:5:8', output='unique:3:1'),
                            op('CBRANCH', 'ram:10000:8', 'unique:3:1'), op('CALL', 'ram:11000:8'),
                            op('STORE', 'const:1:8', 'register:8:8', 'register:0:8')])
        after = record(b, [op('INT_LESSEQUAL', 'register:0:8', 'const:6:8', output='unique:8:1'),
                           op('CBRANCH', 'ram:20000:8', 'unique:8:1'), op('CALL', 'ram:22000:8')])
        result = logic.compare(before, after, {}, {})
        self.assertEqual(result['status'], 'logic_change_candidate')
        self.assertTrue({'constant', 'comparison', 'call', 'memory_write_count'} <= set(result['changes']))
        unchanged = record(a, [op('COPY', 'const:1:8', output='register:0:8')])
        raw_different = unchanged | {'bytes_sha256': 'different'}
        self.assertEqual(logic.compare(unchanged, raw_different, {}, {})['status'], 'machine_only_observed')
        renamed = record(a, [op('COPY', 'const:1:8', output='register:8:8')])
        self.assertEqual(logic.compare(unchanged, renamed, {}, {})['status'], 'register_sensitive')
        reorder = record(a, list(reversed([item[3][0] for item in before['instructions']])))
        self.assertIn('operation_order', logic.compare(before, reorder, {}, {})['changes'])

    def test_pc_relative_relocation_keeps_arithmetic_constants(self):
        rows = []
        for page, offset in ((0x11000, 0x20), (0x12000, 0x40)):
            row = record('00010000', [op('COPY', f'const:{page:x}:8', output='register:8:8'),
                op('INT_ADD', 'register:8:8', f'const:{offset:x}:8', output='register:8:8')])
            row['instructions'][0][1] = 'adrp'
            row['refs'] = [['00010004', f'{page+offset:08x}', 'DATA', 'ANALYSIS', None, None, None]]
            rows.append(row)
        result = logic.compare(*rows, {}, {})
        self.assertEqual(result['status'], 'reference_sensitive')
        self.assertIn('constant', result['changes'])
        rows[1]['refs'] = []
        self.assertEqual(logic.compare(*rows, {}, {})['status'], 'logic_change_candidate')

    def test_reference_targets_position_access_and_indirect_resolution(self):
        old = record('00010000', [op('COPY', 'const:1:8', output='register:4000:8')])
        new = record('00020000', [op('COPY', 'const:1:8', output='register:4000:8')])
        old['refs'] = [['00010000', '00030000', 'READ', 'ANALYSIS', None, 'same', 'int']]
        new['refs'] = [['00020000', '00040000', 'WRITE', 'ANALYSIS', None, 'same', 'int']]
        result = logic.compare(old, new, {}, {})
        self.assertTrue(result['machine_equal'] and result['cfg_equal'])
        self.assertEqual((result['reference_state'], result['importance']), ('changed', 'high'))
        self.assertEqual(result['references']['removed'][0][2][1], '00030000')
        new['refs'] = [['00020004', '00030000', 'READ', 'ANALYSIS', None, 'same', 'int']]
        self.assertEqual(logic.reference_comparison(old, new, {}, {})['state'], 'changed')
        new['refs'] = []
        new['call_positions'] = [['00020000', 'COMPUTED_CALL']]
        result = logic.compare(new, new, {}, {})
        self.assertEqual((result['status'], result['reference_state']), ('reference_unresolved', 'unresolved'))
        self.assertGreater(result['references']['unknown'][0], 0)

    def test_function_pointer_relocation_keeps_raw_store_evidence(self):
        def row(start, address):
            result = record(start, [op('COPY', f'const:{int(address,16):x}:8', output='register:4000:8'),
                op('STORE', 'const:1:8', 'register:4008:8', 'register:4000:8')])
            result['instructions'][0][1] = 'adr'
            result['refs'] = [[f'{int(start,16)+4:08x}', address, 'DATA', 'ANALYSIS', address, None, None]]
            return result
        old, new = row('00010000','00020000'), row('00030000','00040000')
        matched = ({'00020000':'00040000'}, {'00040000':'00040000'})
        moved = logic.compare(old,new,*matched)
        self.assertEqual(moved['impact']['store_value'], 1)
        self.assertEqual(moved['address_sensitive_impact']['store_value'], 1)
        self.assertEqual(moved['importance'], 'high')
        self.assertEqual(logic.compare(old,new,{'00020000':'00050000'},
                                     {'00040000':'00040000'})['importance'], 'critical')

    def test_observable_values_and_same_store_count(self):
        address = '00010000'
        copy = lambda value, reg: op('COPY', value, output=reg)
        storage = ('register:4000:8', 'register:4008:8')
        store = op('STORE', 'const:1:8', storage[1], storage[0])
        old = record(address, [copy('const:0:8', storage[0]), copy('const:1000:8', storage[1]), store,
                               op('CBRANCH', 'ram:10000:8', storage[0])])
        new = record(address, [copy('const:1:8', storage[0]), copy('const:2000:8', storage[1]), store,
                               op('CBRANCH', 'ram:10000:8', storage[0])])
        result = logic.compare(old, new, {}, {})
        self.assertNotIn('memory_write_count', result['changes'])
        self.assertTrue({'store_value', 'store_destination', 'branch_value'} <= set(result['impact']))
        self.assertEqual(result['importance'], 'critical')
        self.assertEqual(next(e for e in result['effects'] if e['kind'] == 'store_value')['new']['definition_site'], address)

        for row in (old, new):
            row['instructions'][2], row['instructions'][3] = row['instructions'][3], row['instructions'][2]
            row['instructions'][2][0], row['instructions'][3][0] = '00010008', '0001000c'
            row['blocks'] = [[address, [[address, '0001000b']], [['CONDITIONAL_JUMP', '00010008', '0001000c'],
                ['FALL_THROUGH', '00010008', '00010010']]], ['0001000c', [['0001000c','0001000f']], []]]
        self.assertIn('store_condition', logic.compare(old, new, {}, {})['impact'])

    def test_call_arguments_relocated_callee_and_return_registers(self):
        def function(start, destination, value):
            row = record(start, [op('COPY', f'const:{value}:8', output='register:4000:8'),
                op('CALL', f'ram:{int(destination, 16):x}:8'),
                op('COPY', f'const:{value}:8', output='register:4000:8'), op('RETURN', 'register:40f0:8')])
            row['refs'] = [[f'{int(start, 16)+4:08x}', destination, 'UNCONDITIONAL_CALL', 'ANALYSIS', destination, None, None]]
            return row
        old, new = function('00010000', '00030000', 1), function('00020000', '00040000', 1)
        targets = ({'00030000': '00040000'}, {'00040000': '00040000'})
        moved = logic.compare(old, new, *targets, abi=True)
        self.assertEqual(moved['reference_state'], 'equal')
        self.assertFalse(moved.get('impact'))
        updated = logic.compare(old, function('00020000', '00040000', 2), *targets, abi=True)
        self.assertTrue({'call_argument_candidate', 'return_value_candidate'} <= set(updated['impact']))
        self.assertEqual(updated['confidence'], 'limited')

    def test_register_renaming_preserves_local_dependencies_only(self):
        def function(reg, use):
            return record('00010000', [op('INT_AND', 'register:4000:8', 'const:ff:8', output=reg),
                op('STORE', 'const:1:8', 'register:4008:8', use)])
        a, b = 'register:4050:8', 'register:4058:8'
        old, renamed = function(a, a), function(b, b)
        self.assertEqual(logic.compare(old, renamed, {}, {})['status'], 'register_renaming_candidate')
        changed = logic.compare(old, function(b, 'register:4010:8'), {}, {})
        self.assertIn('store_value', changed['impact'])
        self.assertEqual(changed['importance'], 'critical')

    def test_same_count_insertion_deletion_reorder_and_duplicate_shapes(self):
        left = ['00000010', '00000020', '00000030', '00000040', '00000050']
        right = ['00000110', '00000120', '00000130', '00000140', '00000150']
        mapped = {left[i]: (right[i], 'test', {}) for i in (0, 2, 3, 4)}
        layout, nearby, _ = tracking_pair.intervals((left, right), mapped)
        self.assertIn('equal_count', {item[4] for item in layout})
        insertion, _, _ = tracking_pair.intervals((left, right + ['00000128']), mapped)
        self.assertIn('different_count', {item[4] for item in insertion})
        for side in (0, 1):
            source = (left, right)[side][1]
            kind = tracking_pair.residuals(side, source, {}, nearby[side], {}, set(), defaultdict(set),
                lambda x, address: {('present',)})[0][0]
            self.assertEqual(kind, 'unresolved')
        mapped[left[3]], mapped[left[4]] = mapped[left[4]], mapped[left[3]]
        layout, _, moved = tracking_pair.intervals((left, right), mapped)
        self.assertTrue(moved)
        self.assertIn('reordered', {item[4] for item in layout})
        repeated = dict.fromkeys(left[:2], ('available', 'duplicate', 100, 'bytes', 'cfg'))
        targets = dict.fromkeys(right[:2], ('available', 'duplicate', 100, 'bytes', 'cfg'))
        hits, review, stats = tracking_pair.refine({}, (repeated, targets), [defaultdict(set)]*4, None, set())
        self.assertFalse(hits)
        self.assertEqual({row[2] for row in review}, {'shape_collision'})
        self.assertEqual(stats['shape_collisions'], {'old': 2, 'new': 2})

    def test_split_merge_and_inline_fragments(self):
        whole = {('operation', i) for i in range(20)}
        half = {('operation', i) for i in range(10)}
        pieces = {(0, 'a'): whole, (1, 'b'): half, (1, 'c'): whole-half,
                  (0, 'caller'): {('before',)}, (1, 'next'): whole | {('after',)}}
        for side, kind in ((0, 'split_candidate'), (1, 'merge_candidate')):
            lookup = pieces if side == 0 else {(1-s, a): p for (s, a), p in pieces.items()}
            hits = tracking_pair.residuals(side, 'a', {}, {'a': (['b', 'c'], ('bound',))}, {}, set(),
                                         defaultdict(set), lambda s, a: lookup.get((s, a), set()))
            self.assertEqual(hits[0][0], kind)
        hits = tracking_pair.residuals(0, 'a', {}, {}, {'caller': 'next'}, {'next'},
            defaultdict(set, a={'caller'}), lambda s, a: pieces.get((s, a), set()))
        self.assertEqual(hits[0][0], 'inline_candidate')
        mixed = tracking_pair.residuals(0, 'a', {'a': {'b'}}, {'a': (['b', 'c'], ('a0','a1','b0','b1'))},
            {'caller': 'next'}, {'next'}, defaultdict(set, a={'caller'}), lambda s, a: pieces.get((s, a), set()))
        self.assertEqual({item[0] for item in mixed}, {'split_candidate', 'inline_candidate', 'competing_candidates'})

    def test_call_insertion_uses_corresponding_positions(self):
        targets = {'a': 'x', 'b': 'y'}
        old = record('00001000', [op('CALL', 'ram:2000:8'), op('CALL', 'ram:3000:8'), op('RETURN', 'register:40f0:8')])
        new = record('00005000', [op('CALL', 'ram:6000:8'), op('CALL', 'ram:7000:8'), op('CALL', 'ram:8000:8'),
                                  op('RETURN', 'register:40f0:8')])
        old['refs'] = [[old['instructions'][i][0], target, 'UNCONDITIONAL_CALL', 'ANALYSIS', callee, None, None]
                       for i, (target, callee) in enumerate((('00002000', 'a'), ('00003000', 'b')))]
        new['refs'] = [[new['instructions'][i][0], target, 'UNCONDITIONAL_CALL', 'ANALYSIS', callee, None, None]
                       for i, (target, callee) in enumerate((('00006000', 'extra'), ('00007000', 'x'), ('00008000', 'y')))]
        result = logic.compare(old, new, targets, {key: key for key in ('extra', 'x', 'y')})
        self.assertEqual(result['impact'], {'call_count': 1})
        self.assertEqual(result['references']['mapped_call_target_changes'], 0)
        self.assertEqual(result['references']['added'][0][0], '00005000')

    def test_assignment_keeps_indistinguishable_candidates_on_hold(self):
        choices = [{'new': name, 'score': 90, 'eligible': True} for name in ('x', 'y')]
        matches, evidence = blocks.assignment({'a': choices, 'b': choices})
        self.assertEqual(matches, {})
        self.assertTrue(all(item['assignment_gap'] == 0 for item in evidence.values()))

    def test_alignment_respects_branch_inversion_and_block_order(self):
        rows = []
        for entry, inverted in ((0x1000, False), (0x2000, True)):
            base, next_site, last = (f'{entry + offset:08x}' for offset in (0, 4, 8))
            ops = [op('CBRANCH', f'ram:{entry+8:x}:8', 'register:108:1'),
                   op('COPY', 'const:2:8' if inverted else 'const:1:8', output='register:4000:8'),
                   op('COPY', 'const:1:8' if inverted else 'const:2:8', output='register:4000:8')]
            row = record(base, ops)
            row['instructions'][0][1] = 'b.ne' if inverted else 'b.eq'
            row['blocks'] = [[base, [[base, base]], [['FALL_THROUGH', base, next_site], ['CONDITIONAL_JUMP', base, last]]],
                             [next_site, [[next_site, next_site]], []], [last, [[last, last]], []]]
            rows.append(row)
        evidence = blocks.align(*rows)
        self.assertEqual(evidence['sites']['00001004'], '00002008')
        self.assertEqual(evidence['cfg_coverage'], [1.0, 1.0])
        self.assertEqual(evidence['verified_branch_inversions'], [('00001000', '00002000')])

    def test_entry_evidence_requires_references_and_complete_search(self):
        old_graph = defaultdict(set, {'a': {'old'}, 'b': {'old'}})
        incoming = defaultdict(set, old={'a', 'b'})
        new_graph = defaultdict(set)
        complete = {'keys': 1, 'candidate_functions': 0}
        caller = {'refs': [['00001000', '00002000', 'CALL', 'ANALYSIS', 'old', None, None]]}
        missing = {'index_boundary_verification': 'ranges_match', 'unresolved': 0}
        for side in (0, 1):
            shapes = ({'old': ('available',)}, {})
            graph = (old_graph, incoming, new_graph, defaultdict(set))
            maps = ({'a': 'x', 'b': 'y'}, {'x': 'a', 'y': 'b'})
            if side == 1:
                shapes, graph, maps = shapes[::-1], graph[2:] + graph[:2], maps[::-1]
            for scope, expected in ((complete, ('deletion_within_inspected_scope', 'addition_within_inspected_scope')[side]),
                                    (complete | {'truncated': True}, 'unmatched')):
                kind, proof = instruction_matcher.entry_evidence(side, 'old', scope, shapes, graph, maps,
                    lambda _, address: missing if address == 'old' else caller, [('unresolved', [], {})])
                self.assertEqual(kind, expected)
                self.assertEqual(len(proof['reference_witnesses']), 2)

    def test_structural_promotion_requires_strict_operands_and_anchors(self):
        left, right = '00001111', '00002222'
        start = [op('COPY', 'const:5:8', output='register:8:8')] * 24
        rows = {(0,left): record(left, start), (1,right): record(right, start)}
        shapes = [{left: ('available', 'shape', 24, '', 'graph')},
                  {right: ('available', 'shape', 24, '', 'graph')}]
        known = {'a': ('x', 'symbol', {}), 'b': ('y', 'symbol', {})}
        graphs = [defaultdict(set, {left:{'a','b'}}), defaultdict(set),
                  defaultdict(set, {right:{'x','y'}}), defaultdict(set)]
        hits, _, _ = tracking_pair.refine(known, shapes, graphs, lambda s, a: rows[s,a], set())
        self.assertEqual(hits[left][0], right)
        rows[1,right] = record(right, [op('COPY', 'const:6:8', output='register:8:8')] * 24)
        hits, review, _ = tracking_pair.refine(known, shapes, graphs, lambda s, a: rows[s,a], set())
        self.assertFalse(hits)
        self.assertEqual(review[0][2], 'structural_candidate')

    def test_followup_rounds_require_independent_initial_support(self):
        left = ['00001000','00001004','00001008','0000100c']
        right = ['00002000','00002004','00002008','0000200c']
        shapes = tuple({a: ('available', str(i), 24, '', 'graph') for i,a in enumerate(items)}
                       for items in (left, right))
        graph = []
        for items, seeds in ((left, ('a','b')), (right, ('x','y'))):
            outgoing = defaultdict(set, {items[0]: set(seeds), items[1]: {seeds[0],items[0]},
                                          items[2]: {items[0],items[1]}})
            incoming = defaultdict(set)
            for address, targets in outgoing.items():
                for target in targets:
                    incoming[target].add(address)
            graph.extend([outgoing, incoming])
        hits, review, stats = tracking_pair.refine({'a': ('x','symbol',{}),'b': ('y','symbol',{})}, shapes, graph,
            lambda side, address: record(address,[op('COPY','const:1:8',output='register:8:8')]*24), set())
        self.assertEqual([round['accepted'] for round in stats['rounds']], [1, 1, 0])
        self.assertEqual(hits[left[1]][2]['round'], 2)
        self.assertNotIn(left[2], hits)
        self.assertEqual({row[0] for row in review}, set(left[2:]))

    def test_structure_release_archive_rejects_wrong_provenance(self):
        with tempfile.TemporaryDirectory() as temporary:
            root = Path(temporary)
            archive, metadata = root / 'structure.jsonl.gz', root / 'structure-metrics.json'
            header = {'type': 'program', 'schema': 1, 'sha256': 'a' * 64, 'analysis_revision': 'b' * 16}
            export(archive, header, [])
            proof = {'identity': {'sha256': header['sha256']}, 'extractor_sha256': 'expected'}
            write_json(metadata, {'source': proof, 'sha256': digest(archive), 'metrics': {}})
            package = root / 'sidecar.tar'
            with tarfile.open(package, 'w') as stream:
                for path in (archive, metadata):
                    stream.add(path, arcname=path.name)
            restored, _ = unpack(package, root / 'valid', proof)
            self.assertEqual(digest(restored), digest(archive))
            with self.assertRaisesRegex(ValueError, 'does not match'):
                unpack(package, root / 'invalid', proof | {'extractor_sha256': 'other'})

    def test_three_paths_conflicts_and_temporal_evidence(self):
        with closing(sqlite3.connect(':memory:')) as db:
            db.executescript(tracking.DDL)
            maps = {'0-1': {'a': 'b', 'e': 'f'}, '1-2': {'b': 'c', 'f': 'g'},
                    '0-2': {'a': 'c', 'e': 'different', 'gap': 'returns'}}
            db.executemany('INSERT INTO logic VALUES(?,?,?,?,?)', [
                ('0-1', 'a', 'b', 'logic_change_candidate', '{}'), ('1-2', 'b', 'c', 'logic_change_candidate', '{}'),
                ('0-2', 'a', 'c', 'no_difference_in_scope', '{}')])
            db.execute("INSERT INTO manual_decisions VALUES('0-2','e','different','accept','reviewed')")
            totals = tracking.reconcile(db, maps, 3)
            self.assertEqual(totals, {'consistent': 1, 'temporary_change_candidate': 1, 'conflict': 1, 'gap_candidate': 1})
            self.assertEqual(db.execute('SELECT COUNT(*) FROM conflict_edges').fetchone()[0], 3)
            self.assertEqual(db.execute("SELECT action FROM manual_decisions").fetchone()[0], 'accept')

    def test_integrated_replay_and_migration(self):
        with tempfile.TemporaryDirectory() as temporary, redirect_stdout(io.StringIO()):
            root = Path(temporary).resolve()
            repository = root / 'worktree'
            result_root = repository / 'research/comparisons/arm64-v8a'
            datasets, original, locations = [], [], []
            for i in range(4):
                cache = root / f'cache-{i}'
                cache.mkdir()
                binary, archive = cache / 'test.so', root / f'structure-{i}.gz'
                make_elf(binary, i + 1)
                sha = digest(binary)
                identity = {'version': f'15.7.{i+2}', 'architecture': 'arm64-v8a',
                            'analysis_revision': f'{i:016x}', 'sha256': sha, 'library': 'test.so'}
                write_json(cache / 'identity.json', identity)
                address = f'{0x10000+i*0x1000:08x}'
                row = record(address, [op('COPY', f'const:{i}:8', output='register:0:8')])
                fixed, same = [record(f'{int(address,16)+offset:08x}',
                                      [op('COPY', 'const:0:8', output='register:0:8')]) for offset in (4, 8)]
                fixed['refs'] = [[fixed['address'], f'{0x30000+4*i:08x}', 'READ', 'ANALYSIS', None, 'shared', 'int']]
                rows = [row, fixed, same]
                header = {'type': 'program', 'schema': 1, 'sha256': sha, 'language': 'AARCH64:LE:64:v8A',
                          'image_base': '00000000'}
                (cache / 'index.jsonl').write_text(structure.pack(header) + '\n', encoding='utf-8')
                with closing(connect(cache / 'cache.sqlite')) as db, db:
                    db.executemany('INSERT INTO functions(address,name,size,external,thunk,confidence,status,error,file)'
                                   ' VALUES(?,?,4,0,0,?,?,?,?)', ((entry['address'], 'entry', 'unreviewed',
                                       'cached', '', 'entry.c') for entry in rows))
                if i == 0:
                    export(archive, header, [row], complete=False)
                    with self.assertRaisesRegex(ValueError, 'Incomplete'):
                        structure.build_index(archive, cache, root / 'scratch')
                export(archive, header, rows)
                source = digest(cache / 'cache.sqlite')
                original.append((cache / 'cache.sqlite', source))
                datasets.append(tracking.load_dataset(cache, binary, archive))
                location = repository / 'research/reference' / reference_path(identity)
                locations.append((location, address))
                for entry in rows:
                    page = location / function_path(entry['address'])
                    page.parent.mkdir(parents=True, exist_ok=True)
                    page.write_text('# Entry\n\n## 関数情報\n\n疑似コード原本\n', encoding='utf-8-sig', newline='\n')
                (location / 'README.md').write_text('# 版資料\n\n## アドレス索引\n', encoding='utf-8-sig', newline='\n')
                write_json(location / 'manifest.json', identity | {'source_database_sha256': source})

            seeds = {}
            for i, j in ((0, 1), (1, 2), (0, 2), (2, 3), (1, 3)):
                pair = tracking.key(i, j)
                seed = seeds[pair] = root / (pair + '.sqlite')
                with closing(sqlite3.connect(seed)) as db, db:
                    db.executescript("""CREATE TABLE metadata(key,value); CREATE TABLE matches(old,new,reason,change,evidence);
                        CREATE TABLE candidates(old,new,rank,score,eligible,evidence); CREATE TABLE functions(side,address,review_reason);""")
                    data = {'quality_gate': 'passed_named_holdout', 'identities': {s: datasets[n]['identity']
                        for s,n in (('old',i),('new',j))}, 'sources': {'old': original[i][1], 'new': original[j][1]},
                        'decisions': [], 'validation': {'correct': 1, 'wrong': 0, 'abstained': 0}, 'coverage': []}
                    db.executemany('INSERT INTO metadata VALUES(?,?)', [(k, json.dumps(v)) for k, v in data.items()])
                    a, b = locations[i][1], locations[j][1]
                    for offset in (0, 4, 8):
                        first, second = (f'{int(x,16)+offset:08x}' for x in (a,b))
                        db.execute("INSERT INTO matches VALUES(?,?,'known',?,'{}')",
                                   (first, second, 'text_equal' if offset else 'different'))
                        db.executemany("INSERT INTO functions VALUES(?,?,'')", [('old',first),('new',second)])
            old, new = locations[0], locations[2]
            for current, peer, direction in ((old, new, 'next'), (new, old, 'previous')):
                identity = read_json(peer[0] / 'manifest.json')
                catalog = {'peer': identity, 'rows': [[current[1], peer[1], True]]}
                write_json(catalog_path(current[0], direction), catalog)
                render_links(current[0], direction, catalog)
            (new[0] / 'changes').mkdir()
            for name in ('README.md', new[1]+'.md'):
                (new[0] / 'changes' / name).write_text('old body diff')
            (new[0] / 'comparison.md').write_text('legacy')
            db = tracking.build(datasets[:3], root / 'out', pair_dbs=seeds)
            first = digest(db)
            self.assertEqual(tracking.build(datasets[:3], root / 'out', pair_dbs=seeds), db)
            self.assertEqual(digest(db), first)
            result = read_json(db.with_name('summary.json'))
            self.assertEqual(result['pairs']['0-1']['inspection'],
                             {'detailed': 2, 'forced_by_references': 1, 'skipped': 1})
            with structure.reader(db) as connection:
                outcomes = dict(connection.execute("SELECT old,status FROM logic WHERE pair='0-1'"))
            self.assertEqual(outcomes['00010004'], 'structure_or_reference_change')
            self.assertEqual(outcomes['00010008'], 'detail_skipped')
            destination = result_root / result['run']
            self.assertEqual(tracking.show(db, '15.7.2', old[1], 5)['function']['address'], old[1])
            temporarily_missing = locations[1][0] / function_path(locations[1][1])
            saved_page = temporarily_missing.read_bytes()
            temporarily_missing.unlink()
            with self.assertRaisesRegex(ValueError, 'link target is missing'):
                tracking_pages.render(db, repository, destination, 'manifest.json')
            self.assertTrue((new[0] / 'comparison.md').is_file())
            self.assertFalse(destination.exists())
            temporarily_missing.write_bytes(saved_page)
            original_url = 'https://example.invalid/original-commit/'
            tracking_pages.render(db, repository, destination, 'manifest.json', original_url)
            self.assertTrue((destination / '0-1/high-0001.md').is_file())
            self.assertEqual(tracking_pages.render(db, repository, destination, 'manifest.json',
                                                  'https://example.invalid/new-commit/')['run'], result['run'])
            tracking_pages.attach(repository, destination, result)
            self.assertFalse((new[0] / 'comparison.md').exists())
            self.assertFalse((new[0] / 'changes/README.md').exists())
            target_page = new[0] / function_path(new[1])
            self.assertTrue(target_page.read_text(encoding='utf-8-sig').endswith('疑似コード原本\n'))
            links = function_comparison_links(target_page)
            self.assertEqual(list(links), ['v15.7.2 → v15.7.3', 'v15.7.3 → v15.7.4'])
            for value in links.values():
                route, marker = value.removesuffix(')').split('#')
                self.assertIn(f'<a id="{marker}"></a>', (target_page.parent / route).read_text(encoding='utf-8-sig'))
            mixed = copy.deepcopy(comparison_catalog(new[0]))
            addresses = list(mixed['rows'])
            mixed['rows'][addresses[1]][0]['older'] = mixed['rows'][addresses[1]][0]['older'] | {'analysis_revision': 'f' * 16}
            retained = valid_comparison_entries(mixed, new[0], repository)
            self.assertFalse(any(entry['older']['analysis_revision'] == 'f' * 16 for entries in retained.values() for entry in entries))
            after = target_page.read_bytes()
            tracking_pages.attach(repository, destination, result)
            self.assertEqual(target_page.read_bytes(), after)
            regenerated = root / 'regenerated'
            regenerated_page = regenerated / function_path(new[1])
            regenerated_page.parent.mkdir(parents=True)
            regenerated_page.write_text('# Entry\n\n## 関数情報\n\n再生成した原本\n', encoding='utf-8-sig')
            write_json(regenerated / 'manifest.json', read_json(new[0] / 'manifest.json'))
            carry_function_comparisons(new[0], regenerated, repository)
            self.assertEqual(function_comparison_links(regenerated_page), links)
            write_json(regenerated / 'manifest.json', read_json(new[0] / 'manifest.json') | {'analysis_revision': 'f' * 16})
            regenerated_page.write_text('# Entry\n\n## 関数情報\n\n再生成した原本\n', encoding='utf-8-sig')
            carry_function_comparisons(new[0], regenerated, repository)
            self.assertEqual(function_comparison_links(regenerated_page), {})
            self.assertTrue(regenerated_page.read_text(encoding='utf-8-sig').endswith('再生成した原本\n'))
            self.assertEqual(read_json(new[0] / 'manifest.json')['tracking_format'], 2)
            for page in destination.rglob('*.md'):
                for link in re.findall(r'\]\(([^)]+)\)', page.read_text(encoding='utf-8-sig')):
                    target = repository / link.removeprefix(original_url) if link.startswith(original_url) else page.parent / link
                    self.assertTrue(target.is_file(), link)
            second = tracking.build(datasets[1:], root / 'out', pair_dbs={
                '0-1': seeds['1-2'], '1-2': seeds['2-3'], '0-2': seeds['1-3']})
            second_result = read_json(second.with_name('summary.json'))
            second_destination = result_root / second_result['run']
            tracking_pages.render(second, repository, second_destination, 'manifest.json', original_url)
            tracking_pages.attach(repository, second_destination, second_result)
            self.assertEqual(list(function_comparison_links(target_page)), ['v15.7.2 → v15.7.3', 'v15.7.3 → v15.7.4', 'v15.7.4 → v15.7.5'])
            middle_manifest = locations[1][0] / 'manifest.json'
            saved_middle = read_json(middle_manifest)
            write_json(middle_manifest, saved_middle | {'analysis_revision': 'f' * 16})
            tracking_pages.refresh_affected_navigation(repository, second_result)
            self.assertEqual(list(function_comparison_links(target_page)), ['v15.7.4 → v15.7.5'])
            write_json(middle_manifest, saved_middle)
            trace = tracking.trace([db, second], '15.7.2', old[1], 10)
            self.assertEqual(len(trace['nodes']), 4)
            two = tracking.build(datasets[:2], root / 'out', pair_dbs=seeds)
            self.assertEqual(read_json(two.with_name('summary.json'))['cycles'], {})
            self.assertEqual([digest(p) for p, _ in original], [sha for _, sha in original])

    @unittest.skipUnless(os.environ.get('KBCS_TEST_GHIDRA') == '1', 'Ghidra fixture explicitly enabled')
    def test_ghidra_elf_fixture(self):
        root = LOCAL / 'cache'
        root.mkdir(parents=True, exist_ok=True)
        with tempfile.TemporaryDirectory(prefix='tracking-fixture-') as temporary:
            config = {'ghidra_home': os.environ['GHIDRA_HOME'], 'java_home': os.environ['JAVA_HOME'],
                      'program': 'fixture.so', 'heap': '512M', 'analysis_timeout_seconds': 60,
                      'batch_timeout_seconds': 150}
            rows = []
            for i in range(2):
                folder = Path(temporary) / str(i)
                folder.mkdir()
                binary = folder / 'fixture.so'
                make_elf(binary, 5+i, write=i == 0)
                headless(config | {'sha256': digest(binary)}, folder, binary, 'structure', 0, initialize=True)
                with gzip.open(folder / 'structure.jsonl.gz', 'rt', encoding='utf-8') as stream:
                    records = [json.loads(line) for line in stream]
                self.assertEqual(records[0]['sha256'], digest(binary))
                self.assertIs(records[0]['disassembly'], True)
                self.assertEqual(records[-1]['functions'], len(records)-2)
                function = max(records[1:-1], key=lambda row: row['instruction_count'])
                self.assertGreater(len(function['blocks']), 1)
                self.assertIn('cmp', listing(function, function['body_bytes']))
                raw_binary = binary.read_bytes()
                for entry in records[1:-1]:
                    for instruction, display in zip(entry['instructions'], entry['disassembly']):
                        site = int(instruction[0], 16)
                        machine = bytes.fromhex(display[0])
                        self.assertEqual(machine, raw_binary[4096+site-0x10000:4096+site-0x10000+len(machine)])
                        self.assertIsInstance(display[2], list)
                captured = [sample for entry in records[1:-1] for sample in entry['reference_details'] if sample.get('bytes')]
                self.assertTrue(any(sample['bytes'] == '44332211' for sample in captured))
                if i == 0:
                    headless(config | {'sha256': digest(binary)}, folder, binary, 'index', 0)
                    with (folder / 'index.jsonl').open(encoding='utf-8-sig') as source:
                        indexed = [json.loads(line) for line in source]
                    self.assertEqual(indexed[0]['program_id'], records[0]['program_id'])
                    original_ranges = {entry['address']: entry['ranges'] for entry in indexed if entry['type'] == 'function'}
                    for entry in records[1:-1]:
                        self.assertEqual(original_ranges[entry['address']], entry['ranges'])
                rows.append(function)
            changes = logic.compare(*rows, {}, {})
            self.assertTrue({'constant', 'branch_condition_or_target', 'memory_write_count', 'call'} <= set(changes['changes']))


if __name__ == '__main__':
    unittest.main()
