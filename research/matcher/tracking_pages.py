import html
import json
import os
import re
import shutil
import tempfile
from collections import defaultdict
from functools import lru_cache
from itertools import islice
from pathlib import Path
from urllib.parse import urlsplit
from urllib.request import url2pathname

from indexer.reference import fenced, reference_path
from indexer.store import digest, read_json, write_json
from indexer.upstream import TRACKING_POLICY, tracking_sources
from matcher.comparison_pages import (COMPARISON_LINK, DIRECTIONS, attach_function_comparisons, catalog_path,
                                      disconnect, comparison_catalog, comparison_identity, valid_comparison_entries,
                                      render_comparison_catalog, overlay, versions)
from matcher.structure import fingerprint, reader
from matcher.tracking import FORMAT


PAGE_SIZE = 100
GROUPS = {'reference_unresolved': '未解決の参照', 'alignment_unresolved': '命令位置の検査未完了',
          'machine_only_observed': '機械語・配置・再配置の差分候補',
          'detail_skipped': '機械語・CFG・記録された参照の一致で詳細検査を省略',
          'no_difference_in_scope': '検査範囲で差分なし', 'unavailable': '未検証・解析不能'}


def groups():
    excluded = ','.join(f"'{status}'" for status in GROUPS)
    for slug, importance, heading in (('priority', 'critical', '最優先の変更候補'),
                                      ('high', 'high', '高優先の変更候補'),
                                      ('inspection', 'review', '要調査の変更候補')):
        yield slug, heading, f"json_extract(l.evidence,'$.importance')='{importance}' AND l.status NOT IN ({excluded})"
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
    validated, markers = set(), {}
    checked = 0
    for page in directory.rglob('*.md'):
        content = page.read_text(encoding='utf-8-sig')
        anchors = re.findall(r'<a id="([^"]+)"></a>', content)
        if len(anchors) != len(set(anchors)):
            raise ValueError(f'Duplicate tracking anchor in {page}')
        fence = None
        for line in content.splitlines():
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
                if anchor:
                    if key not in markers:
                        markers[key] = page_anchors(path)
                    if anchor not in markers[key]:
                        raise ValueError(f'Broken tracking anchor in {page}: {href}')
                checked += 1
    return checked


def page_anchors(page):
    return set(re.findall(r'<a id="([^"]+)"></a>', page.read_text(encoding='utf-8-sig')))


