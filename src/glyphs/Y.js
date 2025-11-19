export const glyphY=(o,w)=>new o.Glyph({name:"Y",unicode:89,advanceWidth:w,path:(p=>{
  p.moveTo(20,700).lineTo(115,700).lineTo(280,350).lineTo(450,700).lineTo(545,700).lineTo(325,255).lineTo(325,0).lineTo(245,0).lineTo(245,255).close(); return p;
})(new o.Path())});

export const glypthy=(o,w)=>new o.Glyph({name:"y",unicode:121,advanceWidth:w,path:(p=>{
  // Symmetric v shape top + consistent descender
  p.moveTo(15,500).lineTo(95,500).lineTo(210,230).lineTo(325,500).lineTo(405,500).lineTo(250,140) // Top V
   .lineTo(250,-60) // Straight down stem
   .curveTo(250,-150,215,-200,135,-200).curveTo(95,-200,60,-180,35,-160) // Curve tail
   .lineTo(60,-90).curveTo(80,-110,100,-120,135,-120).curveTo(170,-120,170,-90,170,-60)
   .lineTo(170,140).lineTo(15,500).close(); 
  return p;
})(new o.Path())});

