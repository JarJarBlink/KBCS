# 00acbedc

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/0-1/detail_skipped-0007.md#compare-9db30ceb9584937b7df9a5242da60b2d)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/1-2/detail_skipped-0006.md#compare-42f8ef355fb29985891efd18e988964f)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00acbedc",
  "name": "FUN_00acbedc",
  "size": 60,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "48fcdfe9a16c87dbb0c64eb9c2e9b8989f49cc6678ea6f79376522f7f9083028",
  "source_text_sha256": "48fcdfe9a16c87dbb0c64eb9c2e9b8989f49cc6678ea6f79376522f7f9083028"
}
~~~

## 呼び出し元

- [0073202c](../00732/0073202c.md)
- [00935b10](../00935/00935b10.md)

## 呼び出し先

解決済みの記録なし。

## 疑似コード / UTF-8 458 bytes

~~~c

int FUN_00acbedc(long param_1)

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
