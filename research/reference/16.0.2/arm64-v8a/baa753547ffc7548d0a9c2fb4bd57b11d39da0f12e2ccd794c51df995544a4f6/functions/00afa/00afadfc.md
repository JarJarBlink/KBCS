# 00afadfc

版: 16.0.2 / arm64-v8a / libnative-lib.so

SO SHA-256: `baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/0-1/priority-0072.md#compare-9b232f1107bc20a6fce743b9ba133efa)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/1-2/inspection-0030.md#compare-3d9f597933ecd9a4e8d85e60bc357193)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00afadfc",
  "name": "FUN_00afadfc",
  "size": 76,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "45e94d8801fdc532f7fcb50e322f6a3c25f7b3173d27b3db61498d1debdeccb4",
  "source_text_sha256": "45e94d8801fdc532f7fcb50e322f6a3c25f7b3173d27b3db61498d1debdeccb4"
}
~~~

## 呼び出し元

- [00a4f424](../00a4f/00a4f424.md)

## 呼び出し先

- [00851550](../00851/00851550.md)

## 疑似コード / UTF-8 306 bytes

~~~c

void FUN_00afadfc(int param_1,int param_2,uint param_3)

{
  long lVar1;
  
                    /* try { // try from 00afae14 to 00bfae5f has its CatchHandler @ 00afb440 */
  lVar1 = FUN_00851550();
  *(uint *)(lVar1 + (long)param_1 * 0xc804 + (long)param_2 * 0x3ec + 0x84a34) = param_3 & 1;
  return;
}

~~~
