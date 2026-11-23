# ネイティブ関数資料と連続版比較の生成

対象はJP版のarm64-v8a/libnative-lib.so。完成キャッシュの擬似コードと、同じSOから抽出した命令・raw P-code・CFG・参照を使う。疑似コード原本、過去の解析Release、使用中のGhidraプロジェクトを保全する。

## ローカル生成

リポジトリのルートで実行する。Python標準ライブラリ、既存のGhidra/JDK、認証済みghを使う。大きい出力先と隔離プロジェクトは空き容量のあるドライブに置く。

```powershell
$env:PYTHONPATH = (Resolve-Path research).Path
python -m matcher.tracking backfill --cache <完成キャッシュ> --binary <SHA検証済みSO> --config research/.local/config.json --output C:/KBCS-work/structures
python -m indexer.reference --cache <完成キャッシュ> --structure <生成されたstructure.jsonl.gz> --output C:/KBCS-work/work/research/reference
python -m indexer.reference --cache <完成キャッシュ> --structure <structure.jsonl.gz> --address 00a15d8c --output C:/KBCS-work/preview-00a15d8c
```

`--address` は複数回指定できる。指定された関数だけを独立ディレクトリへ生成し、版のmanifest、README、公開索引、全件生成の完了印を作らない。生成先は空の専用領域を選ぶ。構造アーカイブは末尾まで検査する。プレビュー対象外の関数への呼出はアドレス表示とする。

同じ索引DB、構造SHA、解析リビジョン、生成器の署名、収録ページ数が揃う完成資料は再利用する。構造receiptも再照合する。手動編集した生成資料を作り直す場合は `--refresh` を付ける。生成先のOSロックと検査済み一式の切替により、作業状態と完成manifestを区別する。

`--structure` を省略した従来CLIも動作する。この場合の `reference_policy` は `pseudocode-or-legacy-structure`。命令未収録と表示し、現行資料の完成形式とは区別する。古い構造アーカイブに命令バイトがなければ再抽出を要求する。旧キャッシュに本体範囲がなければ `legacy_boundary_unverified` と表示し、入口とサイズだけで同じ解析境界と判定しない。

## 出典と機械可読契約

`ExportCache` の索引は全本体範囲とGhidraプログラムIDを保持する。`ExportStructure` のschema 1を保ち、`reference_format=1`、命令表示・オペランドとオペランド型を追加する。`instructions[n]` の命令アドレスと `disassembly[n]` を対応させ、raw P-codeは命令内の配列順で識別する。varnodeにはアドレス空間、オフセット、幅を保持する。スカラーの符号・ビット幅・元表記も保存する。

`reference_structure.provenance` は隣の `structure-metrics.json` を読み、版・ABI・SO SHA・解析リビジョン・索引SHA・構造SHAを照合する。索引JSONL自体のSHAもmanifestへ保存し、SQLiteが同じでも本体範囲の入力が変われば再生成する。CI receiptとローカルbackfill receiptの両方に対応する。receiptがない場合は `header_only_revision_unverified` とする。SHA、言語、イメージベース、Ghidra版の不一致は失敗させる。

`reference_structure.records/validate` は完了印、重複、命令数、生バイトの長さとSHA、順序と範囲を検査する。バイト列の破損は全体を失敗させ、正しい原本での収録不足や索引範囲差は関数別の理由として残す。`reference.generate_cache` は1関数ずつ構造を読む。`export_cache` は一時領域の完成後に `replace_reference` で版とABIを入れ替える。失敗前の公開済み一式を利用し続けられる。

関数ページは従来のURLを保持し、Ghidra推定の擬似コード、逆アセンブリ、基本ブロック・分岐、命令位置別参照を載せる。読み取り専用の定義済みデータは先頭32バイトを上限とし、参照命令・参照先・定義先頭・オフセット・定義サイズ・取得開始と長さ・取得理由を記録する。ポインタ、再配置を含むデータ、書込可能領域、境界不明は理由を残す。動的値の同一性は判定しない。

