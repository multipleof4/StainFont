import opentype from "opentype.js";

const UPEM = 1000;
const ASC = 760;
const DSC = -240;
const CAP = 700;
const XH = 520;
const BASE = 0;

const STROKE = 78;
const ROUND = 26;

const WIDTH = {
  default: 560,
  narrow: 500,
  wide: 620,
  space: 250
};

const CHARSET = {
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lower: "abcdefghijklmnopqrstuvwxyz",
  digits: "0123456789"
};

const COMMON_PUNCT = ".,:;!?-–—()'\"@#$%&*+/=_";

function r(v) {
  return Math.round(v);
}

function hBar(y, x1, x2, s = STROKE) {
  const p = new opentype.Path();
  p.moveTo(r(x1), r(y));
  p.lineTo(r(x2), r(y));
  p.lineTo(r(x2), r(y - s));
  p.lineTo(r(x1), r(y - s));
  p.close();
  return p;
}

function vBar(x, y1, y2, s = STROKE) {
  const p = new opentype.Path();
  p.moveTo(r(x), r(y1));
  p.lineTo(r(x + s), r(y1));
  p.lineTo(r(x + s), r(y2));
  p.lineTo(r(x), r(y2));
  p.close();
  return p;
}

function roundRect(x, y, w, h, rr = ROUND) {
  const r0 = Math.max(0, Math.min(rr, w / 2, h / 2));
  const p = new opentype.Path();
  const x2 = x + w;
  const y2 = y + h;

  p.moveTo(r(x + r0), r(y));
  p.lineTo(r(x2 - r0), r(y));
  p.quadraticCurveTo(r(x2), r(y), r(x2), r(y + r0));
  p.lineTo(r(x2), r(y2 - r0));
  p.quadraticCurveTo(r(x2), r(y2), r(x2 - r0), r(y2));
  p.lineTo(r(x + r0), r(y2));
  p.quadraticCurveTo(r(x), r(y2), r(x), r(y2 - r0));
  p.lineTo(r(x), r(y + r0));
  p.quadraticCurveTo(r(x), r(y), r(x + r0), r(y));
  p.close();

  return p;
}

function mergePaths(...paths) {
  const p = new opentype.Path();
  for (const part of paths) {
    if (!part) continue;
    if (part.commands) {
      p.commands = p.commands.concat(part.commands);
    }
  }
  return p;
}

/* Uppercase glyphs: geometric, slightly rounded, Candara-ish */

