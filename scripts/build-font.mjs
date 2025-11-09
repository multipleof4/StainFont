import fs from "fs";
import path from "path";
import url from "url";
import opentype from "opentype.js";

const __dirname=url.fileURLToPath(new URL(".",import.meta.url));
const distDir=path.resolve(__dirname,"..","dist");
if(!fs.existsSync(distDir))fs.mkdirSync(distDir,{recursive:true});

const upm=1000;
const ascent=800;
const descent=-200;
const bw=80;
const gap=40;

const makePath=d=>new opentype.Path(d);

const glyph=({name,unicode,advanceWidth,commands})=>new opentype.Glyph({
  name,
  unicode,
  advanceWidth,
  path:makePath(commands)
});

// Simple Candara-inspired, clean humanist-ish shapes
const glyphs=[];

// space
glyphs.push(glyph({
  name:"space",
  unicode:32,
  advanceWidth:300,
  commands:[]
}));

// Helper for vertical stems
const vStem=(x,y1,y2,w)=>[
  {type:"M",x:x,y:y1},
  {type:"L",x:x+w,y:y1},
  {type:"L",x:x+w,y:y2},
  {type:"L",x:x,y:y2},
  {type:"Z"}
];

// Helper for horizontal bar
const hBar=(x1,x2,y,w)=>[
  {type:"M",x:x1,y:y},
  {type:"L",x:x2,y:y},
  {type:"L",x:x2,y:y+w},
  {type:"L",x:x1,y:y+w},
  {type:"Z"}
];

// Uppercase A
(()=>{
  const aw=600;
  const base=0,top=ascent;
  const left=140,right=460;
  const barY=450,barW=60;
  const cmds=[
    {type:"M",x:80,y:base},
    {type:"L",x:200,y:top},
    {type:"L",x:260,y:top},
    {type:"L",x:480,y:base},
    {type:"L",x:400,y:base},
    {type:"L",x:250,y:620},
    {type:"L",x:120,y:base},
    {type:"Z"},
    ...hBar(left,right,barY,barW)
  ];
  glyphs.push(glyph({name:"A",unicode:65,advanceWidth:aw,commands:cmds}));
})();

// Uppercase B
(()=>{
  const aw=600;
  const x0=90;
  const mid=450;
  const r=230;
  const cmds=[
    ...vStem(x0,0,ascent,bw),
    {type:"M",x:x0+bw,y:ascent},
    {type:"Q",x:x0+bw+220,y:ascent,x1:x0+bw+220,y1:ascent-180},
    {type:"Q",x:x0+bw+220,y:ascent-320,x1:x0+bw,y1:mid},
    {type:"L",x:x0+bw,y:mid},
    {type:"Z"},
    {type:"M",x:x0+bw,y:mid},
    {type:"Q",x:x0+bw+200,y:mid,x1:x0+bw+200,y1:mid-160},
    {type:"Q",x:x0+bw+200,y:mid-310,x1:x0+bw,y1:0},
    {type:"L",x:x0+bw,y:0},
    {type:"Z"}
  ];
  glyphs.push(glyph({name:"B",unicode:66,advanceWidth:aw,commands:cmds}));
})();

// Uppercase C
(()=>{
  const aw=600;
  const cx=340,cy=400,ro=320,ri=220;
  const cmds=[
    {type:"M",x:cx+ro,y:cy+10},
    {type:"Q",x:cx+ro-140,y:cy+260,x1:cx,y1:cy+260},
    {type:"Q",x:cx-ro+40,y:cy+260,x1:cx-ro+40,y1:cy},
    {type:"Q",x:cx-ro+40,y:cy-260,x1:cx,y1:cy-260},
    {type:"Q",x:cx+ro-80,y:cy-260,x1:cx+ro,y1:cy-40},
    {type:"L",x:cx+ro-60,y:cy-40},
    {type:"Q",x:cx+ro-120,y:cy-210,x1:cx,y1:cy-210},
    {type:"Q",x:cx-ri,y:cy-210,x1:cx-ri,y1:cy},
    {type:"Q",x:cx-ri,y:cy+210,x1:cx,y1:cy+210},
    {type:"Q",x:cx+ro-120,y:cy+210,x1:cx+ro-40,y1:cy+40},
    {type:"Z"}
  ];
  glyphs.push(glyph({name:"C",unicode:67,advanceWidth:aw,commands:cmds}));
})();

// Lowercase a
(()=>{
  const aw=520;
  const base=0,x0=90;
  const cmds=[
    {type:"M",x:x0+80,y:base},
    {type:"Q",x:x0,y:base+70,x1:x0,y1:base+150},
    {type:"Q",x:x0,y:base+260,x1:x0+110,y1:base+260},
    {type:"Q",x:x0+210,y:base+260,x1:x0+260,y1:base+210},
    {type:"L",x:x0+260,y:base},
    {type:"L",x:x0+200,y:base},
    {type:"L",x:x0+200,y:base+40},
    {type:"Q",x:x0+160,y:base,x1:x0+80,y1:base},
    {type:"Z"}
  ];
  glyphs.push(glyph({name:"a",unicode:97,advanceWidth:aw,commands:cmds}));
})();

// Lowercase b
(()=>{
  const aw=520;
  const x0=90;
  const top=700;
  const mid=350;
  const cmds=[
    ...vStem(x0,0,top,bw),
    {type:"M",x:x0+bw,y:mid},
    {type:"Q",x:x0+bw+160,y:mid,x1:x0+bw+160,y1:mid-130},
    {type:"Q",x:x0+bw+160,y:mid-260,x1:x0+bw,y1:mid-260},
    {type:"Q",x:x0+40,y:mid-260,x1:x0,y1:mid-140},
    {type:"Q",x:x0,y:mid-40,x1:x0+40,y1:mid},
    {type:"Z"}
  ];
  glyphs.push(glyph({name:"b",unicode:98,advanceWidth:aw,commands:cmds}));
})();

// Lowercase c
(()=>{
  const aw=480;
  const cx=260,cy=260;
  const cmds=[
    {type:"M",x:cx+160,y:cy+40},
    {type:"Q",x:cx+40,y:cy+160,x1:cx-60,y1:cy+160},
    {type:"Q",x:cx-150,y:cy+160,x1:cx-150,y1:cy},
    {type:"Q",x:cx-150,y:cy-160,x1:cx-40,y1:cy-160},
    {type:"Q",x:cx+40,y:cy-160,x1:cx+120,y1:cy-60},
    {type:"L",x:cx+80,y:cy-40},
    {type:"Q",x:cx+20,y:cy-110,x1:cx-40,y1:cy-110},
    {type:"Q",x:cx-80,y:cy-110,x1:cx-80,y1:cy},
    {type:"Q",x:cx-80,y:cy+110,x1:cx-20,y1:cy+110},
    {type:"Q",x:cx+40,y:cy+110,x1:cx+130,y1:cy+10},
    {type:"Z"}
  ];
  glyphs.push(glyph({name:"c",unicode:99,advanceWidth:aw,commands:cmds}));
})();

const font=new opentype.Font({
  familyName:"Stain",
  styleName:"Regular",
  unitsPerEm:upm,
  ascender:ascent,
  descender:descent,
  glyphs
});

const ttf=font.toArrayBuffer();
const outPath=path.join(distDir,"Stain-Regular.ttf");
fs.writeFileSync(outPath,Buffer.from(ttf));
console.log("Built",outPath);
