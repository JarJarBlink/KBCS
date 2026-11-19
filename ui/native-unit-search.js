import {calculateUnitStats} from './src/shared/game/unit-stats.js';
import {calculateNative} from './native-calculation.js';
import {applyUnitTalents} from './talent-effects.js';
import {selectUnitForms,sortUnitRows} from './src/features/units/model.js';
import {loadSearchIndex} from './search-index.js';

const caches=new WeakMap();
const levelFor=(unit,settings)=>Math.max(1,Math.min(200,unit.maxLevel+unit.plusLevel||1,Math.trunc(settings.level)||1));
const maxTalents=unit=>Object.fromEntries(unit.talents.map(talent=>[talent.index,talent.maxLevel]));
const improve=(unit,form,settings)=>settings.applyTalents
  ?applyUnitTalents(unit,form,maxTalents(unit),levelFor(unit,settings))
  :{form,healthRates:[],attackRates:[]};

export const loadUnitSearchIndex=()=>loadSearchIndex('/api/catalog',data=>data.schemaVersion===9&&Array.isArray(data.units),'キャラ検索データを取得できませんでした。');

function searchForm(unit,form,settings){
  const actual=improve(unit,form,settings).form;
  if(!settings.includeTalents)return actual;
  const {targets,abilities}=applyUnitTalents(unit,form,maxTalents(unit),60).form;
  // 属性・特性の検索条件は、表示する数値への本能反映と分ける。
  return {...actual,targets,abilities};
}

function prepareStatistics(database,settings,rows){
  const health=Math.trunc(settings.healthTreasureBonus??settings.healthTreasure/2);
  const attack=Math.trunc(settings.attackTreasureBonus??settings.attackTreasure/2);
  const key=JSON.stringify([settings.level,health,attack,!!settings.applyTalents]);
  let cache=caches.get(database);
  if(cache?.key!==key){cache={key,stats:new Map(),ready:Promise.resolve()};caches.set(database,cache);}
  const pending=cache.ready.then(async()=>{
    const inputs=[],indices=new Map();
    for(const {key,unit,original} of rows){
      if(cache.stats.has(key)||indices.has(key))continue;
      const {form,healthRates,attackRates}=improve(unit,original,settings);
      const growth=database.growth[unit.growth][levelFor(unit,settings)];
      const append=(base,treasure,rates)=>{const index=inputs.length;inputs.push({base,growth,treasure,combo:0,talent:rates[0]||0,extra:rates[1]||0});return index;};
      indices.set(key,{hp:append(form.hp,health,healthRates),attacks:form.attacks.map(base=>append(base,attack,attackRates))});
    }
    const values=[];
    for(let offset=0;offset<inputs.length;offset+=4000)values.push(...(await calculateNative({stats:inputs.slice(offset,offset+4000)})).stats);
    for(const [key,{hp,attacks}] of indices)cache.stats.set(key,{hp:values[hp],attacks:attacks.map(i=>values[i])});
    return cache.stats;
  });
  cache.ready=pending.catch(()=>{});
  return pending;
}

export async function resolveUnitSearchRows(database,settings,rows,{refreshForm=false}={}){
  const values=await prepareStatistics(database,settings,rows);
  return rows.map(row=>{
    const {unit}=row,form=refreshForm?searchForm(unit,row.original,settings):row.form;
    const native=values.get(row.key),attack=native.attacks.reduce((total,value)=>total+value,0);
    const stats=calculateUnitStats(unit,form,database.growth[unit.growth],settings);
    return {...row,form,stats:{...stats,...native,attack,dps:stats.attackCycle>0?attack*30/stats.attackCycle:null,maxLevel:unit.maxLevel+unit.plusLevel,targetCount:form.targets.length}};
  });
}

export async function searchUnitPage(database,settings,page,size,showStats=true){
  let rows=selectUnitForms(database,settings,searchForm);
  const bounds=Object.entries(settings.ranges).filter(([,values])=>values.some(value=>value!==''));
  const calculateAll=bounds.length||!['id','name','rarity'].includes(settings.sort);
  if(calculateAll){
    rows=(await resolveUnitSearchRows(database,settings,rows)).filter(({stats})=>bounds.every(([key,[min,max]])=>
      stats[key]!=null&&!(min!==''&&stats[key]<Number(min))&&!(max!==''&&stats[key]>Number(max))));
  }
  sortUnitRows(rows,settings);
  const pageCount=Math.max(1,Math.ceil(rows.length/size));
  page=Math.min(page,pageCount);
  const slice=rows.slice((page-1)*size,page*size);
  const visible=!calculateAll&&showStats?await resolveUnitSearchRows(database,settings,slice):slice;
  return {rows,visible,page,pageCount};
}
