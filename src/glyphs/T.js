const makeGlyph = (opentype, name, unicode, cmds, adv) =>
  new opentype.Glyph({
    name,
    unicode,
    advanceWidth: adv,
    path: cmds(new opentype.Path())
  });

export const glyphT = (opentype, adv) =>
  makeGlyph(
    opentype,
    "T",
    "T".codePointAt(0),
    (p) => {
      p.moveTo(40, 640);
      p.lineTo(40, 700);
      p.lineTo(560, 700);
      p.lineTo(560, 640);
      p.lineTo(330, 640);
      p.lineTo(330, 0);
      p.lineTo(270, 0);
      p.lineTo(270, 640);
      p.close();
      return p;
    },
    adv
  );

export const glypht = (opentype, adv) =>
  makeGlyph(
    opentype,
    "t",
    "t".codePointAt(0),
    (p) => {
      p.moveTo(180, 0);
      p.lineTo(180, 420);
      p.lineTo(80, 420);
      p.lineTo(80, 480);
      p.lineTo(180, 480);
      p.lineTo(180, 620);
      p.lineTo(240, 620);
      p.lineTo(240, 480);
      p.lineTo(380, 480);
      p.lineTo(380, 420);
      p.lineTo(240, 420);
      p.lineTo(240, 80);
      p.curveTo(240, 30, 270, 0, 320, 0);
      p.curveTo(350, 0, 370, 10, 390, 20);
      p.lineTo(410, -30);
      p.curveTo(380, -50, 350, -60, 310, -60);
      p.curveTo(230, -60, 180, -10, 180, 80);
      p.close();
      return p;
    },
    adv
  );
