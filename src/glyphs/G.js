const makeGlyph=(opentype,name,unicode,cmds,adv)=>
  new opentype.Glyph({name,unicode,advanceWidth:adv,path:cmds(new opentype.Path())});

export const glyphG=(opentype,adv)=>
  makeGlyph(
    opentype,
    "G",
    "G".codePointAt(0),
    p=>{
      const cx=320,ro=270,ri=200,midY=320;
      p.moveTo(cx,50);
      p.curveTo(cx-160,50,120,150,120,280);
      p.lineTo(120,420);
      p.curveTo(120,580,220,680,340,680);
      p.curveTo(440,680,510,640,550,560);
      p.lineTo(500,530);
      p.curveTo(470,590,420,620,340,620);
      p.curveTo(240,620,180,550,180,420);
      p.lineTo(180,280);
      p.curveTo(180,160,250,90,340,90);
      p.curveTo(430,90,500,140,500,240);
      p.lineTo(380,240);
      p.lineTo(380,300);
      p.lineTo(560,300);
      p.lineTo(560,220);
      p.curveTo(560,100,460,50,340,50);
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
      const cx=300;
      p.moveTo(cx,-160);
      p.curveTo(180,-160,110,-110,100,-40);
      p.lineTo(160,-20);
      p.curveTo(170,-70,210,-100,280,-100);
      p.curveTo(380,-100,430,-50,430,40);
      p.lineTo(430,70);
      p.curveTo(400,20,350,-10,280,-10);
      p.curveTo(180,-10,100,70,100,210);
      p.curveTo(100,350,180,430,280,430);
      p.curveTo(350,430,400,400,430,350);
      p.lineTo(430,480);
      p.lineTo(490,480);
      p.lineTo(490,40);
      p.curveTo(490,-90,410,-160,300,-160);
      p.close();
      p.moveTo(280,50);
      p.curveTo(360,50,430,120,430,210);
      p.curveTo(430,300,360,370,280,370);
      p.curveTo(200,370,160,300,160,210);
      p.curveTo(160,120,200,50,280,50);
      p.close();
      return p;
    },
    adv
  );
