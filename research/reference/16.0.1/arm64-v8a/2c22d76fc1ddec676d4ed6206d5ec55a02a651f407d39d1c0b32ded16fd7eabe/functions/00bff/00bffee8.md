# 00bffee8

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/detail_skipped-0008.md#compare-195014a64ecbddb9f26fc9a0b27e7544)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/detail_skipped-0008.md#compare-4b310557cf1439fcbaeee26d735676c2)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00bffee8",
  "name": "_ZNSt6__ndk115basic_streambufIwNS_11char_traitsIwEEE4setpEPwS4_",
  "size": 16,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "7259760e0046c5e836d5e3ee4d27a9c235e05320c156c4ddab9900c87ee20d0b",
  "source_text_sha256": "7259760e0046c5e836d5e3ee4d27a9c235e05320c156c4ddab9900c87ee20d0b"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

解決済みの記録なし。

## 疑似コード / UTF-8 289 bytes

~~~c

void _ZNSt6__ndk115basic_streambufIwNS_11char_traitsIwEEE4setpEPwS4_
               (long param_1,undefined8 param_2,undefined8 param_3)

{
  *(undefined8 *)(param_1 + 0x28) = param_2;
  *(undefined8 *)(param_1 + 0x30) = param_2;
  *(undefined8 *)(param_1 + 0x38) = param_3;
  return;
}

~~~
