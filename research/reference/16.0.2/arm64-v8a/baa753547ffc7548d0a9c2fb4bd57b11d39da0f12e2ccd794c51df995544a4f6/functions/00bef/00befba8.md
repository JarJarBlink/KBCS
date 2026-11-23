# 00befba8

版: 16.0.2 / arm64-v8a / libnative-lib.so

SO SHA-256: `baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/0-1/priority-0095.md#compare-67f9ab61d2706e7551f5fd7903552f69)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/1-2/priority-0098.md#compare-2c590e6a652c0aed0ee04744fa3868a6)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00befba8",
  "name": "_ZNSt16nested_exceptionC2Ev",
  "size": 60,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "762871103ed4cbad8766aba52887d09315247ab583332febff26de4595e0cce4",
  "source_text_sha256": "762871103ed4cbad8766aba52887d09315247ab583332febff26de4595e0cce4"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

- [00c5e010](../00c5e/00c5e010.md)

## 疑似コード / UTF-8 216 bytes

~~~c

void _ZNSt16nested_exceptionC2Ev(long *param_1)

{
  long lVar1;
  
  *param_1 = (long)(PTR__ZTVSt16nested_exception_00c9bb40 + 0x10);
  lVar1 = __cxa_current_primary_exception();
  param_1[1] = lVar1;
  return;
}

~~~
