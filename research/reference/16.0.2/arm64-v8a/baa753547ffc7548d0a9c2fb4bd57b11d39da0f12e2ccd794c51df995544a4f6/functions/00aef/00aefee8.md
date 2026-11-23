# 00aefee8

版: 16.0.2 / arm64-v8a / libnative-lib.so

SO SHA-256: `baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/priority-0070.md#compare-22f73952c2e207adea64b393a5c2734c)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/priority-0077.md#compare-ca845f003fffd097ba09929567fffada)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00aefee8",
  "name": "FUN_00aefee8",
  "size": 24,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "6ac6fda648423ba8831ce76aae6d5d15bd3fda67f214333456b060c0e37e3038",
  "source_text_sha256": "6ac6fda648423ba8831ce76aae6d5d15bd3fda67f214333456b060c0e37e3038"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

解決済みの記録なし。

## 疑似コード / UTF-8 234 bytes

~~~c

void FUN_00aefee8(long param_1,undefined8 *param_2)

{
  undefined8 uVar1;
  
  *param_2 = &PTR_FUN_00c8e2b8;
  uVar1 = *(undefined8 *)(param_1 + 8);
  param_2[2] = *(undefined8 *)(param_1 + 0x10);
  param_2[1] = uVar1;
  return;
}

~~~
