# 008aebdc

版: 16.0.3 / arm64-v8a / libnative-lib.so

SO SHA-256: `941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73`

解析リビジョン `9afc4f9e264e1fda` · Ghidra `12.1.2`

<a id="comparisons"></a>

[擬似コード](#pseudocode) · [逆アセンブリ](#逆アセンブリ) · [分岐](#基本ブロックと分岐先) · [参照](#命令位置別の参照) · [比較](#comparisons)

## 関数情報

~~~json
{
  "address": "008aebdc",
  "name": "FUN_008aebdc",
  "size": 12,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "c3b0767e5082735befb5a71719588d050a8d1677400ecc4f1cfd2b12aa6b55a7",
  "source_text_sha256": "c3b0767e5082735befb5a71719588d050a8d1677400ecc4f1cfd2b12aa6b55a7",
  "structure_status": "available",
  "structure_provenance": "receipt_verified",
  "index_boundary_verification": "legacy_boundary_unverified",
  "index_program_id": null,
  "structure_program_id": "3440b6bda0ebc7fc",
  "analysis_link": "legacy_program_id_unavailable",
  "structure": {
    "ranges": [
      [
        "008aebdc",
        "008aebe7"
      ]
    ],
    "bytes_sha256": "defc950916b4ad5df7b7b0663d8df3fe3e74606c7976a483af0fb9a1a760657b",
    "instruction_count": 3,
    "instruction_bytes": 12,
    "body_bytes": 12,
    "indirect": 0,
    "unresolved": 0
  }
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

解決済みの記録なし。

<a id="pseudocode"></a>

Ghidraによる復元。型・変数名・制御構造は推定です。

## 疑似コード / UTF-8 218 bytes

~~~c

pointer_____offset_0x10___ * FUN_008aebdc(void)

{
                    /* try { // try from 008aebe4 to 009aec67 has its CatchHandler @ 008aeb4c */
  return &PTR__ZTVN10__cxxabiv117__class_type_infoE_16__00c84d30;
}

~~~

## 逆アセンブリ

命令アドレス、生バイト（メモリ順）、オペランド、フロー。

| アドレス | 生バイト | 命令・オペランド | フロー |
| --- | --- | --- | --- |
<a id="insn-008aebdc"></a> `008aebdc` | `a0 1e 00 d0` | adrp x0,0xc84000 | `FALL_THROUGH`
<a id="insn-008aebe0"></a> `008aebe0` | `00 c0 34 91` | add x0,x0,#0xd30 | `FALL_THROUGH`
<a id="insn-008aebe4"></a> `008aebe4` | `c0 03 5f d6` | ret | `TERMINATOR`

## 基本ブロックと分岐先

- ブロック [`008aebdc`](#insn-008aebdc) 範囲 `[['008aebdc', '008aebe3']]`
  - `FALL_THROUGH` [`008aebe0`](#insn-008aebe0) → [`008aebe4`](#insn-008aebe4)
- ブロック [`008aebe4`](#insn-008aebe4) 範囲 `[['008aebe4', '008aebe7']]`

## 命令位置別の参照

- [`008aebe0`](#insn-008aebe0) → `00c84d30`（関数外または未収録） · `DATA` · `ANALYSIS` · 関数 `None` · 推定シンボル `None` · 推定型 `pointer __((offset(0x10)))`

## 読み取り専用データの取得範囲

Ghidraが定義した境界から先頭32バイトまで取得。型は推定値です。ポインタ、再配置、書込可能領域は取得理由を別記します。

## 読み取り専用データ

- 参照命令 [`008aebe0`](#insn-008aebe0)

~~~json
{
  "source": "008aebe0",
  "target": "00c84d30",
  "target_space": "ram",
  "resolution": "defined_data",
  "start": "00c84d30",
  "offset": 0,
  "size": 8,
  "datatype": "pointer __((offset(0x10)))",
  "capture_state": "pointer_requires_relocation_and_runtime_resolution"
}
~~~
