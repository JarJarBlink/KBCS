import {loadStageSearchIndex} from './search-index.js';
import {loadStageVariant} from './src/shared/game/stages.js';
import {stageMapUrl,resolveStageRoute} from './src/features/stages/model.js';
import {loadStageDisplay} from './src/features/stages/display-fields.js';
import {loadStageDisplayMap} from './src/features/stages/display-data.js';
import {mountStageSheets} from './src/features/stages/display-sheet.js';
import {activeDisplayPreset} from './src/shared/ui/display-settings.js';
import {escapeHtml} from './src/shared/game/database-view.js';
import {readGameSettings} from './src/shared/browser/game-settings.js';
import {readPageParams,writePageParams} from './native-state.js';

const element=id=>document.getElementById(id),params=readPageParams('stage-detail');
const settings=readGameSettings(),message=text=>element('stage-message').textContent=text;
let data,ledger,configuration,stages=[],selected=params.get('stage')??'',crown=1;
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
  onMessage:message,
});
element('stage-display-mode').value='basic';
element('stage-time').value=params.get('time')||(settings.seconds?'seconds':'frames');
element('stage-enemy-stats').checked=params.get('enemyStats')==='true';
for(const key of ['clears','combo'])element('stage-xp-'+key).value=Math.max(0,Math.min(key==='combo'?100:2147483647,Math.trunc(Number(params.get(key)))||0));
element('stage-xp-okame').checked=params.get('okame')==='true';

function saveState(){
  const state=new URLSearchParams({crown:String(crown),stage:selected,time:element('stage-time').value,enemyStats:String(element('stage-enemy-stats').checked)});
  for(const key of ['clears','combo'])state.set(key,element('stage-xp-'+key).value);
  state.set('okame',String(element('stage-xp-okame').checked));
  writePageParams('stage-detail',state);
}
function render(){
  const {map,database}=data,visible=selected===''?stages:stages.filter(stage=>String(stage.index)===selected);
  settings.seconds=element('stage-time').value==='seconds';
  const detail=element('stage-display-mode').value==='detail',stats=element('stage-enemy-stats').checked;
  const condition={clears:Number(element('stage-xp-clears').value),combo:Number(element('stage-xp-combo').value),okame:Number(element('stage-xp-okame').checked),studyLevel:settings.studyLevel,treasure:settings.studyTreasureBonus};
  const display=configuration.resolve(activeDisplayPreset(configuration.read().value));
  element('stage-visible-count').textContent=map.key+' / '+visible.length+'ステージ / '+crown+'冠';
  element('stage-xp-profile').textContent='勉強力Lv'+condition.studyLevel+' / お宝＋'+condition.treasure+'%';
  for(const button of element('stage-navigation').querySelectorAll('[data-stage-choice]'))button.setAttribute('aria-current',button.dataset.stageChoice===selected?'page':'false');
  const mapIndex=database.maps.findIndex(item=>item.key===map.key);
  for(const [link,offset] of [[element('stage-previous'),-1],[element('stage-next'),1]])if(link)link.href=stageMapUrl(database.maps[mapIndex+offset],crown);
  element('stage-display-settings').href='/pages/display-settings/?'+new URLSearchParams({database:'stages',map:map.key,stage:selected,crown:String(crown)});
  saveState();
  return sheets.render({...data,visible,stages,crown,settings:{...settings},condition,display,detail,stats,ledger});
}
function refresh(){if(data)void render().catch(error=>message(error.message));}
element('stage-navigation').addEventListener('click',event=>{
  const button=event.target.closest('[data-stage-choice]');if(!button)return;
  selected=button.dataset.stageChoice;refresh();element('main').scrollTop=0;
  if(!document.querySelector('.workspace'))window.scrollTo(0,0);
});
for(const id of ['stage-time','stage-display-mode','stage-enemy-stats','stage-xp-clears','stage-xp-combo','stage-xp-okame'])element(id).addEventListener('change',refresh);
window.addEventListener('kbcs:simulation-change',event=>{Object.assign(settings,event.detail);refresh();});
window.addEventListener('storage',event=>{if(event.key==='kbcs:database-display:stages')refresh();});
window.addEventListener('pageshow',event=>{if(event.persisted){element('stage-display-mode').value='basic';refresh();}});

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
    document.title=map.name+' | KBCS';element('stage-title').textContent=map.key+' '+map.name;
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
