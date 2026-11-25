
import assert from 'node:assert/strict';
import {loadStageDetailPage} from '../stage-detail-data.js';

const calls=[];
const map={key:'N001',conditions:[],limits:[]};
const stage={id:'1001-0',map:map.key,index:0};
const detail={buildId:'one',revision:'snapshot',rewardCatalogVersion:1,maps:[map],stages:[stage],
  rewards:{1:{id:1}},navigation:{previous:'N000',next:'N002'}};
const index={...detail,maps:[{key:'N000'},map,{key:'N002'}]};
let response=detail;
const loadIndex=async()=>{calls.push('stage-index');return index;};
const loadUnits=async()=>{calls.push('unit-index');return {units:[{id:42}]};};
globalThis.fetch=async path=>{
  calls.push(path);
  return {ok:true,json:async()=>path==='/api/enemies'?{schemaVersion:1,enemies:[{id:0}]}:response};
};

const initial=await loadStageDetailPage(new URLSearchParams('map=N001&stage=0'),loadIndex,loadUnits);
assert.equal(initial.selected,stage.id);
assert.deepEqual(initial.navigation,detail.navigation);
assert.deepEqual(calls,['/api/stages?map=N001','/api/enemies']);

calls.length=0;
response={...detail,maps:[{...map,conditions:[{code:1}]}],rewards:{1000:{id:1000,unit:42}}};
const linked=await loadStageDetailPage(new URLSearchParams('map=N001'),loadIndex,loadUnits);
assert.equal(linked.database.maps.length,3);
assert.deepEqual(linked.units.units,[{id:42}]);
assert.deepEqual(calls,['/api/stages?map=N001','stage-index','unit-index']);

calls.length=0;
response=detail;
assert.equal((await loadStageDetailPage(new URLSearchParams('id=1001-0'),loadIndex,loadUnits)).map.key,map.key);
assert.deepEqual(calls,['stage-index','/api/stages?map=N001']);
