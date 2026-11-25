# JP 16.0.3の文字画像

2026-11-26調査。原本はJP 16.0.3、ARM64の分割APK。以下のハッシュは配布ファイルから計算したSHA-256。tarの値は配布元のdigest、SOの値は公開解析資料と一致した。作業コピーは空き容量のあるローカル一時領域に置いた。

| 対象 | SHA-256 |
| --- | --- |
| リリースのsource.tar（181,606,400 bytes） | a160e1a410d36d8b75ad992330790c1dc60e8c7c254898f5d7334b7aae7857be |
| ベースAPK | 61eb5e31ff7fce3cb69d1cd617030c09da4f030e69855baa1d2d4a78d57456b8 |
| arm64-v8a分割APK | 74d33716fea7454a3b2f4f73c3975bb2cad3cface83016a88bed10a7e533ff3f |
| libnative-lib.so | 941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73 |
| classes.dex（zq0） | 97a83c15ce28c0a7ecd94dd58e680f6a5aa02e9b75399025129c0ee2f4b68c2f |
| classes4.dex（MyActivity、sp1） | 5bb9a31c7b2bb6eb5319c93790ab36ce63c271f14c4b463eb5c8f3ec8cf6530c |

[取得元リリース](https://github.com/sinsuirakv0/battlecats-apk/releases/tag/source-jp-1600030-3f1fecfdfc1e6ba3) · [16.0.3 ARM64解析資料](https://github.com/sinsuirakv0/KBCS/tree/608e4c881d/research/reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73)

## DEXで確定したJavaの契約

表中の offsets はbaksmali 2.5.2の `--code-offsets` によるメソッド先頭からの16進コードユニット。

| 項目 | 確認した処理と根拠 |
| --- | --- |
| ハンドル | `MyActivity.getFontHandle(String,float)` の0x00–0x37は `sp1` でキャッシュを引き、未登録時は1から始まる通番を割り当ててキーとIDの両方で `zq0` を保持する。 `sp1.equals` 0x09–0x1bは文字列一致とfloat比較、 `hashCode` 0x00–0x13は文字列hashとfloat hashの31倍を足す。 |
| Paint | `zq0.<init>` 0x0b–0x95。 `TextPaint()` にアンチエイリアスを有効化し、ハンドルのfloatを `setTextSize` へ渡す。色は白ARGB=(255,255,255,255)。サブピクセル、hinting、fake bold、skew、scale、locale、feature設定は対象Androidの初期状態。 |
| 書体と行余白 | 同コンストラクタの0x16–0x88。空文字列は既定状態。 `default_bold` / `default_italic` は `defaultFromStyle(1/2)`。 `thonburi` / `thonburi_bold` は同0/1で、この2種類だけ `includePad=true`。その他は `Typeface.create(name,0)`。 |
| 計測幅 | `zq0.getwrap` 0x00–0x25。wrapが正、かつ正の無限大以外ならwrapを使う。0以下、NaN、正の無限大の場合は `Layout.getDesiredWidth(text, paint)`。1.0をfloatで加えてintに変換し、1回目の `StaticLayout` の幅にする。 `getWidth(String)` の `Paint.measureText` は別の関数。 |
| 画像寸法 | `getwrap` 0x25–0x3bと `newTextBitmap` 0x00–0x18。1回目のlayoutは `ALIGN_NORMAL`、行間倍率1、追加間隔0、前述の `includePad`。幅は `ceil(float(layout.getWidth()) + 4f)`、高さは `ceil(float(layout.getHeight()))` をint化。空文字を早期returnする分岐や、この関数による寸法の上下限は見つからなかった。 |
| 描画原点 | `newTextBitmap` 0x31–0x43は2回目の `StaticLayout` を画像幅で作り、Canvas平行移動(0,0)で描画する。行のbaselineはこのlayoutが計算する。 `zq0.getBaseline` は `TextPaint.baselineShift`、 `getHeight` は `abs(bottom)+abs(top)`、 `getLineHeight` は `getFontMetrics(null)` で、それぞれ別の値。 |
| 揃えと輪郭 | `MyActivity.newTextBitmap` 0x00–0x2cは未登録IDならnull。揃えは0=center、2=opposite、1とその他=normal。 `zq0.newTextBitmap` 0x21–0x54で真なら白の `STROKE` を幅2pxで1回描画し、幅0と `FILL` に戻す。偽は `FILL`。色の引数はない。 |
| Bitmapと文字列 | `zq0.newTextBitmap` 0x16–0x43で `ARGB_8888` を作成。背景色、密度、色空間、premultiplied設定は明示指定されない。受け取った文字列を `StaticLayout` に渡す。UTF-16行境界、実際のstride、PNG/raw画素とプラットフォーム既定値は端末計測の対象。 |

## ネイティブ側の経路

- `0057fe6c` はJNIで `getFontHandle` を呼び、割当ブロックの+0x20にID、+0x24/+0x28に各0x2601を保存。ELFの相対再配置 `0xb6d4b8` がフォントのvtable先頭。+0x60の `0xb6d518` は `0x47fbcc` を指す。Ghidraのアドレスには0x100000を加える。vtable +0x58の `0057fbb4` はwrap=0、揃え=1に設定し、同じ+0x60へ分岐する。
- `0057fbcc` の実命令では `x0` がフォントオブジェクト、 `x1` が文字列、 `s0` がwrap、 `w2` が揃え、 `w3` がフラグ、 `x8` が戻り値の格納先。JNIにオブジェクト+8のIDとフラグbit0を渡す。 `0057fd50` の `AndroidBitmap_getInfo` と `0057fd68` のlockの後、幅・高さ・ポインタを `0055cb24 → 0055cd64` へ渡し、幅×高さ×4バイトをコピーする。strideはコピーの引数に渡らない。
- 通知の `0048ab94` は画像化前に仮の幅・高さを保持し、vtable +0x60にwrap、揃え、stroke=0を渡す。揃えのデータ `002c97e8` の3要素はELF実体で[1,0,2]。 `00489808 → 0055c6c0 → 0055b5bc → 0055b6e0` を経て、幅・高さを画像の寸法に置き換える。
- `gfxInit` は `00592710 → 00591118` で初期化した描画オブジェクトを `0058fadc` で登録する。ELFの描画vtable `0xb6e0b0` の+0x18は `00591618`。 `005902b8` がここで作成したテクスチャのvtable `0xb6e2d0` の+0x18は `00592a30`。 `00592aa8` の `glTexImage2D` はRGBAをinternal format/format、UNSIGNED_BYTEをtypeに使う。+0x20の `00592ae4` は先頭2項目をMIN/MAGフィルタへ設定する。文字画像側の0x2601と初期化時の画像側の0x2600から、各画面の最終描画時にどの値が選ばれるかは未追跡。最終UV、blendモード、合成時のalphaは未確定。

## 画面別の照合状況

| 画面 | 確認できた経路・値 | 残り |
| --- | --- | --- |
| 報酬・通知の文字run | 16.0.3の `008b9358` の `008b99a4` / `008b9cc8` → `008b90b4` → `0047ec3c`。サイズ30、揃え指定0→Java 1、wrap 0、塗り。ELF `0xb9bd40` の参照先は `0048a2d0` の太字分岐で使う `0xba6098`。同分岐は通常 `00580108`、タイ語分岐は `00580300`。runのRGB・点滅フラグは画像とは別のフィールド。行幅はrunの画像幅を加算し、 `008b9358` は画像幅800pxを上限として行の倍率を計算する。 | 通常通知と敗北時の全呼び出し条件、各runの最終アンカー・クロップ・色合成、実画面比較 |
| 戦闘警告・アイテム説明・長押し名 | 15.7.2では警告 `009eadc8`、描画 `006ddfb8`、アイテム説明 `005cf984`、名前生成 `006dd65c`。 | 16.0.3の対応と描画時引数。旧版やKBCSの設定値から補完しない |
| 戦闘開始コンボ | 15.7.2 `005d5afc → 005d63f8`。40pxの名前と26pxの効果の根拠は同版資料。 | 16.0.3での生成・描画、実画面比較 |
| 編成・にゃんコンボ図鑑 | 15.7.2の候補は編成 `00a72648 → 00a82394`、図鑑 `00895e64`、キャラ名・レア度 `0088ee54`、確認窓 `0088e208`。 | 16.0.3における各style、fit、配置、色と実画面比較 |

[戦闘HUDの旧版根拠](../../native/kbcs-core/docs/battle-screen.md) · [図鑑と戦闘の旧版根拠](../../native/kbcs-core/docs/interface-20261101.md)

## 配布フォントの照合

原本AOSPファイルとアプリ同梱WOFF2のSHA-256は [sources.json](../../ui/fonts/sources.json) と一致。fontTools 4.68.0で同じfaceを読み、glyph順、cmap、hmtx、GSUB、GPOSを比較した。Roboto 3.005のglyfと可変関連テーブル、日本語Noto 2.004のCFFテーブルも元faceと一致した。

| フォント | UPEM | cmap | 軸 |
| --- | ---: | ---: | --- |
| Roboto | 2048 | 2,797 | wght 100/400/900、wdth 75/100/100、ital 0/0/1（min/default/max） |
| Noto Sans CJK JP TTC face 0 | 1000 | 44,776 | 静的、weight 400 |

ブラウザの日本語太字は現行CSSで合成される。Android実機が当該文字列に選ぶ書体ファイルとウェイト、言語・文字種ごとの代替書体と絵文字の構成は未取得。

## 端末で参照を収集する

[NativeText1603.java](../verify/NativeText1603.java) は端末のAndroidフレームワークで代表ケースを生成する計測用コード。Bitmapと同寸のPNG、strideを含むrawバイト、FontMetrics、各行の開始/終了・描画位置・baseline、端末とPaintの設定を記録する。下記はリポジトリのルートから実行するPowerShell例。 `JAVA_HOME` と `ANDROID_HOME` は既存のJDK/SDKの場所。

```powershell
$probe = Join-Path $env:TEMP 'kbcs-native-text-probe'
New-Item -ItemType Directory -Force "$probe/classes" | Out-Null
$androidJar = "$env:ANDROID_HOME/platforms/android-35/android.jar"
& "$env:JAVA_HOME/bin/javac.exe" --release 11 -classpath $androidJar -d "$probe/classes" research/verify/NativeText1603.java
& "$env:ANDROID_HOME/build-tools/35.0.0/d8.bat" --release --min-api 26 --lib $androidJar --output $probe "$probe/classes/NativeText1603.class"
$adb = "$env:ANDROID_HOME/platform-tools/adb.exe"
& $adb push "$probe/classes.dex" /data/local/tmp/kbcs-text-probe.dex
$sample = [Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes('Lv.50＋10　かな'))
& $adb shell "CLASSPATH=/data/local/tmp/kbcs-text-probe.dex app_process /system/bin NativeText1603 default_bold 30 0 1 false '$sample' /data/local/tmp/kbcs-text-case" | Tee-Object "$probe/metrics.txt"
& $adb pull /data/local/tmp/kbcs-text-case.png "$probe/case.png"
& $adb pull /data/local/tmp/kbcs-text-case.pixels "$probe/case.pixels"
Get-FileHash "$probe/case.pixels" -Algorithm SHA256
```

各ケースに上記のAPK/SO SHA、端末のOSビルド、 locale、使用フォント構成・ファイルのSHAを添える。まず空文字、複数行、タブ・空白、半角と全角の混在、結合濁点を比較する。幅の丸めは固定wrap 39.75/40/40.25で、1回目のlayout幅40/41/41と最終Bitmap幅44/45/45を期待値とする。高さ・baseline・画素は端末出力を採る。引数の揃え0/1/2とstrokeの真偽も別々に比較する。

SDK 35でJavaコンパイルとDEX生成まで実施。今回の環境には接続されたAndroid端末や起動可能なAndroidイメージがなかったため、端末上の起動、画素、フォント一致、ゲーム内合成は未測定。 `app_process` のlocale・描画設定が実アプリと同じかも比較条件に含める。
