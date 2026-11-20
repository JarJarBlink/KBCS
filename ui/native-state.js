const isDetail=page=>page.endsWith('-detail');
const stateKey=(page,route)=>'kbcs:view:'+page+(isDetail(page)?':'+(route.get('id')||route.get('map')||'0'):'');

export function writePageParams(page,params,search=location.search){
  try{sessionStorage.setItem(stateKey(page,new URLSearchParams(search)),params.toString());}catch{}
}

export function readPageParams(page){
  const route=new URLSearchParams(location.search);
  let params=new URLSearchParams();
  try{params=new URLSearchParams(sessionStorage.getItem(stateKey(page,route))||'');}catch{}
  const navigation=new URLSearchParams();
  if(page==='stage-search'){
    params.delete('play');if(route.get('play')==='1'){params.set('play','1');navigation.set('play','1');}
    if(route.has('q')){params.set('q',route.get('q'));params.delete('page');}
  }
  if(page==='stage-detail'&&route.has('map')&&!route.has('stage'))params.delete('stage');
  const enemyRates=['health','attack','nativeCrown'];
  if(page==='enemy-detail'&&enemyRates.every(key=>route.has(key))){
    for(const key of enemyRates)params.set(key,route.get(key));
    if(params.get('health')!==params.get('attack'))params.set('same','false');
    writePageParams(page,params);
  }
  if(isDetail(page))for(const key of (page==='stage-detail'?['map','stage','crown','id']:['id','form']))if(route.has(key)){
    params.set(key,route.get(key));navigation.set(key,route.get(key));
  }
  history.replaceState(null,'',location.pathname+(navigation.size?'?'+navigation:'')+location.hash);
  return params;
}

export function clearPageParams(page){
  try{sessionStorage.removeItem(stateKey(page,new URLSearchParams(location.search)));}catch{}
}

export function bindDetailNavigation(page,path,getParams){
  const save=event=>{
    const link=event.target.closest('a[href]');
    if(!link)return;
    const target=new URL(link.href,location.href);
    if(target.protocol===location.protocol&&target.host===location.host&&target.pathname===path)writePageParams(page,getParams(target,link),target.search);
  };
  document.addEventListener('click',save);
  document.addEventListener('auxclick',save);
}
