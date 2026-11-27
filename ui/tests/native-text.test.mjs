import assert from 'node:assert/strict';
import test from 'node:test';
import {createNotificationTextRasterizer,prepareNativeText} from '../native-text.js';

test('text preparation keeps the browser fallback when a font fails', async t=>{
 const calls=[];
 globalThis.document={fonts:{load:async (query,text)=>{
  calls.push([query,text]);
  if(text==='A')return [{family:'"KBCS Roboto"',status:'loaded'}];
  throw new Error('invalid font');
 }}};
 t.after(()=>delete globalThis.document);
 t.mock.method(console,'warn',()=>{});
 const pending=prepareNativeText();
 assert.equal(prepareNativeText(),pending);
 assert.deepEqual(await pending,{
  renderer:'browser-legacy',reason:'android-reference-pending',
  fonts:[{family:'KBCS Roboto',status:'loaded'},{family:'KBCS Noto CJK JP',status:'error',message:'invalid font'}],
 });
 assert.deepEqual(calls,[['400 16px "KBCS Roboto"','A'],['400 16px "KBCS Noto CJK JP"','\u3042']]);
 assert.equal(console.warn.mock.callCount(),1);
});

test('an empty or nonmatching FontFace list is diagnosed as missing', async t=>{
 globalThis.document={fonts:{load:async (_,text)=>text==='A'?[]:[{family:'sans-serif',status:'loaded'}]}};
 t.after(()=>delete globalThis.document);
 const {loadNativeFonts}=await import('../native-font.js?missing');
 assert.deepEqual(await loadNativeFonts(),[
  {family:'KBCS Roboto',status:'missing'},{family:'KBCS Noto CJK JP',status:'missing'},
 ]);
});

test('the optional 30px notification preview uses the measured bitmap height and baseline', t=>{
 const draws=[];
 globalThis.document={createElement:()=>({
  getContext:()=>({
   measureText:()=>({width:180,fontBoundingBoxAscent:31,fontBoundingBoxDescent:8}),
   fillText(text,x,y){draws.push({text,x,y,font:this.font,color:this.fillStyle});},
  }),
 })};
 t.after(()=>delete globalThis.document);
 const legacy=createNotificationTextRasterizer()('sample','#fff');
 const preview=createNotificationTextRasterizer(true)('sample','#ff0');
 assert.deepEqual([legacy.w,legacy.h,draws[0].y],[180,39,31]);
 assert.deepEqual([preview.w,preview.h,draws[1].y],[185,35,28]);
 assert.match(draws[0].font,/^400 30px/);
 assert.match(draws[1].font,/^700 30px/);
 assert.equal(draws[1].color,'#ff0');
});
