# ステージ原列台帳 v3 の実装対応

対象台帳はJP 16.0.3 arm64-v8aと補助JP 15.7.2。SOのSHA-256は 941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73。添付 v3 JSON の SHA-256 は 269d50466cadb5595f9f70e6ddbd9c6479bcd83113481ed854331fdea23d854f。正式名と根拠は [column-ledger.json](../../../ui/src/features/stages/column-ledger.json) に保持する。CSV・JSON・UI設計表で116キーを照合した。等級はA 92件、B 23件、C 1件。難易度TSVの2列は原本照合で、台帳にネイティブ関数の指定はない。

## APIと互換性

- 既存の SQLite スキーマ、API schemaVersion 2、検索索引、戦闘用の入力型は現行のまま。Map_option の取り込みは CSV reader でレコードを読み、列19の整数と列20の文字列・未知の末尾セルを保持する。旧版の列19注釈はその位置のまま読み、列20の正式名へ参照を対応させる。引用されたカンマ、改行、空白、二重引用符、注釈内の // を保持する。
- 詳細の `/api/stages?map=KEY` は保存済み原本があれば `optionsAnnotationIndex`・`headerSourceRows`・`difficultySource`・`battleSourceRows` を追加する。Map_option の選択行も保存原本から照合する。索引と全件カタログのパスでこの追加処理は実行しない。旧API・原本なしのDBは保持済み原行と既存の型付き値へ戻る。候補の変更は選択した戦闘定義の行番号へ更新する。
- 実行時の戦闘データは `stages::importer` → `stage_definition(_spawn)` → `stage(s)_catalog` / `variant`。出現の14整数は既存 `kbcs_bridge::stage::Row` と `kbcs_core_stage_row_decode` の順序を使う。raw IDから通常IDへの−2、待機列2/3/4の×2、攻撃倍率の0フォールバック、負の待機値、敵城判定・出現上限は既存経路に依存する。終端と追加列は原本へのリンク、出現行は `raw` と `native` の双方で確認できる。
- 章・REなど異なる形のヘッダーは成立する範囲だけ命名し、残るセルを元列として参照する。報酬は可変長のまま。配列を46列で打ち切らない。スコアの型付き表示は既存の保存枠、終端、報酬モード判定を使用する。
- 下表の「型付き参照」は現行 Rust/JSON の入口を示す。特定の表示に対応しない列は原値と出典を表示する。各行の元列は0始まり。元ファイルの物理行は1始まり。スコープ別の raw/location は次のとおり。

- `battle.leading` は `stage.rawSettings / battleSourceRows[0]`。
- `battle.header` は `stage.rawHeader / battleSourceRows の末尾`。
- `battle.spawn` は `stage.spawns[].raw / sourceRow`。
- `map.header` は `map.rawHeaders[0] / headerSourceRows[0]`。
- `map.pattern` は `map.rawHeaders[1] / headerSourceRows[1]`。
- `map.stage` は `stage.rawRewards / metadataRow`。
- `map.stage.score` は `stage.rawRewards / metadataRow`。
- `stage.options` は `map.limits[].raw / sourceRow`。
- `stage.difficulty` は `difficultySource（列1は面index+1に展開）`。
- `map.options` は `map.rawOptions / optionsRow / optionsAnnotationIndex`。

## 116列の対応

