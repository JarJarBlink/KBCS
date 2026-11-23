# 00afdc2c

版: 16.0.2 / arm64-v8a / libnative-lib.so

SO SHA-256: `baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/inspection-0037.md#compare-021b591b71d794983eae5e31290b8903)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/inspection-0030.md#compare-82ad1fc2c465ba1f70719fccf5b3ccb6)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00afdc2c",
  "name": "FUN_00afdc2c",
  "size": 64,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "69d6e9396e0c81a6ac99019b4e66fee466f94b23b4b3f20275c44e72024e7d72",
  "source_text_sha256": "69d6e9396e0c81a6ac99019b4e66fee466f94b23b4b3f20275c44e72024e7d72"
}
~~~

## 呼び出し元

- [00710330](../00710/00710330.md)

## 呼び出し先

- [00851550](../00851/00851550.md)

## 疑似コード / UTF-8 191 bytes

~~~c

undefined4 FUN_00afdc2c(int param_1,int param_2)

{
  long lVar1;
  
  lVar1 = FUN_00851550();
  return *(undefined4 *)(lVar1 + (long)param_1 * 0xc804 + (long)param_2 * 0x3ec + 0x84b44);
}

~~~
