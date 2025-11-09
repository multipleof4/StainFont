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
      // single‑storey g: round bowl + right descender, no stray vertical slice
      const cx=300;
      const rOuter=210;
      const rInner=130;

      // outer bowl
      p.moveTo(cx, -10);
      p.curveTo(cx- rOuter, -10, 90, 90, 90,230);
      p.curveTo(90,370, cx- rOuter+40,470, cx,470);
      p.curveTo( cx+ rOuter-40,470,510,370,510,230);
      p.curveTo(510,90, cx+ rOuter-40,-10, cx,-10);
      p.close();

      // inner counter
      p.moveTo(cx,50);
      p.curveTo(cx+ rInner,50, cx+ rInner,130, cx+ rInner,230);
      p.curveTo(cx+ rInner,330, cx,410, cx,410);
      p.curveTo(cx- rInner,410, cx- rInner,330, cx- rInner,230);
      p.curveTo(cx- rInner,130, cx- rInner,50, cx,50);
      p.close();

      // descender from right bowl edge
      p.moveTo(450,230);
      p.curveTo(450,360,390,430,310,430);
      p.lineTo(310,490);
      p.curveTo(420,490,510,410,510,260);
      p.lineTo(510,-150);
      p.lineTo(450,-150);
      p.lineTo(450,230);
      p.close();

      // small ear on upper-right
      p.moveTo(420,260);
      p.curveTo(455,245,480,215,495,180);
      p.lineTo(455,160);
      p.curveTo(440,190,420,210,395,225);
      p.close();

      return p;
    },
    adv
  );
