# 00a7dbec

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/0-1/priority-0065.md#compare-9c7821e8ac3271d6662c16055016f022)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/1-2/priority-0073.md#compare-1884d2d894ec447394d0a156bb44dd50)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00a7dbec",
  "name": "FUN_00a7dbec",
  "size": 148,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "8afc0f7467494965834a3a5a4a83892ed2e6b4c3c0283a2a2d01e60ed1c09c7d",
  "source_text_sha256": "8afc0f7467494965834a3a5a4a83892ed2e6b4c3c0283a2a2d01e60ed1c09c7d"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

- [0091ff5c](../0091f/0091ff5c.md)
- [00c53d00](../00c53/00c53d00.md)
- [00c57e80](../00c57/00c57e80.md)
- [00c57eb0](../00c57/00c57eb0.md)

## 疑似コード / UTF-8 667 bytes

~~~c

void FUN_00a7dbec(undefined8 *param_1)

{
  long lVar1;
  long *plVar2;
  
  plVar2 = (long *)param_1[0x8ba];
  *param_1 = &PTR_FUN_00c8bd00;
  if ((plVar2 != (long *)0x0) && (lVar1 = FUN_00c53d00(0xffffffffffffffff,plVar2 + 1), lVar1 == 0))
  {
    (**(code **)(*plVar2 + 0x10))(plVar2);
    _ZNSt6__ndk119__shared_weak_count14__release_weakEv(plVar2);
  }
  plVar2 = (long *)param_1[0x8b8];
  if ((plVar2 != (long *)0x0) && (lVar1 = FUN_00c53d00(0xffffffffffffffff,plVar2 + 1), lVar1 == 0))
  {
    (**(code **)(*plVar2 + 0x10))(plVar2);
    _ZNSt6__ndk119__shared_weak_count14__release_weakEv(plVar2);
  }
  FUN_0091ff5c(param_1);
  _ZdlPv(param_1);
  return;
}

~~~
