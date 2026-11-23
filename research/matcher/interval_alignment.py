from collections import Counter, defaultdict


MAX_INTERVAL = 48
UNAVAILABLE = ('missing', None, 0, None, None)


def weights(left, right):
    if left[0] != 'available' or right[0] != 'available':
        return 0
    if left[1] and left[1] == right[1]:
        return 4 + int(bool(left[3]) and left[3] == right[3])
    return 0


def align(left, right, score):
    # 挿入・欠落は0点。独立した構造根拠がある組だけを候補にする。
    rows, cols = len(left), len(right)
    dp = [[0] * (cols + 1) for _ in range(rows + 1)]
    values = [[score(a, b) for b in right] for a in left]
    for i, row in enumerate(values, 1):
        for j, value in enumerate(row, 1):
            dp[i][j] = max(dp[i-1][j], dp[i][j-1], dp[i-1][j-1] + value)
    pairs = set()
    i, j = rows, cols
    while i and j:
        if dp[i][j] == dp[i-1][j]:
            i -= 1
        elif dp[i][j] == dp[i][j-1]:
            j -= 1
        else:
            pairs.add((left[i-1], right[j-1]))
            i, j = i-1, j-1
    return pairs


def audit(accepted, structures, graphs, rejected):
    # 信頼度は判定時点の証拠で固定し、推定組同士の循環を避ける。
    left, right = structures
    groups = defaultdict(list)
    old_shapes = Counter(row[1] for row in left.values() if row[0] == 'available')
    for address, row in right.items():
        if row[0] == 'available':
            groups[row[1]].append(address)
    trusted = {}
    for a, (b, method, proof) in accepted.items():
        first, second = left.get(a, UNAVAILABLE), right.get(b, UNAVAILABLE)
        origin = ('reviewed_or_named' if method in ('manual', 'manual_accept', 'symbol')
                  and 'boundary_mismatch' not in (first[0], second[0]) else
                  'unique_instruction_bytes_and_structure' if weights(first, second) == 5
                  and old_shapes[first[1]] == len(groups[first[1]]) == 1 and first[2] >= 24 else None)
        if origin:
            trusted[a] = (b, origin)
        proof['anchor_audit'] = {'origin': origin or 'initial_estimate', 'independent_anchor': bool(origin),
                                 'structure_states': [first[0], second[0]]}
    old_out, old_in, new_out, new_in = graphs

    def support(a, b):
        return sorted({neighbor for before, after in ((old_out, new_out), (old_in, new_in))
                       for neighbor in before.get(a, ()) if neighbor != a and neighbor in trusted
                       and trusted[neighbor][0] != b and trusted[neighbor][0] in after.get(b, ())})

    held = {}
    for a, (b, method, proof) in list(accepted.items()):
        if a in trusted or a not in left or b not in right:
            continue
        first, second = left[a], right[b]
        if 'boundary_mismatch' in (first[0], second[0]):
            held[a] = (b, method, proof | {'audit_reason': 'boundary_mismatch'})
            continue
        if first[0] != 'available' or second[0] != 'available':
            continue
        if (method.startswith('leaf_bytes_and_') and min(first[2], second[2]) < 24
                and (old_shapes[first[1]] > 1 or len(groups[second[1]]) > 1) and len(support(a, b)) < 2):
            held[a] = (b, method, proof | {'audit_reason': 'ambiguous_short_function'})
            continue
        if weights(first, second):
            continue
        alternatives = groups[first[1]]
        if len(alternatives) == 1:
            peer = alternatives[0]
            witnesses = support(a, peer)
            if ((a, peer) not in rejected and old_shapes[first[1]] == 1 and first[2] >= 24
                    and len(witnesses) >= 2 and len(witnesses) > len(support(a, b))):
                held[a] = (b, method, proof | {'audit_reason': 'stronger_independent_alternative',
                                               'alternative': peer, 'independent_anchors': witnesses})
    return trusted, held
