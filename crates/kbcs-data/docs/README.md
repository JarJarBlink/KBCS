# kbcs-data

- `source`: Source::open → dataset → checked。Git SHA固定、採用元/生成物のsize/hash/版の検証。
- `model`: CSV・maanim解析、検索正規化、Form/Attack/Property。必須列の欠測はエラー。
- `import`: importが排他・一時DB・公開を管理し、build/read_asset/retainで原本と型付き値を保存する。
- `store`: insert_formで書込、Databaseのsearch/form/source/metadataで閲覧、validateで公開前整合性検証。
- `view`: 正規化済みSQLiteをWeb schema9の表示用形式へ変換。
- `talents`: importで本能・各Lv効果・NPを正規化し、readで表示向けのTalentを組み立てる。効果IDの解釈はresources/talent-effects.json。
- `progression`: 図鑑・unitbuy・通常報酬・drop_charaを結び、入手/進化条件と素材を保存する。代替ステージは重複を除き、元MapStageDataの行へ戻せる。
- `combos`: 有効コンボ・必要キャラ/形態・効果量を正規化し、read/effectsからWebの表示・編成UIへ渡す。
- `schema.sql`: 正規化・原本・asset参照のschema8。本能の元行/列、進化素材の元列、報酬ステージの元行を保持する。

データ仕様・列・更新契約は[共通データ資料](../../../docs/data/README.md)へ集約する。仕様修正時はIMPORTER_VERSION、スキーマ変更時はSCHEMA_VERSIONとSQLを更新し、原本を使って再生成する。

検証はtests/import.rsの2件。欠測/0/空欄、不正パス、Git原本からの取り込み、再実行、地域の分離、hash不一致、旧読取connectionの維持、原本を外しての閲覧に加え、本能補間の整数化・1段階本能・追加属性・超本能・NP保存を確認する。実データとの照合は[実測報告](../../../docs/plans/initial-foundation.md)。

- `enemies`: importが敵専用CSVと攻撃maanim/アイコンを保持し、readが型付きEnemy/Attackを返す。catalogは敵専用の属性・能力・表示値を構築する。原本列の解釈と確度は[データ契約](../../../docs/data/README.md)。

0.1.6：CSV118の素の偶数生産時短縮をpropertyへ追加し、view::abilityがpercentを表示する。IMPORTER_VERSION=6、SCHEMA_VERSION=5。既存の取り込み試験で元列118と値50が失われないことを確認する。

- `stages::import`は全29系列の原本を読み、定義/一覧/候補/報酬/補助資料へ正規化する。rowsは元の行番号・空欄を保持し、Map_optionの説明列だけ数値解析の対象から外す。`stages::catalog`はCLI用の全詳細、`search_catalog`は軽量索引、`catalog_map`は指定マップ、`variant`は許可された候補を返す。待機×2はnative配列構築時だけ行い、保存列は原値のままとする。
- 既存の取り込み試験へ0番台の小さいfixtureを追加。負待機、倍率0/負攻撃値、重複敵、終端、末尾空欄、小数難易度、冠、制限、PR39000を確認する。実データの全324面の比較はresearch/verify/stage_database.py。

- `stage_materials::import/read`は開発素材の原本を4表へ保存し、Webのmap.materialsへ戻す。元データのfloat値と原セルを両方保持し、素材IDをGatyaitembuyの列6/7から結ぶ。確率は共通C++で動的に導出する。既存取り込み試験に係数0.75、重み0、元スロットと素材ID、報酬絞り込みへの接続を追加した。schema7/importer8。


0.1.15はschema8/importer9。importer.rsが全原本定義を先に保存して一覧面へ接続し、extras.rsが条件・固定編成preset・EX・クリア回数報酬・候補集合を保存する。Extras::readで補助CSV/JSONを一度だけ解析し、面ごとの再解析を避ける。数値文字列のpresetも元形式を保持して表示値へ解決する。

不明のエネルギー/XP/物理値はNULL。D/Lには固定定義を捏造しない。stage_spawn互換viewは従来Nの全行比較にも使う。正常公開前のstore::validateはintegrity/FK・形態・stage_entry・報酬の範囲を確認する。2本の取り込み試験に各系列特有の境界だけを追加し、実データの全件比較は研究CLIへ置く。

