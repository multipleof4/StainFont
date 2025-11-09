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
import { glyphS, glyphs } from "../src/glyphs/S.js";
import { glyphT, glypht } from "../src/glyphs/T.js";
import { glyphU, glyphu } from "../src/glyphs/U.js";
import { glyphV, glyphv } from "../src/glyphs/V.js";
import { glyphW, glyphw } from "../src/glyphs/W.js";
import { glyphX, glyphx } from "../src/glyphs/X.js";
import { glyphY, glyphy } from "../src/glyphs/Y.js";
import { glyphZ, glyphz } from "../src/glyphs/Z.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outDir = path.join(__dirname, "..", "dist");
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const familyName = "Stain";
const unitsPerEm = 1000;
const ascender = 800;
const descender = -200;
const advanceWidth = 600;

const glyphs = [
  glyphA(opentype, advanceWidth),
  glypha(opentype, advanceWidth),
  glyphB(opentype, advanceWidth),
  glyphb(opentype, advanceWidth),
  glyphC(opentype, advanceWidth),
  glyphc(opentype, advanceWidth),
  glyphD(opentype, advanceWidth),
  glyphd(opentype, advanceWidth),
  glyphE(opentype, advanceWidth),
  glyphe(opentype, advanceWidth),
  glyphF(opentype, advanceWidth),
  glyphf(opentype, advanceWidth),
  glyphG(opentype, advanceWidth),
  glyphg(opentype, advanceWidth),
  glyphH(opentype, advanceWidth),
  glyphh(opentype, advanceWidth),
  glyphI(opentype, advanceWidth),
  glyphi(opentype, advanceWidth),
  glyphJ(opentype, advanceWidth),
  glyphj(opentype, advanceWidth),
  glyphK(opentype, advanceWidth),
  glyphk(opentype, advanceWidth),
  glyphL(opentype, advanceWidth),
  glyphl(opentype, advanceWidth),
  glyphM(opentype, 740),
  glyphm(opentype, 740),
  glyphN(opentype, advanceWidth),
  glyphn(opentype, advanceWidth),
  glyphO(opentype, advanceWidth),
  glypho(opentype, advanceWidth),
  glyphP(opentype, advanceWidth),
  glyphp(opentype, advanceWidth),
  glyphQ(opentype, advanceWidth),
  glyphq(opentype, advanceWidth),
  glyphR(opentype, advanceWidth),
  glyphr(opentype, advanceWidth),
  glyphS(opentype, advanceWidth),
  glyphs(opentype, advanceWidth),
  glyphT(opentype, advanceWidth),
  glypht(opentype, advanceWidth),
  glyphU(opentype, advanceWidth),
  glyphu(opentype, advanceWidth),
  glyphV(opentype, advanceWidth),
  glyphv(opentype, advanceWidth),
  glyphW(opentype, 760),
  glyphw(opentype, 660),
  glyphX(opentype, advanceWidth),
  glyphx(opentype, advanceWidth),
  glyphY(opentype, advanceWidth),
  glypthy(opentype, advanceWidth),
  glyphZ(opentype, advanceWidth),
  glyphz(opentype, advanceWidth)
];

const font = new opentype.Font({
  familyName,
  styleName: "Regular",
  unitsPerEm,
  ascender,
  descender,
  glyphs
});

const otfBuffer = Buffer.from(font.toArrayBuffer());
const baseName = "Stain";
const otfPath = path.join(outDir, `${baseName}.otf`);
fs.writeFileSync(otfPath, otfBuffer);

console.log(`Built ${otfPath}`);
