# 00bbbfcc

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/0-1/machine_only_observed-0022.md#compare-fc0d7f3b01073c7c7fcb662b4b05709e)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/1-2/machine_only_observed-0022.md#compare-4faf1465b08582143268ae682b880436)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00bbbfcc",
  "name": "_ZN8firebase9messaging28SetRegistrationOnInitEnabledEb",
  "size": 8,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "efafa7f6aaecbe929c9386bbe04beb413ad294e119d9b5e85a851fa83ab4c1ea",
  "source_text_sha256": "efafa7f6aaecbe929c9386bbe04beb413ad294e119d9b5e85a851fa83ab4c1ea"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

- [00c5aae0](../00c5a/00c5aae0.md)

## 疑似コード / UTF-8 167 bytes

~~~c

void _ZN8firebase9messaging28SetRegistrationOnInitEnabledEb(uint param_1)

{
  _ZN8firebase9messaging33SetTokenRegistrationOnInitEnabledEb(param_1 & 1);
  return;
}

~~~
