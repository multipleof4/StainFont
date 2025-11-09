const makeGlyph = (opentype, name, unicode, cmds, adv) =>
  new opentype.Glyph({
    name,
    unicode,
    advanceWidth: adv,
    path: cmds(new opentype.Path())
  });

export const glyphF = (opentype, adv) =>
  makeGlyph(
    opentype,
    "F",
    "F".codePointAt(0),
    (p) => {
      p.moveTo(100, 0);
      p.lineTo(100, 700);
      p.lineTo(520, 700);
      p.lineTo(520, 640);
      p.lineTo(160, 640);
      p.lineTo(160, 380);
      p.lineTo(480, 380);
      p.lineTo(480, 320);
      p.lineTo(160, 320);
      p.lineTo(160, 0);
      p.close();
      return p;
    },
    adv
  );

export const glyphf = (opentype, adv) =>
  makeGlyph(
    opentype,
    "f",
    "f".codePointAt(0),
    (p) => {
      p.moveTo(180, 0);
      p.lineTo(180, 420);
      p.lineTo(80, 420);
      p.lineTo(80, 480);
      p.lineTo(180, 480);
      p.lineTo(180, 580);
      p.curveTo(180, 670, 230, 720, 320, 720);
      p.curveTo(360, 720, 390, 710, 420, 690);
      p.lineTo(390, 640);
      p.curveTo(370, 650, 350, 660, 320, 660);
      p.curveTo(270, 660, 240, 630, 240, 580);
      p.lineTo(240, 480);
      p.lineTo(380, 480);
      p.lineTo(380, 420);
      p.lineTo(240, 420);
      p.lineTo(240, 0);
      p.close();
      return p;
    },
    adv
  );
