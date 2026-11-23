# 00befb4c

版: 16.0.2 / arm64-v8a / libnative-lib.so

SO SHA-256: `baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/0-1/inspection-0042.md#compare-263d816a7f0177b15b6e1057f9e24e27)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/1-2/inspection-0038.md#compare-cded7bc4ba445495a8246fdad5e60c45)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00befb4c",
  "name": "_ZNSt13exception_ptraSERKS_",
  "size": 80,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "6a4f2b6986ae6b3efb7483c629be87c5306bc0480dbf480a3c7b17005fe96bd8",
  "source_text_sha256": "6a4f2b6986ae6b3efb7483c629be87c5306bc0480dbf480a3c7b17005fe96bd8"
}
~~~

## 呼び出し元

- [00c5e000](../00c5e/00c5e000.md)

## 呼び出し先

- [00c5dfe0](../00c5d/00c5dfe0.md)
- [00c5dff0](../00c5d/00c5dff0.md)

## 疑似コード / UTF-8 240 bytes

~~~c

long * _ZNSt13exception_ptraSERKS_(long *param_1,long *param_2)

{
  if (*param_1 != *param_2) {
    __cxa_increment_exception_refcount();
    __cxa_decrement_exception_refcount(*param_1);
    *param_1 = *param_2;
  }
  return param_1;
}

~~~
