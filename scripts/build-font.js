import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import opentype from "opentype.js";
import { glyphA, glypha } from "../src/glyphs/A.js";
import { glyphB, glyphb } from "../src/glyphs/B.js";
import { glyphC, glyphc } from "../src/glyphs/C.js";
import { glyphD, glyphd } from "../src/glyphs/D.js";
import { glyphE, glyphe } from "../src/glyphs/E.js";
import { glyphF, glyphf } from "../src/glyphs/F.js";
import { glyphG, glyphg } from "../src/glyphs/G.js";
import { glyphH, glyphh } from "../src/glyphs/H.js";
import { glyphI, glyphi } from "../src/glyphs/I.js";
import { glyphJ, glyphj } from "../src/glyphs/J.js";
import { glyphK, glyphk } from "../src/glyphs/K.js";
import { glyphL, glyphl } from "../src/glyphs/L.js";
import { glyphM, glyphm } from "../src/glyphs/M.js";
import { glyphN, glyphn } from "../src/glyphs/N.js";
import { glyphO, glypho } from "../src/glyphs/O.js";
import { glyphP, glyphp } from "../src/glyphs/P.js";
import { glyphQ, glyphq } from "../src/glyphs/Q.js";
import { glyphR, glyphr } from "../src/glyphs/R.js";
import { glyphS, glyphs as glyphsLowerS } from "../src/glyphs/S.js";
import { glyphT, glypht } from "../src/glyphs/T.js";
import { glyphU, glyphu } from "../src/glyphs/U.js";
import { glyphV, glyphv } from "../src/glyphs/V.js";
import { glyphW, glyphw } from "../src/glyphs/W.js";
import { glyphX, glyphx } from "../src/glyphs/X.js";
import { glyphY, glypthy as glyphy } from "../src/glyphs/Y.js";
import { glyphZ, glyphz } from "../src/glyphs/Z.js";

const __filename = fileURLToPath(import.meta.url);
const outDir = path.join(path.dirname(__filename), "..", "dist");
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

// Polyfill: opentype.js Path methods return undefined, preventing chaining. Patching to return this.
["moveTo","lineTo","curveTo","quadraticCurveTo","close"].forEach(m=>{
  const f=opentype.Path.prototype[m];
  opentype.Path.prototype[m]=function(...a){f.apply(this,a);return this};
});

const mkGlyph = (n, u, a, fn) => new opentype.Glyph({ name: n, unicode: u, advanceWidth: a, path: fn(new opentype.Path()) });

// Candara-ish tracking: wider capitals, tighter lower, distinct narrow/wide glyphs
const w = { A:660, B:620, C:600, D:640, E:580, F:550, G:650, H:700, I:260, J:450, K:600, L:540, M:840, N:700, O:680, P:600, Q:680, R:620, S:560, T:560, U:680, V:620, W:880, X:620, Y:600, Z:580,
a:530, b:560, c:490, d:560, e:510, f:320, g:540, h:540, i:240, j:240, k:500, l:240, m:820, n:540, o:550, p:560, q:560, r:360, s:440, t:360, u:540, v:500, w:760, x:500, y:500, z:460 };

const list = [
  mkGlyph("space", 32, 250, p => p),
  mkGlyph("period", 46, 240, p => p.moveTo(70,0).lineTo(70,120).lineTo(170,120).lineTo(170,0).close()),
  glyphA(opentype, w.A), glypha(opentype, w.a), glyphB(opentype, w.B), glyphb(opentype, w.b),
  glyphC(opentype, w.C), glyphc(opentype, w.c), glyphD(opentype, w.D), glyphd(opentype, w.d),
  glyphE(opentype, w.E), glyphe(opentype, w.e), glyphF(opentype, w.F), glyphf(opentype, w.f),
  glyphG(opentype, w.G), glyphg(opentype, w.g), glyphH(opentype, w.H), glyphh(opentype, w.h),
  glyphI(opentype, w.I), glyphi(opentype, w.i), glyphJ(opentype, w.J), glyphj(opentype, w.j),
  glyphK(opentype, w.K), glyphk(opentype, w.k), glyphL(opentype, w.L), glyphl(opentype, w.l),
  glyphM(opentype, w.M), glyphm(opentype, w.m), glyphN(opentype, w.N), glyphn(opentype, w.n),
  glyphO(opentype, w.O), glypho(opentype, w.o), glyphP(opentype, w.P), glyphp(opentype, w.p),
  glyphQ(opentype, w.Q), glyphq(opentype, w.q), glyphR(opentype, w.R), glyphr(opentype, w.r),
  glyphS(opentype, w.S), glyphsLowerS(opentype, w.s), glyphT(opentype, w.T), glypht(opentype, w.t),
  glyphU(opentype, w.U), glyphu(opentype, w.u), glyphV(opentype, w.V), glyphv(opentype, w.v),
  glyphW(opentype, w.W), glyphw(opentype, w.w), glyphX(opentype, w.X), glyphx(opentype, w.x),
  glyphY(opentype, w.Y), glyphy(opentype, w.y), glyphZ(opentype, w.Z), glyphz(opentype, w.z)
];

const font = new opentype.Font({
  familyName: "Stain", styleName: "Regular", unitsPerEm: 1000, ascender: 750, descender: -220, glyphs: list,
  copyright: "CC0 1.0 Universal"
});
const outPath = path.join(outDir, "Stain.otf");
fs.writeFileSync(outPath, Buffer.from(font.toArrayBuffer()));
console.log(`Built ${outPath}`);
