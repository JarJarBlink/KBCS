# 00bfc3ac

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/0-1/inspection-0044.md#compare-932dfeb59e96b139e3ac5e76bfb93c8f)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/1-2/inspection-0040.md#compare-db820031eed27c8bb60d0dfdd75663d2)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00bfc3ac",
  "name": "_ZNSt6__ndk113basic_istreamIcNS_11char_traitsIcEEErsEPFRNS_9basic_iosIcS2_EES6_E",
  "size": 56,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "25bd5e3cc5ecd4dad5a47bc18796b8400d319c66fec064df72c75c6b08d5adea",
  "source_text_sha256": "25bd5e3cc5ecd4dad5a47bc18796b8400d319c66fec064df72c75c6b08d5adea"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

解決済みの記録なし。

## 疑似コード / UTF-8 219 bytes

~~~c

long * _ZNSt6__ndk113basic_istreamIcNS_11char_traitsIcEEErsEPFRNS_9basic_iosIcS2_EES6_E
                 (long *param_1,code *param_2)

{
  (*param_2)((long)param_1 + *(long *)(*param_1 + -0x18));
  return param_1;
}

~~~
