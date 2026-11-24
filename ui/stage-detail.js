import {loadStageSearchIndex} from './search-index.js';
import {loadStageVariant} from './src/shared/game/stages.js';
import {stageMapUrl,resolveStageRoute} from './src/features/stages/model.js';
import {loadStageDisplay,stageGroups} from './src/features/stages/display-fields.js';
import {loadStageDisplayMap} from './src/features/stages/display-data.js';
import {mountStageSheets} from './src/features/stages/display-sheet.js';
import {activeDisplayPreset} from './src/shared/ui/display-settings.js';
import {escapeHtml} from './src/shared/game/database-view.js';
import {readGameSettings} from './src/shared/browser/game-settings.js';
import {readPageParams,writePageParams} from './native-state.js';

const element=id=>document.getElementById(id),params=readPageParams('stage-detail');
const settings=readGameSettings(),message=text=>element('stage-message').textContent=text;
const detailMode=element('stage-display-mode'),detailSettingsButton=element('stage-detail-settings-open');
const detailDialog=element('stage-detail-settings'),detailFields=element('stage-detail-settings-fields');
const detailStorageKey='kbcs:stage-detail:hidden-fields';
let hiddenFields=readHiddenFields();
const xpDialog=element('stage-xp-dialog'),xpForm=xpDialog.querySelector('form');
const xpInputs={clears:element('stage-xp-clears'),combo:element('stage-xp-combo'),okame:element('stage-xp-okame')};
const xpSettings={clears:Math.max(0,Math.min(2147483647,Math.trunc(Number(params.get('clears')))||0)),
  combo:Math.max(0,Math.min(100,Math.trunc(Number(params.get('combo')))||0)),okame:Number(params.get('okame')==='true')};
let data,ledger,configuration,stages=[],selected=params.get('stage')??'',crown=1,xpOrigin;
const variantRequests=new Map();
const sheets=mountStageSheets(element('stage-map-info'),element('stage-output'),{
  onCrown(value){crown=value;refresh();},
  async onPattern(stage,source){
    const request=loadStageVariant(data.map.key,stage.index,source);
    variantRequests.set(stage.id,request);
    try{
      const variant=await request;
      if(variantRequests.get(stage.id)!==request)return;
      // 候補APIの旧版では難易度の出典がないため、取得済みの面情報も維持する。
      stages=stages.map(item=>item.id===stage.id?{...item,...variant}:item);
      await render();
    }finally{if(variantRequests.get(stage.id)===request)variantRequests.delete(stage.id);}
  },
  onXpSettings(button){
    xpOrigin=button.closest('.stage-display-entry');
    xpInputs.clears.value=xpSettings.clears;xpInputs.combo.value=xpSettings.combo;xpInputs.okame.checked=Boolean(xpSettings.okame);
    element('stage-xp-profile').textContent='勉強力Lv'+settings.studyLevel+' / お宝＋'+settings.studyTreasureBonus+'%';
    xpDialog.showModal();
  },
  onMessage:message,
});
detailMode.checked=false;
element('stage-time').checked=params.has('time')?params.get('time')==='frames':!settings.seconds;
element('stage-enemy-stats').checked=params.get('enemyStats')==='true';
xpForm.addEventListener('submit',()=>{
  Object.assign(xpSettings,{clears:xpInputs.clears.valueAsNumber,combo:xpInputs.combo.valueAsNumber,okame:Number(xpInputs.okame.checked)});
  refresh();
});
xpDialog.addEventListener('close',()=>xpOrigin?.querySelector('[data-stage-xp-settings]')?.focus({preventScroll:true}));

function readHiddenFields(){
  try{
    const stored=JSON.parse(localStorage.getItem(detailStorageKey));
    if(Array.isArray(stored))return new Set(stored.filter(id=>typeof id==='string'));
  }catch{}
  return new Set();
}
function resolveDisplay(){return configuration.resolve(activeDisplayPreset(configuration.read().value));}
detailSettingsButton.addEventListener('click',()=>{
  detailFields.innerHTML=Object.entries(resolveDisplay()).map(([group,settings])=>{
    const choices=settings.filter(setting=>setting.visibility!=='hidden').map(({field,label})=>
      '<label><input type="checkbox" value="'+escapeHtml(field.id)+'"'+(hiddenFields.has(field.id)?' checked':'')+'>'+escapeHtml(label||field.id)+'</label>').join('');
    return choices?'<fieldset><legend>'+escapeHtml(stageGroups[group])+'</legend>'+choices+'</fieldset>':'';
  }).join('');
  detailDialog.showModal();
});
detailDialog.querySelector('form').addEventListener('submit',event=>{
  if(event.submitter?.value!=='apply')return;
  for(const checkbox of detailFields.querySelectorAll('input')){
    if(checkbox.checked)hiddenFields.add(checkbox.value);
    else hiddenFields.delete(checkbox.value);
  }
  try{localStorage.setItem(detailStorageKey,JSON.stringify([...hiddenFields]));}
  catch{message('詳細表示設定を保存できませんでした。');}
  refresh();
});

