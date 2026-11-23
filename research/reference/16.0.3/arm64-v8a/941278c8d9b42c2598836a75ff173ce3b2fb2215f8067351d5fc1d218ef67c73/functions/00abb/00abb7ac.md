# 00abb7ac

版: 16.0.3 / arm64-v8a / libnative-lib.so

SO SHA-256: `941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73`

解析リビジョン `9afc4f9e264e1fda` · Ghidra `12.1.2`

<a id="comparisons"></a>

[擬似コード](#pseudocode) · [逆アセンブリ](#逆アセンブリ) · [分岐](#基本ブロックと分岐先) · [参照](#命令位置別の参照) · [比較](#comparisons)

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/0-1/no_difference_in_scope-0013.md#compare-623e4f1207cbd45e0496c1bcff93601d)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/648ae6f970369597a09542a0/1-2/no_difference_in_scope-0013.md#compare-7bea7bfa63a9caed58f7dfa69db36ea7)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00abb7ac",
  "name": "FUN_00abb7ac",
  "size": 8,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "1252f07d24aa26d7088cb8a58a95397a9d913ee8491178c30cbefcc09b2f0a77",
  "source_text_sha256": "1252f07d24aa26d7088cb8a58a95397a9d913ee8491178c30cbefcc09b2f0a77",
  "structure_status": "available",
  "structure_provenance": "receipt_verified",
  "index_boundary_verification": "legacy_boundary_unverified",
  "index_program_id": null,
  "structure_program_id": "3440b6bda0ebc7fc",
  "analysis_link": "legacy_program_id_unavailable",
  "structure": {
    "ranges": [
      [
        "00abb7ac",
        "00abb7b3"
      ]
    ],
    "bytes_sha256": "c40709113e97cec9c72bfbb7a6f1892a5b54d7906ca60d6c400c2e268577b883",
    "instruction_count": 2,
    "instruction_bytes": 8,
    "body_bytes": 8,
    "indirect": 0,
    "unresolved": 0
  }
}
~~~

## 呼び出し元

- [007cba84](../007cb/007cba84.md)

## 呼び出し先

解決済みの記録なし。

<a id="pseudocode"></a>

Ghidraによる復元。型・変数名・制御構造は推定です。

## 疑似コード / UTF-8 84 bytes

~~~c

undefined4 FUN_00abb7ac(long param_1)

{
  return *(undefined4 *)(param_1 + 4);
}

~~~

## 逆アセンブリ

命令アドレス、生バイト（メモリ順）、オペランド、フロー。

| アドレス | 生バイト | 命令・オペランド | フロー |
| --- | --- | --- | --- |
<a id="insn-00abb7ac"></a> `00abb7ac` | `00 04 40 b9` | ldr w0,[x0, #0x4] | `FALL_THROUGH`
<a id="insn-00abb7b0"></a> `00abb7b0` | `c0 03 5f d6` | ret | `TERMINATOR`

## 基本ブロックと分岐先

- ブロック [`00abb7ac`](#insn-00abb7ac) 範囲 `[['00abb7ac', '00abb7b3']]`

## 命令位置別の参照


## 読み取り専用データの取得範囲

Ghidraが定義した境界から先頭32バイトまで取得。型は推定値です。ポインタ、再配置、書込可能領域は取得理由を別記します。

## 読み取り専用データ

