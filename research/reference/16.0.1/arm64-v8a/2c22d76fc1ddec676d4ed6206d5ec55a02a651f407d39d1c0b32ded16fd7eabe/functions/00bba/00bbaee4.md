# 00bbaee4

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/priority-0088.md#compare-1beacfd6972405f21dfef01d6239337b)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/priority-0091.md#compare-1dba820ef5a30af0c85d9c04d18bca7b)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00bbaee4",
  "name": "_ZN8firebase9messaging32IsTokenRegistrationOnInitEnabledEv",
  "size": 108,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "43432ae0afb702394557486a437feca42f4539493446b7bc29a88be43ba84053",
  "source_text_sha256": "43432ae0afb702394557486a437feca42f4539493446b7bc29a88be43ba84053"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

- [00497a48](../00497/00497a48.md)
- [00c5aca0](../00c5a/00c5aca0.md)
- [00c5b000](../00c5b/00c5b000.md)
- [00c5b080](../00c5b/00c5b080.md)

## 関連文字列（未確認候補）

~~~text
"Messaging not initialized."
"internal::IsInitialized()"
~~~

## 疑似コード / UTF-8 447 bytes

~~~c

bool _ZN8firebase9messaging32IsTokenRegistrationOnInitEnabledEv(void)

{
  char cVar1;
  undefined8 uVar2;
  
  if (DAT_01126360 == 0) {
    _ZN8firebase8LogErrorEPKcz("internal::IsInitialized()");
    _ZN8firebase9LogAssertEPKcz("Messaging not initialized.");
    if (DAT_01126360 == 0) {
      return true;
    }
  }
  uVar2 = _ZNK8firebase3App9GetJNIEnvEv();
  cVar1 = FUN_00497a48(uVar2,DAT_01126398,DAT_011262b8);
  return cVar1 != '\0';
}

~~~
