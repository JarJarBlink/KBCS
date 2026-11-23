# 00afded8

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/inspection-0037.md#compare-0352960801a71f50f63675093b1982f4)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/inspection-0030.md#compare-72780684e49bb0d3cd5122f9177cd1d4)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00afded8",
  "name": "FUN_00afded8",
  "size": 64,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "8bccb08fe5e3aeec2f7b9359659515d4246c69f3799c7a5531619fc863a37d86",
  "source_text_sha256": "8bccb08fe5e3aeec2f7b9359659515d4246c69f3799c7a5531619fc863a37d86"
}
~~~

## 呼び出し元

- [00715500](../00715/00715500.md)

## 呼び出し先

- [008514f8](../00851/008514f8.md)

## 疑似コード / UTF-8 191 bytes

~~~c

undefined4 FUN_00afded8(int param_1,int param_2)

{
  long lVar1;
  
  lVar1 = FUN_008514f8();
  return *(undefined4 *)(lVar1 + (long)param_1 * 0xc804 + (long)param_2 * 0x3ec + 0x84c7c);
}

~~~
