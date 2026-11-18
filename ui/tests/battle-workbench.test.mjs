import assert from 'node:assert/strict';
import {test} from 'node:test';
import {accumulateBattleTicks,battlePresentationClock} from '../battle-view.js';
import {adjustCaptureRectangle,captureRectangle,recordingVideoSize,recordingVideoBitrate,saveBattleRecording} from '../battle-recording.js';
import {observedActorChanges} from '../battle-details.js';

test('連続入力や上限変更で描画間隔を飛び越えない',()=>{
 const clock=battlePresentationClock();
 assert.equal(clock.delay(100),0);clock.presented(100);
 assert.ok(clock.delay(133.3)>0);
 for(let i=0;i<10;++i)assert.ok(Math.abs(clock.delay(110)-(1000/30-10))<1e-9);
 assert.equal(clock.delay(134),0);clock.presented(134);
 clock.set(20);assert.ok(clock.delay(183.9)>0);assert.equal(clock.delay(184),0);
 assert.equal(clock.set(120),30);
});

test('短いタイマー遅延が積み重ならず、大きな遅延では次の描画を詰めない',()=>{
 const clock=battlePresentationClock();let now=0;clock.presented(now);
 for(let i=0;i<300;++i){
  now=Math.ceil(now+clock.delay(now))+.9;
  clock.presented(now);
 }
 assert.ok(Math.abs(now-10_000)<2);
 now+=800;clock.presented(now);
 assert.ok(Math.abs(clock.delay(now)-1000/30)<1e-9);
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
 const selection=[20,30,100,80],size=[200,150];
 assert.deepEqual(adjustCaptureRectangle(selection,[100,-40],size,'move'),[100,0,100,80]);
 assert.deepEqual(adjustCaptureRectangle(selection,[200,90],size,'nw'),[104,94,16,16]);
 assert.deepEqual(adjustCaptureRectangle(selection,[200,90],size,'se'),[20,30,180,120]);
});

test('録画の進捗は書き込み応答を受け取ってから進み、失敗した保存を取り消す',async()=>{
 const original=globalThis.fetch,chunk=512*1024,blob=new Blob([new Uint8Array(chunk+8)]),name='KBCS-stage.webm';
 const statuses=[],actions=[];
 try{
  globalThis.fetch=async(path,{body})=>{
   const query=new URL(path,'http://localhost').searchParams,action=query.get('action');actions.push(action);
   if(action==='begin')return Response.json({written:0});
   const written=Number(query.get('offset'))+body.byteLength;
   return Response.json(written===blob.size?{written,path:'downloads/'+name}:{written});
  };
  assert.equal(await saveBattleRecording({name,blob},value=>statuses.push(value)),'downloads/'+name);
  assert.deepEqual(statuses,[chunk,chunk+8]);
  assert.deepEqual(actions,['begin','append','append']);
  actions.length=0;
  globalThis.fetch=async path=>{
   const action=new URL(path,'http://localhost').searchParams.get('action');actions.push(action);
   return action==='append'?Response.json({error:'保存に失敗'},{status:400}):Response.json({});
  };
  await assert.rejects(saveBattleRecording({name,blob},()=>assert.fail('失敗した書き込みを進捗に含めない')),/保存に失敗/);
  assert.deepEqual(actions,['begin','append','cancel']);
 }finally{globalThis.fetch=original;}
});

test('高画質録画は戦闘描画の幅を保ち、4K以内で画素数に応じてビットレートを上げる',()=>{
 assert.deepEqual(recordingVideoSize(1422,640),[1422,640]);
 assert.deepEqual(recordingVideoSize(1920,1080),[1920,1080]);
 assert.deepEqual(recordingVideoSize(7680,4320),[3840,2160]);
 assert.ok(recordingVideoBitrate(1422,640)>2_500_000);
 assert.ok(recordingVideoBitrate(1920,1080)>recordingVideoBitrate(1422,640));
 assert.equal(recordingVideoBitrate(3840,2160),40_000_000);
});

test('観測ログはカウントダウンを毎F追加せず、適用・終了とHP差分を残す',()=>{
 const before={action:1,hp:100,retiredFrame:-1,slow:20};
 assert.deepEqual(observedActorChanges(before,{...before,slow:19}),[]);
 assert.deepEqual(observedActorChanges(before,{...before,slow:0,action:3,hp:50}),['待機 → KB','HP 100 → 50','鈍足：終了']);
});
