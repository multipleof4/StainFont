const mk=(o,n,u,d,w)=>new o.Glyph({name:n,unicode:u,advanceWidth:w,path:d(new o.Path())});
export const glyphP=(o,w)=>mk(o,"P",80,p=>{
  p.moveTo(80,0);p.lineTo(80,700);p.lineTo(340,700);p.curveTo(540,700,540,380,340,380);
  p.lineTo(160,380);p.lineTo(160,0);p.close();
  p.moveTo(160,620);p.lineTo(340,620);p.curveTo(460,620,460,460,340,460);p.lineTo(160,460);p.close();
  return p;
},w);
export const glyphp=(o,w)=>mk(o,"p",112,p=>{
  p.moveTo(80,-200);p.lineTo(80,480);p.lineTo(320,480);p.curveTo(540,480,540,0,320,0);
  p.lineTo(160,0);p.lineTo(160,-200);p.close();
  p.moveTo(160,400);p.lineTo(320,400);p.curveTo(460,400,460,80,320,80);p.lineTo(160,80);p.close();
  return p;
},w);
