import assert from 'node:assert/strict';
import {test} from 'node:test';
import {battlePresentationClock} from '../battle-view.js';
import {createActorOcclusion} from '../src/features/stages/occlusion.js';
import {observedActorChanges} from '../battle-details.js';

test('連続入力や上限変更で描画間隔を飛び越えない',()=>{
 const clock=battlePresentationClock();
 assert.equal(clock.delay(100),0);clock.presented(100);
 assert.ok(clock.delay(133.3)>0);
 for(let i=0;i<10;++i)assert.equal(clock.delay(110),1000/30-10);
 assert.equal(clock.delay(134),0);clock.presented(134);
 clock.set(20);assert.ok(clock.delay(183.9)>0);assert.equal(clock.delay(184),0);
});

test('透明・斜め・加算の前景では省略せず、不透明な内側だけを省略する',()=>{
 const image={width:40,height:40},cut=[0,0,40,40],pixels=new Uint8ClampedArray(40*40*4);
 for(let y=8;y<32;++y)for(let x=8;x<32;++x)pixels[(y*40+x)*4+3]=255;
 const previous=globalThis.document;
 globalThis.document={createElement:()=>({getContext:()=>({drawImage(){},getImageData:()=>({data:pixels})})})};
 try{
  const cull=createActorOcclusion(),quad=(x,y,w,h)=>({texture:0,count:4,blend:0,opacity:1,cut,points:[x,y,x,y+h,x+w,y+h,x+w,y]});
  const back=quad(15,15,10,10),front=quad(0,0,40,40),border=quad(2,2,9,9);
  const omitted=commands=>[...cull(commands,[0,commands.length],()=>image)];
  assert.deepEqual(omitted([border,back,front]),[1]);
  assert.deepEqual(omitted([front,back]),[]);
  assert.deepEqual(omitted([back,{...front,blend:1}]),[]);
  assert.deepEqual(omitted([back,{...front,opacity:.99}]),[]);
  assert.deepEqual(omitted([back,{...front,points:[0,0,-1,40,40,41,41,1]}]),[]);
 }finally{globalThis.document=previous;}
});

test('観測ログはカウントダウンを毎F追加せず、適用・終了とHP差分を残す',()=>{
 const before={action:1,hp:100,retiredFrame:-1,slow:20};
 assert.deepEqual(observedActorChanges(before,{...before,slow:19}),[]);
 assert.deepEqual(observedActorChanges(before,{...before,slow:0,action:3,hp:50}),['待機 → KB','HP 100 → 50','鈍足：終了']);
});
