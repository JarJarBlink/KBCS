import {escapeHtml as esc} from '../../shared/game/database-view.js';
import {sheetRows,sheetTable,sheetRow,sheetColumns,columnTable,fieldContent,fieldLabel,fieldClass,fieldDescription,fieldVisible} from '../../shared/ui/data-sheet.js';
import {mapDisplayContext,enemyColumns,enemyRecords} from './display-fields.js';
import {rewardRows} from './display-rewards.js';
import {hasAbyssDetail,abyssStageId} from './model.js';
import {stageMediaParts,initializeStageMedia} from './native-media.js';
import {prepareEnemyStatistics,stageEnemySettings} from '/native-enemy-statistics.js';
import {calculateNative} from '/native-calculation.js';
import {catalog} from '/simulation-profile.js';
import {saveElementImage} from '../../shared/browser/capture.js';

const headingHtml=({map,stage,crown})=>{
  const crowns=map.stars.length<2?'':'<div class="stage-crown-control" role="group" aria-label="冠を選択">'+map.stars.map((_,i)=>
    '<button type="button" data-crown="'+(i+1)+'" data-capture-include aria-label="'+(i+1)+'冠" aria-pressed="'+(i+1===crown)+'"><img src="/icons/stages/crown-'+(i<crown?'on':'off')+'.png" alt="" width="25" height="24"><span>'+(i+1)+'</span></button>').join('')+'</div>';
  return '<tr><th colspan="4"><div class="stage-sheet-heading"><h2>'+esc(stageHeading(stage))+'</h2>'+crowns+
    '<button type="button" data-stage-capture="'+esc(stage.id)+'">画像保存</button></div></th></tr>';
};
const stageHeading=stage=>(stage.index+1)+'. '+stage.name+(stage.abyss?'（アビス）':'');
function mediaHtml(context,source=false){
  const settings=context.display.media.filter(setting=>fieldVisible(setting,{active:true},context.detail,source));
  if(!settings.length)return '';
  const media=stageMediaParts(context.database,context.stage,context.enemies);
  const classes={background:'stage-media-background',castle:'stage-media-castle',bgm:'stage-music'};
  const fields=settings.map(setting=>{
    const key=setting.field.id.split('.').at(-1),value=setting.field.get(media,setting);
    return fieldVisible(setting,value,context.detail,source)?'<div class="'+classes[key]+' '+fieldClass(setting)+'"><strong>'+fieldLabel(setting)+'</strong><div class="stage-media-value">'+fieldContent(value)+fieldDescription(setting)+'</div></div>':'';
  }).join('');
  return fields?'<div class="stage-media stage-media-configurable" data-media-stage="'+esc(context.stage.id)+'" data-media-variant="'+esc(context.stage.patternSource??'')+'">'+fields+'</div>':'';
}
function sourceBlock(rows,extra=''){
  return rows||extra?sheetRow('<details class="stage-native-source"><summary>元データ・計算内訳</summary>'+
    (rows?sheetTable('元データ・計算内訳',rows):'')+extra+'</details>'):'';
}
export function stageMapSheet(context){
  const {display,detail,map}=context;
  const raw=display.source.filter(setting=>setting.field.id==='source.mapColumns');
  const options={detail,source:true};
  const heading='<tr><th colspan="4"><div class="stage-sheet-heading"><h1 id="stage-title">'+esc(map.key+' '+map.name)+'</h1></div></th></tr>';
  return sheetTable('マップ情報',sheetRows(display.map,context,{detail})+
    sourceBlock(sheetRows([...display.map,...raw],context,options),sheetRows(raw,context,{detail})?sheetTable('マップ設定の元データ',sheetRows(raw,context,{detail})):''),{heading});
}
export function stageSheetParts(context){
  const {display,stage,map,detail,sortieResource}=context;
  const fields=display.stage.map(setting=>setting.field.id==='stage.energy'&&setting.label==='統率力'&&sortieResource!=='energy'?
    {...setting,label:'出撃コスト'}:setting);
  const options={detail,source:true};
  const source=display.source.filter(setting=>setting.field.id!=='source.mapColumns');
  const sourceRows=detail?sheetRows([...fields,...source],context,options):'';
  const rewardSettings=hasAbyssDetail(map,stage)&&!stage.abyss?
    display.reward.filter(setting=>setting.field.id!=='reward.clearCounts'):display.reward;
  const sourceMedia=mediaHtml(context,true),sourceRewards=detail?rewardRows(rewardSettings,context,true):'';
  const records=stage.spawns.length?enemyRecords(context):[];
  const columns=enemyColumns(display,context);
  const extra=(sourceMedia||'')+(sourceRewards?sheetTable('報酬の元データ',sourceRewards):'')+
    columnTable('敵出現情報の元データ',columns,records,context,options);
  const spawns=stage.variants?.length&&!stage.patternSource?'出現パターンを選択してください。':stage.missing?'固定の敵出現データは未収録です。':
    (records.length?'':'敵出現の設定なし');
  const enemyTable=spawns?'<div class="stage-pattern-placeholder">'+spawns+'</div>':columnTable('敵出現情報',columns,records,context,{detail});
  const block=mediaHtml(context);
  const normalSource=sheetRows(source,context,{detail});
  return {
    heading:headingHtml(context),
    basic:sheetRows(fields,context,{detail}),
    media:block?sheetRow(block):'',
    reward:rewardRows(rewardSettings,context),
    source:normalSource+sourceBlock(sourceRows,extra),
    enemy:enemyTable?sheetRow(enemyTable):'',
  };
}

