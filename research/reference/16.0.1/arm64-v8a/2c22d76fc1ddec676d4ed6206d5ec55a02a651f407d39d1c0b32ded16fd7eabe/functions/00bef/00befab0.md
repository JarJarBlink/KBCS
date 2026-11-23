# 00befab0

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/inspection-0040.md#compare-263d816a7f0177b15b6e1057f9e24e27)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/inspection-0037.md#compare-cded7bc4ba445495a8246fdad5e60c45)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00befab0",
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

- [00c5df30](../00c5d/00c5df30.md)

## 呼び出し先

- [00c5df10](../00c5d/00c5df10.md)
- [00c5df20](../00c5d/00c5df20.md)

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
