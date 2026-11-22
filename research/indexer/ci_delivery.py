import re
import tempfile
from pathlib import Path

from indexer.ci import public_only, restore
from indexer.reference import export_cache, reference_path, replace_reference
from indexer.store import LOCAL, read_json, write_json
from matcher.comparison_pages import DIRECTIONS, carry_function_comparisons, disconnect, preserve_published_links


def checkpoint_key(tag):
    match = re.fullmatch(r'native-analysis-(\d+\.\d+\.\d+)-([A-Za-z0-9_-]+)-([a-f0-9]{16})', tag)
    if not match:
        raise ValueError('Invalid native analysis Release tag')
    return match.groups()


def restore_completed(tag, root):
    version, architecture, revision = checkpoint_key(tag)
    restore(root, tag, revision)
    state = root / 'ci-status.json'
    if not state.is_file() or read_json(state).get('complete') is not True:
        raise ValueError('A completed checkpoint is required')
    data = read_json(root / 'ci-plan.json')['input']
    identity = read_json(root / 'identity.json')
    expected = (version, architecture, revision, data['librarySha256'], data['versionCode'], data['library'])
    actual = tuple(identity[key] for key in ('version', 'architecture', 'analysis_revision', 'sha256', 'version_code', 'library'))
    if actual != expected or (data['versionName'], data['architecture']) != (version, architecture):
        raise ValueError('Completed checkpoint identity differs from its Release tag')
    return data, identity


def same_reference(manifest, expected):
    return all(manifest.get(key) == value for key, value in expected.items())


def stage_materials(cache, data, structure, output, reference=None, *, base_url=None):
    source, report = export_cache(cache, output, structure=structure)
    report.update(source_archive_sha256=data['archiveSha256'], source_version_code=data['versionCode'],
                  comparison_state='pending')
    write_json(source / 'manifest.json', report)
    if reference is None:
        return source
    destination = reference / reference_path(report)
    keys = ('source_database_sha256', 'analysis_revision', 'source_archive_sha256', 'source_version_code')
    expected = {key: report[key] for key in keys}
    previous = destination / 'manifest.json'
    if previous.is_file() and same_reference(read_json(previous), expected):
        carry_function_comparisons(destination, source, reference.parent.parent)
    for replaced in destination.parent.glob('*/manifest.json'):
        if base_url and (replaced != previous or not same_reference(read_json(replaced), expected)):
            preserve_published_links(reference.parent.parent, replaced.parent, base_url)
        for direction in DIRECTIONS:
            disconnect(reference, replaced.parent, direction, replacing=True)
    replace_reference(source, reference, move=source.stat().st_dev == reference.stat().st_dev)
    return destination


def publish_materials(tag, publish):
    from indexer.ci_structure import structure_checkpoint

    public_only()
    if publish:
        return publish_comparison(tag, True, regenerate=True)
    LOCAL.mkdir(exist_ok=True)
    with tempfile.TemporaryDirectory(prefix='ci-materials-', dir=LOCAL) as directory:
        root = Path(directory) / 'cache'
        data, identity = restore_completed(tag, root)
        structure, _ = structure_checkpoint(root, None, data, identity, tag, Path(directory) / 'structure', extract=False)
        stage_materials(root, data, structure, Path(directory) / 'reference')


def publish_comparison(tag, publish, *, regenerate=False):
    from indexer.ci_tracking import publish_tracking
    publish_tracking(tag, publish, regenerate=regenerate)
