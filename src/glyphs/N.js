const mk=(o,n,u,d,w)=>new o.Glyph({name:n,unicode:u,advanceWidth:w,path:d(new o.Path())});
export const glyphN=(o,w)=>mk(o,"N",78,p=>{
  p.moveTo(80,0);p.lineTo(80,700);p.lineTo(160,700);p.lineTo(440,180);p.lineTo(440,700);
  p.lineTo(520,700);p.lineTo(520,0);p.lineTo(440,0);p.lineTo(160,520);p.lineTo(160,0);p.close();
  return p;
},w);
export const glyphn=(o,w)=>mk(o,"n",110,p=>{
  p.moveTo(80,0);p.lineTo(80,480);p.lineTo(160,480);p.lineTo(160,300);p.curveTo(160,480,440,480,440,300);
  p.lineTo(440,0);p.lineTo(360,0);p.lineTo(360,300);p.curveTo(360,400,240,400,240,300);
  p.lineTo(240,0);p.close();
  return p;
},w);
