export const glyphQ=(o,w)=>new o.Glyph({name:"Q",unicode:81,advanceWidth:w,path:(p=>{
  // Outer Circle
  p.moveTo(340,-15).curveTo(155,-15,65,160,65,350).curveTo(65,540,155,715,340,715)
   .curveTo(525,715,615,540,615,350).curveTo(615,160,525,-15,340,-15).close()
  // Inner Circle (Hole) - Reversed winding
   .moveTo(340,635).curveTo(460,635,530,500,530,350).curveTo(530,185,460,65,340,65)
   .curveTo(220,65,150,185,150,350).curveTo(150,500,220,635,340,635).close()
  // Tail - Positive winding (same as outer)
   .moveTo(380,180).curveTo(380,180,420,220,445,220).curveTo(480,220,540,100,660,30)
   .lineTo(620,-30).curveTo(500,50,455,120,435,120).curveTo(420,120,370,70,340,40).close();
  return p;
})(new o.Path())});

export const glyphq=(o,w)=>new o.Glyph({name:"q",unicode:113,advanceWidth:w,path:(p=>{
  p.moveTo(460,-200).lineTo(460,500).lineTo(385,500).lineTo(385,430)
   .curveTo(340,495,260,506,215,506).curveTo(95,506,45,380,45,255)
   .curveTo(45,90,120,-15,215,-15).curveTo(300,-15,340,50,385,90).lineTo(385,-200).close()
   .moveTo(250,60).curveTo(180,60,130,110,130,250).curveTo(130,385,180,435,260,435)
   .curveTo(340,435,385,350,385,255).curveTo(385,120,325,60,250,60).close();
  return p;
})(new o.Path())});
