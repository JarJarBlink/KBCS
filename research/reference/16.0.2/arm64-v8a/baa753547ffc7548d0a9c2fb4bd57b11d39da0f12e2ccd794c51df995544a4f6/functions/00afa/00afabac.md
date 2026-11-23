# 00afabac

版: 16.0.2 / arm64-v8a / libnative-lib.so

SO SHA-256: `baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/0-1/priority-0072.md#compare-1b7edaacdcd95533f3141042e545c78b)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/1-2/priority-0080.md#compare-e005517c49dcf4af1b59a57902d59908)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00afabac",
  "name": "FUN_00afabac",
  "size": 76,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "102bd5a165d1a90a31ef06afb11047f4b084a7d9bdbf5ac17aaf4735281ab271",
  "source_text_sha256": "102bd5a165d1a90a31ef06afb11047f4b084a7d9bdbf5ac17aaf4735281ab271"
}
~~~

## 呼び出し元

- [00a4f424](../00a4f/00a4f424.md)

## 呼び出し先

- [00851550](../00851/00851550.md)

## 疑似コード / UTF-8 209 bytes

~~~c

void FUN_00afabac(int param_1,int param_2,uint param_3)

{
  long lVar1;
  
  lVar1 = FUN_00851550();
  *(uint *)(lVar1 + (long)param_1 * 0xc804 + (long)param_2 * 0x3ec + 0x84a24) = param_3 & 1;
  return;
}

~~~
