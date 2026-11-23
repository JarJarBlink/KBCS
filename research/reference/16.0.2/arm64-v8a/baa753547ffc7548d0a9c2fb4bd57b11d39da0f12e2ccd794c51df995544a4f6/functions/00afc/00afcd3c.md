# 00afcd3c

版: 16.0.2 / arm64-v8a / libnative-lib.so

SO SHA-256: `baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/0-1/priority-0072.md#compare-6bb130d8ee5d53f11fecbb43c4056916)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/1-2/inspection-0031.md#compare-71804e0dd2c1ea24cae5ddeac2248f8d)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00afcd3c",
  "name": "FUN_00afcd3c",
  "size": 84,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "268d235b000b009223491e9008d93cce508797bc125033c5d227224d71c580f0",
  "source_text_sha256": "268d235b000b009223491e9008d93cce508797bc125033c5d227224d71c580f0"
}
~~~

## 呼び出し元

- [005f2da8](../005f2/005f2da8.md)

## 呼び出し先

- [00851550](../00851/00851550.md)

## 疑似コード / UTF-8 248 bytes

~~~c

void FUN_00afcd3c(int param_1,int param_2,int param_3)

{
  long lVar1;
  
  lVar1 = FUN_00851550();
  lVar1 = lVar1 + (long)param_1 * 0xc804 + (long)param_2 * 0x3ec;
  *(int *)(lVar1 + 0x84c10) = *(int *)(lVar1 + 0x84c10) + param_3;
  return;
}

~~~
