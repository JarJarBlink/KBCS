# 00afaad0

版: 16.0.2 / arm64-v8a / libnative-lib.so

SO SHA-256: `baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/priority-0072.md#compare-9d92bede4a72fd6a950e6a4c9ae3ca28)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/priority-0080.md#compare-bf7d00d4d3ab18eeda42f212b931c048)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00afaad0",
  "name": "FUN_00afaad0",
  "size": 72,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "145e6f2dd1f3497024a669c3edd6899d534fe4eff9440b968b389b9bc6b45910",
  "source_text_sha256": "145e6f2dd1f3497024a669c3edd6899d534fe4eff9440b968b389b9bc6b45910"
}
~~~

## 呼び出し元

- [005fb97c](../005fb/005fb97c.md)
- [0070eab4](../0070e/0070eab4.md)
- [00711a48](../00711/00711a48.md)

## 呼び出し先

- [00851550](../00851/00851550.md)

## 疑似コード / UTF-8 357 bytes

~~~c

bool FUN_00afaad0(int param_1,int param_2)

{
  long lVar1;
  
  lVar1 = FUN_00851550();
                    /* catch() { ... } // from try @ 00afa1b8 with catch @ 00afab04 */
                    /* catch() { ... } // from try @ 00afa120 with catch @ 00afab0c */
  return *(int *)(lVar1 + (long)param_1 * 0xc804 + (long)param_2 * 0x3ec + 0x84a20) != 0;
}

~~~
