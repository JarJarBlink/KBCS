import {loadStageMapCatalog} from './src/shared/game/stages.js';
import {loadEnemyDatabase} from './src/shared/game/enemies.js';
import {resolveStageRoute} from './src/features/stages/model.js';

export async function loadStageDetailPage(params,loadIndex,loadUnits){
  const key=params.get('map');
  const legacyIndex=!key&&params.has('id')?loadIndex():null;
  const detailRequest=legacyIndex
    ?legacyIndex.then(index=>loadStageMapCatalog(resolveStageRoute(index,params).map.key))
    :loadStageMapCatalog(key||'N000');
  const [detail,enemies]=await Promise.all([detailRequest,loadEnemyDatabase()]);
  const {map,selected}=resolveStageRoute(detail,params),{stages}=detail;
  // 他マップへの条件・EXリンクや旧形式の報酬がある場合だけ全体索引を使う。
  const needsIndex=!detail.navigation||
    map.conditions?.length||stages.some(stage=>stage.ex||stage.exLottery?.length);
  const needsUnits=!detail.navigation||map.limits?.some(limit=>limit.group?.units?.length)||
    stages.some(stage=>stage.formation)||Object.values(detail.rewards).some(reward=>reward.unit!=null);
  const [index,units]=await Promise.all([
    legacyIndex??(needsIndex?loadIndex():null),
    needsUnits?loadUnits():{units:[]},
  ]);
  if(index&&(detail.buildId!==index.buildId||detail.revision!==index.revision))
    throw Error('DBが更新されています。ページを再読み込みしてください。');
  const database=index?{...index,musicCatalog:detail.musicCatalog,
    rewards:detail.navigation?{...index.rewards,...detail.rewards}:index.rewards}:detail;
  const position=index?.maps.findIndex(candidate=>candidate.key===map.key);
  const navigation=detail.navigation??{previous:index.maps[position-1]?.key,next:index.maps[position+1]?.key};
  return {database,map,stages,enemies,units,selected,navigation};
}
