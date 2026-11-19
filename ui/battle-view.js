// ホストの表示設定。戦闘の論理F・カメラ倍率を変更しない。
export const battleAspects=[['20:9','Pixel 8（20:9）'],['16:9','16:9'],['18:9','18:9'],['21:9','21:9'],['auto','領域に合わせる']];
export function battleViewportWidth(choice,width,height){
 const known=battleAspects.some(([value])=>value===choice)?choice:'20:9';
 const ratio=known==='auto'?width/Math.max(1,height):known.split(':').reduce((a,b)=>Number(a)/Number(b));
 return Math.max(960,Math.min(3840,Math.round(ratio*640)));
}

// ネイティブの座標系と、スマホ画面へ出力する物理画素数を分ける。
export function phoneCanvasSize(width,box,dpr){
 const scale=Math.min(box.width/width,box.height/640)*dpr;
 const pixels=Math.min(3840,Math.max(1,Math.round(width*scale)));
 return [pixels,Math.max(1,Math.round(640*pixels/width))];
}

// 終了演出の操作権と拡大上限は戦闘コアが返す。
export function battleCameraView(state,runtime,camera,width){
 if(state.intro<24||state.paused||runtime.endCameraActive)return null;
 return {...camera,viewport_width:width,cameraWidth:960,maximum:runtime.cameraMaximum??1};
}

// 指定速度は通常の1倍基準。0は本家スピードアップの設定に従う。
export function battlePlaybackRate(speed,speedMode){
 const nativeRate=speedMode+1;
 return speed>0?Math.min(20,Math.max(.1,speed))/nativeRate:1;
}

export const battleFpsLimits=[10,15,20,24,30];
const fpsLimit=value=>value>30?30:battleFpsLimits.includes(Number(value))?Number(value):30;
// 描画が止まった時間を次の描画にまとめて持ち込まない。
export function accumulateBattleTicks(pending,elapsed,rate,limit){
 const capacity=Math.min(30,Math.max(1,Math.ceil(30*rate/fpsLimit(limit))));
 const total=pending+Math.max(0,elapsed)*.03*rate;
 return Math.floor(total)>capacity?capacity+pending%1:total;
}
export function battlePresentationClock(){
 let limit=30,last=-Infinity,deadline=-Infinity;
 return {
  set(value){const next=fpsLimit(value);if(limit!==next){limit=next;deadline=last+1000/limit;}return limit;},
  delay(now){return Math.max(0,deadline-now);},
  presented(now){
   const period=1000/limit;
   // 通常のタイマーの遅れは次の間隔に累積させない。大きく遅れた場合はそこから刻み直す。
   const lateness=now-deadline;
   deadline=(lateness>=0&&lateness<=Math.min(4,period/8)?deadline:now)+period;
   last=now;
  },
  reset(){last=deadline=-Infinity;},
 };
}
