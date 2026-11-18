export function createBattleDisplay({controls,details,enemies,allies,setLarge,key,keyup,blur,recording}){
 const native=typeof window.ipc?.postMessage==='function';
 const send=(action,fields)=>window.ipc.postMessage('kbcs:battle-display:'+JSON.stringify({action,...fields}));
 const dialog=document.createElement('dialog');dialog.className='battle-display-dialog';
 dialog.innerHTML=`<form><h2>戦闘を全画面で表示</h2>
  <label>戦闘画面<select data-screen></select></label>
  <label>操作盤・敵と味方の一覧・詳細<select data-tools></select></label>
  <p data-status role="status"></p><div><button type="button" data-close>閉じる</button><button type="submit" disabled>全画面にする</button></div></form>`;
 document.body.append(dialog);
 const screen=dialog.querySelector('[data-screen]'),toolScreen=dialog.querySelector('[data-tools]');
 const status=dialog.querySelector('[data-status]'),submit=dialog.querySelector('[type=submit]'),close=dialog.querySelector('[data-close]');
 const controller=new AbortController(),options={signal:controller.signal};
 let fullscreen=false,pending=false,opening=0,child,dock=[],restoreShelf;
 let monitors=[];
 function updateToolScreens(){
  const selected=toolScreen.value;
  toolScreen.replaceChildren(new Option('別ウィンドウを開かない',''),...monitors.filter(monitor=>String(monitor.id)!==screen.value).map(monitor=>new Option(monitor.label,monitor.id)));
  if([...toolScreen.options].some(option=>option.value===selected))toolScreen.value=selected;
 }
 screen.onchange=updateToolScreens;
 close.onclick=()=>dialog.close();
 dialog.addEventListener('cancel',event=>{if(pending)event.preventDefault();},options);
 function request(){
  if(fullscreen||pending)return;
  if(native){submit.disabled=true;status.textContent='モニターを確認しています';dialog.showModal();send('list');return;}
  const element=document.documentElement;
  (element.requestFullscreen?.()??Promise.reject()).then(()=>{if(controller.signal.aborted){document.exitFullscreen().catch(()=>{});return;}fullscreen=true;setLarge(true);}).catch(()=>{
   if(controller.signal.aborted)return;
   for(const label of dialog.querySelectorAll('label'))label.hidden=true;
   submit.hidden=true;status.textContent='全画面表示を利用できません';dialog.showModal();
  });
 }
 dialog.querySelector('form').onsubmit=event=>{
  event.preventDefault();if(!native||submit.disabled)return;
  pending=true;submit.disabled=close.disabled=true;status.textContent='全画面に切り替えています';
  send('enter',{battle:screen.value===''?null:Number(screen.value),tools:toolScreen.value===''?null:Number(toolScreen.value)});
 };
 function undock(){
  clearTimeout(opening);opening=0;
  for(const [node,anchor] of dock)anchor.replaceWith(node);
  dock=[];restoreShelf?.();restoreShelf=null;child=null;
 }
 function leave(){
  if(!fullscreen&&!pending){setLarge(false);return;}
  undock();fullscreen=pending=false;
  if(native)send('leave');else if(document.fullscreenElement)document.exitFullscreen().catch(()=>{});
  setLarge(false);
 }
 function mountTools(popup){
  const target=popup.document;
  target.title='KBCS 戦闘操作盤';target.documentElement.lang='ja';
  if(document.documentElement.dataset.theme)target.documentElement.dataset.theme=document.documentElement.dataset.theme;
  for(const link of document.querySelectorAll('link[rel=stylesheet]')){
   const stylesheet=target.createElement('link');stylesheet.rel='stylesheet';stylesheet.href=link.href;target.head.append(stylesheet);
  }
  target.body.className='battle-tools-window';
  target.body.innerHTML='<header><h1>戦闘操作盤</h1><button type="button">通常表示に戻る</button></header><main><div data-tools-controls></div><div class="battle-tools-actors"><section><h2>敵</h2></section><section><h2>味方</h2></section></div><div data-tools-details></div></main>';
  target.querySelector('header button').onclick=restore;
  const shelf=details.closest('details');
  if(shelf){const wasOpen=shelf.open;shelf.open=true;restoreShelf=()=>{shelf.open=wasOpen;};}
  const sections=target.querySelectorAll('.battle-tools-actors section');
  // DOMごと移動し、一覧・描画・設定の状態とイベントをそのまま使う。
  for(const [node,destination] of [[controls,target.querySelector('[data-tools-controls]')],[enemies,sections[0]],[allies,sections[1]],[details,target.querySelector('[data-tools-details]')]]){
   const anchor=document.createComment('戦闘パネル');node.before(anchor);dock.push([node,anchor]);destination.append(node);
  }
  controls.querySelector('[data-debug=fullscreen]').hidden=true;
  controls.querySelector('[data-debug=large]').hidden=true;
  popup.addEventListener('keydown',key,true);popup.addEventListener('keyup',keyup);popup.addEventListener('blur',blur);
  target.addEventListener('click',event=>{if(event.target.closest('[data-recording]')){send('focus');recording?.open();}});
  send('show_tools');
 }
 function restore(){
  leave();controls.querySelector('[data-debug=fullscreen]').hidden=false;controls.querySelector('[data-debug=large]').hidden=false;
 }
 function openTools(){
  child=window.open('about:blank','kbcs-battle-tools','popup');
  const deadline=performance.now()+4000;
  function connect(){
   try{if(child&&!child.closed&&child.document.body){mountTools(child);return;}}catch{undock();}
   if(performance.now()<deadline){opening=setTimeout(connect,50);return;}
   restore();status.textContent='操作盤のウィンドウを開けませんでした';submit.disabled=false;dialog.showModal();
  }
  connect();
 }
 window.addEventListener('kbcs:display',({detail})=>{
  if(detail.action==='list'){
   if(!dialog.open)return;
   monitors=detail.monitors.map((monitor,index)=>({...monitor,label:(index+1)+' · '+(monitor.name||'モニター')+' ('+monitor.width+'×'+monitor.height+')'}));
   screen.replaceChildren(...monitors.map(monitor=>new Option(monitor.label,monitor.id)));
   screen.value=monitors.find(monitor=>monitor.current)?.id??monitors[0]?.id??'';
   screen.disabled=!monitors.length;updateToolScreens();toolScreen.disabled=monitors.length<2;status.textContent='';submit.disabled=false;
  }else if(detail.action==='entered'&&pending){
   fullscreen=true;pending=false;close.disabled=false;dialog.close();setLarge(true);if(detail.tools)openTools();
  }else if(detail.action==='error'){
   pending=false;status.textContent=detail.message;submit.disabled=close.disabled=false;
  }else if(detail.action==='closed'&&fullscreen)restore();
 },options);
 document.addEventListener('fullscreenchange',()=>{if(fullscreen&&!native&&!document.fullscreenElement)restore();},options);
 return {request,leave:restore,stop(){if(fullscreen||pending)restore();controller.abort();dialog.remove();}};
}
