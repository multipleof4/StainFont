const makeGlyph = (opentype, name, unicode, cmds, adv) =>
  new opentype.Glyph({
    name,
    unicode,
    advanceWidth: adv,
    path: cmds(new opentype.Path())
  });

export const glyphI = (opentype, adv) =>
  makeGlyph(
    opentype,
    "I",
    "I".codePointAt(0),
    (p) => {
      p.moveTo(270, 0);
      p.lineTo(270, 700);
      p.lineTo(330, 700);
      p.lineTo(330, 0);
      p.close();
      return p;
    },
    adv
  );

export const glyphi = (opentype, adv) =>
  makeGlyph(
    opentype,
    "i",
    "i".codePointAt(0),
    (p) => {
      p.moveTo(270, 0);
      p.lineTo(270, 480);
      p.lineTo(330, 480);
      p.lineTo(330, 0);
      p.close();
      p.moveTo(270, 580);
      p.lineTo(270, 660);
      p.lineTo(330, 660);
      p.lineTo(330, 580);
      p.close();
      return p;
    },
    adv
  );
