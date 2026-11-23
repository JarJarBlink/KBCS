# 00befb8c

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/0-1/inspection-0042.md#compare-18a9c3fdfdf55644b0aeb380da6ea642)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/1-2/inspection-0038.md#compare-9b311461d933756d8eaa74e218b89119)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00befb8c",
  "name": "_ZNSt16nested_exceptionD0Ev",
  "size": 44,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "5f9b4c3ecb8743b3c446c82624c10459684c79cd235c4c6fe645e9a2f4b704da",
  "source_text_sha256": "5f9b4c3ecb8743b3c446c82624c10459684c79cd235c4c6fe645e9a2f4b704da"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

- [00c57eb0](../00c57/00c57eb0.md)
- [00c5df50](../00c5d/00c5df50.md)

## 疑似コード / UTF-8 117 bytes

~~~c

void _ZNSt16nested_exceptionD0Ev(void *param_1)

{
  _ZNSt16nested_exceptionD2Ev();
  _ZdlPv(param_1);
  return;
}

~~~
