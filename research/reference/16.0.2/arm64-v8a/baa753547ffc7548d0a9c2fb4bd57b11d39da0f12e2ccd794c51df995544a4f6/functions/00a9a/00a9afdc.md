# 00a9afdc

版: 16.0.2 / arm64-v8a / libnative-lib.so

SO SHA-256: `baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/0-1/priority-0066.md#compare-c30f2b380005457e53895b79b03e8157)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/1-2/priority-0074.md#compare-9be8f6d0dd7acf80fe4d5ddb1e6b626b)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00a9afdc",
  "name": "FUN_00a9afdc",
  "size": 52,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "be5f1e10c921d8c148778fb66807c29ff3f40d75af21c97c8e51ab520e9f383d",
  "source_text_sha256": "be5f1e10c921d8c148778fb66807c29ff3f40d75af21c97c8e51ab520e9f383d"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

- [00c57f60](../00c57/00c57f60.md)

## 疑似コード / UTF-8 224 bytes

~~~c

void FUN_00a9afdc(long param_1)

{
  undefined8 *puVar1;
  undefined8 uVar2;
  
  puVar1 = (undefined8 *)_Znwm(0x10);
  uVar2 = *(undefined8 *)(param_1 + 8);
  *puVar1 = &PTR_FUN_00c8d038;
  puVar1[1] = uVar2;
  return;
}

~~~
