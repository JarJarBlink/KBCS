# 00a3effc

版: 16.0.2 / arm64-v8a / libnative-lib.so

SO SHA-256: `baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/inspection-0033.md#compare-45e1c215b356c8fe88d737e673eeb8f7)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/inspection-0027.md#compare-b70b6624145ea070b925f5b89f11a539)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00a3effc",
  "name": "FUN_00a3effc",
  "size": 56,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "6abdffaf70bff64d912889ba9af11670bde7847b85d8212fa9ea4696f7fb36a9",
  "source_text_sha256": "6abdffaf70bff64d912889ba9af11670bde7847b85d8212fa9ea4696f7fb36a9"
}
~~~

## 呼び出し元

- [00a3ea24](../00a3e/00a3ea24.md)

## 呼び出し先

- [005c17dc](../005c1/005c17dc.md)
- [00c57f80](../00c57/00c57f80.md)

## 疑似コード / UTF-8 221 bytes

~~~c

void FUN_00a3effc(void *param_1)

{
  FUN_005c17dc((long)param_1 + 0x28,*(undefined8 *)((long)param_1 + 0x30));
  FUN_005c17dc((long)param_1 + 0x10,*(undefined8 *)((long)param_1 + 0x18));
  _ZdlPv(param_1);
  return;
}

~~~
