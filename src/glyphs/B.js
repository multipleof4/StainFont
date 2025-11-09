const makeGlyph = (opentype, name, unicode, cmds, adv) =>
  new opentype.Glyph({
    name,
    unicode,
    advanceWidth: adv,
    path: cmds(new opentype.Path())
  });

export const glyphB = (opentype, adv) =>
  makeGlyph(
    opentype,
    "B",
    "B".codePointAt(0),
    (p) => {
      p.moveTo(100, 0);
      p.lineTo(100, 700);
      p.lineTo(340, 700);
      p.curveTo(450, 700, 520, 640, 520, 560);
      p.curveTo(520, 500, 480, 450, 420, 430);
      p.curveTo(490, 410, 540, 360, 540, 280);
      p.curveTo(540, 180, 460, 120, 340, 120);
      p.lineTo(100, 120);
      p.close();
      p.moveTo(160, 60);
      p.lineTo(340, 60);
      p.curveTo(490, 60, 600, 140, 600, 280);
      p.curveTo(600, 390, 520, 460, 420, 470);
      p.lineTo(420, 410);
      p.curveTo(460, 410, 460, 360, 460, 360);
      p.curveTo(460, 360, 460, 310, 420, 310);
      p.lineTo(340, 310);
      p.lineTo(340, 370);
      p.lineTo(380, 370);
      p.curveTo(440, 370, 460, 410, 460, 460);
      p.curveTo(460, 510, 440, 550, 380, 550);
      p.lineTo(340, 550);
      p.lineTo(340, 640);
      p.lineTo(340, 640);
      p.curveTo(420, 640, 460, 600, 460, 560);
      p.curveTo(460, 520, 420, 480, 340, 480);
      p.lineTo(160, 480);
      p.close();
      p.moveTo(160, 60);
      p.lineTo(340, 60);
      p.curveTo(430, 60, 480, 110, 480, 180);
      p.lineTo(480, 280);
      p.curveTo(480, 350, 430, 400, 340, 400);
      p.lineTo(160, 400);
      p.close();
      p.moveTo(160, 460);
      p.lineTo(330, 460);
      p.curveTo(410, 460, 460, 500, 460, 560);
      p.curveTo(460, 620, 410, 640, 330, 640);
      p.lineTo(160, 640);
      p.close();
      return p;
    },
    adv
  );

export const glyphb = (opentype, adv) =>
  makeGlyph(
    opentype,
    "b",
    "b".codePointAt(0),
    (p) => {
      p.moveTo(100, 0);
      p.lineTo(100, 720);
      p.lineTo(160, 720);
      p.lineTo(160, 440);
      p.curveTo(200, 470, 250, 490, 310, 490);
      p.curveTo(430, 490, 520, 400, 520, 280);
      p.curveTo(520, 160, 430, 70, 310, 70);
      p.curveTo(250, 70, 200, 90, 160, 120);
      p.lineTo(160, 0);
      p.close();
      p.moveTo(310, 130);
      p.curveTo(400, 130, 460, 190, 460, 280);
      p.curveTo(460, 370, 400, 430, 310, 430);
      p.curveTo(220, 430, 160, 370, 160, 280);
      p.curveTo(160, 190, 220, 130, 310, 130);
      p.close();
      return p;
    },
    adv
  );
