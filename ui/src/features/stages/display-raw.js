import {escapeHtml as esc} from '../../shared/game/database-view.js';

export function rawInteger(raw){
  if(raw==null||String(raw).trim()==='')return null;
  const text=String(raw).trim();
  if(text==='.')return 0;
  const value=/^[+-]?\d+$/.test(text)?Number(text):NaN;
  return Number.isSafeInteger(value)?value:null;
}

// 旧APIの配列にも同じ正式名を適用する。元配列は書き換えない。
export function optionAnnotationIndex(map){
  if(map.optionsAnnotationIndex===19||map.optionsAnnotationIndex===20)return map.optionsAnnotationIndex;
  const raw=map.rawOptions;
  if(raw?.length!==20)return 20;
  return String(raw[19]??'').trim()&&rawInteger(raw[19])==null?19:null;
}
function actualIndex(record,annotation){
  if(record.key==='map.options[20]')return annotation;
  if(record.key==='map.options[19]'&&annotation!==20)return null;
  return record.index;
}
export function namedColumns(ledger,scope,cells,annotation=20){
  return Object.fromEntries(ledger.scopes[scope].map(record=>{
    if(record.key==='map.options[19]'&&annotation===null)return [record.name,{raw:cells?.[19],index:19,value:null}];
    const index=actualIndex(record,annotation),raw=index==null?undefined:cells?.[index];
    const numeric=scope==='stage.difficulty'&&record.index===1
      ?(raw!=null&&String(raw).trim()!==''&&Number.isFinite(Number(raw))?Number(raw):null)
      :rawInteger(raw);
    return [record.name,{raw,index,value:record.key==='map.options[20]'?raw??null:numeric}];
  }));
}
const json=value=>esc(JSON.stringify(value));
const assetLink=path=>path?'<a href="/api/asset/'+esc(path.split('/').map(encodeURIComponent).join('/'))+'" download>'+esc(path)+'</a>':'';
const evidenceLink=record=>record.evidence?'<a href="'+esc(record.evidence)+'" target="_blank" rel="noopener noreferrer">等級 '+record.confidence+'</a>':'原本照合（'+record.confidence+'）';

function rawSheet(ledger,scope,{cells,path,line,annotation=20,offset=0,known=true}){
  if(!Array.isArray(cells)||!cells.length)return '';
  const names=known?ledger.scopes[scope]:[];
  const described=new Set();
  const rawRows=names.map(record=>{
    const index=actualIndex(record,annotation);
    if(index!=null)described.add(index);
    const value=index==null?(annotation==null?'元位置未確認':'対象外'):cells[index]===undefined?'未収録':'<code>'+json(cells[index])+'</code>';
    const evidence=evidenceLink(record);
    return '<tr><th scope="row">'+esc(record.name)+'</th><td>列 '+(index??'—')+' / '+value+'<br>'+evidence+' '+esc(record.meaning)+(record.note?'<small class="data-sheet-description">'+esc(record.note)+'</small>':'')+'</td></tr>';
  });
  for(const [index,value] of cells.entries()){
    if(index<offset||described.has(index))continue;
    rawRows.push('<tr><th scope="row">列 '+index+'</th><td><code>'+json(value)+'</code></td></tr>');
  }
  return '<details><summary>'+esc(scope)+(line?' / '+line+'行':'')+'</summary>'+assetLink(path)+
    '<table class="data-sheet stage-source-table"><tbody>'+rawRows.join('')+'</tbody></table></details>';
}

export function mapColumnsHtml({ledger,map,database}){
  const chapter=/^(EOC|ITF|COTC)/.test(map.series);
  const options=rawSheet(ledger,'map.options',{cells:map.rawOptions,path:'Data/Map_option.csv',line:map.optionsRow,annotation:optionAnnotationIndex(map)});
  const header=rawSheet(ledger,'map.header',{cells:map.rawHeaders?.[0],path:map.source,line:map.headerSourceRows?.[0],known:!chapter});
  const pattern=rawSheet(ledger,'map.pattern',{cells:map.rawHeaders?.[1],path:map.source,line:map.headerSourceRows?.[1],known:!chapter&&map.series!=='EX'});
  return '<div>'+esc(database.gameVersion??'')+' / '+esc(map.key)+' / マップID '+esc(map.nativeId)+' / '+map.stars.length+'冠</div>'+options+header+pattern+
    (map.limits??[]).filter(limit=>limit.stage<0).map(limit=>limitSourceHtml(ledger,limit)).join('');
}

export function limitSourceHtml(ledger,limit){
  return rawSheet(ledger,'stage.options',{cells:limit.raw,path:'Data/Stage_option.csv',line:limit.sourceRow});
}

export function stageColumnsHtml({ledger,map,stage}){
  const chapter=/^(EOC|ITF|COTC)/.test(map.series),definition=stage.rawHeader?.length?stage.source:null;
  const reward={cells:stage.rawRewards,path:map.source,line:stage.metadataRow,known:!chapter};
  const baseOffer=rawSheet(ledger,'map.stage',{...reward,cells:reward.cells?.slice(0,16)});
  const scoreOffer=reward.cells?.length>16?rawSheet(ledger,'map.stage.score',{...reward,offset:16,known:!chapter&&rawInteger(reward.cells[15])===1}):'';
  const difficulty=stage.difficultySource;
  const difficultyHtml=difficulty?'<div>'+assetLink('Data/difficulty_level.tsv')+' / '+difficulty.row+'行 / 列 '+difficulty.column+
    ' / globalMapId <code>'+json(difficulty.mapIdRaw??map.nativeId)+'</code> / stageDifficultyByIndex <code>'+json(difficulty.raw)+'</code></div>':
    (stage.difficulty!=null?'<div>stageDifficultyByIndex '+esc(stage.difficulty)+'（旧DBの型付き値）</div>':'');
  const spawnRows=stage.spawns?.length?'<details><summary>battle.spawn / 元行と読込後の14整数</summary>'+assetLink(definition)+
    '<details><summary>列定義と根拠</summary><ul>'+ledger.scopes['battle.spawn'].map(record=>'<li><code>'+record.index+': '+esc(record.name)+'</code> '+esc(record.meaning)+' / '+evidenceLink(record)+'</li>').join('')+'</ul></details>'+
    '<table class="data-sheet stage-source-table"><tbody>'+stage.spawns.map(spawn=>'<tr><th scope="row">'+esc(spawn.sourceRow)+'行</th><td><code>'+json(spawn.raw)+'<br>'+json(spawn.native)+'</code></td></tr>').join('')+'</tbody></table></details>':'';
  return rawSheet(ledger,'battle.leading',{cells:stage.rawSettings,path:definition,line:stage.battleSourceRows?.[0]})+
    rawSheet(ledger,'battle.header',{cells:stage.rawHeader,path:definition,line:stage.battleSourceRows?.at(-1)})+baseOffer+scoreOffer+difficultyHtml+spawnRows+
    (map.limits??[]).filter(limit=>limit.stage===stage.index).map(limit=>limitSourceHtml(ledger,limit)).join('');
}
