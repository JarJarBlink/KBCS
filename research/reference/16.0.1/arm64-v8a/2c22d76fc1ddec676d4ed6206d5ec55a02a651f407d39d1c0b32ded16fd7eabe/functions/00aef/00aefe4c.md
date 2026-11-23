# 00aefe4c

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/priority-0070.md#compare-22f73952c2e207adea64b393a5c2734c)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/priority-0077.md#compare-ca845f003fffd097ba09929567fffada)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00aefe4c",
  "name": "FUN_00aefe4c",
  "size": 24,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "537076cf9fbb9072a928c3e1fbf84afa1368c312c7baa9266b87860635a69709",
  "source_text_sha256": "537076cf9fbb9072a928c3e1fbf84afa1368c312c7baa9266b87860635a69709"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

解決済みの記録なし。

## 疑似コード / UTF-8 234 bytes

~~~c

void FUN_00aefe4c(long param_1,undefined8 *param_2)

{
  undefined8 uVar1;
  
  *param_2 = &PTR_FUN_00c8e1e8;
  uVar1 = *(undefined8 *)(param_1 + 8);
  param_2[2] = *(undefined8 *)(param_1 + 0x10);
  param_2[1] = uVar1;
  return;
}

~~~
