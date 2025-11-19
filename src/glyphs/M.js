const mk=(o,n,u,d,w)=>new o.Glyph({name:n,unicode:u,advanceWidth:w,path:d(new o.Path())});
export const glyphM=(o,w)=>mk(o,"M",77,p=>{
  p.moveTo(80,0);p.lineTo(80,700);p.lineTo(160,700);p.lineTo(400,150);p.lineTo(640,700);
  p.lineTo(720,700);p.lineTo(720,0);p.lineTo(640,0);p.lineTo(640,550);p.lineTo(440,80);
  p.lineTo(360,80);p.lineTo(160,550);p.lineTo(160,0);p.close();
  return p;
},800);
export const glyphm=(o,w)=>mk(o,"m",109,p=>{
  p.moveTo(80,0);p.lineTo(80,480);p.lineTo(160,480);p.lineTo(160,300);p.curveTo(160,480,380,480,380,300);
  p.lineTo(380,0);p.lineTo(300,0);p.lineTo(300,300);p.curveTo(300,400,220,400,220,300);
  p.lineTo(220,0);p.close();
  p.moveTo(380,300);p.curveTo(380,480,600,480,600,300);p.lineTo(600,0);p.lineTo(520,0);
  p.lineTo(520,300);p.curveTo(520,400,440,400,440,300);p.lineTo(440,0);p.lineTo(380,0);p.close();
  return p;
},740);
