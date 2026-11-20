import {readPageParams,writePageParams,clearPageParams} from "/native-state.js";
import {loadStageSearchIndex} from '/search-index.js';
import {loadEnemyDatabase} from '../../shared/game/enemies.js';
import {escapeHtml,formatNumber,iconChoiceHtml,bindIconHints} from '../../shared/game/database-view.js';
import {enemyDetailUrl} from '../../shared/game/enemy-stats.js';
import {readGameSettings,initializeGameSettings} from '../../shared/browser/game-settings.js';
import {initializeRewardPicker} from './rewards.js';
import {createPagination} from '../../shared/browser/pagination.js';
import {stageTags,stageEnemyStrip} from './catalog-view.js';
import {stageGimmicks,stageRanges,selectStageMaps,selectStageRows,stageDetailUrl,stageMapUrl,selectStageSeries} from './model.js';

const element=id=>document.getElementById(id),params=readPageParams("stage-search"),defaults=readGameSettings();
const selectionMode=params.get('play')==='1';
if(selectionMode){document.title='既存ステージを選択 | KBCS';const tab=document.querySelector('.workspace-tab');if(tab)tab.textContent='既存ステージを選択';}
const state={crown:Math.max(0,Math.min(4,Number(params.get("crown"))||0)),...Object.fromEntries(['query','series','enemy','reward','background','music'].map(key=>[key,params.get(key==='query'?'q':key)||''])),attributes:(params.get('attributes')||'').split(',').filter(Boolean),gimmicks:(params.get('gimmicks')||'').split(',').filter(Boolean),enemyMode:params.get('enemyMode')==='any'?'any':'all',attributeMode:params.get('attributeMode')==='all'?'all':'any',excludeEnemies:params.get('excludeEnemies')==='true',attributesOnly:params.get('attributesOnly')==='true',ranges:Object.fromEntries(stageRanges.map(([key])=>[key,[params.get(key+'Min')||'',params.get(key+'Max')||'']])),sort:['id','name','map','count',...stageRanges.map(([key])=>key)].includes(params.get('sort'))?params.get('sort'):'id',direction:params.get('direction')==='desc'?'desc':'asc'};
let database,enemyDatabase,rows=[],page=Math.max(1,Math.trunc(Number(params.get('page')))||1);
let byStage=params.get('view')==='stage';
const pagination=[element('stage-pagination-top'),element('stage-pagination')].map(root=>createPagination(root,value=>{page=value;render();saveState();}));
const labels=new Map(stageGimmicks),viewButtons=[...document.querySelectorAll('[data-stage-view]')];
let queryTimer;
const formatRange=(value,format)=>{
  const values=Array.isArray(value)?value:[value];
  return [...new Set(values)].filter(Number.isFinite).map(format).join('〜')||'—';
};