| 台帳キー | 正式名 | 等級 | 型付き参照・原値 | 表示項目ID |
|---|---|---|---|---|
| `battle.leading[0]` | `castleAppearanceId` | B | stage.castle / stage_media | media.castle |
| `battle.leading[1]` | `noContinueFlag` | A | stage.noContinue | stage.continue |
| `battle.leading[2]` | `directExChancePercent` | A | stage.ex.chance | stage.ex |
| `battle.leading[3]` | `directExMapIndex` | A | stage.ex.nativeMap / map | stage.ex, stage.exConfig |
| `battle.leading[4]` | `directExStageMinIndex` | A | stage.ex.min | stage.ex, stage.exConfig |
| `battle.leading[5]` | `directExStageMaxIndex` | A | stage.ex.max | stage.ex, stage.exConfig |
| `battle.header[0]` | `battlefieldWidthRaw` | A | stage.width / stage.width | stage.width |
| `battle.header[1]` | `enemyCastleBaseHp` | A | stage.castleHealth / castle_hp | stage.castleHealth |
| `battle.header[2]` | `globalSpawnIntervalMinFrames` | A | stage.spawnInterval[0] / spawn_min | stage.spawnInterval |
| `battle.header[3]` | `globalSpawnIntervalMaxFrames` | A | stage.spawnInterval[1] / spawn_max | stage.spawnInterval |
| `battle.header[4]` | `backgroundId` | B | stage.background / background | media.background |
| `battle.header[5]` | `maxConcurrentEnemies` | A | stage.maxEnemies / max_enemies | stage.enemyLimit, stage.enemyLimitRaw |
| `battle.header[6]` | `enemyCastleRawUnitId` | A | stage.enemyCastle / castle_raw | stage.castleHealth, stage.castleId, media.castle |
| `battle.header[7]` | `timeLimitMinutes` | A | stage.timeLimit / time_raw | stage.timeLimit |
| `battle.header[8]` | `castleDamageProtectionFlag` | B | stage.bossGuard / boss_guard | stage.barrier |
| `battle.header[9]` | `reservedBattleHeaderColumn9` | B | rawHeader[9] | source.stageColumns |
| `battle.spawn[0]` | `enemyRawId` | A | enemy | enemy.name, enemy.icon |
| `battle.spawn[1]` | `spawnCountLimit` | A | count | enemy.count |
| `battle.spawn[2]` | `firstSpawnWaitRaw` | A | first | enemy.first |
| `battle.spawn[3]` | `respawnWaitMinRaw` | A | interval[0] | enemy.interval |
| `battle.spawn[4]` | `respawnWaitMaxRaw` | A | interval[1] | enemy.interval |
| `battle.spawn[5]` | `castleTriggerThresholdRaw` | A | castle | enemy.gate |
| `battle.spawn[6]` | `spawnLayerMin` | B | layers[0] | enemy.layers |
| `battle.spawn[7]` | `spawnLayerMax` | B | layers[1] | enemy.layers |
| `battle.spawn[8]` | `bossAppearanceCode` | A | boss | enemy.name |
| `battle.spawn[9]` | `enemyHpMultiplierPercent` | A | health | enemy.multipliers |
| `battle.spawn[10]` | `killScoreRaw` | A | score | enemy.score |
| `battle.spawn[11]` | `enemyAttackMultiplierPercentOverride` | A | attack | enemy.multipliers |
| `battle.spawn[12]` | `preserveWaitBeforeCastleTriggerFlag` | A | afterCastle / raw[12] | enemy.preserveWait |
| `battle.spawn[13]` | `requiredAllyDeathCount` | B | kills | enemy.deaths |
| `map.header[0]` | `mapVisualPatternOrDisplayCode` | B | map.rawHeaders[0][0] | map.appearance |
| `map.header[1]` | `dropAcquisitionSaveSlot` | A | map.acquisitionId | source.mapColumns, reward.policySource |
| `map.header[2]` | `highScoreSaveSlot` | A | map.scoreId | source.mapColumns |
| `map.header[3]` | `mapDisplayConditionId` | B | map.conditions | map.displayConditions |
| `map.header[4]` | `mapEntryConditionId` | B | map.conditions | map.entryConditions |
| `map.header[5]` | `requiredUserRank` | B | map.rawHeaders[0][5] | map.rank |
| `map.header[6]` | `declaredSortieCostTypeCode` | C | map.rawHeaders[0][6] | map.costCode, stage.energy |
| `map.pattern[0]` | `mapPatternCode` | B | map.rawHeaders[1][0] | map.pattern |
| `map.stage[0]` | `sortieCostRaw` | B | stage.energy | stage.energy |
| `map.stage[1]` | `baseXp` | A | stage.xp | stage.xp, stage.baseXp |
| `map.stage[2]` | `startBgmId` | B | stage.musicTracks | media.bgm |
| `map.stage[3]` | `bossBgmCastleHpThresholdPercent` | B | stage.musicTracks[].threshold | media.bgm |
| `map.stage[4]` | `bossBgmId` | B | stage.musicTracks | media.bgm |
| `map.stage[5]` | `drop1ChanceOrWeight` | A | stage.drops[].weight / chance | reward.drops |
| `map.stage[6]` | `drop1ItemId` | A | stage.drops[].id | reward.drops |
| `map.stage[7]` | `drop1Quantity` | A | stage.drops[].count | reward.drops |
| `map.stage[8]` | `dropModeCode` | A | stage.rewardMode | reward.policy |
| `map.stage[9]` | `drop2ChanceOrWeight` | A | stage.drops[].weight / chance | reward.drops |
| `map.stage[10]` | `drop2ItemId` | A | stage.drops[].id | reward.drops |
| `map.stage[11]` | `drop2Quantity` | A | stage.drops[].count | reward.drops |
| `map.stage[12]` | `drop3ChanceOrWeight` | A | stage.drops[].weight / chance | reward.drops |
| `map.stage[13]` | `drop3ItemId` | A | stage.drops[].id | reward.drops |
| `map.stage[14]` | `drop3Quantity` | A | stage.drops[].count | reward.drops |
| `map.stage[15]` | `hasScoreRewardsFlag` | A | stage.scoreRewards / rawRewards[15] | reward.score, source.stageColumns |
| `stage.options[0]` | `globalMapId` | A | map.nativeId / limits[].raw[0] | source.mapColumns, source.stageColumns |
| `stage.options[1]` | `crownIndexZeroBased` | A | limits[].crown | map.limits, stage.limits |
| `stage.options[2]` | `stageIndexZeroBased` | A | limits[].stage | map.limits, stage.limits |
| `stage.options[3]` | `allowedRarityMask` | A | limits[].rarities | map.limits, stage.limits |
| `stage.options[4]` | `maxConcurrentAllies` | A | limits[].maxUnits | map.limits, stage.limits |
| `stage.options[5]` | `firstPageOnlyFlag` | A | limits[].slots | map.limits, stage.limits |
| `stage.options[6]` | `minimumUnitCost` | A | limits[].minCost | map.limits, stage.limits |
| `stage.options[7]` | `maximumUnitCost` | A | limits[].maxCost | map.limits, stage.limits |
| `stage.options[8]` | `characterGroupId` | B | limits[].group | map.limits, stage.limits |
| `stage.difficulty[0]` | `globalMapId` | B | map.nativeId | source.stageColumns |
| `stage.difficulty[1]` | `stageDifficultyByIndex` | B | stage.difficulty / difficultySource | stage.difficulty, map.difficulty |
| `map.stage.score[16]` | `scoreReward1Threshold` | A | stage.scoreRewards[].score | reward.score |
| `map.stage.score[17]` | `scoreReward1ItemId` | A | stage.scoreRewards[].id | reward.score |
| `map.stage.score[18]` | `scoreReward1Quantity` | A | stage.scoreRewards[].count | reward.score |
| `map.stage.score[19]` | `scoreReward2Threshold` | A | stage.scoreRewards[].score | reward.score |
| `map.stage.score[20]` | `scoreReward2ItemId` | A | stage.scoreRewards[].id | reward.score |
| `map.stage.score[21]` | `scoreReward2Quantity` | A | stage.scoreRewards[].count | reward.score |
| `map.stage.score[22]` | `scoreReward3Threshold` | A | stage.scoreRewards[].score | reward.score |
| `map.stage.score[23]` | `scoreReward3ItemId` | A | stage.scoreRewards[].id | reward.score |
| `map.stage.score[24]` | `scoreReward3Quantity` | A | stage.scoreRewards[].count | reward.score |
| `map.stage.score[25]` | `scoreReward4Threshold` | A | stage.scoreRewards[].score | reward.score |
| `map.stage.score[26]` | `scoreReward4ItemId` | A | stage.scoreRewards[].id | reward.score |
| `map.stage.score[27]` | `scoreReward4Quantity` | A | stage.scoreRewards[].count | reward.score |
| `map.stage.score[28]` | `scoreReward5Threshold` | A | stage.scoreRewards[].score | reward.score |
| `map.stage.score[29]` | `scoreReward5ItemId` | A | stage.scoreRewards[].id | reward.score |
| `map.stage.score[30]` | `scoreReward5Quantity` | A | stage.scoreRewards[].count | reward.score |
| `map.stage.score[31]` | `scoreReward6Threshold` | A | stage.scoreRewards[].score | reward.score |
| `map.stage.score[32]` | `scoreReward6ItemId` | A | stage.scoreRewards[].id | reward.score |
| `map.stage.score[33]` | `scoreReward6Quantity` | A | stage.scoreRewards[].count | reward.score |
| `map.stage.score[34]` | `scoreReward7Threshold` | A | stage.scoreRewards[].score | reward.score |
| `map.stage.score[35]` | `scoreReward7ItemId` | A | stage.scoreRewards[].id | reward.score |
| `map.stage.score[36]` | `scoreReward7Quantity` | A | stage.scoreRewards[].count | reward.score |
| `map.stage.score[37]` | `scoreReward8Threshold` | A | stage.scoreRewards[].score | reward.score |
| `map.stage.score[38]` | `scoreReward8ItemId` | A | stage.scoreRewards[].id | reward.score |
| `map.stage.score[39]` | `scoreReward8Quantity` | A | stage.scoreRewards[].count | reward.score |
| `map.stage.score[40]` | `scoreReward9Threshold` | A | stage.scoreRewards[].score | reward.score |
| `map.stage.score[41]` | `scoreReward9ItemId` | A | stage.scoreRewards[].id | reward.score |
| `map.stage.score[42]` | `scoreReward9Quantity` | A | stage.scoreRewards[].count | reward.score |
| `map.stage.score[43]` | `scoreReward10Threshold` | A | stage.scoreRewards[].score | reward.score |
| `map.stage.score[44]` | `scoreReward10ItemId` | A | stage.scoreRewards[].id | reward.score |
| `map.stage.score[45]` | `scoreReward10Quantity` | A | stage.scoreRewards[].count | reward.score |
| `map.options[0]` | `globalMapId` | A | map.nativeId | source.mapColumns |
| `map.options[1]` | `crownCount` | A | map.stars.length | source.mapColumns |
| `map.options[2]` | `alternateCrownUnlockFlag` | B | map.rawOptions[2]（abyssは既存互換） | map.alternateCrown |
| `map.options[3]` | `crown1EnemyMultiplierPercent` | A | map.stars[0] | map.crowns |
| `map.options[4]` | `crown2EnemyMultiplierPercent` | A | map.stars[1] | map.crowns |
| `map.options[5]` | `crown3EnemyMultiplierPercent` | A | map.stars[2] | map.crowns |
| `map.options[6]` | `crown4EnemyMultiplierPercent` | A | map.stars[3] | map.crowns |
| `map.options[7]` | `guerrillaGroupMask` | A | map.rawOptions[7] | map.guerrilla, map.announcement |
| `map.options[8]` | `rewardResetMode` | A | map.rewardResetType | map.rewardReset |
| `map.options[9]` | `mapClearCountLimit` | A | map.clearLimit | map.clearLimit |
| `map.options[10]` | `displaySortKey` | A | map.rawOptions[10] | map.sort |
| `map.options[11]` | `mapCooldownMinutes` | A | map.interval | map.cooldown |
| `map.options[12]` | `challengeEntryTrackingFlag` | B | map.rawOptions[12] | map.entryTracking |
| `map.options[13]` | `mapDifficultyBadgeMask` | A | map.rawOptions[13] | map.badges, map.difficulty, stage.difficulty |
| `map.options[14]` | `hideAfterClearFlag` | B | map.hiddenAfterClear | map.hideAfterClear |
| `map.options[15]` | `doubleXpAdEligibilityFlag` | A | map.rawOptions[15] | map.ad |
| `map.options[16]` | `productionPriceMultiplierPercent` | A | map.rawOptions[16] | map.price |
| `map.options[17]` | `usesEnergyForSortie` | B | map.rawOptions[17] | map.resource, stage.energy |
| `map.options[18]` | `showAllStagesFlag` | A | map.rawOptions[18] | map.showAll |
| `map.options[19]` | `usesExtendedStageRecordStorage` | A | map.rawOptions[19]（現版） | map.extendedStorage |
| `map.options[20]` | `mapNameSourceAnnotation` | A | map.rawOptions[20]（現版） | source.mapColumns |