本能玉報酬はstages/rewards.rsが原本equipmentlistのIDを報酬ID−30000で解決する。effect/grade/attributeの原本名称と3層アトラスで表示する。原本の全preset/本能玉定義を保全し、所持や装着の戦闘状態とは分ける。

ステージ報酬の名前と画像は、`inventory::item_catalog` が `Gatyaitembuy.csv` の列3をキー、行番号を `GatyaitemName.csv` の参照先として解決する。画像は内部行番号または列11の上書きID。`006e34b0` → `006f2f8c` の原本経路に従う。逆襲のカオル君の報酬ID11は内部行20のにゃんこチケットで、ガチャ排出用の内部行11とは別。データ更新時は原本の定義と画像を取り込むため、通常アイテムの追加に個別の定義変更は不要。キャラ報酬と進化権は `drop_chara.csv`、`unitbuy.csv` の列23/24、原本のヴァルキリー専用経路で解決する。

開発素材は戦闘用の内部番号を `id` に保持し、表示・絞り込み用に同じアイテム定義から `rewardId` を解決する。`rewardCatalogVersion: 1` はステージ検索・詳細APIの名称・画像が報酬IDで解決済みであることを示す。

JP 15.7.4のステージ報酬にある0〜999番台の86 IDは、すべて対応する原本定義が一意。報酬ID 207「軍資金」の画像は採用元に収録されていないため、名前と数量だけを表示する。

`Extras::map` はマップヘッダーと `PlayStageLimit.csv` の条件IDを、同じ `MapConditions.json` の原本グループへ接続する。マップと面の条件に同じHTML表示を使い、表示時に根拠のある対象へリンクする。

0.1.16 / importer10：motions::importが共有済みstemの全モデル・cut・maanim・Number PNGと共通魂を保存する。manifestはキャラ/形態と原本ファイル一覧を構築する。制作PCの絶対パスを含むimgcutでもstemで画像を結ぶ回帰を、既存2取り込み試験へ追加した。公式snapshotを変更せず原本追加の再生成で公開する。

0.1.17 / importer12：effects::import/catalog/manifestはその他モデルの素材所有・画像対応・原本保持を扱う。skillのパーツid、敵専用/共有maanim、最長stem、同名PNG優先/実在ヘッダー名のfallbackを既存取り込み試験へ追加。未知の対応は未確認として残す。

## 0.1.18: ステージ索引の取得

stages::catalog_selectionはsummary時にstage_spawn明細を生成せず、定義別の集約から敵/フラグを取得する。catalog_mapは詳細用、search_catalogは索引用、variantは対象1ステージだけを構築する。候補差替え後に定義由来のflags/damageConditionを再生成する。SQLはprepare_cachedで反復コンパイルを避ける。音楽など報酬メタデータ由来の値は定義差替えで変更しない。schema8/importer12と原本は変更していない。全6,476ステージの旧索引との正規化比較は差分0。


## 0.1.19: 素材読込

motions::choicesはform/enemyから選択肢だけを生成する。motions::descriptorはPNGの出典/SHA/length(bytes)だけを読み画像BLOBを複製しない。effects::entriesのselectedは所有関係の計算後、内容解析前にモデルを限定する。取り込みと全一覧はselected=Noneを使い従来どおり全件を扱う。


## 0.1.20: 原本の永続保存

source::open_cachedはAppDataのassetsと既存DBを参照する。checked_namedはSHAキャッシュ→既存DBの論理パス/SHA→固定commitの原本取得→検証/保存の順。prefetchは取得対象を最大8workerへ配り、失敗時にキューを止める。motions/effects/stages importerの既存の対象選定を再利用する。同一snapshotのimportは全DB検証を繰り返さず、通常の新規DB公開検証とverify CLIは維持する。

## 0.1.21: ステージメディア

stage_media::importがbg.csv/JSONと明示された依存、背景・城画像、モデル/分割/アニメーションを検証済みsource_fileへ保存する。annotateが城系列とBGM切替条件、scene_sourceが選択背景の原本集合、image_sizeがPNGヘッダー寸法を返す。スキーマ8、変換器13。

