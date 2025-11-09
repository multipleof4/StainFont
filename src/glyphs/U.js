const makeGlyph = (opentype, name, unicode, cmds, adv) =>
  new opentype.Glyph({
    name,
    unicode,
    advanceWidth: adv,
    path: cmds(new opentype.Path())
  });

export const glyphU = (opentype, adv) =>
  makeGlyph(
    opentype,
    "U",
    "U".codePointAt(0),
    (p) => {
      p.moveTo(300, -10);
      p.curveTo(170, -10, 80, 70, 80, 200);
      p.lineTo(80, 700);
      p.lineTo(140, 700);
      p.lineTo(140, 200);
      p.curveTo(140, 100, 210, 50, 300, 50);
      p.curveTo(390, 50, 460, 100, 460, 200);
      p.lineTo(460, 700);
      p.lineTo(520, 700);
      p.lineTo(520, 200);
      p.curveTo(520, 70, 430, -10, 300, -10);
      p.close();
      return p;
    },
    adv
  );

export const glyphu = (opentype, adv) =>
  makeGlyph(
    opentype,
    "u",
    "u".codePointAt(0),
    (p) => {
      p.moveTo(100, 160);
      p.lineTo(100, 480);
      p.lineTo(160, 480);
      p.lineTo(160, 160);
      p.curveTo(160, 80, 200, 50, 270, 50);
      p.curveTo(350, 50, 420, 90, 420, 180);
      p.lineTo(420, 480);
      p.lineTo(480, 480);
      p.lineTo(480, 40);
      p.lineTo(420, 40);
      p.lineTo(420, 100);
      p.curveTo(380, 50, 330, 20, 270, 20);
      p.curveTo(160, 20, 100, 80, 100, 160);
      p.close();
      return p;
    },
    adv
  );
