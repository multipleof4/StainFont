import fs from "fs";
import path from "path";
import url from "url";
import opentype from "opentype.js";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.join(__dirname, "..", "dist");
if (!fs.existsSync(distDir)) fs.mkdirSync(distDir, { recursive: true });

const UPM = 1000;
const ASC = 750;
const DSC = -250;
const STROKE = 72;
const CURVE = 0.44;
const LIGHT = 0.085;
const ANG = 9 * Math.PI / 180;

const makeGlyph = ({
  name,
  unicode,
  advanceWidth,
  path: makePath
}) => new opentype.Glyph({
  name,
  unicode,
  advanceWidth,
  path: makePath()
});

const slant = x => x + Math.tan(ANG) * 0.12 * UPM;
const mix = (a, b, t) => a + (b - a) * t;
const curvePt = (x1, y1, x2, y2, t) => ({
  x: mix(x1, x2, t),
  y: mix(y1, y2, t)
});

const baseMetrics = {
  ascender: ASC,
  descender: DSC,
  unitsPerEm: UPM
};

const stainCommon = {
  familyName: "Stain",
  styleName: "Regular",
  ...baseMetrics
};

const pA = () => {
  const p = new opentype.Path();
  const w = 640;
  const barH = 320;
  const apexX = slant(120);
  const apexY = ASC;
  const leftBaseX = slant(80);
  const rightBaseX = slant(w - 40);
  const baseY = DSC * LIGHT;
  p.moveTo(rightBaseX, baseY);
  p.lineTo(rightBaseX - STROKE * 0.32, baseY);
  p.lineTo(apexX + 36, apexY);
  p.quadraticCurveTo(apexX, apexY - 18, apexX - 36, apexY);
  p.lineTo(leftBaseX + STROKE * 0.28, baseY);
  p.lineTo(leftBaseX, baseY);
  p.close();
  const ib = 0.35;
  const iLeft = mix(leftBaseX, rightBaseX, ib);
  const iRight = mix(leftBaseX, rightBaseX, ib + 0.36);
  const iTop = barH + 22;
  const iBot = barH - 22;
  p.moveTo(iLeft, iTop);
  p.lineTo(iRight, iTop);
  p.lineTo(iRight, iBot);
  p.lineTo(iLeft, iBot);
  p.close();
  return p;
};

const pB = () => {
  const p = new opentype.Path();
  const xL = slant(80);
  const xStemR = xL + STROKE * 0.9;
  const yTop = ASC;
  const yBot = DSC * LIGHT;
  const midY = (yTop + yBot) / 2 + 40;
  const o = 120;
  const w = 640;
  const cxR = slant(w - 40);
  p.moveTo(xStemR, yBot);
  p.lineTo(xL, yBot);
  p.lineTo(xL, yTop);
  p.lineTo(xStemR, yTop);
  p.close();
  p.moveTo(xStemR, yTop);
  p.curveTo(
    mix(xStemR, cxR, CURVE), yTop,
    cxR, mix(yTop, midY + 26, CURVE),
    cxR, midY + 26
  );
  p.curveTo(
    cxR, mix(midY + 26, midY - 8, CURVE),
    mix(xStemR + o, cxR, CURVE), midY - 8,
    xStemR + o, midY - 8
  );
  p.lineTo(xStemR, midY - 8);
  p.close();
  p.moveTo(xStemR, midY - 26);
  p.curveTo(
    mix(xStemR, cxR, CURVE), midY - 26,
    cxR, mix(midY - 26, yBot + 40, CURVE),
    cxR, yBot + 40
  );
  p.curveTo(
    cxR, mix(yBot + 40, yBot + 8, CURVE),
    mix(xStemR + o, cxR, CURVE), yBot + 8,
    xStemR + o, yBot + 8
  );
  p.lineTo(xStemR, yBot + 8);
  p.close();
  return p;
};

const pC = () => {
  const p = new opentype.Path();
  const cx = slant(360);
  const cy = ASC * 0.55;
  const rx = 290;
  const ry = 260;
  const i = 0.56;
  const rxI = rx * i;
  const ryI = ry * i;
  const startAng = Math.PI * 0.22;
  const endAng = Math.PI * 1.78;
  const arc = (R, rY, rev) => {
    const dir = rev ? -1 : 1;
    const steps = 6;
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const a = mix(startAng, endAng, t);
      const x = cx + Math.cos(a) * R;
      const y = cy + Math.sin(a) * rY;
      if (i === 0 && !rev) p.moveTo(x, y);
      else p.lineTo(x, y);
    }
  };
  arc(rx, ry, false);
  arc(rxI, ryI, true);
  p.close();
  const cutW = 80;
  const cutX = cx + rx * 0.76;
  const cutY1 = cy + 40;
  const cutY2 = cy - 40;
  p.moveTo(cutX, cutY1);
  p.lineTo(cutX + cutW, cutY1 + 16);
  p.lineTo(cutX + cutW, cutY2 - 16);
  p.lineTo(cutX, cutY2);
  p.close();
  return p;
};

