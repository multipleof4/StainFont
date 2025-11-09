const makeGlyph = (opentype, name, unicode, cmds, adv) =>
  new opentype.Glyph({
    name,
    unicode,
    advanceWidth: adv,
    path: cmds(new opentype.Path())
  });

export const glyphH = (opentype, adv) =>
  makeGlyph(
    opentype,
    "H",
    "H".codePointAt(0),
    (p) => {
      p.moveTo(100, 0);
      p.lineTo(100, 700);
      p.lineTo(160, 700);
      p.lineTo(160, 380);
      p.lineTo(440, 380);
      p.lineTo(440, 700);
      p.lineTo(500, 700);
      p.lineTo(500, 0);
      p.lineTo(440, 0);
      p.lineTo(440, 320);
      p.lineTo(160, 320);
      p.lineTo(160, 0);
      p.close();
      return p;
    },
    adv
  );

export const glyphh = (opentype, adv) =>
  makeGlyph(
    opentype,
    "h",
    "h".codePointAt(0),
    (p) => {
      p.moveTo(100, 0);
      p.lineTo(100, 720);
      p.lineTo(160, 720);
      p.lineTo(160, 440);
      p.curveTo(200, 470, 250, 490, 310, 490);
      p.curveTo(420, 490, 480, 430, 480, 320);
      p.lineTo(480, 0);
      p.lineTo(420, 0);
      p.lineTo(420, 320);
      p.curveTo(420, 400, 380, 430, 310, 430);
      p.curveTo(230, 430, 160, 390, 160, 300);
      p.lineTo(160, 0);
      p.close();
      return p;
    },
    adv
  );
