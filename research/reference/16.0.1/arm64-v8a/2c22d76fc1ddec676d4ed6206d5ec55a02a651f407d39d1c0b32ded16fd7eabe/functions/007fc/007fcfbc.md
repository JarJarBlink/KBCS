# 007fcfbc

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/priority-0044.md#compare-9833d5b25abbed87aa6b42e21f5a9354)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/priority-0048.md#compare-f8aa44a1cd529231fb55f25fee8388d9)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "007fcfbc",
  "name": "FUN_007fcfbc",
  "size": 24,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "5221213ff435d0725e01a4a8eb5c6c575f00d101644c23b60ffa883c2270caa0",
  "source_text_sha256": "5221213ff435d0725e01a4a8eb5c6c575f00d101644c23b60ffa883c2270caa0"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

解決済みの記録なし。

## 疑似コード / UTF-8 234 bytes

~~~c

void FUN_007fcfbc(long param_1,undefined8 *param_2)

{
  undefined8 uVar1;
  
  *param_2 = &PTR_FUN_00c7d8b0;
  uVar1 = *(undefined8 *)(param_1 + 8);
  param_2[2] = *(undefined8 *)(param_1 + 0x10);
  param_2[1] = uVar1;
  return;
}

~~~
