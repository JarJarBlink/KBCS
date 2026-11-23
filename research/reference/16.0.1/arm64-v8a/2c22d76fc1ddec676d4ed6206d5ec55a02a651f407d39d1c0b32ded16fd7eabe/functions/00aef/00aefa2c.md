# 00aefa2c

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/0-1/priority-0069.md#compare-58be251b59c09e7b7bbcd50ec2d7b7da)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/1-2/priority-0077.md#compare-902659b7eb045df32f3541c9cde79c60)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00aefa2c",
  "name": "FUN_00aefa2c",
  "size": 48,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "9f9998fc9462e708f72fbfa05e8b58d1cd546e73f16f17dffecf5d3e17e6a822",
  "source_text_sha256": "9f9998fc9462e708f72fbfa05e8b58d1cd546e73f16f17dffecf5d3e17e6a822"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

- [008b6a5c](../008b6/008b6a5c.md)
- [008b6f10](../008b6/008b6f10.md)
- [008b79c8](../008b7/008b79c8.md)

## 疑似コード / UTF-8 387 bytes

~~~c

void FUN_00aefa2c(long param_1)

{
  undefined8 uVar1;
  
  uVar1 = FUN_008b79c8(*(long *)(param_1 + 8) + 0x2f38,0x326);
  uVar1 = FUN_008b6f10(uVar1,1);
                    /* try { // try from 00aefa50 to 00befa57 has its CatchHandler @ 00aefdb0 */
                    /* try { // try from 00aefa58 to 00befac7 has its CatchHandler @ 00aef8e0 */
  FUN_008b6a5c(uVar1,0);
  return;
}

~~~
