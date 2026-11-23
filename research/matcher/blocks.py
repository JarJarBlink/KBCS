import json
from collections import Counter, defaultdict
from difflib import SequenceMatcher
from functools import lru_cache
from pathlib import Path

from matcher.effects import block_lookup
from matcher.structure import cfg, fingerprint, operations


POLICY_PATH = Path(__file__).with_name('matching-policy.json')
POLICY = json.loads(POLICY_PATH.read_text(encoding='utf-8-sig'))


def profile(row, targets=None, *, search=False):
    # 探索用の投影。原命令・定数・符号幅は構造DBへ別に保全する。
    from matcher.logic import relocation_shape
    targets = targets or {}
    if search:
        targets = {ref[4]: 'resolved_function' for ref in row['refs'] if ref[4]}
    raw = operations(row, targets)
    projected = iter(relocation_shape(row, targets, raw=raw))
    lookup = block_lookup(row)
    grouped, tokens, definitions = defaultdict(list), [], {}
    last_block = None
    for number, (site, mnemonic, flow, pcode) in enumerate(row['instructions']):
        block = lookup(site) or site
        if block != last_block:
            definitions = {}
        last_block = block
        temporary, local, reasons = {}, [], set()

        def value(item):
            if item is None:
                return None
            if not item.startswith(('tmp:', 'register:', 'local:')):
                return item
            space, offset, width = item.rsplit(':', 2)
            if space == 'tmp':
                return temporary.get(item, item)
            if space == 'register':
                if item in definitions:
                    return definitions[item]
                reasons.add('live_register_role_preserved')
            if space == 'local':
                return 'local_target:' + width
            return item

        for _ in pcode:
            name, output, inputs = next(projected)
            args = tuple(value(item) for item in inputs)
            if output and output.startswith('tmp:'):
                target = 't' + str(len(temporary)) + ':' + output.rsplit(':', 1)[1]
                temporary[output] = target
            elif output and output.startswith('register:'):
                _, offset, width = output.split(':')
                number_register = int(offset, 16)
                # 引数・戻り・SP/LR・フラグの役割を消さない。局所GPR定義だけを改名する。
                if 0x4040 <= number_register < 0x40e8:
                    target = f'local_register:{width}'
                else:
                    target = output
                for previous in list(definitions):
                    _, old_offset, old_width = previous.split(':')
                    if number_register < int(old_offset, 16) + int(old_width) and int(old_offset, 16) < number_register + int(width):
                        definitions.pop(previous)
            else:
                target = output
            local.append((name, target, args))
            if output and output.startswith(('register:', 'tmp:')):
                width = output.rsplit(':', 1)[1]
                definition = 'definition:' + fingerprint([name, width, args]) + ':' + width
                if output.startswith('tmp:'):
                    temporary[output] = definition
                else:
                    definitions[output] = definition
            if name in ('CALL', 'CALLIND'):
                definitions.clear()
        text = row.get('disassembly', ())
        opaque = text[number][1] if number < len(text) and not pcode else mnemonic if not pcode else ''
        token = fingerprint([opaque, local])
        tokens.append(token)
        grouped[block].append(number)
    return {'tokens': tokens, 'sites': [item[0] for item in row['instructions']],
            'blocks': dict(grouped), 'row': row}


