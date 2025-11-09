const makeGlyph=(opentype,name,unicode,cmds,adv)=>
  new opentype.Glyph({name,unicode,advanceWidth:adv,path:cmds(new opentype.Path())});

export const glyphB=(opentype,adv)=>
  makeGlyph(
    opentype,
    "B",
    "B".codePointAt(0),
    p=>{
      const x0=120,stem=60,top=700,midY=360;
      p.moveTo(x0,0);
      p.lineTo(x0,top);
      p.lineTo(340,top);
      p.curveTo(470,top,560,640,560,540);
      p.curveTo(560,450,500,400,420,390);
      p.curveTo(510,370,580,310,580,220);
      p.curveTo(580,100,490,0,350,0);
      p.close();
      p.moveTo(180,60);
      p.lineTo(340,60);
      p.curveTo(450,60,520,120,520,210);
      p.curveTo(520,300,450,340,350,340);
      p.lineTo(180,340);
      p.close();
      p.moveTo(180,400);
      p.lineTo(340,400);
      p.curveTo(440,400,500,440,500,520);
      p.curveTo(500,600,440,640,340,640);
      p.lineTo(180,640);
      p.close();
      return p;
    },
    adv
  );

export const glyphb=(opentype,adv)=>
  makeGlyph(
    opentype,
    "b",
    "b".codePointAt(0),
    p=>{
      const cx=310;
      p.moveTo(140,0);
      p.lineTo(80,0);
      p.lineTo(80,720);
      p.lineTo(140,720);
      p.lineTo(140,340);
      p.curveTo(180,390,230,420,300,420);
      p.curveTo(410,420,500,330,500,210);
      p.curveTo(500,90,410,0,300,0);
      p.curveTo(230,0,180,30,140,80);
      p.close();
      p.moveTo(300,60);
      p.curveTo(380,60,440,120,440,210);
      p.curveTo(440,300,380,360,300,360);
      p.curveTo(220,360,140,300,140,210);
      p.curveTo(140,120,220,60,300,60);
      p.close();
      return p;
    },
    adv
  );
