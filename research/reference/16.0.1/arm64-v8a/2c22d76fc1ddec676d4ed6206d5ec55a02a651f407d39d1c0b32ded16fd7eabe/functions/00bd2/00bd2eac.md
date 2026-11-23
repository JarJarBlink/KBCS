# 00bd2eac

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/0-1/priority-0091.md#compare-47eeb142a3a8d1da7caa878e62b02f29)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/1-2/priority-0094.md#compare-9c71bfe528439685206e6c59e27a9659)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00bd2eac",
  "name": "_ZN8firebase4auth26firebase_network_exception10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE",
  "size": 68,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "2084fb3c265c8c96a3bcaae1244b7ff900fb999278c5752703f94a34d90aea70",
  "source_text_sha256": "2084fb3c265c8c96a3bcaae1244b7ff900fb999278c5752703f94a34d90aea70"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

- [00c5af10](../00c5a/00c5af10.md)

## 関連文字列（未確認候補）

~~~text
"%PG%com/google/firebase/FirebaseNetworkException"
~~~

## 疑似コード / UTF-8 550 bytes

~~~c

long _ZN8firebase4auth26firebase_network_exception10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE
               (undefined8 param_1,undefined8 param_2,undefined4 param_3)

{
  if (DAT_011269e8 == 0) {
    DAT_011269e8 = _ZN8firebase4util15FindClassGlobalEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS5_9allocatorIS8_EEEEPKcNS0_16ClassRequirementE
                             (param_1,param_2,0,"com/google/firebase/FirebaseNetworkException",
                              param_3);
  }
  return DAT_011269e8;
}

~~~
