const frameMs=1000/30,byteLimit=256*1024*1024;
const formats=['video/webm;codecs=vp8,opus','video/webm','video/mp4'];
const stopTracks=stream=>{for(const track of stream?.getTracks()||[])track.stop();};

export function captureRectangle(a,b,[width,height]){
 const clamp=(value,max)=>Math.min(max,Math.max(0,Math.round(value)));
 const x=clamp(Math.min(a[0],b[0]),width),y=clamp(Math.min(a[1],b[1]),height);
 return [x,y,clamp(Math.max(a[0],b[0]),width)-x,clamp(Math.max(a[1],b[1]),height)-y];
}

function videoSize(width,height){
 const scale=Math.min(1,1280/width,720/height);
 return [width,height].map(n=>Math.max(2,Math.floor(n*scale/2)*2));
}

export function createBattleRecording(){
 const dialog=document.createElement('dialog'),bar=document.createElement('div');
 dialog.className='battle-record-dialog';dialog.setAttribute('aria-label','戦闘の録画設定');
 dialog.innerHTML='<h2>戦闘の録画</h2><label>録画範囲 <select data-source><option value="battle">中央の戦闘画面だけ</option><option value="display">画面共有で範囲を選ぶ</option></select></label><label><input type="checkbox" data-sound checked>戦闘のBGM・効果音を含める</label><p data-help></p><button type="button" data-share>共有する画面を選ぶ</button><div data-preview hidden><div class="battle-record-preview" tabindex="0" aria-label="録画範囲のプレビュー。ドラッグして長方形を指定"><video autoplay muted playsinline></video><div data-outline></div></div><button type="button" data-whole>共有画面全体に戻す</button><output data-region></output></div><p data-status role="status"></p><div class="battle-record-actions"><button type="button" data-start>次の出撃を録画</button><button type="button" data-close>閉じる</button></div>';
 bar.className='battle-record-bar';bar.hidden=true;bar.setAttribute('aria-label','録画の操作');
 bar.innerHTML='<output role="status"></output><button type="button" data-pause>一時停止</button><button type="button" data-end>終了</button><button type="button" data-unarm>予約取消</button><a hidden data-save>動画を保存</a><button type="button" data-hide aria-label="録画操作を隠す">隠す</button>';
 document.body.append(dialog,bar);
 const node=key=>dialog.querySelector('[data-'+key+']'),button=key=>bar.querySelector('[data-'+key+']');
 const source=node('source'),sound=node('sound'),video=dialog.querySelector('video'),preview=video.parentElement,status=node('status'),indicator=bar.querySelector('output');
 let binding,armed=false,share,shareWait,picking=false,selection,drag,dimension,canvas,ctx,session,clipUrl,raf=0,lastSample=-Infinity;
 const canRecord=typeof MediaRecorder==='function'&&typeof HTMLCanvasElement.prototype.captureStream==='function';
 const canShare=typeof navigator.mediaDevices?.getDisplayMedia==='function';
 source.options[1].disabled=!canShare;

 function updateControls(){
  const shown=source.value==='display',configured=shown&&!!dimension&&!!share;
  node('help').textContent=shown?'録画したいウィンドウ・タブを選び、プレビュー上で四角くドラッグします。範囲を選ばなければ共有画面全体を録画します。':'戦闘画面だけを録画します。録画操作や読み込みの文字は入りません。';
  node('share').hidden=!shown;node('share').disabled=picking;
  node('preview').hidden=!configured;
  node('start').disabled=!canRecord||picking||shown&&!configured;
  node('start').textContent=binding?'録画開始':'次の出撃を録画';
 }
 function refreshBar(message){
  if(message!==undefined)indicator.textContent=message;
  document.querySelectorAll('[data-recording]').forEach(btn=>{btn.textContent=armed?'録画予約済み':session?'録画中':clipUrl?'録画・保存':'録画';});
  button('pause').hidden=button('end').hidden=!session||session.recorder.state==='inactive';
  button('pause').textContent=session?.recorder.state==='paused'?'再開':'一時停止';
  button('unarm').hidden=!armed;button('save').hidden=!clipUrl;
 }
 function show(message){bar.hidden=false;refreshBar(message);}
 function releaseShare(){
  const feed=share;share=null;shareWait?.();shareWait=null;dimension=selection=drag=null;video.srcObject=null;stopTracks(feed);
 }
 function unarm(){
  armed=false;releaseShare();show(clipUrl?'保存できる録画があります':'録画の予約を取り消しました');
 }
 function region(){
  const r=selection;
  node('outline').hidden=!r;
  if(r){const [w,h]=dimension;Object.assign(node('outline').style,{left:(r[0]/w*100)+'%',top:(r[1]/h*100)+'%',width:(r[2]/w*100)+'%',height:(r[3]/h*100)+'%'});}
  node('region').textContent=r?r[2]+' × '+r[3]:'共有画面全体';
 }
 function point(event){const box=video.getBoundingClientRect();return [(event.clientX-box.left)*dimension[0]/box.width,(event.clientY-box.top)*dimension[1]/box.height];}
 preview.addEventListener('pointerdown',event=>{if(!dimension||event.button!==0)return;drag=point(event);preview.setPointerCapture(event.pointerId);});
 preview.addEventListener('pointermove',event=>{if(!drag)return;selection=captureRectangle(drag,point(event),dimension);region();});
 preview.addEventListener('pointerup',event=>{if(!drag)return;const area=captureRectangle(drag,point(event),dimension);selection=area[2]>=16&&area[3]>=16?area:null;drag=null;region();});
 preview.addEventListener('pointercancel',()=>{drag=null;selection=null;region();});
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
   dimension=[video.videoWidth,video.videoHeight];updateControls();await video.play();
   if(share===stream){status.textContent='';region();}
  }catch(error){
   if(share===stream)releaseShare();else stopTracks(stream);
   if(error.name!=='AbortError')status.textContent=error.name==='NotAllowedError'?'画面共有を開始できませんでした。中央だけの録画は共有なしで利用できます。':'画面を取得できません：'+error.message;
  }finally{picking=false;updateControls();}
 };
 source.onchange=()=>{releaseShare();status.textContent='';updateControls();};
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
  const shared=source.value==='display',area=shared?(selection?.slice(2)||dimension):binding.size();
  const fromOpening=armed;
  armed=false;
  if(!area){releaseShare();show('録画範囲を選び直してください');return;}
  let stream,audio;
  try{
   canvas=document.createElement('canvas');[canvas.width,canvas.height]=videoSize(...area);
   ctx=canvas.getContext('2d',{alpha:false});ctx.fillStyle='#000';ctx.fillRect(0,0,canvas.width,canvas.height);
   const manual=typeof globalThis.CanvasCaptureMediaStreamTrack?.prototype.requestFrame==='function';
   stream=canvas.captureStream(manual?0:30);
   const track=stream.getVideoTracks()[0];
   if(sound.checked){audio=binding.audio();if(audio)stream.addTrack(audio.track);}
   const mimeType=formats.find(type=>MediaRecorder.isTypeSupported?.(type));
   const recorder=new MediaRecorder(stream,{videoBitsPerSecond:2_500_000,...(mimeType?{mimeType}:{})});
   const active={recorder,stream,audio,shared,requestFrame:manual?()=>track.requestFrame():null,chunks:[],bytes:0,name:binding.name,message:''};session=active;
   recorder.ondataavailable=event=>{
    if(event.data.size){active.chunks.push(event.data);active.bytes+=event.data.size;}
    if(active.bytes>=byteLimit&&recorder.state!=='inactive')finish('保存用メモリの上限に達しました');
   };
   recorder.onerror=()=>{active.message='録画を続けられませんでした';if(recorder.state!=='inactive')finish(active.message);};
   recorder.onstop=()=>{
    stopTracks(active.stream);active.audio?.release();session=null;canvas=ctx=null;releaseShare();
    if(active.chunks.length){
     const type=recorder.mimeType||active.chunks[0].type||'video/webm';
     if(clipUrl)URL.revokeObjectURL(clipUrl);
     clipUrl=URL.createObjectURL(new Blob(active.chunks,{type}));
     button('save').href=clipUrl;button('save').download='KBCS-'+active.name.replace(/[<>:"/\\|?*]/g,'_')+'-'+new Date().toISOString().slice(0,19).replace(/:/g,'-')+(type.startsWith('video/mp4')?'.mp4':'.webm');
    }
    show([active.message,active.chunks.length?'録画を保存できます':'保存できる映像がありません'].filter(Boolean).join('。'));
   };
   recorder.start(1000);lastSample=-Infinity;
   if(fromOpening&&!shared){ctx.fillRect(0,0,canvas.width,canvas.height);active.requestFrame?.();}
   if(shared)raf=requestAnimationFrame(copyShared);else binding.redraw();
   show(sound.checked&&!audio?'録画中（音声なし）':'録画中');
  }catch(error){session=null;canvas=ctx=null;stopTracks(stream);audio?.release();releaseShare();show('録画を開始できません：'+error.message);}
 }
 function finish(message=''){
  const active=session;if(!active||active.recorder.state==='inactive')return;
  active.message=message;cancelAnimationFrame(raf);raf=0;active.recorder.stop();show('録画を保存できる形にしています…');
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
  if(session||armed||clipUrl&&bar.hidden){show();return;}
  status.textContent=canRecord?(canShare?'':'この環境では画面共有を利用できません。中央だけの録画は利用できます。'):'この環境では録画を利用できません。';
  updateControls();dialog.showModal();
 });
 document.addEventListener('keydown',event=>{
  if(!dialog.open&&event.altKey&&event.shiftKey&&event.code==='KeyR'&&(armed||session||clipUrl)){event.preventDefault();bar.hidden=!bar.hidden;}
 });
 window.addEventListener('pagehide',()=>{finish();releaseShare();if(clipUrl)URL.revokeObjectURL(clipUrl);});
 return {
  attach(value){binding=value;if(armed)begin();},
  frame(background,overlay){if(!session?.shared&&sample())try{draw(background,overlay);}catch{finish('戦闘の映像を読み取れませんでした');}},
  detach(){finish();binding=null;},
 };
}
