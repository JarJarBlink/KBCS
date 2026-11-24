import {escapeHtml as esc} from '../game/database-view.js';
import {createSessionId} from '../browser/session-id.js';
import {activeDisplayPreset,displayOptions,readDisplayJson,standardPreset} from './display-settings.js';

const editKeys=['label','visibility','order','width','description','align','emphasis','formatter'];
const labels={label:'表示名',visibility:'表示条件',order:'表示順',width:'幅',description:'説明',align:'揃え',emphasis:'強調',formatter:'単位・整形'};
const words={always:'常時',whenActive:'有効時',detailOnly:'詳細のみ',sourceOnly:'元データのみ',hidden:'非表示',half:'半幅',full:'全幅',left:'左',right:'右',center:'中央',normal:'通常',muted:'控えめ',accent:'テーマの強調色',strong:'太字',native:'画面に合わせる',seconds:'秒',frames:'F'};
const clone=value=>structuredClone(value);
const same=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
const option=(value,text,selected)=>'<option value="'+esc(value)+'"'+(value===selected?' selected':'')+'>'+esc(text)+'</option>';
function download(name,value){
  const url=URL.createObjectURL(new Blob([JSON.stringify(value,null,2)+'\n'],{type:'application/json'}));
  const link=document.createElement('a');link.href=url;link.download=name;link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
}

