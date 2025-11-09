const makeGlyph = (opentype, name, unicode, cmds, adv) =>
  new opentype.Glyph({
    name,
    unicode,
    advanceWidth: adv,
    path: cmds(new opentype.Path())
  });

export const glyphL = (opentype, adv) =>
  makeGlyph(
    opentype,
    "L",
    "L".codePointAt(0),
    (p) => {
      p.moveTo(100, 0);
      p.lineTo(100, 700);
      p.lineTo(160, 700);
      p.lineTo(160, 60);
      p.lineTo(480, 60);
      p.lineTo(480, 0);
      p.close();
      return p;
    },
    adv
  );

export const glyphl = (opentype, adv) =>
  makeGlyph(
    opentype,
    "l",
    "l".codePointAt(0),
    (p) => {
      p.moveTo(270, 0);
      p.lineTo(270, 720);
      p.lineTo(330, 720);
      p.lineTo(330, 0);
      p.close();
      return p;
    },
    adv
  );
