export function createBattleStageStats(root,snapshot){
 const clock=root.querySelector('[data-battle-clock]');
 const stagePanel=root.querySelector('#battle-detail-stage'),shelf=root.closest('details');
 const actorsInfo=document.createElement('span');actorsInfo.className='battle-actor-info';root.querySelector('.battle-state').append(actorsInfo);
 const resultInfo=document.createElement('output');resultInfo.setAttribute('aria-live','polite');root.querySelector('.battle-state').append(resultInfo);
 const limitInfo=document.createElement('span');root.querySelector('.battle-constraints').append(limitInfo);
 const stageData=root.querySelector('.battle-stage-data');
 root.querySelector('[data-battle-stage-name]').textContent=snapshot.stage.name+'（'+snapshot.map.key+' / 冠'+snapshot.crown+'）';
 for(const [label,value] of [['ステージ幅',snapshot.stage.width],['敵最大数',snapshot.stage.maxEnemies],['背景ID',snapshot.stage.background],['冠倍率',snapshot.map.stars?.[snapshot.crown-1]==null?'—':snapshot.map.stars[snapshot.crown-1]+'%']]){
  const pair=document.createElement('div'),term=document.createElement('dt'),data=document.createElement('dd');
  term.textContent=label;data.textContent=value?.toLocaleString('ja-JP')??'—';pair.append(term,data);stageData.append(pair);
 }
 return {
 update(state,runtime){
  const {result,rules}=runtime,finished=!!result.mode;
  if(!stagePanel.hidden&&(!shelf||shelf.open)){
   const [ownCastle,enemyCastle]=runtime.hud.health.map(([hp,max,unknown])=>unknown?'？':hp.toLocaleString('ja-JP')+' / '+max.toLocaleString('ja-JP'));
   actorsInfo.textContent='味方 '+runtime.units+' / 敵 '+runtime.enemies+'　自城 '+ownCastle+'　敵城 '+enemyCastle+'　所持金 '+Math.trunc(state.money/100).toLocaleString('ja-JP');
   resultInfo.textContent=[result.reason===3?(result.mode===1?'時間終了（勝利）':'時間終了'):result.mode===1?'勝利':result.reason===2?'敗北':'',rules.scoreType===1||rules.scoreType===3||rules.scoreType===2&&finished||rules.nativeKind===-6&&finished?(rules.scoreType===3?'Pt ':'Score ')+result.score.toLocaleString():'',(rules.scoreType===1||rules.scoreType===3)?'残り '+(Math.max(0,rules.timeLimit-result.timer)/30).toFixed(2)+'秒':''].filter(Boolean).join('　');
   limitInfo.textContent=[!finished&&runtime.points.wait>0?'フィーバー '+(runtime.points.wait/30).toFixed(1)+'秒':'',runtime.extras.length?'追加生産 待機 '+runtime.extras.length:'',rules.totalLimit>=0?'総生産 '+runtime.deployment.total+' / '+rules.totalLimit:'',...rules.rarityLimits.flatMap((limit,i)=>limit>0?['同時 '+['基本','EX','レア','激レア','超激レア','伝説レア'][i]+' '+runtime.deployment.active[i]+' / '+limit]:[])].join('　');
   clock.textContent=state.frame+'F / '+(state.frame/30).toFixed(2)+'秒';
  }
 },
 stop(){actorsInfo.remove();resultInfo.remove();limitInfo.remove();stageData.replaceChildren();},
 };
}
