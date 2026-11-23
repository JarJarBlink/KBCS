# 00afccf4

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/0-1/inspection-0038.md#compare-9743d769ccda63f30ff7d802941f27ef)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/1-2/inspection-0031.md#compare-396f1675b457d5ac49cb4e1b4f9f9a8e)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00afccf4",
  "name": "FUN_00afccf4",
  "size": 72,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "78134e2a6de93ec2fa04230f43b8fd84f6f8e7804f8d7cba71c2580fada5fe1f",
  "source_text_sha256": "78134e2a6de93ec2fa04230f43b8fd84f6f8e7804f8d7cba71c2580fada5fe1f"
}
~~~

## 呼び出し元

- [00700af8](../00700/00700af8.md)

## 呼び出し先

- [008514f8](../00851/008514f8.md)

## 疑似コード / UTF-8 183 bytes

~~~c

bool FUN_00afccf4(int param_1,int param_2)

{
  long lVar1;
  
  lVar1 = FUN_008514f8();
  return *(int *)(lVar1 + (long)param_1 * 0xc804 + (long)param_2 * 0x3ec + 0x84c34) != 0;
}

~~~
