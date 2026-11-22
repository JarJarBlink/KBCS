import contextlib
import gzip
import hashlib
import io
import json
import re
import tempfile
import unittest
from pathlib import Path

from indexer.reference import export_cache, replace_reference
from indexer.store import connect, digest
from matcher.comparison_pages import attach_function_comparisons


class ReferenceTest(unittest.TestCase):
    def test_complete_export_preserves_unicode_code_and_source(self):
        # 長い日本語の1行とコードフェンスを分割せず保存できるか確認する。
        with tempfile.TemporaryDirectory() as temporary:
            cache = Path(temporary) / 'cache'
            (cache / 'code').mkdir(parents=True)
            (cache / 'assembly').mkdir()
            code = 'void example() {\r\n/*' + '日本語~~~' * 14000 + '*/\r\n}\r\n'
            (cache / 'code/00100000.c').write_bytes(b'\xef\xbb\xbf' + code.encode('utf-8'))
            (cache / 'assembly/00100004.asm').write_text('00100004  nop\n', encoding='utf-8')
            db = connect(cache / 'cache.sqlite')
            with db:
                for key, value in {'version': '1.2.3', 'architecture': 'arm64-v8a', 'sha256': 'a' * 64,
                                   'library': 'libexample.so', 'ghidra': '12.1.2',
                                   'language': 'AARCH64:LE:64:v8A', 'image_base': '00100000'}.items():
                    db.execute('INSERT INTO metadata VALUES(?,?)', (key, json.dumps(value)))
                db.executemany('INSERT INTO functions(address,name,size,external,thunk,confidence,status,error,file) VALUES(?,?,?,?,?,?,?,?,?)', [
                    ('00100000', 'example', 4, 0, 0, 'low', 'cached', '', 'code/00100000.c'),
                    ('00100004', 'failed', 4, 0, 0, 'unreviewed', 'failed', 'memory limit', 'assembly/00100004.asm'),
                    ('EXTERNAL:00000001', 'puts', 0, 1, 0, 'unreviewed', 'external', '', None),
                ])
                db.execute('INSERT INTO refs VALUES(?,?,?,?,?,?,?)', ('00100000', '00100000', 'EXTERNAL:00000001', 'call', 1, 'EXTERNAL:00000001', '関連文字列'))
            db.close()
            before = digest(cache / 'cache.sqlite')
            with contextlib.redirect_stdout(io.StringIO()):
                root, summary = export_cache(cache, Path(temporary) / 'export')
            self.assertEqual(before, digest(cache / 'cache.sqlite'))
            self.assertEqual((summary['cached'], summary['failed'], summary['external'], summary['low_confidence']), (1, 1, 1, 1))
            for page in root.rglob('*.md'):
                data = page.read_bytes()
                self.assertTrue(data.startswith(b'\xef\xbb\xbf'))
                self.assertNotIn('.part-', page.name)
                text = data.decode('utf-8-sig')
                for link in re.findall(r'\]\(([^)]+\.md)\)', text):
                    self.assertTrue((page.parent / link).is_file(), link)
            entry = (root / 'functions/00100/00100000.md').read_bytes().decode('utf-8-sig')
            match = re.search(r'^## 疑似コード / UTF-8 (\d+) bytes\n\n~+c\n', entry, re.MULTILINE)
            restored = entry[match.end():].encode('utf-8')[:int(match[1])]
            self.assertEqual(hashlib.sha256(restored).hexdigest(), hashlib.sha256(code.encode('utf-8')).hexdigest())
            attach_function_comparisons(root / 'functions/00100/00100000.md', {'v1.2.2 → v1.2.3': 'comparison.md)'})
            linked = (root / 'functions/00100/00100000.md').read_bytes().decode('utf-8-sig')
            linked_match = re.search(r'^## 疑似コード / UTF-8 (\d+) bytes\n\n~+c\n', linked, re.MULTILINE)
            self.assertEqual(linked[linked_match.end():].encode('utf-8')[:int(linked_match[1])], code.encode('utf-8'))
            self.assertGreater(summary['max_page_bytes'], 64 * 1024)
            self.assertIn('../external/EXTERNAL-00000001.md', entry)
            self.assertIn('関連文字列', entry)
            self.assertEqual(summary['pages'], len(list(root.rglob('*.md'))))

            archive = Path(temporary) / 'structure.jsonl.gz'
            version = {'type': 'program', 'schema': 1, 'sha256': 'a' * 64,
                       'ghidra': '12.1.2', 'language': 'AARCH64:LE:64:v8A', 'image_base': '00100000',
                       'disassembly': True}
            machine = 'c0035fd6'
            function = {'type': 'function', 'address': '00100000', 'ranges': [['00100000', '00100003']],
                        'blocks': [['00100000', [['00100000', '00100003']], []]],
                        'refs': [['00100000', '00400000', 'READ', 'ANALYSIS', None, 'example', 'int']],
                        'read_only_data': [['00400000', 4, 'int', '80000000']],
                        'instructions': [['00100000', 'ret', 'TERMINATOR', []]], 'disassembly': [[machine, 'ret']],
                        'instruction_count': 1, 'instruction_bytes': 4, 'body_bytes': 4, 'indirect': 0, 'unresolved': 0,
                        'bytes_sha256': hashlib.sha256(bytes.fromhex(machine)).hexdigest()}
            footer = {'type': 'complete', 'functions': 1}

            def write_structure(header, body):
                with gzip.open(archive, 'wt', encoding='utf-8') as output:
                    for row in (header, body, footer):
                        output.write(json.dumps(row) + '\n')

            write_structure(version | {'sha256': 'b' * 64}, function)
            combined = Path(temporary) / 'combined'
            with self.assertRaisesRegex(ValueError, 'indexed program'):
                export_cache(cache, combined, structure=archive)
            write_structure(version, function | {'disassembly': [['c0035fd5', 'ret']]})
            with self.assertRaisesRegex(ValueError, 'instruction bytes'):
                export_cache(cache, combined, structure=archive)
            write_structure(version, function)
            with contextlib.redirect_stdout(io.StringIO()):
                combined_root, combined_summary = export_cache(cache, combined, structure=archive)
            self.assertEqual(combined_summary['source_structure_sha256'], digest(archive))
            self.assertEqual((combined_summary['disassembled'], combined_summary['structure_unavailable']), (1, 1))
            combined_page = combined_root / 'functions/00100/00100000.md'
            page_text = combined_page.read_text(encoding='utf-8-sig')
            for expected in ('## 疑似コード', '## 逆アセンブリ', 'c0 03 5f d6', '## 基本ブロックと分岐先',
                             '## 命令位置別の参照', '## 読み取り専用データ', '80000000'):
                self.assertIn(expected, page_text)
            unavailable = (combined_root / 'functions/00100/00100004.md').read_text(encoding='utf-8-sig')
            self.assertIn('not_exported', unavailable)
            self.assertIn('00100004  nop', unavailable)
            original_page = combined_page.read_bytes()
            for broken in (function | {'instruction_count': 2}, function | {'disassembly': [['00', 'ret']]},
                           function | {'ranges': [['00100004', '00100007']]}):
                write_structure(version, broken)
                with self.assertRaises(ValueError):
                    export_cache(cache, combined, structure=archive)
                self.assertEqual(combined_page.read_bytes(), original_page)
            write_structure(version, function)
            with contextlib.redirect_stdout(io.StringIO()):
                preview, result = export_cache(cache, Path(temporary) / 'preview', structure=archive,
                                               addresses=['00100000'])
            self.assertTrue(result['preview'])
            self.assertFalse((preview / 'manifest.json').exists())
            self.assertFalse((preview / 'README.md').exists())
            self.assertEqual(len(list(preview.rglob('*.md'))), 1)
            # 同一入口・同一サイズでも、本体範囲が違う索引は一致扱いにしない。
            (cache / 'index.jsonl').write_text(json.dumps({'type': 'function', 'address': '00100000',
                'ranges': [['00100000', '00100000'], ['00100005', '00100007']]}) + '\n', encoding='utf-8')
            with contextlib.redirect_stdout(io.StringIO()):
                checked, report = export_cache(cache, Path(temporary) / 'mismatch', structure=archive)
            self.assertEqual(report['disassembled'], 0)
            self.assertEqual(report['structure_unavailable_reasons']['index_ranges_mismatch'], 1)
            self.assertIn('index_ranges_mismatch', (checked / 'functions/00100/00100000.md').read_text(encoding='utf-8-sig'))
            write_structure(version | {'disassembly': False}, function)
            with self.assertRaisesRegex(ValueError, 'lacks disassembly'):
                export_cache(cache, combined, structure=archive)
            write_structure(version, function)
            with gzip.open(archive, 'at', encoding='utf-8') as output:
                output.write(json.dumps(footer) + '\n')
            with self.assertRaisesRegex(ValueError, 'footer'):
                export_cache(cache, combined, structure=archive)
            self.assertEqual(combined_page.read_bytes(), original_page)

            self.assertEqual(before, digest(cache / 'cache.sqlite'))

            db = connect(cache / 'cache.sqlite')
            with db:
                db.execute('INSERT INTO metadata VALUES(?,?)', ('analysis_revision', json.dumps('b' * 16)))
                db.execute('UPDATE metadata SET value=? WHERE key=?', (json.dumps('c' * 64), 'sha256'))
            db.close()
            with contextlib.redirect_stdout(io.StringIO()):
                revised, report = export_cache(cache, Path(temporary) / 'new-export')
            self.assertEqual(revised.name, 'c' * 64)
            self.assertEqual(report['analysis_revision'], 'b' * 16)
            reference = Path(temporary) / 'export'
            sibling = reference / '1.2.3/x86/keep.txt'
            sibling.parent.mkdir()
            sibling.write_text('keep')
            replace_reference(revised, reference)
            self.assertFalse(root.exists())
            self.assertTrue((root.with_name('c' * 64) / 'manifest.json').is_file())
            self.assertEqual(sibling.read_text(), 'keep')


if __name__ == '__main__':
    unittest.main()
