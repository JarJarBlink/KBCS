import html
import json
import os
import re
import shutil
import tempfile
from collections import defaultdict
from itertools import islice
from pathlib import Path
from urllib.parse import urlsplit
from urllib.request import url2pathname

from indexer.reference import fenced, reference_path
from indexer.store import digest, read_json, write_json
from indexer.upstream import TRACKING_POLICY, tracking_sources
from matcher.comparison_pages import (COMPARISON_LINK, DIRECTIONS, attach_function_comparisons, catalog_path,
                                      disconnect, comparison_catalog, comparison_identity, valid_comparison_entries, render_comparison_catalog, overlay)
from matcher.structure import fingerprint, reader


PAGE_SIZE = 100
GROUPS = {'reference_unresolved': '未解決の参照', 'machine_only_observed': '機械語差のみを観測',
          'detail_skipped': '機械語・CFG・記録された参照の一致で詳細検査を省略',
          'no_difference_in_scope': '検査範囲で差分なし', 'unavailable': '未検証・解析不能'}


def groups():
    yield 'priority', '最優先の変更候補', "json_extract(l.evidence,'$.importance')='critical'"
    yield 'high', '高優先の変更候補', "json_extract(l.evidence,'$.importance')='high'"
    yield 'inspection', '要調査の変更候補', (
        "json_extract(l.evidence,'$.importance')='review' AND l.status NOT IN "
        "('unavailable','reference_unresolved','machine_only_observed')")
    yield from ((status, heading, f"l.status='{status}'") for status, heading in GROUPS.items())


def link(target, page):
    try:
        return Path(os.path.relpath(target, page.parent)).as_posix()
    except ValueError:
        # Windowsで資料とローカルプレビューが別ドライブの場合は絶対ファイルURLを使う。
        return target.resolve().as_uri()


def write_page(path, lines):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text('\n'.join(lines) + '\n', encoding='utf-8-sig', newline='\n')


def label(text):
    return html.escape(str(text)).replace('|', '&#124;').replace('[', '&#91;').replace(']', '&#93;').replace('\n', ' ')


def verify_links(directory, repository, asset_url, reference_url):
    validated = set()
    checked = 0
    for page in directory.rglob('*.md'):
        anchors = re.findall(r'<a id="([^"]+)"></a>', page.read_text(encoding='utf-8-sig'))
        if len(anchors) != len(set(anchors)):
            raise ValueError(f'Duplicate tracking anchor in {page}')
        fence = None
        for line in page.read_text(encoding='utf-8-sig').splitlines():
            marker = re.match(r'^(~{3,}|\x60{3,})', line)
            if marker and (fence is None or marker[0] == fence):
                fence = marker[0] if fence is None else None
                continue
            if fence:
                continue
            for href in re.findall(r'\]\(([^)]+)\)', line):
                if href == asset_url:
                    continue
                if reference_url and href.startswith(reference_url):
                    path = repository / href.removeprefix(reference_url)
                elif href.startswith('file:///'):
                    path = Path(url2pathname(urlsplit(href).path))
                else:
                    path = page.parent / href
                filename, _, anchor = str(path).partition('#')
                path = Path(filename)
                key = os.path.normpath(path)
                if key not in validated:
                    if not Path(key).is_file():
                        raise ValueError(f'Broken tracking link in {page}: {href}')
                    validated.add(key)
                if anchor and f'<a id="{anchor}"></a>' not in path.read_text(encoding='utf-8-sig'):
                    raise ValueError(f'Broken tracking anchor in {page}: {href}')
                checked += 1
    return checked


