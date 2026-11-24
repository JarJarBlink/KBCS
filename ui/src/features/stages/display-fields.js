import {escapeHtml as esc,formatNumber as number,formatTime} from '../../shared/game/database-view.js';
import {enemyImageHtml,enemyAttributesHtml} from '../../shared/game/enemy-view.js';
import {displayConfiguration,readDisplayJson} from '../../shared/ui/display-settings.js';
import {displayValue as value,displayHtml as html,displayState as state} from '../../shared/ui/data-sheet.js';
import {applicableLimits,effectiveSpawn,stageDetailUrl} from './model.js';
import {limitHtml,conditionHtml,specialRulesHtml,pointRuleHtml,levelSealHtml,exLinksHtml,formationChoice,formationUnitsHtml,cannonName} from './view.js';
import {namedColumns,optionAnnotationIndex,rawInteger,mapColumnsHtml,stageColumnsHtml} from './display-raw.js';
import {calculateEnemyStats,stageEnemySettings,stageEnemyDetailUrl} from '/native-enemy-statistics.js';
import {rewardFields} from './display-rewards.js';

export const stageGroups={map:'マップ情報',stage:'ステージ基本情報・固有条件',media:'メディア',reward:'報酬',enemy:'敵出現情報',source:'元データ'};
const decimals=new Intl.NumberFormat('ja-JP',{maximumFractionDigits:3});
const numeric=n=>Number.isFinite(n)?value(number(n)):state('missing');
const positive=(n,show)=>n==null?state('missing'):n>0?value(show(n)):n===0?state('inactive'):state('unknown',String(n));
const flag=(n,on,off)=>n==null?state('missing'):n===0?value(off,false):n===1?value(on):{...state('unknown',String(n)),active:true};
const unsupportedOption=column=>column.index==null?state('outside'):column.raw==null||String(column.raw).trim()===''?state('missing'):state('unknown',String(column.raw));
const option=(context,key,format=numeric)=>{
  const column=context.options[key];return column.value==null?unsupportedOption(column):format(column.value);
};
const fmtTime=(n,cfg,seconds)=>formatTime(n,cfg.formatter==='seconds'||cfg.formatter!=='frames'&&seconds);
const timeOptions={formatters:['native','seconds','frames']};
const elapsed=(n,cfg,seconds)=>n==null?state('missing'):value(fmtTime(n,cfg,seconds));
const timeRange=(items,cfg,seconds,showEndpoints=false)=>items?.length&&items.every(Number.isFinite)?
  value((showEndpoints?items:[...new Set(items)]).map(n=>fmtTime(n,cfg,seconds)).join('〜')):state('missing');
const pc=n=>decimals.format(n)+'%';
const box=parts=>parts.length?html(parts.join('<br>')):state('inactive');
const field=(group,key,get,options={})=>({id:group+'.'+key,group,get,...options});
const mapField=(key,get,options)=>field('map',key,get,options),stageField=(key,get,options)=>field('stage',key,get,options);
const long={fullOnly:true};
const detailBox=(heading,content)=>'<details><summary>'+esc(heading)+'</summary>'+content+'</details>';
const protectedText=text=>'<div class="stage-description">'+esc(text)+'</div>';
const chapter=map=>/^(EOC|ITF|COTC)/.test(map.series);