const upperBuilders = {
  "A": () => {
    const aw = WIDTH.wide;
    const mid = aw / 2;
    const s = STROKE * 0.9;
    const p = new opentype.Path();
    p.moveTo(r(STROKE), BASE);
    p.lineTo(r(STROKE + s), BASE);
    p.lineTo(r(mid), CAP);
    p.lineTo(r(mid - s), CAP);
    p.close();
    p.moveTo(r(aw - STROKE), BASE);
    p.lineTo(r(aw - STROKE - s), BASE);
    p.lineTo(r(mid - s * 0.3), CAP);
    p.lineTo(r(mid + s * 0.3), CAP);
    p.close();
    p.commands = p.commands.concat(
      hBar(XH + 20, STROKE * 1.4, aw - STROKE * 1.4, STROKE * 0.78).commands
    );
    return { path: p, width: aw };
  },
  "B": () => {
    const aw = WIDTH.wide;
    const left = STROKE * 0.8;
    const stem = vBar(left, BASE, CAP, STROKE * 0.9);
    const top = roundRect(left, CAP - 310, aw - left * 1.8, 160, 46);
    const bot = roundRect(left, BASE + 70, aw - left * 1.8, 160, 46);
    return { path: mergePaths(stem, top, bot), width: aw };
  },
  "C": () => {
    const aw = WIDTH.wide;
    const outer = roundRect(STROKE, BASE + 40, aw - STROKE * 2, CAP - 80, 120);
    const inner = roundRect(STROKE + 70, BASE + 90, aw - STROKE * 2 - 140, CAP - 180, 90);
    const p = mergePaths(outer, inner);
    // knock right side open by overlaying a vertical gap
    return { path: p, width: aw };
  },
  "D": () => {
    const aw = WIDTH.wide;
    const left = STROKE * 0.85;
    const stem = vBar(left, BASE, CAP, STROKE * 0.9);
    const bowl = roundRect(left, BASE + 40, aw - left * 1.5, CAP - 80, 90);
    return { path: mergePaths(stem, bowl), width: aw };
  },
  "E": () => {
    const aw = WIDTH.default;
    const x = STROKE * 0.85;
    return {
      path: mergePaths(
        vBar(x, BASE, CAP, STROKE * 0.9),
        hBar(CAP, x, aw - STROKE * 0.5),
        hBar(XH + 10, x, aw - STROKE * 0.9, STROKE * 0.75),
        hBar(BASE + 40, x, aw - STROKE * 0.5)
      ),
      width: aw
    };
  },
  "F": () => {
    const aw = WIDTH.default;
    const x = STROKE * 0.85;
    return {
      path: mergePaths(
        vBar(x, BASE, CAP, STROKE * 0.9),
        hBar(CAP, x, aw - STROKE * 0.5),
        hBar(XH + 10, x, aw - STROKE * 0.9, STROKE * 0.75)
      ),
      width: aw
    };
  },
  "G": () => {
    const aw = WIDTH.wide;
    const outer = roundRect(STROKE, BASE + 40, aw - STROKE * 2, CAP - 80, 110);
    const inner = roundRect(STROKE + 70, BASE + 90, aw - STROKE * 2 - 160, CAP - 180, 80);
    const cut = hBar(XH + 20, aw * 0.35, aw - STROKE * 0.8, STROKE * 0.8);
    const p = mergePaths(outer, inner, cut);
    return { path: p, width: aw };
  },
  "H": () => {
    const aw = WIDTH.wide;
    const l = STROKE * 0.85;
    const rgt = aw - STROKE * 1.5;
    return {
      path: mergePaths(
        vBar(l, BASE, CAP),
        vBar(rgt, BASE, CAP),
        hBar(XH + 20, l, rgt + STROKE)
      ),
      width: aw
    };
  },
  "I": () => {
    const aw = WIDTH.narrow;
    const c = aw / 2 - STROKE / 2;
    return {
      path: mergePaths(
        hBar(CAP, STROKE * 0.4, aw - STROKE * 0.4, STROKE * 0.8),
        hBar(BASE + 40, STROKE * 0.4, aw - STROKE * 0.4, STROKE * 0.8),
        vBar(c, BASE + 40 + STROKE * 0.5, CAP - STROKE * 1.4, STROKE * 0.8)
      ),
      width: aw
    };
  },
  "J": () => {
    const aw = WIDTH.default;
    const top = hBar(CAP, STROKE * 0.4, aw - STROKE * 0.4, STROKE * 0.8);
    const stem = vBar(aw - STROKE * 1.6, BASE + 110, CAP - STROKE, STROKE * 0.8);
    const bowl = roundRect(aw * 0.35, BASE, aw * 0.4, 120, 50);
    return { path: mergePaths(top, stem, bowl), width: aw };
  },
  "K": () => {
    const aw = WIDTH.wide;
    const l = STROKE * 0.85;
    const s = STROKE * 0.8;
    const p1 = vBar(l, BASE, CAP);
    const p2 = new opentype.Path();
    p2.moveTo(aw - STROKE, CAP);
    p2.lineTo(aw - STROKE - s, CAP);
    p2.lineTo(l + STROKE * 1.5, XH + 40);
    p2.lineTo(l + STROKE * 2.2, XH + 10);
    p2.close();
    const p3 = new opentype.Path();
    p3.moveTo(aw - STROKE, BASE);
    p3.lineTo(aw - STROKE - s, BASE + STROKE);
    p3.lineTo(l + STROKE * 1.5, XH - 40);
    p3.lineTo(l + STROKE * 2.2, XH - 10);
    p3.close();
    return { path: mergePaths(p1, p2, p3), width: aw };
  },
  "L": () => {
    const aw = WIDTH.default;
    const l = STROKE * 0.85;
    return {
      path: mergePaths(
        vBar(l, BASE, CAP),
        hBar(BASE + 40, l, aw - STROKE * 0.5)
      ),
      width: aw
    };
  },
  "M": () => {
    const aw = WIDTH.wide + 40;
    const s = STROKE * 0.9;
    const left = vBar(STROKE, BASE, CAP, s);
    const right = vBar(aw - STROKE * 1.8, BASE, CAP, s);
    const mid = new opentype.Path();
    mid.moveTo(STROKE + s, CAP);
    mid.lineTo(aw / 2, CAP * 0.45);
    mid.lineTo(aw - STROKE * 1.8 - s, CAP);
    mid.lineTo(aw - STROKE * 1.8 - s * 1.4, CAP);
    mid.lineTo(aw / 2, CAP * 0.56);
    mid.lineTo(STROKE + s * 1.4, CAP);
    mid.close();
    return { path: mergePaths(left, right, mid), width: aw };
  },
  "N": () => {
    const aw = WIDTH.wide;
    const s = STROKE * 0.9;
    const left = vBar(STROKE, BASE, CAP, s);
    const right = vBar(aw - STROKE * 1.6, BASE, CAP, s);
    const diag = new opentype.Path();
    diag.moveTo(STROKE + s, CAP);
    diag.lineTo(STROKE + s * 1.7, CAP);
    diag.lineTo(aw - STROKE * 1.6 - s, BASE);
    diag.lineTo(aw - STROKE * 1.6 - s * 1.7, BASE);
    diag.close();
    return { path: mergePaths(left, right, diag), width: aw };
  },
  "O": () => {
    const aw = WIDTH.wide;
    const outer = roundRect(STROKE, BASE + 40, aw - STROKE * 2, CAP - 80, 110);
    const inner = roundRect(STROKE + 70, BASE + 90, aw - STROKE * 2 - 140, CAP - 180, 80);
    return { path: mergePaths(outer, inner), width: aw };
  },
  "P": () => {
    const aw = WIDTH.default;
    const l = STROKE * 0.85;
    const stem = vBar(l, BASE, CAP, STROKE * 0.9);
    const bowl = roundRect(l, CAP - 290, aw - l * 1.7, 210, 60);
    return { path: mergePaths(stem, bowl), width: aw };
  },
  "Q": () => {
    const base = upperBuilders["O"]();
    const aw = base.width;
    const tail = new opentype.Path();
    tail.moveTo(aw * 0.55, BASE + 140);
    tail.lineTo(aw * 0.82, BASE - 10);
    tail.lineTo(aw * 0.76, BASE + 70);
    tail.lineTo(aw * 0.50, BASE + 170);
    tail.close();
    return { path: mergePaths(base.path, tail), width: aw };
  },
  "R": () => {
    const aw = WIDTH.wide;
    const l = STROKE * 0.85;
    const stem = vBar(l, BASE, CAP, STROKE * 0.9);
    const bowl = roundRect(l, CAP - 290, aw - l * 1.9, 210, 50);
    const leg = new opentype.Path();
    leg.moveTo(aw - STROKE, BASE);
    leg.lineTo(aw - STROKE - STROKE * 0.9, BASE + STROKE);
    leg.lineTo(l + STROKE * 1.8, XH - 40);
    leg.lineTo(l + STROKE * 2.4, XH - 80);
    leg.close();
    return { path: mergePaths(stem, bowl, leg), width: aw };
  },
  "S": () => {
    const aw = WIDTH.default;
    const p = new opentype.Path();
    const top = CAP - 20;
    const mid = (CAP + BASE) / 2;
    const bot = BASE + 40;
    p.moveTo(aw - 40, top);
    p.quadraticCurveTo(aw * 0.2, CAP + 10, 60, mid + 90);
    p.quadraticCurveTo(20, mid + 10, aw * 0.3, mid - 40);
    p.quadraticCurveTo(aw - 20, mid - 90, aw - 40, bot - 10);
    p.quadraticCurveTo(aw * 0.5, bot - 70, 80, bot + 10);
    p.quadraticCurveTo(aw * 0.5, bot + 40, aw - 40, top - 40);
    p.close();
    return { path: p, width: aw };
  },
  "T": () => {
    const aw = WIDTH.wide;
    const c = aw / 2 - STROKE / 2;
    return {
      path: mergePaths(
        hBar(CAP, STROKE * 0.4, aw - STROKE * 0.4),
        vBar(c, BASE, CAP, STROKE * 0.9)
      ),
      width: aw
    };
  },
  "U": () => {
    const aw = WIDTH.wide;
    const s = STROKE * 0.9;
    const left = vBar(STROKE, BASE + 140, CAP, s);
    const right = vBar(aw - STROKE * 2, BASE + 140, CAP, s);
    const bowl = roundRect(STROKE, BASE + 40, aw - STROKE * 3, 140, 80);
    return { path: mergePaths(left, right, bowl), width: aw };
  },
  "V": () => {
    const aw = WIDTH.wide;
    const s = STROKE * 0.9;
    const mid = aw / 2;
    const p1 = new opentype.Path();
    p1.moveTo(STROKE, CAP);
    p1.lineTo(STROKE + s, CAP);
    p1.lineTo(mid, BASE);
    p1.lineTo(mid - s, BASE);
    p1.close();
    const p2 = new opentype.Path();
    p2.moveTo(aw - STROKE, CAP);
    p2.lineTo(aw - STROKE - s, CAP);
    p2.lineTo(mid, BASE);
    p2.lineTo(mid + s, BASE);
    p2.close();
    return { path: mergePaths(p1, p2), width: aw };
  },
  "W": () => {
    const aw = WIDTH.wide + 80;
    const s = STROKE * 0.8;
    const x1 = STROKE;
    const x2 = aw * 0.34;
    const x3 = aw * 0.66;
    const x4 = aw - STROKE;
    const yTop = CAP;
    const yBot = BASE;
    const p = new opentype.Path();
    p.moveTo(x1, yTop);
    p.lineTo(x1 + s, yTop);
    p.lineTo(x2, yBot);
    p.lineTo(x2 - s, yBot);
    p.close();
    p.moveTo(x2, yBot);
    p.lineTo(x2 + s, yBot);
    p.lineTo(x3, yTop * 0.52);
    p.lineTo(x3 - s, yTop * 0.52);
    p.close();
    p.moveTo(x3, yTop * 0.52);
    p.lineTo(x3 + s, yTop * 0.52);
    p.lineTo(x4, yTop);
    p.lineTo(x4 - s, yTop);
    p.close();
    return { path: p, width: aw };
  },
  "X": () => {
    const aw = WIDTH.wide;
    const s = STROKE * 0.8;
    const p1 = new opentype.Path();
    p1.moveTo(STROKE, CAP);
    p1.lineTo(STROKE + s, CAP);
    p1.lineTo(aw - STROKE, BASE);
    p1.lineTo(aw - STROKE - s, BASE);
    p1.close();
    const p2 = new opentype.Path();
    p2.moveTo(aw - STROKE, CAP);
    p2.lineTo(aw - STROKE - s, CAP);
    p2.lineTo(STROKE, BASE);
    p2.lineTo(STROKE + s, BASE);
    p2.close();
    return { path: mergePaths(p1, p2), width: aw };
  },
  "Y": () => {
    const aw = WIDTH.wide;
    const s = STROKE * 0.85;
    const mid = aw / 2;
    const arms1 = new opentype.Path();
    arms1.moveTo(STROKE, CAP);
    arms1.lineTo(STROKE + s, CAP);
    arms1.lineTo(mid, XH);
    arms1.lineTo(mid - s, XH);
    arms1.close();
    const arms2 = new opentype.Path();
    arms2.moveTo(aw - STROKE, CAP);
    arms2.lineTo(aw - STROKE - s, CAP);
    arms2.lineTo(mid, XH);
    arms2.lineTo(mid + s, XH);
    arms2.close();
    const stem = vBar(mid - s / 2, BASE, XH, s * 0.9);
    return { path: mergePaths(arms1, arms2, stem), width: aw };
  },
  "Z": () => {
    const aw = WIDTH.wide;
    const top = hBar(CAP, STROKE * 0.4, aw - STROKE * 0.4);
    const bot = hBar(BASE + 40, STROKE * 0.6, aw - STROKE * 0.4);
    const diag = new opentype.Path();
    diag.moveTo(aw - STROKE * 0.9, CAP - STROKE);
    diag.lineTo(aw - STROKE * 1.5, CAP - STROKE);
    diag.lineTo(STROKE * 0.7, BASE + 40 + STROKE);
    diag.lineTo(STROKE * 1.3, BASE + 40 + STROKE);
    diag.close();
    return { path: mergePaths(top, bot, diag), width: aw };
  }
};

