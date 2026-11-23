# 00afdff0

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/0-1/inspection-0038.md#compare-ab745235cded410524daea49c8a0af39)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/1-2/inspection-0031.md#compare-f26276b1eae01c2342676794899ea987)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00afdff0",
  "name": "FUN_00afdff0",
  "size": 64,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "68dc797df0cbe76828f74de0ebfdee2639f6868d975974234592b7b4a6343b4f",
  "source_text_sha256": "68dc797df0cbe76828f74de0ebfdee2639f6868d975974234592b7b4a6343b4f"
}
~~~

## 呼び出し元

- [00716d90](../00716/00716d90.md)

## 呼び出し先

- [008514f8](../00851/008514f8.md)

## 疑似コード / UTF-8 191 bytes

~~~c

undefined4 FUN_00afdff0(int param_1,int param_2)

{
  long lVar1;
  
  lVar1 = FUN_008514f8();
  return *(undefined4 *)(lVar1 + (long)param_1 * 0xc804 + (long)param_2 * 0x3ec + 0x84c94);
}

~~~
