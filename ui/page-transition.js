// 本文の初回描画より前に、読み込みとページ遷移を設定する。
(()=>{
 if(window.top!==window)return;
 const page=location.pathname.replace(/\/(?:index\.html)?$/,'');
 const params=new URLSearchParams(location.search);
 const mapKey=params.get('map')||(params.has('id')?null:'N000');

 // 画面モジュールと並行して、ステージの最初の応答を受け取る。
 if(location.protocol==='http:'||location.protocol==='https:'){
  const data=page==='/pages/stage-detail'&&mapKey?'/api/stages?'+new URLSearchParams({map:mapKey}):null;
  if(data){
   const link=document.createElement('link');
   link.rel='preload';
   link.as='fetch';
   link.crossOrigin='anonymous';
   link.href=data;
   document.head.append(link);
  }
 }
 if(!('PageSwapEvent' in window&&'PageRevealEvent' in window))return;

 const root=document.documentElement,nav=window.navigation;
 const motion=matchMedia('(prefers-reduced-motion: no-preference)');
 const handoffKey='kbcs:page-transition';
 const loadingImage='/images/brand/loading-center.png';
 const duration=180;
 const sides=['left','right'];
 const editor=()=>document.querySelector('#workspace-body:not(.workspace-battle) > .workspace-editor');
 const panel=side=>document.querySelector('.workspace-'+side+':not([hidden]) > .workspace-panel-content');
 const direction=(from,to,fallback='forward')=>from?.index>=0&&to?.index>=0?(to.index<from.index?'back':'forward'):fallback;
 let outgoing,requested='forward',contentReady;
 let ready=new Promise(resolve=>window.addEventListener('load',resolve,{once:true}));
 if(['/pages/stage-search','/pages/stage-detail','/pages/stage-sortie'].includes(page)){
  ready=new Promise(resolve=>{contentReady=resolve;});
  document.addEventListener('kbcs:stage-page-ready',contentReady,{once:true});
 }

 function showLoader(target,phase,way){
  const loader=document.createElement('div');
  loader.className='workspace-page-loader';
  loader.setAttribute('role','status');
  loader.innerHTML='<img src="'+loadingImage+'" alt=""><span>読み込み中…</span>';
  target.dataset.kbcsSlide=phase;
  root.dataset.kbcsPageDirection=way;
  target.append(loader);
  return ()=>{
   if(!loader.isConnected)return;
   loader.remove();
   delete target.dataset.kbcsSlide;
   delete root.dataset.kbcsPageDirection;
  };
 }

 // ステージ一覧はデータ取得前でも URL から内容を区別できる。
 function signature(target){
  const stageNavigation=target.querySelector('#stage-navigation');
  let markup=target.innerHTML;
  if(stageNavigation)markup=markup.replace(stageNavigation.outerHTML,mapKey||params.get('id'));
  let hash=0;
  for(let index=0;index<markup.length;index++)hash=(Math.imul(hash,31)+markup.charCodeAt(index))|0;
  return hash;
 }

 document.addEventListener('DOMContentLoaded',()=>{
  if(editor()&&motion.matches)new Image().src=loadingImage;
 },{once:true});
 document.addEventListener('click',event=>{
  requested=event.target.closest?.('[data-page-back]')?'back':'forward';
 },true);

 function resetOutgoing(){
  outgoing?.clear();
  outgoing=null;
 }
 nav?.addEventListener('navigate',event=>{
  if(event.destination.sameDocument||event.navigationType==='reload'||event.downloadRequest||
      !motion.matches||outgoing)return;
  const destination=new URL(event.destination.url);
  if(destination.protocol!==location.protocol||destination.host!==location.host)return;
  if(destination.pathname==='/pages/stage-sortie/'&&destination.searchParams.get('phone')==='1')return;
  const target=editor();
  if(!target||target.dataset.kbcsSlide)return;
  const way=event.navigationType==='traverse'?direction(nav.currentEntry,event.destination,requested):'forward';
  const clear=showLoader(target,'leave',way);
  outgoing={clear,start:performance.now()};
  event.signal.addEventListener('abort',resetOutgoing,{once:true});
 });

 window.addEventListener('pageswap',({viewTransition,activation})=>{
  const elapsed=outgoing?Math.min(duration,performance.now()-outgoing.start):0;
  resetOutgoing();
  if(!viewTransition)return;
  const target=editor();
  if(!target){viewTransition.skipTransition();return;}
  const way=activation?.navigationType==='traverse'?direction(activation.from,activation.entry,requested):'forward';
  const signatures={};
  target.style.viewTransitionName='kbcs-page';
  for(const side of sides){
   const content=panel(side);
   if(content){
    signatures[side]=signature(content);
    content.style.viewTransitionName='kbcs-'+side;
   }
  }
  viewTransition.finished.then(()=>{
   target.style.removeProperty('view-transition-name');
   for(const side of sides)panel(side)?.style.removeProperty('view-transition-name');
  });
  try{sessionStorage.setItem(handoffKey,JSON.stringify({way,elapsed,signatures}));}catch{}
 });

 window.addEventListener('pagereveal',({viewTransition})=>{
  let handoff;
  try{
   handoff=JSON.parse(sessionStorage.getItem(handoffKey));
   sessionStorage.removeItem(handoffKey);
  }catch{}
  if(!viewTransition)return;
  const target=editor();
  if(!target||!handoff){viewTransition.skipTransition();return;}
  const clear=showLoader(target,'loading',handoff.way);
  target.style.viewTransitionName='kbcs-page';
  root.style.setProperty('--kbcs-slide-elapsed','-'+handoff.elapsed+'ms');
  let stageNavigation;
  for(const side of sides){
   if(!(side in handoff.signatures))continue;
   const content=panel(side);
   if(!content)continue;
   content.style.viewTransitionName='kbcs-'+side;
   const changed=signature(content)!==handoff.signatures[side];
   root.toggleAttribute('data-kbcs-'+side+'-changed',changed);
   if(changed&&side==='left'&&page==='/pages/stage-detail'){
    stageNavigation=content;
    stageNavigation.dataset.kbcsPanelWaiting='';
   }
  }
  // 先に画像を中央へ入れ、表示に必要なデータが届いてから画像ごと送り出す。
  const captured=viewTransition.finished.then(()=>{
   target.style.removeProperty('view-transition-name');
   root.style.removeProperty('--kbcs-slide-elapsed');
   for(const side of sides){
    panel(side)?.style.removeProperty('view-transition-name');
    root.removeAttribute('data-kbcs-'+side+'-changed');
   }
  });
  const finish=()=>{
   if(target.dataset.kbcsSlide==='loading'){
    target.dataset.kbcsSlide='enter';
    revealSidebar();
    setTimeout(clear,duration);
   }
  };
  function revealSidebar(){
   if(!stageNavigation)return;
   delete stageNavigation.dataset.kbcsPanelWaiting;
   stageNavigation.animate([{transform:'translateY(100%)'},{transform:'none'}],
     {duration,easing:'cubic-bezier(.25,.7,.25,1)'});
  }
  void Promise.all([captured,ready]).then(finish);
  // 読み込み中に別ページへ進んだ場合は、キャッシュに読み込み画面を残さない。
  window.addEventListener('pagehide',()=>{
   clear();
   if(stageNavigation)delete stageNavigation.dataset.kbcsPanelWaiting;
  },{once:true});
 });
})();