function difficultyRange(values){
  return [...new Set([Math.min(...values),Math.max(...values)])].map(n=>decimals.format(n)).join('～');
}
function difficultyLabel(badges,ratings){
  const stars=badges.length?'★'+difficultyRange(badges):'';
  const raw=ratings.length?difficultyRange(ratings):'';
  if(stars&&raw)return value(stars+' ('+raw+')');
  return stars||raw?value(stars||raw):state('missing');
}
export function mapDisplayContext(context){
  const {ledger,map,stages}=context;
  const options=namedColumns(ledger,'map.options',map.rawOptions,optionAnnotationIndex(map));
  const headers=namedColumns(ledger,'map.header',chapter(map)?null:map.rawHeaders?.[0]);
  const mask=options.mapDifficultyBadgeMask.value;
  const difficultyBadges=mask>0&&mask<4096?Array.from({length:12},(_,bit)=>bit+1).filter(star=>mask&(1<<(star-1))):[];
  const costCode=headers.declaredSortieCostTypeCode;
  const usesItems=costCode.value!=null&&costCode.value!==0;
  const sortieResource=map.series==='B'?'catamin':usesItems?'item':
    options.usesEnergyForSortie.value===1&&(!costCode.raw||costCode.value===0)?'energy':null;
  return {...context,options,headers,difficultyBadges,sortieResource,stages:stages??[]};
}
function crownRates({map,crown}){
  return html(map.stars.map((rate,index)=>{
    const text=(index+1)+'冠 '+pc(rate);
    return index+1===crown?'<strong class="data-emphasis-accent" aria-current="true">'+text+'</strong>':text;
  }).join(' / '));
}
function limits(context,stage,other=false){
  const {map,crown,units}=context,scope=stage?limit=>limit.stage===stage.index:limit=>limit.stage<0;
  const rows=activeCrown=>applicableLimits(map,stage??{index:-1},activeCrown).filter(scope);
  if(!other)return box(rows(crown).map(limit=>limitHtml(limit,units)));
  const parts=map.stars.flatMap((_,index)=>index+1===crown?[]:rows(index+1).filter(limit=>limit.crown>=0)
    .map(limit=>(index+1)+'冠：'+limitHtml(limit,units)));
  return parts.length?html(detailBox('出撃制限を確認',parts.join('<br>'))):state('inactive');
}
function conditions(context,filter,withScope=false){
  return box(context.map.conditions.filter(filter).map(condition=>{
    const scope=withScope?condition.kind+'：ステージ '+(condition.minStage+1)+' 以降：':'';
    return '<div class="stage-description">'+esc(scope)+conditionHtml(condition,context.database)+'</div>';
  }));
}
function mapPoints({stages,crown}){
  const groups=new Map();
  for(const stage of stages){
    if(!stage.pointRules)continue;
    const description=pointRuleHtml(stage.pointRules);
    if(!groups.has(description))groups.set(description,[]);
    groups.get(description).push(stage);
  }
  if(!groups.size)return state('inactive');
  return html([...groups].map(([description,members])=>{
    if(members.length===stages.length)return description;
    const links=members.map(stage=>'<a href="'+esc(stageDetailUrl(stage,crown))+'">'+(stage.index+1)+'. '+esc(stage.name)+'</a>');
    return '<div>'+links.join(' / ')+description+'</div>';
  }).join(''));
}
const cataminNames=['ネコビタンA','ネコビタンB','ネコビタンC'];
function cost({stage,database,sortieResource,options}){
  if(stage.energy==null)return state('missing');
  if(!Number.isSafeInteger(stage.energy)||stage.energy<0)return state('unknown',String(stage.energy));
  if(sortieResource==='energy')return numeric(stage.energy);
  if(sortieResource==='catamin'||sortieResource==='item'){
    // 本家は千の位以上をアイテム指定、下3桁を個数として読む。
    const id=Math.floor(stage.energy/1000),count=stage.energy%1000;
    const name=sortieResource==='catamin'?(cataminNames[id]??'ネコビタン種別 '+id):(database.rewards[id]?.name??'アイテムID '+id);
    return value(name+' ×'+number(count));
  }
  if(stage.energy===0&&options.usesEnergyForSortie.value===0)return value('消費なし');
  return state('unknown','原値 '+number(stage.energy));
}
function castle({stage,map,crown,settings,enemies,enemyStatus}){
  const prefix=stage.scoreMode?'スコア制 / ':'';
  const health=(hp,hidden=false)=>{
    const shown=hidden?'???????':number(Math.min(hp,99999999));
    return prefix+(shown===number(hp)?'':'表示：'+shown+' / ')+number(hp);
  };
  if(stage.enemyCastle==null)return Number.isFinite(stage.castleHealth)?value(health(stage.castleHealth)):state('missing');
  const spawn=stage.spawns.find(row=>row.enemy===stage.enemyCastle),enemy=spawn&&enemies.enemies[spawn.enemy];
  if(!enemy)return value(prefix+'未収録');
  const link='<a href="'+esc(stageEnemyDetailUrl(enemy,spawn,map,crown))+'">敵ID '+enemy.id+'</a>';
  if(enemyStatus!=='ready')return html(prefix+(enemyStatus==='error'?'取得できません':'計算中')+' '+link);
  const hp=calculateEnemyStats(enemy,stageEnemySettings(spawn,map,crown,settings)).hp;
  return html(esc(health(hp,enemy.invulnerable))+' '+link);
}
function pattern(stage){
  if(!stage.variants?.length)return state('inactive');
  return html('<label>'+esc(stage.patternLabel||'出現パターン')+' <select data-stage-pattern="'+stage.index+'"><option value="" disabled'+(!stage.patternSource?' selected':'')+'>'+stage.variants.length+'候補から選択</option>'+
    stage.variants.map(item=>'<option value="'+esc(item.source)+'"'+(stage.patternSource===item.source?' selected':'')+'>'+esc(item.name)+'</option>').join('')+'</select></label>');
}
function optionFlag(context,key,on,off){return option(context,key,n=>flag(n,on,off));}

