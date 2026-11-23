# 00afddd0

版: 16.0.2 / arm64-v8a / libnative-lib.so

SO SHA-256: `baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/inspection-0037.md#compare-d024d6d433f15978c64b066571e0b283)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/inspection-0030.md#compare-8ffbac83d21a911dab093b2a7915112e)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00afddd0",
  "name": "FUN_00afddd0",
  "size": 64,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "210e32ad45ec3fed3b3b63f15e374579f9fefdfd906c6dbfb87d77accfd34c47",
  "source_text_sha256": "210e32ad45ec3fed3b3b63f15e374579f9fefdfd906c6dbfb87d77accfd34c47"
}
~~~

## 呼び出し元

- [00711a48](../00711/00711a48.md)

## 呼び出し先

- [00851550](../00851/00851550.md)

## 疑似コード / UTF-8 191 bytes

~~~c

undefined4 FUN_00afddd0(int param_1,int param_2)

{
  long lVar1;
  
  lVar1 = FUN_00851550();
  return *(undefined4 *)(lVar1 + (long)param_1 * 0xc804 + (long)param_2 * 0x3ec + 0x84c9c);
}

~~~
