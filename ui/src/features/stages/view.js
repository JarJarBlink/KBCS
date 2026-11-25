import {escapeHtml,formatNumber,formatTime} from '../../shared/game/database-view.js';
import {imageHtml} from '../../shared/game/unit-view.js';

import {rarityNames} from '../../shared/game/unit-stats.js';
import {applicableLimits,stageDetailUrl,stageMapUrl} from './model.js';

const decimal=new Intl.NumberFormat('ja-JP',{maximumFractionDigits:3});
const percent=value=>decimal.format(value)+'%';
const row=(label,value)=>'<tr><th scope="row">'+label+'</th><td>'+value+'</td></tr>';
const table=body=>'<table class="stage-sheet"><tbody>'+body+'</tbody></table>';
function unitLink(units,id,formIndex,size=[32,25]){
  const unit=units.units.find(unit=>unit.id===id),form=unit?.forms.find(form=>form.index===formIndex)||unit?.forms[0];
  return form?'<a href="/pages/unit-detail/?id='+id+'&form='+(form.code||'f')+'">'+imageHtml(units,form,...size)+escapeHtml(form.name)+'</a>':'ID '+id;
}
export function limitHtml(limit,units){
  const parts=[];
  if(limit.rarities)parts.push('レア度：'+rarityNames.filter((_,index)=>limit.rarities&(1<<index)).join('・'));
  if(limit.maxUnits)parts.push('同時出撃 '+limit.maxUnits+'体まで');
  if(limit.slots)parts.push(limit.slots===1?'編成1ページ目のみ':'編成ページ制限 '+limit.slots);
  if(limit.minCost||limit.maxCost)parts.push('生産コスト '+(limit.minCost?formatNumber(limit.minCost)+'円以上':'')+(limit.minCost&&limit.maxCost?'・':'')+(limit.maxCost?formatNumber(limit.maxCost)+'円以下':''));
  if(limit.group)parts.push(escapeHtml(limit.group.label)+'（'+(limit.group.type===2?'使用不可':'使用可能')+'）：'+limit.group.units.map(id=>unitLink(units,id)).join(' / '));
  return parts.join(' / ')||'指定なし';
}
function clearConditionLink(database,map,stageIndex,negative=false){
  if(!map)return '';
  const stage=Number.isInteger(stageIndex)?database.stages.find(stage=>stage.map===map.key&&stage.index===stageIndex):null;
  if(stageIndex!=null&&!stage)return '';
  const target=stage?map.name+' / '+stage.name:map.name;
  return '<a href="'+escapeHtml(stage?stageDetailUrl(stage):stageMapUrl(map))+'">'+escapeHtml(target+(negative?' 未クリア':'クリア'))+'</a>';
}
export function conditionHtml(condition,database,{detail=false}={}){
  const {code,group}=condition;
  // 原本の条件ID 1〜9は日本編・未来編・宇宙編の1〜3章。
  const chapter=code>=1&&code<=9?['EOC','ITF','COTC'][Math.floor((code-1)/3)]+((code-1)%3+1):null;
  const chapterLink=chapter?clearConditionLink(database,database.maps.find(map=>map.key===chapter)):'';
  const targets=(group?.condition??[code]).map(id=>{
    const value=Math.abs(id);
    return value>=100000&&value<200000?clearConditionLink(database,database.maps.find(map=>map.nativeId===value-100000),group?.stage,id<0):'';
  });
  const links=targets.filter(Boolean).join(' / ');
  const message=condition.message?.trim().replace(/\s*\n\s*/g,'').replace(/^挑戦するには(.+?)を(全て)?クリアする必要があります。?$/,'$1 $2クリア');
  const linkedSummary=targets.length<=3&&targets.every(Boolean)?links+(group?.count?'（'+escapeHtml(group.count)+'条件以上）':''):'';
  const summary=chapterLink||linkedSummary||escapeHtml(message||
    (group?.count?'対象のうち'+group.count+'条件以上を達成':'条件ID '+code));
  const raw=detail?'<details><summary>条件ID '+escapeHtml(code)+' の判定内訳</summary>'+(!linkedSummary&&links?'<div>'+links+'</div>':'')+
    '<pre>'+escapeHtml(JSON.stringify(group??{code,minStage:condition.minStage},null,2))+'</pre></details>':'';
  return summary+raw;
}
function ruleValueHtml(rule,seconds){
  if(rule.support==='unsupported')return '<pre>'+escapeHtml(JSON.stringify(rule.raw,null,2))+'</pre>';
  const p=rule.parameters,rarities=values=>values.map((value,index)=>rarityNames[index]+' '+value).join(' / ');
  switch(rule.id){
    case 0:return '開始時のお金 '+formatNumber(p[0])+'円（通常の増加なし）';
    case 1:return '生産時間 '+formatTime(p[0],seconds)+'に固定';
    case 2:return rarities(p)+'体まで編成';
    case 3:return rarities(p)+'体まで生産';
    case 4:return '全キャラ '+formatNumber(p[0])+'円';
    case 5:return rarities(p)+'%（生産コスト）';
    case 6:return rarities(p)+'%（生産時間）';
    case 7:return '戦闘中の生産 合計'+p[0]+'体まで';
    case 8:return rarityNames.filter((_,index)=>p[0]&(1<<index)).join('・')+' / 生産時に追加'+p[1]+'体 / 間隔'+formatTime(p[2],seconds);
    case 9:return 'にゃんこ砲の攻撃力 '+percent(p[0]);
    case 10:return [p[0]?'味方 '+(p[0]===1?'速度'+p[1]+'に固定':percent(p[1])):'',p[2]?'敵 '+(p[2]===1?'速度'+p[3]+'に固定':percent(p[3])):''].filter(Boolean).join(' / ');
    case 12:return 'フィーバーゲージ '+formatNumber(p[1])+'Pt / 継続 '+formatTime(p[2],seconds);
    default:return '<details><summary>データ内の設定値</summary><span class="db-meta">ルールID '+rule.id+' / '+p.join(', ')+'</span></details>';
  }
}
export function specialRulesHtml(map,seconds){
  return '<details><summary>'+escapeHtml(map.ruleName||'ルールの説明')+'</summary>'+
    (map.ruleDescription?'<div class="stage-description">'+escapeHtml(map.ruleDescription)+'</div>':'')+
    '<ul>'+map.rules.map(rule=>'<li>'+escapeHtml(rule.label)+'：'+ruleValueHtml(rule,seconds)+'</li>').join('')+'</ul></details>';
}
export function pointRuleHtml(pointRules){
  return '<details><summary>'+escapeHtml(pointRules.name)+'</summary>'+
    pointRules.sections.filter(section=>section.description).map(section=>'<strong>'+escapeHtml(section.name)+'</strong><div class="stage-description">'+escapeHtml(section.description)+'</div>').join('')+'</details>';
}
export function levelSealHtml(levelSeal){
  return '基本Lv解放値 '+levelSeal.level+' / ＋Lv解放 '+(levelSeal.plus?'あり':'なし')+'<div class="db-meta">魔界編のクリア状況によって実際に使えるLvは変わります。</div>';
}
export function stageRulesHtml(database,stage,map,crown,units,seconds,{includeMap=true,selectedLimits=applicableLimits(map,stage,crown),showOtherCrowns=true}={}){
  const limits=selectedLimits.filter(limit=>includeMap||limit.stage>=0);
  const conditions=map.conditions.filter(condition=>(includeMap||condition.minStage!=null)&&(condition.minStage==null||stage.index>=condition.minStage));
  const other=showOtherCrowns?map.stars.flatMap((_,index)=>index+1===crown?[]:applicableLimits(map,stage,index+1)
    .filter(limit=>includeMap||limit.stage>=0).map(limit=>({crown:index+1,limit}))):[];
  const rows=(limits.length||includeMap?row('出撃制限',limits.length?limits.map(limit=>limitHtml(limit,units)).join('<br>'):'この冠の指定なし'):'')+
    (other.length?row('他の冠','<details><summary>出撃制限を確認</summary>'+other.map(({crown,limit})=>'<div>'+crown+'冠：'+limitHtml(limit,units)+'</div>').join('')+'</details>'):'')+
    (includeMap&&map.rules.length?row('特殊ルール',specialRulesHtml(map,seconds)):'')+
    (includeMap&&map.scoreBonus?row('スコアボーナス','<strong>'+escapeHtml(map.scoreBonus.name)+'</strong><div class="stage-description">'+escapeHtml(map.scoreBonus.description)+'</div>'):'')+
    (stage.pointRules?row('イベントPt',pointRuleHtml(stage.pointRules)):'')+
    (conditions.length?row('表示・挑戦条件','<div class="stage-conditions">'+conditions.map(condition=>'<div class="stage-description">'+escapeHtml(condition.kind)+'：'+conditionHtml(condition,database)+'</div>').join('')+'</div>'):'')+
    (stage.bossGuard?row('城バリア','ボスが残っている間、敵城への攻撃を防ぎます。'):'')+
    (stage.levelSeal?row('Lv封印',levelSealHtml(stage.levelSeal)):'')+
    (stage.ex||stage.exLottery?.length?row('連戦・EX',exLinksHtml(database,stage)):'')+
    (includeMap&&map.notes?.length?row('マップ固有の仕様','<details><summary>確認する</summary>'+map.notes.map(note=>'<p class="stage-description">'+escapeHtml(note)+'</p>').join('')+'</details>'):'');
  return rows?table(rows):'';
}
export function exLinksHtml(database,stage){
  const direct=stage.ex?Array.from({length:Math.max(0,stage.ex.max-stage.ex.min+1)},(_,index)=>({map:stage.ex.map,nativeMap:stage.ex.nativeMap,stage:stage.ex.min+index})):[];
  const links=entries=>entries.map(entry=>{const map=database.maps.find(map=>map.key===entry.map),candidate=database.stages.find(stage=>stage.map===entry.map&&stage.index===entry.stage);return '<div>'+(candidate?'<a href="'+stageDetailUrl(candidate)+'">'+escapeHtml(map.name+' / '+candidate.name)+'</a>':'EXマップ '+entry.nativeMap+' / ステージ '+entry.stage)+'</div>';}).join('');
  return (stage.ex?'<div>直接移行 '+percent(stage.ex.chance)+'</div>'+links(direct):'')+(stage.exLottery?.length?'<div>追加抽選の候補</div>'+links(stage.exLottery):'');
}

