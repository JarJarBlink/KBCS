# 00bfbda0

版: 16.0.2 / arm64-v8a / libnative-lib.so

SO SHA-256: `baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/0-1/inspection-0044.md#compare-47be016882b36d68a0ecee7aed54f7cb)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/1-2/inspection-0040.md#compare-73e7e2afa4e92a4181ec0a119faa6062)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00bfbda0",
  "name": "_ZNSt6__ndk115basic_streambufIcNS_11char_traitsIcEEE6snextcEv",
  "size": 132,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "bdc166147001eed9a20f9ac35b4d392885538b25e366131393c3a8bd8c799fc0",
  "source_text_sha256": "bdc166147001eed9a20f9ac35b4d392885538b25e366131393c3a8bd8c799fc0"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

解決済みの記録なし。

## 疑似コード / UTF-8 764 bytes

~~~c

ulong _ZNSt6__ndk115basic_streambufIcNS_11char_traitsIcEEE6snextcEv(long *param_1)

{
  ulong uVar1;
  byte *pbVar2;
  
  if ((byte *)param_1[3] == (byte *)param_1[4]) {
    uVar1 = (**(code **)(*param_1 + 0x50))();
    if ((int)uVar1 == -1) {
      return uVar1;
    }
    pbVar2 = (byte *)param_1[3];
    if (pbVar2 == (byte *)param_1[4]) goto LAB_00bfbdfc;
  }
  else {
    pbVar2 = (byte *)param_1[3] + 1;
    param_1[3] = (long)pbVar2;
    if (pbVar2 == (byte *)param_1[4]) {
LAB_00bfbdfc:
                    /* WARNING: Could not recover jumptable at 0x00bfbe10. Too many branches */
                    /* WARNING: Treating indirect jump as call */
      uVar1 = (**(code **)(*param_1 + 0x48))();
      return uVar1;
    }
  }
  return (ulong)*pbVar2;
}

~~~
