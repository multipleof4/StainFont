const mk=(o,n,u,d,w)=>new o.Glyph({name:n,unicode:u,advanceWidth:w,path:d(new o.Path())});
export const glyphG=(o,w)=>mk(o,"G",71,p=>{
  p.moveTo(540,200);p.lineTo(460,180);p.curveTo(440,80,300,70,300,70);p.curveTo(160,70,160,630,300,630);
  p.curveTo(440,630,460,520,460,520);p.lineTo(540,500);p.curveTo(520,710,300,710,300,710);
  p.curveTo(60,710,60,-10,300,-10);p.curveTo(500,-10,540,150,540,150);p.lineTo(540,300);
  p.lineTo(300,300);p.lineTo(300,220);p.lineTo(460,220);p.lineTo(460,200);p.close();
  return p;
},w);
export const glyphg=(o,w)=>mk(o,"g",103,p=>{
  p.moveTo(440,480);p.lineTo(440,0);p.curveTo(440,-150,300,-150,300,-150);p.curveTo(160,-150,160,0,160,0);
  p.lineTo(240,0);p.curveTo(240,-80,360,-80,360,0);p.lineTo(360,60);p.curveTo(360,60,80,60,80,270);
  p.curveTo(80,480,440,480,440,480);p.lineTo(520,480);p.lineTo(520,0);p.curveTo(520,-200,300,-200,300,-200);
  p.curveTo(80,-200,80,0,80,0);p.lineTo(160,0);p.close();
  p.moveTo(360,140);p.curveTo(360,400,160,400,160,270);p.curveTo(160,140,360,140,360,140);p.close();
  return p;
},w);
