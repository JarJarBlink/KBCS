# 00afcef4

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/inspection-0037.md#compare-95346d9e288c46f77f8b3d39a9fddc8a)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/inspection-0030.md#compare-a143dea5747dd1145fb1c17782d1693d)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00afcef4",
  "name": "FUN_00afcef4",
  "size": 84,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "a6226b45734a344333efdd6268be89c8d1629bebcbef4fbb7df43fdfb23b94ca",
  "source_text_sha256": "a6226b45734a344333efdd6268be89c8d1629bebcbef4fbb7df43fdfb23b94ca"
}
~~~

## 呼び出し元

- [007102d8](../00710/007102d8.md)

## 呼び出し先

- [008514f8](../00851/008514f8.md)

## 疑似コード / UTF-8 248 bytes

~~~c

void FUN_00afcef4(int param_1,int param_2,int param_3)

{
  long lVar1;
  
  lVar1 = FUN_008514f8();
  lVar1 = lVar1 + (long)param_1 * 0xc804 + (long)param_2 * 0x3ec;
  *(int *)(lVar1 + 0x84ca8) = *(int *)(lVar1 + 0x84ca8) + param_3;
  return;
}

~~~
