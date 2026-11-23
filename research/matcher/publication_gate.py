import re
import time
from functools import lru_cache
from itertools import takewhile

from indexer.reference import function_path, reference_path, verify_reference_links
from indexer.store import digest, read_json, write_json
from matcher.comparison_pages import (FUNCTION_HEADING, FUNCTION_TRACKING, comparison_catalog, comparison_identity,
                                      confirmed_peer, navigation_neighbors, relative_link, tracking_content, valid_comparison_entries)
from matcher.report import peak_memory


def verify_publication(repository, destination, result, touched=()):
    started = time.monotonic()
    reference = repository / 'research/reference'
    directory = repository / 'research/comparisons'
    active = read_json(directory / 'active.json')['intervals'] if destination else []
    edges = {(tuple(sorted(item['older'].items())), tuple(sorted(item['newer'].items()))): item['page'] for item in active}
    if len(edges) != len(active):
        raise ValueError('Duplicate active comparison interval')

    @lru_cache(maxsize=6)
    def catalog(source):
        return comparison_catalog(source)

    @lru_cache(maxsize=12)
    def navigation(run):
        manifest = read_json(run / 'manifest.json')
        path = run / 'navigation.json'
        if manifest['navigation_sha256'] != digest(path):
            raise ValueError(f'Comparison ledger SHA-256 mismatch: {run}')
        data = read_json(path)
        intervals = {(data['sources'][item['older']]['version'], data['sources'][item['newer']]['version']):
                (data['sources'][item['older']], data['sources'][item['newer']], item) for item in data['pairs']}
        return intervals, manifest.get('reference_url')

    @lru_cache(maxsize=48)
    def comparison_rows(path):
        text = path.read_text(encoding='utf-8-sig')
        return dict(re.findall(r'^<a id="(compare-[^"]+)"></a>\n\n(### .+)$', text, re.MULTILINE))

    pages, links, matches = 0, 0, 0
    if destination:
        intervals, _ = navigation(destination)
        for older, newer, pair in intervals.values():
            entry = edges.get((tuple(sorted(older.items())), tuple(sorted(newer.items()))))
            if not entry or directory / entry != destination / pair['pair'] / 'README.md':
                raise ValueError(f'Publication interval does not have its active comparison: {pair["pair"]}')
    sources = {reference / reference_path(item['identity']) for item in result['sources']} | set(touched)
    for source in sorted(sources):
        manifest = read_json(source / 'manifest.json')
        state = catalog(source)
        if state is None or state.get('navigation_format') != 2:
            if source in touched:
                links += verify_reference_links(source, repository=repository)
                continue
            raise ValueError(f'Missing v3 function navigation: {source}')
        identity = comparison_identity(manifest)
        if state['identity'] != identity:
            raise ValueError(f'Function navigation uses the wrong source: {source}')
        actual = {p.stem.replace('EXTERNAL-', 'EXTERNAL:', 1) for p in source.glob('functions/*/*.md')}
        if actual != set(state['rows']) or len(actual) != manifest.get('functions', len(actual)):
            raise ValueError(f'Function navigation does not cover the source inventory: {source}')
        checked = valid_comparison_entries(state, source, repository)
        neighbors = navigation_neighbors(source, repository)
        peer_identities = {comparison_identity(entry[1])['version']: comparison_identity(entry[1])
                           for _, entry in neighbors if entry}
        start, end = [f'<!-- {mark}kbcs-version-{FUNCTION_TRACKING} -->\n' for mark in ('', '/')]
        for address, entries in state['rows'].items():
            page = source / function_path(address)
            if entries != checked.get(address, []):
                raise ValueError(f'Function navigation has a missing or stale target: {page}')
            with page.open(encoding='utf-8-sig') as stream:
                header = ''.join(takewhile(lambda line: line != FUNCTION_HEADING, stream))
            expected = tracking_content(source, address, entries, repository, neighbors, identity=identity)
            if header.count(start) != 1 or header.count(end) != 1 or f'{start}{expected}\n{end}' not in header:
                raise ValueError(f'Function navigation body differs from its ledger: {page}')
            for entry in entries:
                older, newer = entry['older'], entry['newer']
                own_other = newer if identity == older else older if identity == newer else None
                if not own_other or peer_identities.get(own_other['version']) != own_other:
                    raise ValueError(f'Function navigation has a nonadjacent endpoint: {page}')
                filename, _, anchor = entry['target'].partition('#')
                comparison = repository / filename
                pair_page = comparison.with_name('README.md')
                declared = edges.get((tuple(sorted(older.items())), tuple(sorted(newer.items()))))
                if declared and directory / declared != pair_page:
                    raise ValueError(f'Function navigation points to an inactive comparison: {page}')
                intervals, base_url = navigation(pair_page.parents[1])
                left, right, pair = intervals[(older['version'], newer['version'])]
                if (left, right) != (older, newer) or pair['pair'] != comparison.parent.name:
                    raise ValueError(f'Comparison source or direction differs from its ledger: {page}')
                counterpart = confirmed_peer(identity, address, entry)
                if entry['kind'] != 'accepted':
                    continue
                # 未移行の旧区間は根拠を閲覧できるが、確定リンクは新方式の台帳からだけ作る。
                if counterpart is None and not declared:
                    continue
                if counterpart is None or not anchor:
                    raise ValueError(f'Accepted comparison is missing its counterpart: {page}')
                peer, other = counterpart
                peer_source = reference / reference_path(peer)
                peer_catalog = catalog(peer_source)
                if peer_catalog is None or entry not in peer_catalog['rows'].get(other, ()):
                    raise ValueError(f'Asymmetric counterpart: {page}')
                a, b = entry['match']
                if pair['details'].get(a) != [b, comparison.name, anchor]:
                    raise ValueError(f'Accepted endpoint differs from the comparison ledger: {page}')
                heading = comparison_rows(comparison).get(anchor, '')
                for identity_and_address in ((older, a), (newer, b)):
                    src, location = identity_and_address
                    target = reference / reference_path(src) / function_path(location)
                    href = base_url + target.relative_to(repository).as_posix() if base_url else relative_link(target, comparison)
                    if f'[`{location}`]({href})' not in heading or not target.is_file():
                        raise ValueError(f'Comparison row is missing a function backlink: {comparison}#{anchor}')
                matches += 1
            pages += 1
        links += verify_reference_links(source, repository=repository)
    manifest_path = destination / 'manifest.json' if destination else None
    manifest = read_json(manifest_path) if manifest_path else {}
    report = {'function_pages': pages, 'confirmed_links': matches, 'reference_links': links,
              'comparison_links': manifest.get('verified_links', 0), 'seconds': round(time.monotonic() - started, 3)}
    report['process_peak_rss_bytes'] = peak_memory()
    for source in sources:
        path = source / 'manifest.json'
        reference_manifest = read_json(path)
        if not destination or reference_manifest.get('tracking_run') == result['run']:
            write_json(path, reference_manifest | {'validation_state': 'validated'})
    if manifest_path and manifest.get('validation_state') != 'validated':
        write_json(manifest_path, manifest | {'validation_state': 'validated', 'publication_check': report})
    return report