def render(database, repository, destination, asset_url, reference_url=None):
    checksum = digest(database)
    if destination.exists():
        existing = read_json(destination / 'manifest.json')
        if (existing['database_sha256'] != checksum or existing.get('asset_url') != asset_url
                or not (destination / 'README.md').is_file()):
            raise ValueError('Published tracking directory belongs to a different or incomplete result')
        # 同じDBの旧資料形式だけを作り直す。出典の固定コミットは維持する。
        reference_url = existing['reference_url']
        if existing.get('navigation_format') == 2 and (destination / 'navigation.json').is_file():
            if existing.get('navigation_sha256') != digest(destination / 'navigation.json'):
                raise ValueError('Comparison navigation SHA-256 mismatch')
            verify_links(destination, repository, asset_url, reference_url)
            return read_json(destination / 'summary.json')
    destination.parent.mkdir(parents=True, exist_ok=True)
    # 同じ深さの一時ディレクトリで、版資料への相対リンクを保ったまま生成する。
    with tempfile.TemporaryDirectory(prefix='.tracking-', dir=destination.parent) as temporary:
        staged = Path(temporary)
        result = render_pages(database, repository, staged, asset_url, reference_url, database_sha256=checksum)
        checked = verify_links(staged, repository, asset_url, reference_url)
        manifest = read_json(staged / 'manifest.json')
        write_json(staged / 'manifest.json', manifest | {'verified_links': checked,
                                                        'asset_url': asset_url, 'reference_url': reference_url, 'navigation_format': 2,
                                                        'validation_state': 'pending_full_validation',
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


def render_pages(database, repository, destination, asset_url, reference_url, *, database_sha256=None):
    checksum = database_sha256 or digest(database)
    with reader(database) as db:
        result = json.loads(db.execute("SELECT value FROM metadata WHERE key='result'").fetchone()[0])
        if result['complete'] is not True or result['format'] not in (2, FORMAT):
            raise ValueError('A completed v2 or v3 tracking database is required')
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

        @lru_cache(maxsize=160)
        def instruction_anchors(number, address):
            _, function = nodes[number, address]
            assembly = function.parents[2] / 'assembly' / function.parent.name
            return {anchor: target for target in [function, *sorted(assembly.glob(f'{address}-*.md'))]
                    for anchor in page_anchors(target) if anchor.startswith('insn-')}

        def site_link(number, address, site, page):
            anchor = f'insn-{site}'
            target = instruction_anchors(number, address).get(anchor)
            if target is None:
                return f'`{label(site)}`（命令位置の公開資料なし）'
            url = reference_url + target.relative_to(repository).as_posix() if reference_url else link(target, page)
            return f'[`{label(site)}`]({url}#{anchor})'

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
                   f'SQLite SHA-256 `{checksum}`', '',
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
                rows = db.execute(f"""SELECT l.old,l.new,l.evidence,r.reason,r.evidence,
                        r.verdict!='accepted' OR EXISTS (SELECT 1 FROM conflict_edges c WHERE c.pair=l.pair AND c.old=l.old AND c.new=l.new)
                    FROM logic l JOIN relations r ON l.pair=r.pair AND l.old=r.old AND l.new=r.new
                    WHERE l.pair=? AND r.verdict IN ('accepted','held_conflict') AND {condition} ORDER BY l.old""", (pair,))

                def pair_row(row, detail):
                    a, b, raw, reason, relation, conflict = row
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
                    state = '要確認' if conflict else '採用'
                    delta = f' · 移動量 `{int(b,16)-int(a,16):+#x}`' if re.fullmatch('[0-9a-f]+', a) and re.fullmatch('[0-9a-f]+', b) else ''
                    separator = '／候補 ' if conflict else ' → '
                    lines = [f'<a id="{anchor}"></a>', '',
                             f'### {node(i, a, detail)}{separator}{node(j, b, detail, named=True)}', '',
                             f'{state}{delta} · 根拠 `{reason}` · ' + ' · '.join(extra), '',
                             f'- 旧版 {call_context(i, a, detail)}', f'- 新版 {call_context(j, b, detail)}', '']
                    if tags:
                        lines.extend([f'変更の種類 {tags}', ''])
                    coverage = record.get('instruction_correspondence')
                    if coverage:
                        before, after = coverage['coverage']
                        lines.extend([f'命令の説明率　旧版 {before:.2%} / 新版 {after:.2%}', ''])
                    cfg = json.loads(relation).get('cfg_coverage') or (coverage or {}).get('cfg_coverage')
                    if cfg:
                        lines.extend([f'CFGの説明率　旧版 {cfg[0]:.2%} / 新版 {cfg[1]:.2%}', ''])
                    if not coverage and not cfg:
                        lines.extend(['命令とCFGの説明率は未計測。', ''])
                    if record.get('normalization_basis'):
                        lines.extend(['正規化の根拠 ' + ' · '.join(f'`{value}`' for value in record['normalization_basis']), ''])
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
                    sample, sites = [], [[], []]
                    for change in record.get('details', ())[:3]:
                        sample.extend('- ' + label(site) + ' ' + json.dumps(op, ensure_ascii=False)
                                      for site, op in change['old'][:4])
                        sample.extend('+ ' + label(site) + ' ' + json.dumps(op, ensure_ascii=False)
                                      for site, op in change['new'][:4])
                        for side, side_key in enumerate(('old', 'new')):
                            sites[side].extend(site for site, _ in change[side_key][:4])
                        data = change.get('machine_bytes', ())
                        for side, site, value in zip(('- ', '+ '), change.get('sites', ()), data):
                            if value:
                                sample.append(f'{side}{site} bytes {value}')
                    for change in record.get('machine_sample', ()):
                        for side, side_key in enumerate(('old', 'new')):
                            site, data = change[side_key]
                            sites[side].append(site)
                            sample.append(('- ' if side == 0 else '+ ') + f'{site} {data}')
                    if sample:
                        lines.extend(['#### 変更候補の命令位置', ''])
                        for (number, address, side), selected in zip(((i, a, '旧版'), (j, b, '新版')), sites):
                            if selected:
                                locations = ' · '.join(site_link(number, address, site, detail) for site in dict.fromkeys(selected))
                                lines.append(f'- {side} {locations}')
                        lines.extend(['', fenced('\n'.join(sample), 'diff'), ''])
                    if record.get('detail_truncated') or len(record.get('details', ())) > 3:
                        lines.extend(['全命令差分は構造索引を使い `matcher.logic_detail` でこのペアだけ展開できます。', ''])
                    return lines

                pair_index.extend(paged(page, title, slug, heading, rows, pair_row))
            pair_index.extend(['', '## 競合・未確定と再調査の優先順', '',
                               '分割・統合・インライン化候補を先に並べています。詳細根拠と全参照はSQLiteで調べられます。', ''])
            reviews = db.execute("""SELECT side,address,kind,targets,evidence FROM review WHERE pair=?
                AND kind NOT IN ('unresolved','added','deleted','addition_candidate','deletion_candidate','likely_new_entry','likely_removed_entry')
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
            pair_index.extend(['', '## 集計・検証', '', fenced(json.dumps(public_summary(json.loads(summary)), ensure_ascii=False, indent=2), 'json')])
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
        write_json(destination / 'navigation.json', {'format': 2, 'sources': [comparison_identity(identity) for identity in identities], 'pairs': navigation})
        write_json(destination / 'summary.json', public_summary(result))
        write_json(destination / 'manifest.json', {'format': FORMAT, 'run': result['run'], 'database_sha256': checksum})
    return result


def public_summary(value):
    if isinstance(value, dict):
        return {key: public_summary(item) for key, item in value.items()
                if key not in ('added', 'deleted', 'addition_candidate', 'deletion_candidate', 'likely_new_entry', 'likely_removed_entry')}
    if isinstance(value, list):
        return [public_summary(item) for item in value]
    return value


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
    if not isinstance(navigation, dict) or navigation.get('format') not in (1, 2) or navigation['sources'] != [comparison_identity(identity) for identity in identities]:
        raise ValueError('Comparison navigation belongs to different analysis sources')
    modern = navigation['format'] == 2
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
    published = [comparison_identity(manifest) for _, manifest in versions(reference, identities[0])] if modern else []
    active = {(left['version'], right['version']) for left, right in zip(published, published[1:])}
    if modern and any((identities[pair['older']]['version'], identities[pair['newer']]['version']) not in active for pair in pairs):
        raise ValueError('Tracking window no longer contains adjacent published sources')
    for i, identity in enumerate(identities):
        directory = reference / reference_path(identity)
        old_catalog = comparison_catalog(directory)
        retained = valid_comparison_entries(old_catalog, directory, repository)
        rows = {}
        for page in sorted(directory.glob('functions/*/*.md')):
            address = page.stem.replace('EXTERNAL-', 'EXTERNAL:', 1)
            related = {i: address}
            if not modern:
                for pair, inverse in reversed(backward):
                    if related.get(pair['newer']) in inverse:
                        related[pair['older']] = inverse[related[pair['newer']]]
                for pair in pairs:
                    if row := pair['details'].get(related.get(pair['older'])):
                        related[pair['newer']] = row[0]
            entries = {(entry['older']['version'], entry['newer']['version']): entry for entry in retained.get(address, ())
                       if not modern or ((entry['older']['version'], entry['newer']['version']) in active
                           and identity['version'] in (entry['older']['version'], entry['newer']['version']))}
            for pair, inverse in backward:
                old, new = pair['older'], pair['newer']
                if modern and i not in (old, new):
                    continue
                directory_pair = destination / pair['pair']
                first = inverse.get(address) if modern and i == new else related.get(old)
                row = pair['details'].get(first)
                second = row[0] if modern and row else related.get(new)
                review = pair['reviews'][0].get(first) or pair['reviews'][1].get(second)
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
                if modern and kind == 'accepted' and i in (old, new):
                    entry['match'] = [first, row[0]]
                entries[identities[old]['version'], identities[new]['version']] = entry
            rows[address] = sorted(entries.values(), key=lambda entry: tuple(map(int, entry['older']['version'].split('.'))))
        catalogs.append((directory, {'format': 1, 'navigation_format': navigation['format'],
                        'identity': comparison_identity(identity), 'rows': rows}))
    # 全リンク先を確認してから、各関数のナビゲーションを更新する。
    for directory, catalog in catalogs:
        render_comparison_catalog(directory, catalog, repository, verify=verify)
    return {directory: next(iter(catalog['rows'].values()), ()) for directory, catalog in catalogs}


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
    catalogs = attach_adjacent_links(reference, destination, identities, verify=verify)
    retire_legacy(reference, identities)
    for i, source in enumerate(result['sources']):
        directory = reference / reference_path(source['identity'])
        page = directory / 'README.md'
        manifest = read_json(directory / 'manifest.json')
        overlay(page, 'tracking', f'[バージョン間の関数追跡]({link(repository / "research/comparisons/README.md", page)})', '## アドレス索引\n')
        reference_guidance(repository, page, manifest['version'], catalogs[directory])
        sources = tracking_sources(identities[max(0, i-2):i + 1])
        if i < 2 and len(manifest.get('tracking_sources', ())) > len(sources):
            previous = manifest['tracking_sources']
            if previous[-len(sources):] == sources:
                sources = previous
        manifest.update(comparison_state='complete' if i else manifest.get('comparison_state', 'no_baseline'),
                        tracking_format=result['format'], tracking_navigation_format=publication['navigation_format'],
                        tracking_policy=TRACKING_POLICY, tracking_run=result['run'], validation_state='pending_full_validation',
                        tracking_page=(destination / 'README.md').relative_to(repository).as_posix(),
                        tracking_sources=sources)
        write_json(directory / 'manifest.json', manifest)
    refresh_active_index(repository, destination)


def reference_guidance(repository, readme, version, entries):
    guidance = []
    for entry in entries:
        if version not in (entry['older']['version'], entry['newer']['version']):
            continue
        following = entry['older']['version'] == version
        caption, peer = ('次の公開版との比較', entry['newer']['version']) if following else ('前の公開版との比較', entry['older']['version'])
        overview = (repository / entry['target'].split('#', 1)[0]).with_name('README.md')
        guidance.append(f'[{caption} v{peer}]({link(overview, readme)})')
    overlay(readme, 'tracking-neighbors', '\n\n'.join(guidance), '## アドレス索引\n')


def refresh_active_index(repository, destination):
    root = repository / 'research/comparisons'
    reference = repository / 'research/reference'
    registry = root / 'active.json'
    previous = read_json(registry)['intervals'] if registry.is_file() else []
    current = {}
    live = {}
    for path in reference.glob('*/*/*/manifest.json'):
        manifest = read_json(path)
        family = manifest['architecture'], manifest.get('library')
        if family not in live:
            ordered = [comparison_identity(entry) for _, entry in versions(reference, manifest)]
            live[family] = list(zip(ordered, ordered[1:]))
    navig = read_json(destination / 'navigation.json')
    directory = destination.relative_to(root)
    declared = [{'older': navig['sources'][pair['older']], 'newer': navig['sources'][pair['newer']],
                 'page': (directory / pair['pair'] / 'README.md').as_posix()} for pair in navig['pairs']]
    for entry in previous + declared:
        pair = entry['older'], entry['newer']
        if any(pair in edges for edges in live.values()) and (root / entry['page']).is_file():
            current[(pair[0]['architecture'], pair[0]['version'], pair[1]['version'])] = entry
    intervals = [current[key] for key in sorted(current, key=lambda key: (key[0], *(
        tuple(map(int, version.split('.'))) for version in key[1:])))]
    write_json(registry, {'format': 1, 'intervals': intervals})
    shown = {(root / item['page']).parent for item in intervals}
    archived = [path for path in sorted(root.glob('*/*/*-*/README.md')) if path.parent not in shown]
    write_page(root / 'archive.md', ['# 過去の比較区間', '', '現行の関数対応判定には使いません。', '', *(
        f'- [{path.parent.relative_to(root).as_posix()}]({path.relative_to(root).as_posix()})' for path in archived)])
    write_page(root / 'README.md', ['# ネイティブ関数の追跡資料', '', '## 現行の隣接公開版', '', *(
        f'- [v{item["older"]["version"]} → v{item["newer"]["version"]} · {item["older"]["architecture"]}]({item["page"]})'
        for item in intervals), '', '[過去の比較区間](archive.md)'])


def refresh_affected_navigation(repository, result):
    # 同版の出典変更と、途中版追加で隣接でなくなった区間だけを更新する。
    reference = repository / 'research/reference'
    identities = [row['identity'] for row in result['sources']]
    published = versions(reference, identities[0])
    manifests = {entry['version']: (path, entry) for path, entry in published}
    neighbors = set(zip(manifests, list(manifests)[1:]))
    live = {version: comparison_identity(manifest) for version, (_, manifest) in manifests.items()}

    def valid(entry):
        older, newer = entry['older'], entry['newer']
        return ((older['version'], newer['version']) in neighbors
                and live.get(older['version']) == older and live.get(newer['version']) == newer)

    touched = set()
    for version, (directory, manifest) in manifests.items():
        catalog = comparison_catalog(directory)
        if not catalog:
            continue
        intervals = catalog.get('intervals', {})
        same_source = catalog['identity'] == live[version]
        if same_source and all(map(valid, intervals.values())):
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
        touched.add(directory)
        # 出典が変わった旧ランへの目次リンクを、有効な隣接区間で作り直す。
        readme = directory / 'README.md'
        reference_guidance(repository, readme, version, next(iter(valid_rows.values()), ()))
        if not same_source or manifest.get('tracking_run') != result['run']:
            overlay(readme, 'tracking', '', '## アドレス索引\n')
            for key in ('tracking_run', 'tracking_page', 'tracking_sources'):
                manifest.pop(key, None)
            manifest['comparison_state'] = 'pending'
            write_json(directory / 'manifest.json', manifest)
    return touched


def main():
    import argparse
    parser = argparse.ArgumentParser(description='Render and verify adjacent-version tracking documents locally')
    parser.add_argument('--db', type=Path, required=True)
    parser.add_argument('--repository', type=Path, required=True)
    parser.add_argument('--output', type=Path, required=True)
    parser.add_argument('--asset-url', required=True)
    parser.add_argument('--reference-url')
    parser.add_argument('--attach', action='store_true', help='Update function links in the selected local repository')
    parser.add_argument('--verify-full', action='store_true', help='Run the full publication gate after --attach')
    args = parser.parse_args()
    if args.verify_full and not args.attach:
        parser.error('--verify-full requires --attach')
    result = render(args.db, args.repository.resolve(), args.output.resolve(), args.asset_url, args.reference_url)
    if args.attach:
        repository, destination = args.repository.resolve(), args.output.resolve()
        attach(repository, destination, result)
        touched = refresh_affected_navigation(repository, result)
        if args.verify_full:
            from matcher.publication_gate import verify_publication
            verify_publication(repository, destination, result, touched)


if __name__ == '__main__':
    main()