function saveState(){
  const query=new URLSearchParams();
  for(const key of ['query','series','enemy','reward','background','music'])if(state[key])query.set(key==='query'?'q':key,state[key]);
  for(const key of ['attributes','gimmicks'])if(state[key].length)query.set(key,state[key].join(','));
  for(const [key,fallback]of [['enemyMode','all'],['attributeMode','any'],['sort','id'],['direction','asc']])if(state[key]!==fallback)query.set(key,state[key]);
  for(const key of ['excludeEnemies','attributesOnly'])if(state[key])query.set(key,'true');
  for(const [key,bounds]of Object.entries(state.ranges))for(const [index,suffix]of ['Min','Max'].entries())if(bounds[index]!=='')query.set(key+suffix,bounds[index]);
  if(page>1)query.set('page',page);query.set('size',element('stage-page-size').value);query.set('showEnemies',String(element('stage-show-enemies').checked));
  if(byStage)query.set('view','stage');
  if(state.crown)query.set('crown',state.crown);
  writePageParams("stage-search",query);
}
function activeFilters(){
  const summary=element('stage-filter-summary');
  const selected=Object.keys(state).filter(key=>['enemy','reward','background','music'].includes(key)&&state[key]);
  const text=[database.series.find(series=>series.id===state.series)?.label,state.crown?state.crown+'冠':null,
    ...selected.map(key=>({enemy:state.excludeEnemies?'除外する敵 ':'出現する敵 ',reward:'報酬 ',background:'背景 ',music:'BGM '})[key]+(key==='reward'?state.reward.split(/\s+/).filter(Boolean).map(id=>database.rewards[id]?.name||id).join('、'):state[key])),
    ...(state.attributes.length?['属性・種族 '+state.attributes.length+'件']:[]),...state.gimmicks.map(key=>labels.get(key)),
    ...stageRanges.flatMap(([key,label])=>state.ranges[key].some(value=>value!=='')?[label+' '+state.ranges[key].join('〜')]:[])].filter(Boolean);
  summary.hidden=!text.length;summary.innerHTML=text.map(value=>'<span class="stage-tag">'+escapeHtml(value)+'</span>').join('');
}
function render(){
  const size=Number(element('stage-page-size').value),pages=Math.max(1,Math.ceil(rows.length/size));page=Math.min(page,pages);
  for(const item of pagination)item.update(page,pages);
  const mapCount=byStage?new Set(rows.map(entry=>entry.map.key)).size:rows.length;
  const stageCount=byStage?rows.length:rows.reduce((count,entry)=>count+entry.stages.length,0);
  element('stage-count').textContent=formatNumber(mapCount)+'マップ / '+formatNumber(stageCount)+'ステージ';
  element('stage-empty').hidden=!!rows.length;element('stage-table').parentElement.hidden=!rows.length;
  for(const button of viewButtons)button.setAttribute('aria-pressed',String(button.dataset.stageView===(byStage?'stage':'map')));
  activeFilters();
  const showEnemies=element('stage-show-enemies').checked,route=selectionMode?'/stage-sortie/':'/stage-detail/';
  const order=(key,label)=>'<button type="button" data-sort="'+key+'"'+(state.sort===key?' class="is-current"':'')+'>'+label+(state.sort===key?(state.direction==='asc'?' ▲':' ▼'):'')+'</button>';
  const sortAttr=key=>state.sort===key?' aria-sort="'+(state.direction==='asc'?'ascending':'descending')+'"':'';
  const table=element('stage-table');
  table.tHead.innerHTML='<tr><th scope="col" class="stage-identity-head"'+(['id','name','map'].includes(state.sort)?sortAttr(state.sort):'')+'>'+order('name',byStage?'ステージ名':'マップ名')+order('id','ID')+(byStage?order('map','マップ'):'')+'</th>'+
    (byStage?'':'<th scope="col"'+sortAttr('count')+'>'+order('count','ステージ数')+'</th>')+'<th scope="col"'+sortAttr('energy')+'>'+order('energy','統率力')+'</th><th scope="col"'+sortAttr('difficulty')+'>'+order('difficulty','難易度')+'</th>'+(showEnemies?'<th scope="col">出現する敵</th>':'')+'<th scope="col">制限・特殊条件</th></tr>';
  const series=new Map(database.series.map(entry=>[entry.id,entry.label]));
  table.tBodies[0].innerHTML=rows.slice((page-1)*size,page*size).map(entry=>{
    const {map,stage,stages}=entry,{enemies,flags,energy,difficulty}=stage||entry,crown=state.crown||1;
    const mapUrl=stageMapUrl(map,crown).replace('/stage-detail/',route);
    const url=stage?stageDetailUrl(stage,crown).replace('/stage-detail/',route):mapUrl;
    const code=stage?escapeHtml(stage.id):escapeHtml(map.key)+' <span>('+map.nativeId+')</span>';
    const subtitle=stage?'<a href="'+mapUrl+'">'+escapeHtml(map.name)+'</a>':escapeHtml(series.get(map.series)||map.series);
    const matched=!stage&&stages.length<map.stages.length?'<div class="stage-search-matches">'+stages.slice(0,3).map(value=>'<a href="'+stageDetailUrl(value,crown).replace('/stage-detail/',route)+'">'+escapeHtml(value.name)+'</a>').join('')+'</div>':'';
    const icons=showEnemies?'<td>'+stageEnemyStrip(enemies,enemyDatabase,8,(enemy,icon)=>'<a href="'+escapeHtml(enemyDetailUrl(enemy))+'" title="'+escapeHtml(enemy.name)+'" aria-label="'+escapeHtml(enemy.name)+'">'+icon+'</a>')+'</td>':'';
    const count=!stage?'<td class="stage-search-count">'+(stages.length===map.stages.length?stages.length:stages.length+' / '+map.stages.length)+'</td>':'';
    return '<tr><th scope="row" class="stage-result-name"><a class="stage-result-title" href="'+url+'">'+escapeHtml(stage?.name||map.name)+'</a><div class="stage-result-meta"><span class="stage-map-id">'+code+'</span><span>'+subtitle+'</span></div>'+matched+'</th>'+count+
      '<td>'+formatRange(energy,formatNumber)+'</td><td class="stage-search-difficulty">'+formatRange(difficulty,value=>'★'+value)+'</td>'+icons+'<td>'+(flags.length?'<div class="stage-result-tags" tabindex="0" aria-label="制限・特殊条件">'+stageTags(flags)+'</div>':'<span class="db-meta">—</span>')+'</td></tr>';
  }).join('');
}
function readControls(){
  state.crown=Number(element('stage-crown-filter').value);
  for(const key of ['query','series','enemy','reward','background','music'])state[key]=element('stage-'+key).value;
  for(const key of ['attributes','gimmicks'])state[key]=[...element('stage-'+key).querySelectorAll('input:checked')].map(input=>input.value);
  for(const [id,key]of [['enemy-mode','enemyMode'],['attribute-mode','attributeMode']])state[key]=element('stage-'+id).querySelector('input:checked').value;
  for(const [id,key]of [['exclude-enemies','excludeEnemies'],['attributes-only','attributesOnly']])state[key]=element('stage-'+id).checked;
  for(const [key]of stageRanges)state.ranges[key]=['min','max'].map(suffix=>element('stage-'+key+'-'+suffix).value);
}
function filterRows(){return (byStage?selectStageRows:selectStageMaps)(database,enemyDatabase,state);}
function update(commit=true){clearTimeout(queryTimer);readControls();page=1;rows=filterRows();render();if(commit)saveState();}
function initialize(){
  element('stage-crown-filter').value=state.crown;
  const groups=[['日本編・未来編・宇宙編・魔界編',/^(EOC|ITF|COTC|DM)/],['レジェンド',/^(N|NA|ND|D)$/],['イベント・コラボ',/^(S|A|C|CA|Q|PR|SR)$/],['道場・塔・地底迷宮',/^(R|T|G|V|L)$/],['その他',/.*/]];
  const series=selectStageSeries(database);
  element('stage-series').innerHTML='<option value="">すべて</option>'+groups.map(([group],index)=>{
    const options=series.filter(value=>groups.findIndex(([,pattern])=>pattern.test(value.id))===index).map(value=>'<option value="'+escapeHtml(value.id)+'">'+escapeHtml(value.label+' ('+value.id+')')+'</option>').join('');
    return options?'<optgroup label="'+group+'">'+options+'</optgroup>':'';
  }).join('');
  state.series=database.series.some(series=>series.id===state.series)?state.series:'';
  const attributes=[...enemyDatabase.attributes,...enemyDatabase.species];
  state.attributes=state.attributes.filter(key=>attributes.some(item=>item.key===key));state.gimmicks=state.gimmicks.filter(key=>labels.has(key));
  element('stage-attributes').innerHTML=attributes.map(item=>iconChoiceHtml(enemyDatabase,{...item,checked:state.attributes.includes(item.key)})).join('');
  element('stage-gimmicks').innerHTML=stageGimmicks.filter(([key])=>database.stages.some(stage=>stage.flags.includes(key))).map(([key,label])=>'<label class="db-chip"><input type="checkbox" value="'+key+'"'+(state.gimmicks.includes(key)?' checked':'')+'><span>'+label+'</span></label>').join('');
  element('stage-enemy-options').innerHTML=enemyDatabase.enemies.map(enemy=>'<option value="'+escapeHtml(enemy.name)+'">ID '+enemy.id+'</option>').join('');
  element('stage-ranges').innerHTML=stageRanges.map(([key,label])=>'<label>'+label+'<input id="stage-'+key+'-min" type="number" min="0" step="any" aria-label="'+label+'の下限"><span>〜</span><input id="stage-'+key+'-max" type="number" min="0" step="any" aria-label="'+label+'の上限"></label>').join('');
  for(const key of ['query','series','enemy','reward','background','music'])element('stage-'+key).value=state[key];
  for(const [id,key]of [['enemy-mode','enemyMode'],['attribute-mode','attributeMode']])for(const input of element('stage-'+id).querySelectorAll('input'))input.checked=input.value===state[key];
  for(const [id,key]of [['exclude-enemies','excludeEnemies'],['attributes-only','attributesOnly']])element('stage-'+id).checked=state[key];
  for(const [key,bounds]of Object.entries(state.ranges))for(const [index,suffix]of ['min','max'].entries())element('stage-'+key+'-'+suffix).value=bounds[index];
  if(state.gimmicks.length||state.reward||state.background||state.music||state.excludeEnemies||state.attributesOnly||Object.values(state.ranges).some(values=>values.some(value=>value!=='')))element('stage-filters').querySelector('details').open=true;
  initializeRewardPicker(element('stage-reward-picker'),database);
  bindIconHints(element('stage-filters'),element('stage-icon-hint'));
  element('stage-version').textContent='JP データv'+database.gameVersion;element('stage-status').hidden=true;element('stage-filters').hidden=false;element('stage-results').hidden=false;
  if(byStage&&state.sort==='count')state.sort='id';
  rows=filterRows();render();saveState();
}
initializeGameSettings(element('stage-version').parentElement,()=>defaults,values=>{Object.assign(defaults,values);element('stage-page-size').value=values.pageSize;if(database){page=1;render();saveState();}});
element('stage-page-size').value=[25,50,100].includes(Number(params.get('size')))?params.get('size'):defaults.pageSize;
element('stage-page-size').addEventListener('change',()=>{page=1;render();saveState();});
for(const button of viewButtons)button.addEventListener('click',()=>{
  const next=button.dataset.stageView==='stage';if(next===byStage)return;
  byStage=next;if(byStage&&state.sort==='count')state.sort='id';if(!byStage&&state.sort==='map')state.sort='name';if(database)update();
});
element('stage-query').addEventListener('input',event=>{if(!database||event.isComposing)return;clearTimeout(queryTimer);queryTimer=setTimeout(update,100);});
element('stage-query').addEventListener('compositionend',()=>{if(database)update();});
element('stage-show-enemies').checked=params.get('showEnemies')==='true';
element('stage-show-enemies').addEventListener('change',()=>{if(database)render();saveState();});
element('stage-filters').addEventListener('submit',event=>{event.preventDefault();if(database)update();});
element('stage-filters').addEventListener('input',event=>{if(database)update(!event.target.matches('input[type=search],input[type=text],input[type=number]'));});
element('stage-filters').addEventListener('change',()=>{if(database)saveState();});
element('stage-filters').addEventListener('keyup',event=>{if(event.key==='Enter'&&!event.isComposing&&event.target.matches('input[type=search],input[type=text],input[type=number]')&&database)saveState();});
element('stage-reset').addEventListener('click',()=>{clearPageParams('stage-search');location.href='/pages/stage-search/'+(selectionMode?'?play=1':'');});
element('stage-table').addEventListener('click',event=>{const button=event.target.closest('[data-sort]');if(!button)return;state.direction=state.sort===button.dataset.sort&&state.direction==='asc'?'desc':'asc';state.sort=button.dataset.sort;update();element('stage-table').querySelector('[data-sort='+state.sort+']')?.focus({preventScroll:true});});
async function load(){element('stage-retry').hidden=true;try{[database,enemyDatabase]=await Promise.all([loadStageSearchIndex(),loadEnemyDatabase()]);initialize();}catch(error){element('stage-status').textContent=error.message;element('stage-status').hidden=false;element('stage-retry').hidden=false;}}
element('stage-retry').addEventListener('click',load);load();
