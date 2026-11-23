# 00afaccc

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/0-1/priority-0072.md#compare-c312a5f4073c00a55aaa0d5ca7c01632)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/1-2/priority-0080.md#compare-693c696a3213cc9dcb647f3917645e58)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00afaccc",
  "name": "FUN_00afaccc",
  "size": 76,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "21a7990bbccc2794e2ec2639d091b83e6332e034e25fe73eeaf8db94c0815706",
  "source_text_sha256": "21a7990bbccc2794e2ec2639d091b83e6332e034e25fe73eeaf8db94c0815706"
}
~~~

## 呼び出し元

- [00a4f3b4](../00a4f/00a4f3b4.md)

## 呼び出し先

- [008514f8](../00851/008514f8.md)

## 疑似コード / UTF-8 209 bytes

~~~c

void FUN_00afaccc(int param_1,int param_2,uint param_3)

{
  long lVar1;
  
  lVar1 = FUN_008514f8();
  *(uint *)(lVar1 + (long)param_1 * 0xc804 + (long)param_2 * 0x3ec + 0x84a30) = param_3 & 1;
  return;
}

~~~
