import sharp from 'sharp';
import { existsSync, writeFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const publicDir = join(__dirname, '..', 'public', 'images', 'hero');
const libDir = join(__dirname, '..', 'src', 'lib');

// Buscar imagen fuente hero-niños.jpg
const sourcePath = join(publicDir, 'hero-niños.jpg');

if (!existsSync(sourcePath)) {
  console.error(`✗ Error: No se encontró ${sourcePath}`);
  process.exit(1);
}

console.log(`✓ Imagen fuente encontrada: ${sourcePath}`);

try {
  // Leer imagen fuente
  const image = sharp(sourcePath);
  const metadata = await image.metadata();
  console.log(`✓ Imagen fuente: ${metadata.width}x${metadata.height}, formato: ${metadata.format}`);

  // Generar solo 3840px
  const width = 3840;
  const outputPath = join(publicDir, `hero-niños-${width}.webp`);

  // Redimensionar y guardar
  await image
    .resize(width, null, {
      withoutEnlargement: false, // Permitir ampliar si es necesario
      kernel: sharp.kernel.lanczos3,
    })
    .webp({ quality: 82 })
    .toFile(outputPath);

  console.log(`✓ Generado: hero-niños-${width}.webp`);

  // Generar blur placeholder (24px máximo)
  const blurBuffer = await sharp(outputPath)
    .resize(24, 24, { fit: 'inside', kernel: sharp.kernel.lanczos3 })
    .webp({ quality: 82 })
    .toBuffer();

  const blurDataUrl = `data:image/webp;base64,${blurBuffer.toString('base64')}`;

  // Leer blur.json existente y actualizarlo
  let blurMap = {};
  try {
    const blurJsonPath = join(libDir, '_blur.json');
    if (existsSync(blurJsonPath)) {
      const { readFileSync } = await import('fs');
      const existingContent = readFileSync(blurJsonPath, 'utf-8');
      blurMap = JSON.parse(existingContent);
    }
  } catch {
    // Si no existe o hay error, empezar vacío
  }

  // Añadir el nuevo blur
  blurMap[`/images/hero/hero-niños-${width}.webp`] = blurDataUrl;

  // Escribir _blur.json actualizado
  const blurJsonPath = join(libDir, '_blur.json');
  writeFileSync(blurJsonPath, JSON.stringify(blurMap, null, 2), 'utf-8');
  console.log(`✓ Blur placeholder guardado en: ${blurJsonPath}`);

  console.log('\n✓ Proceso completado exitosamente');

} catch (error) {
  console.error('✗ Error durante el procesamiento:', error);
  process.exit(1);
}

