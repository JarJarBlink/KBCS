# 00bfafc4

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/inspection-0042.md#compare-cf2a38c8a036f5c34b8ff654429e33f7)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/inspection-0039.md#compare-82deddafa9b6440bfee7516e0e02b115)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00bfafc4",
  "name": "_ZNSt6__ndk18ios_base7failureD0Ev",
  "size": 44,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "dfdf5589674f079308e6f234ab2e4b0511fdbe200b44032b9f88c3e7cb49d9ff",
  "source_text_sha256": "dfdf5589674f079308e6f234ab2e4b0511fdbe200b44032b9f88c3e7cb49d9ff"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

- [00c57eb0](../00c57/00c57eb0.md)
- [00c5e2c0](../00c5e/00c5e2c0.md)

## 疑似コード / UTF-8 129 bytes

~~~c

void _ZNSt6__ndk18ios_base7failureD0Ev(void *param_1)

{
  _ZNSt6__ndk18ios_base7failureD1Ev();
  _ZdlPv(param_1);
  return;
}

~~~
