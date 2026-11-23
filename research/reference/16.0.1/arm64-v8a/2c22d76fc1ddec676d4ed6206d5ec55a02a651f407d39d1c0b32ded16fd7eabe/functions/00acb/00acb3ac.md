# 00acb3ac

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/priority-0069.md#compare-50e178ee63485e7884c9e52409b3a041)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/priority-0077.md#compare-08506e16bc2d68730f31e51ea3ce4239)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00acb3ac",
  "name": "FUN_00acb3ac",
  "size": 36,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "58b6dfb46d61bd5fc27bbc62f32bcb647437a2c58e07aa89a38843b30a8ad576",
  "source_text_sha256": "58b6dfb46d61bd5fc27bbc62f32bcb647437a2c58e07aa89a38843b30a8ad576"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

- [00c57e90](../00c57/00c57e90.md)

## 疑似コード / UTF-8 135 bytes

~~~c

void FUN_00acb3ac(void)

{
  undefined8 *puVar1;
  
  puVar1 = (undefined8 *)_Znwm(0x10);
  *puVar1 = &PTR_FUN_00c8d7c0;
  return;
}

~~~
