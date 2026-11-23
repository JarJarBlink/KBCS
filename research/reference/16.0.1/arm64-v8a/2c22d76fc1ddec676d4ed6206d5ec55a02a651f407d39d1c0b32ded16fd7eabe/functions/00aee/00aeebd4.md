# 00aeebd4

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/0-1/priority-0069.md#compare-892c0793557197044f82902720ac558c)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/1-2/priority-0077.md#compare-69a7dd1efdd7f5ca0f06f1ae043e7c6f)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00aeebd4",
  "name": "FUN_00aeebd4",
  "size": 20,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "02590199b4bef121ac83bc92dbfaacb2af1b3ef6988fbaf96a20eb4a9cfe0c5c",
  "source_text_sha256": "02590199b4bef121ac83bc92dbfaacb2af1b3ef6988fbaf96a20eb4a9cfe0c5c"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

解決済みの記録なし。

## 疑似コード / UTF-8 186 bytes

~~~c

void FUN_00aeebd4(long param_1,undefined8 *param_2)

{
  undefined8 uVar1;
  
  uVar1 = *(undefined8 *)(param_1 + 8);
  *param_2 = &PTR_FUN_00c8de68;
  param_2[1] = uVar1;
  return;
}

~~~
