# Ghidra側

`ExportCache.run` はindex/decompileの2モードを持つ。indexはFunctionManagerとReferenceManagerを走査しJSONLへ直接保存する。バックアップはJVM終了後にPython側で行う。
decompileは要求ファイルを順番に処理し、DecompInterfaceをバッチ内で再利用して最後にdisposeする。
`row` は小さなJSONレコード、`emit` は1行出力、`key` はアドレス文字列表現を共通化する。
元プログラムの名前・型・コメント・バイトを変更しない。詳細は[共通設計](../../docs/architecture.md)。

`ExportStructure.run` は解析済みでSHA-256が一致するプログラムに対し、実際の本体アドレス範囲、`BasicBlockModel` のブロック・分岐、参照位置・宛先・種類、データ型、命令別のraw P-codeをgzip JSONLに出力する。間接フローの解決状況と命令バイト列のハッシュも記録する。末尾の件数を検査してから正式ファイル名へ切り替える。[追跡v2のデータ契約](../../matcher/docs/tracking-v2.md) · [GhidraのCFG API](https://ghidra.re/ghidra_docs/api/ghidra/program/model/block/BasicBlockModel.html) · [命令P-code API](https://ghidra.re/ghidra_docs/api/ghidra/program/model/listing/Instruction.html#getPcode())

`ExportCache` は索引に全本体範囲とGhidraプログラムIDを追加する。`ExportStructure` の表示用拡張は `reference_format=1`。`disassembly` は `instructions` と同じ配列順で生バイト・表示・型幅を含むオペランド情報を保持し、`reference_details` が参照命令・データ境界・オフセット・取得範囲と未取得理由を残す。readonlyデータの抜粋は32バイトを上限に、ポインタ・再配置・書込可能領域を区別する。[生成側の検査と表示](../../indexer/docs/native-reference.md)。