/* Lowercase: softer, shorter, consistent with uppercase rhythm */

function lcStemLeft() {
  return STROKE * 0.9;
}
function lcXWidth() {
  return WIDTH.default;
}

const lowerBuilders = {
  "a": () => {
    const aw = lcXWidth();
    const bowl = roundRect(60, BASE + 80, aw - 120, XH - 100, 70);
    const inner = roundRect(90, BASE + 110, aw - 180, XH - 160, 50);
    const stem = vBar(aw - 120, XH - 40, XH + 40, STROKE * 0.7);
    return { path: mergePaths(bowl, inner, stem), width: aw };
  },
  "b": () => {
    const aw = lcXWidth();
    const x = lcStemLeft();
    const stem = vBar(x, BASE, CAP, STROKE * 0.8);
    const bowl = roundRect(x, BASE + 80, aw - x - 40, XH - 80, 70);
    return { path: mergePaths(stem, bowl), width: aw };
  },
  "c": () => {
    const aw = lcXWidth();
    const outer = roundRect(60, BASE + 80, aw - 120, XH - 80, 80);
    const inner = roundRect(100, BASE + 110, aw - 200, XH - 140, 60);
    return { path: mergePaths(outer, inner), width: aw };
  },
  "d": () => {
    const aw = lcXWidth();
    const stemX = aw - lcStemLeft() - STROKE * 0.2;
    const stem = vBar(stemX, BASE, CAP, STROKE * 0.8);
    const bowl = roundRect(60, BASE + 80, aw - 120, XH - 80, 70);
    return { path: mergePaths(bowl, stem), width: aw };
  },
  "e": () => {
    const aw = lcXWidth();
    const outer = roundRect(60, BASE + 80, aw - 120, XH - 80, 80);
    const bar = hBar(XH - 20, 80, aw - 80, STROKE * 0.6);
    return { path: mergePaths(outer, bar), width: aw };
  },
  "f": () => {
    const aw = WIDTH.narrow;
    const x = lcStemLeft();
    const stem = vBar(x, BASE - 40, CAP, STROKE * 0.7);
    const bar = hBar(XH, x - 10, aw - 40, STROKE * 0.55);
    return { path: mergePaths(stem, bar), width: aw };
  },
  "g": () => {
    const aw = lcXWidth();
    const bowl = roundRect(60, BASE + 80, aw - 120, XH - 80, 70);
    const tail = roundRect(aw / 2 - 40, DSC, 80, BASE + 80 - DSC, 40);
    return { path: mergePaths(bowl, tail), width: aw };
  },
  "h": () => {
    const aw = lcXWidth();
    const x = lcStemLeft();
    const stem = vBar(x, BASE, CAP, STROKE * 0.8);
    const arch = roundRect(x, XH - 80, aw - x - 40, 80, 50);
    return { path: mergePaths(stem, arch), width: aw };
  },
  "i": () => {
    const aw = WIDTH.narrow;
    const stem = vBar(aw / 2 - STROKE * 0.35, BASE, XH, STROKE * 0.7);
    const dot = roundRect(aw / 2 - 18, XH + 60, 36, 36, 18);
    return { path: mergePaths(stem, dot), width: aw };
  },
  "j": () => {
    const aw = WIDTH.narrow;
    const stem = vBar(aw / 2 - STROKE * 0.35, DSC, XH, STROKE * 0.7);
    const dot = roundRect(aw / 2 - 18, XH + 60, 36, 36, 18);
    return { path: mergePaths(stem, dot), width: aw };
  },
  "k": () => {
    const aw = lcXWidth();
    const x = lcStemLeft();
    const stem = vBar(x, BASE, CAP, STROKE * 0.8);
    const arm = new opentype.Path();
    arm.moveTo(x + STROKE * 0.8, XH - 10);
    arm.lineTo(aw - 40, BASE);
    arm.lineTo(aw - 70, BASE);
    arm.lineTo(x + STROKE * 0.6, XH - 40);
    arm.close();
    const arm2 = new opentype.Path();
    arm2.moveTo(x + STROKE * 0.8, XH + 10);
    arm2.lineTo(aw - 60, CAP * 0.55);
    arm2.lineTo(aw - 90, CAP * 0.55);
    arm2.lineTo(x + STROKE * 0.6, XH + 40);
    arm2.close();
    return { path: mergePaths(stem, arm, arm2), width: aw };
  },
  "l": () => {
    const aw = WIDTH.narrow;
    const stem = vBar(aw / 2 - STROKE * 0.35, BASE, CAP, STROKE * 0.7);
    return { path: stem, width: aw };
  },
  "m": () => {
    const aw = WIDTH.wide + 40;
    const x = lcStemLeft();
    const s1 = vBar(x, BASE, XH, STROKE * 0.7);
    const arch1 = roundRect(x, XH - 70, (aw - x) / 2 - 40, 70, 40);
    const s2x = x + (aw - x) / 2 - 20;
    const s2 = vBar(s2x, BASE, XH, STROKE * 0.7);
    const arch2 = roundRect(s2x, XH - 70, aw - s2x - 40, 70, 40);
    return { path: mergePaths(s1, arch1, s2, arch2), width: aw };
  },
  "n": () => {
    const aw = lcXWidth();
    const x = lcStemLeft();
    const stem = vBar(x, BASE, XH, STROKE * 0.7);
    const arch = roundRect(x, XH - 70, aw - x - 40, 70, 40);
    return { path: mergePaths(stem, arch), width: aw };
  },
  "o": () => {
    const aw = lcXWidth();
    const outer = roundRect(60, BASE + 80, aw - 120, XH - 80, 80);
    const inner = roundRect(95, BASE + 110, aw - 190, XH - 140, 60);
    return { path: mergePaths(outer, inner), width: aw };
  },
  "p": () => {
    const aw = lcXWidth();
    const x = lcStemLeft();
    const stem = vBar(x, DSC, XH, STROKE * 0.8);
    const bowl = roundRect(x, BASE + 80, aw - x - 40, XH - 80, 70);
    return { path: mergePaths(stem, bowl), width: aw };
  },
  "q": () => {
    const aw = lcXWidth();
    const stemX = aw - lcStemLeft() - STROKE * 0.2;
    const stem = vBar(stemX, DSC, XH, STROKE * 0.8);
    const bowl = roundRect(60, BASE + 80, aw - 120, XH - 80, 70);
    return { path: mergePaths(bowl, stem), width: aw };
  },
  "r": () => {
    const aw = WIDTH.default;
    const x = lcStemLeft();
    const stem = vBar(x, BASE, XH, STROKE * 0.7);
    const shoulder = hBar(XH - 10, x + STROKE * 0.6, aw - 80, STROKE * 0.55);
    return { path: mergePaths(stem, shoulder), width: aw };
  },
  "s": () => {
    const aw = lcXWidth();
    const p = new opentype.Path();
    const top = XH - 10;
    const mid = (XH + BASE + 80) / 2;
    const bot = BASE + 80;
    p.moveTo(aw - 40, top);
    p.quadraticCurveTo(aw * 0.2, XH + 20, 60, mid + 30);
    p.quadraticCurveTo(20, mid - 10, aw * 0.3, mid - 40);
    p.quadraticCurveTo(aw - 20, mid - 70, aw - 40, bot - 10);
    p.quadraticCurveTo(aw * 0.5, bot - 40, 60, bot + 10);
    p.quadraticCurveTo(aw * 0.6, bot + 20, aw - 40, top - 40);
    p.close();
    return { path: p, width: aw };
  },
  "t": () => {
    const aw = WIDTH.narrow;
    const stem = vBar(aw / 2 - STROKE * 0.35, BASE, CAP - 40, STROKE * 0.7);
    const bar = hBar(XH, 40, aw - 40, STROKE * 0.55);
    return { path: mergePaths(stem, bar), width: aw };
  },
  "u": () => {
    const aw = lcXWidth();
    const bowl = roundRect(60, BASE + 40, aw - 120, XH - 40, 70);
    const rightStem = vBar(aw - 100, BASE + 40, XH, STROKE * 0.7);
    return { path: mergePaths(bowl, rightStem), width: aw };
  },
  "v": () => {
    const aw = lcXWidth();
    const s = STROKE * 0.7;
    const mid = aw / 2;
    const p1 = new opentype.Path();
    p1.moveTo(60, XH);
    p1.lineTo(60 + s, XH);
    p1.lineTo(mid, BASE);
    p1.lineTo(mid - s, BASE);
    p1.close();
    const p2 = new opentype.Path();
    p2.moveTo(aw - 60, XH);
    p2.lineTo(aw - 60 - s, XH);
    p2.lineTo(mid, BASE);
    p2.lineTo(mid + s, BASE);
    p2.close();
    return { path: mergePaths(p1, p2), width: aw };
  },
  "w": () => {
    const aw = WIDTH.wide + 40;
    const s = STROKE * 0.65;
    const x1 = 50;
    const x2 = aw * 0.36;
    const x3 = aw * 0.64;
    const x4 = aw - 50;
    const yTop = XH;
    const yBot = BASE;
    const p = new opentype.Path();
    p.moveTo(x1, yTop);
    p.lineTo(x1 + s, yTop);
    p.lineTo(x2, yBot);
    p.lineTo(x2 - s, yBot);
    p.close();
    p.moveTo(x2, yBot);
    p.lineTo(x2 + s, yBot);
    p.lineTo(x3, yTop * 0.55);
    p.lineTo(x3 - s, yTop * 0.55);
    p.close();
    p.moveTo(x3, yTop * 0.55);
    p.lineTo(x3 + s, yTop * 0.55);
    p.lineTo(x4, yTop);
    p.lineTo(x4 - s, yTop);
    p.close();
    return { path: p, width: aw };
  },
  "x": () => {
    const aw = lcXWidth();
    const s = STROKE * 0.65;
    const p1 = new opentype.Path();
    p1.moveTo(60, XH);
    p1.lineTo(60 + s, XH);
    p1.lineTo(aw - 60, BASE);
    p1.lineTo(aw - 60 - s, BASE);
    p1.close();
    const p2 = new opentype.Path();
    p2.moveTo(aw - 60, XH);
    p2.lineTo(aw - 60 - s, XH);
    p2.lineTo(60, BASE);
    p2.lineTo(60 + s, BASE);
    p2.close();
    return { path: mergePaths(p1, p2), width: aw };
  },
  "y": () => {
    const aw = lcXWidth();
    const s = STROKE * 0.7;
    const mid = aw / 2;
    const p1 = new opentype.Path();
    p1.moveTo(60, XH);
    p1.lineTo(60 + s, XH);
    p1.lineTo(mid, BASE);
    p1.lineTo(mid - s, BASE);
    p1.close();
    const p2 = new opentype.Path();
    p2.moveTo(aw - 60, XH);
    p2.lineTo(aw - 60 - s, XH);
    p2.lineTo(mid, DSC);
    p2.lineTo(mid + s, DSC);
    p2.close();
    return { path: mergePaths(p1, p2), width: aw };
  },
  "z": () => {
    const aw = lcXWidth();
    const top = hBar(XH, 60, aw - 60, STROKE * 0.55);
    const bot = hBar(BASE + 40, 60, aw - 60, STROKE * 0.55);
    const diag = new opentype.Path();
    diag.moveTo(aw - 60, XH - STROKE * 0.5);
    diag.lineTo(aw - 80, XH - STROKE * 0.5);
    diag.lineTo(60, BASE + 40 + STROKE * 0.5);
    diag.lineTo(80, BASE + 40 + STROKE * 0.5);
    diag.close();
    return { path: mergePaths(top, bot, diag), width: aw };
  }
};

