# 00bffbac

版: 16.0.2 / arm64-v8a / libnative-lib.so

SO SHA-256: `baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/reference_unresolved-0001.md#compare-e3784b62f5fddcc582ccb416269cad3a)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/reference_unresolved-0001.md#compare-2c7418e84d8e370dfc3a23d259a68994)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00bffbac",
  "name": "_ZNSt6__ndk115basic_streambufIwNS_11char_traitsIwEEE10pubseekoffExNS_8ios_base7seekdirEj",
  "size": 16,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "bf8d2f21ca386bac22342146d0a518c0b6a4e23492869d97c23d48c576286754",
  "source_text_sha256": "bf8d2f21ca386bac22342146d0a518c0b6a4e23492869d97c23d48c576286754"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

解決済みの記録なし。

## 疑似コード / UTF-8 340 bytes

~~~c

void _ZNSt6__ndk115basic_streambufIwNS_11char_traitsIwEEE10pubseekoffExNS_8ios_base7seekdirEj
               (long *param_1)

{
                    /* WARNING: Could not recover jumptable at 0x00bffbb8. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  (**(code **)(*param_1 + 0x20))();
  return;
}

~~~
