import {mountDisplayEditor} from './src/shared/ui/display-editor.js';
import {loadStageDisplay,stageGroups} from './src/features/stages/display-fields.js';
import {loadStageDisplayMap} from './src/features/stages/display-data.js';
import {mountStageSheets} from './src/features/stages/display-sheet.js';
import {normalizeStageQuery,stageDetailUrl} from './src/features/stages/model.js';
import {loadStageVariant} from './src/shared/game/stages.js';
import {readGameSettings} from './src/shared/browser/game-settings.js';
import {loadStageSearchIndex} from './search-index.js';

const node=name=>document.getElementById('display-'+name),params=new URLSearchParams(location.search);
const status=text=>node('preview-status').textContent=text;
const settings=readGameSettings();
const adapters={stages:{load:loadStageDisplay,groups:stageGroups}};
let data,ledger,display,crown=1,index,mapNames=[],mapRevision=0;
const preview=mountStageSheets(node('preview-map'),node('preview-stage'),{
  onCrown(value){crown=value;node('crown').value=String(crown);refresh();},
  async onPattern(stage,source){
    const previous=data;
    const pattern=await loadStageVariant(previous.map.key,stage.index,source);
    if(data!==previous)return;
    data={...previous,stages:previous.stages.map(item=>item.id===stage.id?{...item,...pattern}:item)};
    refresh();
  },
  onMessage:status,
});
node('time').value=settings.seconds?'seconds':'frames';

const option=(value,text)=>new Option(text,value);
function render(){
  if(!data||!display)return;
  const stage=data.stages.find(item=>String(item.index)===node('stage').value);
  if(stage)node('open-detail').href=stageDetailUrl(stage,crown);
  return preview.render({...data,visible:stage?[stage]:[],crown,settings:{...settings,seconds:node('time').value==='seconds'},
    condition:{clears:0,combo:0,okame:0,studyLevel:settings.studyLevel,treasure:settings.studyTreasureBonus},
    display,ledger,detail:node('mode').value==='detail',stats:node('stats').checked});
}
function refresh(){void Promise.resolve().then(render).catch(error=>status(error.message));}
function listMaps(selected=data?.map.key){
  const query=normalizeStageQuery(node('map-query').value).trim();
  const candidates=mapNames.filter(map=>map.text.includes(query));
  node('map').replaceChildren(option('',candidates.length?'マップを選択（'+candidates.length+'件）':'該当するマップなし'),
    ...candidates.slice(0,60).map(map=>option(map.key,map.name)));
  if(selected&&candidates.some(map=>map.key===selected)&&!Array.from(node('map').options).some(entry=>entry.value===selected)){
    const map=candidates.find(map=>map.key===selected);node('map').append(option(map.key,map.name));
  }
  node('map').value=selected&&Array.from(node('map').options).some(entry=>entry.value===selected)?selected:'';
}
async function selectMap(key,requestedStage='',requestedCrown=crown){
  if(!key)return;
  const revision=++mapRevision;status('プレビューを読み込み中です。');
  try{
    const detail=await loadStageDisplayMap(key,Promise.resolve(index));
    if(revision!==mapRevision)return;
    if(data?.map.key!==key)preview.clear();
    data=detail;crown=Math.max(1,Math.min(data.map.stars.length,requestedCrown));
    node('stage').replaceChildren(...data.stages.map(stage=>option(stage.index,(stage.index+1)+'. '+stage.name)));
    if(data.stages.some(stage=>String(stage.index)===requestedStage))node('stage').value=requestedStage;
    node('crown').replaceChildren(...data.map.stars.map((_,i)=>option(i+1,(i+1)+'冠')));node('crown').value=String(crown);
    status('');await render();
  }catch(error){if(revision===mapRevision)status('プレビューを表示できません。 '+error.message);}
}
async function loadPreview(){
  try{
    index=await loadStageSearchIndex();
    const names=new Map();
    for(const stage of index.stages){if(!names.has(stage.map))names.set(stage.map,[]);names.get(stage.map).push(stage.name,stage.id);}
    mapNames=index.maps.map(map=>({key:map.key,name:map.key+' '+map.name,text:normalizeStageQuery([map.key,map.name,map.nativeId,...(names.get(map.key)??[])].join(' '))}));
    const key=index.maps.some(map=>map.key===params.get('map'))?params.get('map'):index.maps.find(map=>map.key==='N000')?.key??index.maps[0].key;
    listMaps(key);await selectMap(key,params.get('stage'),Number(params.get('crown'))||1);
  }catch(error){status('プレビューを表示できません。 '+error.message);}
}
node('map-query').addEventListener('input',()=>listMaps());
node('map').addEventListener('change',()=>void selectMap(node('map').value));
node('crown').addEventListener('change',()=>{crown=Number(node('crown').value)||1;refresh();});
for(const name of ['stage','mode','time','stats'])node(name).addEventListener('change',refresh);
window.addEventListener('kbcs:simulation-change',event=>{Object.assign(settings,event.detail);refresh();});

async function initialize(){
  const database=Object.hasOwn(adapters,params.get('database'))?params.get('database'):'stages';
  node('database').value=database;
  const adapter=adapters[database],definition=await adapter.load();ledger=definition.ledger;
  mountDisplayEditor(node('editor'),definition.configuration,{groupLabels:adapter.groups,onPreview(value){display=value;refresh();}});
  void loadPreview();
}
void initialize().catch(error=>{node('editor').textContent=error.message;});
