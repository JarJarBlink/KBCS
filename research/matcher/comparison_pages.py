import os
import re
from pathlib import Path
from itertools import takewhile

from indexer.reference import GIT_FILE_LIMIT, function_path, reference_path
from indexer.store import read_json, write_json


DIRECTIONS = {'previous': 'next', 'next': 'previous'}
COMPARISON_LINK = '[直前の公開版との関数対応](comparison.md)'
FUNCTION_TRACKING = 'function-tracking'
FUNCTION_HEADING = '## 関数情報\n'


def relative_link(target, page):
    return Path(os.path.relpath(target, page.parent)).as_posix()


def preserve_published_links(repository, previous, base_url):
    # 旧ランに残す本文は、差し替え前のGitコミットで同じ関数を参照する。
    comparison = repository / 'research/comparisons' / previous.parent.name
    targets = {}
    for page in comparison.glob('*/*/*.md'):
        original = page.read_bytes()
        text = original.decode('utf-8-sig')
        fence = None
        lines = []

        def pin(match):
            href = match[1]
            if ':' in href or href.startswith('/'):
                return match[0]
            path, separator, anchor = href.partition('#')
            target = Path(os.path.normpath(page.parent / path))
            if not target.is_relative_to(previous):
                return match[0]
            if target not in targets:
                targets[target] = target.is_file()
            if not targets[target]:
                return match[0]
            return '](' + base_url + target.relative_to(repository).as_posix() + separator + anchor + ')'

        for line in text.splitlines(keepends=True):
            marker = re.match(r'^(~{3,}|\x60{3,})', line)
            if marker and (fence is None or marker[0] == fence):
                fence = marker[0] if fence is None else None
            lines.append(line if fence else re.sub(r'\]\(([^)]+)\)', pin, line))
        updated = ''.join(lines).encode('utf-8-sig')
        if updated != original:
            page.write_bytes(updated)


def overlay(path, direction, link, heading):
    if path.is_symlink() or path.parent.resolve() != path.parent.absolute():
        raise ValueError(f'Unsafe reference page path: {path}')
    before = path.read_bytes()
    text = before.decode('utf-8-sig')
    match = re.search(r'^' + re.escape(heading.rstrip('\n')) + r'\r?\n', text, re.MULTILINE)
    if not match:
        raise ValueError(f'Unexpected reference page format: {path}')
    header = text[:match.start()].replace('\r\n', '\n')
    separator, body = heading, text[match.end():]
    start, end = f'<!-- kbcs-version-{direction} -->', f'<!-- /kbcs-version-{direction} -->'
    block = f'{start}\n{link}\n{end}\n\n' if link else ''
    header, replaced = re.subn(rf'^{start}\n.*?^{end}\n\n', lambda _: block, header, flags=re.MULTILINE | re.DOTALL)
    if replaced > 1:
        raise ValueError(f'Duplicate navigation blocks: {path}')
    if not replaced:
        header += block
    content = (header + separator + body).encode('utf-8-sig')
    if len(content) > GIT_FILE_LIMIT:
        raise ValueError(f'Linked page exceeds Git file limit: {path}')
    if content != before:
        path.write_bytes(content)


def catalog_path(source, direction):
    return source / 'version-links' / (direction + '.json')


def function_comparison_links(page):
    with page.open(encoding='utf-8-sig') as source:
        header = ''.join(takewhile(lambda line: line != FUNCTION_HEADING, source))
    block = header.partition(f'<!-- kbcs-version-{FUNCTION_TRACKING} -->\n')[2]
    block = block.partition(f'<!-- /kbcs-version-{FUNCTION_TRACKING} -->')[0]
    entries = re.findall(r'^- \[([^\]]+)\]\((.+)$', block, re.MULTILINE)
    links = dict(entries)
    if len(links) != len(entries):
        raise ValueError(f'Duplicate comparison links: {page}')
    return links


def attach_function_comparisons(page, links):
    if links:
        content = '\n'.join(f'- [{title}]({target}' for title, target in sorted(
            links.items(), key=lambda item: tuple(map(int, re.findall(r'\d+', item[0])))))
        overlay(page, FUNCTION_TRACKING, '## 連続バージョンの比較\n\n' + content, FUNCTION_HEADING)
    else:
        overlay(page, FUNCTION_TRACKING, '', FUNCTION_HEADING)


