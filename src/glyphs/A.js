const makeGlyph=(opentype,name,unicode,cmds,adv)=>
  new opentype.Glyph({name,unicode,advanceWidth:adv,path:cmds(new opentype.Path())});

export const glyphA=(opentype,adv)=>
  makeGlyph(
    opentype,
    "A",
    "A".codePointAt(0),
    p=>{
      const l=90,r=510,ap=700,barY=280,stem=70,innerTop=630;
      p.moveTo(l,0);
      p.lineTo(l+stem,0);
      p.lineTo(300,innerTop);
      p.lineTo(r-stem,0);
      p.lineTo(r,0);
      p.lineTo(320,ap);
      p.lineTo(280,ap);
      p.close();
      p.moveTo(190,barY);
      p.lineTo(410,barY);
      p.lineTo(390,340);
      p.lineTo(210,340);
      p.close();
      return p;
    },
    adv
  );

export const glypha=(opentype,adv)=>
  makeGlyph(
    opentype,
    "a",
    "a".codePointAt(0),
    p=>{
      p.moveTo(290,-10);
      p.curveTo(170,-10,90,70,90,200);
      p.curveTo(90,330,170,410,290,410);
      p.curveTo(340,410,380,390,410,360);
      p.lineTo(410,480);
      p.lineTo(470,480);
      p.lineTo(470,0);
      p.lineTo(410,0);
      p.lineTo(410,40);
      p.curveTo(380,10,340,-10,290,-10);
      p.close();
      p.moveTo(290,50);
      p.curveTo(370,50,410,110,410,200);
      p.curveTo(410,290,370,350,290,350);
      p.curveTo(210,350,150,290,150,200);
      p.curveTo(150,110,210,50,290,50);
      p.close();
      return p;
    },
    adv
  );
