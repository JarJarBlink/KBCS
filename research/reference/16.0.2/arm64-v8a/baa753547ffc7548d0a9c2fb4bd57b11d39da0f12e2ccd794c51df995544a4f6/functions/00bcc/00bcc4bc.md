# 00bcc4bc

版: 16.0.2 / arm64-v8a / libnative-lib.so

SO SHA-256: `baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/priority-0090.md#compare-6c5c3418e91e1cfa93d27ed20f4a58a3)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/priority-0093.md#compare-02d4c7d7da64f1451bd3090d050c8d4c)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00bcc4bc",
  "name": "_ZN8firebase4auth4auth15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm",
  "size": 108,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "5bebeef8462c46fb289b89d70fbf867904a8a73afc243025007c48cd2dc401b4",
  "source_text_sha256": "5bebeef8462c46fb289b89d70fbf867904a8a73afc243025007c48cd2dc401b4"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

- [00c5b030](../00c5b/00c5b030.md)

## 疑似コード / UTF-8 479 bytes

~~~c

bool _ZN8firebase4auth4auth15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm
               (long *param_1,undefined8 param_2,undefined8 param_3)

{
  bool bVar1;
  int iVar2;
  
  if (DAT_01126830 == '\0') {
    iVar2 = (**(code **)(*param_1 + 0x6b8))(param_1,DAT_01126828,param_2,param_3);
    _ZN8firebase4util26CheckAndClearJniExceptionsEP7_JNIEnv(param_1);
    DAT_01126830 = iVar2 == 0;
    bVar1 = (bool)DAT_01126830;
  }
  else {
    bVar1 = false;
  }
  return bVar1;
}

~~~
