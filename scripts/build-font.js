import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import opentype from "opentype.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, "..", "dist");
if (!fs.existsSync(distDir)) fs.mkdirSync(distDir, { recursive: true });

const upem = 1000;
const ascent = 800;
const descent = -200;
const defaultWidth = 600;

// AI-style stub: deterministic parametric glyph generator
// This is where future AI (you call me) can map characters -> vector instructions.
function genGlyphPathForChar(ch) {
  const p = new opentype.Path();
  const code = ch.charCodeAt(0);

  const seed = (code * 73) % 997;
  const thickness = 40 + (seed % 60);
  const inset = 80 + (seed % 120);
  const cx = defaultWidth / 2;

  // Vertical stem
  p.moveTo(cx - thickness / 2, ascent);
  p.lineTo(cx + thickness / 2, ascent);
  p.lineTo(cx + thickness / 2, descent);
  p.lineTo(cx - thickness / 2, descent);
  p.close();

  // Top stain-like slab
  const slabW = 260 + (seed % 140);
  const slabH = 80 + (seed % 50);
  p.moveTo(cx - slabW / 2, ascent);
  p.lineTo(cx + slabW / 2, ascent);
  p.lineTo(cx + slabW / 2, ascent - slabH);
  p.quadraticCurveTo(
    cx,
    ascent - slabH - (seed % 40),
    cx - slabW / 2,
    ascent - slabH
  );
  p.close();

  // Bottom irregular notch
  const notchW = 120 + (seed % 80);
  const notchY = descent + 40 + (seed % 60);
  p.moveTo(cx - notchW / 2, notchY);
  p.lineTo(cx + notchW / 2, notchY);
  p.lineTo(cx + notchW / 2, descent);
  p.quadraticCurveTo(
    cx,
    descent - (seed % 50),
    cx - notchW / 2,
    descent
  );
  p.close();

  // Inner void
  const inner = inset;
  if (inner + thickness * 1.5 < defaultWidth / 2) {
    const iw = defaultWidth - inner * 2;
    const ih = ascent - inner - 200;
    if (iw > 80 && ih > 80) {
      p.moveTo(inner, ih);
      p.lineTo(inner + iw, ih);
      p.lineTo(inner + iw, inner + 80);
      p.lineTo(inner, inner + 80);
      p.close();
    }
  }

  return p;
}

function createGlyph(ch, advanceWidth = defaultWidth) {
  const unicode = ch.charCodeAt(0);
  const pathObj = genGlyphPathForChar(ch);
  return new opentype.Glyph({
    name: ch === " " ? "space" : `uni${unicode.toString(16).toUpperCase()}`,
    unicode,
    advanceWidth,
    path: pathObj
  });
}

function buildFont() {
  const fontName = "StainFont Basic";
  const chars = [
    " ",
    "A","B","C","D","E","F","G","H","I","J","K","L","M",
    "N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "0","1","2","3","4","5","6","7","8","9",
    ".","!", "?", "@", "#", "-", "_", ":", ";", ","
  ];

  const glyphs = [];

  glyphs.push(new opentype.Glyph({
    name: ".notdef",
    unicode: 0,
    advanceWidth: defaultWidth,
    path: (() => {
      const p = new opentype.Path();
      p.moveTo(80, descent);
      p.lineTo(defaultWidth - 80, descent);
      p.lineTo(defaultWidth - 80, ascent);
      p.lineTo(80, ascent);
      p.close();
      p.moveTo(140, descent + 60);
      p.lineTo(defaultWidth - 140, descent + 60);
      p.lineTo(defaultWidth - 140, ascent - 60);
      p.lineTo(140, ascent - 60);
      p.close();
      return p;
    })()
  }));

  chars.forEach(ch => {
    if (ch === " ") {
      glyphs.push(new opentype.Glyph({
        name: "space",
        unicode: 32,
        advanceWidth: defaultWidth * 0.5,
        path: new opentype.Path()
      }));
    } else {
      glyphs.push(createGlyph(ch));
    }
  });

  const font = new opentype.Font({
    familyName: fontName,
    styleName: "Regular",
    unitsPerEm: upem,
    ascender: ascent,
    descender: descent,
    glyphs
  });

  const ttfBuffer = Buffer.from(font.toArrayBuffer());

  const outTTF = path.join(distDir, "StainFont-Basic.ttf");
  fs.writeFileSync(outTTF, ttfBuffer);

  console.log(`Built: ${outTTF}`);
}

buildFont();
