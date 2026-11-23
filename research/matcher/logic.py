from collections import Counter, defaultdict
from itertools import groupby, islice

from matcher import effects
from matcher.structure import ADDRESS, cfg, indexed_refs, operations


CALLS = {'CALL', 'CALLIND'}
BRANCHES = {'BRANCH', 'BRANCHIND', 'CBRANCH', 'RETURN'}
COMPARE = {'INT_EQUAL', 'INT_NOTEQUAL', 'INT_LESS', 'INT_LESSEQUAL', 'INT_SLESS', 'INT_SLESSEQUAL',
           'FLOAT_EQUAL', 'FLOAT_NOTEQUAL', 'FLOAT_LESS', 'FLOAT_LESSEQUAL'}
MAX_DETAIL = 24


def args_of(op):
    return (op[1], *op[2])


def refs_signature(row, targets, positions=None):
    entry = int(row['address'], 16)
    body = [(int(a, 16), int(b, 16)) for a, b in row['ranges']]
    result, calls = Counter(), set()
    unknown = row.get('unresolved', 0)
    for site, target, kind, _, callee, name, datatype in row['refs']:
        position = positions.get(site, 'unmatched:' + site) if positions is not None else int(site, 16) - entry
        if 'CALL' in kind or 'JUMP' in kind:
            if 'CALL' in kind:
                calls.add(site)
            if callee in targets:
                key = ('mapped_function', targets[callee])
            elif 'JUMP' in kind and ADDRESS.fullmatch(target) and any(a <= int(target, 16) <= b for a, b in body):
                key = ('local_branch', positions.get(target, 'unmatched:' + target) if positions is not None else int(target, 16) - entry)
            else:
                key = ('unresolved_target', target)
                unknown += 1
        else:
            # シンボル名が等しくても異なるデータアドレスは保持する。
            key = ('storage', target, name, datatype)
            unknown += int(not target)
        result[(position, kind, key)] += 1
    for site, kind in row.get('call_positions', ()):
        if site not in calls:
            position = positions.get(site, 'unmatched:' + site) if positions is not None else int(site, 16)-entry
            result[(position, kind, ('unresolved_target', None))] += 1
            unknown += 1
    return result, unknown


def reference_comparison(old, new, old_targets, new_targets, *, positions=None):
    left, left_unknown = refs_signature(old, old_targets, positions)
    right, right_unknown = refs_signature(new, new_targets,
        {site: site for site, *_ in new['instructions']} if positions is not None and 'instructions' in new else None)
    removed, added = left - right, right - left
    unknown = [left_unknown, right_unknown]
    state = 'changed' if removed or added else 'unresolved' if any(unknown) else 'equal'
    kinds = Counter(kind for _, kind, _ in removed.keys() | added.keys())
    # 位置差とは別に、既知の宛先集合・多重度が変わったかを判定する。
    def endpoints(rows, predicate):
        counts = Counter()
        for (_, kind, key), count in rows.items():
            if predicate(kind, key):
                counts[(kind, key)] += count
        return counts
    calls = lambda kind, key: ('CALL' in kind or 'JUMP' in kind) and key[0] == 'mapped_function'
    def writes(rows):
        counts = Counter()
        for (_, kind, key), count in rows.items():
            if 'WRITE' in kind and key[0] == 'storage':
                counts[(kind, key[1])] += count
        return counts
    old_calls, new_calls = defaultdict(set), defaultdict(set)
    for rows, grouped in ((left, old_calls), (right, new_calls)):
        for (site, kind, target), count in rows.items():
            if calls(kind, target):
                grouped[site].add(target)
    retargeted = sum(old_calls[site] != new_calls[site] for site in old_calls.keys() & new_calls.keys())
    return {'state': state, 'unknown': unknown, 'counts': [left.total(), right.total()],
            'removed': list(islice(removed.elements(), 16)), 'added': list(islice(added.elements(), 16)),
            'changed_kinds': dict(kinds), 'mapped_call_target_changed': bool(retargeted),
            'mapped_call_target_changes': retargeted, 'mapped_call_inventory_changed': endpoints(left, calls) != endpoints(right, calls),
            'write_reference_changed': bool(kinds) and writes(left) != writes(right)}


