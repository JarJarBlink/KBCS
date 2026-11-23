# 00befafc

版: 16.0.2 / arm64-v8a / libnative-lib.so

SO SHA-256: `baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/inspection-0040.md#compare-ce92a923dbf54a3923ef26c7e1f04239)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/inspection-0037.md#compare-cf6cb1f34b0b7acafbbbf9f5ffccbd36)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00befafc",
  "name": "_ZSt18uncaught_exceptionv",
  "size": 36,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "408c32ff3f2a9d43bdea5bc67a0634c1f0706226fe222aba20bfa3acd33b0c75",
  "source_text_sha256": "408c32ff3f2a9d43bdea5bc67a0634c1f0706226fe222aba20bfa3acd33b0c75"
}
~~~

## 呼び出し元

- [00c5d1c0](../00c5d/00c5d1c0.md)

## 呼び出し先

- [00c5dfd0](../00c5d/00c5dfd0.md)

## 疑似コード / UTF-8 119 bytes

~~~c

bool _ZSt18uncaught_exceptionv(void)

{
  int iVar1;
  
  iVar1 = __cxa_uncaught_exceptions();
  return 0 < iVar1;
}

~~~
