# ゲーム画面の文字描画

現在は `native-text.js` の `prepareNativeText()` を戦闘準備とにゃんコンボ図鑑で共用する。 `native-font.js` は旧経路のCSSとCanvas用フォント指定を提供する。初回の準備でRobotoを欧文、Noto Sans CJK JPをひらがなで読み込み、返されたfaceの名前と状態を確認する。フォントの読込に失敗した場合は既存のフォント列で描画を続ける。

戦闘の `kbcs-diagnostics.json` には `textRendering` を含める。 `renderer: browser-legacy` はブラウザでの描画、 `reason: android-reference-pending` は参照画素の検証待ち。各faceの `loaded` / `missing` / `error` / `unavailable` は配布フォントの読込結果。欠落と読込エラーはコンソールにも1回記録する。Edgeで配布フォント2種が取得できる場合と、日本語WOFF2が404の場合を確認した。

## 現在の描画箇所

| 対象 | KBCSの経路 |
| --- | --- |
| 戦闘の警告、アイテム、長押し名、開始コンボ | `battle-screen.js` のCanvas。警告の縁と長い名前の縮小もCanvas側。 |
| コンテニュー、敗北ヒントと通知 | `battle-results.js` のCanvas。報酬と通知は `battle-result-popup.js` のrun別CanvasとRust/C++の窓配置を共用。通知は現在、通常ウェイトで計測。 |
| 編成の枠名、にゃんコンボ図鑑 | `formation-view.js` のSVGと `getComputedTextLength`。 `formation-combos.js` はCanvas計測とSVG描画を併用。 |
| DB、設定、読上げラベル | 現行のDOM/CSS。アイテム数や価格などのアトラス由来の文字は画像として描く。 |

Pixel 8で通知の30pxテキストを実測した。混在文字の画像はAndroidが228×35、現行Canvasが223×39、baselineは28/31。ウェイト700とbaselineを揃えると画素差は減った。同梱の静的Notoと実機のCFF2可変Notoではフォントテーブルも異なる。画面別の最終配置・合成の照合（G1）と、CPUバックエンドをWindows GNU LLVM・macOS arm64/x86_64でコンパイル・リンク・起動する検証（G2）が残る。Rust側のラスタライズとゲーム画面の差し替えはその検証後に行う。

[16.0.3のDEX・ネイティブ調査と端末計測](../../research/docs/native-text-1603.md) · [配布フォントの由来](fonts.md)
