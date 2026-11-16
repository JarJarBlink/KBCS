// 起動通知の順序と応答、初回取得、ホームからの再取得と再起動を検証する。
import assert from 'node:assert/strict';
class Element {
  constructor(tag,owner){this.tag=tag;this.owner=owner;this.children=[];this.handlers={};this.textContent='';const classes=new Set();this.classList={add:(...values)=>values.forEach(v=>classes.add(v)),contains:value=>classes.has(value)};}
  querySelector(selector){this.nodes??=new Map();if(!this.nodes.has(selector))this.nodes.set(selector,new Element('div',this.owner));return this.nodes.get(selector);}
  append(...children){this.children.push(...children);}
  replaceChildren(...children){this.children=children;}
  setAttribute(){}
  removeAttribute(){}
  addEventListener(event,handler){this.handlers[event]=handler;}
  showModal(){this.owner.dialogs.push(this);}
  close(){this.handlers.close?.();}
  remove(){this.owner.dialogs=this.owner.dialogs.filter(dialog=>dialog!==this);}
}
const tick=()=>new Promise(resolve=>setImmediate(resolve));
async function settle(check){for(let i=0;i<100;i++){await tick();if(check())return;}assert.fail('更新通知が完了しませんでした');}
const originalFetch=globalThis.fetch;
globalThis.requestAnimationFrame=callback=>callback();globalThis.Image=class{decode(){return Promise.resolve();}};
try{
  for(const accept of [false,true]){
    const document={dialogs:[],createElement(tag){return new Element(tag,this);},createTextNode(text){return {textContent:text};},getElementById(){return null;}};
    document.body=new Element('body',document);globalThis.document=document;globalThis.window={};
    const value={checking:false,checked:true,startupPending:true,busy:false,desktop:true,currentVersion:'0.1.35',data:{version:'15.7.4',size:900000000,available:true,missing:false},app:{available:false}};
    const calls=[];
    globalThis.fetch=async(url,options={})=>{
      calls.push([url,options]);
      if(url.endsWith('/startup'))return {ok:true,json:async()=>{value.startupPending=false;return {claimed:true};}};
      if(url.endsWith('/download')){value.data.available=false;return {ok:true,json:async()=>({accepted:true})};}
      return {ok:true,json:async()=>structuredClone(value)};
    };
    const updates=await import('../updates.js?accept='+accept);updates.initializeUpdates();
    await settle(()=>document.dialogs.length===1);
    const actions=document.dialogs[0].children.at(-1);
    actions.children[accept?1:0].onclick();
    await settle(()=>document.dialogs.length===0&&(!accept||calls.some(([url])=>url.endsWith('/download'))));
    assert.equal(calls.filter(([url])=>url.endsWith('/download')).length,accept?1:0);
    if(!accept)assert.ok(document.body.children.some(node=>node.id==='update-notice'));
    await updates.downloadUpdate('data');
    assert.equal(JSON.parse(calls.findLast(([url])=>url.endsWith('/download'))[1].body).kind,'data');
    let restarted=false;window.ipc={postMessage(value){assert.equal(value,'kbcs:restart-for-update');restarted=true;}};
    await updates.applyUpdate();assert.ok(restarted);
  }
  for(const choice of ['decline','later','restart','failed']){
    const document={dialogs:[],createElement(tag){return new Element(tag,this);},createTextNode(text){return {textContent:text};},getElementById(){return null;}};
    document.body=new Element('body',document);globalThis.document=document;
    const actions=[];
    globalThis.window={ipc:{postMessage(message){actions.push(message);}}};
    const value={checking:false,checked:true,startupPending:true,busy:false,desktop:true,currentVersion:'0.1.45',data:{version:'16.0.0',size:900000000,available:true,missing:false},app:{version:'0.1.46',available:true,ready:false}};
    globalThis.fetch=async(url,options={})=>{
      if(url.endsWith('/startup')){value.startupPending=false;return {ok:true,json:async()=>({claimed:true})};}
      if(url.endsWith('/download')){
        const {kind}=JSON.parse(options.body);
        actions.push(kind);
        value.job=kind;
        if(kind==='app'&&choice==='failed')value.error='本体の取得に失敗しました';
        else if(kind==='app')value.app.ready=true;
        return {ok:true,json:async()=>({accepted:true})};
      }
      if(url.endsWith('/apply')){actions.push('apply');return {ok:true,json:async()=>({accepted:true})};}
      return {ok:true,json:async()=>structuredClone(value)};
    };
    const updates=await import('../updates.js?both='+choice);updates.initializeUpdates();
    const title=()=>document.dialogs[0]?.children[0].textContent;
    const answer=index=>document.dialogs[0].children.at(-1).children[index].onclick();
    await settle(()=>document.dialogs.length===1);
    assert.match(title(),/^KBCS v0\.1\.46/);
    answer(choice==='decline'?0:1);
    if(choice==='later'||choice==='restart'){
      await settle(()=>title()==='KBCSの更新を適用できます');
      assert.deepEqual(actions,['app']);
      answer(choice==='restart'?1:0);
    }
    if(choice==='restart'){
      await settle(()=>actions.includes('kbcs:restart-for-update'));
      await tick();
      assert.deepEqual(actions,['app','apply','kbcs:restart-for-update']);
      assert.equal(document.dialogs.length,0);
    }else{
      await settle(()=>title()==='最新のデータをダウンロードする必要があります！');
      answer(1);
      await settle(()=>actions.includes('data'));
      assert.deepEqual(actions,choice==='decline'?['data']:['app','data']);
    }
  }
  const document={dialogs:[],createElement(tag){return new Element(tag,this);},createTextNode(text){return {textContent:text};},getElementById(){return null;}};
  document.body=new Element('body',document);globalThis.document=document;globalThis.window={};
  const first={checking:false,checked:true,startupPending:true,busy:true,job:'data',message:'ZIP 1/10',data:{missing:true,available:true},app:{version:'0.1.46',available:true}};
  let downloads=0;
  globalThis.fetch=async(url)=>{
    if(url.endsWith('/download'))downloads++;
    if(url.endsWith('/startup')){first.startupPending=false;return {ok:true,json:async()=>({claimed:true})};}
    return {ok:true,json:async()=>structuredClone(first)};
  };
  const updates=await import('../updates.js?first-run');updates.initializeUpdates();
  await settle(()=>document.body.children.some(node=>node.className==='startup-screen'));
  assert.equal(downloads,0);
  const progress=document.body.children.find(node=>node.className==='startup-screen');
  assert.equal(progress.querySelector('h1').textContent,'初回データを準備しています');
  assert.equal(document.dialogs.length,0);
  first.busy=false;first.data={missing:false,available:false};await updates.checkUpdates();
  await new Promise(resolve=>setTimeout(resolve,1050));
  assert.match(document.dialogs[0]?.children[0].textContent,/^KBCS v0[.]1[.]46/);
  document.dialogs[0].children.at(-1).children[0].onclick();
  await settle(()=>document.dialogs.length===0);
  assert.equal(downloads,0);
}finally{globalThis.fetch=originalFetch;delete globalThis.document;delete globalThis.window;delete globalThis.Image;delete globalThis.requestAnimationFrame;}
console.log('app-first startup prompts, consent, manual download and restart passed');
