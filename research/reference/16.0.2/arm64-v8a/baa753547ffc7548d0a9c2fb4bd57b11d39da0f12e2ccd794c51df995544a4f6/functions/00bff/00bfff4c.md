# 00bfff4c

版: 16.0.2 / arm64-v8a / libnative-lib.so

SO SHA-256: `baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/0-1/detail_skipped-0008.md#compare-50f5b3b9d8196688953c9242d1d38f53)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/1-2/detail_skipped-0008.md#compare-4c85907e4ea3016b4237950a0d4cd94a)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00bfff4c",
  "name": "_ZNSt6__ndk115basic_streambufIwNS_11char_traitsIwEEE5gbumpEi",
  "size": 20,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "9cf7b57781e9f692ab2834914c05f988e9d5536be729cb9a69b4933936f904c1",
  "source_text_sha256": "9cf7b57781e9f692ab2834914c05f988e9d5536be729cb9a69b4933936f904c1"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

解決済みの記録なし。

## 疑似コード / UTF-8 186 bytes

~~~c

void _ZNSt6__ndk115basic_streambufIwNS_11char_traitsIwEEE5gbumpEi(long param_1,int param_2)

{
  *(long *)(param_1 + 0x18) = *(long *)(param_1 + 0x18) + (long)param_2 * 4;
  return;
}

~~~
