const mk=(o,n,u,d,w)=>new o.Glyph({name:n,unicode:u,advanceWidth:w,path:d(new o.Path())});
export const glyphF=(o,w)=>mk(o,"F",70,p=>{
  p.moveTo(80,0);p.lineTo(80,700);p.lineTo(520,700);p.lineTo(520,620);p.lineTo(160,620);
  p.lineTo(160,390);p.lineTo(480,390);p.lineTo(480,310);p.lineTo(160,310);p.lineTo(160,0);p.close();
  return p;
},w);
export const glyphf=(o,w)=>mk(o,"f",102,p=>{
  p.moveTo(240,0);p.lineTo(240,420);p.lineTo(140,420);p.lineTo(140,490);p.lineTo(240,490);
  p.lineTo(240,600);p.curveTo(240,710,380,710,380,710);p.lineTo(380,630);p.curveTo(320,630,320,600,320,600);
  p.lineTo(320,490);p.lineTo(440,490);p.lineTo(440,420);p.lineTo(320,420);p.lineTo(320,0);p.close();
  return p;
},w);
