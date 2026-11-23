# 00c0acdc

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/0-1/priority-0096.md#compare-cc2775c739acd7939118a7cdded39230)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/1-2/priority-0099.md#compare-99f828e952bf926ffefcf445a0afdb31)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00c0acdc",
  "name": "_ZNSt6__ndk16__clocEv",
  "size": 112,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "371bc99a0cbee51e8c73f468ef7d91c7add292481e190391bfa3018dd1caca01",
  "source_text_sha256": "371bc99a0cbee51e8c73f468ef7d91c7add292481e190391bfa3018dd1caca01"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

- [00c57e50](../00c57/00c57e50.md)
- [00c57e70](../00c57/00c57e70.md)
- [00c5d220](../00c5d/00c5d220.md)

## 疑似コード / UTF-8 282 bytes

~~~c

__locale_t _ZNSt6__ndk16__clocEv(void)

{
  int iVar1;
  
  if (((DAT_01127ca0 & 1) == 0) && (iVar1 = __cxa_guard_acquire(&DAT_01127ca0), iVar1 != 0)) {
    DAT_01127c98 = newlocale(0x1fbf,"C",(__locale_t)0x0);
    __cxa_guard_release(&DAT_01127ca0);
  }
  return DAT_01127c98;
}

~~~
