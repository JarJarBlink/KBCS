const pending=new Map();

let stageIndex;
export function loadStageSearchIndex(){
  if(!stageIndex)stageIndex=loadSearchIndex('/api/stages',data=>data.schemaVersion===2&&data.maps?.length&&data.stages?.length,'ステージ検索データを取得できませんでした。')
    .then(async data=>{
      if(data.rewardCatalogVersion===1)return data;
      // 旧プレビューも、報酬IDを解決済みの持ち物カタログから名称・画像を取得する。
      const catalog=await fetch('/api/inventory/catalog').then(response=>response.ok?response.json():null).catch(()=>null);
      const items=new Map((catalog?.items??[]).map(item=>[item.id,item]));
      const rewards=Object.fromEntries(Object.values(data.rewards).map(reward=>{
        const item=items.get(reward.id);
        if(item)return [reward.id,{...reward,...item,evolution:reward.evolution||item.form>=2}];
        return [reward.id,reward.id<1000?{id:reward.id,name:'報酬 '+reward.id}:reward];
      }));
      return {...data,rewards};
    }).catch(error=>{stageIndex=undefined;throw error;});
  return stageIndex;
}

export function loadSearchIndex(path,validate,message){
  if(!pending.has(path))pending.set(path,(async()=>{
    const gzip=typeof DecompressionStream==='function';
    const response=await fetch(path+'?view=search'+(gzip?'&gzip=1':''));
    if(!response.ok){
      const detail=await response.json().catch(()=>null);
      throw Error(detail?.error||message);
    }
    const data=await (response.headers.get('content-type')==='application/gzip'
      ?new Response(response.body.pipeThrough(new DecompressionStream('gzip')))
      :response).json();
    if(!validate(data))throw Error(message);
    return data;
  })().catch(error=>{pending.delete(path);throw error;}));
  return pending.get(path);
}
