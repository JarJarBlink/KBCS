import assert from 'node:assert/strict';
import test from 'node:test';
import settingsCatalog from '../settings-catalog.js';
import {createUnitSearchState} from '../src/features/units/search-controls.js';
import {resolveUnitSearchRows,searchUnitPage} from '../native-unit-search.js';
import {resolveStageRoute,selectStageMaps,selectStageRows} from '../src/features/stages/model.js';

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
  assert.deepEqual(selectStageRows(database,enemies,{...filters,query:'0-1'}).map(row=>row.stage.id),['N000-1']);
  assert.equal(resolveStageRoute(database,new URLSearchParams('map=N000&crown=2')).selected,'');
  assert.equal(resolveStageRoute(database,new URLSearchParams('id=N000-1')).selected,'N000-1');
});
