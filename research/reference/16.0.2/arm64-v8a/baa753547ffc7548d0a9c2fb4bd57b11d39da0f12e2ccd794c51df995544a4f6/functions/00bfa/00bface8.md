# 00bface8

版: 16.0.2 / arm64-v8a / libnative-lib.so

SO SHA-256: `baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/priority-0096.md#compare-f49be379d8abb41b7657300f2aa1d31c)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/priority-0099.md#compare-8aaff7df5e9c60622f2ed1c325015594)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00bface8",
  "name": "FUN_00bface8",
  "size": 24,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "465decf2d3002968e64bbb72e58eb1ed5ad990b647790516179423d85ec32c46",
  "source_text_sha256": "465decf2d3002968e64bbb72e58eb1ed5ad990b647790516179423d85ec32c46"
}
~~~

## 呼び出し元

- [00bfaa64](../00bfa/00bfaa64.md)

## 呼び出し先

- [0043b7b8](../0043b/0043b7b8.md)

## 関連文字列（未確認候補）

~~~text
"vector"
~~~

## 疑似コード / UTF-8 119 bytes

~~~c

void FUN_00bface8(void)

{
                    /* WARNING: Subroutine does not return */
  FUN_0043b7b8("vector");
}

~~~
