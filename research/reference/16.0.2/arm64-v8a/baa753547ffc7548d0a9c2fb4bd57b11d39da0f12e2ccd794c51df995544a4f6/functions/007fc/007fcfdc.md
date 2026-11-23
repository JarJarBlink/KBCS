# 007fcfdc

版: 16.0.2 / arm64-v8a / libnative-lib.so

SO SHA-256: `baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/priority-0044.md#compare-31e2d1cf2217d9d0d4c0a99d8b419d2b)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/priority-0048.md#compare-c07a2f96a610e9ac7bd18ea742e15c5b)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "007fcfdc",
  "name": "FUN_007fcfdc",
  "size": 56,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "fec0cd978d1eece15b31985780cfdc236da5cf170306b9f785fbed474afec5be",
  "source_text_sha256": "fec0cd978d1eece15b31985780cfdc236da5cf170306b9f785fbed474afec5be"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

- [00c57f60](../00c57/00c57f60.md)

## 疑似コード / UTF-8 308 bytes

~~~c

void FUN_007fcfdc(long param_1)

{
  undefined8 *puVar1;
  undefined8 uVar2;
  undefined8 uVar3;
  
  puVar1 = (undefined8 *)_Znwm(0x18);
  uVar3 = *(undefined8 *)(param_1 + 0x10);
  uVar2 = *(undefined8 *)(param_1 + 8);
  *puVar1 = &PTR_FUN_00c7d980;
  puVar1[2] = uVar3;
  puVar1[1] = uVar2;
  return;
}

~~~
