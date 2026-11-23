# 00bddaec

版: 16.0.2 / arm64-v8a / libnative-lib.so

SO SHA-256: `baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/0-1/priority-0094.md#compare-758c1b970145903a7ff4451fcbc66c51)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/1-2/priority-0097.md#compare-4f7d2190852b5db850f572e82b1bb594)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00bddaec",
  "name": "_ZN8firebase4auth8metadata11GetMethodIdENS1_6MethodE",
  "size": 60,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "e122451b092633373b17d282fe6c6e42f5b1f97bcda9fdca23923bd98d9c048c",
  "source_text_sha256": "e122451b092633373b17d282fe6c6e42f5b1f97bcda9fdca23923bd98d9c048c"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

- [00c5b0d0](../00c5b/00c5b0d0.md)

## 関連文字列（未確認候補）

~~~text
"method < kMethodCount"
~~~

## 疑似コード / UTF-8 208 bytes

~~~c

undefined8 _ZN8firebase4auth8metadata11GetMethodIdENS1_6MethodE(uint param_1)

{
  if (1 < (int)param_1) {
    _ZN8firebase9LogAssertEPKcz("method < kMethodCount");
  }
  return (&DAT_01126f10)[param_1];
}

~~~
