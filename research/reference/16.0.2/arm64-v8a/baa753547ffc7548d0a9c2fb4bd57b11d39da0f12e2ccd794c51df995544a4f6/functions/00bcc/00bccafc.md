# 00bccafc

版: 16.0.2 / arm64-v8a / libnative-lib.so

SO SHA-256: `baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/priority-0090.md#compare-7a31af082cb838f9657b9b516c1176b3)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/priority-0093.md#compare-624fd929d51a8fe2b6c4e1b628d3f6e1)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00bccafc",
  "name": "_ZN8firebase4auth11jnilistener10CacheClassEP7_JNIEnvP8_jobject",
  "size": 68,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "684f4ec45613a386bb5105fdaa7c169e9af78587809e51f933ac0a147a15304b",
  "source_text_sha256": "684f4ec45613a386bb5105fdaa7c169e9af78587809e51f933ac0a147a15304b"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

- [00c5afe0](../00c5a/00c5afe0.md)

## 関連文字列（未確認候補）

~~~text
"com/google/firebase/auth/internal/cpp/JniAuthStateListener"
~~~

## 疑似コード / UTF-8 497 bytes

~~~c

long _ZN8firebase4auth11jnilistener10CacheClassEP7_JNIEnvP8_jobject
               (undefined8 param_1,undefined8 param_2)

{
  if (DAT_011268f0 == 0) {
    DAT_011268f0 = _ZN8firebase4util15FindClassGlobalEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS5_9allocatorIS8_EEEEPKcNS0_16ClassRequirementE
                             (param_1,param_2,0,
                              "com/google/firebase/auth/internal/cpp/JniAuthStateListener",0);
  }
  return DAT_011268f0;
}

~~~
