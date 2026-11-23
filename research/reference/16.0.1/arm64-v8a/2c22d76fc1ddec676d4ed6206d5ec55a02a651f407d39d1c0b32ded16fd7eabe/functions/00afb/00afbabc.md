# 00afbabc

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/inspection-0036.md#compare-2e6120a364bf67226e7d10cb4a8ff98d)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/inspection-0030.md#compare-a68bcbd601eadbc0ceee147d2a29a760)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00afbabc",
  "name": "FUN_00afbabc",
  "size": 64,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "64b8ecfe4ec9ef14d9610cfc98840905a85bd9276d8bb30570a760026e543fbb",
  "source_text_sha256": "64b8ecfe4ec9ef14d9610cfc98840905a85bd9276d8bb30570a760026e543fbb"
}
~~~

## 呼び出し元

- [00707ee0](../00707/00707ee0.md)

## 呼び出し先

- [008514f8](../00851/008514f8.md)

## 疑似コード / UTF-8 191 bytes

~~~c

undefined4 FUN_00afbabc(int param_1,int param_2)

{
  long lVar1;
  
  lVar1 = FUN_008514f8();
  return *(undefined4 *)(lVar1 + (long)param_1 * 0xc804 + (long)param_2 * 0x3ec + 0x849d0);
}

~~~
