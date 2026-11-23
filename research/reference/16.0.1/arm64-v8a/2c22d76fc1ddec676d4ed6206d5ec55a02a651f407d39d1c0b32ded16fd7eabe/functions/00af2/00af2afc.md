# 00af2afc

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/0-1/inspection-0036.md#compare-265c5c79677d09c743ee87f8032ab622)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/1-2/inspection-0029.md#compare-fbc6e2c8b1add1226201f5dec0a6b441)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00af2afc",
  "name": "FUN_00af2afc",
  "size": 56,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "bfaa2fea21bd4c12744b4d26ebc11558ea78032fa985c2e6a7c23b7986bc205d",
  "source_text_sha256": "bfaa2fea21bd4c12744b4d26ebc11558ea78032fa985c2e6a7c23b7986bc205d"
}
~~~

## 呼び出し元

- [005fdc58](../005fd/005fdc58.md)
- [006bbc98](../006bb/006bbc98.md)
- [00a47f00](../00a47/00a47f00.md)

## 呼び出し先

- [008514f8](../00851/008514f8.md)

## 疑似コード / UTF-8 181 bytes

~~~c

void FUN_00af2afc(int param_1,undefined4 param_2)

{
  long lVar1;
  
  lVar1 = FUN_008514f8();
  *(undefined4 *)(lVar1 + (long)param_1 * 0xc804 + 0x848f8) = param_2;
  return;
}

~~~
