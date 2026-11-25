import {loadNativeFonts} from './native-font.js';

let preparation;
export function prepareNativeText(){
 return preparation??=loadNativeFonts().then(fonts=>{
  const diagnostics={renderer:'browser-legacy',reason:'android-reference-pending',fonts};
  if(fonts.some(font=>font.status==='missing'||font.status==='error'))console.warn('[KBCS text]',diagnostics);
  return diagnostics;
 });
}
