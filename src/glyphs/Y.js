export const glyphY=(o,w)=>new o.Glyph({name:"Y",unicode:89,advanceWidth:w,path:(p=>{
  p.moveTo(20,700).lineTo(115,700).lineTo(280,350).lineTo(450,700).lineTo(545,700).lineTo(325,255).lineTo(325,0).lineTo(245,0).lineTo(245,255).close(); return p;
})(new o.Path())});

export const glypthy=(o,w)=>new o.Glyph({name:"y",unicode:121,advanceWidth:w,path:(p=>{
  // Left Leg (Top->Bot) merging into tail logic
  p.moveTo(15,500).lineTo(95,500).lineTo(230,180) // Crotch inner
   .lineTo(385,500).lineTo(465,500) // Right top
   // Right Stroke / Tail Outer
   .lineTo(270,0).lineTo(190,-200) // Descender
   .curveTo(140,-270,50,-240,20,-160) // Tail Hook
   .lineTo(70,-120).curveTo(90,-160,130,-175,160,-150) // Tail Inner
   .lineTo(200,-50) // Trace up tail inner
   .lineTo(205,-50) // Align with Left Outer
   .lineTo(210,0)   // Intersection
   .lineTo(15,500).close();
  return p;
})(new o.Path())});