function saveState(){
  const state=new URLSearchParams({crown:String(crown),stage:selected,time:settings.seconds?'seconds':'frames',
    enemyStats:String(element('stage-enemy-stats').checked),clears:String(xpSettings.clears),combo:String(xpSettings.combo),okame:String(Boolean(xpSettings.okame))});
  writePageParams('stage-detail',state);
}
function render(){
  const {map,database}=data,visible=selected===''?stages:stages.filter(stage=>String(stage.index)===selected);
  settings.seconds=!element('stage-time').checked;
  const detail=detailMode.checked,stats=element('stage-enemy-stats').checked;
  detailSettingsButton.hidden=!detail;
  const condition={...xpSettings,studyLevel:settings.studyLevel,treasure:settings.studyTreasureBonus};
  let display=resolveDisplay();
  if(detail&&hiddenFields.size)
    display=Object.fromEntries(Object.entries(display).map(([group,fields])=>[group,fields.filter(setting=>!hiddenFields.has(setting.field.id))]));
  for(const button of element('stage-navigation').querySelectorAll('[data-stage-choice]'))button.setAttribute('aria-current',button.dataset.stageChoice===selected?'page':'false');
  const mapIndex=database.maps.findIndex(item=>item.key===map.key);
  for(const [link,offset] of [[element('stage-previous'),-1],[element('stage-next'),1]])if(link)link.href=stageMapUrl(database.maps[mapIndex+offset],crown);
  saveState();
  return sheets.render({...data,visible,stages,crown,settings:{...settings},condition,display,detail,stats,ledger,showXpSettings:true});
}
function refresh(){if(data)void render().catch(error=>message(error.message));}
element('stage-navigation').addEventListener('click',event=>{
  const button=event.target.closest('[data-stage-choice]');if(!button)return;
  selected=button.dataset.stageChoice;refresh();element('main').scrollTop=0;
  if(!document.querySelector('.workspace'))window.scrollTo(0,0);
});
for(const id of ['stage-time','stage-display-mode','stage-enemy-stats'])element(id).addEventListener('change',refresh);
window.addEventListener('kbcs:simulation-change',event=>{Object.assign(settings,event.detail);refresh();});
window.addEventListener('storage',event=>{
  if(event.key===detailStorageKey||event.key===null)hiddenFields=readHiddenFields();
  if(event.key===detailStorageKey||event.key==='kbcs:database-display:stages'||event.key===null)refresh();
});
window.addEventListener('pageshow',event=>{if(event.persisted){detailMode.checked=false;refresh();}});

async function load(){
  element('stage-retry').hidden=true;
  try{
    const indexRequest=loadStageSearchIndex(),routeRequest=indexRequest.then(index=>resolveStageRoute(index,params));
    const detailRequest=(params.get('map')?Promise.resolve(params.get('map')):routeRequest.then(route=>route.map.key)).then(key=>loadStageDisplayMap(key,indexRequest));
    const [loaded,route,definition]=await Promise.all([detailRequest,routeRequest,loadStageDisplay()]);
    data=loaded;({configuration,ledger}=definition);
    const {map,database}=data;stages=data.stages;
    selected=route.selected?String(stages.find(stage=>stage.id===route.selected).index):'';
    crown=Math.max(1,Math.min(map.stars.length,Math.trunc(Number(params.get('crown')))||1));
    document.title=map.name+' | KBCS';
    element('stage-version').textContent='JP データv'+database.gameVersion;
    const index=database.maps.findIndex(value=>value.key===map.key);
    element('stage-navigation').innerHTML='<div class="db-toolbar">'+[[database.maps[index-1],'前','previous'],[database.maps[index+1],'次','next']]
      .map(([value,label,id])=>value?'<a id="stage-'+id+'" href="'+stageMapUrl(value,crown)+'">'+label+'のマップ</a>':'').join('')+'</div><div class="workspace-stage-list"><button type="button" data-stage-choice="">すべて（'+stages.length+'）</button>'+
      stages.map(stage=>'<button type="button" data-stage-choice="'+stage.index+'">'+(stage.index+1)+'. '+escapeHtml(stage.name)+'</button>').join('')+'</div>';
    const warnings=configuration.read().warnings;if(warnings.length)message(warnings.join(' / '));
    element('stage-content').hidden=false;
    const displayed=render();element('stage-status').hidden=true;await displayed;
  }catch(error){element('stage-content').hidden=true;element('stage-status').hidden=false;element('stage-status').textContent=error.message;element('stage-retry').hidden=false;}
}
element('stage-retry').addEventListener('click',load);load();
