const makeGlyph = (opentype, name, unicode, cmds, adv) =>
  new opentype.Glyph({
    name,
    unicode,
    advanceWidth: adv,
    path: cmds(new opentype.Path())
  });

export const glyphD = (opentype, adv) =>
  makeGlyph(
    opentype,
    "D",
    "D".codePointAt(0),
    (p) => {
      p.moveTo(100, 0);
      p.lineTo(100, 700);
      p.lineTo(320, 700);
      p.curveTo(480, 700, 580, 590, 580, 420);
      p.lineTo(580, 280);
      p.curveTo(580, 110, 480, 0, 320, 0);
      p.close();
      p.moveTo(160, 60);
      p.lineTo(320, 60);
      p.curveTo(450, 60, 520, 140, 520, 280);
      p.lineTo(520, 420);
      p.curveTo(520, 560, 450, 640, 320, 640);
      p.lineTo(160, 640);
      p.close();
      return p;
    },
    adv
  );

export const glyphd = (opentype, adv) =>
  makeGlyph(
    opentype,
    "d",
    "d".codePointAt(0),
    (p) => {
      p.moveTo(500, 0);
      p.lineTo(500, 720);
      p.lineTo(440, 720);
      p.lineTo(440, 480);
      p.lineTo(290, 480);
      p.curveTo(150, 480, 80, 380, 80, 240);
      p.curveTo(80, 100, 150, 0, 290, 0);
      p.close();
      p.moveTo(290, 60);
      p.curveTo(180, 60, 140, 130, 140, 240);
      p.curveTo(140, 350, 180, 420, 290, 420);
      p.lineTo(440, 420);
      p.lineTo(440, 60);
      p.close();
      return p;
    },
    adv
  );