export function rewardItemHtml(database,units,reward){
  const item=database.rewards[reward.id],name=item?.name||'報酬 '+reward.id;
  const image=item?.layers?.length?orbHtml(database,item):item?.unit!=null?unitLink(units,item.unit,item.form,[48,38]):item?.icon?'<img src="'+escapeHtml(database.imageBase+item.icon)+'" alt="" loading="lazy">':'';
  return '<span class="stage-reward'+(item?.unit!=null?' stage-reward-character':'')+'" title="報酬ID '+reward.id+'">'+image+(item?.unit!=null?'':escapeHtml(name))+'<span>×'+formatNumber(reward.count)+'</span>'+(item?.evolution?'<span>進化権</span>':'')+'</span>';
}
const orbHtml=(database,item)=>'<span class="unit-orb-image" role="img" aria-label="'+escapeHtml(item.name)+'" style="width:32px;height:32px">'+item.layers.map(layer=>{const [x,y,width,height]=layer.rect,scale=32/width;return '<span class="unit-property-image" style="width:32px;height:'+height*scale+'px"><img src="'+escapeHtml(database.imageBase+layer.path)+'" alt="" loading="lazy" style="width:'+layer.width*scale+'px;height:'+layer.height*scale+'px;left:'+(-x*scale)+'px;top:'+(-y*scale)+'px"></span>';}).join('')+'</span>';