擬似コードは1関数1ブロックで、元ファイルのSHAとUTF-8テキストSHAを記録する。関数ページ全体の容量を基準に、逆アセンブリ、基本ブロック、参照、データ詳細を命令アドレス範囲ごとの `assembly/`、`blocks/`、`references/`、`data/` ページへ分ける。構造詳細は1MiBを目安に分割し、関数ページが全範囲の目次を持つ。擬似コード自体や単独の大きい記録は保持し、実際の最大ページ容量をmanifestで確認する。manifestのページ数・総容量・最大容量・収録件数・不足理由、および標準出力の生成時間・最大ワーキングセットで実測する。分割は擬似コードの途中切断には使わない。

## 連続版リンク

比較の判定は追跡SQLiteを使う。Markdownを照合の入力にしない。既存の追跡DBから資料と導線を再生成する場合も同じコマンドを使える。

```powershell
python -m matcher.tracking_pages --db <完成tracking.sqlite> --repository C:/KBCS-work/work --output C:/KBCS-work/work/research/comparisons/arm64-v8a/<実行ID> --asset-url <検証済みSQLiteのRelease URL> --attach
```

`tracking_pages.render_pages` は比較のファイル・アンカーと両側の入口を `navigation.json` に保存する。識別子は版・ABI・SO SHA・解析リビジョン・入口の組をハッシュ化する。`attach_adjacent_links` は公開順の隣接区間で採用された相手だけを、関数詳細から直接たどれるようにする。未確定のときは根拠がある場合に候補行、それ以外は版の一覧へ進む。

`function-comparisons.json` に各関数のリンクと両側の解析出典を保存する。新しいウィンドウの隣接区間を更新し、範囲外のリンクは出典とリンク先が有効なものを保持する。`carry_function_comparisons` は同じ索引DBと解析出典を要求する。途中版が公開された場合は `refresh_affected_navigation` が旧区間を外す。通常の比較目次は `active.json` を使い、過去の区間は `archive.md` から参照する。

`--attach` のローカル生成は `pending_full_validation` になる。隔離した作業ツリーが揃った状態で `--attach --verify-full` を指定すると、本番と同じ公開ゲートを使用する。比較本文を生成する段階でリンクとアンカーを検査し、公開ゲートで関数ページの全件、出典、前後の向き、採用済みリンクの左右対称性、比較行からの戻りを検査する。完了状態は `validated`。

比較行は変更候補の重要箇所を抜粋する。1関数の全raw P-code差分が必要な場合は、同じ追跡実行で生成した `structures/*.sqlite` の旧版・新版を指定する。原本の出典を検証して1組だけ再計算し、詳細を複数ページに展開する。

```powershell
python -m matcher.logic_detail --db <完成tracking.sqlite> --indexes <旧構造索引SQLite> <新構造索引SQLite> --pair 1-2 --address 00a14de0 --output research/.local/logic-00a14de0
```

## Actionsでの再生成

KBCSのmainへ実装を反映してから実行する。GitHubへの書込とworkflow実行は個別承認を得る。

- `analyze` は新規解析とチェックポイント・構造保存。
- `backfill` は不足する現行エクスポーターの構造をReleaseへ保存。
- `references` は対象版の資料を明示的に再生成する。`publish_reference=false` では対象版だけのプレビューを生成する。公開時は隣接比較も揃えて一括反映する。
- `match` は直前2版・対象版・次の1版を参照する。現行形式の資料は再利用し、不足や出典差があれば対象版を生成する。
- `all` は解析・構造補完の後に、完成した関数資料、比較、両側のリンクを同じGitコミットで反映する。完成checkpoint指定時は解析を再利用する。

資料形式または生成器の署名が古い公開版は `references_pending`、資料は新形式で追跡導線が古い版は `pending` として再開する。現行形式・出典・追跡ウィンドウまで揃った版は重い処理を起動しない。エクスポーターSHAが変わると構造アセット名も変わり、旧アセットを保全したまま補完する。

16.0.1〜16.0.3を移行するときの完成Releaseは次のとおり。

