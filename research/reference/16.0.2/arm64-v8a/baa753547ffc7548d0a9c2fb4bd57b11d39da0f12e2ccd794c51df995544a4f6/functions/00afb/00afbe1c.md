# 00afbe1c

版: 16.0.2 / arm64-v8a / libnative-lib.so

SO SHA-256: `baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/0-1/inspection-0038.md#compare-d996bdb8ea819d85f940364cdcafe266)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/1-2/inspection-0030.md#compare-c74bbcdc3e07d006ad748a21d557914e)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00afbe1c",
  "name": "FUN_00afbe1c",
  "size": 76,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "bb83931e9cac990aaf194f898f1b3ac3b021dbfbced2ded8f13c95e9c3b92926",
  "source_text_sha256": "bb83931e9cac990aaf194f898f1b3ac3b021dbfbced2ded8f13c95e9c3b92926"
}
~~~

## 呼び出し元

- [00715558](../00715/00715558.md)
- [00716de8](../00716/00716de8.md)
- [00a4f424](../00a4f/00a4f424.md)

## 呼び出し先

- [00851550](../00851/00851550.md)

## 疑似コード / UTF-8 217 bytes

~~~c

void FUN_00afbe1c(int param_1,int param_2,undefined4 param_3)

{
  long lVar1;
  
  lVar1 = FUN_00851550();
  *(undefined4 *)(lVar1 + (long)param_1 * 0xc804 + (long)param_2 * 0x3ec + 0x84c3c) = param_3;
  return;
}

~~~
