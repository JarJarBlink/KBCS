# 00bef9cc

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/detail_skipped-0008.md#compare-05434a5843587eb9c7d6bf74bdf8f168)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/detail_skipped-0008.md#compare-20399ded063ac7115f6d01bbefa377e4)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00bef9cc",
  "name": "_ZNSt6__ndk16chrono12system_clock9to_time_tERKNS0_10time_pointIS1_NS0_8durationIxNS_5ratioILl1ELl1000000EEEEEEE",
  "size": 40,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "52977bd100fe8d4c83044b13210764ff197a9588662d3fb95e5eac04529addde",
  "source_text_sha256": "52977bd100fe8d4c83044b13210764ff197a9588662d3fb95e5eac04529addde"
}
~~~

## 呼び出し元

- [00c589a0](../00c58/00c589a0.md)

## 呼び出し先

解決済みの記録なし。

## 疑似コード / UTF-8 184 bytes

~~~c

long _ZNSt6__ndk16chrono12system_clock9to_time_tERKNS0_10time_pointIS1_NS0_8durationIxNS_5ratioILl1ELl1000000EEEEEEE
               (long *param_1)

{
  return *param_1 / 1000000;
}

~~~