def data_contents(old, new, positions):
    groups = []
    for row in (old, new):
        items = defaultdict(list)
        for item in row.get('reference_details', ()):
            if item.get('resolution') == 'defined_data':
                items[item['source']].append(item)
        groups.append(items)
    changes, checked, limited = [], 0, 0
    for site, rows in groups[0].items():
        others = groups[1].get(positions.get(site), ())
        if len(rows) != 1 or len(others) != 1 or 'bytes' not in rows[0] or 'bytes' not in others[0]:
            limited += len(rows)
            continue
        a, b = rows[0], others[0]
        checked += 1
        if any(a.get(key) != b.get(key) for key in ('bytes', 'size', 'offset', 'capture_bytes')):
            changes.append({'old': a, 'new': b, 'scope': 'captured_static_bytes_at_corresponding_instruction'})
        limited += int(a.get('capture_state') != 'complete_static_bytes' or b.get('capture_state') != 'complete_static_bytes')
    return {'checked': checked, 'changed': changes, 'limited': limited, 'runtime_values': 'unchecked'}


def explain_ops(before, after):
    counts = [Counter(op[0] for op in seq) for seq in (before, after)]
    tags = set()
    if before != after and Counter(before) == Counter(after):
        tags.add('operation_order')
    for label, names in (('control_flow', BRANCHES), ('call', CALLS), ('memory_write', {'STORE'}),
                         ('memory_read', {'LOAD'}), ('comparison', COMPARE)):
        old, new = ([op for op in seq if op[0] in names] for seq in (before, after))
        if old != new:
            tags.add(label)
        if any(counts[0][name] != counts[1][name] for name in names):
            tags.add(label + '_count')
    constants = [Counter(value for op in seq for value in op[2] if value and value.startswith('const:'))
                 for seq in (before, after)]
    if constants[0] != constants[1]:
        tags.add('constant')
    if [op[0] for op in before] != [op[0] for op in after]:
        tags.add('operation_sequence')
    if [args_of(op) for op in before] != [args_of(op) for op in after]:
        tags.add('operands_and_dependencies')
    return tags


def relaxed_registers(ops):
    return [(name, tuple('register:' + value.rsplit(':', 1)[1] if value and value.startswith('register:') else value
                         for value in args_of(op))) for op in ops for name in (op[0],)]


def conditions(sequence):
    result = []
    for _, rows in groupby(sequence, key=lambda item: item[0]):
        operations_at_site = tuple(op for _, op in rows)
        if any(op[0] == 'CBRANCH' for op in operations_at_site):
            result.append(operations_at_site)
    return result


def local_dependencies(row, sequence):
    # 基本ブロック内の同一記憶域だけを追い、別ブロックや別サイズの別名は推測しない。
    block_at = effects.block_lookup(row)
    registers, temporaries, result = {}, {}, []
    last_block, last_site = None, None
    for index, (site, (opcode, output, inputs)) in enumerate(sequence):
        block = block_at(site) or site
        if block != last_block:
            registers.clear()
        if site != last_site:
            temporaries.clear()
        last_block, last_site = block, site
        dependencies = []
        for value in inputs:
            if value and value.startswith(('tmp:', 'register:')):
                source = temporaries.get(value) if value.startswith('tmp:') else registers.get(value, (None, None))[1]
                dependencies.append(index - source if source is not None else ('live', value))
        result.append(tuple(dependencies))
        if opcode in CALLS:
            registers.clear()
            temporaries.clear()
        if output and output.startswith('tmp:'):
            temporaries[output] = index
        elif output and output.startswith('register:'):
            effects.write_register(registers, output, effects.register(output), index)
    return result