def render(database, repository, destination, asset_url, reference_url=None):
    if destination.exists():
        existing = read_json(destination / 'manifest.json')
        if (existing['database_sha256'] != digest(database) or existing.get('asset_url') != asset_url
                or not (destination / 'README.md').is_file()):
            raise ValueError('Published tracking directory belongs to a different or incomplete result')
        # 同じDBの旧資料形式だけを作り直す。出典の固定コミットは維持する。
        reference_url = existing['reference_url']
        if existing.get('navigation_format') == 1 and (destination / 'navigation.json').is_file():
            if existing.get('navigation_sha256') != digest(destination / 'navigation.json'):
                raise ValueError('Comparison navigation SHA-256 mismatch')
            verify_links(destination, repository, asset_url, reference_url)
            return read_json(destination / 'summary.json')
    destination.parent.mkdir(parents=True, exist_ok=True)
    # 同じ深さの一時ディレクトリで、版資料への相対リンクを保ったまま生成する。
    with tempfile.TemporaryDirectory(prefix='.tracking-', dir=destination.parent) as temporary:
        staged = Path(temporary)
        result = render_pages(database, repository, staged, asset_url, reference_url)
        checked = verify_links(staged, repository, asset_url, reference_url)
        manifest = read_json(staged / 'manifest.json')
        write_json(staged / 'manifest.json', manifest | {'verified_links': checked,
                                                        'asset_url': asset_url, 'reference_url': reference_url, 'navigation_format': 1,
                                                        'navigation_sha256': digest(staged / 'navigation.json')})
        print(f'Checked {checked:,} Markdown links', flush=True)
        backup = staged.with_name(staged.name + '-previous')
        if destination.exists():
            destination.rename(backup)
        try:
            staged.rename(destination)
        except OSError:
            if backup.exists():
                backup.rename(destination)
            raise
        if backup.exists():
            shutil.rmtree(backup)
    return result


