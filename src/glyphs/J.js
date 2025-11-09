const makeGlyph = (opentype, name, unicode, cmds, adv) =>
  new opentype.Glyph({
    name,
    unicode,
    advanceWidth: adv,
    path: cmds(new opentype.Path())
  });

export const glyphJ = (opentype, adv) =>
  makeGlyph(
    opentype,
    "J",
    "J".codePointAt(0),
    (p) => {
      p.moveTo(240, -10);
      p.curveTo(130, -10, 60, 50, 60, 160);
      p.lineTo(120, 160);
      p.curveTo(120, 80, 170, 50, 240, 50);
      p.curveTo(310, 50, 360, 80, 360, 160);
      p.lineTo(360, 700);
      p.lineTo(420, 700);
      p.lineTo(420, 160);
      p.curveTo(420, 50, 350, -10, 240, -10);
      p.close();
      return p;
    },
    adv
  );

export const glyphj = (opentype, adv) =>
  makeGlyph(
    opentype,
    "j",
    "j".codePointAt(0),
    (p) => {
      p.moveTo(210, -150);
      p.curveTo(130, -150, 80, -110, 60, -40);
      p.lineTo(110, -10);
      p.curveTo(130, -60, 160, -90, 210, -90);
      p.curveTo(260, -90, 290, -60, 290, 0);
      p.lineTo(290, 480);
      p.lineTo(350, 480);
      p.lineTo(350, 0);
      p.curveTo(350, -90, 300, -150, 210, -150);
      p.close();
      p.moveTo(290, 580);
      p.lineTo(290, 660);
      p.lineTo(350, 660);
      p.lineTo(350, 580);
      p.close();
      return p;
    },
    adv
  );