def relocation_shape(row, targets, *, raw=None):
    # アドレス生成命令と、Ghidraの参照先と一致した直後のオフセットを区別する。
    # この投影は差分の分類専用。実際のオペランドを置き換えて等価とは判定しない。
    projected = iter(raw if raw is not None else operations(row, targets, search=True))
    refs = indexed_refs(row)
    function_pointers = {int(target, 16): targets[callee] for _, target, _, _, callee, _, _ in row['refs']
                         if raw is not None and target == callee and callee in targets and ADDRESS.fullmatch(target)}
    result = []
    previous = {}
    block_starts = {block[0] for block in row['blocks']}
    for site, mnemonic, flow, raw in row['instructions']:
        state = {} if site in block_starts else previous.copy()
        for opcode, output, inputs in raw:
            _, (name, target, args) = next(projected)
            values = list(args)
            pointer = None
            if mnemonic.lower() in ('adr', 'adrp') and opcode == 'COPY' and inputs[0].startswith('const:'):
                _, offset, width = inputs[0].split(':')
                pointer = int(offset, 16)
                known = function_pointers.get(pointer)
                values[0] = f'function_pointer:{known}:{width}' if known else f'pc_relative_address:{width}'
            elif (mnemonic.lower() in ('bl', 'blr') and 'CALL' in flow and opcode == 'INT_ADD'
                  and inputs[0] == f'const:{int(site, 16):x}:8' and inputs[1] == 'const:4:8'):
                values[0] = 'call_return_pc:8'
            elif opcode == 'INT_ADD' and len(inputs) == 2 and inputs[0] in state and inputs[1].startswith('const:'):
                _, offset, width = inputs[1].split(':')
                pointer = state[inputs[0]] + int(offset, 16)
                if pointer in refs.get(site, {}):
                    values[1] = f'verified_pc_relative_offset:{width}'
            if output:
                state.pop(output, None)
                if pointer is not None:
                    state[output] = pointer
            result.append((name, target, tuple(values)))
        # 一命令分だけレジスタを引き継ぎ、間接的なデータ推測を広げない。
        previous = {output: state[output] for _, output, _ in raw if output in state and output.startswith('register:')}
    return result


def grade(record, old, new, left, right, targets, abi):
    record['confidence'] = 'limited' if record['warnings'] else 'observed'
    impact = record.get('impact', {})
    significant = {key: count for key, count in impact.items() if not key.startswith('unresolved_')}
    if impact:
        before = relocation_shape(old, targets[0], raw=left)
        after = relocation_shape(new, targets[1], raw=right)
        if before == after:
            significant = {}
        elif before != [op for _, op in left] or after != [op for _, op in right]:
            first = [(site, op) for (site, _), op in zip(left, before)]
            second = [(site, op) for (site, _), op in zip(right, after)]
            significant, _ = effects.changes(old, new, first, second, abi, include_evidence=False,
                                             positions=record.get('_positions'))
        record['priority_impact'] = significant
        record['address_sensitive_impact'] = {kind: amount - significant.get(kind, 0) for kind, amount in impact.items()
                                              if amount > significant.get(kind, 0)}
    tags = set(record['changes'])
    refs = record['references']
    if significant or refs['mapped_call_target_changed'] or tags & {
            'cfg_edge_inventory', 'memory_write_count', 'call_count', 'control_flow_count'}:
        record['importance'] = 'critical'
        record['confidence'] = 'limited' if record['warnings'] or any(
            item['confidence'] == 'limited' for item in record.get('effects', ()) if item['kind'] in significant
        ) else 'bounded' if significant else 'observed'
    elif record.get('data_contents', {}).get('changed') or record['cfg_changed'] or record['reference_changed'] or (
            record['status'] == 'logic_change_candidate' and tags & {'constant', 'comparison', 'operation_order', 'operation_sequence'}
            and not record.get('address_sensitive_impact')):
        record['importance'] = 'high'
        if record.get('address_sensitive_impact'):
            record['confidence'] = 'limited'
    elif record['status'] in ('no_difference_in_scope', 'detail_skipped'):
        record['importance'] = 'none'
    else:
        record['importance'] = 'review'
        if record.get('address_sensitive_impact'):
            record['confidence'] = 'limited'


