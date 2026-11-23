# 00bffbf4

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/0-1/reference_unresolved-0001.md#compare-e9aade3dbe41b626e18230b04359e92a)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/1-2/reference_unresolved-0001.md#compare-54621de052732d48e3ded5afc9be9e92)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00bffbf4",
  "name": "_ZNSt6__ndk115basic_streambufIwNS_11char_traitsIwEEE6sbumpcEv",
  "size": 48,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "35f5f9e55973879c4032ee37e40c14e211d96f74aad3aece7104e7ce179e6f4f",
  "source_text_sha256": "35f5f9e55973879c4032ee37e40c14e211d96f74aad3aece7104e7ce179e6f4f"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

解決済みの記録なし。

## 疑似コード / UTF-8 523 bytes

~~~c

ulong _ZNSt6__ndk115basic_streambufIwNS_11char_traitsIwEEE6sbumpcEv(long *param_1)

{
  uint *puVar1;
  uint uVar2;
  ulong uVar3;
  
  puVar1 = (uint *)param_1[3];
  if (puVar1 != (uint *)param_1[4]) {
    uVar2 = *puVar1;
    param_1[3] = (long)(puVar1 + 1);
    return (ulong)uVar2;
  }
                    /* WARNING: Could not recover jumptable at 0x00bffc20. Too many branches */
                    /* WARNING: Treating indirect jump as call */
  uVar3 = (**(code **)(*param_1 + 0x50))(param_1);
  return uVar3;
}

~~~
