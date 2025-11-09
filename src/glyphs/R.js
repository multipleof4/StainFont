const makeGlyph = (opentype, name, unicode, cmds, adv) =>
  new opentype.Glyph({
    name,
    unicode,
    advanceWidth: adv,
    path: cmds(new opentype.Path())
  });

export const glyphR = (opentype, adv) =>
  makeGlyph(
    opentype,
    "R",
    "R".codePointAt(0),
    (p) => {
      p.moveTo(100, 0);
      p.lineTo(100, 700);
      p.lineTo(340, 700);
      p.curveTo(470, 700, 560, 630, 560, 520);
      p.curveTo(560, 430, 500, 370, 410, 350);
      p.lineTo(560, 0);
      p.lineTo(490, 0);
      p.lineTo(350, 340);
      p.lineTo(160, 340);
      p.lineTo(160, 0);
      p.close();
      p.moveTo(160, 400);
      p.lineTo(340, 400);
      p.curveTo(440, 400, 500, 450, 500, 520);
      p.curveTo(500, 590, 440, 640, 340, 640);
      p.lineTo(160, 640);
      p.close();
      return p;
    },
    adv
  );

export const glyphr = (opentype, adv) =>
  makeGlyph(
    opentype,
    "r",
    "r".codePointAt(0),
    (p) => {
      p.moveTo(100, 0);
      p.lineTo(100, 480);
      p.lineTo(160, 480);
      p.lineTo(160, 420);
      p.curveTo(190, 460, 240, 490, 300, 490);
      p.curveTo(340, 490, 370, 480, 400, 460);
      p.lineTo(380, 400);
      p.curveTo(360, 410, 340, 420, 310, 420);
      p.curveTo(230, 420, 160, 370, 160, 280);
      p.lineTo(160, 0);
      p.close();
      return p;
    },
    adv
  );
