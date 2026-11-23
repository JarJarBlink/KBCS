# 00aeeed8

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/review-0040.md#review-6a58ff2be8ed689ec761b414cea0fce6)（要確認）
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/README.md)（版の比較一覧）
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00aeeed8",
  "name": "FUN_00aeeed8",
  "size": 24,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "35dbed5318c6e425f51d46fca1655c04c079ce6c1af67d18b67336f96a013ed2",
  "source_text_sha256": "35dbed5318c6e425f51d46fca1655c04c079ce6c1af67d18b67336f96a013ed2"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

解決済みの記録なし。

## 疑似コード / UTF-8 234 bytes

~~~c

void FUN_00aeeed8(long param_1,undefined8 *param_2)

{
  undefined8 uVar1;
  
  *param_2 = &PTR_FUN_00c8def8;
  uVar1 = *(undefined8 *)(param_1 + 8);
  param_2[2] = *(undefined8 *)(param_1 + 0x10);
  param_2[1] = uVar1;
  return;
}

~~~