def render_pages(database, repository, destination, asset_url, reference_url):
    with reader(database) as db:
        result = json.loads(db.execute("SELECT value FROM metadata WHERE key='result'").fetchone()[0])
        if result['complete'] is not True or result['format'] != 2:
            raise ValueError('A completed v2 tracking database is required')
        versions = dict(db.execute('SELECT id,version FROM datasets'))
        nodes = {(i, a): (name, repository / ref) for i, a, name, ref in db.execute(
            'SELECT dataset,address,name,reference FROM nodes')}
        for _, target in nodes.values():
            if not target.is_file():
                raise ValueError(f'Tracking link target is missing: {target}')
        outgoing, incoming = defaultdict(set), defaultdict(set)
        for dataset, owner, callee in db.execute('SELECT dataset,owner,callee FROM xrefs WHERE callee IS NOT NULL'):
            if (dataset, callee) in nodes:
                outgoing[dataset, owner].add(callee)
                incoming[dataset, callee].add(owner)

        def node(number, address, page, *, named=False):
            if address is None:
                return '—'
            name, target = nodes[number, address]
            url = reference_url + target.relative_to(repository).as_posix() if reference_url else link(target, page)
            return f'[`{address}`]({url})' + (f' {label(name[:140])}' if named else '')

        def call_context(number, address, page):
            rows = []
            for heading, graph in (('呼出元', incoming), ('呼出先', outgoing)):
                functions = sorted(graph[number, address])
                rows.append(f'{heading} {len(functions)}件 ' + ' '.join(node(number, a, page) for a in functions[:5]))
            return ' · '.join(rows)

        def paged(index, title, slug, heading, rows, body):
            rows = iter(rows)
            number = 1
            while chunk := list(islice(rows, PAGE_SIZE)):
                page = index.parent / f'{slug}-{number:04d}.md'
                lines = [f'# {title} · {heading} ({number})', '', '[一覧の目次](README.md)', '']
                for row in chunk:
                    lines.extend(body(row, page))
                write_page(page, lines)
                yield f'- [{heading} {number}]({page.name}) · {len(chunk)}件'
                number += 1

        root = destination / 'README.md'
        indices = ['# ネイティブ関数のバージョン間追跡', '',
                   f'[追跡SQLite]({asset_url}) · [集計と出典](summary.json)', '',
                   f'SQLite SHA-256 `{digest(database)}`', '',
                   '関係は根拠付きの推定です。変更候補は検査範囲と合わせて読みます。',
                   '構造とP-codeの一致だけで実行時の挙動は確定しません。', '', '## 連続版の比較', '']
        identities = [entry['identity'] for entry in result['sources']]
        def anchor_for(kind, *nodes):
            return kind + '-' + fingerprint([(comparison_identity(identities[number]), address) for number, address in nodes])[:32]
        navigation = []
        for pair, i, j, summary in db.execute("SELECT pair,older,newer,summary FROM pairs WHERE role='adjacent' ORDER BY older"):
            title = f"v{versions[i]} → v{versions[j]}"
            page = destination / pair / 'README.md'
            indices.append(f'- [{title}]({link(page, root)})')
            pair_index = [f'# {title}', '', '[追跡の目次](../README.md)', '', '## 処理・構造の差と対応根拠', '']
            details = {}
            review_targets = [{}, {}]
            for slug, heading, condition in groups():
                rows = db.execute(f"""SELECT l.old,l.new,l.evidence,r.reason,
                        EXISTS (SELECT 1 FROM conflict_edges c WHERE c.pair=l.pair AND c.old=l.old AND c.new=l.new)
                    FROM logic l JOIN relations r ON l.pair=r.pair AND l.old=r.old AND l.new=r.new
                    WHERE l.pair=? AND r.verdict IN ('accepted','held_conflict') AND {condition} ORDER BY l.old""", (pair,))

                def pair_row(row, detail):
                    a, b, raw, reason, conflict = row
                    anchor = anchor_for('compare', (i, a), (j, b))
                    if not conflict:
                        details.setdefault(a, [b, detail.name, anchor])
                    else:
                        review_targets[0].setdefault(a, [detail.name, anchor])
                        review_targets[1].setdefault(b, [detail.name, anchor])
                    record = json.loads(raw)
                    tags = ', '.join(record.get('changes', ()))
                    extra = [f"`{record['scope']}`", f"`{record['confidence']}`",
                             f"参照 `{record['reference_state']}`", *(f"`{value}`" for value in record.get('warnings', ())),
                             *([f"`{record['structural_candidate']}`"] if 'structural_candidate' in record else []),
                             *(['`reordered`'] if record.get('order_changed') else []),
                             *(['**経路矛盾あり**'] if conflict else [])]
                    lines = [f'<a id="{anchor}"></a>', '',
                             f'### {node(i, a, detail)} → {node(j, b, detail, named=True)}', '',
                             f'根拠 `{reason}` · ' + ' · '.join(extra), '',
                             f'- 旧版 {call_context(i, a, detail)}', f'- 新版 {call_context(j, b, detail)}', '']
                    if tags:
                        lines.extend([f'変更の種類 {tags}', ''])
                    coverage = record.get('instruction_correspondence')
                    if coverage:
                        before, after = coverage['coverage']
                        lines.extend([f'命令の説明率　旧版 {before:.2%} / 新版 {after:.2%}', ''])
                    for key, caption in (('priority_impact', '優先判定に残った影響'),
                                         ('address_sensitive_impact', 'アドレスに依存する影響')):
                        if record.get(key):
                            counts = ', '.join(f'`{kind}` {count}件' for kind, count in sorted(record[key].items()))
                            lines.extend([f'{caption} {counts}', ''])
                    if record.get('effects'):
                        lines.extend([fenced(json.dumps(record['effects'][:3], ensure_ascii=False, indent=2), 'json'), ''])
                    if record.get('reference_changed'):
                        reference = record['references']
                        lines.extend(['参照の変更（対応した命令位置）', '',
                                      fenced(json.dumps({key: reference[key][:3] for key in ('removed', 'added')},
                                                        ensure_ascii=False, indent=2), 'json'), ''])
                    sample = []
                    for change in record.get('details', ())[:3]:
                        sample.extend('- ' + label(site) + ' ' + json.dumps(op, ensure_ascii=False)
                                      for site, op in change['old'][:4])
                        sample.extend('+ ' + label(site) + ' ' + json.dumps(op, ensure_ascii=False)
                                      for site, op in change['new'][:4])
                    if sample:
                        lines.extend([fenced('\n'.join(sample), 'diff'), ''])
                    return lines

                pair_index.extend(paged(page, title, slug, heading, rows, pair_row))
            pair_index.extend(['', '## 競合・未確定と再調査の優先順', '',
                               '分割・統合・インライン化候補を先に並べています。詳細根拠と全参照はSQLiteで調べられます。', ''])
            reviews = db.execute("""SELECT side,address,kind,targets,evidence FROM review WHERE pair=?
                ORDER BY CASE WHEN kind IN ('split_candidate','merge_candidate','inline_candidate','outline_candidate','embedded_fragment_candidate')
                              THEN 0 WHEN kind='competing_candidates' THEN 1 ELSE 2 END,side,address""", (pair,))

            def review_row(row, detail):
                side, address, kind, targets, raw = row
                first, second = (i, j) if side == 0 else (j, i)
                candidates = json.loads(targets)
                proof = json.loads(raw)
                ranked = proof.get('ranked_candidates', ())
                target_links = '' if ranked else ' '.join(node(second, a, detail) for a in candidates)
                ranks = [f"- {rank}. {node(second, item['new'], detail)} · スコア {item['score']} · "
                         f"{'採用条件を満たす' if item['eligible'] else '採用条件未達'} · "
                         f"順位差 {item['evidence'].get('margin', '—')} / {item['evidence'].get('reverse_margin', '—')} · "
                         + ', '.join(item['evidence'].get('held', ()))
                         for rank, item in enumerate(ranked[:8], 1)]
                if ranked:
                    proof['ranked_candidates'] = [item | {'evidence': {key: item['evidence'][key] for key in
                        ('coverage', 'cfg_coverage', 'mapped_data', 'held', 'margin', 'reverse_margin') if key in item['evidence']}}
                        for item in ranked[:3]]
                marker = []
                if address not in review_targets[side]:
                    anchor = anchor_for('review', (first, address))
                    review_targets[side][address] = [detail.name, anchor]
                    marker = [f'<a id="{anchor}"></a>', '']
                return [*marker, f'### v{versions[first]} {node(first, address, detail, named=True)}', '',
                        f'`{kind}` {target_links}', '', call_context(first, address, detail), '',
                        *ranks, '', fenced(json.dumps(proof, ensure_ascii=False, indent=2), 'json')]

            pair_index.extend(paged(page, title, 'review', '追加調査', reviews, review_row))
            pair_index.extend(['', '## 集計・検証', '', fenced(json.dumps(json.loads(summary), ensure_ascii=False, indent=2), 'json')])
            write_page(page, pair_index)
            navigation.append({'pair': pair, 'older': i, 'newer': j, 'details': details, 'reviews': review_targets})
        indices.extend(['', '## 3版経路の検証', '',
                        '直接経路は検証に用います。一致した経路も共通の解析器に依存します。', '',
                        fenced(json.dumps(result['cycles'], ensure_ascii=False, indent=2), 'json')])
        rows = db.execute("""SELECT older,middle,newer,old,middle_address,via,direct,state,temporal
            FROM cycles WHERE state IN ('conflict','gap_candidate') OR temporal!='' ORDER BY state,older,old""")
        cycle_index = destination / 'cycles/README.md'

        def cycle_row(row, detail):
            i, j, k, a, b, via, direct, state, temporal = row
            return [f'- `{state}` {temporal} · {node(i, a, detail)} → {node(j, b, detail)} → {node(k, via, detail)}'
                    f' · 直接経路 {node(k, direct, detail)}']

        write_page(cycle_index, ['# 3版経路の矛盾・再登場・一時変化候補', '', '[追跡の目次](../README.md)', '',
            *paged(cycle_index, '3版経路', 'review', '確認候補', rows, cycle_row)])
        indices.extend(['', f'[矛盾・再登場・一時変化候補]({link(cycle_index, root)})'])
        write_page(root, indices)
        write_json(destination / 'navigation.json', {'format': 1, 'sources': [comparison_identity(identity) for identity in identities], 'pairs': navigation})
        write_json(destination / 'summary.json', result)
        write_json(destination / 'manifest.json', {'format': 2, 'run': result['run'], 'database_sha256': digest(database)})
    return result