## 動作検証の境界

- 味方死亡数閾値の取得・表示までを扱う。死亡数を増やす全命令・例外は未検証。待機保持の原値を保持し、時間の起点を追加解釈しない。
- JP 15.7.4 ARM64（SO SHA-256 `669438f86b41c10c7a387b96eb1ab5ca82a350bacc89ec06c05f699ec3727590`）の `009a3a30` がヘッダー列6を種別・マップ別の表へ登録し、`007cffdc` が非0をアイテム消費経路と判定する。種別−10（B系列）はヘッダーに関係なくアイテム経路で、`007d00d0` は商をネコビタン種別0～2として解決する。通常アイテムの商はアイテムID。両方とも `007d0208`・`007d02a0` が下3桁を個数として読む。S434の `259010`、`259030`、`259100` は伝説の札束10・30・100個、B000の `3` はネコビタンA 3個。ステージDBでは確認済みの通常経路にCSVの統率力を表示する。実出撃時の期間補正や支払い処理はこの表示の範囲外。
- 追加冠解放と従来の abyss は別項目。難易度バッジはビット番号と原値を表示する。個別のバッジ名、入場履歴の保存先、拡張領域の永続化形式、報酬リセット方式3の詳細は引き続き未確認。全ステージ一覧表示やXP広告対象のフラグから実際の挑戦可否・報酬を断定しない。
- 予約列9は対象版の主ローダーについての根拠に限る。EX・章・特殊系列の全報酬、キャラグループtype1、解放や保存のライフサイクルの同値性は本実装の検証範囲外。
