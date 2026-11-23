# 00a3edac

版: 16.0.2 / arm64-v8a / libnative-lib.so

SO SHA-256: `baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/0-1/inspection-0034.md#compare-857e42a00fe8bb91c4e8c287a5cb9f3f)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/1-2/inspection-0027.md#compare-ae0ffbe9ae5f1c7254f362e8ab29bde4)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00a3edac",
  "name": "FUN_00a3edac",
  "size": 48,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "70b53bac0092c9ecd8ac4b345da496910cc3256026ff3e7019feceb66c0fe935",
  "source_text_sha256": "70b53bac0092c9ecd8ac4b345da496910cc3256026ff3e7019feceb66c0fe935"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

- [005c17dc](../005c1/005c17dc.md)

## 疑似コード / UTF-8 174 bytes

~~~c

void FUN_00a3edac(long param_1)

{
  FUN_005c17dc(param_1 + 0x20,*(undefined8 *)(param_1 + 0x28));
  FUN_005c17dc(param_1 + 8,*(undefined8 *)(param_1 + 0x10));
  return;
}

~~~
