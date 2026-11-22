import json
import os
import shutil
import tempfile
from functools import lru_cache
from pathlib import Path

from indexer.ci import REPO, RESEARCH, acquire_input, public_only, publish_worktree, reference_worktree
from indexer.ci_delivery import checkpoint_key, restore_completed, stage_materials
from indexer.ci_structure import asset_record, deliver_asset, get_asset, structure_asset_name, structure_checkpoint
from indexer.reference import reference_path
from indexer.store import LOCAL, digest, read_json, reference_signature, write_json
from indexer.upstream import LIBRARY, TRACKING_POLICY, adjacent_references, tracking_sources
from matcher import tracking, tracking_pages
from matcher.structure import reader


def validate_cache(cache, manifest, identity):
    if (manifest['analysis_revision'], manifest['source_database_sha256'], reference_path(manifest)) != (
            identity['analysis_revision'], digest(cache / 'cache.sqlite'), reference_path(identity)):
        raise ValueError('Published reference and completed checkpoint disagree')


def window_manifests(tag, ref=None):
    version, architecture, _ = checkpoint_key(tag)
    data = {'versionName': version, 'architecture': architecture, 'library': LIBRARY}
    before = adjacent_references(data, REPO, 2, ref=ref)
    after = adjacent_references(data, REPO, 1, following=True, ref=ref)
    return [*before, None, *after]


def window_tags(tag):
    return [f"native-analysis-{entry['version']}-{entry['architecture']}-{entry['analysis_revision']}" if entry else tag
            for entry in window_manifests(tag)]


def missing_structures(tag, *, current_only=False):
    name = structure_asset_name()
    return [candidate for candidate in ([tag] if current_only else window_tags(tag)) if asset_record(candidate, name) is None]


def backfill(tag, publish, *, current_only=False):
    public_only()
    LOCAL.mkdir(exist_ok=True)
    missing = missing_structures(tag, current_only=current_only)
    if missing and not publish:
        raise ValueError('Structure backfill requires publish_reference=true to preserve results between runners')
    for release in missing:
        with tempfile.TemporaryDirectory(prefix='ci-backfill-', dir=LOCAL) as temporary:
            root = Path(temporary)
            cache = root / 'cache'
            data, identity = restore_completed(release, cache)
            structure_checkpoint(cache, lambda: Path(acquire_input(data, Path(os.environ['JAVA_HOME']))['path']),
                                 data, identity, release, root / 'delivery', publish=True)


def restore_window(data, identity, cache, tag, root, ref=None):
    entries = []
    for number, previous in enumerate(window_manifests(tag, ref)):
        if previous is None:
            entries.append((data, identity, cache, tag))
            continue
        old_tag = f"native-analysis-{previous['version']}-{previous['architecture']}-{previous['analysis_revision']}"
        old_cache = root / f'cache-{number}'
        old_data, old_identity = restore_completed(old_tag, old_cache)
        validate_cache(old_cache, previous, old_identity)
        entries.append((old_data, old_identity, old_cache, old_tag))
    return entries


def verify_result(database, config_id):
    with reader(database) as db:
        result = json.loads(db.execute("SELECT value FROM metadata WHERE key='result'").fetchone()[0])
        if (result['format'], result['configuration'], result['complete']) != (2, config_id, True):
            raise ValueError('Release contains an incompatible tracking result')
        if db.execute('PRAGMA quick_check').fetchone()[0] != 'ok' or db.execute('PRAGMA foreign_key_check').fetchone():
            raise ValueError('Tracking Release database failed integrity validation')
    return result


def retire_old_reports(work, versions):
    paths = []
    if {'15.7.2', '15.7.4'} <= set(versions):
        for path in ('research/docs/native-comparison-15.7.2-15.7.4.md',
                     'research/matcher/docs/results-15.7.2-15.7.4.md'):
            if (work / path).is_file():
                (work / path).unlink()
                paths.append(path)
    return paths


def publish_tracking(tag, publish, *, regenerate=False):
    import subprocess

    public_only()
    LOCAL.mkdir(exist_ok=True)
    with tempfile.TemporaryDirectory(prefix='ci-tracking-', dir=LOCAL) as temporary:
        root = Path(temporary)
        cache = root / 'cache'
        data, identity = restore_completed(tag, cache)
        revision = identity['analysis_revision']
        work = reference_worktree(revision + '-tracking') if publish else None
        reference = work / 'research/reference' if work else None
        revision_sha = subprocess.check_output(['git', '-C', str(work), 'rev-parse', 'HEAD'], text=True).strip() if work else None
        manifest_path = reference / reference_path(identity) / 'manifest.json' if work else None
        entries = restore_window(data, identity, cache, tag, root, revision_sha)
        if publish:
            manifest = read_json(manifest_path) if manifest_path.is_file() else None
            if regenerate or not manifest or manifest.get('analysis_revision') != revision or (
                    manifest.get('generator_signature') != reference_signature()):
                archive, _ = structure_checkpoint(cache, None, data, identity, tag, root / 'materials-structure', extract=False)
                stage_materials(cache, data, archive, root / 'reference', reference,
                                base_url=f'https://github.com/{REPO}/blob/{revision_sha}/')
                manifest = read_json(manifest_path)
            validate_cache(cache, manifest, identity)
        if len(entries) == 1:
            if publish:
                manifest.update(comparison_state='no_baseline', tracking_format=2, tracking_navigation_format=1, tracking_policy=TRACKING_POLICY,
                                tracking_sources=tracking_sources([identity]))
                write_json(manifest_path, manifest)
                publish_worktree(work, f'Publish native tracking state {revision}')
            print('No earlier published reference for this ABI', flush=True)
            return
        java_home = Path(os.environ['JAVA_HOME'])

        @lru_cache(maxsize=3)
        def binary(number):
            return Path(acquire_input(entries[number][0], java_home)['path']).resolve()

        datasets = []
        for number, (input_data, version, source, release) in enumerate(entries):
            archive, metrics = structure_checkpoint(source, None, input_data, version, release,
                                                     root / f'structure-{number}', extract=False)
            datasets.append({'cache': source, 'identity': version, 'archive': archive, 'metrics': metrics})
        decisions = RESEARCH / 'comparisons/decisions'
        config_id, _ = tracking.configuration(datasets, decisions)
        name = f'native-tracking-{config_id}.sqlite'
        assets = root / 'delivery'
        database = get_asset(tag, name, assets)
        if database is None:
            datasets = [tracking.load_dataset(entry['cache'], binary(number), entry['archive'], entry['metrics'])
                        for number, entry in enumerate(datasets)]
            generated = tracking.build(datasets, LOCAL / 'tracking', decisions=decisions)
            database = assets / name
            assets.mkdir(exist_ok=True)
            shutil.copyfile(generated, database)
        result = verify_result(database, config_id)
        print(json.dumps({'window': [entry[1]['version'] for entry in entries],
                          'cycles': result['cycles'], 'seconds': result['seconds']}, ensure_ascii=False), flush=True)
        if publish:
            asset_url = f'https://github.com/{REPO}/releases/download/{tag}/{name}'
            destination = work / 'research/comparisons' / identity['architecture'] / result['run']
            tracking_pages.render(database, work, destination, asset_url)
            tracking_pages.attach(work, destination, result, verify=True)
            tracking_pages.refresh_affected_navigation(work, result)
            deliver_asset(tag, database)
            retired = retire_old_reports(work, [entry[1]['version'] for entry in entries])
            publish_worktree(work, f'Publish native tracking window {result["run"]}',
                             ('research/reference', 'research/comparisons', *retired))
