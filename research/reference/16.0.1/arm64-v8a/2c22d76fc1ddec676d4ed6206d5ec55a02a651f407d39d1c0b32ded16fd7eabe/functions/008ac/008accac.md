# 008accac

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/0-1/priority-0051.md#compare-45e41fab58bade162f7c02dd721ead3c)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/1-2/priority-0060.md#compare-fc405705c033157e5219891170178db3)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "008accac",
  "name": "FUN_008accac",
  "size": 36,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "edcace1486cb76fdb642b5704eca489324ce71565dc1ba1b44d458b7aab3ff21",
  "source_text_sha256": "edcace1486cb76fdb642b5704eca489324ce71565dc1ba1b44d458b7aab3ff21"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

- [00c57e90](../00c57/00c57e90.md)

## 疑似コード / UTF-8 135 bytes

~~~c

void FUN_008accac(void)

{
  undefined8 *puVar1;
  
  puVar1 = (undefined8 *)_Znwm(0x10);
  *puVar1 = &PTR_FUN_00c837b0;
  return;
}

~~~
