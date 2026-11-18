const budget=2, lookBehind=32, tile=4;

function bounds(points){
 const [x0,y0,x1,y1,x2,y2,x3,y3]=points;
 return [Math.min(x0,x1,x2,x3),Math.min(y0,y1,y2,y3),Math.max(x0,x1,x2,x3),Math.max(y0,y1,y2,y3)];
}
const inside=(a,b)=>a[0]-b[0]>1&&a[1]-b[1]>1&&b[2]-a[2]>1&&b[3]-a[3]>1;

function opaqueReader(){
 const cache=new WeakMap();
 let surface;
 return (image,cut,region,canSample)=>{
  const [x,y,w,h]=cut,width=image.naturalWidth||image.width,height=image.naturalHeight||image.height;
  if(x<0||y<0||w<=0||h<=0||x+w>width||y+h>height||(w+2)*(h+2)>131072)return false;
  let cuts=cache.get(image);if(!cuts){cuts=new Map();cache.set(image,cuts);}
  const left=Math.max(0,x-1),top=Math.max(0,y-1),right=Math.min(width,x+w+1),bottom=Math.min(height,y+h+1);
  const key=cut.join(','),stride=Math.ceil((right-left)/tile)+1,rows=Math.ceil((bottom-top)/tile)+1;
  if(!cuts.has(key)){
   if(!canSample())return false;
   let mask=null;
   try{
    const width=right-left,height=bottom-top;
    surface??=document.createElement('canvas');surface.width=width;surface.height=height;
    const ctx=surface.getContext('2d',{willReadFrequently:true});
    ctx.drawImage(image,left,top,width,height,0,0,width,height);
    const {data}=ctx.getImageData(0,0,width,height);
    mask=new Uint16Array(stride*rows);
    for(let j=0;j<height;++j)for(let i=0;i<width;++i)
     if(data[(j*width+i)*4+3]!==255)mask[(Math.floor(j/tile)+1)*stride+Math.floor(i/tile)+1]=1;
    for(let j=1;j<rows;++j)for(let i=1,k=j*stride+1;i<stride;++i,++k)mask[k]+=mask[k-1]+mask[k-stride]-mask[k-stride-1];
   }catch{surface=null;mask=null;}
   if(cuts.size>=48)cuts.delete(cuts.keys().next().value);cuts.set(key,mask);
  }
  const mask=cuts.get(key);if(!mask)return false;
  const x0=Math.floor((Math.max(left,x+region[0]*w-1)-left)/tile),x1=Math.ceil((Math.min(right,x+region[2]*w+1)-left)/tile);
  const y0=Math.floor((Math.max(top,y+region[1]*h-1)-top)/tile),y1=Math.ceil((Math.min(bottom,y+region[3]*h+1)-top)/tile);
  return mask[y1*stride+x1]+mask[y0*stride+x0]===mask[y0*stride+x1]+mask[y1*stride+x0];
 };
}

// 元の描画順に従い、手前の1枚で完全に覆われると証明できた部分だけ省く。
export function createActorOcclusion(isOpaque=opaqueReader()){
 return (commands,range,imageFor)=>{
  if(!range)return null;
  const [start,end]=range,covers=[],hidden=new Set();
  let samples=0;
  for(let i=end-1;i>=start;--i){
   const command=commands[i];
   if(command.texture<0||command.count!==4)continue;
   const image=imageFor(command);if(!image)continue;
   const points=Array.from(command.points.slice(0,8),Math.fround),box=bounds(points);
   if(!box.every(Number.isFinite))continue;
   if(covers.some(cover=>{
    if(!inside(box,cover.box))return false;
    const u0=(box[0]-cover.x)/cover.w,u1=(box[2]-cover.x)/cover.w,v0=(box[1]-cover.y)/cover.h,v1=(box[3]-cover.y)/cover.h;
    return isOpaque(cover.image,cover.cut,[Math.min(u0,u1),Math.min(v0,v1),Math.max(u0,u1),Math.max(v0,v1)],()=>samples++<budget);
   })){hidden.add(i);continue;}
   if(command.blend!==0||command.opacity!==1)continue;
   const [x0,y0,x1,y1,x2,y2,x3,y3]=points;
   if(x0===x1&&x2===x3&&y0===y3&&y1===y2&&x0!==x2&&y0!==y2){
    covers.push({box,image,cut:command.cut,x:x0,y:y0,w:x2-x0,h:y2-y0});
    if(covers.length>lookBehind)covers.shift();
   }
  }
  return hidden;
 };
}
