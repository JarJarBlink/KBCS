# 009adbbc

版: 16.0.2 / arm64-v8a / libnative-lib.so

SO SHA-256: `baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/no_difference_in_scope-0011.md#compare-99d5a683c7125162d3e08b2a8b869bb2)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/no_difference_in_scope-0010.md#compare-d8cdd49aeec1fb4c2295772f21d84116)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "009adbbc",
  "name": "FUN_009adbbc",
  "size": 16,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "6033cc417b5b12d3e5d0fb605889b1918d3d5e7dfe8e838e10d389fc565402da",
  "source_text_sha256": "6033cc417b5b12d3e5d0fb605889b1918d3d5e7dfe8e838e10d389fc565402da"
}
~~~

## 呼び出し元

- [009b892c](../009b8/009b892c.md)
- [009b9738](../009b9/009b9738.md)
- [009b9794](../009b9/009b9794.md)
- [009ba090](../009ba/009ba090.md)

## 呼び出し先

解決済みの記録なし。

## 疑似コード / UTF-8 87 bytes

~~~c

ulong FUN_009adbbc(long *param_1)

{
  return (ulong)(param_1[1] - *param_1) >> 4;
}

~~~
