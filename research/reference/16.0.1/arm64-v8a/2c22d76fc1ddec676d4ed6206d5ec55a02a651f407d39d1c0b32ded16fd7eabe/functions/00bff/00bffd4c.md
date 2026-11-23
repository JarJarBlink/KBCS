# 00bffd4c

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/0-1/priority-0096.md#compare-caa0a95c40298b14b0fe3f7eb2a931c1)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/1-2/priority-0099.md#compare-62f4a5cb47b2216b99497f7b32b691fd)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00bffd4c",
  "name": "_ZNSt6__ndk115basic_streambufIwNS_11char_traitsIwEEEC1ERKS3_",
  "size": 88,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "fa6c0cda04c4860b015df10c95ebfedcc4128b348336ae41107767b245d793a8",
  "source_text_sha256": "fa6c0cda04c4860b015df10c95ebfedcc4128b348336ae41107767b245d793a8"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

- [00c5a7d0](../00c5a/00c5a7d0.md)

## 疑似コード / UTF-8 585 bytes

~~~c

void _ZNSt6__ndk115basic_streambufIwNS_11char_traitsIwEEEC1ERKS3_(long *param_1,long param_2)

{
  long lVar1;
  
  *param_1 = (long)(PTR__ZTVNSt6__ndk115basic_streambufIwNS_11char_traitsIwEEEE_00c9bb30 + 0x10);
  _ZNSt6__ndk16localeC1ERKS0_(param_1 + 1,param_2 + 8);
  lVar1 = *(long *)(param_2 + 0x10);
  param_1[3] = *(long *)(param_2 + 0x18);
  param_1[2] = lVar1;
  lVar1 = *(long *)(param_2 + 0x20);
  param_1[5] = *(long *)(param_2 + 0x28);
  param_1[4] = lVar1;
  lVar1 = *(long *)(param_2 + 0x30);
  param_1[7] = *(long *)(param_2 + 0x38);
  param_1[6] = lVar1;
  return;
}

~~~
