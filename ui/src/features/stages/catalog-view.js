import {escapeHtml as esc,formatNumber} from '../../shared/game/database-view.js';
import {enemyImageHtml} from '../../shared/game/enemy-view.js';
import {stageDetailUrl,stageGimmicks} from './model.js';

const labels=new Map(stageGimmicks);
const noteworthy=new Set(['restriction','formation','ex','specialRule','pointRule','timeLimit','randomPattern','missing']);

export function stageTags(flags){
  return flags.filter(flag=>labels.has(flag)).map(flag=>'<span class="stage-tag">'+esc(labels.get(flag))+'</span>').join('');
}

export function stageEnemyStrip(ids,enemies,limit,render){
  return '<div class="stage-enemy-strip">'+ids.slice(0,limit).map(id=>{
    const enemy=enemies.enemies[id];
    return enemy?render(enemy,enemy.icon?enemyImageHtml(enemies,enemy,26):'<small>'+esc(enemy.name)+'</small>'):'<span class="db-meta">#'+id+'</span>';
  }).join('')+(ids.length>limit?'<span class="db-meta" aria-label="ほか'+(ids.length-limit)+'体">+'+(ids.length-limit)+'</span>':'')+'</div>';
}

export function stageMapCards(stages,crown,database,enemies){
  return '<ol class="stage-map-cards">'+stages.map(stage=>{
    const reward=stage.drops[0]||stage.scoreRewards[0]||stage.clearRewards[0],item=reward&&database.rewards[reward.id];
    const remaining=stage.drops.length+stage.scoreRewards.length+stage.clearRewards.length-1;
    const tags=stageTags(stage.flags.filter(flag=>noteworthy.has(flag)));
    return '<li><a class="stage-map-card" href="'+stageDetailUrl(stage,crown)+'" data-stage-choice="'+stage.index+'">'+
      '<span class="stage-card-number">'+(stage.index+1)+'</span><span class="stage-card-main"><strong>'+esc(stage.name)+'</strong><small>'+esc(stage.id)+'</small></span>'+
      '<span class="stage-card-facts"><span>統率力 <b>'+formatNumber(stage.energy)+'</b></span><span>'+(stage.difficulty==null?'難易度 —':'★'+stage.difficulty)+'</span></span>'+
      '<div class="stage-card-preview">'+stageEnemyStrip(stage.enemies,enemies,7,(enemy,icon)=>'<span title="'+esc(enemy.name)+'">'+icon+'</span>')+
      (reward?'<small class="stage-card-reward">'+esc(item?.name||'報酬 '+reward.id)+' ×'+formatNumber(reward.count)+(remaining>0?' ほか':'')+'</small>':'')+'</div>'+
      (tags?'<span class="stage-card-tags">'+tags+'</span>':'')+'</a></li>';
  }).join('')+'</ol>';
}
