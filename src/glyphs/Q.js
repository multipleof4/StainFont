const makeGlyph = (opentype, name, unicode, cmds, adv) =>
  new opentype.Glyph({
    name,
    unicode,
    advanceWidth: adv,
    path: cmds(new opentype.Path())
  });

export const glyphQ = (opentype, adv) =>
  makeGlyph(
    opentype,
    "Q",
    "Q".codePointAt(0),
    (p) => {
      p.moveTo(300, -10);
      p.curveTo(160, -10, 60, 100, 60, 280);
      p.lineTo(60, 420);
      p.curveTo(60, 600, 160, 710, 300, 710);
      p.curveTo(440, 710, 540, 600, 540, 420);
      p.lineTo(540, 280);
      p.curveTo(540, 140, 470, 40, 360, 10);
      p.lineTo(480, -80);
      p.lineTo(440, -120);
      p.lineTo(300, 0);
      p.curveTo(290, 0, 280, 0, 270, 0);
      p.lineTo(270, 60);
      p.curveTo(280, 60, 290, 60, 300, 60);
      p.lineTo(340, 60);
      p.lineTo(380, 20);
      p.curveTo(450, 50, 480, 140, 480, 280);
      p.lineTo(480, 420);
      p.curveTo(480, 570, 410, 650, 300, 650);
      p.curveTo(190, 650, 120, 570, 120, 420);
      p.lineTo(120, 280);
      p.curveTo(120, 130, 190, 50, 300, 50);
      p.close();
      return p;
    },
    adv
  );

export const glyphq = (opentype, adv) =>
  makeGlyph(
    opentype,
    "q",
    "q".codePointAt(0),
    (p) => {
      p.moveTo(310, -10);
      p.curveTo(250, -10, 200, 10, 160, 40);
      p.lineTo(160, 0);
      p.lineTo(100, 0);
      p.lineTo(100, 480);
      p.lineTo(160, 480);
      p.lineTo(160, 440);
      p.curveTo(200, 470, 250, 490, 310, 490);
      p.curveTo(430, 490, 520, 400, 520, 240);
      p.curveTo(520, 80, 430, -10, 310, -10);
      p.close();
      p.moveTo(310, 50);
      p.curveTo(400, 50, 460, 110, 460, 240);
      p.curveTo(460, 370, 400, 430, 310, 430);
      p.curveTo(220, 430, 160, 370, 160, 240);
      p.curveTo(160, 110, 220, 50, 310, 50);
      p.close();
      p.moveTo(460, -150);
      p.lineTo(460, 0);
      p.lineTo(520, 0);
      p.lineTo(520, -150);
      p.close();
      return p;
    },
    adv
  );
