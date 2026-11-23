# 007ffdfc

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/0-1/no_difference_in_scope-0008.md#compare-14fde0837b72ba779e92235f4c99360c)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/1-2/machine_only_observed-0012.md#compare-45d6737627ae9e38e473dd259a54577d)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "007ffdfc",
  "name": "FUN_007ffdfc",
  "size": 24,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "c622e1721c13c34615b7e13377d3b9e69f99b5a01e4f8cf01f4cd1298463ba48",
  "source_text_sha256": "c622e1721c13c34615b7e13377d3b9e69f99b5a01e4f8cf01f4cd1298463ba48"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

- [008b9178](../008b9/008b9178.md)

## 疑似コード / UTF-8 155 bytes

~~~c

void FUN_007ffdfc(undefined8 param_1,undefined8 *param_2,int *param_3)

{
  if (*param_3 == 2) {
    FUN_008b9178(*param_2);
    return;
  }
  return;
}

~~~
