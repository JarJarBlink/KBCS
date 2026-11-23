# 00afcdc8

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/inspection-0037.md#compare-0b2f4f11694a649ef220892b5852491a)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/inspection-0030.md#compare-19becedd645bdf2c426aebbe5dffd2d1)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00afcdc8",
  "name": "FUN_00afcdc8",
  "size": 76,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "186ca84fd2352c94b6721c3a5a9394e19d905acd81899302be0f95972e001876",
  "source_text_sha256": "186ca84fd2352c94b6721c3a5a9394e19d905acd81899302be0f95972e001876"
}
~~~

## 呼び出し元

- [007119f0](../00711/007119f0.md)
- [00a4f3b4](../00a4f/00a4f3b4.md)

## 呼び出し先

- [008514f8](../00851/008514f8.md)

## 疑似コード / UTF-8 217 bytes

~~~c

void FUN_00afcdc8(int param_1,int param_2,undefined4 param_3)

{
  long lVar1;
  
  lVar1 = FUN_008514f8();
  *(undefined4 *)(lVar1 + (long)param_1 * 0xc804 + (long)param_2 * 0x3ec + 0x84c70) = param_3;
  return;
}

~~~
