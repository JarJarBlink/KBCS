# 00c2bdbc

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/0-1/inspection-0046.md#compare-e0a4936c76c9c6554d669dd4dab17a07)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/1-2/inspection-0042.md#compare-ddcd66b8c3f5e7d47cd7cbe20b58ce5c)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00c2bdbc",
  "name": "_ZNSt6__ndk116__narrow_to_utf8ILm16EED0Ev",
  "size": 44,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "37f67ef394073d5fb01b9ebe4873a1d3e784d5b6d476c41649f1e053e56927ae",
  "source_text_sha256": "37f67ef394073d5fb01b9ebe4873a1d3e784d5b6d476c41649f1e053e56927ae"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

- [00c57eb0](../00c57/00c57eb0.md)
- [00c5ebd0](../00c5e/00c5ebd0.md)

## 疑似コード / UTF-8 410 bytes

~~~c

void _ZNSt6__ndk116__narrow_to_utf8ILm16EED0Ev(void *param_1)

{
                    /* try { // try from 00c2bdc8 to 00d2be2b has its CatchHandler @ 00c2bdc8
                       catch() { ... } // from try @ 00c2bdc8 with catch @ 00c2bdc8
                       catch() { ... } // from try @ 00c2be3c with catch @ 00c2bdc8 */
  _ZNSt6__ndk116__narrow_to_utf8ILm16EED1Ev();
  _ZdlPv(param_1);
  return;
}

~~~
