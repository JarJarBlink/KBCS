import {createSessionId} from './src/shared/browser/session-id.js';

const frameMs=1000/30,byteLimit=256*1024*1024,chunkSize=512*1024,minCapture=16;
const formats={
 webm:['video/webm;codecs=vp9,opus','video/webm;codecs=vp8,opus','video/webm'],
 mp4:['video/mp4;codecs=avc1,mp4a.40.2','video/mp4'],
};
const stopTracks=stream=>{for(const track of stream?.getTracks()||[])track.stop();};
const clamp=(value,min,max)=>Math.min(max,Math.max(min,Math.round(value)));
const megabytes=bytes=>(bytes/1048576).toFixed(1)+' MiB';

export function captureRectangle(a,b,[width,height]){
 const x=clamp(Math.min(a[0],b[0]),0,width),y=clamp(Math.min(a[1],b[1]),0,height);
 return [x,y,clamp(Math.max(a[0],b[0]),0,width)-x,clamp(Math.max(a[1],b[1]),0,height)-y];
}

export function adjustCaptureRectangle([x,y,w,h],[dx,dy],[width,height],edge){
 if(edge==='move')return [clamp(x+dx,0,width-w),clamp(y+dy,0,height-h),w,h];
 const right=x+w,bottom=y+h;
 const left=edge.includes('w')?clamp(x+dx,0,right-minCapture):x;
 const top=edge.includes('n')?clamp(y+dy,0,bottom-minCapture):y;
 return [left,top,(edge.includes('e')?clamp(right+dx,x+minCapture,width):right)-left,
  (edge.includes('s')?clamp(bottom+dy,y+minCapture,height):bottom)-top];
}

export async function saveBattleRecording({blob,name},onProgress,signal){
 const id=createSessionId();
 const path=(action,params={})=>'/api/battle-recording?'+new URLSearchParams({id,action,...params});
 async function request(action,body,headers,params){
  const response=await fetch(path(action,params),{method:'POST',body,headers,signal});
  const value=await response.json().catch(()=>null);
  if(!response.ok||!value)throw Error(value?.error||'保存先から応答がありません（'+response.status+'）');
  return value;
 }
 try{
  await request('begin',JSON.stringify({name,bytes:blob.size}),{'Content-Type':'application/json'});
  for(let offset=0;offset<blob.size;){
   const end=Math.min(offset+chunkSize,blob.size);
   const bytes=await blob.slice(offset,end).arrayBuffer();
   const {written,path:target}=await request('append',bytes,{'Content-Type':'application/octet-stream'},{offset});
   if(written!==end)throw Error('保存された容量が一致しません');
   onProgress(written);
   if(end===blob.size){if(!target)throw Error('保存先を確認できません');return target;}
   offset=end;
  }
 }catch(error){
  void fetch(path('cancel'),{method:'POST',keepalive:true}).catch(()=>{});
  throw error;
 }
}

export function recordingVideoSize(width,height){
 const scale=Math.min(1,3840/width,2160/height);
 return [width,height].map(n=>Math.max(2,Math.floor(n*scale/2)*2));
}

export function recordingVideoBitrate(width,height){
 return clamp(width*height*30*.32,10_000_000,40_000_000);
}