const pa = () => {
  const p = new opentype.Path();
  const x = slant(120);
  const yBase = 0;
  const h = 500;
  const rx = 180;
  const ry = 210;
  const cx = slant(260);
  const cy = h * 0.54;
  const steps = 5;
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const a = Math.PI * (0.15 + 1.85 * t);
    const xx = cx + Math.cos(a) * rx;
    const yy = cy + Math.sin(a) * ry;
    if (!i) p.moveTo(xx, yy);
    else p.lineTo(xx, yy);
  }
  const rxI = rx * 0.56;
  const ryI = ry * 0.56;
  for (let i = steps; i >= 0; i--) {
    const t = i / steps;
    const a = Math.PI * (0.18 + 1.6 * t);
    const xx = cx + Math.cos(a) * rxI;
    const yy = cy + Math.sin(a) * ryI;
    p.lineTo(xx, yy);
  }
  p.close();
  const stemX = slant(360);
  const top = h + 14;
  p.moveTo(stemX, yBase - 10);
  p.lineTo(stemX + STROKE * 0.7, yBase);
  p.lineTo(stemX + STROKE * 0.7, top);
  p.lineTo(stemX, top - 14);
  p.close();
  return p;
};

const pb = () => {
  const p = new opentype.Path();
  const x = slant(120);
  const yBase = 0;
  const top = ASC;
  p.moveTo(x, yBase - 10);
  p.lineTo(x + STROKE * 0.8, yBase);
  p.lineTo(x + STROKE * 0.8, top);
  p.lineTo(x, top - 16);
  p.close();
  const cx = slant(340);
  const cy = 360;
  const rx = 180;
  const ry = 210;
  const steps = 6;
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const a = Math.PI * (0.1 + 1.9 * t);
    const xx = cx + Math.cos(a) * rx;
    const yy = cy + Math.sin(a) * ry;
    if (!i) p.moveTo(xx, yy);
    else p.lineTo(xx, yy);
  }
  const rxI = rx * 0.55;
  const ryI = ry * 0.55;
  for (let i = steps; i >= 0; i--) {
    const t = i / steps;
    const a = Math.PI * (0.2 + 1.6 * t);
    const xx = cx + Math.cos(a) * rxI;
    const yy = cy + Math.sin(a) * ryI;
    p.lineTo(xx, yy);
  }
  p.close();
  return p;
};

const pc = () => {
  const p = new opentype.Path();
  const cx = slant(260);
  const cy = 320;
  const rx = 210;
  const ry = 210;
  const rxI = rx * 0.56;
  const ryI = ry * 0.56;
  const steps = 6;
  const s = Math.PI * 0.18;
  const e = Math.PI * 1.82;
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const a = mix(s, e, t);
    const x = cx + Math.cos(a) * rx;
    const y = cy + Math.sin(a) * ry;
    if (!i) p.moveTo(x, y);
    else p.lineTo(x, y);
  }
  for (let i = steps; i >= 0; i--) {
    const t = i / steps;
    const a = mix(s + 0.08, e - 0.22, t);
    const x = cx + Math.cos(a) * rxI;
    const y = cy + Math.sin(a) * ryI;
    p.lineTo(x, y);
  }
  p.close();
  return p;
};

const glyphs = [
  new opentype.Glyph({ name: ".notdef", advanceWidth: 600, path: new opentype.Path() }),
  new opentype.Glyph({ name: "space", unicode: 32, advanceWidth: 260, path: new opentype.Path() }),
  makeGlyph({ name: "A", unicode: 65, advanceWidth: 640, path: pA }),
  makeGlyph({ name: "B", unicode: 66, advanceWidth: 640, path: pB }),
  makeGlyph({ name: "C", unicode: 67, advanceWidth: 640, path: pC }),
  makeGlyph({ name: "a", unicode: 97, advanceWidth: 540, path: pa }),
  makeGlyph({ name: "b", unicode: 98, advanceWidth: 540, path: pb }),
  makeGlyph({ name: "c", unicode: 99, advanceWidth: 520, path: pc })
];

const font = new opentype.Font({
  ...stainCommon,
  glyphs,
  version: "0.3",
  designer: "multipleof4",
  license: "OFL-1.1",
  manufacturer: "multipleof4",
  description: "Stain: a Candara-inspired humanist sans prototype.",
  trademark: "Stain"
});

const outPath = path.join(distDir, "Stain-Regular.ttf");
const buf = Buffer.from(font.toArrayBuffer());
fs.writeFileSync(outPath, buf);
console.log("Built", outPath);
