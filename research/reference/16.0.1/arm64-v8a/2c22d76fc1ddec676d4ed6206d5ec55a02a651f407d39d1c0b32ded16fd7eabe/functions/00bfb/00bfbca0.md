# 00bfbca0

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/reference_unresolved-0001.md#compare-1d3b6eeae12f28be0ae8d2050866f149)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/reference_unresolved-0001.md#compare-d089eacc5336beaa9e7bc196df769a5d)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00bfbca0",
  "name": "_ZNSt6__ndk115basic_streambufIcNS_11char_traitsIcEEE9pubsetbufEPcl",
  "size": 16,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "28582086d13d110cd04ae3ab9f8a8be879fa561ea77d36092d5116c179978803",
  "source_text_sha256": "28582086d13d110cd04ae3ab9f8a8be879fa561ea77d36092d5116c179978803"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

解決済みの記録なし。

## 疑似コード / UTF-8 302 bytes

~~~c

void _ZNSt6__ndk115basic_streambufIcNS_11char_traitsIcEEE9pubsetbufEPcl(long *param_1)

{
                    /* WARNING: Could not recover jumptable at 0x00bfbcac. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (**(code **)(*param_1 + 0x18))();
  return;
}

~~~
