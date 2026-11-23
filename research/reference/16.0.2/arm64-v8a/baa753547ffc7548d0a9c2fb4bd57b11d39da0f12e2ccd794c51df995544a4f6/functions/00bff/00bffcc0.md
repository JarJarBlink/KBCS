# 00bffcc0

版: 16.0.2 / arm64-v8a / libnative-lib.so

SO SHA-256: `baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/reference_unresolved-0001.md#compare-1e8ff9ae06d0737ef9ecd6a9a73e720f)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/reference_unresolved-0001.md#compare-0292df092b10744c8a239b41bf20c270)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00bffcc0",
  "name": "_ZNSt6__ndk115basic_streambufIwNS_11char_traitsIwEEE5sgetcEv",
  "size": 36,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "eace3b2d029b66dbc474267230cc40d5d029ce718ad9441d6096c05ad9821988",
  "source_text_sha256": "eace3b2d029b66dbc474267230cc40d5d029ce718ad9441d6096c05ad9821988"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

解決済みの記録なし。

## 疑似コード / UTF-8 422 bytes

~~~c

ulong _ZNSt6__ndk115basic_streambufIwNS_11char_traitsIwEEE5sgetcEv(long *param_1)

{
  ulong uVar1;
  
  if ((uint *)param_1[3] != (uint *)param_1[4]) {
    return (ulong)*(uint *)param_1[3];
  }
                    /* WARNING: Could not recover jumptable at 0x00bffce0. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  uVar1 = (**(code **)(*param_1 + 0x48))();
  return uVar1;
}

~~~
