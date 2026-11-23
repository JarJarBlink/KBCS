import json
import zlib
from collections import Counter, defaultdict
from functools import lru_cache

from matcher import blocks
from matcher.structure import ADDRESS, pack


def data_anchors(databases, anchors):
    groups, references = [], []
    for side, db in enumerate(databases):
        owners = defaultdict(set)
        by_address = defaultdict(set)
        mapping = anchors if side == 0 else {b: b for b in anchors.values()}
        for address, raw in db.execute("SELECT address,json_extract(metadata,'$.refs') FROM functions"):
            for _, target, kind, _, callee, *_ in json.loads(raw):
                if not callee and ADDRESS.fullmatch(target) and 'JUMP' not in kind:
                    by_address[address].add((kind, target))
                    if address in mapping:
                        owners[target].add((mapping[address], kind))
        by_owners = defaultdict(list)
        for target, refs in owners.items():
            if len({owner for owner, _ in refs}) >= 2:
                by_owners[tuple(sorted(refs))].append(target)
        groups.append(by_owners)
        references.append(by_address)
    mapping = {old[0]: groups[1][key][0] for key, old in groups[0].items()
               if len(old) == len(groups[1].get(key, ())) == 1}
    return mapping, references


def refine(accepted, databases, structures, graphs, get, rejected, initial_candidates, target, pair,
           *, trusted=None, ordered_candidates=()):
    policy = blocks.POLICY
    # 局所的な順序だけで採った組を、独立した参照の基準にしない。
    anchors = ({a: row[0] for a, row in accepted.items() if row[1] != 'leaf_bytes_and_local_order'}
               if trusted is None else {a: row[0] for a, row in trusted.items()})
    maps = (anchors, {b: a for a, b in anchors.items()})
    used = set(row[0] for row in accepted.values())
    new_targets = {b: b for b in anchors.values()}
    graphs_by_side = ((graphs[0], graphs[1]), (graphs[2], graphs[3]))
    pools, search = defaultdict(Counter), ({}, {})
    for a, b, *_ in initial_candidates:
        if a not in accepted and (a, b) not in rejected:
            pools[a][b] += 1
    for a, b in ordered_candidates:
        if a not in accepted and (a, b) not in rejected:
            pools[a][b] += 1

    @lru_cache(maxsize=8192)
    def posting(side, kind, key):
        return tuple(row[0] for row in databases[side].execute(
            'SELECT address FROM search_keys WHERE kind=? AND signature=? ORDER BY address LIMIT ?',
            (kind, key, policy['maximum_posting_functions'] + 1)))

    for side in (0, 1):
        matched = set(accepted) if side == 0 else used
        for address, shape in structures[side].items():
            if address in matched or shape[0] != 'available':
                continue
            keys = list(databases[side].execute('SELECT kind,signature FROM search_keys WHERE address=? ORDER BY kind,signature', (address,)))
            common, found = 0, Counter()
            for kind, key in keys:
                hits = posting(1-side, kind, key)
                if len(hits) > policy['maximum_posting_functions']:
                    common += 1
                    continue
                for other in hits:
                    found[other] += 1 / max(1, len(hits))
            for other, weight in sorted(found.items(), key=lambda item: (-item[1], item[0]))[:policy['maximum_candidates']]:
                a, b = (address, other) if side == 0 else (other, address)
                if (a, b) not in rejected:
                    pools[a][b] += weight
            row = get(side, address)
            search[side][address] = {'scope': 'all_functions_in_other_structure_index', 'keys': len(keys),
                'common_keys_excluded': common, 'candidate_functions': len(found),
                'sampled': row['instruction_count'] > policy['maximum_window_keys'] + policy['window_instructions'] - 1,
                'truncated': len(found) > policy['maximum_candidates']}
    # 基準でつながる呼出近傍も、全アドレス域から候補に加える。
    data, own_refs = data_anchors(databases, anchors)
    mapped_data = (data, {b: a for a, b in data.items()})
    for side in (0, 1):
        opposite = 1 - side
        data_index = defaultdict(list)
        for address, refs in own_refs[opposite].items():
            for kind, value in refs:
                if value in mapped_data[opposite]:
                    data_index[(kind, value)].append(address)
        outgoing, incoming = graphs_by_side[side]
        for address in search[side]:
            related = Counter()
            for own, other in ((outgoing, graphs_by_side[opposite][1]), (incoming, graphs_by_side[opposite][0])):
                related.update(peer for neighbor in own[address] if neighbor in maps[side] for peer in other[maps[side][neighbor]])
            for kind, value in own_refs[side][address]:
                hits = data_index.get((kind, mapped_data[side].get(value)), ())
                if len(hits) <= policy['maximum_posting_functions']:
                    related.update(hits)
            ranked = sorted(((peer, count) for peer, count in related.items() if count >= 2), key=lambda item: (-item[1], item[0]))
            if len(ranked) > policy['maximum_candidates']:
                search[side][address]['truncated'] = True
            for peer, count in ranked[:policy['maximum_candidates']]:
                a, b = (address, peer) if side == 0 else (peer, address)
                if (a, b) not in rejected:
                    pools[a][b] += min(count, 4)

    @lru_cache(maxsize=48)
    def projected(side, address):
        return blocks.profile(get(side, address), anchors if side == 0 else new_targets)

    rankings, scan_counts = {}, Counter()
    for a, choices in sorted(pools.items()):
        if a not in structures[0] or structures[0][a][0] != 'available':
            continue
        items = []
        bounded = sorted(choices, key=lambda b: (-choices[b], b))[:policy['maximum_candidates']]
        if a in search[0] and len(choices) > len(bounded):
            search[0][a]['truncated'] = True
        for b in bounded:
            if b not in structures[1] or structures[1][b][0] != 'available':
                continue
            one, two = get(0, a), get(1, b)
            if min(one['instruction_count'], two['instruction_count']) < 4:
                continue
            if max(one['instruction_count'], two['instruction_count']) > 4 * min(one['instruction_count'], two['instruction_count']):
                scan_counts['size_budget_skipped'] += 1
                search[0].setdefault(a, {})['truncated'] = True
                continue
            alignment = blocks.align(one, two, profiles=(projected(0, a), projected(1, b)))
            support = {(kind, neighbor) for kind, old, new in
                       (('callee', graphs[0][a], graphs[2][b]), ('caller', graphs[1][a], graphs[3][b]))
                       for neighbor in old if neighbor in anchors and anchors[neighbor] in new}
            old_data = {(kind, data[ref]) for kind, ref in own_refs[0][a] if ref in data}
            shared_data = old_data & own_refs[1][b]
            score = round(60 * min(alignment['coverage']) + 20 * min(alignment['cfg_coverage'])
                          + min(len(support), 5) * 2 + min(len(shared_data), 3) * 2, 6)
            held = []
            if min(alignment['instruction_counts']) < 24:
                held.append('short_function_requires_other_identity_evidence')
            if not all(alignment['full_instruction_bytes']):
                held.append('incomplete_instruction_bytes')
            if min(alignment['coverage']) < policy['minimum_instruction_coverage']:
                held.append('instruction_coverage')
            if min(alignment['cfg_coverage']) < policy['minimum_cfg_coverage']:
                held.append('cfg_coverage')
            if any(alignment['unexplained_critical']):
                held.append('unexplained_entry_return_or_effect_position')
            if len(support) < policy['minimum_mapped_references']:
                held.append('insufficient_independent_call_anchors')
            if alignment['truncated']:
                held.append('alignment_budget')
            if a in accepted or b in used:
                held.append('already_matched_elsewhere')
            proof = {k: v for k, v in alignment.items() if k not in ('sites', 'instructions', 'blocks')}
            proof['unexplained_critical_count'] = [len(items) for items in alignment['unexplained_critical']]
            proof['unexplained_critical'] = [items[:8] for items in alignment['unexplained_critical']]
            proof.update(sources=['instruction_def_use_projection', 'cfg', 'independent_mapped_references'],
                         weighted_interval_hint=(a, b) in ordered_candidates,
                         call_support_count=len(support),
                         call_support=[{'relation': kind, 'old': old, 'new': anchors[old]} for kind, old in sorted(support)[:16]],
                         mapped_data=len(shared_data), held=held,
                         boundary_verification=[one.get('index_boundary_verification', 'unverified'), two.get('index_boundary_verification', 'unverified')])
            eligible = not held
            items.append({'new': b, 'score': score, 'eligible': eligible, 'evidence': proof})
            target.execute('INSERT INTO instruction_alignment VALUES(?,?,?,?,?)',
                (pair, a, b, zlib.compress(pack(alignment).encode(), 3), pack(proof)))
            scan_counts['candidate_pairs'] += 1
        items.sort(key=lambda item: (-item['score'], item['new']))
        rankings[a] = items
    reverse = defaultdict(list)
    for a, items in rankings.items():
        for item in items:
            if item['new'] not in used:
                reverse[item['new']].append((item['score'], a))
    for items in reverse.values():
        items.sort(key=lambda item: (-item[0], item[1]))
    selected, assignments = blocks.assignment(rankings)
    hits = {}
    for a, items in rankings.items():
        for rank, item in enumerate(items, 1):
            b, proof = item['new'], item['evidence']
            competitors = reverse[b]
            forward_gap = item['score'] - max((x['score'] for x in items if x['new'] != b), default=0)
            backward_gap = item['score'] - max((score for score, old in competitors if old != a), default=0)
            proof.update(rank=rank, margin=forward_gap, reverse_margin=backward_gap,
                         assignment=assignments.get(a, {}), reciprocal_best=bool(competitors and competitors[0][1] == a))
            chosen = (selected.get(a) == b and rank == 1 and proof['reciprocal_best']
                      and min(forward_gap, backward_gap) >= policy['minimum_rank_margin'])
            if chosen:
                hits[a] = (b, 'instruction_blocks_cfg_and_references', proof)
            elif not proof['held']:
                proof['held'].append('assignment_or_bidirectional_margin')
            target.execute('INSERT INTO instruction_candidates VALUES(?,?,?,?,?,?,?,?)',
                           (pair, a, b, rank, item['score'], int(item['eligible']), int(chosen), pack(proof)))
    for side in (0, 1):
        target.executemany('INSERT INTO search_scope VALUES(?,?,?,?)',
                           ((pair, side, address, pack(proof)) for address, proof in search[side].items()))
    return hits, rankings, search, dict(scan_counts, accepted=len(hits), data_anchors=len(data), policy=policy)


