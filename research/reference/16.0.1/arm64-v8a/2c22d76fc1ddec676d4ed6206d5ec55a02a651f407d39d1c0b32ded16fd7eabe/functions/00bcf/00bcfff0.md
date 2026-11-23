# 00bcfff0

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/reference_unresolved-0001.md#compare-dc7ff6d382c2850b90383e15eb4b24cf)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/reference_unresolved-0001.md#compare-5e999993bf8c6c903086aff6f982aa53)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00bcfff0",
  "name": "_ZN8firebase26ReferenceCountedFutureImpl7DeleteTINS_4auth4UserEEEvPv",
  "size": 20,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "a6e61bb8eb9afc08916d27070a0962d83813c5de22f9f63bc80009c0a66629e3",
  "source_text_sha256": "a6e61bb8eb9afc08916d27070a0962d83813c5de22f9f63bc80009c0a66629e3"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

解決済みの記録なし。

## 疑似コード / UTF-8 351 bytes

~~~c

void _ZN8firebase26ReferenceCountedFutureImpl7DeleteTINS_4auth4UserEEEvPv(long *param_1)

{
  if (param_1 != (long *)0x0) {
                    /* WARNING: Could not recover jumptable at 0x00bcfffc. Too many branches */
                    /* WARNING: Treating indirect jump as call */
    (**(code **)(*param_1 + 8))();
    return;
  }
  return;
}

~~~
