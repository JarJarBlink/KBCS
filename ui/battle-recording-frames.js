import {createSessionId} from './src/shared/browser/session-id.js';

const chunkSize=512*1024,maxPending=4,maxFrames=108_000,maxBytes=8*1024**3;

async function archiveRequest(id,action,{body,headers,params={},keepalive=false}={}){
 const query=new URLSearchParams({id,action:'png-'+action,...params});
 const response=await fetch('/api/battle-recording?'+query,{method:'POST',body,headers,keepalive,...(keepalive?{}:{signal:AbortSignal.timeout(30_000)})});
 const value=await response.json();
 if(!response.ok)throw Error(value.error||'PNG録画の保存に失敗しました');
 return value;
}

export async function saveFrameArchive(id){return (await archiveRequest(id,'save')).path;}
export function discardFrameArchive(id){return archiveRequest(id,'cancel',{keepalive:true});}

export function recordFrameArchive(canvas,name,onStop,onLimit){
 const id=createSessionId(),started=performance.now();
 let state='recording',pending=0,index=0,pausedAt=0,pauseTime=0,cancelled=false,writtenBytes=0,full=false;
 let failure;
 const opened=archiveRequest(id,'begin',{
  headers:{'Content-Type':'application/json'},body:JSON.stringify({name,width:canvas.width,height:canvas.height}),
 });
 let queue=opened.catch(error=>{failure=error;onLimit(error.message);});
 function capture(){
  if(state!=='recording')return;
  if(index===maxFrames){onLimit('PNG録画の上限に達しました。停止前のフレームを保存できます。');return;}
  if(pending===maxPending){onLimit('PNGの保存が描画に追いつかないため、録画を停止しました。停止前のフレームを保存できます。');return;}
  const time=Math.round((performance.now()-started-pauseTime)*1000),frame=index++;
  // Promiseは常に解決させ、前の書き込み中に次のPNGの生成エラーが通知されても順番に扱う。
  const image=new Promise(resolve=>canvas.toBlob(resolve,'image/png')).catch(()=>null);
  ++pending;
  queue=queue.then(async()=>{
   if(cancelled||failure||full)return;
   const png=await image;if(!png)throw Error('PNGを作成できません');
   if(writtenBytes+png.size>maxBytes){full=true;onLimit('PNG録画の容量上限に達しました。停止前のフレームを保存できます。');return;}
   for(let offset=0;offset<png.size;){
    if(cancelled)return;
    const end=Math.min(offset+chunkSize,png.size);
    const result=await archiveRequest(id,'append',{params:{frame,offset,length:png.size,time},body:await png.slice(offset,end).arrayBuffer(),headers:{'Content-Type':'application/octet-stream'}});
    if(result.written!==end)throw Error('PNGの保存位置が一致しません');
    offset=end;
   }
   writtenBytes+=png.size;
  }).catch(error=>{failure=error;onLimit(error.message);}).finally(()=>{--pending;});
 }
 return {
  get state(){return state;},capture,
  pause(){state='paused';pausedAt=performance.now();},
  resume(){state='recording';pauseTime+=performance.now()-pausedAt;},
  cancel(){cancelled=true;state='inactive';void discardFrameArchive(id).catch(()=>{});void opened.then(()=>discardFrameArchive(id)).catch(()=>{});},
  stop(){
   if(state==='inactive')return;
   state='inactive';
   void queue.then(async()=>{
    if(cancelled)return;
    if(failure)throw failure;
    const {bytes,frames}=await archiveRequest(id,'finish');
    if(!cancelled)onStop({id,name,bytes,frames});
   }).catch(error=>{void discardFrameArchive(id).catch(()=>{});if(!cancelled)onStop(null,error.message);});
  },
 };
}
