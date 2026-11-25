import assert from 'node:assert/strict';
import test from 'node:test';
import settingsCatalog from '../settings-catalog.js';
import {createUnitSearchState} from '../src/features/units/search-controls.js';
import {resolveUnitSearchRows,searchUnitPage} from '../native-unit-search.js';
import {resolveStageRoute,selectStageMaps,selectStageRows,stageDetailUrl} from '../src/features/stages/model.js';

test('キャラ検索は表示ページを計算し、数値条件とCSVは全候補を処理する',async()=>{
  const requests=[],growth=Array(201).fill(100);
  const units=[2,3,1].map(id=>({id,aliases:[],rarity:1,maxLevel:30,plusLevel:0,growth:0,talents:[],
    forms:[{code:'f',index:0,name:String(id),hp:40-id,attacks:[id],foreswings:[4],targets:[],abilities:[]}]}));
  const database={units,growth:[growth]},settings=createUnitSearchState();
  const fetchBefore=globalThis.fetch;
  globalThis.fetch=async(_path,request)=>{
    const {stats}=JSON.parse(request.body);requests.push(stats.length);
    return Response.json({abi:5,ruleset:settingsCatalog.versionCode,stats:stats.map(value=>value.base)});
  };
  try{
    const first=await searchUnitPage(database,settings,1,1);
    assert.equal(first.rows.length,3);
    assert.equal(first.visible[0].stats.hp,39);
    await searchUnitPage(database,settings,1,1);
    assert.deepEqual(requests,[2]);
    assert.deepEqual((await resolveUnitSearchRows(database,settings,first.rows)).map(row=>row.stats.attack),[1,2,3]);
    assert.deepEqual(requests,[2,4]);
    const sorted=await searchUnitPage(database,{...settings,sort:'hp',ranges:{hp:['38','']}},1,2);
    assert.deepEqual(sorted.visible.map(row=>row.unit.id),[2,1]);
    assert.deepEqual(requests,[2,4]);
  }finally{globalThis.fetch=fetchBefore;}
});

test('一覧に出るマップIDとステージIDから個別の画面を解決する',()=>{
  const map={key:'N000',nativeId:0,name:'伝説のはじまり',series:'N',stars:[100,150],limits:[],stages:[0,1]};
  const stages=[0,1].map(index=>({id:'N000-'+index,index,map:map.key,name:'ステージ'+index,flags:[],enemies:[]}));
  const database={maps:[map],stages,series:[],rewards:{}},enemies={enemies:[]};
  const filters={query:'Ｎ０００（０）',enemy:'',reward:'',background:'',music:'',attributes:[],gimmicks:[],ranges:{},sort:'id'};
  assert.deepEqual(selectStageMaps(database,enemies,filters)[0].stages,stages);
  assert.deepEqual(selectStageMaps(database,enemies,filters)[0].stageLinks,[]);
  const hit=selectStageMaps(database,enemies,{...filters,query:'Ｎ０００ ステージ１'})[0];
  assert.deepEqual(hit.stageLinks,[stages[1]]);
  assert.equal(stageDetailUrl(hit.stageLinks[0],2),'/pages/stage-detail/?map=N000&crown=2&stage=1');
  assert.deepEqual(selectStageRows(database,enemies,{...filters,query:'0-1'}).map(row=>row.stage.id),['N000-1']);
  assert.equal(resolveStageRoute(database,new URLSearchParams('map=N000&crown=2')).selected,'');
  assert.equal(resolveStageRoute(database,new URLSearchParams('id=N000-1')).selected,'N000-1');
});

test('面番号と複数種別を組み合わせ、属性の除外は出現候補全体で判定する',()=>{
  const map=(key,series,nativeId)=>({key,series,nativeId,name:key,stars:[100],limits:[],stages:[0,1]});
  const maps=[map('S078','S',1078),map('PR000','PR',39000),map('N000','N',0)];
  const ordinary=(map,index,enemies,flags=[])=>({id:map+'-'+index,map,index,name:'面'+(index+1),enemies,flags});
  const common=ordinary('S078',1,[1]),unlisted=ordinary('PR000',1,[0],['unlisted']);
  const variable={...ordinary('N000',1,[0,1]),patterns:[{enemies:[0],flags:[]},{enemies:[1],flags:[]}]};
  const database={maps,stages:[ordinary('S078',0,[0]),common,unlisted,variable],series:[],rewards:{}};
  const enemies={enemies:[{id:0,name:'敵A',attributes:['red'],species:[]},{id:1,name:'敵B',attributes:['metal'],species:[]}]};
  const filters={query:'',enemy:'',reward:'',background:'',music:'',attributes:[],gimmicks:[],ranges:{},sort:'id',stageNumber:'2'};
  const ids=state=>selectStageRows(database,enemies,{...filters,...state}).map(({stage})=>stage.id);
  assert.deepEqual(ids({series:['S','PR']}),[common.id,unlisted.id]);
  assert.deepEqual(ids({listing:'unlisted'}),[unlisted.id]);
  assert.deepEqual(ids({attributes:['red'],excludeAttributes:true}),[common.id]);
  assert.deepEqual(ids({attributes:['red'],enemy:'1'}),[]);
});
