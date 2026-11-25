#pragma once
#include <algorithm>

// 009eadc8: 戦闘座標の幅から整数%で下限を求める。
inline int battle_camera_minimum(int width,int viewport=960){
 return (viewport*1000/width+1)*100;
}

// 005c8a6c: スロットの下がり量を境界に加え、投影した整数座標との重なりを戻す。
inline int battle_camera_offset(int rows,int zoom,int slide){
 if(rows!=2)return 0;
 const int projected=int((1.-double(zoom)/10000)*505+485*zoom/10000);
 return -15-std::max(0,projected-449-slide)*10000/zoom;
}

// 005cb0e0: スロット補正をズーム10000で評価してから、城が収まる上限を求める。
inline int battle_camera_limit(int rows,int slide){
 if(rows!=2)return 10000;
 return ((20-505)*10000+0x11da50)/(battle_camera_offset(rows,10000,slide)-505+138);
}
