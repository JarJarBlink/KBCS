import argparse
import json
from pathlib import Path

from indexer.reference import fenced
from matcher import logic, structure
from matcher.tracking_pages import write_page


def export_detail(database, indexes, pair, address, output):
    with structure.reader(database) as db:
        accepted = dict(db.execute("SELECT old,new FROM relations WHERE pair=? AND verdict='accepted'", (pair,)))
        if address not in accepted:
            raise ValueError('Detailed comparison requires an accepted correspondence')
        sources = db.execute('''SELECT a.sha256,a.index_sha256,a.structure_sha256,b.sha256,b.index_sha256,b.structure_sha256
            FROM pairs JOIN datasets a ON older=a.id JOIN datasets b ON newer=b.id WHERE pair=?''', (pair,)).fetchone()
    rows, languages = [], []
    for side, (index, location) in enumerate(zip(indexes, (address, accepted[address]))):
        with structure.reader(index) as db:
            meta = {key: json.loads(value) for key, value in db.execute('SELECT key,value FROM meta')}
            program, source = meta['program'], meta['source']
            if (program['sha256'], source['cache_sha256'], source['structure_sha256']) != sources[side*3:side*3+3]:
                raise ValueError('Structure index differs from the tracking ledger')
            state = db.execute('SELECT state FROM functions WHERE address=?', (location,)).fetchone()
            if state != ('available',):
                raise ValueError(f'Structural coverage is unavailable: {location}')
            rows.append(structure.load_row(db, location))
            languages.append(program['language'])
    report = logic.compare(*rows, accepted, {value: value for value in accepted.values()},
                           abi=all(lang.startswith('AARCH64:LE:64:') for lang in languages), detail_limit=None)
    entries = report.pop('details')
    if output.exists() and any(output.iterdir()):
        raise ValueError('Use an empty output directory for this comparison')
    title = f'{address} → {accepted[address]}'
    contents = [f'# {title}', '', '採用済み対応と検証した構造索引から再計算した命令差分。', '',
                fenced(json.dumps(report, ensure_ascii=False, indent=2), 'json'), '', '## 命令差分の詳細', '']
    for offset in range(0, len(entries), 48):
        chunk = entries[offset:offset+48]
        name = f'changes-{offset//48+1:04d}.md'
        contents.append(f'- [命令差分 {offset+1}–{offset+len(chunk)}]({name})')
        write_page(output / name, [f'# {title}', '', '[目次](README.md)', '',
                                    fenced(json.dumps(chunk, ensure_ascii=False, indent=2), 'json')])
    write_page(output / 'README.md', contents)
    return len(entries)


def main():
    parser = argparse.ArgumentParser(description='Render the complete logic diff for one accepted pair')
    parser.add_argument('--db', type=Path, required=True)
    parser.add_argument('--indexes', nargs=2, type=Path, required=True, metavar=('OLD', 'NEW'))
    parser.add_argument('--pair', required=True)
    parser.add_argument('--address', required=True)
    parser.add_argument('--output', type=Path, required=True)
    args = parser.parse_args()
    print(export_detail(args.db, args.indexes, args.pair, args.address, args.output))


if __name__ == '__main__':
    main()
