export const stageGimmicks=[['restriction','出撃制限'],['formation','固定編成'],['ex','連戦・EX'],['specialRule','特殊ルール'],['pointRule','イベントPt'],['levelSeal','Lv封印'],['noContinue','コンテ不可'],['bossGuard','城バリア'],['timeLimit','時間制限'],['splitMultiplier','体力・攻撃の倍率差'],['kills','味方の撃破数条件'],['afterCastle','城連動後の待機'],['enemyCastle','敵キャラの城'],['musicChange','BGM切替'],['animatedBackground','背景が動く'],['abyss','アビス'],['randomPattern','抽選ステージ'],['clearLimit','クリア回数制限'],['mapInterval','インターバルあり'],['hiddenAfterClear','クリア後非表示'],['rewardReset','リセット設定あり'],['missing','敵データ未収録'],['unlisted','一覧外']];
export const stageRanges=[['energy','統率力'],['difficulty','難易度'],['width','ステージ幅']];
export function normalizeStageQuery(value){return String(value).normalize('NFKC').toLowerCase().replace(/[ァ-ヶ]/g,char=>String.fromCharCode(char.charCodeAt(0)-0x60)).trim();}
export const queryTerms=value=>normalizeStageQuery(value).split(/[\s,、]+/).filter(Boolean);
export function selectStageSeries(database){
  const firstId=series=>Math.min(...database.maps.filter(map=>map.series===series.id).map(map=>map.nativeId));
  return [...database.series].sort((a,b)=>firstId(a)-firstId(b));
}
export function selectStageRewards(database,kind='',query=''){
  const terms=queryTerms(query);
  return Object.values(database.rewards).filter(item=>(!kind||(kind==='unit'?item.unit!=null&&!item.evolution:kind==='evolution'?item.evolution:item.unit==null))&&terms.every(term=>normalizeStageQuery(item.name+' '+item.id+(item.unit!=null?' '+item.unit:'')).includes(term))).sort((a,b)=>a.id-b.id);
}
const matches=(selected,values,all)=>!selected.length||(all?selected.every(value=>values.includes(value)):selected.some(value=>values.includes(value)));
export function stageMapUrl(map,crown=1){return '/pages/stage-detail/?'+new URLSearchParams({map:typeof map==='string'?map:map.key,...(crown>1?{crown:String(crown)}:{})});}
export function stageDetailUrl(stage,crown=1){const url=new URL(stageMapUrl(stage.map||stage.id.replace(/-\d+$/,''),crown),'https://kbc.invalid');url.searchParams.set('stage',stage.index??Number(stage.id.match(/-(\d+)$/)?.[1]));return url.pathname+url.search;}
export function resolveStageRoute(database,params){
  const legacy=database.stages.find(stage=>stage.id===params.get('id'));
  const key=params.get('map')||legacy?.map||(!params.has('id')?'N000':null),map=database.maps.find(map=>map.key===key);
  if(!map)throw Error('マップIDが見つかりません。');
  const choice=params.get('stage')??(legacy?.map===map.key?String(legacy.index):null);
  const selected=choice==null||choice===''||choice==='all'?null:database.stages.find(stage=>stage.map===map.key&&String(stage.index)===choice);
  if(choice&&choice!=='all'&&!selected)throw Error('このマップのステージが見つかりません。');
  return {map,selected:selected?.id||'',legacy:legacy?.id||null};
}

function matchStageQuery(stage,map,series,terms){
  const stageName=normalizeStageQuery(stage.name),stageId=stage.id.toLowerCase();
  const mapName=normalizeStageQuery([map.name,map.key,series].join(' '));
  let stageMatch=false;
  for(const term of terms){
    const combined=term.match(/^([a-z][a-z0-9-]*)\((\d+)\)$/);
    if(combined){
      if(map.key.toLowerCase()!==combined[1]||map.nativeId!==Number(combined[2]))return null;
      continue;
    }
    const id=term.replaceAll('_','-'),numeric=id.match(/^(\d+)(?:-(\d+))?$/);
    if(numeric){
      if(map.nativeId!==Number(numeric[1])||(numeric[2]!=null&&stage.index!==Number(numeric[2])))return null;
      stageMatch||=numeric[2]!=null;
      continue;
    }
    if(stageName.includes(term)||stageId===id){stageMatch=true;continue;}
    if(id.startsWith(map.key.toLowerCase()+'-')&&/-\d+$/.test(id))return null;
    if(!mapName.includes(id)&&!stageId.includes(id))return null;
  }
  return stageMatch;
}

