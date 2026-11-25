import {readPageParams,writePageParams,clearPageParams} from "/native-state.js";
import {loadStageSearchIndex} from '/search-index.js';
import {loadEnemyDatabase} from '../../shared/game/enemies.js';
import {enemyImageHtml} from '../../shared/game/enemy-view.js';
import {escapeHtml,formatNumber,iconChoiceHtml,bindIconHints} from '../../shared/game/database-view.js';
import {enemyDetailUrl} from '../../shared/game/enemy-stats.js';
import {readGameSettings,initializeGameSettings} from '../../shared/browser/game-settings.js';
import {initializeRewardPicker} from './rewards.js';
import {createPagination} from '../../shared/browser/pagination.js';
import {stageGimmicks,stageRanges,selectStageMaps,selectStageRows,stageDetailUrl,stageMapUrl,selectStageSeries} from './model.js';

const element=id=>document.getElementById(id),params=readPageParams("stage-search"),defaults=readGameSettings();
const selectionMode=params.get('play')==='1';
if(selectionMode){document.title='既存ステージを選択 | KBCS';const tab=document.querySelector('.workspace-tab');if(tab)tab.textContent='既存ステージを選択';}
const textFilters=['query','enemy','reward','background','music','listing'];
const choiceFilters=['series','attributes','gimmicks'];
const state={
  ...Object.fromEntries(textFilters.map(key=>[key,params.get(key==='query'?'q':key)||''])),
  ...Object.fromEntries(choiceFilters.map(key=>[key,(params.get(key)||'').split(',').filter(Boolean)])),
  crown:Math.max(0,Math.min(4,Number(params.get('crown'))||0)),stageNumber:params.get('stageNumber')||'',
  enemyMode:params.get('enemyMode')==='any'?'any':'all',attributeMode:params.get('attributeMode')==='all'?'all':'any',
  excludeEnemies:params.get('excludeEnemies')==='true',excludeAttributes:params.get('excludeAttributes')==='true',attributesOnly:params.get('attributesOnly')==='true',
  ranges:Object.fromEntries(stageRanges.map(([key])=>[key,[params.get(key+'Min')||'',params.get(key+'Max')||'']])),
  sort:['id','name','map','count',...stageRanges.map(([key])=>key)].includes(params.get('sort'))?params.get('sort'):'id',direction:params.get('direction')==='desc'?'desc':'asc',
};
let database,enemyDatabase,rows=[],page=Math.max(1,Math.trunc(Number(params.get('page')))||1);
let byStage=params.get('view')==='stage';
const pagination=[element('stage-pagination-top'),element('stage-pagination')].map(root=>createPagination(root,value=>{page=value;render();saveState();}));
const labels=new Map(stageGimmicks),commonColumns=[['enemies','出現する敵'],['energy','統率力'],['difficulty','難易度'],['flags','ギミック']];
const formatRange=(value,format)=>{
  const values=Array.isArray(value)?value:[value];
  return [...new Set(values)].filter(Number.isFinite).map(format).join('〜')||'—';
};

