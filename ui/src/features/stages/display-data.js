import {loadStageSearchIndex} from '/search-index.js';
import {loadEnemyDatabase} from '../../shared/game/enemies.js';
import {loadUnitSearchIndex} from '/native-unit-search.js';

const requests=new Map();
export async function loadStageDisplayMap(key,indexRequest=loadStageSearchIndex()){
  if(!requests.has(key)){
    // 設定プレビューの再選択だけをキャッシュし、索引と同じ版かを確認する。
    if(requests.size>=8)requests.delete(requests.keys().next().value);
    requests.set(key,fetch('/api/stages?'+new URLSearchParams({map:key})).then(response=>{
      if(!response.ok)throw Error('マップ詳細の読込に失敗しました。');
      return response.json();
    }).catch(error=>{requests.delete(key);throw error;}));
  }
  const [index,detail,enemies,units]=await Promise.all([indexRequest,requests.get(key),loadEnemyDatabase(),loadUnitSearchIndex()]);
  if(detail.buildId!==index.buildId||detail.revision!==index.revision){
    requests.delete(key);throw Error('DBが更新されています。ページを再読み込みしてください。');
  }
  const map=detail.maps.find(value=>value.key===key);
  if(!map)throw Error('マップが見つかりません。');
  return {database:{...index,musicCatalog:detail.musicCatalog,rewards:{...index.rewards,...detail.rewards}},map,stages:detail.stages,enemies,units};
}
