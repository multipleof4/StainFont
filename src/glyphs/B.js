export const glyphB=(o,w)=>new o.Glyph({name:"B",unicode:66,advanceWidth:w,path:(p=>{
  p.moveTo(90,0).lineTo(90,700).lineTo(330,700).curveTo(540,700,580,560,580,500).curveTo(580,410,520,375,440,370)
  .curveTo(540,355,600,290,600,190).curveTo(600,60,480,0,310,0).close()
  .moveTo(180,395).lineTo(310,395).curveTo(410,395,490,425,490,515).curveTo(490,615,400,625,310,625).lineTo(180,625).close()
  .moveTo(180,75).lineTo(320,75).curveTo(440,75,510,90,510,215).curveTo(510,305,420,320,320,320).lineTo(180,320).close(); return p;
})(new o.Path())});

export const glyphb=(o,w)=>new o.Glyph({name:"b",unicode:98,advanceWidth:w,path:(p=>{
  // Unified Outer Path (CCW-ish) to match 'd' reflection logic
  // Stem: Left ~90-160. Bowl flows from 160.
  p.moveTo(90,720).lineTo(160,720).lineTo(160,360)
   .curveTo(160,460,205,525,330,525).curveTo(465,525,530,410,530,260) // Right heavy bowl
   .curveTo(530,100,455,-15,325,-15).curveTo(245,-15,190,20,160,70)
   .lineTo(160,0).lineTo(90,0).close()
  // Inner Hole (Opposite Winding)
   .moveTo(160,260).curveTo(160,155,210,60,300,60)
   .curveTo(380,60,445,140,445,260).curveTo(445,370,400,450,310,450)
   .curveTo(225,450,160,380,160,260).close();
  return p;
})(new o.Path())});

