# 00af6edc

版: 16.0.2 / arm64-v8a / libnative-lib.so

SO SHA-256: `baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/0-1/priority-0070.md#compare-6b373226fd8e002d3a998bef481df57d)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/1-2/inspection-0030.md#compare-01a541ea0f59c6e80c1176c92ed2d91a)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00af6edc",
  "name": "FUN_00af6edc",
  "size": 76,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "8583ab4d5165d92966fc9af029ff95a604af097c5be1f9b21166d0a3613c69e3",
  "source_text_sha256": "8583ab4d5165d92966fc9af029ff95a604af097c5be1f9b21166d0a3613c69e3"
}
~~~

## 呼び出し元

- [00a4f424](../00a4f/00a4f424.md)

## 呼び出し先

- [00851550](../00851/00851550.md)

## 疑似コード / UTF-8 209 bytes

~~~c

void FUN_00af6edc(int param_1,int param_2,uint param_3)

{
  long lVar1;
  
  lVar1 = FUN_00851550();
  *(uint *)(lVar1 + (long)param_1 * 0xc804 + (long)param_2 * 0x3ec + 0x8497c) = param_3 & 1;
  return;
}

~~~
