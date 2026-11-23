# 00bfaeec

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/priority-0096.md#compare-ae4092c106b4cfa3d7a033075c12e1eb)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/priority-0099.md#compare-45a68be5f8a530b45ab4ba4746ccd23c)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00bfaeec",
  "name": "_ZNSt6__ndk117iostream_categoryEv",
  "size": 80,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "8f475e7628c8811590bcd4c0b128ddc9327a9dc40ae279fa30aff00e83a44b70",
  "source_text_sha256": "8f475e7628c8811590bcd4c0b128ddc9327a9dc40ae279fa30aff00e83a44b70"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

- [00c57e50](../00c57/00c57e50.md)
- [00c57e70](../00c57/00c57e70.md)

## 疑似コード / UTF-8 243 bytes

~~~c

undefined ** _ZNSt6__ndk117iostream_categoryEv(void)

{
  int iVar1;
  
  if (((DAT_01127390 & 1) == 0) && (iVar1 = __cxa_guard_acquire(&DAT_01127390), iVar1 != 0)) {
    __cxa_guard_release(&DAT_01127390);
  }
  return &PTR_PTR_00ca4800;
}

~~~
