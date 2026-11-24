import {rawInteger} from './display-raw.js';

// 005d996cで、レーダーなしに候補が選ばれる確率。
export function dropChances({drops,rewardMode,rawRewards},map){
  if(!Number.isInteger(rewardMode)||rewardMode< -4||rewardMode>2||!drops.length)return null;
  const weighted=rewardMode===-3||rewardMode===-4;
  // 未来編の通常比較は採点経路と特殊フラグで分岐する。
  if(!weighted&&![0,1,2,3,7,8,9,99].includes(map.nativeMode))return null;
  const columns=(weighted?[5,9,12,15,18,21,24,27,30,33,36]:rewardMode<0?[5]:[5,9,12]);
  const cutoff=columns.findIndex(column=>(rawInteger(rawRewards?.[column])??-1)<0);
  const active=cutoff<0?columns:columns.slice(0,cutoff);
  // 抽選順を変える候補欠測や原本の上限外は数値化しない。
  if(active.length!==drops.length||active.some((column,index)=>column!==drops[index].sourceColumn||
    rawInteger(rawRewards[column])!==drops[index].weight)||
    drops.some(row=>row.kind!==(weighted?'weight':'normal')||!Number.isSafeInteger(row.weight)||row.weight<0))return null;
  if(weighted){
    const total=drops.reduce((sum,row)=>sum+row.weight,0);
    if(drops.length>10||total<1||total>2147483647)return null;
    return drops.map(({weight})=>({chance:100*weight/total,limit:rewardMode===-3?'first':null}));
  }
  if(drops.some(row=>row.weight>100))return null;
  const tracked=[1,2].includes(rewardMode)&&[3,99].includes(map.nativeMode)&&
    Number.isInteger(map.acquisitionId)&&map.acquisitionId>=0&&map.acquisitionId<400;
  let remaining=1,repeatRemaining=1;
  return drops.map(({id,weight},index)=>{
    const rate=weight/100,chance=100*remaining*rate;
    remaining*=1-rate;
    if(!tracked)return {chance};
    if(index===0)return {chance,limit:id>=1000&&id<30000?'owned':rewardMode===2?'crown':'shared'};
    const repeatChance=100*repeatRemaining*rate;
    repeatRemaining*=1-rate;
    return {chance,repeatChance};
  });
}