function saveState(){
  const query=new URLSearchParams();
  for(const key of [...textFilters,'stageNumber'])if(state[key])query.set(key==='query'?'q':key,state[key]);
  for(const key of choiceFilters)if(state[key].length)query.set(key,state[key].join(','));
  for(const [key,fallback]of [['enemyMode','all'],['attributeMode','any'],['sort','id'],['direction','asc']])if(state[key]!==fallback)query.set(key,state[key]);
  for(const key of ['excludeEnemies','excludeAttributes','attributesOnly'])if(state[key])query.set(key,'true');
  for(const [key,bounds]of Object.entries(state.ranges))for(const [index,suffix]of ['Min','Max'].entries())if(bounds[index]!=='')query.set(key+suffix,bounds[index]);
  if(page>1)query.set('page',page);query.set('size',element('stage-page-size').value);query.set('showEnemies',String(element('stage-show-enemies').checked));
  if(byStage)query.set('view','stage');
  if(state.crown)query.set('crown',state.crown);
  writePageParams("stage-search",query);
}
function stageNamesHtml(stages,stageUrl){
  if(!stages.length)return '—';
  const link=stage=>'<a href="'+escapeHtml(stageUrl(stage))+'">'+escapeHtml(stage.name||stage.id)+'</a>';
  const visible=stages.slice(0,3).map(link).join('');
  return stages.length<=3?visible:visible+'<details><summary>ほか '+(stages.length-3)+'件</summary>'+stages.slice(3).map(link).join('')+'</details>';
}
function render(){
  const size=Number(element('stage-page-size').value),pages=Math.max(1,Math.ceil(rows.length/size));page=Math.min(page,pages);
  for(const item of pagination)item.update(page,pages);
  const mapCount=byStage?new Set(rows.map(entry=>entry.map.key)).size:rows.length;
  const stageCount=byStage?rows.length:rows.reduce((count,entry)=>count+entry.stages.length,0);
  element('stage-count').textContent=mapCount.toLocaleString('ja-JP')+'マップ / '+stageCount.toLocaleString('ja-JP')+'ステージ';element('stage-empty').hidden=!!rows.length;
  const displayed=[['id','ID'],[byStage?'map':'name','マップ名'],[byStage?'name':'stages','ステージ名'],...(byStage?[]:[['count','ステージ数']]),...commonColumns];
  const showEnemies=element('stage-show-enemies').checked;
  const route=selectionMode?'/stage-sortie/':'/stage-detail/';
  const crown=state.crown||1,stageUrl=stage=>stageDetailUrl(stage,crown).replace('/stage-detail/',route);
  element('stage-table').querySelector('thead').innerHTML='<tr>'+displayed.map(([key,label])=>'<th scope="col"'+(key==='enemies'?' class="stage-enemies-column"':'')+(key===state.sort?' aria-sort="'+(state.direction==='asc'?'ascending':'descending')+'"':'')+'>'+(['stages','enemies','flags'].includes(key)?label:'<button type="button" data-sort="'+key+'">'+label+(state.sort===key?(state.direction==='asc'?' ▲':' ▼'):'')+'</button>')+'</th>').join('')+'</tr>';
  element('stage-table').querySelector('tbody').innerHTML=rows.slice((page-1)*size,page*size).map(entry=>{
    const {map,stage,stages,stageLinks}=entry,{enemies,flags,energy,difficulty}=stage||entry;
    const mapUrl=stageMapUrl(map,crown).replace('/stage-detail/',route);
    const url=stage?stageUrl(stage):mapUrl;
    const icons=showEnemies?enemies.slice(0,12).map(id=>{const enemy=enemyDatabase.enemies[id];return enemy?'<a href="'+escapeHtml(enemyDetailUrl(enemy))+'" title="'+escapeHtml(enemy.name)+'（ID '+id+'）" aria-label="'+escapeHtml(enemy.name)+'の詳細">'+enemyImageHtml(enemyDatabase,enemy,24)+'</a>':'<span title="敵ID '+id+'">#'+id+'</span>';}).join(''):'';
    const number=stage?escapeHtml(stage.id):escapeHtml(map.key)+'<small>('+map.nativeId+')</small>';
    const count=stage?'':'<td>'+(stages.length===map.stages.length?stages.length:stages.length+' / '+map.stages.length)+'</td>';
    return '<tr><td class="stage-map-id">'+number+'</td><td class="stage-names"><a href="'+escapeHtml(mapUrl)+'">'+escapeHtml(map.name)+'</a></td><td class="stage-names">'+stageNamesHtml(stage?[stage]:stageLinks,stageUrl)+'</td>'+count+'<td class="stage-enemies-column"><div class="stage-enemy-icons">'+icons+(showEnemies&&enemies.length>12?'<a href="'+escapeHtml(url)+'">+'+(enemies.length-12)+'</a>':'')+'</div></td><td>'+formatRange(energy,formatNumber)+'</td><td>'+formatRange(difficulty,value=>'★'+value)+'</td><td class="stage-tags">'+flags.filter(key=>labels.has(key)).map(key=>'<span>'+labels.get(key)+'</span>').join('')+'</td></tr>';
  }).join('');
}
function readControls(){
  state.crown=Number(element('stage-crown-filter').value);
  state.stageNumber=element('stage-number').validity.valid?element('stage-number').value:'';
  for(const key of textFilters)state[key]=element('stage-'+key).value;
  for(const key of choiceFilters)state[key]=[...element('stage-'+key).querySelectorAll('input:checked')].map(input=>input.value);
  element('stage-series-summary').textContent='マップ種別（'+(state.series.length?state.series.length+'種別':'すべて')+'）';
  for(const [id,key]of [['enemy-mode','enemyMode'],['attribute-mode','attributeMode']])state[key]=element('stage-'+id).querySelector('input:checked').value;
  state.excludeEnemies=element('stage-exclude-enemies').checked;
  const scope=element('stage-attribute-scope').value;
  state.excludeAttributes=scope==='exclude';state.attributesOnly=scope==='only';
  for(const [key]of stageRanges)state.ranges[key]=['min','max'].map(suffix=>element('stage-'+key+'-'+suffix).value);
}
function filterRows(){return (byStage?selectStageRows:selectStageMaps)(database,enemyDatabase,state);}
function update(commit=true){readControls();page=1;rows=filterRows();render();if(commit)saveState();}
function initialize(){
  element('stage-crown-filter').value=state.crown;
  element('stage-number').value=state.stageNumber;
  const chip=(key,label,checked)=>'<label class="db-chip"><input type="checkbox" value="'+escapeHtml(key)+'"'+(checked?' checked':'')+'><span>'+escapeHtml(label)+'</span></label>';
  element('stage-series').innerHTML=selectStageSeries(database).map(series=>chip(series.id,series.id+' '+series.label,state.series.includes(series.id))).join('');
  const attributes=[...enemyDatabase.attributes,...enemyDatabase.species];
  if(!state.listing&&state.gimmicks.includes('unlisted'))state.listing='unlisted';
  element('stage-attributes').innerHTML=attributes.map(item=>iconChoiceHtml(enemyDatabase,{...item,checked:state.attributes.includes(item.key)})).join('');
  element('stage-gimmicks').innerHTML=stageGimmicks.filter(([key])=>key!=='unlisted'&&database.stages.some(stage=>stage.flags.includes(key))).map(([key,label])=>chip(key,label,state.gimmicks.includes(key))).join('');
  element('stage-enemy-options').innerHTML=enemyDatabase.enemies.map(enemy=>'<option value="'+escapeHtml(enemy.name)+'">ID '+enemy.id+'</option>').join('');
  element('stage-ranges').innerHTML=stageRanges.map(([key,label])=>'<label>'+label+'<input id="stage-'+key+'-min" type="number" min="0" step="any" aria-label="'+label+'の下限"><span>〜</span><input id="stage-'+key+'-max" type="number" min="0" step="any" aria-label="'+label+'の上限"></label>').join('');
  for(const key of textFilters)element('stage-'+key).value=state[key];
  for(const [id,key]of [['enemy-mode','enemyMode'],['attribute-mode','attributeMode']])for(const input of element('stage-'+id).querySelectorAll('input'))input.checked=input.value===state[key];
  element('stage-exclude-enemies').checked=state.excludeEnemies;
  element('stage-attribute-scope').value=state.excludeAttributes?'exclude':state.attributesOnly?'only':'include';
  for(const [key,bounds]of Object.entries(state.ranges))for(const [index,suffix]of ['min','max'].entries())element('stage-'+key+'-'+suffix).value=bounds[index];
  if(state.gimmicks.some(key=>key!=='unlisted')||state.crown||state.background||state.music||Object.values(state.ranges).some(values=>values.some(value=>value!=='')))element('stage-filters').querySelector('.stage-filter-details').open=true;
  initializeRewardPicker(element('stage-reward-picker'),database);
  bindIconHints(element('stage-filters'),element('stage-icon-hint'));
  element('stage-version').textContent='JP データv'+database.gameVersion;element('stage-status').hidden=true;element('stage-filters').hidden=false;element('stage-results').hidden=false;
  if(byStage&&state.sort==='count')state.sort='id';
  readControls();rows=filterRows();render();saveState();
}
initializeGameSettings(element('stage-version').parentElement,()=>defaults,values=>{Object.assign(defaults,values);element('stage-page-size').value=values.pageSize;if(database){page=1;render();saveState();}});
element('stage-page-size').value=[25,50,100].includes(Number(params.get('size')))?params.get('size'):defaults.pageSize;
element('stage-page-size').addEventListener('change',()=>{page=1;render();saveState();});
element('stage-result-view').value=byStage?'stage':'map';
element('stage-result-view').addEventListener('change',event=>{
  byStage=event.target.value==='stage';
  if(byStage&&state.sort==='count')state.sort='id';
  if(!byStage&&state.sort==='map')state.sort='name';
  if(database)update();
});
element('stage-show-enemies').checked=params.get('showEnemies')==='true';element('stage-table').classList.toggle('hide-stage-enemies',!element('stage-show-enemies').checked);
element('stage-show-enemies').addEventListener('change',event=>{element('stage-table').classList.toggle('hide-stage-enemies',!event.target.checked);if(database)render();saveState();});
element('stage-filters').addEventListener('submit',event=>{event.preventDefault();if(database)saveState();});
element('stage-filters').addEventListener('input',event=>{if(database)update(!event.target.matches('input[type=search],input[type=text],input[type=number]'));});
element('stage-filters').addEventListener('change',()=>{if(database)saveState();});
element('stage-filters').addEventListener('keyup',event=>{if(event.key==='Enter'&&!event.isComposing&&event.target.matches('input[type=search],input[type=text],input[type=number]')&&database)saveState();});
element('stage-reset').addEventListener('click',()=>{clearPageParams('stage-search');location.href='/pages/stage-search/'+(selectionMode?'?play=1':'');});
element('stage-table').addEventListener('click',event=>{const button=event.target.closest('[data-sort]');if(!button)return;state.direction=state.sort===button.dataset.sort&&state.direction==='asc'?'desc':'asc';state.sort=button.dataset.sort;update();});
async function load(){element('stage-retry').hidden=true;try{[database,enemyDatabase]=await Promise.all([loadStageSearchIndex(),loadEnemyDatabase()]);initialize();}catch(error){element('stage-status').textContent=error.message;element('stage-status').hidden=false;element('stage-retry').hidden=false;}}
element('stage-retry').addEventListener('click',load);load();
