// SEの選択・終了後の抑止はC++で確定する。音源の取得で戦闘時計を止めない。
export function createBattleSounds(errors,settings=[],{preloadedOnly=false,version=''}={}){
 const context=new AudioContext(),gain=context.createGain(),buffers=new Map(),voices=new Map(),controller=new AbortController();
 const sequences=new Map(),pendingVoices=new Map(),stops=new WeakMap();
 let music,mediaSource,capture;
 function connectMusic(){
  if(!music||mediaSource||context.state!=='running')return;
  try{
   mediaSource=context.createMediaElementSource(music);mediaSource.connect(context.destination);
   if(capture)mediaSource.connect(capture);
  }catch{}
 }
 function stopVoice(source,when){if(when<(stops.get(source)??Infinity)){source.stop(when);stops.set(source,when);}}
 gain.connect(context.destination);let closed=false,generation=0,finished=false,muted=false,paused=false;
 async function buffer(id){
  if(!buffers.has(id))buffers.set(id,(async()=>{
   const response=await fetch('/api/stage-audio/'+id+version,{signal:controller.signal});
   if(!response.ok){const result=await response.json();throw Error(result.error||'SE '+id);}
   const data=await context.decodeAudioData(await response.arrayBuffer());errors.delete('SE '+id);return data;
  })().catch(error=>{if(error.name!=='AbortError'&&!closed)errors.set('SE '+id,error.message);return null;}));
  return buffers.get(id);
 }
 return {
  setMusic(audio){mediaSource?.disconnect();mediaSource=null;music=audio;if(capture)connectMusic();},
  recordAudio(){
   if(closed||capture)return null;
   const destination=context.createMediaStreamDestination();capture=destination;
   gain.connect(destination);
   const release=()=>{
    if(capture!==destination)return;
    if(!closed){gain.disconnect(destination);if(mediaSource)try{mediaSource.disconnect(destination);}catch{}}
    capture=null;
    for(const track of destination.stream.getTracks())track.stop();
   };
   try{if(mediaSource)mediaSource.connect(destination);else{connectMusic();context.resume().then(()=>{if(capture===destination)connectMusic();}).catch(()=>{});}}
   catch{gain.disconnect(destination);capture=null;for(const track of destination.stream.getTracks())track.stop();return null;}
   return {track:destination.stream.getAudioTracks()[0],release};
  },
  preload(ids,report){let next=0,done=0;return Promise.all(Array.from({length:Math.min(4,ids.length)},async()=>{while(!closed&&next<ids.length){await buffer(ids[next++]);report?.('効果音',++done,ids.length);}}));},
  update(events,level,speed=1,hostPaused=false,ended=false){
   if(closed)return;
   gain.gain.value=[0,.25,.5,1][level];
   // 未デコードの古い通知が、終了音やミュート解除の後へ遅れて混入するのを防ぐ。
   // 00459bb4(-1)はBGMだけを停止するため、既に鳴っているSEは終了時に切らない。
   if((ended&&!finished)||(!level&&!muted)||(hostPaused&&!paused)){++generation;sequences.clear();}
   finished=ended;muted=!level;paused=hostPaused;
   if(!events.length)return;
   if(!paused&&!muted)context.resume().catch(()=>{});
   const token=generation,origin=context.currentTime,first=events[0].frame;
   // 00459170のプレイヤーは音源別。未取得の別のSEでボタン音まで待たせない。
   for(const event of events){
    const when=origin+(event.frame-first)/(30*speed),id=event.id<0?~event.id:event.id;
    // 個別停止は音源取得待ちにも適用する。後から取得できたビーム音を再開させない。
    if(event.id<0){
     const previous=voices.get(id);if(previous)stopVoice(previous,Math.max(context.currentTime,when));
     for(const waiting of pendingVoices.get(id)||[])waiting.stopAt=when;
     continue;
    }
    if(paused||muted)continue;
    const waiting={stopAt:Infinity},waitingSet=pendingVoices.get(id)||new Set();
    waitingSet.add(waiting);pendingVoices.set(id,waitingSet);
    const pending=preloadedOnly?buffers.get(event.id):buffer(event.id);
    const sequence=(sequences.get(event.id)||Promise.resolve()).then(async()=>{
     const data=await pending;if(!data||closed||token!==generation||context.currentTime>=waiting.stopAt)return;
     const when=Math.max(context.currentTime,origin+(event.frame-first)/(30*speed));
     const previous=voices.get(event.id);if(previous)stopVoice(previous,when);
     const source=context.createBufferSource();source.buffer=data;source.loop=!!settings[event.id]?.loop;
     source.connect(gain);voices.set(event.id,source);
     source.onended=()=>{if(voices.get(event.id)===source)voices.delete(event.id);source.disconnect();};
     source.start(when);
     if(Number.isFinite(waiting.stopAt))stopVoice(source,waiting.stopAt);
    }).catch(error=>{if(!closed)errors.set('SE',error.message);});
    sequences.set(event.id,sequence);
    sequence.finally(()=>{waitingSet.delete(waiting);if(!waitingSet.size&&pendingVoices.get(id)===waitingSet)pendingVoices.delete(id);if(sequences.get(event.id)===sequence)sequences.delete(event.id);});
   }
  },
  stop(){if(closed)return;closed=true;++generation;controller.abort();for(const source of voices.values())source.stop();voices.clear();buffers.clear();sequences.clear();pendingVoices.clear();context.close().catch(()=>{});},
 };
}
