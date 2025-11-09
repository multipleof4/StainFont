const makeGlyph=(opentype,name,unicode,cmds,adv)=>
  new opentype.Glyph({name,unicode,advanceWidth:adv,path:cmds(new opentype.Path())});

export const glyphD=(opentype,adv)=>
  makeGlyph(
    opentype,
    "D",
    "D".codePointAt(0),
    p=>{
      const x0=120,x1=190,top=700,bot=0;
      const cx=330,ro=260,ri=200;
      p.moveTo(x0,bot);
      p.lineTo(x0,top);
      p.lineTo(cx+ro-40,top);
      p.curveTo(cx+ro,top,cx+ro,top-60,cx+ro,top-150);
      p.lineTo(cx+ro,150);
      p.curveTo(cx+ro,60,cx+ro-40,bot,cx+ro-100,bot);
      p.lineTo(x0,bot);
      p.close();
      p.moveTo(x1,70);
      p.lineTo(x1,630);
      p.lineTo(cx+ri+40,630);
      p.curveTo(cx+ri+90,630,cx+ri+90,580,cx+ri+90,520);
      p.lineTo(cx+ri+90,180);
      p.curveTo(cx+ri+90,120,cx+ri+40,70,cx+ri,70);
      p.lineTo(x1,70);
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
      const cx=310;
      p.moveTo(430,0);
      p.lineTo(370,0);
      p.lineTo(370,80);
      p.curveTo(340,20,300,-10,240,-10);
      p.curveTo(150,-10,90,70,90,200);
      p.curveTo(90,330,150,410,240,410);
      p.curveTo(300,410,340,380,370,330);
      p.lineTo(370,720);
      p.lineTo(430,720);
      p.close();
      p.moveTo(240,50);
      p.curveTo(320,50,370,120,370,200);
      p.curveTo(370,280,320,350,240,350);
      p.curveTo(160,350,120,280,120,200);
      p.curveTo(120,120,160,50,240,50);
      p.close();
      return p;
    },
    adv
  );
