/**
 * Generate optimized Open Graph image (1200x630) from hero image
 * Run with: npm run generate:og-image
 */

import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = path.join(__dirname, '..', 'src', 'assets', 'hero-image.webp');
const outputPath = path.join(__dirname, '..', 'public', 'og-image.webp');

async function generateOgImage() {
  console.log('🖼️  Generating Open Graph image (1200x630)...\n');

  try {
    await sharp(inputPath)
      .resize(1200, 630, {
        fit: 'cover',
        position: 'center'
      })
      .webp({ quality: 85 })
      .toFile(outputPath);

    console.log('✅ Success! Created public/og-image.webp (1200x630)');
    console.log('📝 Next: Update index.html with new dimensions (1200x630)');
  } catch (error) {
    console.error('❌ Error generating og-image:', error.message);
    process.exit(1);
  }
}

generateOgImage();
