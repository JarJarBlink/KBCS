# 00bf0efc

版: 16.0.2 / arm64-v8a / libnative-lib.so

SO SHA-256: `baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/0-1/inspection-0042.md#compare-40e5195eb95cb345c388eb7e2754b475)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/1-2/inspection-0038.md#compare-b7c607aeae73245a385bef0048bb970e)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00bf0efc",
  "name": "_ZNSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7replaceEmmPKc",
  "size": 84,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "d7bee42d8c1ef082d4482e3bfe38637abab28ec5812a87431775ab140a7ae030",
  "source_text_sha256": "d7bee42d8c1ef082d4482e3bfe38637abab28ec5812a87431775ab140a7ae030"
}
~~~

## 呼び出し元

- [00c58150](../00c58/00c58150.md)

## 呼び出し先

- [00c580b0](../00c58/00c580b0.md)
- [00c58140](../00c58/00c58140.md)

## 疑似コード / UTF-8 374 bytes

~~~c

void _ZNSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7replaceEmmPKc
               (undefined8 param_1,undefined8 param_2,undefined8 param_3,char *param_4)

{
  size_t sVar1;
  
  sVar1 = strlen(param_4);
  _ZNSt6__ndk112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7replaceEmmPKcm
            (param_1,param_2,param_3,param_4,sVar1);
  return;
}

~~~
