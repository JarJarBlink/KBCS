# 00bffaf0

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/machine_only_observed-0023.md#compare-3c414b1f0847e5a53cc5705ce4bdeaf1)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/machine_only_observed-0022.md#compare-b2d0d2c691260f6dde7de9bc61dbc4b6)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00bffaf0",
  "name": "_ZNKSt6__ndk115basic_streambufIwNS_11char_traitsIwEEE6getlocEv",
  "size": 16,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "edf9af5098433a6669fa230d88f6652b8d857b234542fe3f462f8d9250b066e0",
  "source_text_sha256": "edf9af5098433a6669fa230d88f6652b8d857b234542fe3f462f8d9250b066e0"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

- [00c5a7d0](../00c5a/00c5a7d0.md)

## 疑似コード / UTF-8 170 bytes

~~~c

void _ZNKSt6__ndk115basic_streambufIwNS_11char_traitsIwEEE6getlocEv(undefined8 param_1,long param_2)

{
  _ZNSt6__ndk16localeC1ERKS0_(param_1,param_2 + 8);
  return;
}

~~~