const segments=['heading','basic','media','reward','source','enemy'];
const markup=new WeakMap();
function replaceMarkup(target,html){
  if(markup.get(target)===html)return;
  const history=[...target.querySelectorAll('details')].map(node=>[node.querySelector('summary')?.textContent,node.open]);
  const focus=target.contains(document.activeElement)?document.activeElement:null;
  const select=focus?.dataset.stagePattern,crown=focus?.dataset.crown,xp=focus?.matches('[data-stage-xp-settings]');
  const scrollRegions=[...target.querySelectorAll('.data-sheet-scroll')];
  const scrolls=scrollRegions.map(node=>node.scrollLeft),focusedRegion=scrollRegions.indexOf(focus);
  target.innerHTML=html;
  markup.set(target,html);
  for(const node of target.querySelectorAll('details')){
    const name=node.querySelector('summary')?.textContent,index=history.findIndex(([previous])=>name===previous);
    if(index>=0)node.open=history.splice(index,1)[0][1];
  }
  [...target.querySelectorAll('.data-sheet-scroll')].forEach((node,index)=>{
    node.scrollLeft=scrolls[index]??0;
    if(index===focusedRegion)node.focus({preventScroll:true});
  });
  if(crown!=null||select!=null||xp)target.querySelector(xp?'[data-stage-xp-settings]':crown!=null?'[data-crown="'+crown+'"]':'[data-stage-pattern="'+select+'"]')?.focus({preventScroll:true});
}
function memo(cache,key,run){
  if(cache.has(key))return cache.get(key);
  if(cache.size>=128)cache.delete(cache.keys().next().value);
  const request={status:'pending'};
  request.promise=Promise.resolve().then(run).then(value=>{request.value=value;request.status='ready';},error=>{
    request.error=error;request.status='error';cache.delete(key);
  });
  cache.set(key,request);
  return request;
}
function chunks(values,size){return Array.from({length:Math.ceil(values.length/size)},(_,i)=>values.slice(i*size,(i+1)*size));}
function nativeJobs(context,visible,cache){
  const {database,map,crown,condition,display,detail}=context,version=database.calculationVersion??database.gameVersion;
  const jobs=[],calculation=new Map(visible.map(stage=>[stage.id,{}]));
  const job=(stages,payload,response,field,supported=true)=>{
    if(!stages.length)return;
    const request=memo(cache,JSON.stringify([version,payload]),()=>{
      if(!supported)throw Error('DBと計算の対応版が一致しません。');
      return calculateNative(payload);
    });
    jobs.push({request,apply:()=>stages.forEach((stage,index)=>{
      const data=calculation.get(stage.id);
      if(request.status==='error'){data[field+'Error']=request.error.message;return;}
      const result=request.value?.[response]?.[index];
      if(result)data[field]=field==='xp'?result.stages:result;
    })});
  };
  const hasField=settings=>settings.some(field=>fieldVisible(field,{active:true},detail)||fieldVisible(field,{active:true},detail,true));
  if(hasField([...display.stage.filter(setting=>setting.field.id==='stage.xp'),...display.source.filter(setting=>setting.field.id==='source.xp')]))
    for(const batch of chunks(visible.filter(stage=>stage.xp!=null),64))job(batch,{stageExperience:batch.map(stage=>({mode:stage.nativeMode,kind:stage.nativeKind,stage:stage.index,base:stage.xp,...condition}))},'stageExperience','xp',version===catalog.version);
  if(map.materials&&hasField(display.reward.filter(setting=>['reward.materials','reward.materialDetails'].includes(setting.field.id)))){
    const {miss,weights,counts,multipliers}=map.materials;
    for(const batch of chunks(visible.filter(stage=>Number.isFinite(counts[stage.index])),64))job(batch,{materialDrops:batch.map(stage=>({count:counts[stage.index],multiplier:multipliers[crown-1],miss,weights}))},'materialDrops','materials',version===catalog.version);
  }
  if(hasField(display.reward.filter(setting=>['reward.policy','reward.policySource'].includes(setting.field.id))))
    for(const batch of chunks(visible.filter(stage=>stage.drops.length&&Number.isInteger(stage.rewardMode)),128))job(batch,{rewardPolicies:batch.map(stage=>({mode:stage.rewardMode,saveId:map.acquisitionId??-1,rewardId:Number(stage.rawRewards?.[6]??-1),crown}))},'rewardPolicies','policy');
  return {jobs,calculation};
}

