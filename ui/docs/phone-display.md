# AndroidへのUSB出力

ホームの「スマホに接続」から、USBデバッグを許可したAndroid端末を1台接続する。PCにはAndroid SDK Platform-Toolsのadbが必要。対応するSDKの環境変数、各OSの標準SDKフォルダ、PATHの順に探す。表示とタッチにはAndroidのChromeを使う。［[Platform-Tools](https://developer.android.com/tools/releases/platform-tools)・[USB転送](https://developer.android.com/develop/ui/views/layout/webapps/access-local-server)］

PCでステージを選ぶとスマホのKBCS待機画面から出撃準備へ進み、スマホ側で編成・冠・アイテム・出撃を操作する。画面右上の「横向き全画面」をタップすると、ChromeのURLバーとナビゲーションUIを隠し、端末を横向きに固定する。Chromeの全画面APIの条件に従い、最初の切り替えにはスマホ上でのタップが必要。出撃ボタンからも切り替えられ、全画面を解除すると右上のボタンが再表示される。PC側の戦闘領域は黒画面になり、ステージ描画用Canvas・モーション・音声を初期化しない。PCで別の画面に移動すると、スマホは待機画面へ戻る。

戦闘は同じRust/C++のセッションと、既存のタッチ・ピンチ・HUD・WebGL描画を使う。USB経由では圧縮なしのバイナリ描画命令を送り、動画のエンコードや復号を挟まない。表示領域の比率を採用し、HUDと背景をスマホの物理画素数で描画する。描画幅は3840pxまで。物理画素数を戦闘の基準座標やフレーム時計へ渡さない。

## 接続と解放

デスクトップのナビゲーションが `Phone::navigate` に表示先を渡し、待機画面は既存の出撃準備を同一オリジンのiframeに入れる。サーバーはPCのループバックだけにバインドし、adb reverseでスマホのローカルポートへ転送する。使い切りの接続URLを受け取ったら同じオリジンのHttpOnly Cookieで認証する。USB側には出撃準備・戦闘に使うAPIと画面だけを公開する。戦闘セッションはPCの表示用セッションと分け、編成・戦闘設定・報酬の保存先はPCで共用する。

「接続を終了してPCで表示」でUSB側のサーバーと転送を終了し、PCの出撃準備を開く。USBを抜くとスマホ側は接続待ちを表示する。再接続するときはPC側の接続を終了してから接続し直す。
