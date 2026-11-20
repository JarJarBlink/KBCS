import {stageMediaHtml,initializeStageMedia} from './src/features/stages/native-media.js';
import {prepareEnemyStatistics,stageEnemySettings} from './native-enemy-statistics.js';
import {loadStageSearchIndex} from './search-index.js';
import {loadStageVariant} from './src/shared/game/stages.js';
import {loadEnemyDatabase} from './src/shared/game/enemies.js';
import {loadUnitSearchIndex} from './native-unit-search.js';
import {stageMapOverviewHtml,stageSummaryHtml,stageRulesHtml,stageRewardsHtml,stageSpawnsHtml,stageFormationHtml} from './src/features/stages/view.js';
import {stageMapUrl,stageDetailUrl,resolveStageRoute} from './src/features/stages/model.js';
import {stageMapCards,stageTags} from './src/features/stages/catalog-view.js';
import {escapeHtml,formatNumber} from './src/shared/game/database-view.js';
import {readGameSettings} from './src/shared/browser/game-settings.js';
import {readPageParams,writePageParams} from './native-state.js';
import {saveElementImage} from './src/shared/browser/capture.js';
import {calculateNative} from './native-calculation.js';
import {catalog} from './simulation-profile.js';

const element=id=>document.getElementById(id),params=readPageParams('stage-detail');
const settings=readGameSettings();
const rewardTracking={crown:'先頭報酬を冠ごとに記録',shared:'先頭報酬の記録を全冠で共有',ownership:'先頭報酬の所持・解放状態を参照',history:'初回の重み抽選履歴を記録',none:'取得済み記録による制限なし'};
let database,enemies,units,map,bases=[],selected=params.get('stage')??'',crown=1;
let calculationRevision=0;
const stageMedia=initializeStageMedia(element('stage-output'),id=>bases.find(stage=>stage.id===id));
element('stage-time').value=params.get('time')|| (settings.seconds?'seconds':'frames');
element('stage-spawn-details').checked=params.get('details')==='true';
element('stage-enemy-stats').checked=params.get('enemyStats')==='true';
for(const key of ['clears','combo'])element('stage-xp-'+key).value=Math.max(0,Math.min(key==='combo'?100:2147483647,Math.trunc(Number(params.get(key)))||0));
element('stage-xp-okame').checked=params.get('okame')==='true';

