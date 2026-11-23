# 00afbef4

版: 16.0.2 / arm64-v8a / libnative-lib.so

SO SHA-256: `baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/0-1/inspection-0038.md#compare-5a785892ebdd53311b06dfcdfaa606b3)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/1-2/priority-0080.md#compare-9671d2bd57094468b273b4cc69c26144)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00afbef4",
  "name": "FUN_00afbef4",
  "size": 84,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "a561df13c4ee6b40de1977eb4d420796ce82fa7f6e01ffb843660ad6ef201da7",
  "source_text_sha256": "a561df13c4ee6b40de1977eb4d420796ce82fa7f6e01ffb843660ad6ef201da7"
}
~~~

## 呼び出し元

- [005f2da8](../005f2/005f2da8.md)

## 呼び出し先

- [00851550](../00851/00851550.md)

## 疑似コード / UTF-8 345 bytes

~~~c

void FUN_00afbef4(int param_1,int param_2,int param_3)

{
  long lVar1;
  
  lVar1 = FUN_00851550();
  lVar1 = lVar1 + (long)param_1 * 0xc804 + (long)param_2 * 0x3ec;
  *(int *)(lVar1 + 0x849f4) = *(int *)(lVar1 + 0x849f4) + param_3;
                    /* try { // try from 00afbf44 to 00bfbf47 has its CatchHandler @ 00afcc04 */
  return;
}

~~~
