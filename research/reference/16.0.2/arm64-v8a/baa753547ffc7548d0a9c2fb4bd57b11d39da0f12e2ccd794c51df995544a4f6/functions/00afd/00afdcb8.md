# 00afdcb8

版: 16.0.2 / arm64-v8a / libnative-lib.so

SO SHA-256: `baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/0-1/inspection-0038.md#compare-eb98a5f1a150b89d01b5232c85beb943)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/1-2/inspection-0031.md#compare-821ac5386e2f486e0d5744770e98c4af)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00afdcb8",
  "name": "FUN_00afdcb8",
  "size": 64,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "bd902a7056c2e83a3b8decdf0dfeccb3f2a56b6223dfc76e8141a373665a767d",
  "source_text_sha256": "bd902a7056c2e83a3b8decdf0dfeccb3f2a56b6223dfc76e8141a373665a767d"
}
~~~

## 呼び出し元

- [00711a48](../00711/00711a48.md)

## 呼び出し先

- [00851550](../00851/00851550.md)

## 疑似コード / UTF-8 191 bytes

~~~c

undefined4 FUN_00afdcb8(int param_1,int param_2)

{
  long lVar1;
  
  lVar1 = FUN_00851550();
  return *(undefined4 *)(lVar1 + (long)param_1 * 0xc804 + (long)param_2 * 0x3ec + 0x84b98);
}

~~~