def entry_evidence(side, address, scope, shapes, graphs, maps, get, hypotheses):
    row = get(side, address)
    missing = []
    if row is None or shapes[side].get(address, ('missing',))[0] != 'available':
        missing.append('structure_unavailable')
    elif row.get('index_boundary_verification') != 'ranges_match':
        missing.append('original_boundary_not_verified')
    if row and row.get('unresolved'):
        missing.append('unresolved_indirect_flow')
    if (not scope.get('keys') or scope.get('sampled') or scope.get('truncated')
            or scope.get('common_keys_excluded') or scope.get('candidate_functions')):
        missing.append('processing_absence_not_established')
    if any(kind != 'unresolved' for kind, _, _ in hypotheses):
        missing.append('correspondence_or_movement_hypothesis_remains')
    outgoing, incoming = ((graphs[0], graphs[1]), (graphs[2], graphs[3]))[side]
    other_out = (graphs[2], graphs[0])[side]
    witnesses = []
    for caller in sorted(incoming[address]):
        peer = maps[side].get(caller)
        if not peer or any(callee != address and callee not in maps[side] for callee in outgoing[caller]):
            continue
        expected = {maps[side][callee] for callee in outgoing[caller] if callee != address}
        if expected == other_out[peer]:
            witnesses.append({'caller': caller, 'counterpart': peer,
                              'sites': [site for site, _, kind, _, callee, *_ in get(side, caller)['refs']
                                        if callee == address and 'CALL' in kind]})
    witnesses = [item for item in witnesses if item['sites']]
    if len(witnesses) < 2:
        missing.append('insufficient_independent_reference_change')
    state = ('deletion_within_inspected_scope' if side == 0 else 'addition_within_inspected_scope') if not missing else 'unmatched'
    return state, {'entry': 'not_reidentified', 'processing': 'not_found_in_inspected_scope' if not missing else 'under_investigation',
                   'search': scope, 'reference_witnesses': witnesses, 'unverified': missing,
                   'source_level_feature_addition_or_deletion': 'unproven'}


