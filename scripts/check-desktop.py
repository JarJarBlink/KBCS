#!/usr/bin/env python3
# 実画面の操作・ゲーム原本の取得をせず、隠したWebViewで接続を検査する。
import argparse
import json
from pathlib import Path
import subprocess
import sys
import tempfile


def check(binary):
    with tempfile.TemporaryDirectory(prefix="kbcs-desktop-check-", ignore_cleanup_errors=True) as temporary:
        stdout = Path(temporary) / "stdout.log"
        stderr = Path(temporary) / "stderr.log"
        # WebViewの子プロセスがpipeを保持しても、親アプリの終了判定を妨げない。
        with stdout.open("wb") as output, stderr.open("wb") as errors:
            try:
                result = subprocess.run([str(binary), "desktop-check", "--data-dir", temporary],
                    stdout=output, stderr=errors, timeout=60, creationflags=getattr(subprocess, "CREATE_NO_WINDOW", 0))
                code = result.returncode
            except subprocess.TimeoutExpired:
                code = 2
        logs = stderr.read_text(encoding="utf-8", errors="replace")
    prefix = "KBCS desktop check: "
    records = [json.loads(line.split(prefix, 1)[1]) for line in logs.splitlines() if prefix in line]
    return code, records[-1] if records else None, logs


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--binary", type=Path, required=True)
    binary = parser.parse_args().binary.resolve()
    code, record, logs = check(binary)
    # WKWebViewから検査結果が返らない時だけ、新規プロファイルで一度やり直す。
    if sys.platform == "darwin" and code == 2 and record is None:
        print("WKWebViewが検査結果を返しませんでした。再試行します。\n" + logs, file=sys.stderr, flush=True)
        code, record, logs = check(binary)
    if code or not record or not record.get("ok"):
        raise RuntimeError(f"WebView接続失敗: {code}\n{logs}")
    print("WebView module/PNG/POST/C++/WebGL:", record)


if __name__ == "__main__":
    main()
