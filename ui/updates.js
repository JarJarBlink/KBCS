import {showStartupProgress} from './startup.js';
let state=null,timer,started=false,pendingStartup=false,presenting=false,restarting=false;
let battleActive=false,visitPending=true,restartHere=false,currentPrompt;
const listeners=new Set();
async function request(path,body){
  const response=await fetch('/api/updates'+path,body===undefined?{}:{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)});
  const value=await response.json();if(!response.ok)throw Error(value.error||'更新処理に失敗しました');return value;
}
export function observeUpdates(listener){listeners.add(listener);if(state)listener(state);return()=>listeners.delete(listener);}
export async function downloadUpdate(kind){
  await request('/download',{kind});
  if(kind==='app')restartHere=true;
  state={...state,busy:true,job:kind,error:null};
  await refresh();
}
export async function checkUpdates(){await request('/check',{});await refresh();}
export async function applyUpdate(){
  if(!window.ipc?.postMessage)throw Error('再起動して更新はKBCSアプリで実行してください');
  await request('/apply',{});window.ipc.postMessage('kbcs:restart-for-update');
}
function notice(message){
  if(battleActive)return;
  let node=document.getElementById('update-notice');
  if(!node){node=document.createElement('div');node.id='update-notice';node.className='update-notice';node.setAttribute('role','status');document.body.append(node);}
  node.replaceChildren(document.createTextNode(message+' '));
  const link=document.createElement('a');link.href='/pages/settings/#data';link.textContent='データ管理';node.append(link);
  const close=document.createElement('button');close.type='button';close.textContent='×';close.setAttribute('aria-label','閉じる');close.onclick=()=>node.remove();node.append(close);
}
function ask(title,message,positive='ダウンロード',negative='いいえ'){
  if(battleActive)return Promise.resolve(null);
  return new Promise(resolve=>{
    const dialog=document.createElement('dialog');dialog.className='update-dialog';
    const heading=document.createElement('h2');heading.textContent=title;
    const text=document.createElement('p');text.textContent=message;
    const actions=document.createElement('div');actions.className='update-actions';
    const no=document.createElement('button');no.type='button';no.textContent=negative;
    const yes=document.createElement('button');yes.type='button';yes.textContent=positive;
    const finish=value=>{currentPrompt=undefined;dialog.close();dialog.remove();resolve(value);};
    currentPrompt=finish;
    no.onclick=()=>finish(false);yes.onclick=()=>finish(true);
    dialog.addEventListener('cancel',event=>{event.preventDefault();finish(false);});
    actions.append(no,yes);dialog.append(heading,text,actions);document.body.append(dialog);dialog.showModal();
  });
}
function progressDialog(){showStartupProgress('初回データを準備しています',state?.message||'原本をダウンロードしています…');}
async function offerAppUpdate(){
  // 初回データ取得中は本体のダウンロードを開始できるまで待つ。
  while(state.busy&&!battleActive)await new Promise(resolve=>setTimeout(resolve,1000));
  const app=state.app;
  if(!app?.available||battleActive)return false;
  const accepted=await ask('KBCS v'+app.version+' が利用可能です！','ダウンロードしますか？ 現在のバージョンは v'+state.currentVersion+' です。');
  if(accepted===null)return false;
  if(app.tag)await request('/acknowledge-app',{tag:app.tag});
  if(!accepted){
    notice('KBCS本体はホームの「設定 → データ管理」から更新できます。');
    return false;
  }
  await downloadUpdate('app');
  while(state.busy&&!battleActive)await new Promise(resolve=>setTimeout(resolve,1000));
  if(state.job==='app'&&state.error)throw Error(state.error);
  return offerRestart();
}
function restartPending(){return state?.desktop&&state.app?.ready&&state.app.restartPending&&!state.busy;}
async function offerRestart(){
  if(battleActive||!restartPending())return false;
  restartHere=false;
  const accepted=await ask('KBCSのダウンロードが完了しました','今すぐ再起動して更新しますか？','再起動して更新','後で');
  if(accepted===null)return false;
  if(!accepted){
    await request('/dismiss-restart',{});
    if(state.app)state.app.restartPending=false;
    notice('ホームの「設定 → データ管理」から再起動して更新できます。');
    return false;
  }
  await applyUpdate();
  restarting=true;
  return true;
}
async function presentUpdates(){
  if(battleActive||presenting||restarting||!state?.checked||state.checking)return;
  const visit=visitPending;
  if(!visit&&!(restartHere&&restartPending())||state.busy&&state.job==='app')return;
  const startup=pendingStartup;presenting=true;pendingStartup=false;visitPending=false;
  try{
    const initialDataDownload=startup&&state.data?.missing&&state.busy&&state.job==='data';
    if(initialDataDownload)progressDialog();
    try{
      if(restartPending()){if(await offerRestart())return;}
      else if(visit&&state.app?.available&&state.app.noticePending!==false&&!state.app.ready&&await offerAppUpdate())return;
    }catch(error){notice(error.message+'。ホームの「設定 → データ管理」から再試行できます。');}
    if(battleActive||!startup||initialDataDownload)return;
    if(state.data?.available&&!state.busy){
      const size=(state.data.size/1048576).toFixed(0);
      const rebuild=state.data.rebuildRequired&&state.data.localTag===state.data.tag;
      const accepted=await ask(rebuild?'データベースの更新が必要です':'最新のデータをダウンロードする必要があります！',rebuild?'保存済みの原本を確認し、新しい変換器でDBを作り直します。更新しますか？':'データ v'+state.data.version+' が利用可能です（全ZIP 約'+size+' MB）。ダウンロードしますか？',rebuild?'更新する':'ダウンロード');
      if(accepted)await downloadUpdate('data');
      else if(accepted===false)notice('データはホームの「設定 → データ管理」からダウンロードできます。');
    }else if(state.dataError)notice('データの更新確認ができませんでした。ホームの「設定 → データ管理」から再試行できます。');
  }catch(error){notice(error.message+'。ホームの「設定 → データ管理」から再試行できます。');}
  finally{presenting=false;if(visitPending)void presentUpdates();}
}
async function refresh(){
  clearTimeout(timer);
  try{
    state=await request('');for(const listener of listeners)listener(state);
    if(visitPending&&!battleActive&&state.checked&&!state.checking&&state.startupPending){const claim=await request('/startup',{});pendingStartup||=claim.claimed;}
    void presentUpdates();
  }catch(error){if(visitPending)notice('更新状態を取得できませんでした: '+error.message);}
  if(!state||state.checking||state.busy)timer=setTimeout(refresh,1000);
}
export function initializeUpdates(){
  if(started)return;started=true;
  const visit=()=>{visitPending=true;void refresh();};
  document.addEventListener('kbcs:battle-mode',event=>{
    battleActive=event.detail;
    if(battleActive){currentPrompt?.(null);document.getElementById('update-notice')?.remove();}
    else visit();
  });
  window.addEventListener('pageshow',event=>{if(event.persisted)visit();});
  void refresh();
}
