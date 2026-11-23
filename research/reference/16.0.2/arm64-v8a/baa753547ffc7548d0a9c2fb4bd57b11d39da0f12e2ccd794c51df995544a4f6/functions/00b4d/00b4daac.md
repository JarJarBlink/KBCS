# 00b4daac

版: 16.0.2 / arm64-v8a / libnative-lib.so

SO SHA-256: `baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/priority-0081.md#compare-92f7a325387887e1ee0758f6c2e097d8)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/priority-0088.md#compare-b14fe5955a9a5cffb79c750bfacc2b26)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00b4daac",
  "name": "_ZN8firebase4util6string10GetFieldIdENS1_5FieldE",
  "size": 60,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "98a86e275bae98329551bc926e08aa45a9aa5cf98de718cda20859b2dc918e2a",
  "source_text_sha256": "98a86e275bae98329551bc926e08aa45a9aa5cf98de718cda20859b2dc918e2a"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

- [00c5b0d0](../00c5b/00c5b0d0.md)

## 関連文字列（未確認候補）

~~~text
"field < kFieldCount"
~~~

## 疑似コード / UTF-8 229 bytes

~~~c

undefined8 _ZN8firebase4util6string10GetFieldIdENS1_5FieldE(uint param_1)

{
  if (0 < (int)param_1) {
    _ZN8firebase9LogAssertEPKcz("field < kFieldCount");
  }
  return *(undefined8 *)(&DAT_01125de8 + (ulong)param_1 * 8);
}

~~~
