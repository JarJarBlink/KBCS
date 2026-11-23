# 004bddcc

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/0-1/detail_skipped-0001.md#compare-a5994cdb1a7ccf2ab62f58f3e4b757b5)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/1-2/detail_skipped-0001.md#compare-b7a75aba9b1a1d14200b1714c9e2a735)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "004bddcc",
  "name": "_ZNK5Botan14CTS_Decryption18minimum_final_sizeEv",
  "size": 16,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "57789614acc04473c5ba89620da6d6997a65a6142cdf06b3a64083374804239a",
  "source_text_sha256": "57789614acc04473c5ba89620da6d6997a65a6142cdf06b3a64083374804239a"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

解決済みの記録なし。

## 疑似コード / UTF-8 145 bytes

~~~c

long _ZNK5Botan14CTS_Decryption18minimum_final_sizeEv(long param_1)

{
  return (*(long *)(param_1 + 0x20) - *(long *)(param_1 + 0x18)) + 1;
}

~~~
