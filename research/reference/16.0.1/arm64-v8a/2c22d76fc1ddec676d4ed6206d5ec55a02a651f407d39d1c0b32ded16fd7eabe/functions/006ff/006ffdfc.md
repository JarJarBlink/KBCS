# 006ffdfc

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/priority-0034.md#compare-5537bd01528911474c2e72cfc07cb669)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/priority-0039.md#compare-ee20d89182b034cdffdaad2f503d36a2)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "006ffdfc",
  "name": "FUN_006ffdfc",
  "size": 36,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "b0659ab65ddd702ede2f1b5395e0b4f489887adfebc2b360403705927db991d1",
  "source_text_sha256": "b0659ab65ddd702ede2f1b5395e0b4f489887adfebc2b360403705927db991d1"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

- [00c57e90](../00c57/00c57e90.md)

## 疑似コード / UTF-8 135 bytes

~~~c

void FUN_006ffdfc(void)

{
  undefined8 *puVar1;
  
  puVar1 = (undefined8 *)_Znwm(0x10);
  *puVar1 = &PTR_FUN_00c77478;
  return;
}

~~~
