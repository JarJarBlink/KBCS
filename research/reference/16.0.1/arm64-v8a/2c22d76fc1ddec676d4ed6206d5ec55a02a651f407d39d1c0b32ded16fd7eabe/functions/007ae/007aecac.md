# 007aecac

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/0-1/priority-0041.md#compare-67aea1e0b045aa3b7c739edefe73991e)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/1-2/priority-0044.md#compare-400c224a67e49f8560a64c566b5595ef)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "007aecac",
  "name": "FUN_007aecac",
  "size": 20,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "b2106e73b783911d652e6df50b8e059baee5a7ae5fe23582ea4460a3f5bf6026",
  "source_text_sha256": "b2106e73b783911d652e6df50b8e059baee5a7ae5fe23582ea4460a3f5bf6026"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

解決済みの記録なし。

## 疑似コード / UTF-8 186 bytes

~~~c

void FUN_007aecac(long param_1,undefined8 *param_2)

{
  undefined8 uVar1;
  
  uVar1 = *(undefined8 *)(param_1 + 8);
  *param_2 = &PTR_FUN_00c7a618;
  param_2[1] = uVar1;
  return;
}

~~~
