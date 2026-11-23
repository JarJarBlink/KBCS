# 00bd5ffc

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/priority-0093.md#compare-a6ec60e2675e86cbe30f0930c8feca77)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/priority-0096.md#compare-d42d37ff7b23a42f2364b0e0262b4b94)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00bd5ffc",
  "name": "_ZN8firebase4auth13playgamescred15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm",
  "size": 108,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "a9d0c5f178c421b430a6dd9cdaaf719eaf5e7b451093776403e5915d6d147f0a",
  "source_text_sha256": "a9d0c5f178c421b430a6dd9cdaaf719eaf5e7b451093776403e5915d6d147f0a"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

- [00c5af60](../00c5a/00c5af60.md)

## 疑似コード / UTF-8 489 bytes

~~~c

bool _ZN8firebase4auth13playgamescred15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm
               (long *param_1,undefined8 param_2,undefined8 param_3)

{
  bool bVar1;
  int iVar2;
  
  if (DAT_01126af0 == '\0') {
    iVar2 = (**(code **)(*param_1 + 0x6b8))(param_1,DAT_01126ae8,param_2,param_3);
    _ZN8firebase4util26CheckAndClearJniExceptionsEP7_JNIEnv(param_1);
    DAT_01126af0 = iVar2 == 0;
    bVar1 = (bool)DAT_01126af0;
  }
  else {
    bVar1 = false;
  }
  return bVar1;
}

~~~
