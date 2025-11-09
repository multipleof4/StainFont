const makeGlyph=(opentype,name,unicode,cmds,adv)=>
  new opentype.Glyph({
    name,
    unicode,
    advanceWidth:adv,
    path:cmds(new opentype.Path())
  });

export const glyphB=(opentype,adv)=>
  makeGlyph(
    opentype,
    "B",
    "B".codePointAt(0),
    p=>{
      const s=90;
      const x0=110,x1=x0+s;
      const top=700,mid=360,bot=0;
      const ix=320;
      const oTop=560,oMid=520,oBot=bot;
      p.moveTo(x0,bot);
      p.lineTo(x0,top);
      p.lineTo(x1,top);
      p.lineTo(x1,bot);
      p.close();
      p.moveTo(ix,top);
      p.curveTo(oTop,top,oTop-10,top-70,oTop-40,top-120);
      p.curveTo(oTop-70,top-180,ix+40,mid+80,ix,mid+80);
      p.lineTo(x1,mid+80);
      p.lineTo(x1,top- s/2);
      p.close();
      p.moveTo(ix,mid);
      p.curveTo(oMid,mid,oMid+40,mid-80,oMid+40,mid-150);
      p.curveTo(oMid+40,200,oMid-40,120,ix,120);
      p.lineTo(x1,120);
      p.lineTo(x1,mid);
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
      p.moveTo(100,0);
      p.lineTo(100,720);
      p.lineTo(160,720);
      p.lineTo(160,440);
      p.curveTo(200,470,250,490,310,490);
      p.curveTo(430,490,520,400,520,280);
      p.curveTo(520,160,430,70,310,70);
      p.curveTo(250,70,200,90,160,120);
      p.lineTo(160,0);
      p.close();
      p.moveTo(310,130);
      p.curveTo(400,130,460,190,460,280);
      p.curveTo(460,370,400,430,310,430);
      p.curveTo(220,430,160,370,160,280);
      p.curveTo(160,190,220,130,310,130);
      p.close();
      return p;
    },
    adv
  );