音源は既存Webの補完索引stage-music.json（188曲）。KBC-rakv0-testの固定commit 78612d9c405dc99661b32525b482aed87ff96857を参照する。ゲーム原本音声の同版検証済みという意味ではない。stage_media::audioが初回だけ取得しAppData/assets/music/<revision>へMP3とSHAを保存し、再利用時に照合する。主データの取得元GitHub assetsとは別の補完資料である。

## ユーザー編成 0.1.22

公式snapshotとは別に[formations::Store](formations.md)が編成ファイルを保存する。


## 0.1.31: APK同梱BGM

[ネイティブ音源調査](../../../research/docs/audio-1572.md)のとおり、assets原本のOgg18曲をMP3補完より優先する。曲ごとの固定commit・size/SHAを索引へ持たせ、stage_media::audioは形式/実MIMEを返す。保存はAppData/assets/music/<曲のrevision>。旧MP3の保存先は維持し、公式DBの再構築は不要。source indexの今後の変更はscripts/sync-stage-music.pyで再検証する。CAFは効果音であり、BGMへ追加しない。


2026-10-27: `source::asset`はsource_fileに画像本体がないとき、asset_referenceの原本パス/size/SHAとDB metadataのorigin/revisionから遅延取得する。最新HEADを解決し直さず、AppData/KBCS/assets/objects/<SHA>へ検証済みbytesを原子的に保存する。公式SQLiteは書き換えない。/api/assetはこの入口へ接続した。img043.pngが索引にだけ存在し、500のJSON応答を画像としてdecodeしていたスニャイパーの開始失敗を修正。既存のcache試験にDB本体なし/索引＋cacheのオフライン取得と不正パスを追加した。battle-replay --validate-assetsで実際の画像APIも通せる。

stage_media::audioは同版CAF9本を含む固定commitの原本を参照する。CAF（little-endian 16bit LPCM/1〜2ch）を検証し、サンプルを再量子化せずWAVヘッダーへ包み直してaudio/wavを返す。cacheは元CAF/SHAのまま。別の圧縮形式をLPCMと解釈しない。原本9本のPCMと、API関数が返すWAVのPCMが一致した（research/.local/audio-pcm-report.json）。

combos::readのgroupは既存source_file/NyancomboData.csv列2から補う。target_groupsはCharagroup.csvのtype3の明示IDだけを返し、編成制限用type0/2を混ぜない。テーブル再作成なしで対象限定コンボを戦闘入力へ解決する。

## 持ち物と結果保存（2026-10-28）

`inventory::Store`は公式DBと別のuser/inventory.sqliteを所有する。itemのdisplay_countはユーザー編集可能、earnedは獲得累計。battleの結果JSON、claimの初回旗、recordのクリア数/最高記録、characterの所持/基本Lv/＋値/第3・第4解放を保持する。`begin`で戦闘番号を採番し、`finish`は結果・加算・旗・所持状態を同じtransactionで確定する。同じ番号の再呼出は保存済み結果を返す。通知の取得前後の数はtransaction内で決め、再取得で二重加算しない。

KBCS独自のネコカン配布は報酬ID13に保存する。通常起動時は累計150・表示数30を加算し、クリア（結果mode 1）の確定時は同じ戦闘トランザクションで累計30・表示数15を加算する。結果の報酬一覧・通知には配布行を作らない。上限は既存の持ち物と同じ。

戦闘のコンティニューは `spend_continue_cat_food` の単一UPDATEで残数の確認と表示数からの30個の引き落としを行う。獲得累計は保持する。

`catalog`はGatyaitembuyの先頭見出しを除き最初の12列だけ数値として読む。列12以降の日本語コメントを数値化しない。drop_charaも見出しを除く。これが持ち物で発生した「数値CSVの不正なセル」の原因だった。名前は内部アイテム行、公開IDは列3、キャラ入手旗はdrop_chara列1。原本名と変換先IDを混同しない。

キャラ状態は戦闘の編成設定から独立する。進化権だけでは所持済みにしない。取得旗が異なる同じunitもあり、unitのownedだけから各報酬の初回旗を推測しない。`finish`は取得前状態との一致を検査し、同じtransactionの後続報酬には直前の状態を渡す。

## 戦闘タイトル画像の参照（2026-10-28）

