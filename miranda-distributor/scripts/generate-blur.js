/* scripts/generate-blur.js
   Genera blur placeholders para /public/images/hero/*.{jpg,jpeg,png,webp}
   y escribe src/data/hero-blur.json
*/
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const INPUT_DIR = path.join(process.cwd(), "public", "images", "hero");
const OUT_DIR = path.join(process.cwd(), "src", "data");
const OUT_FILE = path.join(OUT_DIR, "hero-blur.json");

(async () => {
  if (!fs.existsSync(INPUT_DIR)) {
    console.error(`[blur] No existe la carpeta: ${INPUT_DIR}`);
    process.exit(1);
  }
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

  const allowed = new Set([".jpg", ".jpeg", ".png", ".webp"]);
  const files = fs.readdirSync(INPUT_DIR).filter(f => allowed.has(path.extname(f).toLowerCase()));
  if (files.length === 0) {
    console.warn("[blur] No se encontraron imágenes en /public/images/hero");
  }

  const map = {};
  for (const file of files) {
    const abs = path.join(INPUT_DIR, file);
    const buf = await sharp(abs).resize({ width: 24 }).jpeg({ quality: 50 }).toBuffer();
    const b64 = `data:image/jpeg;base64,${buf.toString("base64")}`;
    // Ruta pública (lo que usas en <Image src="...">)
    const publicPath = `/images/hero/${file}`;
    map[publicPath] = b64;
    console.log(`[blur] + ${publicPath}`);
  }

  fs.writeFileSync(OUT_FILE, JSON.stringify(map, null, 2), "utf8");
  console.log(`[blur] Escrito: ${OUT_FILE}`);
})();
