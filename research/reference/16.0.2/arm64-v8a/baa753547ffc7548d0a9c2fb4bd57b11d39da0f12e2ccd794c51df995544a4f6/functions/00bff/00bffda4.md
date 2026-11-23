# 00bffda4

版: 16.0.2 / arm64-v8a / libnative-lib.so

SO SHA-256: `baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/priority-0096.md#compare-15fca007f9567e4b6452c573bda7d999)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/priority-0099.md#compare-222d64f0ed90b05337711f24a76b946a)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00bffda4",
  "name": "_ZNSt6__ndk115basic_streambufIwNS_11char_traitsIwEEEC2Ev",
  "size": 68,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "c38ade80ac5501d07f0d776ae1dc148d1b5ac19309eabed0f5219de363fb15b7",
  "source_text_sha256": "c38ade80ac5501d07f0d776ae1dc148d1b5ac19309eabed0f5219de363fb15b7"
}
~~~

## 呼び出し元

- [00c5e4b0](../00c5e/00c5e4b0.md)

## 呼び出し先

- [00c5a870](../00c5a/00c5a870.md)

## 疑似コード / UTF-8 340 bytes

~~~c

void _ZNSt6__ndk115basic_streambufIwNS_11char_traitsIwEEEC2Ev(long *param_1)

{
  *param_1 = (long)(PTR__ZTVNSt6__ndk115basic_streambufIwNS_11char_traitsIwEEEE_00c9bc00 + 0x10);
  _ZNSt6__ndk16localeC2Ev(param_1 + 1);
  param_1[5] = 0;
  param_1[4] = 0;
  param_1[7] = 0;
  param_1[6] = 0;
  param_1[3] = 0;
  param_1[2] = 0;
  return;
}

~~~
