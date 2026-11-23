# 00bd5dbc

版: 16.0.2 / arm64-v8a / libnative-lib.so

SO SHA-256: `baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/priority-0093.md#compare-e82339183564d50f9931927a3cb0422b)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/priority-0096.md#compare-7099bdf4115dbd6fa84b3486b31385ba)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00bd5dbc",
  "name": "_ZN8firebase4auth10googlecred12ReleaseClassEP7_JNIEnv",
  "size": 112,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "6e09abc1f6546c77e96b1972e47d79522dfae1940c7168ab8baa23a1e6ab6446",
  "source_text_sha256": "6e09abc1f6546c77e96b1972e47d79522dfae1940c7168ab8baa23a1e6ab6446"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

- [00c5b030](../00c5b/00c5b030.md)

## 疑似コード / UTF-8 385 bytes

~~~c

void _ZN8firebase4auth10googlecred12ReleaseClassEP7_JNIEnv(long *param_1)

{
  if (DAT_01126bc8 != 0) {
    if (DAT_01126bd0 != '\0') {
      (**(code **)(*param_1 + 0x6c0))(param_1);
      DAT_01126bd0 = '\0';
    }
    _ZN8firebase4util26CheckAndClearJniExceptionsEP7_JNIEnv(param_1);
    (**(code **)(*param_1 + 0xb0))(param_1,DAT_01126bc8);
    DAT_01126bc8 = 0;
  }
  return;
}

~~~
