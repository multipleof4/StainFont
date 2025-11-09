const makeGlyph = (opentype, name, unicode, cmds, adv) =>
  new opentype.Glyph({
    name,
    unicode,
    advanceWidth: adv,
    path: cmds(new opentype.Path())
  });

export const glyphV = (opentype, adv) =>
  makeGlyph(
    opentype,
    "V",
    "V".codePointAt(0),
    (p) => {
      p.moveTo(50, 700);
      p.lineTo(120, 700);
      p.lineTo(300, 80);
      p.lineTo(480, 700);
      p.lineTo(550, 700);
      p.lineTo(330, 0);
      p.lineTo(270, 0);
      p.close();
      return p;
    },
    adv
  );

export const glyphv = (opentype, adv) =>
  makeGlyph(
    opentype,
    "v",
    "v".codePointAt(0),
    (p) => {
      p.moveTo(60, 480);
      p.lineTo(130, 480);
      p.lineTo(270, 80);
      p.lineTo(410, 480);
      p.lineTo(480, 480);
      p.lineTo(300, 0);
      p.lineTo(240, 0);
      p.close();
      return p;
    },
    adv
  );
