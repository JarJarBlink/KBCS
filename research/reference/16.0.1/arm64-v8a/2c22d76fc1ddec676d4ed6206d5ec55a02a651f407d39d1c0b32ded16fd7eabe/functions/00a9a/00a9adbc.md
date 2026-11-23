# 00a9adbc

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/0-1/priority-0066.md#compare-7a1318d9533dd911aca728eafe73ad24)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/1-2/priority-0074.md#compare-fed0e612281417ec41826d8b89b58a9d)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00a9adbc",
  "name": "FUN_00a9adbc",
  "size": 20,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "f50af740a9b1dae3362a847642954f51a79bc5548c9add5e120c253c220eb915",
  "source_text_sha256": "f50af740a9b1dae3362a847642954f51a79bc5548c9add5e120c253c220eb915"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

解決済みの記録なし。

## 疑似コード / UTF-8 186 bytes

~~~c

void FUN_00a9adbc(long param_1,undefined8 *param_2)

{
  undefined8 uVar1;
  
  uVar1 = *(undefined8 *)(param_1 + 8);
  *param_2 = &PTR_FUN_00c8cee8;
  param_2[1] = uVar1;
  return;
}

~~~
