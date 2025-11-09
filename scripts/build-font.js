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

const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);

const outDir=path.join(__dirname,"..","dist");
if(!fs.existsSync(outDir))fs.mkdirSync(outDir,{recursive:true});

const familyName="Stain";
const styleName="Regular";
const unitsPerEm=1000;
const ascender=800;
const descender=-200;
const defaultAdv=600;

const mkGlyph=(name,unicode,adv,pathFn)=>
  new opentype.Glyph({
    name,
    unicode,
    advanceWidth:adv,
    path:pathFn(new opentype.Path())
  });

const glyphSpace=mkGlyph("space"," ".codePointAt(0),260,p=>p);
const glyphPeriod=mkGlyph("period","."
  .codePointAt(0),260,p=>{
  p.moveTo(80,0);
  p.lineTo(80,120);
  p.lineTo(180,120);
  p.lineTo(180,0);
  p.close();
  return p;
});

const glyphList=[
  glyphSpace,
  glyphPeriod,
  glyphA(opentype,defaultAdv),
  glypha(opentype,defaultAdv),
  glyphB(opentype,defaultAdv),
  glyphb(opentype,defaultAdv),
  glyphC(opentype,defaultAdv),
  glyphc(opentype,defaultAdv),
  glyphD(opentype,defaultAdv),
  glyphd(opentype,defaultAdv),
  glyphE(opentype,defaultAdv),
  glyphe(opentype,defaultAdv),
  glyphF(opentype,defaultAdv),
  glyphf(opentype,defaultAdv),
  glyphG(opentype,defaultAdv),
  glyphg(opentype,defaultAdv),
  glyphH(opentype,defaultAdv),
  glyphh(opentype,defaultAdv),
  glyphI(opentype,defaultAdv),
  glyphi(opentype,defaultAdv),
  glyphJ(opentype,defaultAdv),
  glyphj(opentype,defaultAdv),
  glyphK(opentype,defaultAdv),
  glyphk(opentype,defaultAdv),
  glyphL(opentype,defaultAdv),
  glyphl(opentype,defaultAdv),
  glyphM(opentype,740),
  glyphm(opentype,740),
  glyphN(opentype,defaultAdv),
  glyphn(opentype,defaultAdv),
  glyphO(opentype,defaultAdv),
  glypho(opentype,defaultAdv),
  glyphP(opentype,defaultAdv),
  glyphp(opentype,defaultAdv),
  glyphQ(opentype,defaultAdv),
  glyphq(opentype,defaultAdv),
  glyphR(opentype,defaultAdv),
  glyphr(opentype,defaultAdv),
  glyphS(opentype,defaultAdv),
  glyphsLowerS(opentype,defaultAdv),
  glyphT(opentype,defaultAdv),
  glypht(opentype,defaultAdv),
  glyphU(opentype,defaultAdv),
  glyphu(opentype,defaultAdv),
  glyphV(opentype,defaultAdv),
  glyphv(opentype,defaultAdv),
  glyphW(opentype,760),
  glyphw(opentype,660),
  glyphX(opentype,defaultAdv),
  glyphx(opentype,defaultAdv),
  glyphY(opentype,defaultAdv),
  glyphy(opentype,defaultAdv),
  glyphZ(opentype,defaultAdv),
  glyphz(opentype,defaultAdv)
];

const font=new opentype.Font({
  familyName,
  styleName,
  unitsPerEm,
  ascender,
  descender,
  glyphs:glyphList,
  copyright:"Author: Anon"
});

const buf=Buffer.from(font.toArrayBuffer());
const outPath=path.join(outDir,"Stain.otf");
fs.writeFileSync(outPath,buf);
console.log(`Built ${outPath}`);
