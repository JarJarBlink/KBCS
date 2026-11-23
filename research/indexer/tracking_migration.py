import argparse
import hashlib
import json
import re
import subprocess
from pathlib import Path

from indexer.store import digest, read_json, reference_signature, write_json
from indexer.upstream import ABI, LIBRARY, TRACKING_POLICY
from matcher.comparison_pages import comparison_identity, versions


def window_key(manifests):
    sources = [comparison_identity(row) | {'library': row['library'], 'cache_sha256': row['source_database_sha256']}
               for row in manifests]
    return hashlib.sha256(json.dumps(sources, sort_keys=True).encode()).hexdigest()


def staging_branch(branch):
    return bool(re.fullmatch(r'codex/native-migration-[a-f0-9]{16}', branch))


def migration(repository, architecture, library, *, base=None):
    entries = versions(repository / 'research/reference', {'architecture': architecture, 'library': library})
    if not entries:
        raise ValueError('No published sources for the requested ABI and library')
    manifests = [entry for _, entry in entries]
    sources = window_key(manifests)
    signature = reference_signature()
    base = base or subprocess.check_output(['git', '-C', str(repository), 'rev-parse', 'HEAD'], text=True).strip()
    identifier = hashlib.sha256(f'{base}:{sources}:{TRACKING_POLICY}:{signature}'.encode()).hexdigest()[:16]
    branch = f'codex/native-migration-{identifier}'
    steps = []
    for index, manifest in enumerate(manifests):
        window = manifests[max(0, index - 2):index + 2]
        expected = window_key(window)
        complete = (manifest.get('migration_window') == expected and manifest.get('validation_state') == 'validated'
                    and manifest.get('tracking_policy') == TRACKING_POLICY and manifest.get('generator_signature') == signature)
        checkpoint = f"native-analysis-{manifest['version']}-{architecture}-{manifest['analysis_revision']}"
        steps.append({'version': manifest['version'], 'window': [row['version'] for row in window], 'complete': complete,
                      'inputs': {'stage': 'references', 'checkpoint': checkpoint, 'publish_reference': True,
                                 'migration_branch': branch, 'expected_window': expected}})
    return {'format': 1, 'base': base, 'branch': branch, 'architecture': architecture, 'library': library,
            'sources': sources, 'policy': TRACKING_POLICY, 'generator_signature': signature, 'steps': steps}


def resume(repository, previous):
    current = migration(repository, previous['architecture'], previous['library'], base=previous['base'])
    keys = ('format', 'branch', 'sources', 'policy', 'generator_signature')
    if any(current[key] != previous[key] for key in keys):
        raise ValueError('Migration sources or generator changed; create a new plan')
    if all(step['complete'] for step in current['steps']) and len(current['steps']) > 1:
        wanted = [comparison_identity(row) for _, row in versions(repository / 'research/reference', current)]
        root = repository / 'research/comparisons'
        actual = []
        for entry in read_json(root / 'active.json')['intervals']:
            if entry['older']['architecture'] != current['architecture']:
                continue
            page = root / entry['page']
            run = page.parents[1]
            manifest = read_json(run / 'manifest.json')
            if (not page.is_file() or manifest.get('validation_state') != 'validated'
                    or manifest.get('navigation_sha256') != digest(run / 'navigation.json')):
                raise ValueError(f'Unvalidated active comparison: {page}')
            actual.append((entry['older'], entry['newer']))
        if sorted(actual, key=lambda edge: edge[0]['version']) != sorted(zip(wanted, wanted[1:]), key=lambda edge: edge[0]['version']):
            raise ValueError('Active comparisons do not cover each adjacent migration interval exactly once')
    return current


def main():
    parser = argparse.ArgumentParser(description='Plan or resume a complete native reference migration without writing to GitHub')
    parser.add_argument('--repository', type=Path, required=True)
    parser.add_argument('--output', type=Path, required=True)
    parser.add_argument('--resume', type=Path)
    parser.add_argument('--abi', default=ABI)
    parser.add_argument('--library', default=LIBRARY)
    args = parser.parse_args()
    plan = (resume(args.repository.resolve(), read_json(args.resume)) if args.resume
            else migration(args.repository.resolve(), args.abi, args.library))
    write_json(args.output, plan)
    print(json.dumps({'branch': plan['branch'], 'remaining': sum(not item['complete'] for item in plan['steps']),
                      'next': next((item['inputs'] for item in plan['steps'] if not item['complete']), None)}))


if __name__ == '__main__':
    main()
