# 00afbddc

版: 16.0.2 / arm64-v8a / libnative-lib.so

SO SHA-256: `baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/0-1/inspection-0038.md#compare-837d7f2466a929e2a9842735ea952b14)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/1-2/inspection-0030.md#compare-da5e0c3c5dd6d52df822831c112f207a)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00afbddc",
  "name": "FUN_00afbddc",
  "size": 64,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "a6d61977f001ac8347393baa928ee3674ac98574fa37d2c801ca3159078a72b5",
  "source_text_sha256": "a6d61977f001ac8347393baa928ee3674ac98574fa37d2c801ca3159078a72b5"
}
~~~

## 呼び出し元

- [00700b50](../00700/00700b50.md)

## 呼び出し先

- [00851550](../00851/00851550.md)

## 疑似コード / UTF-8 191 bytes

~~~c

undefined4 FUN_00afbddc(int param_1,int param_2)

{
  long lVar1;
  
  lVar1 = FUN_00851550();
  return *(undefined4 *)(lVar1 + (long)param_1 * 0xc804 + (long)param_2 * 0x3ec + 0x84c3c);
}

~~~