const fields=[
  mapField('stageCount',({map})=>numeric(map.stages.length)),
  mapField('difficulty',({stages,difficultyBadges})=>difficultyLabel(difficultyBadges,stages.map(stage=>stage.difficulty).filter(Number.isFinite))),
  mapField('crowns',crownRates,long),
  mapField('clearLimit',context=>option(context,'mapClearCountLimit',n=>positive(n,n=>number(n)+'回'))),
  mapField('cooldown',(context,cfg)=>option(context,'mapCooldownMinutes',n=>positive(n,n=>fmtTime(n*1800,cfg,context.settings.seconds)+'（適用はクリア上限等の条件による）')),timeOptions),
  mapField('rewardReset',context=>option(context,'rewardResetMode',n=>n===0?state('inactive'):value(['','報酬のみ','報酬とクリア状況'][n]??'方式 '+n+'（詳細未確認）'))),
  mapField('hideAfterClear',context=>optionFlag(context,'hideAfterClearFlag','非表示','表示')),
  mapField('limits',context=>limits(context),long),
  mapField('rules',({map,settings})=>map.rules.length?html(specialRulesHtml(map,settings.seconds)):state('inactive'),long),
  mapField('displayConditions',context=>conditions(context,c=>c.minStage==null&&c.kind==='表示'),long),
  mapField('entryConditions',context=>conditions(context,c=>c.minStage==null&&c.kind!=='表示'),long),
  mapField('rank',({headers})=>positive(headers.requiredUserRank.value,number)),
  mapField('points',mapPoints,long),
  mapField('scoreBonus',({map})=>map.scoreBonus?html('<strong>'+esc(map.scoreBonus.name)+'</strong>'+protectedText(map.scoreBonus.description)):state('inactive'),long),
  mapField('notes',({map})=>map.notes?.length?html(map.notes.map(protectedText).join('')):state('inactive'),long),
  mapField('price',context=>option(context,'productionPriceMultiplierPercent',n=>n===0?state('inactive','倍率指定なし'):n>0?value(pc(n),n!==100):state('unknown',String(n)))),
  mapField('resource',context=>option(context,'usesEnergyForSortie',n=>n===0?value('統率力非消費側に登録（実際の支払資源は系列による）'):n===1?value('通常経路',false):state('unknown',String(n))),long),
  mapField('abyss',({map})=>map.abyss===true?value('あり'):map.abyss===false?state('inactive'):state('missing')),
  mapField('ad',context=>optionFlag(context,'doubleXpAdEligibilityFlag','広告対象','対象外')),
  mapField('showAll',context=>optionFlag(context,'showAllStagesFlag','一覧に全件表示','通常の一覧表示')),
  mapField('entryTracking',context=>optionFlag(context,'challengeEntryTrackingFlag','入場履歴登録対象','対象外')),
  mapField('alternateCrown',context=>option(context,'alternateCrownUnlockFlag')),
  mapField('guerrilla',context=>option(context,'guerrillaGroupMask',n=>{
    if(n===0)return state('inactive');if(n<0||n>0xffffffff)return state('unknown',String(n));
    const labels=['','XP','マタタビ','チケット','開発素材','曜日'];
    return value((Array.from({length:31},(_,index)=>index+1).filter(bit=>n&(1<<bit)).map(bit=>labels[bit]||'bit '+bit).join('・')||'—')+'（原値 '+n+'）');
  })),
  mapField('announcement',context=>option(context,'guerrillaGroupMask',n=>n<0?state('unknown',String(n)):n%2===1?value('参照対象'):state('inactive'))),
  mapField('pattern',({ledger,map})=>chapter(map)||map.series==='EX'?state('outside'):numeric(namedColumns(ledger,'map.pattern',map.rawHeaders?.[1]).mapPatternCode.value)),
  mapField('sort',context=>option(context,'displaySortKey')),
  mapField('badges',context=>option(context,'mapDifficultyBadgeMask',n=>n===0?state('inactive'):n>0&&n<4096?value(Array.from({length:12},(_,bit)=>bit).filter(bit=>n&(1<<bit)).map(bit=>'bit '+bit).join('・')+'（原値 '+n+'）'):state('unknown',String(n)))),
  mapField('extendedStorage',context=>option(context,'usesExtendedStageRecordStorage',n=>n>0?value('拡張記録領域（原値 '+n+'）'):n===0?state('inactive'):state('unknown',String(n)))),
  mapField('costCode',({headers,map})=>chapter(map)?state('outside'):numeric(headers.declaredSortieCostTypeCode.value)),
  mapField('appearance',({headers,map})=>chapter(map)?state('outside'):numeric(headers.mapVisualPatternOrDisplayCode.value)),
  mapField('otherCrowns',context=>limits(context,null,true),long),

  stageField('energy',cost),
  stageField('xp',({stage,calculation,showXpSettings})=>{
    if(stage.xp==null)return state('missing');
    const result=calculation?.xp?number(calculation.xp[4]):calculation?.xpError?'取得できません':'計算中';
    return showXpSettings?html('<div class="stage-xp-value"><span>'+esc(result)+'</span><button type="button" data-stage-xp-settings aria-haspopup="dialog" aria-label="獲得XPの計算条件">計算条件</button></div>'):value(result);
  }),
  stageField('castleHealth',castle),
  stageField('width',({stage})=>numeric(stage.width)),
  stageField('difficulty',({stage,difficultyBadges})=>{
    if(!Number.isFinite(stage.difficulty))return state('missing');
    const star=Math.floor(stage.difficulty);
    return difficultyLabel(difficultyBadges.includes(star)?[star]:[],[stage.difficulty]);
  }),
  stageField('enemyLimit',({stage})=>numeric(stage.maxEnemies)),
  stageField('continue',({stage})=>stage.width==null?state('missing'):value(stage.noContinue?'不可':'可')),
  stageField('barrier',({stage})=>stage.width==null?state('missing'):stage.bossGuard?value('あり（ボスが残っている間は城を保護）'):state('inactive')),
  stageField('spawnInterval',({stage,settings},cfg)=>timeRange(stage.spawnInterval,cfg,settings.seconds,true),timeOptions),
  stageField('timeLimit',({stage,settings},cfg)=>positive(stage.timeLimit,n=>fmtTime(n,cfg,settings.seconds)),timeOptions),
  stageField('limits',context=>limits(context,context.stage),long),
  stageField('conditions',context=>conditions(context,c=>c.minStage!=null&&context.stage.index>=c.minStage,true),long),
  stageField('formation',({stage,units})=>stage.formation?(formationChoice(stage.formation)?html(formationUnitsHtml(formationChoice(stage.formation),units)):{...state('missing'),active:true}):state('inactive'),long),
  stageField('cannon',({stage})=>{const choice=formationChoice(stage.formation);return choice?value(cannonName(choice)):state('outside');}),
  stageField('levelSeal',({stage})=>stage.levelSeal?html(levelSealHtml(stage.levelSeal)):state('inactive'),long),
  stageField('ex',({stage,database})=>stage.ex||stage.exLottery?.length?html(exLinksHtml(database,stage)):state('inactive'),long),
  stageField('pattern',({stage})=>pattern(stage),long),
  stageField('score',({stage})=>stage.damageCondition?value((stage.scoreMode?'スコア制。':'')+'敵出現の城条件は累積ダメージで判定。'):state('inactive'),long),
  stageField('baseXp',({stage})=>numeric(stage.xp)),
  stageField('castleId',({stage})=>stage.enemyCastle==null?state('outside'):numeric(stage.enemyCastle)),
  stageField('enemyLimitRaw',({stage})=>{const raw=rawInteger(stage.rawHeader?.[5]);return raw!=null&&raw===stage.maxEnemies?state('outside'):numeric(raw);}),
  stageField('otherCrowns',context=>limits(context,context.stage,true),long),
  stageField('exConfig',({stage})=>stage.ex?value('対象マップ '+stage.ex.nativeMap+' / 面index '+stage.ex.min+'〜'+stage.ex.max):state('outside'),long),

  ...['background','castle','bgm'].map(key=>field('media',key,({parts,active})=>html(parts[key],active[key]),{layout:'panel',fullOnly:true})),
  ...rewardFields,
  field('source','mapColumns',context=>html(mapColumnsHtml(context)),long),
  field('source','stageColumns',context=>html(stageColumnsHtml(context)),long),
  field('source','xp',({calculation,stage})=>stage.xp==null?state('missing'):calculation?.xp?value(['基礎値','繰返し減衰','勉強力・お宝','コンボ','おかめ'].map((label,index)=>label+'：'+number(calculation.xp[index])).join(' / ')):value(calculation?.xpError?'取得できません':'計算中'),long),
  field('source','materials',({map})=>map.materials?value(map.materials.source+' / '+map.materials.sourceRow+'行 / '+JSON.stringify(map.materials.raw)):state('outside'),long),
];

