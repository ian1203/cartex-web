import sharp from 'sharp';
import { readFileSync, existsSync, writeFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const publicDir = join(__dirname, '..', 'public', 'images', 'hero');
const libDir = join(__dirname, '..', 'src', 'lib');

// Buscar imagen fuente en orden de preferencia
const sourceCandidates = [
  join(publicDir, 'hero-miranda-1920.webp'),
  join(publicDir, 'hero-miranda-1920.jpg'),
  join(publicDir, 'hero-miranda-1920.jpeg'),
];

let sourcePath = null;
for (const candidate of sourceCandidates) {
  if (existsSync(candidate)) {
    sourcePath = candidate;
    console.log(`✓ Imagen fuente encontrada: ${candidate}`);
    break;
  }
}

if (!sourcePath) {
  console.error('✗ Error: No se encontró ninguna imagen fuente en:');
  sourceCandidates.forEach(c => console.error(`  - ${c}`));
  process.exit(1);
}

// Tamaños de salida
const sizes = [3840, 3200, 2560, 1920];
const blurMap = {};

try {
  // Leer imagen fuente
  const image = sharp(sourcePath);
  const metadata = await image.metadata();
  console.log(`✓ Imagen fuente: ${metadata.width}x${metadata.height}, formato: ${metadata.format}`);

  // Generar cada tamaño
  for (const width of sizes) {
    const outputPath = join(publicDir, `hero-miranda-${width}.webp`);
    
    // Si ya existe y es el mismo tamaño que la fuente, verificar si necesitamos regenerar
    if (width === 1920 && sourcePath.endsWith('.webp') && existsSync(outputPath)) {
      console.log(`⚠ Saltando ${width}px (ya existe y coincide con fuente)`);
      // Generar blur para este tamaño
      const blurBuffer = await sharp(sourcePath)
        .resize(24, 24, { fit: 'inside', kernel: sharp.kernel.lanczos3 })
        .webp({ quality: 82 })
        .toBuffer();
      const blurDataUrl = `data:image/webp;base64,${blurBuffer.toString('base64')}`;
      blurMap[`/images/hero/hero-miranda-${width}.webp`] = blurDataUrl;
      continue;
    }

    // Redimensionar y guardar
    await image
      .resize(width, null, {
        withoutEnlargement: true,
        kernel: sharp.kernel.lanczos3,
      })
      .webp({ quality: 82 })
      .toFile(outputPath);

    console.log(`✓ Generado: hero-miranda-${width}.webp`);

    // Generar blur placeholder (24px máximo)
    const blurBuffer = await sharp(outputPath)
      .resize(24, 24, { fit: 'inside', kernel: sharp.kernel.lanczos3 })
      .webp({ quality: 82 })
      .toBuffer();
    
    const blurDataUrl = `data:image/webp;base64,${blurBuffer.toString('base64')}`;
    blurMap[`/images/hero/hero-miranda-${width}.webp`] = blurDataUrl;
  }

  // Escribir _blur.json
  const blurJsonPath = join(libDir, '_blur.json');
  writeFileSync(blurJsonPath, JSON.stringify(blurMap, null, 2), 'utf-8');
  console.log(`✓ Blur placeholders guardados en: ${blurJsonPath}`);

  console.log('\n✓ Proceso completado exitosamente');
  console.log(`  Generadas ${sizes.length} imágenes WebP`);
  console.log(`  Blur placeholders para ${Object.keys(blurMap).length} imágenes`);

} catch (error) {
  console.error('✗ Error durante el procesamiento:', error);
  process.exit(1);
}

