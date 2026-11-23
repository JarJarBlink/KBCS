# 00afaff4

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/priority-0072.md#compare-b2a8656626ada006910bab0c8cc7dde8)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/priority-0080.md#compare-1e8cabde53faf2f174bbad9664b0ce39)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00afaff4",
  "name": "FUN_00afaff4",
  "size": 64,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "8cc034a09ebb02f4da880d0f0840131f2b199ee1b3d8c3646c6edc2a8f4a1439",
  "source_text_sha256": "8cc034a09ebb02f4da880d0f0840131f2b199ee1b3d8c3646c6edc2a8f4a1439"
}
~~~

## 呼び出し元

- [00700af8](../00700/00700af8.md)
- [00716d90](../00716/00716d90.md)

## 呼び出し先

- [008514f8](../00851/008514f8.md)

## 疑似コード / UTF-8 288 bytes

~~~c

undefined4 FUN_00afaff4(int param_1,int param_2)

{
  long lVar1;
  
                    /* try { // try from 00afaff8 to 00bfb057 has its CatchHandler @ 00afabcc */
  lVar1 = FUN_008514f8();
  return *(undefined4 *)(lVar1 + (long)param_1 * 0xc804 + (long)param_2 * 0x3ec + 0x84ba8);
}

~~~
