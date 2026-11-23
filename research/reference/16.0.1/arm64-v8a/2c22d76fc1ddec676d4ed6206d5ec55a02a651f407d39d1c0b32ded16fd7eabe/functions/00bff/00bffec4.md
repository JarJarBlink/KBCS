# 00bffec4

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/detail_skipped-0008.md#compare-2eb399adda3733d94c4bdbcfc728ca26)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/detail_skipped-0008.md#compare-b0ef042933cc8ff0a31ee924e98249d2)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00bffec4",
  "name": "_ZNSt6__ndk115basic_streambufIwNS_11char_traitsIwEEE4setgEPwS4_S4_",
  "size": 16,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "098434ef367e68cbea698e65f44695afaa20218fc105ad8389fdf472c320b8a8",
  "source_text_sha256": "098434ef367e68cbea698e65f44695afaa20218fc105ad8389fdf472c320b8a8"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

解決済みの記録なし。

## 疑似コード / UTF-8 311 bytes

~~~c

void _ZNSt6__ndk115basic_streambufIwNS_11char_traitsIwEEE4setgEPwS4_S4_
               (long param_1,undefined8 param_2,undefined8 param_3,undefined8 param_4)

{
  *(undefined8 *)(param_1 + 0x10) = param_2;
  *(undefined8 *)(param_1 + 0x18) = param_3;
  *(undefined8 *)(param_1 + 0x20) = param_4;
  return;
}

~~~
