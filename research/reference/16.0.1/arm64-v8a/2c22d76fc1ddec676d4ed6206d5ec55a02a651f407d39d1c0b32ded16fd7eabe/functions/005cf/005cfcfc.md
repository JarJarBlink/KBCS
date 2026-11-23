# 005cfcfc

版: 16.0.1 / arm64-v8a / libnative-lib.so

SO SHA-256: `2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/priority-0024.md#compare-fad2d93adc97300c2f90efcd530edd05)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/priority-0025.md#compare-c74b03c721ac76a6525e3fb7b11da40e)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "005cfcfc",
  "name": "FUN_005cfcfc",
  "size": 20,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "f02271be7411263553c6daa86fe57d74c7fee7c034d7aa8c05ffc141cfa4b993",
  "source_text_sha256": "f02271be7411263553c6daa86fe57d74c7fee7c034d7aa8c05ffc141cfa4b993"
}
~~~

## 呼び出し元

- [005cfb34](../005cf/005cfb34.md)
- [005cfda0](../005cf/005cfda0.md)
- [005d0384](../005d0/005d0384.md)
- [005d808c](../005d8/005d808c.md)

## 呼び出し先

- [0043b778](../0043b/0043b778.md)

## 関連文字列（未確認候補）

~~~text
"vector"
~~~

## 疑似コード / UTF-8 119 bytes

~~~c

void FUN_005cfcfc(void)

{
                    /* WARNING: Subroutine does not return */
  FUN_0043b778("vector");
}

~~~
