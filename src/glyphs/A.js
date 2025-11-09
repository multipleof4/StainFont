const makeGlyph = (opentype, name, unicode, cmds, adv) =>
  new opentype.Glyph({
    name,
    unicode,
    advanceWidth: adv,
    path: cmds(new opentype.Path())
  });

export const glyphA = (opentype, adv) =>
  makeGlyph(
    opentype,
    "A",
    "A".codePointAt(0),
    (p) => {
      p.moveTo(50, 0);
      p.lineTo(280, 700);
      p.lineTo(320, 700);
      p.lineTo(550, 0);
      p.lineTo(480, 0);
      p.lineTo(430, 180);
      p.lineTo(170, 180);
      p.lineTo(120, 0);
      p.close();
      p.moveTo(195, 240);
      p.lineTo(405, 240);
      p.lineTo(300, 620);
      p.close();
      return p;
    },
    adv
  );

export const glypha = (opentype, adv) =>
  makeGlyph(
    opentype,
    "a",
    "a".codePointAt(0),
    (p) => {
      p.moveTo(340, -10);
      p.curveTo(240, -10, 160, 30, 120, 100);
      p.lineTo(170, 130);
      p.curveTo(200, 80, 260, 50, 330, 50);
      p.curveTo(420, 50, 480, 100, 480, 180);
      p.lineTo(480, 220);
      p.curveTo(450, 180, 400, 150, 330, 150);
      p.curveTo(220, 150, 140, 220, 140, 320);
      p.curveTo(140, 420, 220, 490, 330, 490);
      p.curveTo(400, 490, 450, 460, 480, 420);
      p.lineTo(480, 480);
      p.lineTo(540, 480);
      p.lineTo(540, 180);
      p.curveTo(540, 70, 460, -10, 340, -10);
      p.close();
      p.moveTo(330, 210);
      p.curveTo(410, 210, 480, 250, 480, 320);
      p.curveTo(480, 390, 410, 430, 330, 430);
      p.curveTo(250, 430, 200, 380, 200, 320);
      p.curveTo(200, 260, 250, 210, 330, 210);
      p.close();
      return p;
    },
    adv
  );
