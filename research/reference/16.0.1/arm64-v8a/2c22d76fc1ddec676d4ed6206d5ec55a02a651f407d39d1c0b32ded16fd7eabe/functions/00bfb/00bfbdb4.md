# 00bfbdb4

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/reference_unresolved-0001.md#compare-ddb9e62889cce56ffdd231a60e5d85e3)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/reference_unresolved-0001.md#compare-c1de0385e20d96d6f581c948458e2db6)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00bfbdb4",
  "name": "_ZNSt6__ndk115basic_streambufIcNS_11char_traitsIcEEE5sgetcEv",
  "size": 36,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "0f95e795623d246432c6d584f81ecd706d7f9da055d4bfe8d453e1b2e6a0806e",
  "source_text_sha256": "0f95e795623d246432c6d584f81ecd706d7f9da055d4bfe8d453e1b2e6a0806e"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

解決済みの記録なし。

## 疑似コード / UTF-8 422 bytes

~~~c

ulong _ZNSt6__ndk115basic_streambufIcNS_11char_traitsIcEEE5sgetcEv(long *param_1)

{
  ulong uVar1;
  
  if ((byte *)param_1[3] != (byte *)param_1[4]) {
    return (ulong)*(byte *)param_1[3];
  }
                    /* WARNING: Could not recover jumptable at 0x00bfbdd4. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  uVar1 = (**(code **)(*param_1 + 0x48))();
  return uVar1;
}

~~~