// 同じstageのメディアDOMは差し替えず、再生位置と編集中の表示状態を保つ。
export function mountStageSheets(mapTarget,root,{onCrown=()=>{},onPattern=()=>{},onXpSettings=()=>{},onMessage=()=>{}}={}){
  let current,revision=0;
  const cache=new Map(),enemyCache=new Map(),sheets=new Map();
  const media=initializeStageMedia(root,id=>current?.visible.find(stage=>stage.id===id),{preloadAudio:true});
  function draw(stage,context){
    let section=sheets.get(stage.id);
    if(!section){
      section=document.createElement('section');
      section.className='stage-entry stage-display-entry'+(stage.abyss?' stage-abyss-entry':'');
      section.id='stage-sheet-'+stage.id;
      section.innerHTML='<table class="data-sheet"><thead></thead>'+segments.slice(1).map(key=>'<tbody data-sheet-part="'+key+'"></tbody>').join('')+'</table>';
      sheets.set(stage.id,section);
    }
    if(!root.contains(section))root.append(section);
    const parts=stageSheetParts({...context,stage,calculation:context.calculations.get(stage.baseStageId??stage.id)});
    const table=section.firstElementChild;
    table.setAttribute('aria-label',stageHeading(stage));
    if(!table.querySelector('colgroup'))table.insertAdjacentHTML('afterbegin',sheetColumns);
    replaceMarkup(table.tHead,parts.heading);
    for(const name of segments.slice(1))replaceMarkup(table.querySelector('[data-sheet-part="'+name+'"]'),parts[name]);
  }
  async function render(input){
    const token=++revision,context=mapDisplayContext(input);
    const {database,visible,stats,settings,map,crown}=context;
    const shown=visible.concat(visible.filter(stage=>hasAbyssDetail(map,stage))
      .map(stage=>({...stage,id:abyssStageId(stage),baseStageId:stage.id,abyss:true})));
    current={...context,visible:shown};
    const live=new Set(shown.map(stage=>stage.id));
    for(const [id,section] of sheets)if(!live.has(id)){section.remove();sheets.delete(id);}
    replaceMarkup(mapTarget,stageMapSheet(context));
    const entries=visible.flatMap(stage=>stage.spawns.filter(spawn=>stats||spawn.enemy===stage.enemyCastle)
      .map(spawn=>({enemy:context.enemies.enemies[spawn.enemy],settings:stageEnemySettings(spawn,map,crown,settings)})).filter(entry=>entry.enemy));
    const enemyKey=JSON.stringify([database.revision,visible.map(stage=>[stage.id,stage.patternSource]),crown,stats,settings]);
    const enemy=entries.length?memo(enemyCache,enemyKey,()=>prepareEnemyStatistics(entries)):{status:'ready',promise:Promise.resolve()};
    const {jobs,calculation}=nativeJobs(context,visible,cache);
    context.calculations=calculation;
    const drawStages=()=>shown.forEach((stage,index)=>{
      draw(stage,context);
      const section=sheets.get(stage.id);
      if(root.children[index]!==section)root.insertBefore(section,root.children[index]??null);
    });
    const paint=()=>{
      if(token!==revision)return;
      for(const item of jobs)item.apply();
      context.enemyStatus=enemy.status;
      try{drawStages();}
      catch(error){if(enemy.status!=='ready')throw error;
        enemyCache.delete(enemyKey);context.enemyStatus='error';drawStages();}
      media.refresh();
    };
    paint();
    const pending=[enemy,...jobs.map(job=>job.request)].filter(request=>request.status==='pending');
    if(pending.length){await Promise.all(pending.map(request=>request.promise));paint();}
  }
  root.addEventListener('change',async event=>{
    const selected=event.target.closest('[data-stage-pattern]');
    if(!selected?.value)return;
    const stage=current?.visible.find(stage=>stage.index===Number(selected.dataset.stagePattern));
    if(!stage)return;
    selected.disabled=true;
    try{await onPattern(stage,selected.value);}catch(error){onMessage(error.message);selected.value=stage.patternSource??'';}
    finally{selected.disabled=false;}
  });
  root.addEventListener('click',async event=>{
    const crown=event.target.closest('[data-crown]');
    if(crown){onCrown(Number(crown.dataset.crown));return;}
    const xp=event.target.closest('[data-stage-xp-settings]');
    if(xp){onXpSettings(xp);return;}
    const button=event.target.closest('[data-stage-capture]');
    if(!button)return;
    const id=button.dataset.stageCapture,target=sheets.get(id),name=id+'-'+current.crown+'crown';
    button.disabled=true;
    try{await media.prepareCapture(target);await saveElementImage(target,name,{expandScroll:'.data-sheet-scroll'});onMessage('画像を保存しました。');}
    catch(error){onMessage(error.message);}
    finally{button.disabled=false;}
  });
  return {render,clear(){++revision;current=null;media.clear();root.replaceChildren();mapTarget.replaceChildren();sheets.clear();markup.delete(mapTarget);}};
}
