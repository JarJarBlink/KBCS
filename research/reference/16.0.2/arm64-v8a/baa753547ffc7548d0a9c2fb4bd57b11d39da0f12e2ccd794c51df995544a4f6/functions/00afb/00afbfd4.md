# 00afbfd4

版: 16.0.2 / arm64-v8a / libnative-lib.so

SO SHA-256: `baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/inspection-0036.md#compare-8da3f246d3bd607be4e2f0268ba8756e)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/inspection-0030.md#compare-2b7411f61d792d04ba8c027576dd234b)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00afbfd4",
  "name": "FUN_00afbfd4",
  "size": 64,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "d48a3b803e8ef7620aad1f5e0674fc9a32bd258b5f879823365b6d65093a2a3d",
  "source_text_sha256": "d48a3b803e8ef7620aad1f5e0674fc9a32bd258b5f879823365b6d65093a2a3d"
}
~~~

## 呼び出し元

- [0070eab4](../0070e/0070eab4.md)
- [00711a48](../00711/00711a48.md)

## 呼び出し先

- [00851550](../00851/00851550.md)

## 疑似コード / UTF-8 191 bytes

~~~c

undefined4 FUN_00afbfd4(int param_1,int param_2)

{
  long lVar1;
  
  lVar1 = FUN_00851550();
  return *(undefined4 *)(lVar1 + (long)param_1 * 0xc804 + (long)param_2 * 0x3ec + 0x84a04);
}

~~~
