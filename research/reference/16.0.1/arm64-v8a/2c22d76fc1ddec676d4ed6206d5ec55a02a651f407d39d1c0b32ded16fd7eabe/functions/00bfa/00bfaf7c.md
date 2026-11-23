# 00bfaf7c

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/high-0012.md#compare-d064e38721018758789cec9cf90358a5)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/high-0012.md#compare-8a2210acc4384d0ea4680c191c111e69)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00bfaf7c",
  "name": "_ZNSt6__ndk18ios_base7failureC1EPKcRKNS_10error_codeE",
  "size": 64,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "f923e895d745cbd1f58bfd32f991440c5c6f2de943f1bbf8db83ac49801faf76",
  "source_text_sha256": "f923e895d745cbd1f58bfd32f991440c5c6f2de943f1bbf8db83ac49801faf76"
}
~~~

## 呼び出し元

- [00c5e300](../00c5e/00c5e300.md)

## 呼び出し先

- [00c5e160](../00c5e/00c5e160.md)

## 疑似コード / UTF-8 310 bytes

~~~c

void _ZNSt6__ndk18ios_base7failureC1EPKcRKNS_10error_codeE
               (long *param_1,undefined8 param_2,undefined8 *param_3)

{
  _ZNSt6__ndk112system_errorC2ENS_10error_codeEPKc(param_1,*param_3,param_3[1],param_2);
  *param_1 = (long)(PTR__ZTVNSt6__ndk18ios_base7failureE_00c9bae8 + 0x10);
  return;
}

~~~
