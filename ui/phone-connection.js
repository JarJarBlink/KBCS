export async function phoneConnection(method='GET'){
 const response=await fetch('/api/phone',{method});
 const result=await response.json();
 if(!response.ok)throw Error(result.error||'スマホ接続を確認できません');
 return result;
}

export function initializePhoneConnection(button){
 const dialog=document.createElement('dialog');dialog.className='phone-connect-dialog';
 dialog.innerHTML='<h2>スマホに接続</h2><p>AndroidをUSBで接続し、端末でUSBデバッグを許可してください。<br>接続するとAndroidのChromeに出撃準備と戦闘を表示します。</p><output role="status"></output><input type="url" aria-label="スマホで開く接続URL" readonly hidden><div class="db-toolbar"><button type="button" data-close>閉じる</button><button type="button" data-stop hidden>接続を終了</button><button type="button" data-connect>USBで接続</button></div>';
 document.body.append(dialog);
 const status=dialog.querySelector('output'),url=dialog.querySelector('input');
 const connect=dialog.querySelector('[data-connect]'),stop=dialog.querySelector('[data-stop]');
 let timer,busy=false;
 const desktop=typeof window.ipc?.postMessage==='function';
 function render(state){
  connect.hidden=state.active;stop.hidden=!state.active;
  url.hidden=!state.url;url.value=state.url??'';
  status.textContent=state.paired?'Androidと接続しました。PCでステージを選んでください。'
   :!state.active?'接続待機中':state.opened?'AndroidのChromeが開くのを待っています。'
   :'AndroidのChromeで下の接続URLを開いてください。';
  if(dialog.open&&state.active&&!state.paired)timer=setTimeout(()=>refresh(),700);
 }
 async function refresh(method='GET'){
  clearTimeout(timer);
  if(!desktop){status.textContent='USB接続はKBCSデスクトップ版で使えます。';connect.disabled=true;return;}
  if(busy)return;
  busy=connect.disabled=stop.disabled=true;
  if(method!=='GET')status.textContent=method==='POST'?'USB接続を確認中…':'接続を終了しています…';
  try{render(await phoneConnection(method));}
  catch(error){status.textContent=error.message;}
  finally{busy=connect.disabled=stop.disabled=false;}
 }
 button.onclick=()=>{dialog.showModal();refresh();};
 dialog.querySelector('[data-close]').onclick=()=>dialog.close();
 dialog.addEventListener('close',()=>clearTimeout(timer));
 url.addEventListener('focus',()=>url.select());
 connect.onclick=()=>refresh('POST');stop.onclick=()=>refresh('DELETE');
}

export async function enterPhoneFullscreen(){
 const root=window.top;
 const screenDocument=root.document;
 try{
  if(!screenDocument.fullscreenElement)await screenDocument.documentElement.requestFullscreen({navigationUI:'hide'});
 }catch{return '全画面表示を開始できませんでした。もう一度ボタンを押してください。';}
 try{await root.screen.orientation.lock('landscape');}
 catch{if(!root.matchMedia('(orientation: landscape)').matches)return 'スマホを横向きにしてください。';}
 return '';
}
