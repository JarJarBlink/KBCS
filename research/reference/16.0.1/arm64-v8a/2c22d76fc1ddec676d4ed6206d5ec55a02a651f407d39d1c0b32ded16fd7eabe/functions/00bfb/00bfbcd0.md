# 00bfbcd0

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/reference_unresolved-0001.md#compare-7aa6a08f2b51c1b478fae394c82c4c68)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/reference_unresolved-0001.md#compare-4b9cec4fa8b973bf6a00443e7a4cd798)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00bfbcd0",
  "name": "_ZNSt6__ndk115basic_streambufIcNS_11char_traitsIcEEE7pubsyncEv",
  "size": 16,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "217126163d778aa724afdd317750a9858fe6a2c71d0fb53a488c02d82db025dd",
  "source_text_sha256": "217126163d778aa724afdd317750a9858fe6a2c71d0fb53a488c02d82db025dd"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

解決済みの記録なし。

## 疑似コード / UTF-8 298 bytes

~~~c

void _ZNSt6__ndk115basic_streambufIcNS_11char_traitsIcEEE7pubsyncEv(long *param_1)

{
                    /* WARNING: Could not recover jumptable at 0x00bfbcdc. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (**(code **)(*param_1 + 0x30))();
  return;
}

~~~
