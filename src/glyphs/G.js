export const glyphG=(o,w)=>new o.Glyph({name:"G",unicode:71,advanceWidth:w,path:(p=>{
  p.moveTo(590,550).lineTo(520,510).curveTo(500,570,445,620,350,620).curveTo(195,620,165,465,165,360)
   .curveTo(165,225,220,100,350,100).curveTo(445,100,510,155,520,250).lineTo(520,290).lineTo(330,290)
   .lineTo(330,365).lineTo(600,365).lineTo(600,250).curveTo(595,50,470,-15,350,-15).curveTo(150,-15,65,140,65,360)
   .curveTo(65,570,170,715,350,715).curveTo(485,715,565,645,590,550).close(); return p;
})(new o.Path())});

export const glyphg=(o,w)=>new o.Glyph({name:"g",unicode:103,advanceWidth:w,path:(p=>{
  // Double-story g structure: Ear, Top Bowl, Link, Bottom Loop
  p.moveTo(380,510).lineTo(260,510).curveTo(160,510,70,435,70,340).curveTo(70,270,110,215,190,200)
   .curveTo(130,190,60,145,60,65).curveTo(60,-25,130,-200,225,-200).curveTo(375,-200,435,-85,440,50)
   .lineTo(500,50).lineTo(515,345).curveTo(535,390,540,465,540,485).lineTo(480,485) // Ear
   .curveTo(470,445,455,365,440,330).lineTo(440,340).curveTo(440,430,435,510,380,510).close()
   // Top Hole (Counter-Clockwise relative to shape)
   .moveTo(360,345).curveTo(360,280,310,255,250,255).curveTo(165,255,140,315,140,360)
   .curveTo(140,405,165,450,250,450).curveTo(325,450,360,400,360,345).close()
   // Bottom Hole
   .moveTo(365,60).curveTo(360,-30,320,-145,240,-145).curveTo(160,-145,130,-60,130,35)
   .curveTo(130,110,175,165,270,170).curveTo(335,165,365,110,365,60).close();
  return p;
})(new o.Path())});
