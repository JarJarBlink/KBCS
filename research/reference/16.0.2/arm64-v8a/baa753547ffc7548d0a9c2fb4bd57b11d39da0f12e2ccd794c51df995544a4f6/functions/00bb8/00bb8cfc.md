# 00bb8cfc

版: 16.0.2 / arm64-v8a / libnative-lib.so

SO SHA-256: `baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/0-1/priority-0087.md#compare-876527e358b4a8b9f20543d452496d16)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/1-2/priority-0091.md#compare-1c607672aebe82579eeb7d01cd2bcf4c)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00bb8cfc",
  "name": "_ZN8firebase9messaging18firebase_messaging19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEENS_4util16ClassRequirementE",
  "size": 64,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "fdeb94a47409809c1326f3ac768669af0ff00da50fd22bfaf1f1cf95e9035c58",
  "source_text_sha256": "fdeb94a47409809c1326f3ac768669af0ff00da50fd22bfaf1f1cf95e9035c58"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

- [00c5afe0](../00c5a/00c5afe0.md)

## 関連文字列（未確認候補）

~~~text
"%PG%com/google/firebase/messaging/FirebaseMessaging"
~~~

## 疑似コード / UTF-8 567 bytes

~~~c

long _ZN8firebase9messaging18firebase_messaging19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEENS_4util16ClassRequirementE
               (void)

{
                    /* try { // try from 00bb8d04 to 00cb8e2f has its CatchHandler @ 00bb9168 */
  if (DAT_011263a8 == 0) {
    DAT_011263a8 = _ZN8firebase4util15FindClassGlobalEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS5_9allocatorIS8_EEEEPKcNS0_16ClassRequirementE
                             ();
  }
  return DAT_011263a8;
}

~~~
