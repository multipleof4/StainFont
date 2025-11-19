const mk=(o,n,u,d,w)=>new o.Glyph({name:n,unicode:u,advanceWidth:w,path:d(new o.Path())});
export const glyphH=(o,w)=>mk(o,"H",72,p=>{
  p.moveTo(80,0);p.lineTo(80,700);p.lineTo(160,700);p.lineTo(160,390);p.lineTo(440,390);
  p.lineTo(440,700);p.lineTo(520,700);p.lineTo(520,0);p.lineTo(440,0);p.lineTo(440,310);
  p.lineTo(160,310);p.lineTo(160,0);p.close();
  return p;
},w);
export const glyphh=(o,w)=>mk(o,"h",104,p=>{
  p.moveTo(80,0);p.lineTo(80,710);p.lineTo(160,710);p.lineTo(160,300);p.curveTo(160,480,440,480,440,300);
  p.lineTo(440,0);p.lineTo(360,0);p.lineTo(360,300);p.curveTo(360,400,240,400,240,300);
  p.lineTo(240,0);p.close();
  return p;
},w);