def skipped(shapes, references):
    return {'status': 'detail_skipped', 'scope': 'instruction_bytes_cfg_and_recorded_references',
            'operations': [shape[2] for shape in shapes], 'machine_equal': True, 'cfg_equal': True,
            'reference_state': 'equal', 'references': references, 'importance': 'none',
            'confidence': 'observed', 'equivalence': 'unproven',
            'unchecked': ['raw_pcode_operands', 'reaching_definitions', 'runtime_behavior']}


def instruction_bytes(row):
    return {instruction[0]: display[0] for instruction, display in zip(row['instructions'], row.get('disassembly', ()))}


def compare(old, new, old_targets, new_targets, *, abi=False, alignment=None, detail_limit=MAX_DETAIL):
    from matcher import blocks
    old_cfg, new_cfg = cfg(old), cfg(new)
    graph = old_cfg != new_cfg
    left, right = operations(old, old_targets), operations(new, new_targets)
    a, b = [op for _, op in left], [op for _, op in right]
    alignment = alignment or blocks.align(old, new, old_targets, new_targets)
    positions = alignment['sites']
    refs = reference_comparison(old, new, old_targets, new_targets, positions=positions)
    ref_changed = refs['state'] == 'changed'
    machine = old['bytes_sha256'] != new['bytes_sha256']
    warnings = []
    if any(refs['unknown']):
        warnings.append('unresolved_reference_or_flow')
    if old['instruction_bytes'] != old['body_bytes'] or new['instruction_bytes'] != new['body_bytes']:
        warnings.append('incomplete_instruction_coverage')
    missing = [sum(site not in seen for site, *_ in row['instructions'])
               for row, seen in ((old, positions), (new, set(positions.values())))]
    incomplete = any(missing) or bool(alignment['truncated']) or 'incomplete_instruction_coverage' in warnings
    if incomplete:
        warnings.append('instruction_positions_unresolved')
    result = {'scope': 'raw_instruction_pcode', 'operations': [len(a), len(b)], 'cfg_changed': graph,
              'machine_changed': machine, 'machine_equal': not machine, 'cfg_equal': not graph,
              'reference_changed': ref_changed, 'reference_state': refs['state'], 'references': refs,
              'equivalence': 'unproven', 'unchecked': ['cross_block_values', 'runtime_behavior'],
              'warnings': warnings,
              'changes': [], 'details': [], 'detail_truncated': False}
    result['normalization_basis'] = ['recorded_reference_targets', 'pc_relative_address_generation', 'matched_instruction_sites']
    result['instruction_correspondence'] = {k: alignment[k] for k in
        ('coverage', 'instruction_counts', 'cfg_coverage', 'unexplained_critical', 'truncated', 'graph_basis')}
    result['instruction_correspondence']['unmapped'] = missing
    result['instruction_correspondence']['block_counts'] = [len(old['blocks']), len(new['blocks'])]
    result['instruction_correspondence']['mapped_blocks'] = len(alignment.get('blocks', ()))
    result['data_contents'] = data_contents(old, new, positions)
    result['verified_branch_inversions'] = alignment['verified_branch_inversions']
    result['_positions'] = positions
    if abi:
        result['unchecked'].extend(['actual_call_signature', 'stack_and_vector_arguments'])
    if graph:
        result['cfg'] = {'blocks': [len(old_cfg), len(new_cfg)], 'ranges': [old['ranges'], new['ranges']],
                         'changed_blocks': [[index, left, right] for index, (left, right) in
                             islice(((index, pair) for index, pair in enumerate(zip(old_cfg, new_cfg)) if pair[0] != pair[1]), 16)]}
    flow_shape_changed = graph and Counter(kind for edges in old_cfg for kind, _ in edges) != Counter(
        kind for edges in new_cfg for kind, _ in edges)
    if flow_shape_changed:
        result['changes'].append('cfg_edge_inventory')
    if a == b:
        if machine:
            before, after = instruction_bytes(old), instruction_bytes(new)
            different = ({'old': [x, before[x]], 'new': [y, after[y]]} for x, y in positions.items()
                         if x in before and y in after and before[x] != after[y])
            result['machine_sample'] = list(islice(different, 3))
        result['status'] = 'data_change_candidate' if result['data_contents']['changed'] else 'structure_or_reference_change' if graph or ref_changed else (
            'alignment_unresolved' if incomplete else 'reference_unresolved' if warnings
            else 'machine_only_observed' if machine else 'no_difference_in_scope')
        grade(result, old, new, left, right, (old_targets, new_targets), abi)
        result.pop('_positions')
        return result
    tags = explain_ops(a, b) | set(result['changes'])
    if conditions(left) != conditions(right):
        tags.add('branch_condition_or_target')
    old_dependencies, new_dependencies = local_dependencies(old, left), local_dependencies(new, right)
    if old_dependencies != new_dependencies:
        tags.add('local_def_use')
    known_calls = [[op[2][0] for op in ops if op[0] == 'CALL' and op[2][0].startswith('callee:')]
                   for ops in (a, b)]
    relocation = known_calls[0] == known_calls[1] and not graph and (
        relocation_shape(old, old_targets) == relocation_shape(new, new_targets))
    impact, effects_found = effects.changes(old, new, left, right, abi, positions=positions)
    if relocation:
        result['status'] = 'alignment_unresolved' if incomplete else 'reference_sensitive'
    elif relaxed_registers(a) == relaxed_registers(b):
        local_renaming = (not impact and not graph and not ref_changed and not warnings and
                          old_dependencies == new_dependencies and
                          any(isinstance(source, int) for values in old_dependencies for source in values))
        result['status'] = 'register_renaming_candidate' if local_renaming else 'register_sensitive'
    else:
        result['status'] = 'logic_change_candidate'
    result['impact'] = impact
    result['effects'] = effects_found
    if incomplete and not (any(not key.startswith('unresolved_') for key in impact)
                           or refs['mapped_call_target_changed'] or result['data_contents']['changed']):
        result['status'] = 'alignment_unresolved'
    tags.update(impact)
    grouped = []
    for sequence in (left, right):
        by_site = defaultdict(list)
        for site, op in sequence:
            by_site[site].append((site, op))
        grouped.append(by_site)
    important = {item[side]['site'] for item in effects_found for side in ('old', 'new') if item.get(side)}
    changes = [(site, positions.get(site)) for site in grouped[0]
               if [op for _, op in grouped[0][site]] != [op for _, op in grouped[1].get(positions.get(site), ())]]
    mapped = set(positions.values())
    changes.extend((None, site) for site in grouped[1] if site not in mapped)
    changes.sort(key=lambda item: (not bool(set(item) & important), item[0] or item[1]))
    listings = (instruction_bytes(old), instruction_bytes(new)) if changes else ({}, {})
    for old_site, new_site in changes:
        if detail_limit is not None and len(result['details']) == detail_limit:
            result['detail_truncated'] = True
            break
        first, second = grouped[0].get(old_site, ()), grouped[1].get(new_site, ())
        local = explain_ops([op for _, op in first], [op for _, op in second])
        tags.update(local)
        limit = None if detail_limit is None else 6
        result['details'].append({'old': list(first[:limit]), 'new': list(second[:limit]),
                                  'counts': [len(first), len(second)], 'types': sorted(local),
                                  'sites': [old_site, new_site],
                                  'machine_bytes': [listings[0].get(old_site), listings[1].get(new_site)],
                                  'correspondence': 'mapped_instruction' if old_site and new_site else 'unmatched_instruction'})
        result['detail_truncated'] |= limit is not None and max(len(first), len(second)) > limit
    result['changes'] = sorted(tags)
    grade(result, old, new, left, right, (old_targets, new_targets), abi)
    result.pop('_positions')
    return result


def fragments(row):
    # 断片検索でのみ割当レジスタと参照先の移動を許容する。
    ops = [op for _, op in operations(row, search=True)]
    tokens = relaxed_registers(ops)
    return {tuple(tokens[i:i + 6]) for i in range(len(tokens) - 5)
            if len({token[0] for token in tokens[i:i + 6]}) >= 4}
