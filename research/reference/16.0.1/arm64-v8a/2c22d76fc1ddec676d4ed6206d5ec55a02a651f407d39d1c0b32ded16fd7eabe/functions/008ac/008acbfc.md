# 008acbfc

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/priority-0051.md#compare-8b4ba0d8fb34c48c7a3b435cb652d316)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/priority-0060.md#compare-e653674210a296c86ff8de02ff3b7501)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "008acbfc",
  "name": "FUN_008acbfc",
  "size": 36,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "111570a857aa9dbdfc73c5a4c7f48f9a7fd2469ccd770cd59312f47b7bacdeca",
  "source_text_sha256": "111570a857aa9dbdfc73c5a4c7f48f9a7fd2469ccd770cd59312f47b7bacdeca"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

- [00c57e90](../00c57/00c57e90.md)

## 疑似コード / UTF-8 135 bytes

~~~c

void FUN_008acbfc(void)

{
  undefined8 *puVar1;
  
  puVar1 = (undefined8 *)_Znwm(0x10);
  *puVar1 = &PTR_FUN_00c83730;
  return;
}

~~~
