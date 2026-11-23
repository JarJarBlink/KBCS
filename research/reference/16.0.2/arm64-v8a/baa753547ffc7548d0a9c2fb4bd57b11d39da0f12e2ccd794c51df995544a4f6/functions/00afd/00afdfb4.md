# 00afdfb4

版: 16.0.2 / arm64-v8a / libnative-lib.so

SO SHA-256: `baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/inspection-0037.md#compare-5c4fc0f8547e68db0dd8374368253505)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/inspection-0030.md#compare-ec8daaa5b2343a4e1a422bee432646d1)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00afdfb4",
  "name": "FUN_00afdfb4",
  "size": 76,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "23ef5809559f7d8ec4c67fe0ad0e2d3855d1ad7bf449a8e0d40d1cdd418a7e1a",
  "source_text_sha256": "23ef5809559f7d8ec4c67fe0ad0e2d3855d1ad7bf449a8e0d40d1cdd418a7e1a"
}
~~~

## 呼び出し元

- [00a4f424](../00a4f/00a4f424.md)

## 呼び出し先

- [00851550](../00851/00851550.md)

## 疑似コード / UTF-8 217 bytes

~~~c

void FUN_00afdfb4(int param_1,int param_2,undefined4 param_3)

{
  long lVar1;
  
  lVar1 = FUN_00851550();
  *(undefined4 *)(lVar1 + (long)param_1 * 0xc804 + (long)param_2 * 0x3ec + 0x84c7c) = param_3;
  return;
}

~~~
