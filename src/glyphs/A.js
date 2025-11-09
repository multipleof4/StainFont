const makeGlyph = (opentype, name, unicode, cmds, adv) =>
  new opentype.Glyph({
    name,
    unicode,
    advanceWidth: adv,
    path: cmds(
      new opentype.Path()
    )
  });

export const glyphA = (opentype, adv) =>
  makeGlyph(
    opentype,
    "A",
    "A".codePointAt(0),
    (p) => {
      p.moveTo(100, 0);
      p.lineTo(260, 800);
      p.lineTo(340, 800);
      p.lineTo(500, 0);
      p.lineTo(420, 0);
      p.lineTo(375, 200);
      p.lineTo(225, 200);
      p.lineTo(180, 0);
      p.close();
      p.moveTo(250, 300);
      p.lineTo(350, 300);
      p.lineTo(330, 420);
      p.lineTo(270, 420);
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
      p.moveTo(130, 200);
      p.curveTo(130, 100, 210, 40, 320, 40);
      p.curveTo(410, 40, 470, 80, 500, 140);
      p.lineTo(500, 60);
      p.lineTo(560, 60);
      p.lineTo(560, 380);
      p.curveTo(560, 520, 460, 600, 320, 600);
      p.curveTo(210, 600, 130, 540, 120, 450);
      p.lineTo(200, 450);
      p.curveTo(210, 510, 250, 540, 320, 540);
      p.curveTo(410, 540, 480, 490, 480, 390);
      p.lineTo(480, 340);
      p.curveTo(450, 390, 390, 420, 320, 420);
      p.curveTo(210, 420, 130, 340, 130, 200);
      p.close();
      p.moveTo(320, 100);
      p.curveTo(240, 100, 190, 150, 190, 210);
      p.curveTo(190, 290, 240, 340, 320, 340);
      p.curveTo(400, 340, 450, 290, 450, 210);
      p.curveTo(450, 150, 400, 100, 320, 100);
      p.close();
      return p;
    },
    adv
  );
