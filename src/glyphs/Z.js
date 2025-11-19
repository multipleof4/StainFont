const mk=(o,n,u,d,w)=>new o.Glyph({name:n,unicode:u,advanceWidth:w,path:d(new o.Path())});
export const glyphZ=(o,w)=>mk(o,"Z",90,p=>{
  p.moveTo(80,700);p.lineTo(520,700);p.lineTo(520,620);p.lineTo(180,620);p.lineTo(520,80);
  p.lineTo(520,0);p.lineTo(80,0);p.lineTo(80,80);p.lineTo(420,80);p.lineTo(80,620);p.close();
  return p;
},w);
export const glyphz=(o,w)=>mk(o,"z",122,p=>{
  p.moveTo(80,480);p.lineTo(520,480);p.lineTo(520,400);p.lineTo(180,400);p.lineTo(520,80);
  p.lineTo(520,0);p.lineTo(80,0);p.lineTo(80,80);p.lineTo(420,80);p.lineTo(80,400);p.close();
  return p;
},w);