def retire_legacy(reference, identities):
    # v2の全リンク先が揃った後、旧形式が管理していた差分とリンクだけを外す。
    paths = {reference / reference_path(identity) for identity in identities}
    for source in sorted(paths):
        for direction in DIRECTIONS:
            catalog = catalog_path(source, direction)
            if catalog.is_file() and reference / reference_path(read_json(catalog)['peer']) in paths:
                disconnect(reference, source, direction)
        if catalog_path(source, 'previous').is_file():
            continue
        (source / 'comparison.md').unlink(missing_ok=True)
        readme = source / 'README.md'
        before = readme.read_bytes()
        after = before.replace(('\n' + COMPARISON_LINK + '\n').encode(), b'')
        if before != after:
            readme.write_bytes(after)


def attach_adjacent_links(reference, destination, identities, *, verify=False):
    navigation = read_json(destination / 'navigation.json')
    if not isinstance(navigation, dict) or navigation.get('format') != 1 or navigation['sources'] != [comparison_identity(identity) for identity in identities]:
        raise ValueError('Comparison navigation belongs to different analysis sources')
    pairs = navigation['pairs']
    if len({pair['pair'] for pair in pairs}) != len(pairs) or any(
            pair['newer'] != pair['older'] + 1 or not 0 <= pair['older'] < pair['newer'] < len(identities)
            or pair['pair'] != f"{pair['older']}-{pair['newer']}"
            or len({row[0] for row in pair['details'].values()}) != len(pair['details']) for pair in pairs):
        raise ValueError('Invalid adjacent comparison direction or duplicate relationship')
    repository = reference.parent.parent
    backward = [(pair, {row[0]: old for old, row in pair['details'].items()}) for pair in pairs]
    pages_checked = {}
    catalogs = []
    for i, identity in enumerate(identities):
        directory = reference / reference_path(identity)
        old_catalog = comparison_catalog(directory)
        retained = valid_comparison_entries(old_catalog, directory, repository)
        rows = {}
        for page in sorted(directory.glob('functions/*/*.md')):
            address = page.stem.replace('EXTERNAL-', 'EXTERNAL:', 1)
            related = {i: address}
            for pair, inverse in reversed(backward):
                if related.get(pair['newer']) in inverse:
                    related[pair['older']] = inverse[related[pair['newer']]]
            for pair in pairs:
                if row := pair['details'].get(related.get(pair['older'])):
                    related[pair['newer']] = row[0]
            entries = {(entry['older']['version'], entry['newer']['version']): entry for entry in retained.get(address, ())}
            for pair in pairs:
                old, new = pair['older'], pair['newer']
                directory_pair = destination / pair['pair']
                review = pair['reviews'][0].get(related.get(old)) or pair['reviews'][1].get(related.get(new))
                row = pair['details'].get(related.get(old))
                if row:
                    path, anchor, kind = directory_pair / row[1], row[2], 'accepted'
                elif review:
                    path, anchor, kind = directory_pair / review[0], review[1], 'review'
                else:
                    path, anchor, kind = directory_pair / 'README.md', '', 'index'
                if path not in pages_checked:
                    if not path.is_file():
                        raise ValueError(f'Missing comparison page: {path}')
                    pages_checked[path] = set(re.findall(r'<a id="([^"]+)"></a>', path.read_text(encoding='utf-8-sig')))
                if anchor and anchor not in pages_checked[path]:
                    raise ValueError(f'Missing comparison anchor: {path}#{anchor}')
                entry = {'older': comparison_identity(identities[old]), 'newer': comparison_identity(identities[new]),
                         'target': path.relative_to(repository).as_posix() + ('#' + anchor if anchor else ''), 'kind': kind}
                entries[identities[old]['version'], identities[new]['version']] = entry
            rows[address] = sorted(entries.values(), key=lambda entry: tuple(map(int, entry['older']['version'].split('.'))))
        catalogs.append((directory, {'format': 1, 'identity': comparison_identity(identity), 'rows': rows}))
    # 全リンク先を確認してから、各関数のナビゲーションを更新する。
    for directory, catalog in catalogs:
        render_comparison_catalog(directory, catalog, repository, verify=verify)


