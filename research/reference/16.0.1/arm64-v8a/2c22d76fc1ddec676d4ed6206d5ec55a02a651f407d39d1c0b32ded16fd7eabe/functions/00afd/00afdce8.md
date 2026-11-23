# 00afdce8

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/0-1/inspection-0038.md#compare-c729991fd52fa2204696ee25abc12e3a)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/1-2/inspection-0031.md#compare-7201f5e87a9cebdc155400ffe4938c59)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00afdce8",
  "name": "FUN_00afdce8",
  "size": 76,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "d9702511c199f204e6ab2cb414342f83fc4cbc43049b3a39e685b3f02757a9e5",
  "source_text_sha256": "d9702511c199f204e6ab2cb414342f83fc4cbc43049b3a39e685b3f02757a9e5"
}
~~~

## 呼び出し元

- [00a4f3b4](../00a4f/00a4f3b4.md)

## 呼び出し先

- [008514f8](../00851/008514f8.md)

## 疑似コード / UTF-8 217 bytes

~~~c

void FUN_00afdce8(int param_1,int param_2,undefined4 param_3)

{
  long lVar1;
  
  lVar1 = FUN_008514f8();
  *(undefined4 *)(lVar1 + (long)param_1 * 0xc804 + (long)param_2 * 0x3ec + 0x84b9c) = param_3;
  return;
}

~~~
