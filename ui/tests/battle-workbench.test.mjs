import assert from 'node:assert/strict';
import {test} from 'node:test';
import {accumulateBattleTicks,battlePresentationClock} from '../battle-view.js';
import {captureRectangle} from '../battle-recording.js';
import {observedActorChanges} from '../battle-details.js';

test('連続入力や上限変更で描画間隔を飛び越えない',()=>{
 const clock=battlePresentationClock();
 assert.equal(clock.delay(100),0);clock.presented(100);
 assert.ok(clock.delay(133.3)>0);
 for(let i=0;i<10;++i)assert.equal(clock.delay(110),1000/30-10);
 assert.equal(clock.delay(134),0);clock.presented(134);
 clock.set(20);assert.ok(clock.delay(183.9)>0);assert.equal(clock.delay(184),0);
 assert.equal(clock.set(120),30);
});

test('停止時間を取り戻さず、低い描画上限と指定速度は保つ',()=>{
 assert.equal(Math.floor(accumulateBattleTicks(.4,1100,1,30)),1);
 assert.equal(Math.floor(accumulateBattleTicks(.4,1100,1,20)),2);
 assert.equal(Math.floor(accumulateBattleTicks(.4,1100,4,30)),4);
 let fraction=0,ticks=0;
 for(let i=0;i<20;i++){fraction=accumulateBattleTicks(fraction,50,1,20);ticks+=Math.floor(fraction);fraction%=1;}
 assert.equal(ticks,30);
});

test('録画の選択範囲は逆方向のドラッグと画面外の座標を扱う',()=>{
 assert.deepEqual(captureRectangle([1921,1000],[125.2,-18],[1920,1080]),[125,0,1795,1000]);
 assert.deepEqual(captureRectangle([-10,5],[-9,27],[1280,720]),[0,5,0,22]);
});

test('観測ログはカウントダウンを毎F追加せず、適用・終了とHP差分を残す',()=>{
 const before={action:1,hp:100,retiredFrame:-1,slow:20};
 assert.deepEqual(observedActorChanges(before,{...before,slow:19}),[]);
 assert.deepEqual(observedActorChanges(before,{...before,slow:0,action:3,hp:50}),['待機 → KB','HP 100 → 50','鈍足：終了']);
});
