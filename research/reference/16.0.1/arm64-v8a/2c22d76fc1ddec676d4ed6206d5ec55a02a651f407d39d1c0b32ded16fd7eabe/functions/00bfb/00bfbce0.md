# 00bfbce0

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/reference_unresolved-0001.md#compare-65c1b8479955538c426a9f86e4a6f690)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/reference_unresolved-0001.md#compare-24124b54e07cd52d8561b4f0df72a8a5)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00bfbce0",
  "name": "_ZNSt6__ndk115basic_streambufIcNS_11char_traitsIcEEE8in_availEv",
  "size": 36,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "c0c9ebbaf6c83b4323e22fb6df15407b22eb707470e894ed19c7f51f71a94385",
  "source_text_sha256": "c0c9ebbaf6c83b4323e22fb6df15407b22eb707470e894ed19c7f51f71a94385"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

解決済みの記録なし。

## 疑似コード / UTF-8 417 bytes

~~~c

long _ZNSt6__ndk115basic_streambufIcNS_11char_traitsIcEEE8in_availEv(long *param_1)

{
  long lVar1;
  
  if ((ulong)param_1[3] < (ulong)param_1[4]) {
    return param_1[4] - param_1[3];
  }
                    /* WARNING: Could not recover jumptable at 0x00bfbd00. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  lVar1 = (**(code **)(*param_1 + 0x38))();
  return lVar1;
}

~~~
