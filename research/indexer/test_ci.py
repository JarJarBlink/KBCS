import hashlib
import io
import ast
import json
import os
import re
import shutil
import subprocess
import tarfile
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

from indexer import ci, ci_structure, ci_tracking, memory, migration_delivery, network, tracking_migration, upstream
from indexer.reference import reference_path
from indexer.store import connect, read_json, write_json


class CiTests(unittest.TestCase):
    def test_assets_proof_requires_the_verified_source_and_splits(self):
        expected = ci.load_input(ci.RESEARCH / 'inputs/jp-1507040.json')
        identity = {key: expected[key] for key in ('packageName', 'versionName', 'versionCode')} | {'split': ''}
        current = {key: expected[key] for key in ('versionName', 'versionCode')} | {
            'status': 'verified', 'sourceRegion': 'jp', 'datasetId': expected['archiveTag'].removeprefix('source-')}
        splits = []
        for entry in (expected['baseApk'], expected['nativeApk']):
            split = entry.get('split', '')
            manifest = identity if not split else identity | {'split': split, 'versionName': ''}
            splits.append({'manifest': manifest, 'name': entry['member'].removeprefix('./'), 'size': entry['bytes'],
                           'sha256': entry['sha256'], 'signatureVerified': True, 'certificateSha256': upstream.SIGNER})
        proof = {'schemaVersion': 1, 'manifest': identity, 'proof': {'source': 'google-play', 'splits': splits},
                 'sourceArchive': {'provider': 'github-release', 'repository': upstream.REPOSITORY,
                                   'tag': expected['archiveTag'], 'size': expected['archiveBytes'],
                                   'sha256': expected['archiveSha256']}}
        self.assertEqual(upstream.source_input(current, proof), {
            key: value for key, value in expected.items() if key not in ('librarySha256', 'provenance')})
        with self.assertRaises(ValueError):
            upstream.source_input(current | {'versionCode': current['versionCode'] + 1}, proof)
        splits[1]['signatureVerified'] = False
        with self.assertRaises(ValueError):
            upstream.source_input(current, proof)

    def test_same_version_with_new_source_is_not_skipped(self):
        source = ci.load_input(ci.RESEARCH / 'inputs/jp-1507040.json')
        reference = {'sha256': source['librarySha256'], 'source_archive_sha256': source['archiveSha256'],
                     'source_version_code': source['versionCode']}
        with patch.object(upstream, 'gh_json', return_value={'object': {'sha': 'a' * 40}}), \
                patch.object(upstream, 'reference_at', return_value=reference):
            self.assertEqual(upstream.matching_publication(source, ci.REPO, ci.RESEARCH / 'inputs'), reference)
            self.assertIsNone(upstream.matching_publication(source | {'archiveSha256': 'a' * 64}, ci.REPO, ci.RESEARCH / 'inputs'))
            reference['comparison_state'] = 'pending'
            self.assertEqual(upstream.matching_publication(source, ci.REPO, ci.RESEARCH / 'inputs')['comparison_state'], 'pending')

    def test_dispatch_uses_validated_published_identity(self):
        data = ci.load_input(ci.RESEARCH / 'inputs/jp-1507040.json')
        current = {'version': data['versionName'], 'architecture': data['architecture'],
                   'sha256': data['librarySha256'], 'analysis_revision': 'a' * 16}
        previous = current | {'version': '15.7.3', 'analysis_revision': 'b' * 16}
        self.assertEqual(upstream.publication_state(data, None, ci.REPO), 'new')
        self.assertEqual(upstream.publication_state(data, current | {'comparison_state': 'complete'}, ci.REPO), 'references_pending')
        published = current | {'generator_signature': upstream.reference_signature(), 'reference_policy': 'native-reference-v1', 'comparison_state': 'complete', 'tracking_format': 3,
                               'tracking_policy': upstream.TRACKING_POLICY, 'tracking_navigation_format': 2, 'validation_state': 'validated',
                               'tracking_sources': upstream.tracking_sources([previous, current])}
        with patch.object(upstream, 'previous_references', return_value=[previous]):
            self.assertEqual(upstream.publication_state(data, published | {'validation_state': 'pending_full_validation'}, ci.REPO), 'pending')
            self.assertEqual(upstream.publication_state(data, published, ci.REPO), 'complete')
        with patch.object(upstream, 'previous_references', return_value=[previous | {'analysis_revision': 'c' * 16}]):
            self.assertEqual(upstream.publication_state(data, published, ci.REPO), 'pending')

    def test_backfill_reuses_verified_assets_and_rejects_wrong_hash(self):
        tags = ['old', 'middle', 'new']
        with (patch.object(ci_tracking, 'window_tags', return_value=tags),
              patch.object(ci_tracking, 'asset_record', side_effect=[{}, None, {}, {}, {}, {}])):
            self.assertEqual(ci_tracking.missing_structures('new'), ['middle'])
            self.assertEqual(ci_tracking.missing_structures('new'), [])

    def test_publication_conflict_does_not_force_the_remote_branch(self):
        branch = 'codex/native-migration-' + 'a' * 16
        with (patch.object(ci, 'public_only'), patch.object(ci.subprocess, 'run') as run,
              patch.object(ci, 'retry', side_effect=lambda operation, _: operation())):
            run.return_value.returncode = 1

            def response(args, **_):
                if 'push' in args:
                    self.assertEqual(args[-2:], ['origin', f'HEAD:refs/heads/{branch}'])
                    raise subprocess.CalledProcessError(1, args, stderr=b'non-fast-forward')
                return run.return_value

            run.side_effect = response
            with self.assertRaisesRegex(RuntimeError, 'publication branch advanced'):
                ci.publish_worktree(Path('isolated'), 'Fixture', branch=branch)

    def test_native_workflow_stage_conditions(self):
        workflow = (ci.RESEARCH.parent / '.github/workflows/native-analysis.yml').read_text(encoding='utf-8-sig')
        self.assertNotIn('\n  schedule:', workflow)
        self.assertIn('types: [native-analysis-request]', workflow)
        for job, needs in (('structures', 'analyze'), ('references', '[analyze, structures]'), ('match', '[analyze, structures]')):
            self.assertRegex(workflow, rf'(?m)^  {job}:\n    name: [^\n]+\n    needs: {re.escape(needs)}$')

        def condition(job, stage, publish, checkpoint, cancelled=False, structures='success'):
            block = workflow.split(f'\n  {job}:\n')[1].split('    runs-on:')[0]
            expression = ' '.join(line.strip() for line in block.split('    if:')[1].strip(' >-\n').splitlines())
            flags = {'cancelled()': cancelled, 'inputs.stage': stage, 'inputs.publish_reference': publish,
                     'needs.analyze.result': 'success', 'needs.analyze.outputs.match_only': '',
                     'needs.analyze.outputs.checkpoint': checkpoint, 'needs.structures.result': structures}
            pattern = '|'.join(re.escape(key) for key in flags)
            expression = re.sub(pattern, lambda match: repr(flags[match[0]]), expression)
            expression = expression.replace('&&', ' and ').replace('||', ' or ')
            expression = re.sub(r'!(?!=)', 'not ', expression).strip()
            parsed = ast.parse(expression, mode='eval')
            allowed = (ast.Expression, ast.BoolOp, ast.UnaryOp, ast.Compare, ast.Constant, ast.Not, ast.And, ast.Or, ast.Eq, ast.NotEq)
            self.assertTrue(all(isinstance(node, allowed) for node in ast.walk(parsed)))
            return bool(eval(compile(parsed, '<workflow-fixture>', 'eval'), {'__builtins__': {}}))

        for stage, publish, expected in (('all', True, (True, False, True)), ('all', False, (True, False, True)),
                                          ('analyze', True, (False, False, False)), ('references', False, (True, True, False)),
                                          ('references', True, (True, False, True)), ('match', True, (True, False, True)),
                                          ('match', False, (True, False, True)), ('backfill', True, (True, False, False)),
                                          ('', True, (True, False, True))):
            self.assertEqual(tuple(condition(job, stage, publish, 'verified') for job in ('structures', 'references', 'match')), expected)
        self.assertFalse(condition('match', 'all', True, ''))
        self.assertFalse(condition('match', 'match', True, 'verified', structures='skipped'))
        self.assertFalse(condition('match', 'match', True, 'verified', cancelled=True))

    def test_migration_resume_checks_source_and_per_version_receipts(self):
        with tempfile.TemporaryDirectory() as temporary:
            root = Path(temporary)
            identity = {'architecture': upstream.ABI, 'library': upstream.LIBRARY, 'sha256': 'a' * 64,
                        'analysis_revision': 'b' * 16, 'source_database_sha256': 'c' * 64}
            paths = []
            for number in range(5):
                source = identity | {'version': f'16.0.{number}'}
                path = root / 'research/reference' / reference_path(source) / 'manifest.json'
                write_json(path, source)
                paths.append(path)
            plan = tracking_migration.migration(root, upstream.ABI, upstream.LIBRARY, base='d' * 40)
            self.assertEqual(plan['steps'][2]['window'], ['16.0.0', '16.0.1', '16.0.2', '16.0.3'])
            self.assertTrue(tracking_migration.staging_branch(plan['branch']))
            write_json(paths[0], read_json(paths[0]) | {'validation_state': 'validated', 'tracking_policy': upstream.TRACKING_POLICY,
                'generator_signature': plan['generator_signature'], 'migration_window': plan['steps'][0]['inputs']['expected_window']})
            self.assertEqual([step['complete'] for step in tracking_migration.resume(root, plan)['steps']], [True, False, False, False, False])
            with patch.dict(os.environ, {'GITHUB_SHA': plan['base']}):
                first, second, third = plan['steps'][:3]
                inputs = second['inputs']
                self.assertFalse(migration_delivery.check_step(root, plan['base'], plan['branch'], inputs['checkpoint'], inputs['expected_window']))
                with self.assertRaisesRegex(ValueError, 'earlier migration step'):
                    migration_delivery.check_step(root, plan['base'], plan['branch'], third['inputs']['checkpoint'], third['inputs']['expected_window'])
                with (patch.object(migration_delivery, 'gh_json', return_value={'object': {'sha': plan['base']}}),
                      patch.object(migration_delivery.subprocess, 'run') as dispatch):
                    migration_delivery.advance(root, plan['base'], plan['branch'])
                    self.assertEqual(json.loads(dispatch.call_args.kwargs['input'])['inputs'], inputs | {'migration_base': plan['base']})
            write_json(paths[0], read_json(paths[0]) | {'source_database_sha256': 'e' * 64})
            with self.assertRaisesRegex(ValueError, 'sources or generator changed'):
                tracking_migration.resume(root, plan)

    def test_tracking_database_gzip_round_trips_deterministically(self):
        with tempfile.TemporaryDirectory() as temporary:
            root = Path(temporary)
            source, archive, restored = (root / name for name in ('source.sqlite', 'tracking.sqlite.gz', 'restored.sqlite'))
            source.write_bytes(b'fixture SQLite data' * 512)
            ci_tracking.pack_database(source, archive)
            first = archive.read_bytes()
            ci_tracking.pack_database(source, archive)
            self.assertEqual(archive.read_bytes(), first)
            ci_tracking.unpack_database(archive, restored)
            self.assertEqual(source.read_bytes(), restored.read_bytes())
        with (patch.object(ci_tracking, 'window_tags', side_effect=AssertionError('references needs only its own source')),
              patch.object(ci_tracking, 'asset_record', return_value=None)):
            self.assertEqual(ci_tracking.missing_structures('new', current_only=True), ['new'])
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            asset = root / 'structure.tar'
            asset.write_bytes(b'structure')
            record = {'name': asset.name, 'state': 'uploaded', 'size': asset.stat().st_size,
                      'digest': 'sha256:' + hashlib.sha256(asset.read_bytes()).hexdigest()}
            with (patch.object(ci_structure, 'release_state', return_value={'assets': [record]}),
                  patch.object(ci_structure, 'download_asset') as download):
                self.assertEqual(ci_structure.get_asset('tag', asset.name, root), asset)
                download.assert_not_called()
                record['digest'] = 'sha256:' + '0' * 64
                with self.assertRaisesRegex(ValueError, 'SHA-256'):
                    ci_structure.get_asset('tag', asset.name, root)

    def test_budget_identity_and_public_guard(self):
        data = ci.load_input(ci.RESEARCH / 'inputs/jp-1507021.json')
        first = ci.plan(data, 'test', 'JDK21', 16384)
        self.assertEqual(first['native_memory_limit_mb'], 8192)
        self.assertEqual(first, ci.plan(data, 'test', 'JDK21', 16384))
        self.assertNotEqual(first['revision'], ci.plan(data, 'another', 'JDK21', 16384)['revision'])
        with self.assertRaises(RuntimeError):
            ci.plan(data, 'test', 'JDK21', 4096)
        env = {'GITHUB_ACTIONS': 'true', 'RUNNER_ENVIRONMENT': 'github-hosted', 'GITHUB_REPOSITORY': ci.REPO}
        with patch.dict(os.environ, env), patch.object(ci, 'api', return_value={'private': True}):
            with self.assertRaises(RuntimeError):
                ci.public_only()
        for name in ('project/cache.gpr', 'backup-project.zip', 'app.apk', 'libnative-lib.so', '../code/1.c', 'code/../identity.json'):
            self.assertFalse(ci.allowed(name), name)

    def test_restore_falls_back_without_exposing_unverified_files(self):
        # 同じ秒に保存した場合も、数値で新しい方を先に試す。
        with tempfile.TemporaryDirectory() as directory:
            local = Path(directory)
            revision = 'a' * 16

            def prepare(sequence, entries):
                files = {name: b'{}' for name in ci.REQUIRED_STATE} | entries
                files['ci-plan.json'] = json.dumps({'revision': revision}).encode()
                archive = local / f'checkpoint-1-1-{sequence}.tgz'
                with tarfile.open(archive, 'w:gz') as target:
                    for path, data in files.items():
                        member = tarfile.TarInfo(path)
                        member.size = len(data)
                        target.addfile(member, io.BytesIO(data))
                sidecar = archive.with_name(archive.name + '.json')
                ci.write_json(sidecar, {'revision': revision, 'sha256': ci.digest(archive),
                    'files': [{'path': path, 'bytes': len(data), 'sha256': hashlib.sha256(data).hexdigest()} for path, data in files.items()]})
                return [{'name': path.name, 'state': 'uploaded', 'size': path.stat().st_size,
                         'digest': 'sha256:' + ci.digest(path), 'created_at': '2026-11-06T00:00:00Z'} for path in (archive, sidecar)]

            valid = prepare(9, {'code/00100000.c': b'void f() {}\n'})
            invalid = prepare(10, {'code/00100001.c': b'partial', '../outside': b'bad'})

            def download(_repository, _tag, filename, target):
                shutil.copyfile(local / filename, target / filename)

            root = local / 'cache'
            with patch.object(ci, 'release_state', side_effect=[{'assets': valid + invalid}, {'assets': invalid}]), \
                    patch.object(ci, 'download_asset', side_effect=download) as transfer:
                ci.restore(root, 'test', revision)
                self.assertEqual(transfer.call_args_list[0].args[2], 'checkpoint-1-1-10.tgz.json')
                with self.assertRaisesRegex(RuntimeError, 'No valid checkpoint'):
                    ci.restore(local / 'bad-cache', 'test', revision)
            self.assertEqual((root / 'code/00100000.c').read_bytes(), b'void f() {}\n')
            self.assertFalse((root / 'code/00100001.c').exists())
            self.assertFalse((local / 'bad-cache').exists())
            self.assertFalse((local / 'outside').exists())

    def test_release_retry_and_ambiguous_upload(self):
        temporary = subprocess.CalledProcessError(1, ['gh'], stderr=b'HTTP 503')
        denied = subprocess.CalledProcessError(1, ['gh'], stderr=b'HTTP 403')
        with patch.object(network, 'gh', side_effect=[temporary, b'{}', denied]) as call, \
                patch.object(network.time, 'sleep'):
            self.assertEqual(network.gh_json('test'), {})
            with self.assertRaises(subprocess.CalledProcessError):
                network.gh_json('test')
            self.assertEqual(call.call_count, 3)

        for uploaded_count, transfers in ((2, 1), (1, 2)):
            with self.subTest(uploaded_count=uploaded_count), tempfile.TemporaryDirectory() as directory:
                archive = Path(directory) / 'checkpoint-1-1-0.tgz'
                sidecar = archive.with_name(archive.name + '.json')
                for path in (archive, sidecar):
                    path.write_bytes(b'fixture')
                checksum = ci.digest(archive)
                assets = []

                def upload(_release, _upload, _tag, *args, **_kwargs):
                    paths = list(map(Path, args[:2]))
                    count = uploaded_count if not assets else 2
                    assets.extend({'name': path.name, 'size': path.stat().st_size, 'digest': 'sha256:' + ci.digest(path),
                                   'state': 'uploaded'} for path in paths[:count])
                    if count == uploaded_count and len(assets) == count:
                        raise temporary

                with patch.object(ci, 'gh', side_effect=upload) as send, \
                        patch.object(ci, 'release_state', return_value={'assets': assets}), patch.object(ci.time, 'sleep'):
                    ci.upload_checkpoint('test', archive, sidecar, checksum)
                self.assertEqual(send.call_count, transfers)
                self.assertEqual(len({asset['name'] for asset in assets}), len(assets))
                self.assertEqual(list(Path(directory).iterdir()), [])

    def test_batch_keeps_journal_progress_and_stops_repeated_no_progress(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            db = connect(root / 'cache.sqlite')
            with db:
                db.executemany('INSERT INTO functions(address,name,size,external) VALUES (?, ?, 1, 0)', [('1', 'f'), ('2', 'g')])
            db.close()

            def interrupt(*_args):
                record = {'address': '1', 'status': 'cached', 'error': '', 'file': 'code/1.c',
                          'seconds': 1, 'style': 'decompile'}
                (root / 'code').mkdir()
                (root / record['file']).write_text('void f() {}')
                (root / 'results.jsonl').write_text(json.dumps(record) + '\n{', encoding='utf-8')
                raise TimeoutError()

            with patch.object(ci, 'headless', side_effect=interrupt) as process:
                pending, metrics = ci.decompile_batch({}, root, root / 'binary', 'decompile', ['1', '2'], 1, float('inf'))
            process.assert_called_once()
            self.assertEqual(pending, ['2'])
            self.assertTrue(metrics['interrupted'])
            with patch.object(ci, 'headless', side_effect=TimeoutError) as process:
                with self.assertRaisesRegex(RuntimeError, 'no function progress'):
                    ci.decompile_batch({}, root, root / 'binary', 'decompile', pending, 1, float('inf'))
            self.assertEqual(process.call_count, 2)

    def test_linux_guard_only_stops_owned_native_child(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            proc = root / 'proc'
            proc.mkdir()
            (proc / 'meminfo').write_text('MemAvailable: 8000000 kB\n')
            (proc / '42').mkdir()
            for pid, parent in ((111, 42), (222, 99)):
                (proc / str(pid)).mkdir()
                (proc / str(pid) / 'status').write_text(f'Name:\tdecompile\nPPid:\t{parent}\nVmRSS:\t4096 kB\n')
            with patch.object(memory.os, 'kill') as kill:
                peak, alive = memory.linux_memory(42, root, 1, proc)
            self.assertTrue(alive)
            self.assertEqual(peak, 4096 * 1024)
            kill.assert_called_once_with(111, 9)


if __name__ == '__main__':
    unittest.main()
