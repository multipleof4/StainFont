const mk=(o,n,u,d,w)=>new o.Glyph({name:n,unicode:u,advanceWidth:w,path:d(new o.Path())});
export const glyphC=(o,w)=>mk(o,"C",67,p=>{
  p.moveTo(540,200);p.lineTo(460,180);p.curveTo(440,80,300,70,300,70);p.curveTo(160,70,160,630,300,630);
  p.curveTo(440,630,460,520,460,520);p.lineTo(540,500);p.curveTo(520,710,300,710,300,710);
  p.curveTo(60,710,60,-10,300,-10);p.curveTo(520,-10,540,200,540,200);p.close();
  return p;
},w);
export const glyphc=(o,w)=>mk(o,"c",99,p=>{
  p.moveTo(480,140);p.lineTo(400,120);p.curveTo(380,60,300,60,300,60);p.curveTo(160,60,160,420,300,420);
  p.curveTo(380,420,400,360,400,360);p.lineTo(480,340);p.curveTo(460,490,300,490,300,490);
  p.curveTo(80,490,80,-10,300,-10);p.curveTo(460,-10,480,140,480,140);p.close();
  return p;
},w);
