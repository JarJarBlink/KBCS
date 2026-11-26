import {loadNativeFonts,nativeFont} from './native-font.js';

let preparation;
export function prepareNativeText(){
 return preparation??=loadNativeFonts().then(fonts=>{
  const diagnostics={renderer:'browser-legacy',reason:'android-reference-pending',fonts};
  if(fonts.some(font=>font.status==='missing'||font.status==='error'))console.warn('[KBCS text]',diagnostics);
  return diagnostics;
 });
}

export function createNotificationTextRasterizer(pixel8Preview=false){
 const measure=document.createElement('canvas').getContext('2d');
 const font=nativeFont(30,pixel8Preview?700:400);
 measure.font=font;
 return (text,color)=>{
  const metrics=measure.measureText(text);
  // Pixel 8の30px通知を比較する試作。幅の入力にはCanvasの字送りを使う。
  const w=pixel8Preview?Math.trunc(Math.fround(Math.fround(metrics.width)+1))+4:Math.ceil(metrics.width);
  const h=pixel8Preview?35:Math.ceil(metrics.fontBoundingBoxAscent+metrics.fontBoundingBoxDescent);
  const baseline=pixel8Preview?28:Math.ceil(metrics.fontBoundingBoxAscent);
  const canvas=document.createElement('canvas');
  canvas.width=Math.max(1,w);canvas.height=Math.max(1,h);
  const ink=canvas.getContext('2d');
  ink.font=font;ink.textBaseline='alphabetic';ink.fillStyle=color;
  ink.fillText(text,0,baseline);
  return {canvas,w,h};
 };
}
