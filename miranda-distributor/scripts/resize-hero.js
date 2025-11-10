const sharp = require("sharp");
const fs = require("fs");

const SRC = "public/images/collections/temporada.jpg"; // usamos otra imagen para el fondo
const OUT_JPG = "public/images/hero/hero-miranda-landscape-3200.jpg";
const OUT_WEBP = "public/images/hero/hero-miranda-landscape-3200.webp";

(async () => {
  if (!fs.existsSync(SRC)) {
    console.error("No existe imagen fuente:", SRC);
    process.exit(1);
  }
  await sharp(SRC).resize({ width: 3200 }).jpeg({ quality: 85 }).toFile(OUT_JPG);
  await sharp(SRC).resize({ width: 3200 }).webp({ quality: 80 }).toFile(OUT_WEBP);
  console.log("Hero generado:", OUT_JPG, "y", OUT_WEBP);
})();


