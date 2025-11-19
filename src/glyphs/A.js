const mk=(o,n,u,d,w)=>new o.Glyph({name:n,unicode:u,advanceWidth:w,path:d(new o.Path())});
export const glyphA=(o,w)=>mk(o,"A",65,p=>{
  p.moveTo(260,700);p.lineTo(340,700);p.lineTo(600,0);p.lineTo(510,0);p.lineTo(430,220);
  p.lineTo(170,220);p.lineTo(90,0);p.lineTo(0,0);p.close();
  p.moveTo(200,300);p.lineTo(400,300);p.lineTo(300,580);p.close();
  return p;
},w);
export const glypha=(o,w)=>mk(o,"a",97,p=>{
  p.moveTo(420,480);p.lineTo(420,0);p.lineTo(500,0);p.lineTo(500,480);p.close();
  p.moveTo(420,260);p.curveTo(420,420,80,420,80,240);p.curveTo(80,60,420,60,420,220);
  p.close();
  p.moveTo(420,140);p.curveTo(380,120,160,120,160,240);p.curveTo(160,360,420,360,420,340);
  p.close();
  return p;
},w);
