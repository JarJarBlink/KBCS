const version=1;
const forbidden=new Set(['__proto__','constructor','prototype']);
const own=(value,key)=>Object.hasOwn(value,key);
export const displayOptions={
  visibility:['always','whenActive','detailOnly','sourceOnly','hidden'],
  width:['half','full'],align:['left','right','center'],emphasis:['normal','muted','accent','strong'],
};
export const standardPreset='standard';
export const emptyDisplayStore=database=>({schemaVersion:version,database,presets:[],activePresetId:standardPreset});
const storageKey=database=>'kbcs:database-display:'+database;

function object(value,keys){
  if(!value||typeof value!=='object'||Array.isArray(value)||Object.keys(value).some(key=>forbidden.has(key)||keys&&!keys.includes(key)))throw Error('JSONの形式または属性が不正です。');
  return value;
}
function shortText(value,max){
  if(typeof value!=='string'||value.length>max||/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/.test(value))throw Error('文字列の形式または長さが不正です。');
  return value;
}
function properties(value,field,developer){
  const props={};
  for(const [key,entry] of Object.entries(object(value))){
    if(key==='label'||key==='description')props[key]=shortText(entry,key==='label'?100:500);
    else if(key==='order'&&Number.isFinite(entry)&&Number.isInteger(entry)&&Math.abs(entry)<=100000)props.order=entry;
    else if(own(displayOptions,key)&&displayOptions[key].includes(entry))props[key]=entry;
    else if(key==='formatter'&&developer&&field.formatters?.includes(entry))props.formatter=entry;
    else throw Error(field.id+' の '+key+' が不正です。');
  }
  return props;
}
export function displayConfiguration(database,registry,standard,{aliases={}}={}){
  const byId=new Map(registry.map(field=>[field.id,field]));
  if(byId.size!==registry.length)throw Error('表示項目IDが重複しています。');
  const groups=[...new Set(registry.map(field=>field.group))];
  const fieldId=id=>own(aliases,id)?aliases[id]:id;
  const readFields=(value,warnings,developer)=>{
    const output={};
    for(const [inputId,attrs] of Object.entries(object(value))){
      const id=fieldId(inputId);
      const field=byId.get(id);
      if(!field){warnings.push('未登録の項目 '+inputId);continue;}
      if(own(output,id))throw Error(id+' が重複しています。');
      if(id!==inputId)warnings.push('項目IDを移行しました '+inputId+' → '+id);
      output[id]=properties(attrs,field,developer);
    }
    return output;
  };
  const header=(value,keys)=>{
    object(value,['schemaVersion','database',...keys]);
    if(value.schemaVersion!==version||value.database!==database)throw Error('対応する設定の版またはDB種別が異なります。');
  };
  const parseStandard=value=>{
    header(value,['fields']);const warnings=[];
    return {value:{schemaVersion:version,database,fields:readFields(value.fields,warnings,true)},warnings};
  };
  const defaults=parseStandard(standard).value.fields;
  const parsePreset=(value,warnings=[])=>{
    object(value,['id','name','overrides','orderOverrides']);
    if(!/^[a-zA-Z0-9_-]{1,80}$/.test(value.id)||value.id===standardPreset||typeof value.id!=='string')throw Error('プリセットIDが不正です。');
    const name=shortText(value.name,80).trim();if(!name)throw Error('プリセット名を入力してください。');
    const orderOverrides={};
    for(const [group,ids] of Object.entries(object(value.orderOverrides??{}))){
      if(!Array.isArray(ids)||ids.some(id=>typeof id!=='string'||forbidden.has(id))||new Set(ids).size!==ids.length)throw Error('並び順が不正です。');
      if(!groups.includes(group)){warnings.push('未登録のグループ '+group);continue;}
      const migrated=ids.map(fieldId);
      if(new Set(migrated).size!==migrated.length)throw Error('移行後の並び順に重複があります。');
      orderOverrides[group]=migrated.filter(id=>{
        const field=byId.get(id);if(!field){warnings.push('未登録の項目 '+id);return false;}
        if(field.group!==group)throw Error(id+' は別グループの項目です。');
        return true;
      });
    }
    return {id:value.id,name,overrides:readFields(value.overrides??{},warnings,false),orderOverrides};
  };
  const parseStore=value=>{
    header(value,['presets','activePresetId']);const warnings=[];
    if(!Array.isArray(value.presets)||value.presets.length>40)throw Error('プリセットは40件まで保存できます。');
    const presets=value.presets.map(preset=>parsePreset(preset,warnings));
    if(new Set(presets.map(preset=>preset.id)).size!==presets.length)throw Error('プリセットIDが重複しています。');
    if(value.activePresetId!==standardPreset&&!presets.some(preset=>preset.id===value.activePresetId))throw Error('選択中のプリセットが見つかりません。');
    return {value:{schemaVersion:version,database,presets,activePresetId:value.activePresetId},warnings};
  };
  const parsePresetFile=value=>{
    header(value,['preset']);const warnings=[];
    return {value:parsePreset(value.preset,warnings),warnings};
  };
  function resolve(preset,developerDefaults=defaults){
    const output={};
    for(const id of groups){
      const fields=registry.filter(field=>field.group===id).map(field=>({visibility:'always',width:'half',align:'left',emphasis:'normal',order:0,label:field.id,description:'',...field.defaults,...developerDefaults[field.id],...preset?.overrides[field.id],field}));
      fields.sort((a,b)=>a.order-b.order||a.field.id.localeCompare(b.field.id,'en'));
      output[id]=placeNewFields(fields,preset?.orderOverrides?.[id]);
    }
    return output;
  }
  return {database,registry,byId,groups,defaults,resolve,parseStore,parseStandard,parsePreset,parsePresetFile,
    read(){try{const value=localStorage.getItem(storageKey(database));return value?parseStore(readDisplayJson(value)):{value:emptyDisplayStore(database),warnings:[]};}
      catch(error){return {value:emptyDisplayStore(database),warnings:['保存済みの表示設定を読み込めませんでした。 '+error.message]};}},
    save(value){const data=parseStore(value).value,text=JSON.stringify(data);readDisplayJson(text);localStorage.setItem(storageKey(database),text);return data;},
  };
}

// 新しい項目を標準順の直後に置き、利用者が明示した項目の相対順を保つ。
export function placeNewFields(fields,override){
  if(!override?.length)return fields;
  const known=new Map(fields.map(field=>[field.field.id,field]));
  const ordered=override.filter(id=>known.has(id)).map(id=>known.get(id));
  let previous=null;
  const placed=new Set(ordered);
  for(const field of fields){
    if(!placed.has(field))ordered.splice(previous?ordered.indexOf(previous)+1:0,0,field);
    previous=field;
  }
  return ordered;
}

export function activeDisplayPreset(store){return store.presets.find(preset=>preset.id===store.activePresetId);}
export function readDisplayJson(text){
  if(typeof text!=='string'||new TextEncoder().encode(text).length>256*1024)throw Error('表示設定JSONは256 KiB以下にしてください。');
  return JSON.parse(text.replace(/^\uFEFF/,''),(key,value)=>{
    if(forbidden.has(key))throw Error('許可されていないキーがあります。');
    return value;
  });
}