/* Digits: rounded rectangular, consistent weight */

function digitBuilder(d) {
  const aw = WIDTH.default;
  switch (d) {
    case "0": {
      const outer = roundRect(80, BASE + 40, aw - 160, CAP - 160, 90);
      const inner = roundRect(120, BASE + 80, aw - 240, CAP - 240, 70);
      return { path: mergePaths(outer, inner), width: aw };
    }
    case "1": {
      const stem = vBar(aw / 2 - STROKE * 0.4, BASE + 40, CAP - 40, STROKE * 0.8);
      const base = hBar(BASE + 40, aw / 2 - 80, aw / 2 + 80, STROKE * 0.7);
      return { path: mergePaths(stem, base), width: aw };
    }
    case "2": {
      const top = hBar(CAP - 40, 80, aw - 80, STROKE * 0.7);
      const curve = new opentype.Path();
      curve.moveTo(aw - 80, CAP - 40);
      curve.quadraticCurveTo(aw - 10, XH + 40, aw * 0.4, XH);
      curve.quadraticCurveTo(80, XH - 40, 80, BASE + 40);
      const base = hBar(BASE + 40, 80, aw - 80, STROKE * 0.7);
      return { path: mergePaths(top, curve, base), width: aw };
    }
    case "3": {
      const top = roundRect(80, CAP - 260, aw - 160, 90, 40);
      const bot = roundRect(80, BASE + 80, aw - 160, 90, 40);
      const mid = new opentype.Path();
      mid.moveTo(aw - 80, CAP - 170);
      mid.quadraticCurveTo(aw, XH, aw - 80, BASE + 170);
      mid.quadraticCurveTo(aw - 40, BASE + 210, aw - 40, BASE + 230);
      return { path: mergePaths(top, bot, mid), width: aw };
    }
    case "4": {
      const stem = vBar(aw - 120, BASE + 40, CAP, STROKE * 0.8);
      const diag = new opentype.Path();
      diag.moveTo(80, CAP - 180);
      diag.lineTo(80 + STROKE * 0.7, CAP - 180);
      diag.lineTo(aw - 120, BASE + 40);
      diag.lineTo(aw - 140, BASE + 40);
      diag.close();
      const bar = hBar(CAP - 200, 80, aw - 120, STROKE * 0.7);
      return { path: mergePaths(stem, diag, bar), width: aw };
    }
    case "5": {
      const top = hBar(CAP - 40, 80, aw - 80, STROKE * 0.7);
      const left = vBar(80, CAP - 260, CAP - 40, STROKE * 0.7);
      const mid = hBar(CAP - 260, 80, aw - 80, STROKE * 0.7);
      const bowl = roundRect(80, BASE + 80, aw - 160, 120, 60);
      return { path: mergePaths(top, left, mid, bowl), width: aw };
    }
    case "6": {
      const loop = roundRect(80, BASE + 40, aw - 160, CAP - 220, 80);
      const inner = roundRect(120, BASE + 80, aw - 240, CAP - 260, 60);
      const hook = new opentype.Path();
      hook.moveTo(aw - 80, CAP - 220);
      hook.quadraticCurveTo(aw - 10, CAP - 260, aw - 60, CAP - 320);
      return { path: mergePaths(loop, inner, hook), width: aw };
    }
    case "7": {
      const top = hBar(CAP - 40, 80, aw - 80, STROKE * 0.7);
      const diag = new opentype.Path();
      diag.moveTo(aw - 80, CAP - 40);
      diag.lineTo(aw - 80 - STROKE * 0.8, CAP - 40);
      diag.lineTo(80, BASE + 40);
      diag.lineTo(80 + STROKE * 0.8, BASE + 40);
      diag.close();
      return { path: mergePaths(top, diag), width: aw };
    }
    case "8": {
      const top = roundRect(90, CAP - 260, aw - 180, 110, 50);
      const bot = roundRect(90, BASE + 60, aw - 180, 140, 60);
      const midHole = roundRect(120, BASE + 110, aw - 240, 60, 30);
      return { path: mergePaths(top, bot, midHole), width: aw };
    }
    case "9": {
      const loop = roundRect(80, BASE + 160, aw - 160, CAP - 220, 80);
      const inner = roundRect(120, BASE + 180, aw - 240, CAP - 260, 60);
      const hook = new opentype.Path();
      hook.moveTo(80, BASE + 160);
      hook.quadraticCurveTo(40, BASE + 120, 80, BASE + 80);
      return { path: mergePaths(loop, inner, hook), width: aw };
    }
    default:
      return { path: new opentype.Path(), width: aw };
  }
}

