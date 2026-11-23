# 00a7bdfc

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/priority-0065.md#compare-ec4f1459c243a7d1afd1eafb225d5b41)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/priority-0073.md#compare-a93e0dc6f78bf174eaab14190068e939)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00a7bdfc",
  "name": "FUN_00a7bdfc",
  "size": 36,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "04bafd3ed871f6a7c4cc6190ed40ba2cb153bcffea61bbaf11354a0e1d6675d6",
  "source_text_sha256": "04bafd3ed871f6a7c4cc6190ed40ba2cb153bcffea61bbaf11354a0e1d6675d6"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

- [00c57e90](../00c57/00c57e90.md)

## 疑似コード / UTF-8 135 bytes

~~~c

void FUN_00a7bdfc(void)

{
  undefined8 *puVar1;
  
  puVar1 = (undefined8 *)_Znwm(0x10);
  *puVar1 = &PTR_FUN_00c8ba70;
  return;
}

~~~
