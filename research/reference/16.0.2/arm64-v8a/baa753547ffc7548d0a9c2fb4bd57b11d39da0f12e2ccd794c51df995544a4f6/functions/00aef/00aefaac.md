# 00aefaac

版: 16.0.2 / arm64-v8a / libnative-lib.so

SO SHA-256: `baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6`

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/priority-0069.md#compare-c6af3475237f5cbdf8dbf1fd41b6be4f)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/priority-0077.md#compare-a8fd5b3122b814ecf2bed6cb1b8cb75f)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00aefaac",
  "name": "FUN_00aefaac",
  "size": 20,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "65ea570066b760adaec21e44a4046e330b0988658cadc69f7b683da38a1e820f",
  "source_text_sha256": "65ea570066b760adaec21e44a4046e330b0988658cadc69f7b683da38a1e820f"
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

解決済みの記録なし。

## 疑似コード / UTF-8 283 bytes

~~~c

void FUN_00aefaac(long param_1,undefined8 *param_2)

{
  undefined8 uVar1;
  
                    /* try { // try from 00aefaac to 00befb1b has its CatchHandler @ 00aef934 */
  uVar1 = *(undefined8 *)(param_1 + 8);
  *param_2 = &PTR_FUN_00c8e1b8;
  param_2[1] = uVar1;
  return;
}

~~~