function saveState(){
  const state=new URLSearchParams({crown:String(crown),stage:selected,time:element('stage-time').value,details:String(element('stage-spawn-details').checked)});
  state.set('enemyStats',String(element('stage-enemy-stats').checked));
  for(const key of ['clears','combo'])state.set(key,element('stage-xp-'+key).value);
  state.set('okame',String(element('stage-xp-okame').checked));
  writePageParams('stage-detail',state);
}
async function renderCalculations(visible){
  const revision=++calculationRevision;
  const condition={clears:Number(element('stage-xp-clears').value),combo:Number(element('stage-xp-combo').value),okame:Number(element('stage-xp-okame').checked),studyLevel:settings.studyLevel,treasure:settings.studyTreasureBonus};
  element('stage-xp-profile').textContent='勉強力Lv'+condition.studyLevel+' / お宝＋'+condition.treasure+'%';
  try{
    if((database.calculationVersion??database.gameVersion)!==catalog.version)throw Error('DBとXP計算の対応版が一致しません。');
    const available=visible.filter(stage=>stage.xp!=null);
    for(let offset=0;offset<available.length;offset+=64){
      const chunk=available.slice(offset,offset+64);
      const materialStages=chunk.filter(stage=>map.materials&&Number.isFinite(map.materials.counts[stage.index]));
      const materialDrops=materialStages.map(stage=>({count:map.materials.counts[stage.index],multiplier:map.materials.multipliers[crown-1],miss:map.materials.miss,weights:map.materials.weights}));
      const data=await calculateNative({stageExperience:chunk.map(stage=>({mode:stage.nativeMode,kind:stage.nativeKind,stage:stage.index,base:stage.xp,...condition})),materialDrops});
      if(revision!==calculationRevision)return;
      for(const [index,stage]of chunk.entries()){
        const output=data.stageExperience[index].stages,target=element('stage-output').querySelector('[data-stage-experience="'+stage.id+'"]');
        if(!target)continue;
        target.textContent=formatNumber(output[4]);target.title=['基礎値','繰返し減衰','勉強力・お宝','コンボ','おかめ'].map((label,index)=>label+'：'+formatNumber(output[index])).join('\n');
        element('stage-sheet-'+stage.id).querySelector('[data-stage-xp-detail]').textContent=target.title.replaceAll('\n',' / ');
        const materialIndex=materialStages.findIndex(value=>value.id===stage.id);
        if(materialIndex>=0){const plan=data.materialDrops[materialIndex],materials={...plan,items:map.materials.items.map(item=>({...item,...plan.items[item.slot]}))};element('stage-rewards-'+stage.id).innerHTML=stageRewardsHtml(database,stage,units,map,crown,materials);}
      }
    }
    for(const stage of visible.filter(stage=>stage.xp==null)){const target=element('stage-output').querySelector('[data-stage-experience="'+stage.id+'"]');if(target)target.textContent='—';}

  }catch(error){if(revision===calculationRevision)for(const node of element('stage-output').querySelectorAll('[data-stage-experience]'))node.textContent=error.message;}
}
async function renderRewardPolicies(visible,revision){
  const supported=visible.filter(stage=>Number.isInteger(stage.rewardMode));
  for(let offset=0;offset<supported.length;offset+=128){
    const chunk=supported.slice(offset,offset+128);
    try{
      const result=await calculateNative({rewardPolicies:chunk.map(stage=>({mode:stage.rewardMode,saveId:map.acquisitionId??-1,rewardId:Number(stage.rawRewards?.[6]??-1),crown}))});
      if(revision!==renderRevision)return;
      for(const [index,policy]of result.rewardPolicies.entries()){
        const stage=chunk[index],target=element('stage-reward-policy-'+stage.id);if(!target)continue;
        if(!stage.drops.length){target.innerHTML='<table class="stage-sheet"><tbody><tr><th>抽選設定</th><td>通常報酬の抽選なし</td></tr></tbody></table>';continue;}
        const first=stage.drops[0].weight,single='先頭の報酬1件を'+(Number.isFinite(first)?formatNumber(first)+'%の確率':'設定された確率')+'で抽選';
        const ordered='先頭から順に抽選し、最初の当選を採用';
        const modes={'-4':'重みに応じて報酬1件を抽選','-3':'初回のみ重みに応じて報酬1件を付与','-2':single,'-1':single,0:ordered,1:ordered,2:ordered};
        const tracking=rewardTracking[policy.tracking]+(policy.tracking==='crown'?'（'+crown+'冠）':'');
        const table=policy.probes.map(probe=>{const r=probe.result,selected=r.winner!=null?r.winner>=0:r.grantColumn>=0;return '<tr><td>'+(probe.acquired?'取得済み':'未取得')+'</td><td>'+(probe.radar?'使用':'なし')+'</td><td>'+(selected?'採用':'採用なし')+'</td><td>'+((r.markAcquired||r.markHistory)?'あり':'なし')+'</td><td>'+(r.radarBlocked?'あり':'なし')+'</td></tr>';}).join('');
        const weighted=policy.mode===-3||policy.mode===-4;
        target.innerHTML='<table class="stage-sheet"><tbody><tr><th>抽選設定</th><td>'+(modes[policy.mode]??'未対応の抽選方式')+'</td><th>取得記録</th><td>'+tracking+'</td></tr></tbody></table><details><summary>報酬の判定条件</summary><div>保存番号 '+policy.saveId+' / ステージ '+(stage.index+1)+(policy.tracking==='crown'||policy.tracking==='shared'?' / 記録枠 '+policy.slot:'')+'</div>'+(table?'<div>'+(weighted?'重み抽選で候補を選んだ場合':'先頭候補の比較が成功した場合')+'</div><table class="stage-sheet"><thead><tr><th>取得状況</th><th>レーダー</th><th>'+(weighted?'選んだ報酬':'先頭報酬')+'</th><th>記録要求</th><th>打切り</th></tr></thead><tbody>'+table+'</tbody></table>':'<div>この抽選形式は通常比較の対象外です。</div>')+'</details>';
      }
    }catch(error){if(revision===renderRevision)for(const stage of chunk){const node=element('stage-reward-policy-'+stage.id);if(node)node.textContent=error.message;}}
  }
}
function sourceHtml(stage){
  const row=(label,value)=>'<tr><th>'+label+'</th><td><code>'+escapeHtml(JSON.stringify(value))+'</code></td></tr>';
  return '<details class="stage-native-source"><summary>計算内訳・元データ</summary><div data-stage-xp-detail></div><div>'+escapeHtml(stage.source)+'</div><table class="stage-sheet"><tbody>'+row('設定',stage.rawSettings)+row('ヘッダー',stage.rawHeader)+row('報酬 '+map.source+' : '+stage.metadataRow,stage.rawRewards)+row('報酬モード / 末尾値',[stage.rewardMode,stage.rewardOnce])+(map.materials?row('開発素材 '+map.materials.source+' : '+map.materials.sourceRow,map.materials.raw):'')+'</tbody></table><div class="db-meta">報酬の比較値は最終取得確率ではありません。</div><div class="db-table-wrap"><table class="stage-sheet"><thead><tr><th>元行</th><th>読込後の14整数</th></tr></thead><tbody>'+stage.spawns.map(spawn=>row(spawn.sourceRow,spawn.native)).join('')+'</tbody></table></div></details>';
}
function patternHtml(stage){
  if(!stage.variants?.length)return '';
  return '<label class="stage-pattern-choice">'+escapeHtml(stage.patternLabel||'出現パターン')+' <select data-stage-pattern="'+stage.index+'"><option value="" disabled'+(!stage.patternSource?' selected':'')+'>選択してください（'+stage.variants.length+'候補）</option>'+stage.variants.map(value=>'<option value="'+escapeHtml(value.source)+'"'+(stage.patternSource===value.source?' selected':'')+'>'+escapeHtml(value.name)+'</option>').join('')+'</select></label>';
}
let renderRevision=0;
const sectionNames=[['spawns','敵の出現'],['rewards','報酬'],['rules','出撃制限・特殊ルール'],['media','背景・BGM']];
function stageChoice(stage,label){
  return '<a href="'+(stage?stageDetailUrl(stage,crown):stageMapUrl(map,crown))+'" data-stage-choice="'+(stage?.index??'')+'">'+escapeHtml(label)+'</a>';
}
function navigation(stage){
  const number=stage?bases.findIndex(value=>value.id===stage.id):-1;
  element('stage-breadcrumb').innerHTML=stage?stageChoice(null,map.key+' '+map.name):'<span class="stage-tag">'+escapeHtml(map.key)+'</span>';
  element('stage-title').textContent=stage?.name??map.name;
  document.title=element('stage-title').textContent+' | KBCS';
  element('stage-visible-count').textContent=stage?stage.id+' · '+(number+1)+' / '+bases.length+'ステージ':bases.length+'ステージ';
  element('stage-context').innerHTML=stage?'<nav class="stage-local-nav" aria-label="同じマップのステージ">'+
    (bases[number-1]?stageChoice(bases[number-1],'‹ 前のステージ'):'')+stageChoice(null,'一覧へ')+
    (bases[number+1]?stageChoice(bases[number+1],'次のステージ ›'):'')+'</nav>'+
    (stage.width>0||stage.variants?.length?'<a class="stage-play-link" href="'+stageDetailUrl(stage,crown).replace('/stage-detail/','/stage-sortie/')+'">出撃準備へ</a>':''):'';
  const mapIndex=database.maps.findIndex(value=>value.key===map.key);
  const nav=element('stage-navigation');
  nav.innerHTML='<div class="db-toolbar">'+[[database.maps[mapIndex-1],'‹ 前のマップ'],[database.maps[mapIndex+1],'次のマップ ›']].map(([value,label])=>value?'<a href="'+stageMapUrl(value,crown)+'" title="'+escapeHtml(value.name)+'">'+label+'</a>':'').join('')+'</div><div class="workspace-stage-list">'+stageChoice(null,'マップの概要')+bases.map(value=>stageChoice(value,(value.index+1)+'. '+value.name)).join('')+'</div>';
  for(const link of document.querySelectorAll('[data-stage-choice]')){
    if(link.closest('.workspace-stage-list'))link.setAttribute('aria-current',link.dataset.stageChoice===selected?'page':'false');
  }
}
function stageArticle(stage){
  const section=(id,html)=>'<section class="stage-detail-section" id="stage-panel-'+id+'"><h2>'+sectionNames.find(([key])=>key===id)[1]+'</h2>'+html+'</section>';
  const unknownPattern=stage.variants?.length&&!stage.patternSource;
  return '<article class="stage-entry stage-detail-entry" id="stage-sheet-'+stage.id+'"><div class="stage-detail-banner"><div class="stage-card-tags">'+stageTags(stage.flags)+'</div><button type="button" data-stage-capture="'+stage.id+'">画像保存</button></div>'+
    '<div id="stage-basic-info">'+stageSummaryHtml(stage,map,crown,settings,enemies)+'</div>'+patternHtml(stage)+
    '<nav class="stage-section-nav" aria-label="ステージ詳細の項目">'+sectionNames.map(([id,label])=>'<a href="#stage-panel-'+id+'">'+label+'</a>').join('')+'</nav>'+
    section('spawns','<div id="stage-spawn-list">'+(unknownPattern?'<p class="stage-pattern-placeholder">出現パターンを選択すると、敵を確認できます。</p>':stageSpawnsHtml(stage,map,crown,enemies,settings,{details:element('stage-spawn-details').checked}))+'</div>')+
    section('rewards','<div id="stage-rewards-'+stage.id+'">'+stageRewardsHtml(database,stage,units,map,crown)+'</div><div id="stage-reward-policy-'+stage.id+'"></div>')+
    section('rules',stageRulesHtml(database,stage,map,crown,units,settings.seconds)+stageFormationHtml(stage,units))+
    section('media',stageMediaHtml(database,stage,enemies))+sourceHtml(stage)+'</article>';
}
async function render(){
  const revision=++renderRevision;++calculationRevision;
  stageMedia.clear();settings.seconds=element('stage-time').value==='seconds';
  element('stage-crown').innerHTML=map.stars.map((_,index)=>'<button type="button" data-crown="'+(index+1)+'" title="'+(index+1)+'冠・倍率'+formatNumber(map.stars[index])+'%" aria-label="'+(index+1)+'冠" aria-pressed="'+(crown===index+1)+'"><img src="/icons/stages/crown-'+(index<crown?'on':'off')+'.png" alt="" width="20" height="19"><span>'+(index+1)+'</span></button>').join('');
  element('stage-crown-rate').textContent='敵倍率 '+formatNumber(map.stars[crown-1])+'%';
  const stage=bases.find(value=>String(value.index)===selected);
  navigation(stage);element('stage-message').textContent='';
  const overview=element('stage-map-info'),output=element('stage-output');
  const overviewOpen=overview.querySelector('details')?.open;
  overview.hidden=!!stage;
  overview.innerHTML=stage?'':'<details class="stage-map-rules"'+(overviewOpen?' open':'')+'><summary>マップ情報・共通ルール</summary>'+stageMapOverviewHtml(database,map,crown,units,settings.seconds)+'</details>';
  output.innerHTML=stage?stageArticle(stage):'<h2 class="stage-overview-heading">ステージ一覧</h2>'+stageMapCards(bases,crown,database,enemies);
  saveState();if(!stage)return;
  stageMedia.refresh();void renderCalculations([stage]);void renderRewardPolicies([stage],revision);
  const details=element('stage-spawn-details').checked,stats=element('stage-enemy-stats').checked;
  const needed=stage.spawns.filter(spawn=>stats||!stage.scoreMode&&spawn.enemy===stage.enemyCastle);
  if(!needed.length)return;
  try{
    await prepareEnemyStatistics(needed.map(spawn=>({enemy:enemies.enemies[spawn.enemy],settings:stageEnemySettings(spawn,map,crown,settings)})));
    if(revision!==renderRevision)return;
    const experience=output.querySelector('[data-stage-experience]');
    const basic=element('stage-basic-info');basic.innerHTML=stageSummaryHtml(stage,map,crown,settings,enemies,true);basic.querySelector('[data-stage-experience]').replaceWith(experience);
    if(stats)element('stage-spawn-list').innerHTML=stageSpawnsHtml(stage,map,crown,enemies,settings,{details,stats});
  }catch(error){if(revision===renderRevision)element('stage-message').textContent='敵ステータスを計算できませんでした。'+error.message;}
}
function selectStage(value){
  selected=value;
  const stage=bases.find(value=>String(value.index)===selected);
  history.replaceState(null,'',stage?stageDetailUrl(stage,crown):stageMapUrl(map,crown));
  void render();element('main').scrollTop=0;if(!document.querySelector('.workspace'))window.scrollTo(0,0);
}
document.addEventListener('click',event=>{
  const link=event.target.closest('a[data-stage-choice]');
  if(!link||event.button||event.ctrlKey||event.metaKey||event.shiftKey||event.altKey)return;
  event.preventDefault();selectStage(link.dataset.stageChoice);
  if(event.detail===0)element('stage-title').focus({preventScroll:true});
});
element('stage-crown').addEventListener('click',event=>{
  const button=event.target.closest('[data-crown]');if(!button||!map)return;
  crown=Number(button.dataset.crown);
  const stage=bases.find(value=>String(value.index)===selected);
  history.replaceState(null,'',stage?stageDetailUrl(stage,crown):stageMapUrl(map,crown));
  void render();element('stage-crown').querySelector('[aria-pressed=true]')?.focus({preventScroll:true});
});
for(const id of ['stage-time','stage-spawn-details','stage-enemy-stats','stage-xp-clears','stage-xp-combo','stage-xp-okame'])element(id).addEventListener('change',()=>{if(map)render();});
window.addEventListener('kbcs:simulation-change',event=>{Object.assign(settings,event.detail);if(map)render();});
element('stage-output').addEventListener('change',async event=>{
  const select=event.target.closest('[data-stage-pattern]');if(!select||!select.value)return;
  const index=Number(select.dataset.stagePattern);select.disabled=true;
  try{const stage=await loadStageVariant(map.key,index,select.value);bases=bases.map(value=>value.index===index?stage:value);render();}
  catch(error){element('stage-message').textContent=error.message;select.disabled=false;}
});
element('stage-output').addEventListener('click',async event=>{
  const button=event.target.closest('[data-stage-capture]');if(!button)return;
  button.disabled=true;
  try{await stageMedia.prepareCapture(element('stage-sheet-'+button.dataset.stageCapture));await saveElementImage(element('stage-sheet-'+button.dataset.stageCapture),button.dataset.stageCapture+'-'+crown+'crown');element('stage-message').textContent='画像を保存しました。';}
  catch(error){element('stage-message').textContent=error.message;}
  finally{button.disabled=false;}
});
async function load(){
  element('stage-retry').hidden=true;
  try{
    const routeRequest=loadStageSearchIndex().then(index=>({index,route:resolveStageRoute(index,params)}));
    const detailRequest=(params.get('map')?Promise.resolve(params.get('map')):routeRequest.then(({route})=>route.map.key))
      .then(key=>fetch('/api/stages?'+new URLSearchParams({map:key}))).then(response=>{
        if(!response.ok)throw Error('マップ詳細の読込に失敗しました。');
        return response.json();
      });
    const [{index,route},detail,enemyIndex,unitIndex]=await Promise.all([routeRequest,detailRequest,loadEnemyDatabase(),loadUnitSearchIndex()]);
    database={...index,musicCatalog:detail.musicCatalog,rewards:{...index.rewards,...detail.rewards}};
    enemies=enemyIndex;units=unitIndex;
    if(detail.buildId!==database.buildId||detail.revision!==database.revision)throw Error('DBが更新されています。ページを再読み込みしてください。');
    map=detail.maps.find(value=>value.key===route.map.key);
    bases=detail.stages;
    selected=route.selected?String(bases.find(stage=>stage.id===route.selected).index):'';
    crown=Math.max(1,Math.min(map.stars.length,Math.trunc(Number(params.get('crown')))||1));
    element('stage-version').textContent='JP データv'+database.gameVersion;
    element('stage-content').hidden=false;element('stage-status').hidden=true;await render();
  }catch(error){element('stage-content').hidden=true;element('stage-status').hidden=false;element('stage-status').textContent=error.message;element('stage-retry').hidden=false;}
}
element('stage-retry').addEventListener('click',load);load();
