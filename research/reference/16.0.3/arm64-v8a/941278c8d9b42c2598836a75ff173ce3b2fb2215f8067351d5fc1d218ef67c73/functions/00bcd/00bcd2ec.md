# 00bcd2ec

版: 16.0.3 / arm64-v8a / libnative-lib.so

SO SHA-256: `941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73`

解析リビジョン `9afc4f9e264e1fda` · Ghidra `12.1.2`

<a id="comparisons"></a>

[擬似コード](#pseudocode) · [逆アセンブリ](#逆アセンブリ) · [分岐](#基本ブロックと分岐先) · [参照](#命令位置別の参照) · [比較](#comparisons)

## 関数情報

~~~json
{
  "address": "00bcd2ec",
  "name": "_ZN8firebase4auth17PhoneAuthProvider8Listener10OnCodeSentERKNSt6__ndk112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEERKNS1_19ForceResendingTokenE",
  "size": 4,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "7857c9c4f097a42ed937a98cc19111ff0237968c5dc35e5fd98b82887a1f1b73",
  "source_text_sha256": "7857c9c4f097a42ed937a98cc19111ff0237968c5dc35e5fd98b82887a1f1b73",
  "structure_status": "available",
  "structure_provenance": "receipt_verified",
  "index_boundary_verification": "legacy_boundary_unverified",
  "index_program_id": null,
  "structure_program_id": "3440b6bda0ebc7fc",
  "analysis_link": "legacy_program_id_unavailable",
  "structure": {
    "ranges": [
      [
        "00bcd2ec",
        "00bcd2ef"
      ]
    ],
    "bytes_sha256": "110f46b5b35c069160560c6ad6786f647dd44e8760a52a46fc22dbbcd7630b91",
    "instruction_count": 1,
    "instruction_bytes": 4,
    "body_bytes": 4,
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

## 疑似コード / UTF-8 200 bytes

~~~c

void _ZN8firebase4auth17PhoneAuthProvider8Listener10OnCodeSentERKNSt6__ndk112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEERKNS1_19ForceResendingTokenE
               (void)

{
  return;
}

~~~

## 逆アセンブリ

命令アドレス、生バイト（メモリ順）、オペランド、フロー。

| アドレス | 生バイト | 命令・オペランド | フロー |
| --- | --- | --- | --- |
<a id="insn-00bcd2ec"></a> `00bcd2ec` | `c0 03 5f d6` | ret | `TERMINATOR`

## 基本ブロックと分岐先

- ブロック [`00bcd2ec`](#insn-00bcd2ec) 範囲 `[['00bcd2ec', '00bcd2ef']]`

## 命令位置別の参照


## 読み取り専用データの取得範囲

Ghidraが定義した境界から先頭32バイトまで取得。型は推定値です。ポインタ、再配置、書込可能領域は取得理由を別記します。

## 読み取り専用データ

