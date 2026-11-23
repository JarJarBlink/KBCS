# 00befb9c

版: 16.0.2 / arm64-v8a / libnative-lib.so

SO SHA-256: `baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/machine_only_observed-0022.md#compare-5171a360f7c214ddd0e15aa4b1b6f32a)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/machine_only_observed-0022.md#compare-02015b505945b3155ee6f1275ea7d33c)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00befb9c",
  "name": "_ZNSt13exception_ptr31__from_native_exception_pointerEPv",
  "size": 12,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "ab94efff6e48e1cc8254530256a475c6b1ab93394096bc081b569cafc16596a6",
  "source_text_sha256": "ab94efff6e48e1cc8254530256a475c6b1ab93394096bc081b569cafc16596a6"
}
~~~

## 呼び出し元

- [00c58420](../00c58/00c58420.md)

## 呼び出し先

- [00c5dff0](../00c5d/00c5dff0.md)

## 疑似コード / UTF-8 197 bytes

~~~c

void _ZNSt13exception_ptr31__from_native_exception_pointerEPv
               (undefined8 *param_1,undefined8 param_2)

{
  *param_1 = param_2;
  __cxa_increment_exception_refcount();
  return;
}

~~~
