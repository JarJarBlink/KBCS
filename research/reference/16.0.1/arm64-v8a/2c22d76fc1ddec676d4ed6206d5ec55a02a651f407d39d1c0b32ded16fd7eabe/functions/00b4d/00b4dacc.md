# 00b4dacc

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/0-1/priority-0080.md#compare-fe17ddc031858901c4230e96e28a4fe3)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/1-2/priority-0087.md#compare-87e27719a025a3c9cfb5cf8437e4026b)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00b4dacc",
  "name": "_ZN8firebase4util9throwable10CacheClassEP7_JNIEnvP8_jobjectNS0_16ClassRequirementE",
  "size": 68,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "13d5fdc1b187ad7a9fe69ca837a2bf146998de685e2b43d1bb4942e70e67f68d",
  "source_text_sha256": "13d5fdc1b187ad7a9fe69ca837a2bf146998de685e2b43d1bb4942e70e67f68d"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

- [00c5af10](../00c5a/00c5af10.md)

## 関連文字列（未確認候補）

~~~text
"java/lang/Throwable"
~~~

## 疑似コード / UTF-8 472 bytes

~~~c

long _ZN8firebase4util9throwable10CacheClassEP7_JNIEnvP8_jobjectNS0_16ClassRequirementE
               (undefined8 param_1,undefined8 param_2,undefined4 param_3)

{
  if (DAT_01125cf0 == 0) {
    DAT_01125cf0 = _ZN8firebase4util15FindClassGlobalEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS5_9allocatorIS8_EEEEPKcNS0_16ClassRequirementE
                             (param_1,param_2,0,"java/lang/Throwable",param_3);
  }
  return DAT_01125cf0;
}

~~~
