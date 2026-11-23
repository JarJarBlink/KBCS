# 00aeea9c

版: 16.0.2 / arm64-v8a / libnative-lib.so

SO SHA-256: `baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/priority-0069.md#compare-14c7e8cb5b3b1d3a9fba3d7c2756475b)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/priority-0077.md#compare-95fe0c30ed46b43d6a2eaaeef7edf366)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00aeea9c",
  "name": "FUN_00aeea9c",
  "size": 52,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "def57947d9da7280c7b4ab60b99adbcd9888319cd4ca4c7bf9bc185d57ebc482",
  "source_text_sha256": "def57947d9da7280c7b4ab60b99adbcd9888319cd4ca4c7bf9bc185d57ebc482"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

- [00c57f60](../00c57/00c57f60.md)

## 疑似コード / UTF-8 224 bytes

~~~c

void FUN_00aeea9c(long param_1)

{
  undefined8 *puVar1;
  undefined8 uVar2;
  
  puVar1 = (undefined8 *)_Znwm(0x10);
  uVar2 = *(undefined8 *)(param_1 + 8);
  *puVar1 = &PTR_FUN_00c8de28;
  puVar1[1] = uVar2;
  return;
}

~~~