export function createBattleRecording(){
 const dialog=document.createElement('dialog'),result=document.createElement('dialog'),bar=document.createElement('div');
 dialog.className='battle-record-dialog';dialog.setAttribute('aria-label','戦闘の録画設定');
 dialog.innerHTML=`<h2>戦闘の録画</h2>
  <label>録画範囲 <select data-source><option value="battle">中央の戦闘画面だけ</option><option value="display">画面共有で範囲を選ぶ</option></select></label>
  <label>ファイル形式 <select data-format><option value="webm">WebM (.webm)</option><option value="mp4">MP4 (.mp4)</option></select></label>
  <label><input type="checkbox" data-sound checked>戦闘のBGM・効果音を含める</label>
  <p data-help></p><button type="button" data-share>共有する画面を選ぶ</button>
  <div data-preview hidden>
   <div class="battle-record-preview" tabindex="0" aria-label="録画範囲のプレビュー。ドラッグで範囲を指定し、矢印キーで枠を移動">
    <video autoplay muted playsinline></video><div data-outline hidden>${['nw','n','ne','e','se','s','sw','w'].map(edge=>`<span data-edge="${edge}"></span>`).join('')}</div>
   </div>
   <div class="battle-record-range"><output data-region></output><button type="button" data-whole>全体に戻す</button></div>
  </div>
  <p data-status role="status"></p><div class="battle-record-actions"><button type="button" data-close>閉じる</button><button type="button" data-start>次の出撃を録画</button></div>`;
 result.className='battle-record-dialog battle-record-result';result.setAttribute('aria-labelledby','battle-record-result-title');
 result.innerHTML=`<h2 id="battle-record-result-title">録画を終了しました</h2>
  <p data-summary></p><progress data-progress aria-label="動画の保存進捗" hidden></progress>
  <p data-status role="status" aria-live="polite"></p><p data-path hidden></p>
  <div class="battle-record-actions"><button type="button" data-discard hidden>破棄</button><button type="button" data-later>後で</button><button type="button" data-save>動画を保存</button></div>`;
 bar.className='battle-record-bar';bar.hidden=true;bar.setAttribute('aria-label','録画の操作');
 bar.innerHTML='<output role="status"></output><button type="button" data-pause>一時停止</button><button type="button" data-end>終了</button><button type="button" data-unarm>予約取消</button><button type="button" data-hide aria-label="録画操作を隠す">隠す</button>';
 document.body.append(dialog,result,bar);
 const node=key=>dialog.querySelector('[data-'+key+']'),button=key=>bar.querySelector('[data-'+key+']'),resultNode=key=>result.querySelector('[data-'+key+']');
 const source=node('source'),format=node('format'),sound=node('sound'),video=dialog.querySelector('video'),preview=video.parentElement,outline=node('outline'),status=node('status'),indicator=bar.querySelector('output');
 const heading=result.querySelector('h2'),progress=resultNode('progress'),save=resultNode('save'),later=resultNode('later'),discard=resultNode('discard'),saveStatus=resultNode('status'),pathField=resultNode('path');
 let binding,armed=false,share,shareWait,picking=false,selection,drag,dimension,canvas,ctx,session,clip,saving,raf=0,lastSample=-Infinity,leaving=false;
 const encoding=new Map();
 for(const option of format.options){
  const supported=typeof globalThis.MediaRecorder?.isTypeSupported==='function'&&formats[option.value].find(type=>MediaRecorder.isTypeSupported(type));
  option.disabled=!supported;
  if(supported)encoding.set(option.value,supported);
 }
 format.value=encoding.keys().next().value??'';
 const canRecord=encoding.size>0&&typeof HTMLCanvasElement.prototype.captureStream==='function';
 const canShare=typeof navigator.mediaDevices?.getDisplayMedia==='function';
 source.options[1].disabled=!canShare;

 function updateControls(){
  const shown=source.value==='display',configured=shown&&!!dimension&&!!share;
  dialog.classList.toggle('battle-record-share',shown);
  node('help').textContent=configured?'ドラッグで範囲を指定します。枠を移動したり、縁のハンドルで大きさを変えたりできます。':shown?'録画するウィンドウまたはタブを選びます。':'戦闘盤面とHUDを録画します。';
  node('share').hidden=!shown;node('share').disabled=picking;
  node('preview').hidden=!configured;
  node('start').disabled=!canRecord||!encoding.has(format.value)||picking||shown&&!configured;
  node('start').textContent=binding?'録画開始':'次の出撃を録画';
 }
 function refreshBar(message){
  if(message!==undefined)indicator.textContent=message;
  document.querySelectorAll('[data-recording]').forEach(btn=>{btn.textContent=armed?'録画予約済み':session?'録画中':clip&&!clip.path?'録画を保存':'録画';});
  button('pause').hidden=button('end').hidden=!session||session.recorder.state==='inactive';
  button('pause').textContent=session?.recorder.state==='paused'?'再開':'一時停止';
  button('unarm').hidden=!armed;
 }
 function show(message){bar.hidden=false;refreshBar(message);}
 function openResult(){if(!leaving&&!result.open)result.showModal();}
 function renderResult(message=''){
  const pending=Boolean(clip&&!clip.path),preparing=Boolean(session);
  heading.textContent=preparing?'録画を仕上げています…':saving?'動画を保存しています':clip?.path?'動画を保存しました':'録画を終了しました';
  resultNode('summary').textContent=pending?clip.name+'（'+megabytes(clip.blob.size)+'）':clip?.path?'ダウンロードフォルダーに保存しました。':'';
  progress.hidden=!preparing&&!saving&&!clip?.path;
  if(preparing)progress.removeAttribute('value');
  save.hidden=!pending;save.disabled=Boolean(saving);save.textContent=saving?'保存中…':'動画を保存';
  discard.hidden=!pending;discard.disabled=Boolean(saving);
  later.disabled=preparing||Boolean(saving);later.textContent=pending?'後で':'閉じる';
  saveStatus.textContent=message||(!saving&&pending?'ダウンロードフォルダーに保存できます。':'');
  pathField.hidden=!clip?.path;pathField.textContent=clip?.path||'';
 }
 save.onclick=async()=>{
  if(!clip||clip.path||saving)return;
  const current=clip,total=current.blob.size;
  const controller=new AbortController();saving=controller;
  let timeout;
  function waitForWrite(){
   clearTimeout(timeout);timeout=setTimeout(()=>controller.abort(Error('保存先の応答がタイムアウトしました')),30000);
  }
  progress.max=total;progress.value=0;
  renderResult('保存中 0%（0.0 / '+megabytes(total)+'）');
  waitForWrite();
  try{
   current.path=await saveBattleRecording(current,written=>{
    progress.value=written;
    saveStatus.textContent='保存中 '+Math.floor(written*100/total)+'%（'+megabytes(written)+' / '+megabytes(total)+'）';
    waitForWrite();
   },controller.signal);
   current.blob=null;saving=null;renderResult();refreshBar();later.focus();
  }catch(error){saving=null;renderResult('保存できませんでした。'+(controller.signal.reason||error).message);save.focus();}
  finally{clearTimeout(timeout);}
 };
 later.onclick=()=>result.close();
 discard.onclick=()=>{clip=null;result.close();refreshBar();};
 result.addEventListener('cancel',event=>{if(later.disabled)event.preventDefault();});
 function releaseShare(){
  const feed=share;share=null;shareWait?.();shareWait=null;dimension=selection=drag=null;video.srcObject=null;stopTracks(feed);
 }
 function unarm(){
  armed=false;releaseShare();bar.hidden=true;refreshBar('録画の予約を取り消しました');
 }
 function region(){
  const r=selection;
  outline.hidden=!r;
  outline.classList.toggle('is-drawing',drag?.edge==='new');
  if(r){const [w,h]=dimension;Object.assign(outline.style,{left:(r[0]/w*100)+'%',top:(r[1]/h*100)+'%',width:(r[2]/w*100)+'%',height:(r[3]/h*100)+'%'});}
  const [w,h]=r?r.slice(2):dimension;
  node('region').textContent=(r?'選択範囲':'共有画面全体')+'　'+w+' × '+h+' px';
  node('whole').disabled=!r;
 }
 function point(event){const box=video.getBoundingClientRect();return [(event.clientX-box.left)*dimension[0]/box.width,(event.clientY-box.top)*dimension[1]/box.height];}
 function pointerArea(event){
  const [x,y]=point(event),[startX,startY]=drag.origin;
  return drag.edge==='new'?captureRectangle(drag.origin,[x,y],dimension):adjustCaptureRectangle(drag.previous,[x-startX,y-startY],dimension,drag.edge);
 }
 preview.addEventListener('pointerdown',event=>{
  if(!dimension||drag||event.button!==0)return;
  drag={origin:point(event),id:event.pointerId,edge:event.target.dataset.edge||(outline.contains(event.target)?'move':'new'),previous:selection};
  preview.focus({preventScroll:true});preview.setPointerCapture(event.pointerId);
 });
 preview.addEventListener('pointermove',event=>{if(drag?.id===event.pointerId){selection=pointerArea(event);region();}});
 preview.addEventListener('pointerup',event=>{
  if(drag?.id!==event.pointerId)return;
  const area=pointerArea(event);selection=area[2]>=minCapture&&area[3]>=minCapture?area:drag.previous;drag=null;region();
 });
 function cancelDrag(event){if(drag?.id===event.pointerId){selection=drag.previous;drag=null;region();}}
 preview.addEventListener('pointercancel',cancelDrag);preview.addEventListener('lostpointercapture',cancelDrag);
 preview.addEventListener('keydown',event=>{
  const direction={ArrowUp:[0,-1],ArrowDown:[0,1],ArrowLeft:[-1,0],ArrowRight:[1,0]}[event.key];
  if(!selection||drag||!direction)return;
  event.preventDefault();selection=adjustCaptureRectangle(selection,direction.map(v=>v*(event.shiftKey?10:1)),dimension,'move');region();
 });
 node('whole').onclick=()=>{selection=null;region();};
 node('share').onclick=async()=>{
  if(!canShare||picking)return;
  picking=true;status.textContent='共有画面を選択してください';updateControls();
  let stream;
  try{
   stream=await navigator.mediaDevices.getDisplayMedia({video:{frameRate:{ideal:30,max:30}},audio:false});
   if(!dialog.open||source.value!=='display'){stopTracks(stream);return;}
   releaseShare();share=stream;
   const track=share.getVideoTracks()[0];
   track.addEventListener('ended',()=>{if(share!==stream)return;if(session)finish('画面共有が終了しました');else if(armed)unarm();else{releaseShare();status.textContent='共有が終了しました';updateControls();}},{once:true});
   video.srcObject=share;
   if(video.readyState<1)await new Promise((resolve,reject)=>{
    const loaded=()=>done(),timer=setTimeout(()=>done(Error('共有画面の読み込みがタイムアウトしました')),8000);
    function done(error){clearTimeout(timer);video.removeEventListener('loadedmetadata',loaded);shareWait=null;if(error)reject(error);else resolve();}
    shareWait=()=>done(new DOMException('共有を取り消しました','AbortError'));
    video.addEventListener('loadedmetadata',loaded,{once:true});
   });
   if(share!==stream)return;
   dimension=[video.videoWidth,video.videoHeight];updateControls();region();await video.play();
   if(share===stream){status.textContent='';region();}
  }catch(error){
   if(share===stream)releaseShare();else stopTracks(stream);
   if(error.name!=='AbortError')status.textContent=error.name==='NotAllowedError'?'画面共有を開始できませんでした。中央だけの録画は共有なしで利用できます。':'画面を取得できません：'+error.message;
  }finally{picking=false;updateControls();}
 };
 source.onchange=()=>{releaseShare();status.textContent='';updateControls();};
 format.onchange=updateControls;
 node('close').onclick=()=>dialog.close();
 dialog.addEventListener('close',()=>{if(!armed&&!session)releaseShare();});
 node('start').onclick=()=>{
  if(binding)begin();
  else{armed=true;show('次の出撃を暗転から録画します');}
  dialog.close();
 };

 function draw(sourceCanvas,overlay,rect=[0,0,sourceCanvas.width,sourceCanvas.height]){
  const [x,y,width,height]=rect;
  const scale=Math.min(canvas.width/width,canvas.height/height),w=width*scale,h=height*scale,left=(canvas.width-w)*.5,top=(canvas.height-h)*.5;
  ctx.fillStyle='#000';ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.drawImage(sourceCanvas,x,y,width,height,left,top,w,h);
  if(overlay)ctx.drawImage(overlay,left,top,w,h);
  session?.requestFrame?.();
 }
 function sample(now=performance.now()){
  if(session?.recorder.state!=='recording'||now-lastSample<frameMs)return false;
  lastSample=now;return true;
 }
 function copyShared(now){
  raf=0;if(!session||session.recorder.state==='inactive')return;
  if(video.readyState>=2&&sample(now)){
   const [w,h]=dimension,rect=selection&&[selection[0]*video.videoWidth/w,selection[1]*video.videoHeight/h,selection[2]*video.videoWidth/w,selection[3]*video.videoHeight/h];
   try{draw(video,null,rect||[0,0,video.videoWidth,video.videoHeight]);}
   catch{finish('共有した映像を読み取れませんでした');return;}
  }
  raf=requestAnimationFrame(copyShared);
 }
 function begin(){
  if(session||!binding||!canRecord)return;
  const shared=source.value==='display',area=shared?(selection?.slice(2)||dimension):binding.size(),extension=format.value,mimeType=encoding.get(extension);
  const fromOpening=armed;
  armed=false;
  if(!area){releaseShare();show('録画範囲を選び直してください');return;}
  let stream,audio;
  try{
   canvas=document.createElement('canvas');[canvas.width,canvas.height]=recordingVideoSize(...area);
   ctx=canvas.getContext('2d',{alpha:false});ctx.fillStyle='#000';ctx.fillRect(0,0,canvas.width,canvas.height);
   ctx.imageSmoothingQuality='high';
   const manual=typeof globalThis.CanvasCaptureMediaStreamTrack?.prototype.requestFrame==='function';
   stream=canvas.captureStream(manual?0:30);
   const track=stream.getVideoTracks()[0];
   if(sound.checked){audio=binding.audio();if(audio)stream.addTrack(audio.track);}
   const recorder=new MediaRecorder(stream,{mimeType,videoBitsPerSecond:recordingVideoBitrate(canvas.width,canvas.height),...(audio?{audioBitsPerSecond:192_000}:{})});
   const active={recorder,stream,audio,shared,requestFrame:manual?()=>track.requestFrame():null,chunks:[],bytes:0,name:binding.name,message:''};session=active;
   recorder.ondataavailable=event=>{
    if(event.data.size){active.chunks.push(event.data);active.bytes+=event.data.size;}
    if(active.bytes>=byteLimit&&recorder.state!=='inactive')finish('保存用メモリの上限に達しました');
   };
   recorder.onerror=()=>{active.message='録画を続けられませんでした';if(recorder.state!=='inactive')finish(active.message);};
   recorder.onstop=()=>{
    stopTracks(active.stream);active.audio?.release();session=null;canvas=ctx=null;releaseShare();
    clip=null;
    if(active.chunks.length){
     const type=recorder.mimeType||mimeType;
     const stage=active.name.replace(/[^a-zA-Z0-9_-]/g,'_').slice(0,80);
     const time=new Date().toISOString().slice(0,19).replace(/:/g,'-');
     clip={blob:new Blob(active.chunks,{type}),name:'KBCS-'+stage+'-'+time+'.'+extension};
    }
    active.chunks.length=0;bar.hidden=true;refreshBar();
    renderResult(active.message||(!clip?'保存できる映像がありません。':''));openResult();
   };
   recorder.start(1000);lastSample=-Infinity;
   if(fromOpening&&!shared){ctx.fillRect(0,0,canvas.width,canvas.height);active.requestFrame?.();}
   if(shared)raf=requestAnimationFrame(copyShared);else binding.redraw();
   show(sound.checked&&!audio?'録画中（音声なし）':'録画中');
  }catch(error){session=null;canvas=ctx=null;stopTracks(stream);audio?.release();releaseShare();show('録画を開始できません：'+error.message);}
 }
 function finish(message=''){
  const active=session;if(!active||active.recorder.state==='inactive')return;
  active.message=message;cancelAnimationFrame(raf);raf=0;active.recorder.stop();
  clip=null;bar.hidden=true;renderResult();openResult();
 }
 button('pause').onclick=()=>{
  const recorder=session?.recorder;if(recorder?.state==='recording'){recorder.pause();cancelAnimationFrame(raf);raf=0;show('録画一時停止中');}
  else if(recorder?.state==='paused'){recorder.resume();lastSample=-Infinity;if(session.shared)raf=requestAnimationFrame(copyShared);else binding?.redraw();show('録画中');}
 };
 button('end').onclick=()=>finish();
 button('unarm').onclick=unarm;
 button('hide').onclick=()=>{bar.hidden=true;};
 document.addEventListener('click',event=>{
  if(!event.target.closest('[data-recording]'))return;
  if(session||armed){if(session?.recorder.state==='inactive')openResult();else show();return;}
  if(clip&&!clip.path){openResult();return;}
  status.textContent=canRecord?(canShare?'':'この環境では画面共有を利用できません。中央だけの録画は利用できます。'):'この環境では録画を利用できません。';
  updateControls();dialog.showModal();
 });
 document.addEventListener('keydown',event=>{
  if(dialog.open||result.open||!event.altKey||!event.shiftKey||event.code!=='KeyR')return;
  if(armed||session){event.preventDefault();bar.hidden=!bar.hidden;}
  else if(clip&&!clip.path){event.preventDefault();openResult();}
 });
 window.addEventListener('pagehide',()=>{leaving=true;saving?.abort();finish();releaseShare();});
 window.addEventListener('pageshow',()=>{leaving=false;});
 return {
  attach(value){binding=value;if(armed)begin();},
  frame(background,overlay){if(!session?.shared&&sample())try{draw(background,overlay);}catch{finish('戦闘の映像を読み取れませんでした');}},
  detach(){finish();binding=null;},
 };
}
