# 00af2eec

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/0-1/inspection-0036.md#compare-48e269cf8cbfdf43600cb73aee59bf8e)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/1-2/inspection-0029.md#compare-661a7a210f833b6818552bcfcde2bdaa)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00af2eec",
  "name": "FUN_00af2eec",
  "size": 56,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "08b5b7d4a4fde2f2690bd9e6d317d33820ec21cdc83473befed0509f64446118",
  "source_text_sha256": "08b5b7d4a4fde2f2690bd9e6d317d33820ec21cdc83473befed0509f64446118"
}
~~~

## 呼び出し元

- [00a47f00](../00a47/00a47f00.md)

## 呼び出し先

- [008514f8](../00851/008514f8.md)

## 疑似コード / UTF-8 181 bytes

~~~c

void FUN_00af2eec(int param_1,undefined4 param_2)

{
  long lVar1;
  
  lVar1 = FUN_008514f8();
  *(undefined4 *)(lVar1 + (long)param_1 * 0xc804 + 0x8491c) = param_2;
  return;
}

~~~
