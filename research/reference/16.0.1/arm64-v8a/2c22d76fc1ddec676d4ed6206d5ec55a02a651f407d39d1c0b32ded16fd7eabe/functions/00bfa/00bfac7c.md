# 00bfac7c

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/0-1/inspection-0043.md#compare-4d3e5eb3e8839b77c8553f759854bd82)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/1-2/inspection-0040.md#compare-e68544a74a00aeba07ade381774c5141)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00bfac7c",
  "name": "FUN_00bfac7c",
  "size": 56,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "63193a515845a80aa2671131870c97eed581f9440fa308e67de54f5e28ab3d4e",
  "source_text_sha256": "63193a515845a80aa2671131870c97eed581f9440fa308e67de54f5e28ab3d4e"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

- [00c57eb0](../00c57/00c57eb0.md)
- [00c58150](../00c58/00c58150.md)

## 疑似コード / UTF-8 160 bytes

~~~c

void FUN_00bfac7c(void *param_1)

{
  if (param_1 != (void *)0x0) {
    _ZNSt6__ndk115__thread_structD1Ev();
    _ZdlPv(param_1);
    return;
  }
  return;
}

~~~
