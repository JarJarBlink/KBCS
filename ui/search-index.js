const pending=new Map();

export const loadStageSearchIndex=()=>loadSearchIndex('/api/stages',data=>data.schemaVersion===2&&data.maps?.length&&data.stages?.length,'ステージ検索データを取得できませんでした。');

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
