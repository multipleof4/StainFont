const mk=(o,n,u,d,w)=>new o.Glyph({name:n,unicode:u,advanceWidth:w,path:d(new o.Path())});
export const glyphT=(o,w)=>mk(o,"T",84,p=>{
  p.moveTo(40,620);p.lineTo(40,700);p.lineTo(560,700);p.lineTo(560,620);p.lineTo(340,620);
  p.lineTo(340,0);p.lineTo(260,0);p.lineTo(260,620);p.close();
  return p;
},w);
export const glypht=(o,w)=>mk(o,"t",116,p=>{
  p.moveTo(240,0);p.lineTo(240,420);p.lineTo(160,420);p.lineTo(160,480);p.lineTo(240,480);
  p.lineTo(240,640);p.lineTo(320,640);p.lineTo(320,480);p.lineTo(420,480);p.lineTo(420,420);
  p.lineTo(320,420);p.lineTo(320,80);p.curveTo(320,20,420,20,420,20);p.lineTo(420,-60);
  p.curveTo(240,-60,240,80,240,80);p.close();
  return p;
},w);
