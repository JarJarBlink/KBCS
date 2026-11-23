# 00afbbe4

版: 16.0.2 / arm64-v8a / libnative-lib.so

SO SHA-256: `baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/priority-0073.md#compare-44b6cdc94f52911275dacd311ce41522)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/priority-0080.md#compare-cae6b7d57593f91596e54050229ba813)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00afbbe4",
  "name": "FUN_00afbbe4",
  "size": 64,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "556ca44cce36a83f27d25a6efc2a870abdb977b5f96874474f4cf508745ca80e",
  "source_text_sha256": "556ca44cce36a83f27d25a6efc2a870abdb977b5f96874474f4cf508745ca80e"
}
~~~

## 呼び出し元

- [00700b50](../00700/00700b50.md)

## 呼び出し先

- [00851550](../00851/00851550.md)

## 疑似コード / UTF-8 288 bytes

~~~c

undefined4 FUN_00afbbe4(int param_1,int param_2)

{
  long lVar1;
  
  lVar1 = FUN_00851550();
                    /* try { // try from 00afbc00 to 00bfbc13 has its CatchHandler @ 00afcd04 */
  return *(undefined4 *)(lVar1 + (long)param_1 * 0xc804 + (long)param_2 * 0x3ec + 0x84c38);
}

~~~