const enemyField=(key,get,options)=>field('enemy',key,get,{layout:'column',...options});
const enemyLink=(row,text,label)=>row.url?'<a href="'+esc(row.url)+'"'+(label?' aria-label="'+esc(label)+'"':'')+'>'+text+'</a>':text;
fields.push(
  enemyField('id',({spawn})=>numeric(spawn.enemy)),
  enemyField('icon',(row,{enemies})=>row.enemy?html(enemyLink(row,enemyImageHtml(enemies,row.enemy,36),row.enemy.name+'の詳細')):state('missing')),
  enemyField('name',row=>row.enemy?html(enemyLink(row,esc(row.enemy.name))):state('missing')),
  enemyField('attributes',(row,{enemies})=>row.enemy?html('<div class="enemy-properties">'+enemyAttributesHtml(enemies,row.enemy)+'</div>'):state('outside')),
  enemyField('boss',({spawn,startsAsCastle})=>spawn.boss?
    value('ボス / '+(startsAsCastle?'初回フレームに衝撃波':'0F後に衝撃波')):state('outside')),
  enemyField('multipliers',({spawn})=>value(pc(spawn.health)+(spawn.attack!==spawn.health?'/'+pc(spawn.attack):'')),{wrapHeading:true}),
  enemyField('count',({spawn})=>value(spawn.count===0?'無制限':spawn.count)),
  enemyField('gate',({spawn},{stage})=>value(stage.damageCondition?number(spawn.castle)+'以上':pc(spawn.castle)+'以下')),
  enemyField('first',({spawn},{settings},cfg)=>elapsed(spawn.first,cfg,settings.seconds),timeOptions),
  enemyField('interval',({spawn},{settings},cfg)=>spawn.count===1?state('outside'):timeRange(spawn.interval,cfg,settings.seconds),timeOptions),
  enemyField('layers',({spawn})=>spawn.layers?.every(Number.isFinite)?value(spawn.layers.join('〜')):state('missing')),
  enemyField('score',({spawn},{stage})=>stage.scoreMode||spawn.score!==0?numeric(spawn.score):state('outside')),
  enemyField('deaths',({spawn})=>spawn.kills>0?value(spawn.kills+'体'):spawn.kills===0?state('outside'):state('unknown',String(spawn.kills))),
  enemyField('preserveWait',({original})=>{const raw=rawInteger(original.raw?.[12])??original.native?.[12];return raw!=null&&raw!==0?value('保持設定 '+raw):original.afterCastle?value('保持設定あり'):state('outside');}),
  ...['hp','attack','dps'].map(key=>enemyField(key,(row,context)=>row.enemy?(context.enemyStatus==='ready'?numeric(row.stats?.[key]):value(context.enemyStatus==='error'?'取得できません':'計算中')):state('missing'),{stats:true})),
);

