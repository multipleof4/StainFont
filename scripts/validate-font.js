import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import opentype from "opentype.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fontPath = path.join(__dirname, "..", "dist", "Stain-Regular.ttf");

if (!fs.existsSync(fontPath)) {
  console.error("Font not found:", fontPath);
  process.exit(1);
}

try {
  const font = opentype.loadSync(fontPath);
  if (!font.glyphs || font.glyphs.length === 0) {
    console.error("Font has no glyphs");
    process.exit(1);
  }
  const required = ["A", "B", "C", "D", "E", "F", "G"];
  for (const ch of required) {
    const g = font.charToGlyph(ch);
    if (!g || !g.path || g.path.commands.length === 0) {
      console.error("Missing or empty glyph for", ch);
      process.exit(1);
    }
  }
  console.log("Font validation passed.");
} catch (e) {
  console.error("Error validating font:", e);
  process.exit(1);
}
