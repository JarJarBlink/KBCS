import {escapeHtml} from '../game/database-view.js';

export const displayStates={missing:'未収録',inactive:'なし',outside:'—',unknown:'未確認',unsupported:'未対応'};
export const displayValue=(text,active=true)=>({text,active});
export const displayHtml=(html,active=true)=>({html,active});
export const displayState=(state,text)=>({state,text,active:false});
const active=value=>value?.active===true;

export function fieldVisible(setting,value,detail,source=false){
  if(source)return detail&&setting.visibility==='sourceOnly';
  if(setting.visibility==='hidden'||setting.visibility==='sourceOnly')return false;
  if(detail||setting.visibility==='always')return true;
  return setting.visibility==='whenActive'&&active(value);
}
const potentiallyVisible=(setting,detail,source)=>fieldVisible(setting,{active:true},detail,source);
export function fieldLabel(setting){return escapeHtml(setting.label||setting.field.id);}
export function fieldDescription(setting){return setting.description?'<small class="data-sheet-description">'+escapeHtml(setting.description)+'</small>':'';}
export function fieldContent(value){
  if(!value)return displayStates.missing;
  const content=value.html??escapeHtml(value.text??'');
  return value.state?'<span class="data-sheet-state">'+displayStates[value.state]+'</span>'+(content?' '+content:''):content;
}
export const fieldClass=setting=>'data-align-'+setting.align+' data-emphasis-'+setting.emphasis;
export function sheetRow(html){return '<tr><td colspan="4" class="data-sheet-block">'+html+'</td></tr>';}
export const sheetColumns='<colgroup><col class="data-sheet-label"><col><col class="data-sheet-label"><col></colgroup>';

// 値の採否を決めてから左右へ配置する。長い項目と余った項目は3列結合する。
export function sheetRows(fields,context,{detail=false,source=false}={}){
  let half='',rows='';
  const flush=()=>{if(half){rows+='<tr>'+half.replace('<td ','<td colspan="3" ')+'</tr>';half='';}};
  for(const setting of fields){
    if(!potentiallyVisible(setting,detail,source))continue;
    const value=setting.field.get(context,setting);
    if(!fieldVisible(setting,value,detail,source))continue;
    const cells='<th scope="row">'+fieldLabel(setting)+'</th><td class="'+fieldClass(setting)+'">'+fieldContent(value)+fieldDescription(setting)+'</td>';
    if(setting.width==='full'||setting.field.fullOnly){flush();rows+='<tr>'+cells.replace('<td ','<td colspan="3" ')+'</tr>';}
    else if(half){rows+='<tr>'+half+cells+'</tr>';half='';}
    else half=cells;
  }
  flush();return rows;
}

export function sheetTable(label,rows){return '<table class="data-sheet" aria-label="'+escapeHtml(label)+'">'+sheetColumns+'<tbody>'+rows+'</tbody></table>';}

export function columnTable(label,fields,records,context,{detail=false,source=false}={}){
  const columns=fields.flatMap(setting=>{
    if(!potentiallyVisible(setting,detail,source))return [];
    const values=records.map(record=>setting.field.get(record,context,setting));
    if(!fieldVisible(setting,{active:values.some(active)},detail,source))return [];
    return [{setting,values}];
  });
  if(!columns.length||!records.length)return '';
  return '<div class="data-sheet-scroll" tabindex="0" role="region" aria-label="'+escapeHtml(label)+'"><table class="data-sheet data-sheet-columns" aria-label="'+escapeHtml(label)+'"><thead><tr>'+
    columns.map(({setting})=>'<th scope="col" class="'+fieldClass(setting)+'">'+fieldLabel(setting)+fieldDescription(setting)+'</th>').join('')+'</tr></thead><tbody>'+
    records.map((_,index)=>'<tr>'+columns.map(({setting,values})=>'<td class="'+fieldClass(setting)+'">'+fieldContent(values[index])+'</td>').join('')+'</tr>').join('')+'</tbody></table></div>';
}
