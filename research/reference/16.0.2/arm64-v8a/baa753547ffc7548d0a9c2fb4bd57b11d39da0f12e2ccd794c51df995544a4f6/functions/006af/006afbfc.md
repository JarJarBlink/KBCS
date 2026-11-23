# 006afbfc

版: 16.0.2 / arm64-v8a / libnative-lib.so

SO SHA-256: `baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/review-0055.md#review-38e0c1eabe9fac07fde08181494da950)（要確認）
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/review-0022.md#review-38e0c1eabe9fac07fde08181494da950)（要確認）
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "006afbfc",
  "name": "FUN_006afbfc",
  "size": 28,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "7f14a4a27eb5f2b2d55acf157eccd97c30ce79b907dfd3155759b7b76ebef5cf",
  "source_text_sha256": "7f14a4a27eb5f2b2d55acf157eccd97c30ce79b907dfd3155759b7b76ebef5cf"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

解決済みの記録なし。

## 疑似コード / UTF-8 184 bytes

~~~c

long FUN_006afbfc(long param_1,long param_2)

{
  param_1 = param_1 + 8;
  if (*(char **)(param_2 + 8) != "ZN12EvolveWindow4openEibE3$_0") {
    param_1 = 0;
  }
  return param_1;
}

~~~
