const makeGlyph=(opentype,name,unicode,cmds,adv)=>
  new opentype.Glyph({
    name,
    unicode,
    advanceWidth:adv,
    path:cmds(new opentype.Path())
  });

export const glyphD=(opentype,adv)=>
  makeGlyph(
    opentype,
    "D",
    "D".codePointAt(0),
    p=>{
      p.moveTo(100,0);
      p.lineTo(100,700);
      p.lineTo(320,700);
      p.curveTo(480,700,580,590,580,420);
      p.lineTo(580,280);
      p.curveTo(580,110,480,0,320,0);
      p.close();
      p.moveTo(160,60);
      p.lineTo(320,60);
      p.curveTo(450,60,520,140,520,280);
      p.lineTo(520,420);
      p.curveTo(520,560,450,640,320,640);
      p.lineTo(160,640);
      p.close();
      return p;
    },
    adv
  );

export const glyphd=(opentype,adv)=>
  makeGlyph(
    opentype,
    "d",
    "d".codePointAt(0),
    p=>{
      p.moveTo(290,-10);
      p.curveTo(240,-10,200,10,170,40);
      p.lineTo(170,0);
      p.lineTo(110,0);
      p.lineTo(110,720);
      p.lineTo(170,720);
      p.lineTo(170,360);
      p.curveTo(200,390,240,410,290,410);
      p.curveTo(410,410,490,330,490,200);
      p.curveTo(490,70,410,-10,290,-10);
      p.close();
      p.moveTo(290,50);
      p.curveTo(370,50,430,110,430,200);
      p.curveTo(430,290,370,350,290,350);
      p.curveTo(210,350,170,290,170,200);
      p.curveTo(170,110,210,50,290,50);
      p.close();
      return p;
    },
    adv
  );
