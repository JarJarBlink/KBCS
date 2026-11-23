# 007fcecc

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/0-1/priority-0044.md#compare-2f66d510108366d320bb575fd7a2b13d)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/1-2/priority-0048.md#compare-01fcf612ad4c31f8b65615e3cec81077)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "007fcecc",
  "name": "FUN_007fcecc",
  "size": 24,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "7013350142422f1cf2ed5891a8f5a07a286503f0cecee299fe17b8ee559a58d5",
  "source_text_sha256": "7013350142422f1cf2ed5891a8f5a07a286503f0cecee299fe17b8ee559a58d5"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

解決済みの記録なし。

## 疑似コード / UTF-8 234 bytes

~~~c

void FUN_007fcecc(long param_1,undefined8 *param_2)

{
  undefined8 uVar1;
  
  *param_2 = &PTR_FUN_00c7d830;
  uVar1 = *(undefined8 *)(param_1 + 8);
  param_2[2] = *(undefined8 *)(param_1 + 0x10);
  param_2[1] = uVar1;
  return;
}

~~~
