# 00bfdcfc

版: 16.0.3 / arm64-v8a / libnative-lib.so

SO SHA-256: `941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73`

解析リビジョン `9afc4f9e264e1fda` · Ghidra `12.1.2`

<a id="comparisons"></a>

[擬似コード](#pseudocode) · [逆アセンブリ](#逆アセンブリ) · [分岐](#基本ブロックと分岐先) · [参照](#命令位置別の参照) · [比較](#comparisons)

<!-- kbcs-version-function-tracking -->
## 連続バージョンの比較

- [v16.0.1 → v16.0.2](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/0-1/detail_skipped-0008.md#compare-e6daefd686e3d91e9df271ab39531349)
- [v16.0.2 → v16.0.3](../../../../../../comparisons/arm64-v8a/c6e4dfc940403d119ed8b991/1-2/detail_skipped-0008.md#compare-9350251a12f3f5fa399952ed9e1f3468)
<!-- /kbcs-version-function-tracking -->

## 関数情報

~~~json
{
  "address": "00bfdcfc",
  "name": "_ZNSt6__ndk113basic_istreamIcNS_11char_traitsIcEEErsERl",
  "size": 8,
  "external": 0,
  "thunk": 1,
  "status": "cached",
  "confidence": "unreviewed",
  "error": "",
  "source_sha256": "50bc20a7b9e5a8fa34882cb48cbe2fc774c2226970534404e67d810d73ef6e5e",
  "source_text_sha256": "50bc20a7b9e5a8fa34882cb48cbe2fc774c2226970534404e67d810d73ef6e5e",
  "structure_status": "available",
  "structure_provenance": "receipt_verified",
  "index_boundary_verification": "legacy_boundary_unverified",
  "index_program_id": null,
  "structure_program_id": "3440b6bda0ebc7fc",
  "analysis_link": "legacy_program_id_unavailable",
  "structure": {
    "ranges": [
      [
        "00bfdcfc",
        "00bfdd03"
      ]
    ],
    "bytes_sha256": "224d4df0836ae187285a713f6eab38d506f106d5205135a58ab1548d5684fce9",
    "instruction_count": 2,
    "instruction_bytes": 8,
    "body_bytes": 8,
    "indirect": 0,
    "unresolved": 0
  }
}
~~~

## 呼び出し元

解決済みの記録なし。

## 呼び出し先

- [00bfdd04](../00bfd/00bfdd04.md)

<a id="pseudocode"></a>

Ghidraによる復元。型・変数名・制御構造は推定です。

## 疑似コード / UTF-8 102 bytes

~~~c

void _ZNSt6__ndk113basic_istreamIcNS_11char_traitsIcEEErsERl(void)

{
  FUN_00bfdd04();
  return;
}

~~~

## 逆アセンブリ

命令アドレス、生バイト（メモリ順）、オペランド、フロー。

| アドレス | 生バイト | 命令・オペランド | フロー |
| --- | --- | --- | --- |
<a id="insn-00bfdcfc"></a> `00bfdcfc` | `5f 24 03 d5` | bti c | `FALL_THROUGH`
<a id="insn-00bfdd00"></a> `00bfdd00` | `01 00 00 14` | b 0x00bfdd04 | `CALL_TERMINATOR`

## 基本ブロックと分岐先

- ブロック [`00bfdcfc`](#insn-00bfdcfc) 範囲 `[['00bfdcfc', '00bfdd03']]`

## 命令位置別の参照

- [`00bfdd00`](#insn-00bfdd00) → [`00bfdd04`](00bfdd04.md) · `UNCONDITIONAL_CALL` · `DEFAULT` · 関数 `00bfdd04` · 推定シンボル `None` · 推定型 `None`

## 読み取り専用データの取得範囲

Ghidraが定義した境界から先頭32バイトまで取得。型は推定値です。ポインタ、再配置、書込可能領域は取得理由を別記します。

## 読み取り専用データ

- 参照命令 [`00bfdd00`](#insn-00bfdd00)

~~~json
{
  "source": "00bfdd00",
  "target": "00bfdd04",
  "target_space": "ram",
  "resolution": "function"
}
~~~
