# 00bddee0

版: 16.0.2 / arm64-v8a / libnative-lib.so

SO SHA-256: `baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/0-1/priority-0094.md#compare-92c8f45a1f1f13e2d29b66f68f6ae429)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/1-2/priority-0097.md#compare-aec6d6ec59a2512a4fb01e8989307c17)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00bddee0",
  "name": "_ZN8firebase4auth18userprofilebuilder10GetFieldIdENS1_5FieldE",
  "size": 60,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "d9950efee66666e30bb4d21a29de3de1c0e8a74f09ec86980c6953e6c39d888b",
  "source_text_sha256": "d9950efee66666e30bb4d21a29de3de1c0e8a74f09ec86980c6953e6c39d888b"
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

## 疑似コード / UTF-8 242 bytes

~~~c

undefined8 _ZN8firebase4auth18userprofilebuilder10GetFieldIdENS1_5FieldE(uint param_1)

{
  if (0 < (int)param_1) {
    _ZN8firebase9LogAssertEPKcz("field < kFieldCount");
  }
  return *(undefined8 *)(&DAT_01126f58 + (ulong)param_1 * 8);
}

~~~
