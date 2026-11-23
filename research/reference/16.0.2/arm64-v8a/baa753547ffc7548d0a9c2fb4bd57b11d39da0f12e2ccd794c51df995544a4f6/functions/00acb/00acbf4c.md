# 00acbf4c

版: 16.0.2 / arm64-v8a / libnative-lib.so

SO SHA-256: `baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/0-1/detail_skipped-0007.md#compare-9db30ceb9584937b7df9a5242da60b2d)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/1-2/detail_skipped-0006.md#compare-42f8ef355fb29985891efd18e988964f)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00acbf4c",
  "name": "FUN_00acbf4c",
  "size": 60,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "4d33a67ff2c22311469f73f3493a48782ecd262cb35ef51d78f5853b75ca21fd",
  "source_text_sha256": "4d33a67ff2c22311469f73f3493a48782ecd262cb35ef51d78f5853b75ca21fd"
}
~~~

## 呼び出し元

- [00732084](../00732/00732084.md)
- [00935b64](../00935/00935b64.md)

## 呼び出し先

解決済みの記録なし。

## 疑似コード / UTF-8 458 bytes

~~~c

int FUN_00acbf4c(long param_1)

{
  long lVar1;
  int iVar2;
  long lVar3;
  
  if (*(long *)(param_1 + 0x30) == 0) {
    iVar2 = 0;
  }
  else {
    iVar2 = 0;
    lVar1 = *(long *)(param_1 + 0x30);
    lVar3 = param_1;
    do {
      param_1 = lVar1;
      iVar2 = *(int *)(lVar3 + 0xc) + iVar2;
      lVar1 = *(long *)(param_1 + 0x30);
      lVar3 = param_1;
    } while (*(long *)(param_1 + 0x30) != 0);
  }
  return *(int *)(param_1 + 0xc) + iVar2;
}

~~~