export const formationChoice=formation=>formation?.choices.find(choice=>choice.index===formation.selected)??formation?.choices[0];
export const cannonName=choice=>choice.cannon===0?'ノーマル砲':'砲ID '+choice.cannon;
export function formationUnitsHtml(choice,units){
  return '<div class="stage-formation">'+choice.units.map(entry=>{const unit=units.units.find(unit=>unit.id===entry.id),form=unit?.forms.find(form=>form.index===entry.form)||unit?.forms[0];return unit?'<a href="/pages/unit-detail/?id='+entry.id+'&form='+(form?.code||'f')+(entry.level!=null?'&level='+(entry.level+entry.plus):'')+'" title="'+escapeHtml(form.name)+'">'+imageHtml(units,form,44,34)+'<span>'+escapeHtml(form.name)+'</span><small>'+(entry.level==null?'Lv指定なし':'Lv'+entry.level+(entry.plus?'+'+entry.plus:''))+(entry.form==null?' / 形態指定なし':' / 第'+(entry.form+1)+'形態')+'</small></a>':'ID '+entry.id;}).join('')+'</div>';
}
export function stageFormationHtml(stage,units){
  if(!stage.formation)return '';
  const choice=formationChoice(stage.formation);
  return table(choice?row('固定編成',formationUnitsHtml(choice,units))+row('にゃんこ砲',cannonName(choice)):
    row('固定編成','編成内容は未収録です。'));
}