def comparison_identity(identity):
    return {key: identity[key] for key in ('version', 'architecture', 'sha256', 'analysis_revision')}


def comparison_catalog(source):
    path = source / 'function-comparisons.json'
    if not path.is_file():
        return None
    catalog = read_json(path)
    if 'intervals' in catalog:
        catalog['rows'] = {address: [catalog['intervals'][entry['interval']] |
            {key: value for key, value in entry.items() if key != 'interval'} for entry in entries]
            for address, entries in catalog['rows'].items()}
    return catalog


def write_comparison_catalog(source, catalog):
    # 版の出典は区間ごとに共用し、関数ごとに同じSHAや版を繰り返し保存しない。
    intervals, rows = {}, {}
    for address, entries in catalog['rows'].items():
        rows[address] = []
        for entry in entries:
            key = entry['older']['version'] + '--' + entry['newer']['version']
            intervals[key] = {side: entry[side] for side in ('older', 'newer')}
            rows[address].append({'interval': key, 'target': entry['target'], 'kind': entry['kind']})
    write_json(source / 'function-comparisons.json', catalog | {'intervals': intervals, 'rows': rows})


def valid_comparison_entries(catalog, source, repository):
    if not catalog or catalog.get('format') != 1:
        return {}
    manifest = read_json(source / 'manifest.json')
    if catalog['identity'] != comparison_identity(manifest):
        return {}
    rows = {}
    valid = {}
    targets = {}
    for address, entries in catalog['rows'].items():
        seen = set()
        for entry in entries:
            # 版・ABI・SO・解析リビジョンの異なる区間は持ち越さない。
            key = (tuple(sorted(entry['older'].items())), tuple(sorted(entry['newer'].items())))
            interval = (entry['older']['version'], entry['newer']['version'])
            if interval in seen or tuple(map(int, interval[0].split('.'))) >= tuple(map(int, interval[1].split('.'))):
                raise ValueError('Duplicate or reversed comparison interval')
            seen.add(interval)
            if key not in valid:
                valid[key] = all((repository / 'research/reference' / reference_path(identity) / 'manifest.json').is_file()
                    and comparison_identity(read_json(repository / 'research/reference' / reference_path(identity) / 'manifest.json')) == identity
                    for identity in (entry['older'], entry['newer']))
            if not valid[key]:
                continue
            target, _, anchor = entry['target'].partition('#')
            if target not in targets:
                page = (repository / target).resolve()
                if page.is_relative_to(repository) and page.is_file():
                    targets[target] = set(re.findall(r'<a id="([^"]+)"></a>', page.read_text(encoding='utf-8-sig')))
                else:
                    targets[target] = None
            markers = targets[target]
            if markers is not None:
                if anchor and anchor not in markers:
                    raise ValueError(f'Missing comparison anchor: {entry["target"]}')
                rows.setdefault(address, []).append(entry)
    return rows


def render_comparison_catalog(source, catalog, repository, *, verify=False):
    for address, entries in catalog['rows'].items():
        page = source / function_path(address)
        if not page.is_file():
            if verify:
                raise ValueError(f'Missing function page: {page}')
            continue
        links = {}
        for entry in entries:
            target, _, anchor = entry['target'].partition('#')
            href = relative_link(repository / target, page) + ('#' + anchor if anchor else '')
            title = f"v{entry['older']['version']} → v{entry['newer']['version']}"
            suffix = {'accepted': '', 'review': '（要確認）', 'index': '（版の比較一覧）'}[entry['kind']]
            links[title] = href + ')' + suffix
        attach_function_comparisons(page, links)
        if verify and function_comparison_links(page) != links:
            raise ValueError(f'Function comparison links differ from the catalog: {page}')
    write_comparison_catalog(source, catalog)