`stage_media::battle_title`は009f560cの種別別ファイル名を解決し、Map/ImageのPNGとimgcutを返す。PNGはsource_fileのbytes保存対象でなくasset_referenceにだけ存在することがある。存在確認を両表へ広げ、共通asset取得の固定revision/SHA・AppDataキャッシュを使う。画像をDBへ再取込する必要はない。宇宙編のkind -7/-14/-15/-25はscを使う。画像はSessionの初期texturesへ登録し、暗転中の一括読込とbattle-replay --validate-assetsの対象になる。

統合ZIPの配置・採用元・音源・更新排他は[releases.md](releases.md)を参照。

## 2026-10-29: 背景の画像寸法と索引のみの原本

Apple Silicon利用者から背景7/139/1057でQuery returned no rows、開始不可との報告。Windowsの現行15.7.4 DBでは3背景の描画要求は成功したため、Macでの直接再現・原因の同定までは行っていない。

確認した不足はstage_media::image_sizeがsource_fileのBLOBだけをquery_rowしていた点。画像APIのsource::asset/Database::sourceには固定SHA・移設後の原本/キャッシュへの経路があるため、寸法取得も本文がDBにない場合はこの共通入口を使う。既存BLOBの24bytesだけを読む高速経路は保持する。scene_sourceの素材パス列挙もsource_fileとasset_referenceを結合する。Database::sourceと寸法/原本照合のエラーに論理パスを含め、汎用SQLメッセージだけにしない。存在しない画像を別の背景で補わない。DB schema/importerは変えず、再取り込みを強制しない。

既存cache試験内で、移設済み原本と索引だけのPNG寸法、BLOB付きPNG寸法、欠損時のパス表示を検査する。Mac利用者の原本/キャッシュが完全に欠けている場合まで修復できたという意味ではない。

2026-10-30: 変換器14の[欠損検査・再生成・持ち物画像・管理API](validation.md)。schema8を維持し、旧DBの再生成案内と検査/原本再取得を追加した。

## 検索用のデータと詳細項目

正式116列、旧CSV・旧DBの対応は[ステージ原列台帳 v3](stage-columns-v3.md)を参照。

`stages::search_index` は既存カタログと同じ集計から一覧・絞り込みに使う属性だけを返す。検索と詳細のAPIは同じ冠・報酬・出現定義を読む。集計は同一マップのステージ範囲を使い、報酬定義はIDごとに取得する。`view::search_index` は同一の成長曲線を共有し、詳細専用の説明や進化条件を省く。キャラ詳細の攻撃段別データは `attack` の発生F、特性フラグ、範囲を使う。

マップ詳細の報酬リセット方式は `Map_option.csv` の0始まりの列8。列9はクリア可能回数、列11は分単位のインターバル、列14はクリア後の非表示設定。方式1はS436、方式2はS384・S411・C216〜219を、対応する更新ページと保存データで照合した。方式3は詳細を確定できていないため番号と未確認の表示を残す。表示に使う値はローカルDB由来。［[Ver.16.0の更新情報](https://bc-event.pages.dev/update/)・[Ver.15.7の更新情報](https://bc-event.pages.dev/update/150700)・[JDBのマップ設定CSV](https://jarjarblink.github.io/JDB/static/data/DataLocal/Map_option.csv)］

JP 16.0.0の比較では、JDBとマップ名・冠および上記のマップ設定列が1,305マップで一致した。公開CSVに名前がある6,554ステージは名前が一致し、照合先に名前がない9件はアセット内のマップ分類と定義を使用する。通常・本編・EX・道場・塔・強襲・異次元コロシアム・イベントPtなど22面のステージヘッダーと、8キャラ23形態の攻撃関連項目も一致した。［[JDBステージ検索](https://jarjarblink.github.io/JDB/map_search.html?cc=ja)・[JDBキャラ詳細の例](https://jarjarblink.github.io/JDB/u000.html?cc=ja&unit=336)］

ローカルAPIの検証はJP 16.0.0の全マップを取得し、6,563面の基本値と63,276件の敵出現行をSQLiteと照合した。検索索引と既存APIの検索項目も全ステージで一致した。キャラは888体・2,189形態の検索データと、全公開形態の攻撃段別データを照合した。
