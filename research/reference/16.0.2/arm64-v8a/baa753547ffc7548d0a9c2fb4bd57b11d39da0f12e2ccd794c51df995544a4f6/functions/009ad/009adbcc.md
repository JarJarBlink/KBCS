# 009adbcc

版: 16.0.2 / arm64-v8a / libnative-lib.so

SO SHA-256: `baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/priority-0059.md#compare-622f25ceb1aa7cc5555383c10cfdcdb6)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/inspection-0025.md#compare-e25ae1c35c5ebcf815a68c8e25748880)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "009adbcc",
  "name": "FUN_009adbcc",
  "size": 232,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "21a697e71986c819f2980888ad13033e509049cddfbfb3f808bc45f8bbef7046",
  "source_text_sha256": "21a697e71986c819f2980888ad13033e509049cddfbfb3f808bc45f8bbef7046"
}
~~~

## 呼び出し元

- [0072b1f8](../0072b/0072b1f8.md)
- [00793960](../00793/00793960.md)

## 呼び出し先

- [009b5ce8](../009b5/009b5ce8.md)
- [00c53d70](../00c53/00c53d70.md)
- [00c53da0](../00c53/00c53da0.md)
- [00c57f50](../00c57/00c57f50.md)
- [00c57fb0](../00c57/00c57fb0.md)

## 疑似コード / UTF-8 1316 bytes

~~~c

undefined8 FUN_009adbcc(long *param_1,int param_2)

{
  undefined8 *puVar1;
  undefined8 *puVar2;
  long *plVar3;
  long lVar4;
  int iVar5;
  long lVar6;
  long lVar7;
  undefined8 uVar8;
  undefined8 *puVar9;
  
                    /* catch() { ... } // from try @ 009ad938 with catch @ 009adbd0 */
                    /* catch() { ... } // from try @ 009ad9c4 with catch @ 009adbe4 */
  lVar4 = tpidr_el0;
  lVar7 = *(long *)(lVar4 + 0x28);
  puVar9 = (undefined8 *)*param_1;
  puVar2 = (undefined8 *)param_1[1];
  if (puVar9 == puVar2) {
    uVar8 = 0;
  }
  else {
    uVar8 = 0;
    do {
      puVar1 = (undefined8 *)*puVar9;
      plVar3 = (long *)puVar9[1];
      if (plVar3 != (long *)0x0) {
        FUN_00c53d70(1,plVar3 + 1);
      }
      iVar5 = FUN_009b5ce8(puVar1);
      if (iVar5 == param_2) {
        uVar8 = *puVar1;
      }
      if ((plVar3 != (long *)0x0) &&
         (lVar6 = FUN_00c53da0(0xffffffffffffffff,plVar3 + 1), lVar6 == 0)) {
        (**(code **)(*plVar3 + 0x10))(plVar3);
        _ZNSt6__ndk119__shared_weak_count14__release_weakEv(plVar3);
      }
    } while ((iVar5 != param_2) && (puVar9 = puVar9 + 2, puVar9 != puVar2));
  }
  if (*(long *)(lVar4 + 0x28) != lVar7) {
                    /* WARNING: Subroutine does not return */
    __stack_chk_fail();
  }
  return uVar8;
}

~~~
