const mk=(o,n,u,d,w)=>new o.Glyph({name:n,unicode:u,advanceWidth:w,path:d(new o.Path())});
export const glyphS=(o,w)=>mk(o,"S",83,p=>{
  p.moveTo(500,580);p.lineTo(420,540);p.curveTo(400,620,300,620,300,620);p.curveTo(180,620,180,520,300,500);
  p.lineTo(360,490);p.curveTo(520,460,520,240,300,240);p.curveTo(140,240,100,340,100,340);
  p.lineTo(180,380);p.curveTo(200,320,300,320,300,320);p.curveTo(420,320,420,400,300,420);
  p.lineTo(240,430);p.curveTo(80,460,80,700,300,700);p.curveTo(460,700,500,580,500,580);p.close();
  return p;
},w);
export const glyphs=(o,w)=>mk(o,"s",115,p=>{
  p.moveTo(460,380);p.lineTo(380,360);p.curveTo(360,420,300,420,300,420);p.curveTo(200,420,200,340,300,320);
  p.lineTo(340,310);p.curveTo(460,280,460,100,300,100);p.curveTo(140,100,120,200,120,200);
  p.lineTo(200,220);p.curveTo(220,180,300,180,300,180);p.curveTo(380,180,380,240,300,260);
  p.lineTo(260,270);p.curveTo(120,300,120,490,300,490);p.curveTo(440,490,460,380,460,380);p.close();
  return p;
},w);
