# 00aadfe8

版: 16.0.2 / arm64-v8a / libnative-lib.so

SO SHA-256: `baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/0-1/machine_only_observed-0020.md#compare-1cbe5ae774f9d23b78fdfedf277f6970)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/1-2/priority-0075.md#compare-367cb6ab98b514684f1dbc801acf3b41)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00aadfe8",
  "name": "FUN_00aadfe8",
  "size": 20,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "b0265eafcfde2f13e7ca7f8285fd33219d10e24128d02a9becd32179d0995a6e",
  "source_text_sha256": "b0265eafcfde2f13e7ca7f8285fd33219d10e24128d02a9becd32179d0995a6e"
}
~~~

## 呼び出し元

- [0079668c](../00796/0079668c.md)

## 呼び出し先

- [00b333bc](../00b33/00b333bc.md)

## 疑似コード / UTF-8 198 bytes

~~~c

void FUN_00aadfe8(undefined8 param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4,
                 undefined8 param_5)

{
  FUN_00b333bc(param_2,param_3,param_4,param_5);
  return;
}

~~~
