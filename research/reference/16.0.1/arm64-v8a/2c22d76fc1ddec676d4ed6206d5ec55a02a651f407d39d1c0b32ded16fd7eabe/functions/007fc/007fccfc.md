# 007fccfc

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/0-1/priority-0044.md#compare-58b64749a0a3f1bc0a3e1da1fb007e84)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/1-2/priority-0048.md#compare-7dc9be32d6b650300d2f940a05ae2869)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "007fccfc",
  "name": "FUN_007fccfc",
  "size": 56,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "b03e2cade6807fbe4882b29309d8f83b7e90745851ef85ea13bb96f1354c1193",
  "source_text_sha256": "b03e2cade6807fbe4882b29309d8f83b7e90745851ef85ea13bb96f1354c1193"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

- [00c57e90](../00c57/00c57e90.md)

## 疑似コード / UTF-8 242 bytes

~~~c

void FUN_007fccfc(long param_1)

{
  undefined4 uVar1;
  undefined8 *puVar2;
  
  puVar2 = (undefined8 *)_Znwm(0x10);
  uVar1 = *(undefined4 *)(param_1 + 8);
  *puVar2 = &PTR_FUN_00c7d730;
  *(undefined4 *)(puVar2 + 1) = uVar1;
  return;
}

~~~
