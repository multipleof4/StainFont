const makeGlyph = (opentype, name, unicode, cmds, adv) =>
  new opentype.Glyph({
    name,
    unicode,
    advanceWidth: adv,
    path: cmds(new opentype.Path())
  });

export const glyphG = (opentype, adv) =>
  makeGlyph(
    opentype,
    "G",
    "G".codePointAt(0),
    (p) => {
      p.moveTo(350, -10);
      p.curveTo(190, -10, 80, 100, 80, 280);
      p.lineTo(80, 420);
      p.curveTo(80, 600, 190, 710, 350, 710);
      p.curveTo(460, 710, 540, 660, 580, 570);
      p.lineTo(520, 540);
      p.curveTo(490, 610, 430, 650, 350, 650);
      p.curveTo(220, 650, 140, 570, 140, 420);
      p.lineTo(140, 280);
      p.curveTo(140, 130, 220, 50, 350, 50);
      p.curveTo(450, 50, 520, 100, 540, 190);
      p.lineTo(340, 190);
      p.lineTo(340, 250);
      p.lineTo(600, 250);
      p.lineTo(600, 220);
      p.curveTo(600, 70, 500, -10, 350, -10);
      p.close();
      return p;
    },
    adv
  );

export const glyphg = (opentype, adv) =>
  makeGlyph(
    opentype,
    "g",
    "g".codePointAt(0),
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
      p.lineTo(520, 180);
      p.curveTo(520, 20, 430, -70, 310, -70);
      p.curveTo(220, -70, 150, -30, 110, 40);
      p.lineTo(160, 70);
      p.curveTo(190, 20, 240, -10, 310, -10);
      p.curveTo(400, -10, 460, 50, 460, 180);
      p.lineTo(460, 240);
      p.curveTo(460, 370, 400, 430, 310, 430);
      p.curveTo(220, 430, 160, 370, 160, 240);
      p.curveTo(160, 110, 220, 50, 310, 50);
      p.close();
      return p;
    },
    adv
  );
