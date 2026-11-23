# 006ffeac

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/0-1/priority-0034.md#compare-891769e6045538e4d8c7872286f749b0)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/1-2/priority-0039.md#compare-641fc7cf83fb012aa89c9b636ed10ecb)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "006ffeac",
  "name": "FUN_006ffeac",
  "size": 36,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "b130d12ed8154ded8b2889ae846f6b6db10c9e408b27d07ce7f995a4fd1da10c",
  "source_text_sha256": "b130d12ed8154ded8b2889ae846f6b6db10c9e408b27d07ce7f995a4fd1da10c"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

- [00c57e90](../00c57/00c57e90.md)

## 疑似コード / UTF-8 135 bytes

~~~c

void FUN_006ffeac(void)

{
  undefined8 *puVar1;
  
  puVar1 = (undefined8 *)_Znwm(0x10);
  *puVar1 = &PTR_FUN_00c774f8;
  return;
}

~~~