/* Punctuation & symbols */

function punctBuilder(ch) {
  const aw = WIDTH.default;
  if (ch === ".") {
    return {
      path: roundRect(aw / 2 - 16, BASE + 40, 32, 40, 16),
      width: WIDTH.space
    };
  }
  if (ch === ",") {
    const p = roundRect(aw / 2 - 16, BASE + 40, 32, 40, 16);
    const tail = new opentype.Path();
    tail.moveTo(aw / 2 + 4, BASE + 40);
    tail.lineTo(aw / 2 + 20, BASE - 10);
    tail.lineTo(aw / 2 + 4, BASE);
    tail.close();
    return { path: mergePaths(p, tail), width: WIDTH.space };
  }
  if (ch === ":" || ch === ";") {
    const top = roundRect(aw / 2 - 16, XH - 40, 32, 40, 16);
    const bot = roundRect(aw / 2 - 16, BASE + 40, 32, 40, 16);
    let p = mergePaths(top, bot);
    if (ch === ";") {
      const tail = new opentype.Path();
      tail.moveTo(aw / 2 + 4, BASE + 40);
      tail.lineTo(aw / 2 + 20, BASE - 10);
      tail.lineTo(aw / 2 + 4, BASE);
      tail.close();
      p = mergePaths(p, tail);
    }
    return { path: p, width: WIDTH.space };
  }
  if (ch === "!") {
    const stem = vBar(aw / 2 - STROKE * 0.3, BASE + 120, CAP, STROKE * 0.6);
    const dot = roundRect(aw / 2 - 16, BASE + 40, 32, 40, 16);
    return { path: mergePaths(stem, dot), width: WIDTH.narrow };
  }
  if (ch === "?") {
    const hook = new opentype.Path();
    hook.moveTo(aw / 2 - 40, CAP - 180);
    hook.quadraticCurveTo(aw - 40, CAP, aw - 40, XH);
    hook.quadraticCurveTo(aw - 40, XH - 40, aw / 2, XH - 60);
    hook.lineTo(aw / 2, BASE + 120);
    const dot = roundRect(aw / 2 - 16, BASE + 40, 32, 40, 16);
    return { path: mergePaths(hook, dot), width: aw };
  }
  if (ch === "-" || ch === "–" || ch === "—") {
    const len = ch === "-" ? aw * 0.4 : ch === "–" ? aw * 0.6 : aw * 0.9;
    const bar = hBar(BASE + 260, (aw - len) / 2, (aw + len) / 2, STROKE * 0.4);
    return { path: bar, width: len + 80 };
  }
  if (ch === "(" || ch === ")") {
    const p = new opentype.Path();
    const left = ch === "(";
    const x = left ? aw / 2 - 40 : aw / 2 + 40;
    const dir = left ? -1 : 1;
    p.moveTo(x + dir * 20, CAP - 40);
    p.quadraticCurveTo(x + dir * 80, (CAP + BASE) / 2, x + dir * 20, BASE + 40);
    p.quadraticCurveTo(x + dir * 40, BASE + 80, x + dir * 40, BASE + 120);
    return { path: p, width: WIDTH.space + 40 };
  }
  if (ch === "'") {
    const p = new opentype.Path();
    p.moveTo(aw / 2 - 10, CAP);
    p.lineTo(aw / 2 + 10, CAP);
    p.lineTo(aw / 2, CAP - 60);
    p.close();
    return { path: p, width: WIDTH.space };
  }
  if (ch === "\"") {
    const left = punctBuilder("'").path;
    const right = new opentype.Path();
    right.commands = left.commands.map(cmd => {
      const c = { ...cmd };
      if (c.x !== undefined) c.x += 24;
      if (c.x1 !== undefined) c.x1 += 24;
      if (c.x2 !== undefined) c.x2 += 24;
      return c;
    });
    return { path: mergePaths(left, right), width: WIDTH.space + 16 };
  }
  if (ch === "@") {
    const outer = roundRect(40, BASE + 40, aw + 120, CAP - 160, 90);
    const inner = roundRect(120, BASE + 80, aw, CAP - 220, 70);
    return { path: mergePaths(outer, inner), width: aw + 160 };
  }
  if (ch === "#") {
    const bar1 = hBar(XH + 40, 80, aw - 80, STROKE * 0.35);
    const bar2 = hBar(BASE + 200, 80, aw - 80, STROKE * 0.35);
    const v1 = vBar(aw / 2 - 70, BASE + 40, CAP - 40, STROKE * 0.35);
    const v2 = vBar(aw / 2 + 20, BASE + 40, CAP - 40, STROKE * 0.35);
    return { path: mergePaths(bar1, bar2, v1, v2), width: aw };
  }
  if (ch === "$") {
    const s = digitBuilder("5").path;
    return { path: s, width: aw };
  }
  if (ch === "%") {
    const slash = new opentype.Path();
    slash.moveTo(80, BASE + 40);
    slash.lineTo(120, BASE + 40);
    slash.lineTo(aw - 80, CAP - 40);
    slash.lineTo(aw - 120, CAP - 40);
    slash.close();
    const o1 = roundRect(80, CAP - 220, 80, 80, 30);
    const o2 = roundRect(aw - 160, BASE + 40, 80, 80, 30);
    return { path: mergePaths(slash, o1, o2), width: aw };
  }
  if (ch === "&") {
    const p = new opentype.Path();
    p.moveTo(aw - 80, CAP - 220);
    p.quadraticCurveTo(aw - 40, CAP - 320, aw / 2, CAP - 320);
    p.quadraticCurveTo(40, CAP - 320, 40, CAP - 200);
    p.quadraticCurveTo(40, CAP - 80, aw / 2, CAP - 80);
    p.quadraticCurveTo(aw, CAP - 60, aw / 2, BASE + 40);
    p.quadraticCurveTo(40, BASE, aw / 2, BASE);
    return { path: p, width: aw };
  }
  if (ch === "*") {
    const p = new opentype.Path();
    const cx = aw / 2;
    const cy = (BASE + CAP) / 2;
    const r0 = 40;
    for (let i = 0; i < 6; i++) {
      const a1 = (Math.PI * 2 * i) / 6;
      const a2 = (Math.PI * 2 * (i + 1)) / 6;
      p.moveTo(cx, cy);
      p.lineTo(cx + r0 * Math.cos(a1), cy + r0 * Math.sin(a1));
      p.lineTo(cx + r0 * Math.cos(a2), cy + r0 * Math.sin(a2));
      p.close();
    }
    return { path: p, width: aw };
  }
  if (ch === "+") {
    const h = hBar((BASE + CAP) / 2 + STROKE * 0.2, 80, aw - 80, STROKE * 0.5);
    const v = vBar(aw / 2 - STROKE * 0.25, BASE + 80, CAP - 80, STROKE * 0.5);
    return { path: mergePaths(h, v), width: aw };
  }
  if (ch === "/") {
    const p = new opentype.Path();
    p.moveTo(aw - 80, CAP);
    p.lineTo(aw - 120, CAP);
    p.lineTo(80, BASE);
    p.lineTo(120, BASE);
    p.close();
    return { path: p, width: aw };
  }
  if (ch === "=") {
    const h1 = hBar((BASE + CAP) / 2 + 40, 80, aw - 80, STROKE * 0.4);
    const h2 = hBar((BASE + CAP) / 2 - 40, 80, aw - 80, STROKE * 0.4);
    return { path: mergePaths(h1, h2), width: aw };
  }
  if (ch === "_") {
    const bar = hBar(BASE + 10, 40, aw - 40, STROKE * 0.25);
    return { path: bar, width: aw };
  }
  return { path: new opentype.Path(), width: aw };
}

/* Public builder */

export function buildGlyph(ch) {
  if (ch === " ") {
    return { path: new opentype.Path(), width: WIDTH.space };
  }
  if (upperBuilders[ch]) return upperBuilders[ch]();
  if (lowerBuilders[ch]) return lowerBuilders[ch]();
  if (CHARSET.digits.includes(ch)) return digitBuilder(ch);
  if (COMMON_PUNCT.includes(ch)) return punctBuilder(ch);
  // Fallback: empty but with width, to avoid system fallback.
  return { path: new opentype.Path(), width: WIDTH.default };
}

export const METRICS = {
  unitsPerEm: UPEM,
  ascender: ASC,
  descender: DSC
};

export const SUPPORTED_CHARS = (() => {
  const set = new Set();
  for (const s of Object.values(CHARSET)) for (const ch of s) set.add(ch);
  for (const ch of COMMON_PUNCT) set.add(ch);
  set.add(" ");
  return Array.from(set);
})();
