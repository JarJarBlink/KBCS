# 00bd1bfc

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/priority-0092.md#compare-596f8517addb000242afa5c77ac9ce47)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/priority-0094.md#compare-7e4c396bd1ce3808be69e407d58d2e9f)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00bd1bfc",
  "name": "_ZN8firebase4auth29invalid_credentials_exception12ReleaseClassEP7_JNIEnv",
  "size": 112,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "035f545430ee8ff98fb7cdda227200cdcc28542a1cc30d1a08c872bef094feba",
  "source_text_sha256": "035f545430ee8ff98fb7cdda227200cdcc28542a1cc30d1a08c872bef094feba"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

- [00c5af60](../00c5a/00c5af60.md)

## 疑似コード / UTF-8 404 bytes

~~~c

void _ZN8firebase4auth29invalid_credentials_exception12ReleaseClassEP7_JNIEnv(long *param_1)

{
  if (DAT_01126928 != 0) {
    if (DAT_01126930 != '\0') {
      (**(code **)(*param_1 + 0x6c0))(param_1);
      DAT_01126930 = '\0';
    }
    _ZN8firebase4util26CheckAndClearJniExceptionsEP7_JNIEnv(param_1);
    (**(code **)(*param_1 + 0xb0))(param_1,DAT_01126928);
    DAT_01126928 = 0;
  }
  return;
}

~~~
