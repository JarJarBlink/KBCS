# 00bddafc

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/priority-0095.md#compare-753c3bc6f36404acd22f5f3eae8907e3)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/priority-0098.md#compare-25e437d0dfe9f5309be016611a1d5c8d)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00bddafc",
  "name": "_ZN8firebase4auth8metadata10GetFieldIdENS1_5FieldE",
  "size": 60,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "00319e05061493716fdd58fa390dd0bc38b9806697712eba43799824df04a91a",
  "source_text_sha256": "00319e05061493716fdd58fa390dd0bc38b9806697712eba43799824df04a91a"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

- [00c5b000](../00c5b/00c5b000.md)

## 関連文字列（未確認候補）

~~~text
"field < kFieldCount"
~~~

## 疑似コード / UTF-8 231 bytes

~~~c

undefined8 _ZN8firebase4auth8metadata10GetFieldIdENS1_5FieldE(uint param_1)

{
  if (0 < (int)param_1) {
    _ZN8firebase9LogAssertEPKcz("field < kFieldCount");
  }
  return *(undefined8 *)(&DAT_01126e20 + (ulong)param_1 * 8);
}

~~~