export function selectStageRows(database,enemyDatabase,state){
  const maps=new Map(database.maps.map(map=>[map.key,map])),enemies=new Map(enemyDatabase.enemies.map(enemy=>[enemy.id,enemy]));
  const terms=queryTerms(state.query),enemyTerms=queryTerms(state.enemy),rewardTerms=queryTerms(state.reward),numbers=value=>queryTerms(value).map(Number).filter(Number.isFinite);
  const background=numbers(state.background),music=numbers(state.music),series=new Map(database.series.map(series=>[series.id,series.label]));
  const selectedSeries=Array.isArray(state.series)?state.series:state.series?[state.series]:[];
  const rows=[];
  for(const stage of database.stages){
    const map=maps.get(stage.map);
    if(selectedSeries.length&&!selectedSeries.includes(map.series))continue;
    if(state.crown>map.stars.length)continue;
    if(state.stageNumber&&stage.index+1!==Number(state.stageNumber))continue;
    if(state.listing&&stage.flags.includes('unlisted')!==(state.listing==='unlisted'))continue;
    const stageMatch=terms.length?matchStageQuery(stage,map,series.get(map.series),terms):false;
    if(stageMatch===null)continue;
    if(!matches(state.gimmicks,stage.flags,true))continue;
    const patterns=stage.patterns?.length?stage.patterns:[stage];
    const enemyMatches=pattern=>enemyTerms[state.enemyMode==='any'?'some':'every'](term=>pattern.enemies.some(id=>
      /^\d+$/.test(term)?id===Number(term):normalizeStageQuery((enemies.get(id)?.name||'')+' '+(enemies.get(id)?.aliases||[]).join(' ')).includes(term)));
    const attributes=pattern=>pattern.enemies.flatMap(id=>{
      const enemy=enemies.get(id);
      return enemy?[...enemy.attributes,...enemy.species]:[];
    });
    const attributesMatch=values=>matches(state.attributes,values,state.attributeMode==='all');
    if(enemyTerms.length&&state.excludeEnemies&&patterns.some(enemyMatches))continue;
    if(state.attributes.length&&state.excludeAttributes&&patterns.some(pattern=>attributesMatch(attributes(pattern))))continue;
    const restriction=state.crown&&applicableLimits(map,stage,state.crown).length;
    const flagsFor=source=>state.crown?[...source.flags.filter(flag=>flag!=='restriction'),...(restriction?['restriction']:[])]:source.flags;
    if(!patterns.some(pattern=>{
      if(enemyTerms.length&&!state.excludeEnemies&&!enemyMatches(pattern))return false;
      if(state.attributes.length&&!state.excludeAttributes){
        const present=attributes(pattern);
        if(!attributesMatch(present)||state.attributesOnly&&present.some(key=>!state.attributes.includes(key)))return false;
      }
      return (!state.gimmicks.length||matches(state.gimmicks,flagsFor(pattern),true))&&
        (!background.length||background.includes(pattern.background))&&inRange(pattern.width,state.ranges.width);
    }))continue;
    if(rewardTerms.length&&!rewardTerms.every(term=>stage.rewards.some(id=>/^\d+$/.test(term)?id===Number(term):normalizeStageQuery(database.rewards[id]?.name||'').includes(term))))continue;
    if(music.length&&!stage.music.some(id=>music.includes(id)))continue;
    if(!inRange(stage.energy,state.ranges.energy)||!inRange(stage.difficulty,state.ranges.difficulty))continue;
    rows.push({stage:state.crown?{...stage,flags:flagsFor(stage)}:stage,map,stageMatch});
  }
  if(state.sort==='id')return state.direction==='desc'?rows.reverse():rows;
  const direction=state.direction==='desc'?-1:1;
  return rows.sort((a,b)=>{
    const x=state.sort==='name'?a.stage.name:state.sort==='map'?a.map.name:a.stage[state.sort];
    const y=state.sort==='name'?b.stage.name:state.sort==='map'?b.map.name:b.stage[state.sort];
    return x==null?(y==null?0:1):y==null?-1:direction*(typeof x==='string'?x.localeCompare(y,'ja'):x-y);
  });
}

function inRange(value,[min,max]=[]){
  return (min==null||min===''||value!=null&&value>=Number(min))&&
    (max==null||max===''||value!=null&&value<=Number(max));
}

export function applicableLimits(map,stage,crown){return map.limits.filter(limit=>(limit.crown<0||limit.crown===crown-1)&&(limit.stage<0||limit.stage===stage.index));}
export function effectiveSpawn(spawn,map,crown=1){const factor=(map.stars[crown-1]??map.stars[0]??100)/100,scale=value=>Math.round(value*factor*1e6)/1e6;return {...spawn,health:scale(spawn.health),attack:scale(spawn.attack)};}

// ステージ単位で条件を判定してからマップへまとめ、別ステージを跨ぐAND一致を防ぐ。
export function selectStageMaps(database,enemyDatabase,state){
  const groups=new Map();
  for(const {stage,map,stageMatch}of selectStageRows(database,enemyDatabase,{...state,sort:'id',direction:'asc'})){
    if(!groups.has(map.key))groups.set(map.key,{map,stages:[],nameMatches:[]});
    const group=groups.get(map.key);
    group.stages.push(stage);
    if(stageMatch)group.nameMatches.push(stage);
  }
  const rows=[...groups.values()].map(entry=>{
    const range=key=>{const values=entry.stages.map(stage=>stage[key]).filter(Number.isFinite);return values.length?[Math.min(...values),Math.max(...values)]:[];};
    const {map,stages,nameMatches}=entry;
    const stageLinks=nameMatches.length?nameMatches:stages.length===1||stages.length<map.stages.length?stages:[];
    return {map,stages,stageLinks,enemies:[...new Set(stages.flatMap(stage=>stage.enemies))],flags:[...new Set(stages.flatMap(stage=>stage.flags))],energy:range('energy'),difficulty:range('difficulty'),width:range('width')};
  });
  const direction=state.direction==='desc'?-1:1;
  return rows.sort((a,b)=>{
    const value=entry=>state.sort==='id'?entry.map.nativeId:['name','map'].includes(state.sort)?entry.map.name:state.sort==='count'?entry.map.stages.length:entry[state.sort]?.[0];
    const x=value(a),y=value(b);return x==null?(y==null?0:1):y==null?-1:direction*(typeof x==='string'?x.localeCompare(y,'ja'):x-y);
  });
}

export function stagePlayUrl(stage,crown=1){
  const url=new URL(stageDetailUrl(stage,crown),'https://kbc.invalid');url.pathname='/pages/stage-play/';
  if(stage.patternId)url.searchParams.set('pattern',stage.patternId);
  return url.pathname+url.search;
}