- `native-analysis-16.0.1-arm64-v8a-711084564ddd8b14`
- `native-analysis-16.0.2-arm64-v8a-ea0159f06d493a87`
- `native-analysis-16.0.3-arm64-v8a-9afc4f9e264e1fda`

各タグを `checkpoint` に指定し、`stage=references`、`publish_reference=true` を対象版ごとに実行すると、関数資料と影響する比較が一緒に更新される。既存資料に対して照合の改善だけを反映する場合は16.0.3のタグで `stage=match` を実行する。標準Public runnerで追跡ジョブの上限は300分。構造と追跡DBはReleaseへ保存する。

## 全公開版の移行と復旧

1. v3実装を反映した作業ツリーで、全公開版の計画を作る。対象版ごとの完成checkpoint、周辺最大4版、SO・解析リビジョン・元のSQLiteの組を固定する。

   ```powershell
   $env:PYTHONPATH = (Resolve-Path research).Path
   python -m indexer.tracking_migration --repository . --output research/.local/migration-v3.json
   ```

2. 承認後、計画の `base` を起点に `branch` の名前でGitHub上にステージングブランチを作る。`steps[].inputs` を古い版から順番に `native-analysis.yml` に渡す。`stage=references` と `publish_reference=true` に加え `checkpoint`・`migration_branch`・`expected_window` を設定する。Runnerは出典を再照合し、保存済みキャッシュと検証済みReleaseアセットから復元する。各回で対象版・ABIを完全置換し、差分とリンクを検査してステージングへコミットする。
3. 途中失敗や容量不足の後は、ステージングブランチの最新コミットを別の作業ツリーへ取得し、元計画を `--resume` で渡す。版の移行完了印と検証状態を確認し、出力された `next` から再開する。出典が計画と異なる場合は計画を作り直す。構造アセットが不足する場合は同じ完成checkpointの `stage=backfill` を使う。Pushが競合した場合は最新のステージングを基に同じ入力を再実行する。

   ```powershell
   python -m indexer.tracking_migration --repository C:/KBCS-work/staging --resume research/.local/migration-v3.json --output research/.local/migration-v3-status.json
   ```

4. `remaining=0` になると、計画対象の全隣接区間の登録と完成印も検査する。最新の `origin/main` が計画の `base` と一致することを確認する。そのコミットを起点にした隔離worktreeで `git merge --squash origin/<branch>` を行い、生成資料の差分だけを1コミットにまとめる。承認後に通常の非強制pushで公開する。mainが先に更新された場合はpushが競合で停止するので、新しいmainを基に再計画する。公開後に戻すときは資料切替コミットをrevertし、過去のGitコミットとReleaseから資料を復元する。

通常の更新通知はmain向け、全版移行はステージング向け。移行中も公開済み資料、過去の解析Release、解析原本を利用できる。

## 検証

```powershell
$env:PYTHONPATH = (Resolve-Path research).Path
python -m unittest indexer.test_store indexer.test_reference indexer.test_ci matcher.test_matching matcher.test_tracking
$env:GHIDRA_HOME = 'D:/KBC/tools/ghidra_12.1.2_PUBLIC'
$env:JAVA_HOME = 'D:/KBC/tools/jdk-21.0.11+10'
$env:KBCS_TEST_GHIDRA = '1'
python -m unittest matcher.test_tracking
```

独立したARM64 ELFで、抽出した全命令をELF原本と照合し、条件分岐、オペランド、読み取り専用データの実バイトを確認する。単体・統合テストは破損、同一入口の範囲差、部分収録、旧形式、プレビュー、出典変更、4版目の追加、再実行、旧資料保全を扱う。

リンク検査は `markdown_files` で実在する通常ファイルを一度列挙し、関数とその範囲ページをまとめて読む。出力文字列や予定アドレスから成功を仮定せず、実ファイルの全リンク・アンカーを照合する。全関数の命令アンカーを同時にメモリへ保持せず、検査対象の関数単位で解放する。比較リンクの継承でも、同じ掲載ファイルのパス解決とアンカー読込を再利用する。
