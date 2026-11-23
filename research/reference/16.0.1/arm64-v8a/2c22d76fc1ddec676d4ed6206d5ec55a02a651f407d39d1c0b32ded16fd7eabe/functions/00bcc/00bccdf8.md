# 00bccdf8

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/0-1/priority-0090.md#compare-932ca42b82f354624283d182c2605cc0)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/1-2/priority-0093.md#compare-b2aaa5044c6c592f6fb5b94055b9bade)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00bccdf8",
  "name": "_ZN8firebase4auth21jni_id_token_listener15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm",
  "size": 108,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "edb82a29a046a645b86f55859364419ce8cd7a26505e3c7ade4f2891fd2adc2f",
  "source_text_sha256": "edb82a29a046a645b86f55859364419ce8cd7a26505e3c7ade4f2891fd2adc2f"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

- [00c5af60](../00c5a/00c5af60.md)

## 疑似コード / UTF-8 497 bytes

~~~c

bool _ZN8firebase4auth21jni_id_token_listener15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm
               (long *param_1,undefined8 param_2,undefined8 param_3)

{
  bool bVar1;
  int iVar2;
  
  if (DAT_01126820 == '\0') {
    iVar2 = (**(code **)(*param_1 + 0x6b8))(param_1,DAT_01126818,param_2,param_3);
    _ZN8firebase4util26CheckAndClearJniExceptionsEP7_JNIEnv(param_1);
    DAT_01126820 = iVar2 == 0;
    bVar1 = (bool)DAT_01126820;
  }
  else {
    bVar1 = false;
  }
  return bVar1;
}

~~~
