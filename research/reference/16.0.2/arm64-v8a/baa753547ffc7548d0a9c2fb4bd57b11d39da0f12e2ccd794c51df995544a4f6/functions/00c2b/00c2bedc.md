# 00c2bedc

版: 16.0.2 / arm64-v8a / libnative-lib.so

SO SHA-256: `baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/inspection-0044.md#compare-b1f807d44c9d9f461ac672c1922e8dfb)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/inspection-0041.md#compare-3b545e5f5106e2a5c7148d7f8eb9c19b)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00c2bedc",
  "name": "_ZNSt6__ndk117__widen_from_utf8ILm32EED0Ev",
  "size": 44,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "495ac687d8c45108e11e0e2d47417bc7fa8e8c11218de1ad622b48b9c3fcbbd4",
  "source_text_sha256": "495ac687d8c45108e11e0e2d47417bc7fa8e8c11218de1ad622b48b9c3fcbbd4"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

- [00c57f80](../00c57/00c57f80.md)
- [00c5ecd0](../00c5e/00c5ecd0.md)

## 疑似コード / UTF-8 146 bytes

~~~c

void _ZNSt6__ndk117__widen_from_utf8ILm32EED0Ev(void *param_1)

{
  _ZNSt6__ndk116__narrow_to_utf8ILm16EED1Ev();
  _ZdlPv(param_1);
  return;
}

~~~
