# 00bffbbc

版: 16.0.2 / arm64-v8a / libnative-lib.so

SO SHA-256: `baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/0-1/reference_unresolved-0001.md#compare-7c04766ca20bc03764936e1c07f36e78)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/1-2/reference_unresolved-0001.md#compare-090fd056fcc0e336002318e71a1ec822)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00bffbbc",
  "name": "_ZNSt6__ndk115basic_streambufIwNS_11char_traitsIwEEE10pubseekposENS_4fposI9mbstate_tEEj",
  "size": 16,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "00e8c9e320b060baa0fca31c67d3e50cb1232bdece6e3296f00bda6b1c9fd352",
  "source_text_sha256": "00e8c9e320b060baa0fca31c67d3e50cb1232bdece6e3296f00bda6b1c9fd352"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

解決済みの記録なし。

## 疑似コード / UTF-8 339 bytes

~~~c

void _ZNSt6__ndk115basic_streambufIwNS_11char_traitsIwEEE10pubseekposENS_4fposI9mbstate_tEEj
               (long *param_1)

{
                    /* WARNING: Could not recover jumptable at 0x00bffbc8. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (**(code **)(*param_1 + 0x28))();
  return;
}

~~~
