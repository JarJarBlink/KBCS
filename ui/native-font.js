// 旧経路のCanvasとCSSで配布フォントを優先する。
export const nativeFontFamily='"KBCS Roboto", "KBCS Noto CJK JP", sans-serif';
export const nativeFont=(size,weight=400)=>weight+' '+size+'px '+nativeFontFamily;
const samples=[['KBCS Roboto','A'],['KBCS Noto CJK JP','\u3042']];
let loading;
export function loadNativeFonts(){
 const fonts=globalThis.document?.fonts;
 if(!fonts)return Promise.resolve(samples.map(([family])=>({family,status:'unavailable'})));
 return loading??=Promise.all(samples.map(async ([family,sample])=>{
  try{
   const faces=await fonts.load('400 16px "'+family+'"',sample);
   const loaded=faces.some(face=>face.status==='loaded'&&face.family.replace(/^["']|["']$/g,'')===family);
   return {family,status:loaded?'loaded':'missing'};
  }catch(error){return {family,status:'error',message:String(error?.message??error)};}
 }));
}
