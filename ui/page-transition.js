// 本文の初回描画より前に、ページ間のスナップショットを設定する。
(()=>{
 if(window.top!==window)return;
 const directionKey='kbcs:page-direction';
 const root=document.documentElement;
 let requested='forward',active;
 const direction=(activation,fallback)=>{
  if(activation?.navigationType!=='traverse')return fallback;
  const {from,entry}=activation;
  return from?.index>=0&&entry?.index>=0?(entry.index<from.index?'back':'forward'):fallback;
 };
 document.addEventListener('click',event=>{
  requested=event.target.closest?.('[data-page-back]')?'back':'forward';
 },true);
 window.addEventListener('popstate',()=>{requested='forward';});

 function capture(transition){
  const body=document.getElementById('workspace-body');
  if(!body||body.classList.contains('workspace-battle')){
   transition.skipTransition();
   return false;
  }
  active=transition;
  body.style.viewTransitionName='kbcs-page';
  const clear=()=>{
   if(active!==transition)return;
   body.style.removeProperty('view-transition-name');
   delete root.dataset.kbcsPageDirection;
   active=null;
  };
  transition.finished.then(clear,clear);
  return true;
 }

 window.addEventListener('pageswap',({viewTransition,activation})=>{
  if(!viewTransition||!capture(viewTransition))return;
  // 履歴のインデックスを取得できない環境では、上部ボタンの方向を渡す。
  try{sessionStorage.setItem(directionKey,direction(activation,requested));}catch{}
 });
 window.addEventListener('pagereveal',({viewTransition})=>{
  let fallback='forward';
  try{
   if(sessionStorage.getItem(directionKey)==='back')fallback='back';
   sessionStorage.removeItem(directionKey);
  }catch{}
  if(viewTransition&&capture(viewTransition))root.dataset.kbcsPageDirection=direction(window.navigation?.activation,fallback);
 });
})();
