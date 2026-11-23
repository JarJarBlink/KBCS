# 00aeeaf8

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/priority-0069.md#compare-57e196885d2ae2b9c8743381a49cb4d4)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/priority-0077.md#compare-1e14027bb398c8434ee35fc55ffd297e)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00aeeaf8",
  "name": "FUN_00aeeaf8",
  "size": 36,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "9947526cece1c92dd2d851ebb176084458bf520ed56d690cd04a1be30c3fd8be",
  "source_text_sha256": "9947526cece1c92dd2d851ebb176084458bf520ed56d690cd04a1be30c3fd8be"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

- [00c57e90](../00c57/00c57e90.md)

## 疑似コード / UTF-8 135 bytes

~~~c

void FUN_00aeeaf8(void)

{
  undefined8 *puVar1;
  
  puVar1 = (undefined8 *)_Znwm(0x10);
  *puVar1 = &PTR_FUN_00c8ddd8;
  return;
}

~~~
