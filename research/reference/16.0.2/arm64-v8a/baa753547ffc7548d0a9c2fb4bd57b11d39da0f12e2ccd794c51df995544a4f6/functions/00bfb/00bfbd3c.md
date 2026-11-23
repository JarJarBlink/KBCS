# 00bfbd3c

版: 16.0.2 / arm64-v8a / libnative-lib.so

SO SHA-256: `baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/0-1/reference_unresolved-0001.md#compare-1d3b6eeae12f28be0ae8d2050866f149)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/1-2/reference_unresolved-0001.md#compare-d089eacc5336beaa9e7bc196df769a5d)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00bfbd3c",
  "name": "_ZNSt6__ndk115basic_streambufIcNS_11char_traitsIcEEE9pubsetbufEPcl",
  "size": 16,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "8e5016932053fad678e3da4002d6eca093ec0da9f6c4c5a91020d738fc22a40f",
  "source_text_sha256": "8e5016932053fad678e3da4002d6eca093ec0da9f6c4c5a91020d738fc22a40f"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

解決済みの記録なし。

## 疑似コード / UTF-8 302 bytes

~~~c

void _ZNSt6__ndk115basic_streambufIcNS_11char_traitsIcEEE9pubsetbufEPcl(long *param_1)

{
                    /* WARNING: Could not recover jumptable at 0x00bfbd48. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (**(code **)(*param_1 + 0x18))();
  return;
}

~~~
