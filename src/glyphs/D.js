const mk=(o,n,u,d,w)=>new o.Glyph({name:n,unicode:u,advanceWidth:w,path:d(new o.Path())});
export const glyphD=(o,w)=>mk(o,"D",68,p=>{
  p.moveTo(80,0);p.lineTo(80,700);p.lineTo(300,700);p.curveTo(560,700,560,0,300,0);p.close();
  p.moveTo(160,60);p.lineTo(300,60);p.curveTo(480,60,480,640,300,640);p.lineTo(160,640);p.close();
  return p;
},w);
export const glyphd=(o,w)=>mk(o,"d",100,p=>{
  p.moveTo(440,0);p.lineTo(440,710);p.lineTo(520,710);p.lineTo(520,0);p.close();
  p.moveTo(440,240);p.curveTo(440,480,80,480,80,240);p.curveTo(80,0,440,0,440,240);p.close();
  p.moveTo(440,360);p.curveTo(440,420,160,420,160,240);p.curveTo(160,60,440,60,440,120);p.close();
  return p;
},w);
