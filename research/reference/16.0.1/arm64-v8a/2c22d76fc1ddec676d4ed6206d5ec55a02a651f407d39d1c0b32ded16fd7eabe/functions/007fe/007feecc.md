# 007feecc

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/priority-0044.md#compare-3c86da3597bdac5109c8ee224efd8852)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/priority-0048.md#compare-46d43c25faef8b48d6e399fcc47e734a)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "007feecc",
  "name": "FUN_007feecc",
  "size": 36,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "e14b213fb5fbc699c0a62ab8b9b3256739d85a802a761546c9741cb97ac092a9",
  "source_text_sha256": "e14b213fb5fbc699c0a62ab8b9b3256739d85a802a761546c9741cb97ac092a9"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

- [00c57e90](../00c57/00c57e90.md)

## 疑似コード / UTF-8 135 bytes

~~~c

void FUN_007feecc(void)

{
  undefined8 *puVar1;
  
  puVar1 = (undefined8 *)_Znwm(0x10);
  *puVar1 = &PTR_FUN_00c7df20;
  return;
}

~~~
