# 00afbab8

版: 16.0.2 / arm64-v8a / libnative-lib.so

SO SHA-256: `baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/0-1/priority-0072.md#compare-6655b2df9a8f45907634b8852929ae34)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/1-2/inspection-0030.md#compare-09e46a5fb0f6d0ea55e73565166360dd)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00afbab8",
  "name": "FUN_00afbab8",
  "size": 76,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "80b0a203c519a80ba8c3c3400c2dcae70d30386fe7ed06e70d5de134ad99525c",
  "source_text_sha256": "80b0a203c519a80ba8c3c3400c2dcae70d30386fe7ed06e70d5de134ad99525c"
}
~~~

## 呼び出し元

- [00700b50](../00700/00700b50.md)
- [00710330](../00710/00710330.md)
- [00a4f424](../00a4f/00a4f424.md)

## 呼び出し先

- [00851550](../00851/00851550.md)

## 疑似コード / UTF-8 217 bytes

~~~c

void FUN_00afbab8(int param_1,int param_2,undefined4 param_3)

{
  long lVar1;
  
  lVar1 = FUN_00851550();
  *(undefined4 *)(lVar1 + (long)param_1 * 0xc804 + (long)param_2 * 0x3ec + 0x849bc) = param_3;
  return;
}

~~~