def attach(repository, destination, result, *, verify=False):
    reference = repository / 'research/reference'
    publication = read_json(destination / 'manifest.json')
    if publication.get('navigation_sha256') != digest(destination / 'navigation.json'):
        raise ValueError('Comparison navigation SHA-256 mismatch')
    if publication['run'] != result['run'] or not publication.get('verified_links') or not (destination / 'README.md').is_file():
        raise ValueError('Verify the replacement tracking pages before retiring old comparisons')
    for source in result['sources']:
        identity = source['identity']
        manifest = read_json(reference / reference_path(identity) / 'manifest.json')
        if (manifest['source_database_sha256'], manifest['analysis_revision']) != (
                source['cache_sha256'], identity['analysis_revision']):
            raise ValueError('Published version changed during tracking')
    identities = [source['identity'] for source in result['sources']]
    attach_adjacent_links(reference, destination, identities, verify=verify)
    retire_legacy(reference, identities)
    for i, source in enumerate(result['sources']):
        directory = reference / reference_path(source['identity'])
        page = directory / 'README.md'
        overlay(page, 'tracking', f'[バージョン間の関数追跡]({link(destination / "README.md", page)})', '## アドレス索引\n')
        guidance = []
        for neighbor, caption in ((i-1, '前の版との比較'), (i+1, '次の版との比較')):
            if 0 <= neighbor < len(identities):
                pair = destination / f'{min(i, neighbor)}-{max(i, neighbor)}' / 'README.md'
                if pair.is_file():
                    guidance.append(f'[{caption} v{identities[neighbor]["version"]}]({link(pair, page)})')
        if guidance:
            overlay(page, 'tracking-neighbors', '\n\n'.join(guidance), '## アドレス索引\n')
        manifest = read_json(directory / 'manifest.json')
        sources = tracking_sources(identities[max(0, i-2):i + 1])
        if i < 2 and len(manifest.get('tracking_sources', ())) > len(sources):
            previous = manifest['tracking_sources']
            if previous[-len(sources):] == sources:
                sources = previous
        manifest.update(comparison_state='complete' if i else manifest.get('comparison_state', 'no_baseline'),
                        tracking_format=2, tracking_navigation_format=1, tracking_policy=TRACKING_POLICY, tracking_run=result['run'],
                        tracking_page=(destination / 'README.md').relative_to(repository).as_posix(),
                        tracking_sources=sources)
        write_json(directory / 'manifest.json', manifest)
    root = repository / 'research/comparisons'
    write_page(root / 'README.md', ['# ネイティブ関数の追跡資料', '', *(
        f'- [{path.parent.relative_to(root).as_posix()}]({link(path, root / "README.md")})'
        for path in sorted(root.glob('*/*/README.md')))])


