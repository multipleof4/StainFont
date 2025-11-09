const makeGlyph = (opentype, name, unicode, cmds, adv) =>
  new opentype.Glyph({
    name,
    unicode,
    advanceWidth: adv,
    path: cmds(new opentype.Path())
  });

export const glyphX = (opentype, adv) =>
  makeGlyph(
    opentype,
    "X",
    "X".codePointAt(0),
    (p) => {
      p.moveTo(60, 0);
      p.lineTo(240, 350);
      p.lineTo(60, 700);
      p.lineTo(140, 700);
      p.lineTo(280, 410);
      p.lineTo(420, 700);
      p.lineTo(500, 700);
      p.lineTo(320, 350);
      p.lineTo(500, 0);
      p.lineTo(420, 0);
      p.lineTo(280, 290);
      p.lineTo(140, 0);
      p.close();
      return p;
    },
    adv
  );

export const glyphx = (opentype, adv) =>
  makeGlyph(
    opentype,
    "x",
    "x".codePointAt(0),
    (p) => {
      p.moveTo(60, 0);
      p.lineTo(220, 240);
      p.lineTo(60, 480);
      p.lineTo(130, 480);
      p.lineTo(250, 290);
      p.lineTo(370, 480);
      p.lineTo(440, 480);
      p.lineTo(280, 240);
      p.lineTo(440, 0);
      p.lineTo(370, 0);
      p.lineTo(250, 190);
      p.lineTo(130, 0);
      p.close();
      return p;
    },
    adv
  );