const filterStats=(field,stats)=>!field.field.stats||stats;
export function enemyColumns(display,context){
  const {stage,stats}=context,splitMultiplier=stage.spawns.some(spawn=>spawn.health!==spawn.attack);
  return display.enemy.filter(setting=>filterStats(setting,stats)).map(setting=>{
    const {field,label}=setting;
    if(field.id==='enemy.gate'&&label==='城条件')return {...setting,label:stage.damageCondition?'累積ダメージ条件':'敵城体力'};
    if(field.id==='enemy.multipliers'&&label==='倍率\n（体力／攻撃）'&&!splitMultiplier)return {...setting,label:'倍率'};
    return setting;
  });
}
export function enemyRecords(context){
  const {stage,map,crown,enemies,settings,stats,enemyStatus}=context;
  const castle=stage.spawns.find(spawn=>spawn.enemy===stage.enemyCastle);
  return stage.spawns.map(original=>{
    const spawn=effectiveSpawn(original,map,crown),enemy=enemies.enemies[spawn.enemy];
    const summary=stats&&enemy&&enemyStatus==='ready'?calculateEnemyStats(enemy,stageEnemySettings(original,map,crown,settings)):null;
    return {original,spawn,enemy,startsAsCastle:original===castle,stats:summary,url:enemy?stageEnemyDetailUrl(enemy,original,map,crown):''};
  });
}

let definition;
export function loadStageDisplay(){
  if(!definition){
    const read=async name=>{const response=await fetch(new URL(name,import.meta.url));if(!response.ok)throw Error('表示定義を取得できません。');return readDisplayJson(await response.text());};
    definition=Promise.all([read('./display-defaults.json'),read('./column-ledger.json')]).then(([standard,ledger])=>{
      const configuration=displayConfiguration('stages',fields,standard,{aliases:{'stage.maxEnemies':'stage.enemyLimit'}});
      return {configuration,ledger};
    }).catch(error=>{definition=undefined;throw error;});
  }
  return definition;
}
