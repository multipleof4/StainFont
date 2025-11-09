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
      const cx=310,cy=245;
      const rO=175,rI=115;
      const stemX=cx+150;
      const asc=480;
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
      p.moveTo(stemX-40,-10);
      p.lineTo(stemX+40,-10);
      p.lineTo(stemX+40,asc);
      p.lineTo(stemX-40,asc);
      p.close();
      return p;
    },
    adv
  );
