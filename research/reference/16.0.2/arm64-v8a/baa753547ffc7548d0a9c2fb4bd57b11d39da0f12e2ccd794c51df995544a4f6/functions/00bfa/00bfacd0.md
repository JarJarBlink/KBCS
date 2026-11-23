# 00bfacd0

版: 16.0.2 / arm64-v8a / libnative-lib.so

SO SHA-256: `baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/0-1/detail_skipped-0008.md#compare-242a249aa9626019fd1ea202e27dd615)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/1-2/detail_skipped-0008.md#compare-64f4515cecd84cd8b04dd630b8b756bf)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00bfacd0",
  "name": "_ZNSt6__ndk115__thread_struct25notify_all_at_thread_exitEPNS_18condition_variableEPNS_5mutexE",
  "size": 12,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "9a5d462c5f4797aa2307af2354e026287f78a0cdae7f39440a90547e067efa76",
  "source_text_sha256": "9a5d462c5f4797aa2307af2354e026287f78a0cdae7f39440a90547e067efa76"
}
~~~

## 呼び出し元

- [00c5e2d0](../00c5e/00c5e2d0.md)

## 呼び出し先

- [00bfaa64](../00bfa/00bfaa64.md)

## 疑似コード / UTF-8 179 bytes

~~~c

void _ZNSt6__ndk115__thread_struct25notify_all_at_thread_exitEPNS_18condition_variableEPNS_5mutexE
               (undefined8 *param_1)

{
  FUN_00bfaa64(*param_1);
  return;
}

~~~
