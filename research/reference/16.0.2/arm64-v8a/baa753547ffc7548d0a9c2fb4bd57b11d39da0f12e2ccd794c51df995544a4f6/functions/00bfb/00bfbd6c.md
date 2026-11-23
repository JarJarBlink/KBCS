# 00bfbd6c

版: 16.0.2 / arm64-v8a / libnative-lib.so

SO SHA-256: `baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/reference_unresolved-0001.md#compare-7aa6a08f2b51c1b478fae394c82c4c68)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/reference_unresolved-0001.md#compare-4b9cec4fa8b973bf6a00443e7a4cd798)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00bfbd6c",
  "name": "_ZNSt6__ndk115basic_streambufIcNS_11char_traitsIcEEE7pubsyncEv",
  "size": 16,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "73beb728ab93ec68f1f85503884200970c321b6c79abf56fc90dfda61c5d8d78",
  "source_text_sha256": "73beb728ab93ec68f1f85503884200970c321b6c79abf56fc90dfda61c5d8d78"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

解決済みの記録なし。

## 疑似コード / UTF-8 298 bytes

~~~c

void _ZNSt6__ndk115basic_streambufIcNS_11char_traitsIcEEE7pubsyncEv(long *param_1)

{
                    /* WARNING: Could not recover jumptable at 0x00bfbd78. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (**(code **)(*param_1 + 0x30))();
  return;
}

~~~
