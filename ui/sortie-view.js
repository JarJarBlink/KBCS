import {battleItems} from './battle-support.js';
import {escapeHtml as esc} from './src/shared/game/database-view.js';
import {enemyImageHtml} from './src/shared/game/enemy-view.js';
import {effectiveSpawn} from './src/features/stages/model.js';
import {stageEnemyDetailUrl} from './native-enemy-statistics.js';

const formatRate=new Intl.NumberFormat('ja-JP',{maximumFractionDigits:6}).format;

// ルール0の所持金。PCで指定した円を、既存の100分の1円単位へ渡す前に検査する。
export function sortieFixedMoney(map,override){
 const rule=map.rules?.find(value=>value.id===0);if(!rule)return null;
 const value=override??rule.parameters[0];
 if(!Number.isInteger(value)||value<0||value>10000000)throw Error('所持金は0〜10,000,000円の整数で指定してください');
 return value;
}

export function readSortiePreferences(local,session){
 const read=storage=>{try{return JSON.parse(storage.getItem('kbcs:sortie')||'{}')||{};}catch{return {};}};
 const saved={...read(session),...read(local)};
 return {...saved,items:Object.fromEntries(battleItems.map(item=>[item.key,!!saved.items?.[item.key]])),speed:saved.speed===3?3:2};
}

export function sortieEnemyLinksHtml(stage,map,crown,database){
 const entries=new Map((stage.enemies||[]).map(id=>[id,new Map()]));
 for(const spawn of stage.spawns){
  if(!entries.has(spawn.enemy))entries.set(spawn.enemy,new Map());
  entries.get(spawn.enemy).set(spawn.health+'/'+spawn.attack,spawn);
 }
 const enemies=new Map(database.enemies.map(enemy=>[enemy.id,enemy]));
 return [...entries].flatMap(([id,spawns])=>{
  const enemy=enemies.get(id),name=esc(enemy?.name??'敵ID '+id);
  if(!enemy)return ['<span class="sortie-enemy">'+name+'</span>'];
  return (spawns.size?[...spawns.values()]:[null]).map(spawn=>{
   const rates=spawn&&effectiveSpawn(spawn,map,crown);
   const label=name+(rates?'（体力 '+formatRate(rates.health)+'% / 攻撃 '+formatRate(rates.attack)+'%）':'');
   const body=enemy.icon?enemyImageHtml(database,enemy,32)+'<span hidden>'+name+'</span>':name;
   return '<a class="sortie-enemy" href="'+esc(stageEnemyDetailUrl(enemy,spawn,map,crown))+'" title="'+label+'" aria-label="'+label+'">'+body+'</a>';
  });
 }).join('')||'<span class="db-meta">出現情報なし</span>';
}
// 006dca34/006ddfb8のmapicon: ON=0..5、OFF=6..11、3倍=16。
export function sortieItemsHtml(manifest,items,speed){
 return battleItems.map((item,index)=>{
  const cut=index===0&&items.speedup&&speed===3?16:index+(items[item.key]?0:6),rect=manifest.atlases.mapicon.rects[cut],width=rect[2],height=rect[3];
  return '<button type="button" data-item="'+item.key+'" aria-pressed="'+!!items[item.key]+'" aria-label="'+esc(item.name+(index===0&&items.speedup?' '+speed+'倍':'')+(items[item.key]?'：有効':'：無効'))+'"><span class="sortie-item-image"><svg viewBox="0 0 '+width+' '+height+'" width="'+width+'" height="'+height+'" aria-hidden="true"><svg width="'+width+'" height="'+height+'" viewBox="'+rect.join(' ')+'" overflow="hidden"><image href="/images/native-battle/mapicon.png"/></svg></svg></span><span>'+item.name+(index===0&&items.speedup?' '+speed+'倍':'')+'</span></button>';
 }).join('');
}
export function toggleSortieItem(items,speed,key){
 if(key==='speedup'){
  if(!items.speedup){items.speedup=true;return 2;}
  if(speed===2)return 3;
  items.speedup=false;return 2;
 }
 items[key]=!items[key];return speed;
}
// 007acf88 / 007b3c90..007b3d2c。右端から320、y411の原本2スプライト。
export function sortieLaunchLayout(width,press=0){
 const half=Math.trunc(press/2);
 return [[10,width-320-half,411-half,304+press,74+press],[11,width-282-half,417-half,231+press,62+press]];
}
export function sortieLaunchHtml(manifest,press=0){
 const atlas=manifest.atlases.img031_ja;
 return '<svg viewBox="0 0 304 74" aria-hidden="true">'+sortieLaunchLayout(320,press).map(([cut,x,y,w,h])=>'<svg x="'+x+'" y="'+(y-411)+'" width="'+w+'" height="'+h+'" viewBox="'+atlas.rects[cut].join(' ')+'" preserveAspectRatio="none"><image href="'+atlas.url+'"/></svg>').join('')+'</svg>';
}
