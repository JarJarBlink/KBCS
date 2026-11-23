# 007afcac

版: 16.0.2 / arm64-v8a / libnative-lib.so

SO SHA-256: `baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/review-0060.md#review-0619a6d1b1cee917d2b111d2fd7c2e42)（要確認）
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/review-0027.md#review-0619a6d1b1cee917d2b111d2fd7c2e42)（要確認）
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "007afcac",
  "name": "FUN_007afcac",
  "size": 28,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "14820111165c9697fb18102ed450fbf6435f4f52acacfde7b56454ee0fe6b859",
  "source_text_sha256": "14820111165c9697fb18102ed450fbf6435f4f52acacfde7b56454ee0fe6b859"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

解決済みの記録なし。

## 疑似コード / UTF-8 322 bytes

~~~c

long FUN_007afcac(long param_1,long param_2)

{
  param_1 = param_1 + 0x10;
  if (*(char **)(param_2 + 8) !=
      "ZN19FriendInviteManager17createReferralApiERKNSt6__ndk112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEERKNS0_8functionIFvvEEERKNS9_IFviEEEE3$_0"
     ) {
    param_1 = 0;
  }
  return param_1;
}

~~~
