import gzip
import hashlib
import json

from indexer.store import digest, read_json
from matcher.structure import ADDRESS, MAX_ROW, structure_header


REFERENCE_POLICY = 'native-reference-v1'


def provenance(cache, archive, metadata):
    receipt = archive.with_name('structure-metrics.json')
    if not receipt.is_file():
        return 'header_only_revision_unverified'
    proof = read_json(receipt)
    source = proof['source']
    identity = source['identity']
    keys = ('version', 'architecture', 'sha256', 'analysis_revision')
    if any(identity.get(key) != metadata.get(key) for key in keys) or proof['sha256'] != digest(archive):
        raise ValueError('Structure receipt does not match cache identity or SHA-256')
    if 'index_sha256' in source:
        from indexer.ci import index_digest
        checksum = index_digest(cache / 'index.jsonl')
        expected = source['index_sha256']
    else:
        checksum, expected = digest(cache / 'index.jsonl'), source['index']
    if checksum != expected:
        raise ValueError('Structure receipt does not match original index')
    return 'receipt_verified'


def records(archive, metadata):
    header = structure_header(archive)
    keys = ('sha256', 'language', 'image_base', 'ghidra')
    if any(key not in metadata or header.get(key) != metadata[key] for key in keys):
        raise ValueError('Structure export does not match the indexed program')
    if header.get('disassembly') is not True:
        raise ValueError('Structure export lacks disassembly; regenerate the structure checkpoint')
    seen, footer = set(), None
    with gzip.open(archive, 'rb') as stream:
        stream.readline(MAX_ROW + 1)
        while line := stream.readline(MAX_ROW + 1):
            if len(line) > MAX_ROW or footer is not None:
                raise ValueError('Invalid structure record size or footer')
            row = json.loads(line)
            if row.get('type') == 'complete':
                footer = row
                continue
            address = row.get('address', '')
            if row.get('type') != 'function' or not ADDRESS.fullmatch(address) or address in seen:
                raise ValueError('Invalid or duplicate structure function')
            seen.add(address)
            validate(row)
            row['program_id'] = header.get('program_id')
            yield row
    if footer is None or footer.get('functions') != len(seen):
        raise ValueError('Incomplete structure export')


def validate(row):
    ranges = [(int(start, 16), int(end, 16)) for start, end in row['ranges']]
    if not ranges or not any(a <= int(row['address'], 16) <= b for a, b in ranges) or any(start > end for start, end in ranges) or any(
            a[1] >= b[0] for a, b in zip(ranges, ranges[1:])):
        raise ValueError('Invalid function body ranges')
    if sum(end - start + 1 for start, end in ranges) != row['body_bytes']:
        raise ValueError('Function body ranges do not match recorded size')
    if row['instruction_count'] != len(row['instructions']) or len(row['disassembly']) != row['instruction_count']:
        raise ValueError('Structure instruction count does not match the listing')
    checksum, length, previous_end = hashlib.sha256(), 0, -1
    for (site, _, _, _), display in zip(row['instructions'], row['disassembly'], strict=True):
        encoded, text = display[:2]
        machine = bytes.fromhex(encoded)
        if not machine or not text or '\n' in text or '\r' in text or not ADDRESS.fullmatch(site):
            raise ValueError('Invalid disassembly instruction')
        start, end = int(site, 16), int(site, 16) + len(machine) - 1
        if start <= previous_end or not any(a <= start <= end <= b for a, b in ranges):
            raise ValueError('Instruction overlaps or escapes function body ranges')
        previous_end = end
        checksum.update(machine)
        length += len(machine)
    if length != row['instruction_bytes'] or checksum.hexdigest() != row['bytes_sha256']:
        raise ValueError('Structure disassembly does not match the recorded instruction bytes')


def coverage(row, size, original=None):
    if not row:
        return 'not_exported'
    if original and original.get('ranges') is not None and row['ranges'] != original['ranges']:
        return 'index_ranges_mismatch'
    if row['body_bytes'] != size or row['instruction_bytes'] != row['body_bytes'] or not row['instruction_count']:
        return 'instruction_coverage_mismatch'
    return 'available'


def listing(row, size):
    validate(row)
    if coverage(row, size) != 'available':
        return None
    return '\n'.join(f'{instruction[0]}  {display[0]}  {display[1]}'
                     for instruction, display in zip(row['instructions'], row['disassembly']))


def tabular(headings, rows):
    lines = ['\t'.join(headings)]
    for row in rows:
        lines.append('\t'.join('-' if value is None else json.dumps(value, ensure_ascii=False) for value in row))
    return '\n'.join(lines)
