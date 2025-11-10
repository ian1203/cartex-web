const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const IN_DIR = "public/images/collections";
const SIZES = [1600, 1200, 800];
const QUALITY_JPG = 82;
const QUALITY_WEBP = 80;

(async () => {
  if (!fs.existsSync(IN_DIR)) {
    console.error("No existe", IN_DIR);
    process.exit(1);
  }
  const files = fs.readdirSync(IN_DIR).filter((f) => /\.(jpe?g|png|webp)$/i.test(f));
  for (const file of files) {
    const input = path.join(IN_DIR, file);
    const base = file.replace(/\.(jpe?g|png|webp)$/i, "");
    for (const w of SIZES) {
      await sharp(input)
        .resize({ width: w })
        .jpeg({ quality: QUALITY_JPG })
        .toFile(path.join(IN_DIR, `${base}-${w}.jpg`));
      await sharp(input)
        .resize({ width: w })
        .webp({ quality: QUALITY_WEBP })
        .toFile(path.join(IN_DIR, `${base}-${w}.webp`));
      console.log(`[collections] ${file} -> ${base}-${w}.{jpg,webp}`);
    }
  }
})();


