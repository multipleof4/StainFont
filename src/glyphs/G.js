const makeGlyph=(opentype,name,unicode,cmds,adv)=>
  new opentype.Glyph({
    name,
    unicode,
    advanceWidth:adv,
    path:cmds(new opentype.Path())
  });

export const glyphG=(opentype,adv)=>
  makeGlyph(
    opentype,
    "G",
    "G".codePointAt(0),
    p=>{
      p.moveTo(350,-10);
      p.curveTo(190,-10,80,100,80,280);
      p.lineTo(80,420);
      p.curveTo(80,600,190,710,350,710);
      p.curveTo(460,710,540,660,580,570);
      p.lineTo(520,540);
      p.curveTo(490,610,430,650,350,650);
      p.curveTo(220,650,140,570,140,420);
      p.lineTo(140,280);
      p.curveTo(140,130,220,50,350,50);
      p.curveTo(450,50,520,100,540,190);
      p.lineTo(340,190);
      p.lineTo(340,250);
      p.lineTo(600,250);
      p.lineTo(600,220);
      p.curveTo(600,70,500,-10,350,-10);
      p.close();
      return p;
    },
    adv
  );

export const glyphg=(opentype,adv)=>
  makeGlyph(
    opentype,
    "g",
    "g".codePointAt(0),
    p=>{
      p.moveTo(290,-10);
      p.curveTo(240,-10,200,10,170,40);
      p.lineTo(170,0);
      p.lineTo(110,0);
      p.lineTo(110,480);
      p.lineTo(170,480);
      p.lineTo(170,360);
      p.curveTo(200,390,240,410,290,410);
      p.curveTo(410,410,490,330,490,200);
      p.lineTo(490,120);
      p.curveTo(490,-30,410,-110,280,-110);
      p.curveTo(180,-110,110,-60,80,20);
      p.lineTo(140,50);
      p.curveTo(160,-10,210,-50,280,-50);
      p.curveTo(370,-50,430,-5,430,120);
      p.lineTo(430,200);
      p.curveTo(430,290,370,350,290,350);
      p.curveTo(210,350,170,290,170,200);
      p.curveTo(170,110,210,50,290,50);
      p.close();
      return p;
    },
    adv
  );
