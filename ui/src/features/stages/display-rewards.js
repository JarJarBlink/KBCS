import {escapeHtml as esc,formatNumber as number} from '../../shared/game/database-view.js';
import {fieldVisible,fieldLabel,fieldDescription,fieldClass,fieldContent,displayValue as value,displayHtml as html,displayState as state} from '../../shared/ui/data-sheet.js';
import {rewardItemHtml} from './view.js';

const percent=n=>Number.isFinite(n)?new Intl.NumberFormat('ja-JP',{maximumFractionDigits:3}).format(n)+'%':'未収録';
const item=(context,reward)=>rewardItemHtml(context.database,context.units,reward);
const status=(context,key)=>context.calculation?.[key+'Error']?'取得できません':'計算中';
const bonusRows=(context,rows,condition)=>rows.map(reward=>[item(context,reward),esc(condition(reward))]);
const rewardGroup=rows=>({rows,active:true});
const field=(id,get,layout='row')=>({id:'reward.'+id,group:'reward',get,layout,fullOnly:true});

const trackingNames={crown:'先頭報酬を冠ごとに記録',shared:'先頭報酬の記録を全冠で共有',ownership:'先頭報酬の所持・解放状態を参照',history:'初回の重み抽選履歴を記録',none:'取得済み記録による制限なし'};
function rewardPolicy(context){
  const {stage,crown}=context;
  if(!stage.drops.length)return state(stage.metadataRow?'inactive':'missing');
  if(!Number.isInteger(stage.rewardMode))return state('missing');
  const policy=context.calculation?.policy;
  if(!policy)return value(status(context,'policy'));
  const first=stage.drops[0].weight;
  const single='先頭の報酬1件を'+(Number.isFinite(first)?number(first)+'%の確率':'設定された確率')+'で抽選';
  const ordered='先頭から順に抽選し、最初の当選を採用';
  const modes={'-4':'重みに応じて報酬1件を抽選','-3':'初回のみ重みに応じて報酬1件を付与','-2':single,'-1':single,0:ordered,1:ordered,2:ordered};
  return value((modes[policy.mode]??'方式 '+policy.mode+'（未確認）')+' / '+(trackingNames[policy.tracking]??'記録方式未確認')+(policy.tracking==='crown'?'（'+crown+'冠）':''));
}
function policySources(context){
  if(!context.stage.drops.length)return state(context.stage.metadataRow?'inactive':'missing');
  if(!Number.isInteger(context.stage.rewardMode))return state('missing');
  const policy=context.calculation?.policy;
  if(!policy)return value(status(context,'policy'));
  const slot=policy.tracking==='crown'||policy.tracking==='shared'?' / 記録枠 '+policy.slot:'';
  const rows=policy.probes.map(probe=>{
    const result=probe.result,selected=result.winner!=null?result.winner>=0:result.grantColumn>=0;
    return '<div>'+(probe.acquired?'取得済み':'未取得')+' / レーダー '+(probe.radar?'使用':'なし')+' → '+(selected?'採用':'採用なし')+
      ' / 記録要求 '+(result.markAcquired||result.markHistory?'あり':'なし')+' / 打切り '+(result.radarBlocked?'あり':'なし')+'</div>';
  }).join('');
  return html('<div>保存番号 '+policy.saveId+' / ステージ '+(context.stage.index+1)+slot+'</div>'+
    (rows?'<div>'+(policy.mode===-3||policy.mode===-4?'重み抽選で候補を選んだ場合':'先頭候補の比較が成功した場合')+'</div>'+rows:'この抽選形式は通常比較の対象外です。'));
}
const materialApplicable=({stage,map})=>map.materials?.items.length>0&&Number.isFinite(map.materials.counts[stage.index]);
const materialItems=({map,calculation})=>map.materials.items.map(material=>({...material,...calculation.materials?.items[material.slot]}));

export const rewardFields=[
  field('drops',context=>{
    const {stage,detail}=context;
    if(!stage.drops.length)return stage.metadataRow>0||stage.rawRewards?.length?state('inactive'):state('missing');
    return rewardGroup(stage.drops.map(reward=>{
      const condition=reward.chance!=null?percent(reward.chance):
        reward.kind==='weight'&&Number.isFinite(reward.weight)?(detail?'重み '+number(reward.weight)+' / ':'')+'重み抽選（入手確率未確認）':
          (detail&&Number.isFinite(reward.weight)?'比較値 '+number(reward.weight)+' / ':'')+'条件付き（入手確率未確認）';
      return [item(context,reward),esc(condition)];
    }));
  },'reward'),
  field('score',context=>context.stage.scoreRewards.length?rewardGroup(bonusRows(context,context.stage.scoreRewards,reward=>number(reward.score)+'点以上')):state('outside'),'reward'),
  field('clearCounts',context=>context.stage.clearRewards.length?rewardGroup(bonusRows(context,context.stage.clearRewards,reward=>reward.clear+'回目')):state('outside'),'reward'),
  field('materials',context=>materialApplicable(context)?rewardGroup(materialItems(context).map(material=>[
    item(context,{...material,count:1}),context.calculation?.materials?'1クリアで1個以上 '+percent(material.atLeastOne*100):status(context,'materials'),
  ])):state('outside'),'reward'),
  field('policy',rewardPolicy),
  field('materialDetails',context=>{
    if(!materialApplicable(context))return state('outside');
    const plan=context.calculation?.materials;if(!plan)return value(status(context,'materials'));
    const items=materialItems(context).map(material=>'<div>'+item(context,{...material,count:1})+
      ' / 抽選1回 '+percent(material.chance*100)+' / 期待数 '+esc(material.expected)+'個</div>').join('');
    return html('<div>抽選 '+plan.draws+'回 / '+context.crown+'冠</div>'+items+
      '<div>1回のハズレ '+percent(plan.miss*100)+' / 全抽選で素材なし '+percent(plan.none*100)+'。トレジャーレーダー対象外。</div>');
  }),
  field('policySource',policySources),
];

export function rewardRows(fields,context,source=false){
  return fields.flatMap(setting=>{
    if(!fieldVisible(setting,{active:true},context.detail,source))return [];
    const result=setting.field.get(context);
    if(!fieldVisible(setting,result,context.detail,source))return [];
    const initialOnly=setting.field.id==='reward.drops'&&setting.label==='クリア報酬'&&(context.map.series==='D'||context.stage.rewardMode===-3);
    const label=initialOnly?'初回クリア報酬':fieldLabel(setting);
    const cellClass=fieldClass(setting),description=fieldDescription(setting);
    if(!result.rows)return ['<tr><th scope="row">'+label+'</th><td class="'+cellClass+'" colspan="3">'+fieldContent(result)+description+'</td></tr>'];
    const heading=esc(context.stage.id+'-'+setting.field.id);
    return result.rows.map(([reward,condition],index)=>'<tr>'+(index===0?'<th id="'+heading+'" scope="row" rowspan="'+result.rows.length+'">'+label+description+'</th>':'')+
      '<td headers="'+heading+'" class="'+cellClass+'" colspan="2">'+reward+'</td><td headers="'+heading+'">'+condition+'</td></tr>');
  }).join('');
}