export function mountDisplayEditor(root,configuration,{groupLabels={},onPreview=()=>{}}={}){
  root.innerHTML=`<div class="db-toolbar"><label>編集モード <select data-editor="mode"><option value="personal">個人設定</option><option value="developer">開発者標準</option></select></label></div>
  <p data-editor="mode-note"></p><div data-editor="presets"><div class="db-toolbar"><label>プリセット <select data-editor="preset"></select></label><label>名前 <input maxlength="80" data-editor="name"></label></div><div class="db-toolbar"><button data-action="create">新規</button><button data-action="duplicate">複製</button><button data-action="rename">改名</button><button data-action="delete">削除</button></div></div>
  <div class="db-toolbar"><label>グループ <select data-editor="group"></select></label><label>表示項目を検索 <input type="search" data-editor="search"></label></div>
  <ul class="display-field-list" data-editor="list" aria-label="表示項目"></ul><div data-editor="properties"></div>
  <div class="db-toolbar"><button data-action="reset-field">項目を標準に戻す</button><button data-action="reset-group">グループを標準に戻す</button><button data-action="reset-all">全体を標準に戻す</button></div>
  <div class="db-toolbar"><button data-action="save">保存</button><button data-action="cancel">取消</button></div><output data-editor="status" role="status"></output>
  <details><summary>JSON入出力</summary><div class="db-toolbar"><label>JSONの種類 <select data-editor="transfer"><option value="store">個人設定一式</option><option value="preset">プリセット単体</option><option value="standard">開発者標準</option></select></label><button data-action="export">書き出す</button></div><label>JSONファイル <input type="file" accept=".json,application/json" data-editor="file"></label><label>JSONを貼り付け<textarea data-editor="json" rows="4"></textarea></label><button data-action="import">読み込む</button></details>`;
  const node=key=>root.querySelector('[data-editor="'+key+'"]');
  const status=text=>node('status').textContent=text;
  const {value,warnings}=configuration.read();
  let saved=value,draft=clone(saved),developerSaved=clone(configuration.defaults),developer=clone(developerSaved);
  let development=false,fieldId=configuration.registry[0]?.id,dragging=null,previewFrame=0;
  const preset=()=>activeDisplayPreset(draft),editable=()=>development||!!preset();
  const dirty=()=>development?!same(developer,developerSaved):!same(draft,saved);
  const display=()=>configuration.resolve(development?null:preset(),development?developer:configuration.defaults);
  const defaults=configuration.resolve();
  const allowDiscard=()=>!dirty()||window.confirm('保存していない変更を破棄しますか？');
  function preview(){
    cancelAnimationFrame(previewFrame);previewFrame=requestAnimationFrame(()=>onPreview(display()));
  }
  const noOrder=fieldId=>configuration.byId.get(fieldId)?.group;
  const selectedField=()=>configuration.byId.get(fieldId);
  node('group').innerHTML=option('*','すべて')+configuration.groups.map(id=>option(id,groupLabels[id]||id)).join('');
  function redrawList(){
    const resolved=display(),group=node('group').value,query=node('search').value.trim().toLocaleLowerCase();
    const items=(group==='*'?Object.values(resolved).flat():resolved[group]).filter(item=>(item.label+' '+item.field.id).toLocaleLowerCase().includes(query));
    if(!items.some(item=>item.field.id===fieldId))fieldId=items[0]?.field.id;
    node('list').innerHTML=items.map(item=>{
      const id=item.field.id,order=resolved[item.field.group],index=order.indexOf(item);
      return '<li data-field="'+esc(id)+'" draggable="'+editable()+'"><button data-action="field" aria-pressed="'+(id===fieldId)+'">'+esc(item.label)+' <small>'+esc(id)+'</small></button>'+
        '<button data-action="up" aria-label="'+esc(item.label)+'を上へ"'+(!editable()||index===0?' disabled':'')+'>↑</button><button data-action="down" aria-label="'+esc(item.label)+'を下へ"'+(!editable()||index===order.length-1?' disabled':'')+'>↓</button></li>';
    }).join('');
  }
  function redrawProperties(){
    const field=selectedField();
    if(!field){node('properties').textContent='該当する項目がありません。';return;}
    const initial=defaults[field.group].find(setting=>setting.field===field),current=display()[field.group].find(setting=>setting.field===field);
    const control=(key,body,disabled=false)=>'<label>'+labels[key]+body+'<small>標準 '+esc(words[initial[key]]??initial[key]??'画面に合わせる')+(disabled?' / この項目は全幅・固定の構造です':'')+'</small></label>';
    const disabled=editable()?'':' disabled';
    node('properties').innerHTML='<fieldset'+disabled+'><legend>'+esc(field.id)+'</legend>'+editKeys.map(key=>{
      const choices=key==='formatter'?development&&field.formatters:displayOptions[key],v=current[key]??(key==='formatter'?'native':'');
      if(key==='formatter'&&!choices)return '';
      if(choices){const fixed=key==='width'&&(field.fullOnly||field.layout==='column');return control(key,'<select data-property="'+key+'"'+(fixed?' disabled':'')+'>'+choices.map(choice=>option(choice,words[choice]??choice,v)).join('')+'</select>',fixed);}
      if(key==='description')return control(key,'<textarea data-property="description" rows="2" maxlength="500">'+esc(v)+'</textarea>');
      return control(key,'<input data-property="'+key+'" value="'+esc(v)+'" '+(key==='order'?'type="number" min="-100000" max="100000" step="1"':'maxlength="100"')+'>');
    }).join('')+'</fieldset>';
  }
  function redraw(){
    node('mode').value=development?'developer':'personal';node('presets').hidden=development;
    node('mode-note').textContent=development?'編集内容は書き出したJSONを確認してから標準設定に反映します。':'標準は閲覧専用です。編集するにはプリセットを新規作成または複製します。';
    node('preset').innerHTML=option(standardPreset,'標準',draft.activePresetId)+draft.presets.map(item=>option(item.id,item.name,draft.activePresetId)).join('');
    node('name').value=preset()?.name??'';
    for(const action of ['rename','delete'])root.querySelector('[data-action="'+action+'"]').disabled=!preset();
    redrawList();redrawProperties();
    for(const action of ['reset-field','reset-group','reset-all'])root.querySelector('[data-action="'+action+'"]').disabled=!editable();
    preview();
  }
  function setProperty(id,key,value){
    if(development){(developer[id]??={})[key]=value;return;}
    const field=configuration.byId.get(id),initial=defaults[field.group].find(setting=>setting.field===field);
    const editablePreset=preset();if(!editablePreset)return;
    const attrs=editablePreset.overrides[id]??={};
    if(value===initial[key])delete attrs[key];else attrs[key]=value;
    if(!Object.keys(attrs).length)delete editablePreset.overrides[id];
    if(key==='order')delete editablePreset.orderOverrides[field.group];
  }
  function reorder(id,target,side){
    if(!editable()||id===target||noOrder(id)!==noOrder(target))return;
    const group=noOrder(id),order=display()[group].map(setting=>setting.field.id).filter(key=>key!==id);
    order.splice(order.indexOf(target)+(side==='after'?1:0),0,id);
    if(development)order.forEach((key,index)=>setProperty(key,'order',(index+1)*10));
    else {
      const base=defaults[group].map(setting=>setting.field.id),active=preset();
      if(same(order,base))delete active.orderOverrides[group];else active.orderOverrides[group]=order;
    }
    fieldId=id;redraw();root.querySelector('[data-field="'+CSS.escape(id)+'"] [data-action="field"]')?.focus();
  }
  function reset(scope){
    if(!editable())return;
    const group=selectedField()?.group;
    const ids=configuration.registry.filter(field=>scope==='all'||scope==='group'&&field.group===group||scope==='field'&&field.id===fieldId).map(field=>field.id);
    for(const id of ids){
      if(development){if(configuration.defaults[id])developer[id]=clone(configuration.defaults[id]);else delete developer[id];}
      else delete preset().overrides[id];
    }
    if(!development){
      if(scope==='all')preset().orderOverrides={};
      if(scope==='group')delete preset().orderOverrides[group];
      if(scope==='field'&&preset().orderOverrides[group])preset().orderOverrides[group]=preset().orderOverrides[group].filter(id=>id!==fieldId);
    }
  }
  const newPreset=(name,base)=>configuration.parsePreset({...clone(base??{overrides:{},orderOverrides:{}}),id:createSessionId(),name});
  function completeStandard(){
    const fields={};
    for(const field of Object.values(display()).flat().sort((a,b)=>a.field.id.localeCompare(b.field.id,'en'))){
      fields[field.field.id]=Object.fromEntries(editKeys.filter(key=>field[key]!==undefined).map(key=>[key,field[key]]));
    }
    return configuration.parseStandard({schemaVersion:1,database:configuration.database,fields}).value;
  }
  async function importData(){
    const kind=node('transfer').value,file=node('file').files[0];
    if(file?.size>256*1024)throw Error('表示設定JSONは256 KiB以下にしてください。');
    const input=readDisplayJson(file?await file.text():node('json').value);
    const warnings=[];
    if(kind==='standard'){
      const parsed=configuration.parseStandard(input);if(!allowDiscard())return;
      if(!development)draft=clone(saved);
      developer=parsed.value.fields;development=true;warnings.push(...parsed.warnings);
    }else if(kind==='store'){
      const parsed=configuration.parseStore(input);if(!allowDiscard())return;
      developer=clone(developerSaved);draft=parsed.value;development=false;warnings.push(...parsed.warnings);
    }else{
      const parsed=configuration.parsePresetFile(input);if(!allowDiscard())return;
      const next=clone(saved),entry=next.presets.some(item=>item.id===parsed.value.id)?newPreset(parsed.value.name,parsed.value):parsed.value;
      next.presets.push(entry);next.activePresetId=entry.id;
      draft=configuration.parseStore(next).value;developer=clone(developerSaved);development=false;warnings.push(...parsed.warnings);
    }
    node('file').value='';status(['読み込みました。保存すると適用されます。',...warnings].join(' / '));redraw();
  }
  function exportData(){
    const kind=node('transfer').value;
    if(kind==='standard'&&!development)throw Error('開発者標準モードで書き出してください。');
    if(kind==='preset'&&!preset())throw Error('書き出す個人プリセットを選んでください。');
    const value=kind==='standard'?completeStandard():kind==='preset'?{schemaVersion:1,database:configuration.database,preset:configuration.parsePreset(preset())}:configuration.parseStore(draft).value;
    download(configuration.database+'-display-'+kind+'.json',value);
  }
  root.addEventListener('input',event=>{
    const input=event.target;
    if(input===node('search')){redrawList();redrawProperties();}
    const key=input.dataset.property;
    if(key&&key!=='order'&&editable()&&input.checkValidity()){
      setProperty(fieldId,key,input.value);preview();
    }
  });
  root.addEventListener('change',event=>{
    const input=event.target,key=input.dataset.property;
    if(input===node('mode')){
      if(allowDiscard()){draft=clone(saved);developer=clone(developerSaved);development=input.value==='developer';node('transfer').value=development?'standard':'store';}
      redraw();return;
    }
    if(input===node('preset')){
      if(allowDiscard()){draft=clone(saved);draft.activePresetId=input.value;}redraw();return;
    }
    if(input===node('group')){redrawList();redrawProperties();return;}
    if(key&&editable()&&input.reportValidity()){
      setProperty(fieldId,key,key==='order'?Number(input.value):input.value);redrawList();preview();
    }
  });
  root.addEventListener('click',async event=>{
    const button=event.target.closest('[data-action]');if(!button)return;
    const action=button.dataset.action,id=button.closest('[data-field]')?.dataset.field;
    try{
      if(action==='field'){fieldId=id;redrawList();redrawProperties();root.querySelector('[data-field="'+CSS.escape(id)+'"] [data-action="field"]')?.focus();return;}
      if(action==='up'||action==='down'){
        const order=display()[noOrder(id)],index=order.findIndex(setting=>setting.field.id===id);
        const neighbor=order[index+(action==='up'?-1:1)];if(neighbor)reorder(id,neighbor.field.id,action==='up'?'before':'after');return;
      }
      if(action==='import'){await importData();return;}
      if(action==='export'){exportData();return;}
      if(action==='create'||action==='duplicate'){
        if(draft.presets.length>=40)throw Error('プリセットは40件まで保存できます。');
        const name=action==='duplicate'?(preset()?.name??'標準').slice(0,76)+'のコピー':node('name').value||'プリセット '+(draft.presets.length+1);
        const entry=newPreset(name,action==='duplicate'?preset():null);draft.presets.push(entry);draft.activePresetId=entry.id;
      }
      if(action==='rename')preset().name=configuration.parsePreset({...preset(),name:node('name').value}).name;
      if(action==='delete'){draft.presets=draft.presets.filter(item=>item.id!==draft.activePresetId);draft.activePresetId=standardPreset;}
      if(action.startsWith('reset-'))reset(action.slice(6));
      if(action==='save'){
        if(development){developerSaved=clone(completeStandard().fields);developer=clone(developerSaved);status('開発者標準の下書きを確定しました。JSONを書き出して反映してください。');}
        else {saved=configuration.save(draft);draft=clone(saved);status('表示設定を保存しました。');}
      }
      if(action==='cancel'){draft=clone(saved);developer=clone(developerSaved);status('保存済みの設定に戻しました。');}
      redraw();
    }catch(error){status(error.message);}
  });
  root.addEventListener('dragstart',event=>{const row=event.target.closest('li[data-field]');if(!row||!editable())return;dragging=row.dataset.field;event.dataTransfer.setData('text/plain',dragging);event.dataTransfer.effectAllowed='move';});
  root.addEventListener('dragover',event=>{const target=event.target.closest('li[data-field]')?.dataset.field;if(dragging&&target&&noOrder(dragging)===noOrder(target))event.preventDefault();});
  root.addEventListener('drop',event=>{const row=event.target.closest('li[data-field]');if(!dragging||!row)return;event.preventDefault();const rect=row.getBoundingClientRect();reorder(dragging,row.dataset.field,event.clientY>(rect.top+rect.bottom)/2?'after':'before');dragging=null;});
  root.addEventListener('dragend',()=>{dragging=null;});
  window.addEventListener('beforeunload',event=>{if(dirty()){event.preventDefault();event.returnValue='';}});
  if(warnings.length)status(warnings.join(' / '));
  redraw();
}
