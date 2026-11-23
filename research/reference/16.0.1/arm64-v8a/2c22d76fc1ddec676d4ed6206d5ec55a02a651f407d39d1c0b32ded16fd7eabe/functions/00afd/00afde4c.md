# 00afde4c

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/0-1/inspection-0038.md#compare-2dfc3ff0b91dcce4907e10e22d31526e)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/1-2/inspection-0031.md#compare-65a74314aab272eecf77fa02320bfad4)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00afde4c",
  "name": "FUN_00afde4c",
  "size": 64,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "a905fb64fbf284224c11b19b52fce422d4e29cd89ca7c785358dbbe7d566c8bf",
  "source_text_sha256": "a905fb64fbf284224c11b19b52fce422d4e29cd89ca7c785358dbbe7d566c8bf"
}
~~~

## 呼び出し元

- [007119f0](../00711/007119f0.md)

## 呼び出し先

- [008514f8](../00851/008514f8.md)

## 疑似コード / UTF-8 191 bytes

~~~c

undefined4 FUN_00afde4c(int param_1,int param_2)

{
  long lVar1;
  
  lVar1 = FUN_008514f8();
  return *(undefined4 *)(lVar1 + (long)param_1 * 0xc804 + (long)param_2 * 0x3ec + 0x84c78);
}

~~~