def search_keys(row):
    source = profile(row, search=True)
    tokens = source['tokens']
    keys = {('block', fingerprint([tokens[i] for i in indices]))
            for indices in source['blocks'].values() if len(indices) >= POLICY['minimum_block_instructions']}
    width = POLICY['window_instructions']
    windows = [('window', fingerprint(tokens[i:i + width])) for i in range(len(tokens) - width + 1)]
    # 全域を均等に採る。先頭だけの打切りで後半の移動を見落とさない。
    step = max(1, (len(windows) + POLICY['maximum_window_keys'] - 1) // POLICY['maximum_window_keys'])
    return sorted(keys | set(windows[::step]))[:POLICY['maximum_search_keys']]


def align(old, new, old_targets=None, new_targets=None, *, profiles=None):
    left, right = profiles or (profile(old, old_targets), profile(new, new_targets))
    blocks = (left['blocks'], right['blocks'])
    tokens = (left['tokens'], right['tokens'])
    edges, incoming = [], []
    for row in (old, new):
        outgoing, parents = defaultdict(set), defaultdict(set)
        for block, _, flows in row['blocks']:
            for kind, _, target in flows:
                outgoing[block].add((kind, target))
                parents[target].add((kind, block))
        edges.append(outgoing)
        incoming.append(parents)
    hashes = []
    for side in (0, 1):
        grouped = defaultdict(list)
        for block, indices in blocks[side].items():
            grouped[tuple(tokens[side][i] for i in indices)].append(block)
        hashes.append(grouped)
    paired = {items[0]: hashes[1][key][0] for key, items in hashes[0].items()
              if len(items) == len(hashes[1].get(key, ())) == 1}
    graph_basis = 'unique_blocks_and_cfg_neighbors'
    ordered_blocks = [sorted(source, key=lambda item: int(item, 16)) for source in blocks]
    ordered_map = dict(zip(*ordered_blocks))
    if (len(ordered_blocks[0]) == len(ordered_blocks[1]) and cfg(old) == cfg(new)
            and all(ordered_map.get(a) == b for a, b in paired.items())):
        # 同じ全CFGの対応を命令で再検査する。番地順だけで採用はしない。
        paired = ordered_map
        graph_basis = 'full_cfg_isomorphism_supported_by_unique_blocks'
    # 一意なブロックからCFG近傍へ広げる。順序や番地差だけでは対応を作らない。
    for _ in range(POLICY['cfg_rounds']):
        proposals, reverse = defaultdict(set), defaultdict(set)
        used = set(paired.values())
        for a, b in paired.items():
            for first, second in ((edges, edges), (incoming, incoming)):
                one = [(kind, target) for kind, target in first[0][a] if target in blocks[0] and target not in paired]
                two = [(kind, target) for kind, target in second[1][b] if target in blocks[1] and target not in used]
                branch_kinds = {'CONDITIONAL_JUMP', 'FALL_THROUGH'}
                compatible = (len(one) == len(two) == 1 and (one[0][0] == two[0][0]
                    or {one[0][0], two[0][0]} == branch_kinds))
                if compatible:
                    c, d = one[0][1], two[0][1]
                    aa, bb = [tokens[0][i] for i in blocks[0][c]], [tokens[1][i] for i in blocks[1][d]]
                    if len(aa) == len(bb) and (aa == bb or len(aa) <= 256 and SequenceMatcher(None, aa, bb, autojunk=False).ratio() >= .5):
                        proposals[c].add(d)
                        reverse[d].add(c)
        added = {a: next(iter(bs)) for a, bs in proposals.items()
                 if len(bs) == 1 and len(reverse[next(iter(bs))]) == 1}
        if not added:
            break
        paired.update(added)
    mappings, occupied, truncated = {}, set(), []

    def add(a, b, kind):
        if a not in mappings and b not in occupied:
            mappings[a] = (b, kind)
            occupied.add(b)

    for a, b in paired.items():
        aa, bb = blocks[0][a], blocks[1][b]
        first, second = [tokens[0][i] for i in aa], [tokens[1][i] for i in bb]
        if first == second:
            for i, j in zip(aa, bb):
                add(i, j, 'normalized')
            continue
        if len(first) * len(second) > POLICY['maximum_alignment_product']:
            truncated.append([a, b, 'block_alignment_budget'])
            continue
        counts = (Counter(first), Counter(second))
        for opcode, i, j, k, l in SequenceMatcher(None, first, second, autojunk=False).get_opcodes():
            if opcode == 'equal':
                for x, y in zip(range(i, j), range(k, l)):
                    # 同一呼出の繰返しは近隣の一意な命令がある範囲だけを使う。
                    context = (first[max(i, x-1):min(j, x+2)] == second[max(k, y-1):min(l, y+2)] and j-i >= 3)
                    if counts[0][first[x]] == counts[1][second[y]] == 1 or context:
                        add(aa[x], bb[y], 'normalized')
            elif opcode == 'replace' and j-i == l-k <= 8:
                for x, y in zip(range(i, j), range(k, l)):
                    old_name, new_name = old['instructions'][aa[x]][1], new['instructions'][bb[y]][1]
                    if old_name == new_name or old_name.startswith('b.') and new_name.startswith('b.'):
                        add(aa[x], bb[y], 'changed_position')
    # 境界の移動は、一意な命令窓を基準にする。対応済み命令を二度数えない。
    width = POLICY['window_instructions']
    windows = []
    for side in (0, 1):
        items = defaultdict(list)
        for i in range(len(tokens[side]) - width + 1):
            items[tuple(tokens[side][i:i + width])].append(i)
        windows.append(items)
    for key, places in windows[0].items():
        if len(places) != 1 or len(windows[1].get(key, ())) != 1:
            continue
        a, b = places[0], windows[1][key][0]
        for i in range(width):
            add(a+i, b+i, 'normalized')
    exact = [(a, b) for a, (b, kind) in mappings.items() if kind == 'normalized']
    sites = {left['sites'][a]: right['sites'][b] for a, (b, _) in mappings.items()}
    inverted = set()
    complements = {'eq': 'ne', 'lt': 'ge', 'le': 'gt', 'hi': 'ls', 'cs': 'cc', 'hs': 'lo', 'mi': 'pl', 'vs': 'vc'}
    complements.update({b: a for a, b in list(complements.items())})
    for a, b in paired.items():
        aa, bb = blocks[0][a], blocks[1][b]
        first, second = old['instructions'][aa[-1]][1], new['instructions'][bb[-1]][1]
        if (first.startswith('b.') and second == 'b.' + complements.get(first[2:], '')
                and [tokens[0][i] for i in aa[:-1]] == [tokens[1][i] for i in bb[:-1]]):
            before = {(kind, paired.get(target)) for kind, target in edges[0][a]}
            after = {('FALL_THROUGH' if kind == 'CONDITIONAL_JUMP' else 'CONDITIONAL_JUMP'
                      if kind == 'FALL_THROUGH' else kind, target) for kind, target in edges[1][b]}
            if before == after and None not in {target for _, target in before}:
                inverted.add((a, b))
    graph_total, graph_equal = [], []
    for side, projection in ((0, paired), (1, {b: a for a, b in paired.items()})):
        total = equal = 0
        for a, values in edges[side].items():
            for kind, target in values:
                if target in blocks[side]:
                    total += 1
                    swap = (a, projection.get(a)) in inverted if side == 0 else (projection.get(a), a) in inverted
                    expected_kind = ('FALL_THROUGH' if kind == 'CONDITIONAL_JUMP' else 'CONDITIONAL_JUMP') if swap and kind in (
                        'CONDITIONAL_JUMP', 'FALL_THROUGH') else kind
                    equal += int(a in projection and target in projection and (expected_kind, projection[target]) in edges[1-side][projection[a]])
        graph_total.append(total)
        graph_equal.append(equal)
    native = (old.get('disassembly', ()), new.get('disassembly', ()))
    byte_equal = sum(a < len(native[0]) and b < len(native[1]) and native[0][a][0] == native[1][b][0] for a, b in exact)
    critical = []
    for side, source in enumerate((old, new)):
        covered = set(mappings) if side == 0 else occupied
        missing = [site for i, (site, _, flow, ops) in enumerate(source['instructions']) if i not in covered and
                   (i == 0 or any(op[0] in ('STORE', 'LOAD', 'CBRANCH', 'CALL', 'CALLIND', 'RETURN') for op in ops))]
        critical.append(missing)
    coverage = [len(exact) / max(1, len(part['sites'])) for part in (left, right)]
    ranges = [{a: spans for a, spans, _ in row['blocks']} for row in (old, new)]
    return {'sites': sites, 'instructions': [[left['sites'][a], right['sites'][b], kind] for a, (b, kind) in sorted(mappings.items())],
            'blocks': [[a, b, ranges[0].get(a, []), ranges[1].get(b, [])] for a, b in sorted(paired.items())],
            'graph_basis': graph_basis,
            'verified_branch_inversions': sorted(inverted),
            'normalized_instructions': len(exact), 'instruction_counts': [len(left['sites']), len(right['sites'])],
            'coverage': coverage, 'byte_equal_instructions': byte_equal,
            'cfg_edges': graph_total, 'cfg_equal_edges': graph_equal,
            'cfg_coverage': [equal / total if total else 1.0 for equal, total in zip(graph_equal, graph_total)],
            'unexplained_critical': critical, 'truncated': truncated,
            'full_instruction_bytes': [row['instruction_bytes'] == row['body_bytes'] for row in (old, new)],
            'normalization_scope': ['block_local_def_use', 'live_register_roles_preserved',
                                    'address_projection_for_identity_not_equivalence'],
            'equivalence': 'unproven'}


def assignment(rows):
    # 小さい競合成分だけを厳密に解く。未対応の選択肢は常に得点0で残す。
    remaining = set(rows)
    selected, evidence = {}, {}
    reverse = defaultdict(set)
    for a, items in rows.items():
        for item in items:
            if item['eligible']:
                reverse[item['new']].add(a)
    while remaining:
        seed = min(remaining)
        old, new, frontier = set(), set(), {seed}
        while frontier:
            a = frontier.pop()
            if a in old:
                continue
            old.add(a)
            for item in rows[a]:
                if item['eligible']:
                    b = item['new']
                    new.add(b)
                    frontier.update(reverse[b] - old)
        remaining -= old
        if max(len(old), len(new)) > POLICY['maximum_assignment_component']:
            for a in old:
                evidence[a] = {'held': 'assignment_component_budget', 'sizes': [len(old), len(new)]}
            continue
        addresses, targets = sorted(old), sorted(new)
        index = {b: i for i, b in enumerate(targets)}

        def solve(forbidden=None):
            @lru_cache(maxsize=None)
            def best(i, mask):
                if i == len(addresses):
                    return 0, ()
                score, path = best(i+1, mask)
                a = addresses[i]
                for item in rows[a]:
                    b = item['new']
                    if not item['eligible'] or (a, b) == forbidden or mask & (1 << index[b]):
                        continue
                    amount, rest = best(i+1, mask | (1 << index[b]))
                    option = amount + item['score']
                    if option > score:
                        score, path = option, ((a, b), *rest)
                return score, path
            return best(0, 0)
        score, pairs = solve()
        for a, b in pairs:
            alternative, _ = solve((a, b))
            gap = score - alternative
            evidence[a] = {'component': [len(old), len(new)], 'assignment_score': score, 'alternative_score': alternative,
                           'assignment_gap': gap, 'unmatched_allowed': True}
            if gap >= POLICY['minimum_assignment_gap']:
                selected[a] = b
    return selected, evidence