def locations(side, address, database, pair, get, maps, graphs):
    column = 'old' if side == 0 else 'new'
    rows = database.execute(f'SELECT old,new,alignment FROM instruction_alignment WHERE pair=? AND {column}=?', (pair, address)).fetchall()
    own = get(side, address)
    if not own:
        return []
    canonical = (maps[0], {b: b for b in maps[1]})
    incoming = (graphs[1], graphs[3])[side]
    parts, output = [], []
    for a, b, compressed in rows:
        peer = b if side == 0 else a
        record = json.loads(zlib.decompress(compressed))
        matches = [item for item in record['instructions'] if item[2] == 'normalized']
        source_sites = {item[side] for item in matches}
        peer_sites = {item[1-side] for item in matches}
        if len(source_sites) < 4:
            continue
        parts.append((peer, source_sites, peer_sites))
        proof = {'explained_source_instructions': len(source_sites), 'source_instructions': own['instruction_count'],
                 'coverage': record['coverage'][side], 'peer_coverage': record['coverage'][1-side],
                 'alignment': {'pair': pair, 'old': a, 'new': b}, 'one_to_one_identity': False}
        database.execute('INSERT INTO processing_locations VALUES(?,?,?,?,?,?,?,?)',
                         (pair, side, address, peer, 'fragment_candidate', len(source_sites), len(peer_sites), pack(proof)))
        for caller in sorted(incoming[address]):
            if maps[side].get(caller) != peer or record['coverage'][side] < .6:
                continue
            before = blocks.align(own, get(side, caller), canonical[side], canonical[side])
            already = {item[0] for item in before['instructions'] if item[2] == 'normalized'}
            newly = source_sites - already
            caller_row, peer_row = get(side, caller), get(1-side, peer)
            old_calls = len(caller_row.get('call_positions', ()))
            new_calls = len(peer_row.get('call_positions', ()))
            if len(newly) >= .6 * own['instruction_count'] and new_calls < old_calls:
                output.append(('inline_candidate' if side == 0 else 'outline_candidate', [peer],
                               proof | {'source_caller': caller, 'newly_explained': len(newly), 'previously_present': len(already),
                                        'call_counts_in_source_and_other_caller': [old_calls, new_calls]}))
    for i, (a, first, _) in enumerate(parts):
        for b, second, _ in parts[i+1:]:
            if min(len(first-second), len(second-first)) >= 4 and len(first | second) >= .8 * own['instruction_count']:
                output.append(('split_candidate' if side == 0 else 'merge_candidate', [a, b],
                    {'explained_source_instructions': len(first | second), 'source_instructions': own['instruction_count'],
                     'deduplication': 'source_instruction_address', 'source_coverage': len(first | second)/own['instruction_count']}))
    return output[:12]