def refresh_affected_navigation(repository, result):
    # 同版の出典変更と、途中版追加で隣接でなくなった区間だけを更新する。
    reference = repository / 'research/reference'
    identities = [row['identity'] for row in result['sources']]
    abi = identities[0]['architecture']
    manifests = {entry['version']: (path.parent, entry) for path in reference.glob(f'*/{abi}/*/manifest.json')
                 for entry in (read_json(path),)}
    versions = sorted(manifests, key=lambda version: tuple(map(int, version.split('.'))))
    neighbors = set(zip(versions, versions[1:]))
    live = {version: comparison_identity(manifest) for version, (_, manifest) in manifests.items()}

    def valid(entry):
        older, newer = entry['older'], entry['newer']
        return ((older['version'], newer['version']) in neighbors
                and live.get(older['version']) == older and live.get(newer['version']) == newer)

    for version, (directory, manifest) in manifests.items():
        catalog = comparison_catalog(directory)
        if not catalog:
            continue
        intervals = catalog.get('intervals', {})
        same_source = catalog['identity'] == live[version]
        if same_source and intervals and all(map(valid, intervals.values())):
            continue
        affected = {address: [entry for entry in entries if same_source and valid(entry)]
                    for address, entries in catalog['rows'].items() if not same_source or any(not valid(entry) for entry in entries)}
        if not affected:
            continue
        updated = catalog | {'identity': live[version], 'rows': catalog['rows'] | affected}
        valid_rows = valid_comparison_entries(updated, directory, repository)
        if any(entries != valid_rows.get(address, []) for address, entries in updated['rows'].items()):
            raise ValueError('Broken retained comparison reference')
        render_comparison_catalog(directory, updated, repository, verify=True)
        # 出典が変わった旧ランへの目次リンクを、有効な隣接区間で作り直す。
        row = next(iter(valid_rows.values()), ())
        immediate = [entry for entry in row if version in (entry['older']['version'], entry['newer']['version'])]
        readme = directory / 'README.md'
        guidance = []
        for entry in immediate:
            following = entry['older']['version'] == version
            caption, peer = ('次の版との比較', entry['newer']['version']) if following else ('前の版との比較', entry['older']['version'])
            overview = (repository / entry['target'].split('#', 1)[0]).with_name('README.md')
            guidance.append(f'[{caption} v{peer}]({link(overview, readme)})')
        overlay(readme, 'tracking-neighbors', '\n\n'.join(guidance), '## アドレス索引\n')
        if not same_source or manifest.get('tracking_run') != result['run']:
            overlay(readme, 'tracking', '', '## アドレス索引\n')
            for key in ('tracking_run', 'tracking_page', 'tracking_sources'):
                manifest.pop(key, None)
            manifest['comparison_state'] = 'pending'
            write_json(directory / 'manifest.json', manifest)


def main():
    import argparse
    parser = argparse.ArgumentParser(description='Render and verify adjacent-version tracking documents locally')
    parser.add_argument('--db', type=Path, required=True)
    parser.add_argument('--repository', type=Path, required=True)
    parser.add_argument('--output', type=Path, required=True)
    parser.add_argument('--asset-url', required=True)
    parser.add_argument('--reference-url')
    parser.add_argument('--attach', action='store_true', help='Update function links in the selected local repository')
    args = parser.parse_args()
    result = render(args.db, args.repository.resolve(), args.output.resolve(), args.asset_url, args.reference_url)
    if args.attach:
        attach(args.repository.resolve(), args.output.resolve(), result)


if __name__ == '__main__':
    main()
