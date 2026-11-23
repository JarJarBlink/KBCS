# 008eaecc

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/0-1/priority-0054.md#compare-2aa931df92b0092c6084fcc5c7276f45)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/1-2/priority-0063.md#compare-17e9cd20ebf42fc55d314a473e6c1f0d)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "008eaecc",
  "name": "FUN_008eaecc",
  "size": 52,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "4a683201318bba6f005ed96c2dd9d61c9503d86ee34c21c90c8f105a4d2da0f5",
  "source_text_sha256": "4a683201318bba6f005ed96c2dd9d61c9503d86ee34c21c90c8f105a4d2da0f5"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

- [00c57e90](../00c57/00c57e90.md)

## 疑似コード / UTF-8 224 bytes

~~~c

void FUN_008eaecc(long param_1)

{
  undefined8 *puVar1;
  undefined8 uVar2;
  
  puVar1 = (undefined8 *)_Znwm(0x10);
  uVar2 = *(undefined8 *)(param_1 + 8);
  *puVar1 = &PTR_FUN_00c857d0;
  puVar1[1] = uVar2;
  return;
}

~~~