def carry_function_comparisons(previous, source, repository=None):
    catalog = comparison_catalog(previous)
    if not catalog or not (source / 'manifest.json').is_file():
        return
    manifest = read_json(source / 'manifest.json')
    if (catalog['identity'] != comparison_identity(manifest)
            or read_json(previous / 'manifest.json')['source_database_sha256'] != manifest['source_database_sha256']):
        return
    repository = repository or previous.parents[4]
    catalog['rows'] = valid_comparison_entries(catalog, previous, repository)
    # 生成先は公開ツリーと同じ深さなので、リンクは公開先を基準に作る。
    for page in source.glob('functions/*/*.md'):
        original = previous / page.relative_to(source)
        if original.is_file():
            links = function_comparison_links(original)
            titles = {f"v{entry['older']['version']} → v{entry['newer']['version']}"
                      for entry in catalog['rows'].get(page.stem.replace('EXTERNAL-', 'EXTERNAL:'), ())}
            attach_function_comparisons(page, {title: value for title, value in links.items() if title in titles})
    write_comparison_catalog(source, catalog)


def render_links(source, direction, catalog, previous=None):
    own = Path(*source.parts[-3:])
    previous_addresses = {row[0] for row in previous['rows']} if previous else set()
    rows = {row[0]: row[1:] for row in catalog['rows']} if catalog else {}
    index_link = ''
    if catalog:
        peer = reference_path(catalog['peer'])
        newer = own if direction == 'previous' else peer
        change_index = newer / 'changes/README.md'
        version = catalog['peer']['version']
        label = '前の版からの変更' if direction == 'previous' else '次の版への変更'
        index_link = f'- [{label} · v{version}]({relative_link(change_index, own / "README.md")})'
    for address in sorted(previous_addresses | rows.keys()):
        page = own / function_path(address)
        link = ''
        if address in rows:
            other, changed = rows[address]
            link = f'**別版の対応** [v{version} `{other}`]({relative_link(peer / function_path(other), page)})'
            if changed:
                diff_address = address if direction == 'previous' else other
                diff = newer / 'changes' / (diff_address + '.md')
                link += f' · [本文差分]({relative_link(diff, page)})'
        overlay(source / function_path(address), direction, link, '## 関数情報\n')
    overlay(source / 'README.md', direction, index_link, '## アドレス索引\n')


def remove_change_pages(source, catalog):
    changes = source / 'changes'
    if changes.resolve() != changes.absolute():
        raise ValueError(f'Unsafe change directory: {changes}')
    for address, _, changed in catalog['rows']:
        if changed:
            (changes / function_path(address).name).unlink(missing_ok=True)
    (changes / 'README.md').unlink(missing_ok=True)


def disconnect(reference, source, direction, *, replacing=False):
    path = catalog_path(source, direction)
    if not path.is_file():
        return
    catalog = read_json(path)
    peer = reference / reference_path(catalog['peer'])
    inverse = DIRECTIONS[direction]
    peer_path = catalog_path(peer, inverse)
    if not replacing:
        render_links(source, direction, None, catalog)
        if direction == 'previous':
            remove_change_pages(source, catalog)
        path.unlink()
    if peer_path.is_file():
        reciprocal = read_json(peer_path)
        if reference_path(reciprocal['peer']) == Path(*source.parts[-3:]):
            render_links(peer, inverse, None, reciprocal)
            peer_path.unlink()
            if inverse == 'previous':
                remove_change_pages(peer, reciprocal)
                (peer / 'comparison.md').unlink(missing_ok=True)
                readme = peer / 'README.md'
                text = readme.read_bytes().replace(('\n' + COMPARISON_LINK + '\n').encode(), b'')
                readme.write_bytes(text)
                manifest = read_json(peer / 'manifest.json')
                manifest['comparison_state'] = 'pending'
                write_json(peer / 'manifest.json', manifest)


def carry_links(previous, source):
    for direction in DIRECTIONS:
        path = catalog_path(previous, direction)
        if path.is_file():
            catalog = read_json(path)
            if direction == 'previous':
                changes = source / 'changes'
                changes.mkdir(exist_ok=True)
                for name in ['README.md', *(function_path(a).name for a, _, changed in catalog['rows'] if changed)]:
                    (changes / name).write_bytes((previous / 'changes' / name).read_bytes())
            render_links(source, direction, catalog)
            write_json(catalog_path(source, direction), catalog)
