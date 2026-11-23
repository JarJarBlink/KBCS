# 00af7bac

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/priority-0071.md#compare-08b6f0cf0e65616f8d65b44727747ca7)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/priority-0079.md#compare-0c703aaa46acf1ab77c7659505b75852)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00af7bac",
  "name": "FUN_00af7bac",
  "size": 96,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "45f699ed85237997805ef40c4a926ce8e530f4e391fd4dabdf402a23c79f8daa",
  "source_text_sha256": "45f699ed85237997805ef40c4a926ce8e530f4e391fd4dabdf402a23c79f8daa"
}
~~~

## 呼び出し元

- [00a4f3b4](../00a4f/00a4f3b4.md)

## 呼び出し先

- [008514f8](../00851/008514f8.md)

## 疑似コード / UTF-8 278 bytes

~~~c

void FUN_00af7bac(int param_1,int param_2,int param_3,undefined4 param_4)

{
  long lVar1;
  
  lVar1 = FUN_008514f8();
  *(undefined4 *)
   (lVar1 + (long)param_1 * 0xc804 + (long)param_2 * 0x3ec + (long)(int)(&DAT_0030a398)[param_3] * 4
   + 0x848c8) = param_4;
  return;
}

~~~
