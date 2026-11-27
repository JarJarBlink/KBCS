import {readBattleJson} from './battle-support.js';
import {applyUnitTalents} from './talent-effects.js';
import {parseImgCut} from './src/features/motion/motion-engine.js';

const targets=['red','floating','black','metal','angel','alien','zombie','relic','white','aku'];
export function unitInfoInput(unit,member,manifest){
 const original=unit?.forms.find(form=>form.index===member?.form),level=(member?.level||0)+(member?.plus||0);
 const improved=original?applyUnitTalents(unit,original,member.talents,level,true):null,form=improved?.form,keys=new Set(form?.abilities.map(ability=>ability.key)||[]);
 for(const ability of form?.abilities||[])if(ability.key.endsWith('-immune')&&ability.resistance<100){keys.delete(ability.key);if(ability.resistance>0)keys.add(ability.key.replace(/-immune$/,'-resist'));}
 if(form)keys.add(form.attackType==='範囲'?'area':'single');
 const applied=(unit?.talents||[]).filter(talent=>improved?.applied.includes(talent.index));
 const added=new Set(applied.flatMap(talent=>[...talent.targets,...(talent.effect.kind==='target'?[talent.effect.key]:[])]));
 return {center:0,y:159,form:form?.index||0,attributes:targets.map(key=>Number(form?.targets.includes(key)||false)),abilities:manifest.abilityKeys.map(list=>Number(list.some(key=>keys.has(key)))),talents:manifest.abilities.map(row=>{const talent=applied.find(talent=>talent.id===row[3]);return talent?member.talents[talent.index]===talent.maxLevel?2:1:0;}),new_attributes:targets.map(key=>Number(added.has(key))),orbs:form?.index>=2?member.orbs.filter(id=>id!=null).length:0};
}
export async function prepareBattleInfo(database,snapshot,signal){
 const [manifest,equipment]=await Promise.all([readBattleJson('/images/native-combo/manifest.json',{signal}),readBattleJson('/api/formation-equipment',{signal})]),units=new Map(database.units.map(unit=>[unit.id,unit]));
 const orbs=new Map(equipment.items.filter(item=>item.support!=='unsupported').map(item=>[item.id,item.equipment])),images=new Map();
 const inputs=snapshot.formation.slots.map(member=>unitInfoInput(member&&units.get(member.unitId),member&&{...member,orbs:member.orbs.filter(id=>orbs.has(id))},manifest));
 const layouts=await readBattleJson('/api/battle-info',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(inputs),signal});
 const slotOrbs=[];
 if(inputs.some(input=>input.orbs)){
  const loadImage=async url=>{const image=new Image();image.src=url;await image.decode();signal.throwIfAborted();return image;};
  await Promise.all([
   ...['equipment_attribute','equipment_effect','equipment_grade','equipment_shadow'].map(async stem=>{
    images.set(stem,await loadImage(manifest.atlases[stem].url));
   }),
   ...['equipment_attribute_s','equipment_effect_s'].map(async (stem,index)=>{
    const [image,cuts]=await Promise.all([
     loadImage('/api/asset/Image/'+stem+'.png'),
     fetch('/api/asset/ImageData/'+stem+'.imgcut',{signal}).then(response=>{
      if(!response.ok)throw Error('本能玉の切り抜き定義を取得できません：'+stem);
      return response.text();
     }),
    ]);
    slotOrbs[index]={image,cuts:parseImgCut(cuts).cuts};
   }),
  ]);
 }
 return {manifest,layouts,orbs,images,slotOrbs};
}
// 006a4e9cは両入口で共通。本能玉は原本の4部品・倍率・影の色/透明度を使う。
export function drawBattleInfo(context,resources,member,slot,center,sprite,tinted){
 const info=resources.info,layout=info.layouts[slot];
 for(const [cut,x,y,color]of layout.sprites.slice(0,layout.count)){
  if(color===255)sprite('img015',cut,x+center,y);
  else{const atlas=resources.atlas.atlases.img015,rect=atlas.rects[cut];context.drawImage(tinted(resources.images.get(atlas.image),rect,[color,color,color],'info-'+cut+'-'+color),x+center,y);}
 }
 const ids=member?.form>=2?member.orbs.filter(id=>id!=null):[];
 for(let i=0;i<ids.length;++i){const orb=info.orbs.get(ids[i]);if(!orb)throw Error('本能玉の表示定義がありません：'+ids[i]);const [x,y]=layout.orbs[i],attribute=orb.attribute??12,scale=Math.fround(.5764706134796143);
  for(const [stem,cut,tint,alpha]of [['equipment_attribute',attribute,null,255],['equipment_effect',orb.content,null,255],['equipment_shadow',orb.content,info.manifest.orbColors[attribute],75],['equipment_grade',orb.gradeID,null,255]]){
   const rect=info.manifest.atlases[stem].rects[cut];if(!rect)throw Error('本能玉の画像部品がありません：'+stem+' '+cut);const image=info.images.get(stem),width=rect[2]*scale,height=rect[3]*scale;
   context.save();context.globalAlpha=alpha/255;if(tint)context.drawImage(tinted(image,rect,tint,'info-orb-'+attribute+'-'+cut),x+center+23-width/2,y+23-height/2,width,height);else context.drawImage(image,...rect,x+center+23-width/2,y+23-height/2,width,height);context.restore();
  }
 }
}

// 005d0a68: 玉の属性と効果を通常の枠座標から別々に描く。
export function drawBattleSlotOrbs(context,info,icons,x,y){
 if(!icons?.length)return;
 for(const [index,[attribute,effect]] of icons.entries()){
  const left=x+index*27;
  for(const [part,cut,offset] of [[0,attribute,-5],[1,effect,-2]]){
   const atlas=info.slotOrbs[part],rect=atlas?.cuts[cut];
   if(rect)context.drawImage(atlas.image,rect.x,rect.y,rect.width,rect.height,left+offset,y+offset,rect.width,rect.height);
  }
 }
}
