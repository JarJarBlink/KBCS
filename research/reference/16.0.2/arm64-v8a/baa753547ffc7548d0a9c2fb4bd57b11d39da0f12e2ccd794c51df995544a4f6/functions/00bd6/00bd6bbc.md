# 00bd6bbc

版: 16.0.2 / arm64-v8a / libnative-lib.so

SO SHA-256: `baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/0-1/priority-0092.md#compare-1a2b5c81ae8509d59dfb074997f1b075)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/1-2/priority-0096.md#compare-f4b647904f88ee5e32c9451909434d37)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00bd6bbc",
  "name": "_ZN8firebase4auth8timeunit11GetMethodIdENS1_6MethodE",
  "size": 60,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "a55b0ae92dcdee3b6d7447d23a4ef9772c382ef655349cb88473c8064bbe2be9",
  "source_text_sha256": "a55b0ae92dcdee3b6d7447d23a4ef9772c382ef655349cb88473c8064bbe2be9"
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

## 疑似コード / UTF-8 235 bytes

~~~c

undefined8 _ZN8firebase4auth8timeunit11GetMethodIdENS1_6MethodE(uint param_1)

{
  if (0 < (int)param_1) {
    _ZN8firebase9LogAssertEPKcz("method < kMethodCount");
  }
  return *(undefined8 *)(&DAT_01126c68 + (ulong)param_1 * 8);
}

~~~
