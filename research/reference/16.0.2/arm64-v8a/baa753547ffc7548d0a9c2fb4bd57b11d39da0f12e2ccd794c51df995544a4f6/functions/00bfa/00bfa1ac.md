# 00bfa1ac

版: 16.0.2 / arm64-v8a / libnative-lib.so

SO SHA-256: `baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/inspection-0042.md#compare-971d012776bb25562fedb806da48076d)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/inspection-0039.md#compare-d528d5c8bb035f6741cce93fc7537d61)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00bfa1ac",
  "name": "_ZNSt6__ndk15mutexD1Ev",
  "size": 28,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "3a2b9013c09a966ea36207ba466a9119a371d55235d5a815814c0461f2f827cd",
  "source_text_sha256": "3a2b9013c09a966ea36207ba466a9119a371d55235d5a815814c0461f2f827cd"
}
~~~

## 呼び出し元

- [00c57f30](../00c57/00c57f30.md)

## 呼び出し先

- [00c5b760](../00c5b/00c5b760.md)

## 疑似コード / UTF-8 134 bytes

~~~c

int _ZNSt6__ndk15mutexD1Ev(pthread_mutex_t *param_1)

{
  int iVar1;
  
  iVar1 = pthread_mutex_destroy(param_1);
  return iVar1;
}

~~~
