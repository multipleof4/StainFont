const makeGlyph=(opentype,name,unicode,cmds,adv)=>
  new opentype.Glyph({
    name,
    unicode,
    advanceWidth:adv,
    path:cmds(new opentype.Path())
  });

export const glyphQ=(opentype,adv)=>
  makeGlyph(
    opentype,
    "Q",
    "Q".codePointAt(0),
    p=>{
      p.moveTo(300,-10);
      p.curveTo(160,-10,60,100,60,280);
      p.lineTo(60,420);
      p.curveTo(60,600,160,710,300,710);
      p.curveTo(440,710,540,600,540,420);
      p.lineTo(540,280);
      p.curveTo(540,140,470,40,360,10);
      p.lineTo(480,-80);
      p.lineTo(440,-120);
      p.lineTo(300,0);
      p.curveTo(290,0,280,0,270,0);
      p.lineTo(270,60);
      p.curveTo(280,60,290,60,300,60);
      p.lineTo(340,60);
      p.lineTo(380,20);
      p.curveTo(450,50,480,140,480,280);
      p.lineTo(480,420);
      p.curveTo(480,570,410,650,300,650);
      p.curveTo(190,650,120,570,120,420);
      p.lineTo(120,280);
      p.curveTo(120,130,190,50,300,50);
      p.close();
      return p;
    },
    adv
  );

export const glyphq=(opentype,adv)=>
  makeGlyph(
    opentype,
    "q",
    "q".codePointAt(0),
    p=>{
      const cx=290,cy=245;
      const rO=175,rI=115;
      p.moveTo(cx+rO,cy);
      p.curveTo(cx+rO,cy+96,cx+96,cy+rO,cx,cy+rO);
      p.curveTo(cx-96,cy+rO,cx-rO,cy+96,cx-rO,cy);
      p.curveTo(cx-rO,cy-96,cx-96,cy-rO,cx,cy-rO);
      p.curveTo(cx+96,cy-rO,cx+rO,cy-96,cx+rO,cy);
      p.close();
      p.moveTo(cx+rI,cy);
      p.curveTo(cx+rI,cy+64,cx+64,cy+rI,cx,cy+rI);
      p.curveTo(cx-64,cy+rI,cx-rI,cy+64,cx-rI,cy);
      p.curveTo(cx-rI,cy-64,cx-64,cy-rI,cx,cy-rI);
      p.curveTo(cx+64,cy-rI,cx+rI,cy-64,cx+rI,cy);
      p.close();
      p.moveTo(450,-150);
      p.lineTo(510,-150);
      p.lineTo(510,280);
      p.curveTo(510,400,430,490,310,490);
      p.curveTo(250,490,200,470,160,440);
      p.lineTo(160,380);
      p.curveTo(200,410,250,430,310,430);
      p.curveTo(400,430,450,370,450,280);
      p.close();
      return p;
    },
    adv
  );
