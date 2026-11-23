# 00acbac8

版: 16.0.2 / arm64-v8a / libnative-lib.so

SO SHA-256: `baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/priority-0069.md#compare-fd731a4df7a9343c3e33401e6b8e37bc)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/priority-0077.md#compare-b90ad4d51af0ebcc9bcd9c9acdf6d490)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00acbac8",
  "name": "FUN_00acbac8",
  "size": 48,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "4da900e1450aeeb0affa86612031bc974aac8a1c9bf375257154a4ff5c354f91",
  "source_text_sha256": "4da900e1450aeeb0affa86612031bc974aac8a1c9bf375257154a4ff5c354f91"
}
~~~

## 呼び出し元

- [00731f1c](../00731/00731f1c.md)
- [009355f0](../00935/009355f0.md)

## 呼び出し先

解決済みの記録なし。

## 疑似コード / UTF-8 399 bytes

~~~c

void FUN_00acbac8(undefined8 *param_1,undefined4 param_2,undefined4 param_3)

{
  *param_1 = &PTR_FUN_00c8d990;
  *(undefined4 *)(param_1 + 1) = param_2;
  *(undefined4 *)((long)param_1 + 0xc) = param_3;
  param_1[3] = 0;
  param_1[4] = 0;
  param_1[2] = 0;
  *(undefined1 *)(param_1 + 5) = 1;
  param_1[7] = 0;
  param_1[6] = 0;
  param_1[9] = 0;
  param_1[8] = 0;
  param_1[10] = 0;
  return;
}

~~~
