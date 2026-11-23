# 00aeeacc

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/0-1/review-0034.md#review-3517daad6ce9bdfd0d4fbe619368668a)（要確認）
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/1-2/README.md)（版の比較一覧）
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00aeeacc",
  "name": "FUN_00aeeacc",
  "size": 28,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "a011765c99f85bf13b068c48560c610bf4918bd9bff4b6abac4a2e47a1412bdd",
  "source_text_sha256": "a011765c99f85bf13b068c48560c610bf4918bd9bff4b6abac4a2e47a1412bdd"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

解決済みの記録なし。

## 疑似コード / UTF-8 312 bytes

~~~c

long FUN_00aeeacc(long param_1,long param_2)

{
  param_1 = param_1 + 8;
  if (*(char **)(param_2 + 8) !=
      "ZZZN13MyApplication16UnitAdoptioninitEvENK3$_3clEP9NewButton20NewButtonChangeStateENKUlP9NewDialog20NewDialogChangeStateiE_clES5_S6_iEUlS2_S3_E0_"
     ) {
    param_1 = 0;
  }
  return param_1;
}

~~~
