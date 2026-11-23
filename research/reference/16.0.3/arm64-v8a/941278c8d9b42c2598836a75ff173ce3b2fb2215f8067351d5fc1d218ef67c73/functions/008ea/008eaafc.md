# 008eaafc

版: 16.0.3 / arm64-v8a / libnative-lib.so

SO SHA-256: `941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73`

解析リビジョン `9afc4f9e264e1fda` · Ghidra `12.1.2`

<a id="comparisons"></a>

[擬似コード](#pseudocode) · [逆アセンブリ](#逆アセンブリ) · [分岐](#基本ブロックと分岐先) · [参照](#命令位置別の参照) · [比較](#comparisons)

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/README.md)（版の比較一覧）
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/review-0072.md#review-e81075492745a45dd9d17114b3553228)（要確認）
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "008eaafc",
  "name": "FUN_008eaafc",
  "size": 4,
  "external": 0,
  "thunk": 0,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "081e3d4d65c8788516b87c3ed3b7a5ca6fdfe738281351d0c87f3338c2b03431",
  "source_text_sha256": "081e3d4d65c8788516b87c3ed3b7a5ca6fdfe738281351d0c87f3338c2b03431",
  "structure_status": "available",
  "structure_provenance": "receipt_verified",
  "index_boundary_verification": "legacy_boundary_unverified",
  "index_program_id": null,
  "structure_program_id": "3440b6bda0ebc7fc",
  "analysis_link": "legacy_program_id_unavailable",
  "structure": {
    "ranges": [
      [
        "008eaafc",
        "008eaaff"
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

## 疑似コード / UTF-8 41 bytes

~~~c

void FUN_008eaafc(void)

{
  return;
}

~~~

## 逆アセンブリ

命令アドレス、生バイト（メモリ順）、オペランド、フロー。

| アドレス | 生バイト | 命令・オペランド | フロー |
| --- | --- | --- | --- |
<a id="insn-008eaafc"></a> `008eaafc` | `c0 03 5f d6` | ret | `TERMINATOR`

## 基本ブロックと分岐先

- ブロック [`008eaafc`](#insn-008eaafc) 範囲 `[['008eaafc', '008eaaff']]`

## 命令位置別の参照


## 読み取り専用データの取得範囲

Ghidraが定義した境界から先頭32バイトまで取得。型は推定値です。ポインタ、再配置、書込可能領域は取得理由を別記します。

## 読み取り専用データ

