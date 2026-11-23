import json
import gzip
import os
import shutil
import tempfile
from functools import lru_cache
from pathlib import Path

from indexer.ci import REPO, RESEARCH, acquire_input, public_only, publish_worktree, reference_worktree
from indexer.ci_delivery import checkpoint_key, restore_completed, stage_materials
from indexer.ci_structure import asset_record, deliver_asset, get_asset, structure_asset_name, structure_checkpoint
from indexer.network import gh_json
from indexer import migration_delivery
from indexer.reference import reference_path
from indexer.store import LOCAL, digest, read_json, reference_signature, write_json
from indexer.tracking_migration import staging_branch, window_key
from indexer.upstream import LIBRARY, TRACKING_POLICY, adjacent_references, tracking_sources
from matcher import publication_gate, tracking, tracking_pages
from matcher.comparison_pages import comparison_identity, overlay, render_comparison_catalog
from matcher.structure import reader


def validate_cache(cache, manifest, identity):
    if (manifest['analysis_revision'], manifest['source_database_sha256'], reference_path(manifest)) != (
            identity['analysis_revision'], digest(cache / 'cache.sqlite'), reference_path(identity)):
        raise ValueError('Published reference and completed checkpoint disagree')


def window_manifests(tag, ref=None):
    version, architecture, _ = checkpoint_key(tag)
    ref = ref or gh_json(f'repos/{REPO}/git/ref/heads/main')['object']['sha']
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
        if (result['format'], result['configuration'], result['complete']) != (tracking.FORMAT, config_id, True):
            raise ValueError('Release contains an incompatible tracking result')
        if db.execute('PRAGMA quick_check').fetchone()[0] != 'ok' or db.execute('PRAGMA foreign_key_check').fetchone():
            raise ValueError('Tracking Release database failed integrity validation')
    return result


def pack_database(database, archive):
    archive.parent.mkdir(parents=True, exist_ok=True)
    with database.open('rb') as source, archive.open('wb') as target:
        with gzip.GzipFile(filename='', mode='wb', fileobj=target, compresslevel=1, mtime=0) as compressed:
            shutil.copyfileobj(source, compressed, length=4 * 1024**2)


def unpack_database(archive, database):
    budget = shutil.disk_usage(database.parent).free - 512 * 1024**2
    count = 0
    with gzip.open(archive, 'rb') as source, database.open('wb') as target:
        while chunk := source.read(4 * 1024**2):
            count += len(chunk)
            if count > budget:
                raise OSError('Insufficient runner disk to restore the tracking database')
            target.write(chunk)


def publish_tracking(tag, publish, *, regenerate=False):
    import subprocess

    public_only()
    branch, expected = os.environ.get('MIGRATION_BRANCH', ''), os.environ.get('EXPECTED_WINDOW', '')
    base = os.environ.get('MIGRATION_BASE', '')
    if branch or expected or base:
        if not (regenerate and publish and staging_branch(branch) and expected):
            raise ValueError('Migration requires a staging branch, a window hash and a published references replay')
    branch = branch or 'main'
    LOCAL.mkdir(exist_ok=True)
    with tempfile.TemporaryDirectory(prefix='ci-tracking-', dir=LOCAL) as temporary:
        root = Path(temporary)
        cache = root / 'cache'
        _, _, revision = checkpoint_key(tag)
        work = reference_worktree(revision + '-tracking', branch) if publish else None
        if base and migration_delivery.check_step(work, base, branch, tag, expected):
            migration_delivery.advance(work, base, branch)
            return
        data, identity = restore_completed(tag, cache)
        reference = work / 'research/reference' if work else None
        revision_sha = subprocess.check_output(['git', '-C', str(work), 'rev-parse', 'HEAD'], text=True).strip() if work else None
        manifest_path = reference / reference_path(identity) / 'manifest.json' if work else None
        entries = restore_window(data, identity, cache, tag, root, revision_sha)
        if expected and expected != window_key([version | {'source_database_sha256': digest(source / 'cache.sqlite')}
                                                for _, version, source, _ in entries]):
            raise ValueError('Migration window changed since its plan was generated')
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
                source = manifest_path.parent
                rows = {page.stem.replace('EXTERNAL-', 'EXTERNAL:', 1): [] for page in source.glob('functions/*/*.md')}
                render_comparison_catalog(source, {'format': 1, 'navigation_format': 2,
                                          'identity': comparison_identity(identity), 'rows': rows}, work, verify=True)
                overlay(manifest_path.with_name('README.md'), 'tracking', '', '## アドレス索引\n')
                overlay(manifest_path.with_name('README.md'), 'tracking-neighbors',
                        '同じABIで比較できる公開版はまだありません。', '## アドレス索引\n')
                for key in ('tracking_run', 'tracking_page'):
                    manifest.pop(key, None)
                manifest.update(comparison_state='no_baseline', tracking_format=tracking.FORMAT, tracking_navigation_format=2,
                                tracking_policy=TRACKING_POLICY, tracking_sources=tracking_sources([identity]),
                                validation_state='pending_full_validation')
                write_json(manifest_path, manifest)
                publication_gate.verify_publication(work, None, {'sources': [{'identity': identity}], 'run': None})
                if expected:
                    write_json(manifest_path, read_json(manifest_path) | {'migration_window': expected})
                publish_worktree(work, f'Publish native tracking state {revision}',
                                 ('research/reference', 'research/comparisons'), branch=branch)
                if base:
                    migration_delivery.advance(work, base, branch)
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
        name = f'native-tracking-{config_id}.sqlite.gz'
        assets = root / 'delivery'
        archive = get_asset(tag, name, assets)
        database = assets / name.removesuffix('.gz')
        if archive is None:
            datasets = [tracking.load_dataset(entry['cache'], binary(number), entry['archive'], entry['metrics'])
                        for number, entry in enumerate(datasets)]
            database = tracking.build(datasets, LOCAL / 'tracking', decisions=decisions)
        else:
            unpack_database(archive, database)
        result = verify_result(database, config_id)
        print(json.dumps({'window': [entry[1]['version'] for entry in entries],
                          'cycles': result['cycles'], 'seconds': result['seconds']}, ensure_ascii=False), flush=True)
        if publish:
            if archive is None:
                archive = assets / name
                pack_database(database, archive)
                deliver_asset(tag, archive)
            asset_url = f'https://github.com/{REPO}/releases/download/{tag}/{name}'
            destination = work / 'research/comparisons' / identity['architecture'] / result['run']
            tracking_pages.render(database, work, destination, asset_url)
            tracking_pages.attach(work, destination, result, verify=True)
            touched = tracking_pages.refresh_affected_navigation(work, result)
            report = publication_gate.verify_publication(work, destination, result, touched)
            if expected:
                write_json(manifest_path, read_json(manifest_path) | {'migration_window': expected})
            print(json.dumps({'v3_publication_check': report}, ensure_ascii=False), flush=True)
            publish_worktree(work, f'Publish native tracking window {result["run"]}',
                             ('research/reference', 'research/comparisons'), branch=branch)
            if base:
                migration_delivery.advance(work, base, branch)
