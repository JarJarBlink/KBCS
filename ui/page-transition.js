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

 const root=document.documentElement;
 const handoffKey='kbcs:page-transition';
 const sides=['left','right'];
 const editor=()=>document.querySelector('#workspace-body:not(.workspace-battle) > .workspace-editor');
 const panel=side=>document.querySelector('.workspace-'+side+':not([hidden]) > .workspace-panel-content');
 const direction=(activation,fallback)=>{
  if(!activation)return fallback;
  if(activation.navigationType!=='traverse')return 'forward';
  const {from,entry}=activation;
  return from?.index>=0&&entry?.index>=0?(entry.index<from.index?'back':'forward'):fallback;
 };
 let requested='forward';

 // ステージ一覧はデータ取得前でも URL から内容を区別できる。
 function signature(target){
  const stageNavigation=target.querySelector('#stage-navigation');
  let markup=target.innerHTML;
  if(stageNavigation)markup=markup.replace(stageNavigation.outerHTML,mapKey||params.get('id'));
  let hash=0;
  for(let index=0;index<markup.length;index++)hash=(Math.imul(hash,31)+markup.charCodeAt(index))|0;
  return hash;
 }

 document.addEventListener('click',event=>{
  requested=event.target.closest?.('[data-page-back]')?'back':'forward';
 },true);

 function namePanels(target,viewTransition,identify){
  const panels=[];
  target.style.viewTransitionName='kbcs-page';
  for(const side of sides){
   const content=panel(side);
   if(!content||!identify(side,signature(content)))continue;
   content.style.viewTransitionName='kbcs-'+side;
   panels.push(content);
  }
  void viewTransition.finished.then(()=>{
   target.style.removeProperty('view-transition-name');
   for(const content of panels)content.style.removeProperty('view-transition-name');
   for(const side of sides)root.removeAttribute('data-kbcs-'+side+'-changed');
   delete root.dataset.kbcsPageDirection;
  });
 }

 window.addEventListener('pageswap',({viewTransition,activation})=>{
  if(!viewTransition)return;
  const target=editor();
  if(!target){viewTransition.skipTransition();return;}
  const signatures={};
  namePanels(target,viewTransition,(side,value)=>{signatures[side]=value;return true;});
  const way=direction(activation,requested);
  try{sessionStorage.setItem(handoffKey,JSON.stringify({way,signatures}));}catch{}
 });

 window.addEventListener('pagereveal',({viewTransition})=>{
  let handoff;
  try{
   handoff=JSON.parse(sessionStorage.getItem(handoffKey));
   sessionStorage.removeItem(handoffKey);
  }catch{}
  if(!viewTransition)return;
  const target=editor();
  if(!target){viewTransition.skipTransition();return;}
  root.dataset.kbcsPageDirection=direction(window.navigation?.activation,handoff?.way??'forward');
  namePanels(target,viewTransition,(side,value)=>{
   if(!handoff||!(side in handoff.signatures))return false;
   root.toggleAttribute('data-kbcs-'+side+'-changed',value!==handoff.signatures[side]);
   return true;
  });
 });
})();
