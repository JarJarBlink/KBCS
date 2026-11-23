# 00bda7ec

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/inspection-0040.md#compare-9e028feb0cef754c24a90c050df454a8)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/inspection-0037.md#compare-8c36bb19d9fb383b284caafda8394f3a)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00bda7ec",
  "name": "_ZN8firebase4auth17PhoneAuthProvider19ForceResendingTokenaSERKS2_",
  "size": 48,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "a81525bcda9f99b25970576ecd2010e663e7053e802d3d68d6b82fbd325b3096",
  "source_text_sha256": "a81525bcda9f99b25970576ecd2010e663e7053e802d3d68d6b82fbd325b3096"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

- [00c5de40](../00c5d/00c5de40.md)

## 疑似コード / UTF-8 254 bytes

~~~c

undefined8 *
_ZN8firebase4auth17PhoneAuthProvider19ForceResendingTokenaSERKS2_
          (undefined8 *param_1,undefined8 *param_2)

{
  _ZN8firebase4auth23ForceResendingTokenData6SetRefEP8_jobject(*param_1,*(undefined8 *)*param_2);
  return param_1;
}

~~~
