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

KBCSの日本語太字はブラウザで合成される。Pixel 8の選択結果と原本フォントとの差は下記の実測を参照。言語・文字種ごとの代替書体と絵文字の全構成は未調査。

## Pixel 8での計測

Android 15、API 35、ビルド `BP1A.250505.005.B1`、locale/Paint localeはja-JP。端末に入っていたJP 16.0.3（versionCode 1600030）はbase APKとARM64 splitのSHAが上表と一致した。[計測ツール](../verify/NativeText1603.java)は別パッケージのAndroid Instrumentationで実行し、原本から確認したPaint・StaticLayout・Bitmap条件で20ケースを生成した。 `app_process` で直接起動した場合はTypefaceの既定書体が未初期化で、同じ条件を取得できなかった。

- 30px、 `default_bold`、 `ALIGN_NORMAL`、wrap 0、strokeなしを通知の比較条件とした。Pixel 8の1行は高さ35px、baseline Y=28。20ケースともARGB_8888、sRGB、premultipliedで、rowBytesは幅×4、densityは420だった。
- 固定wrap 39.75/40/40.25では1回目のlayout幅40/41/41、Bitmap幅44/45/45、高さ105。空文字は全面透明の5×35、2行は65×70だった。幅80指定の「かな」は85×35で、center/oppositeの行Xは12/25。結合濁点の「か」+濁点と合成済みの「が」は同じraw画素だった。
- 混在文字の `TextRunShaper` はRobotoとNoto Sans CJKのTTC face 0を選び、通常はweightOverride=400、太字は700を報告。RobotoファイルのSHAはKBCSの変換元と同じ。日本語はSHA-256 `3e7e5afaac2c6d872592d76abedac03a51c6f0fc42d11e311ff2816a6c368afe`、Noto 2.004-H1のCFF2可変faceでwght 400/400/900（min/default/max）。同梱WOFF2の静的faceとはアウトライン形式、hmtx、GSUB、GPOSが異なる。Shaperは単行に対する同じPaintでの書体選択を示す。

KBCS 0.1.63をWindowsのEdge 158.0.4370.33で実行し、 `battle-result-popup.js` が白で生成した文字runのCanvasを取得した。現行はweight 400でbaseline Y=31。比較では両画像の非透明画素の和集合を元に、透明度の絶対差の平均（0〜255）を計算した。baseline合わせはKBCS側を整数3px上へ移動。700の列は実験用にCanvasフォント指定だけを変更したもの。

| 入力 | Pixel 8 | 現行KBCS | 元のα MAE | baseline揃え | baseline揃え＋700 |
| --- | ---: | ---: | ---: | ---: | ---: |
| `Lv.50＋10　かな` | 228×35 | 223×39 | 139.8 | 87.9 | 47.9 |
| `Lv.50+10` | 124×35 | 120×39 | 131.0 | 64.3 | 39.1 |
| `かなカナ漢字` | 185×35 | 180×39 | 140.8 | 63.9 | 35.2 |
| `AV fi W` | 101×35 | 96×39 | 132.4 | 101.8 | 32.6 |

混在文字の非透明mask IoUは0.412→0.639→0.809。ウェイトとbaselineを合わせても、4例とも寸法と画素に差が残った。アプリ内の最終描画矩形・色合成・GPUサンプリングと他端末の比較は未実施。

## 端末で参照を収集する

Android 15以降、Android SDK 35、JDK、Python、バイナリリダイレクト対応のPowerShell 7.4以降を使う。計測APKは [manifest](../verify/native-text/AndroidManifest.xml) の公開権限なしの一時パッケージ。通常のアプリ初期化でTypefaceを得て、結果はアプリ専用領域に保存する。リポジトリのルートから実行する。

```powershell
$probe = Join-Path $env:TEMP 'kbcs-native-text-probe'
New-Item -ItemType Directory -Force "$probe/classes","$probe/dex" | Out-Null
$jar = "$env:ANDROID_HOME/platforms/android-35/android.jar"
$tools = "$env:ANDROID_HOME/build-tools/35.0.0"
$adb = "$env:ANDROID_HOME/platform-tools/adb.exe"
& "$env:JAVA_HOME/bin/javac.exe" --release 11 -classpath $jar -d "$probe/classes" research/verify/NativeText1603.java
& "$tools/d8.bat" --release --min-api 35 --lib $jar --output "$probe/dex" "$probe/classes/dev/kbcs/textprobe/NativeText1603.class"
& "$tools/aapt.exe" package -f -M (Resolve-Path 'research/verify/native-text/AndroidManifest.xml').Path -I $jar -F "$probe/unsigned.apk"
py -c 'from zipfile import ZipFile; import sys; ZipFile(sys.argv[1],"a").write(sys.argv[2],"classes.dex")' "$probe/unsigned.apk" "$probe/dex/classes.dex"
& "$tools/zipalign.exe" -f 4 "$probe/unsigned.apk" "$probe/aligned.apk"
$key = "$probe/measurement-key.jks"
if (-not (Test-Path $key)) {
    & "$env:JAVA_HOME/bin/keytool.exe" -genkeypair -keyalg RSA -alias probe -keystore $key -storepass textprobe -keypass textprobe -dname 'CN=KBCS local text measurement' -validity 30
}
& "$tools/apksigner.bat" sign --ks $key --ks-pass pass:textprobe --key-pass pass:textprobe --out "$probe/probe.apk" "$probe/aligned.apk"
& $adb -d install "$probe/probe.apk"
$text = [Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes('Lv.50＋10　かな'))
$cases = ConvertTo-Json -InputObject @(@{id='mixed'; font='default_bold'; size=30; wrap=0; align=1; stroke=$false; text=$text}) -Compress
& $adb -d shell "am instrument -w -r -e cases '$cases' dev.kbcs.textprobe/.NativeText1603"
foreach($ext in 'metrics.txt','pixels','png') {
    & $adb -d exec-out run-as dev.kbcs.textprobe cat "files/mixed.$ext" > "$probe/mixed.$ext"
}
Get-Content -Encoding utf8 "$probe/mixed.metrics.txt"
Get-FileHash "$probe/mixed.pixels" -Algorithm SHA256
& $adb -d uninstall dev.kbcs.textprobe
```
