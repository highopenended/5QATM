/**
 * Convert ALL PNG images in src/assets to WebP format
 * Run with: node convert-all-images.js
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, 'src', 'assets');

async function convertAllImages() {
  console.log('🖼️  Converting ALL PNG images to WebP...\n');

  // Get all PNG files in assets directory
  const files = fs.readdirSync(assetsDir).filter(file => file.endsWith('.png'));
  
  let totalInputSize = 0;
  let totalOutputSize = 0;
  let convertedCount = 0;
  let skippedCount = 0;

  for (const file of files) {
    const inputPath = path.join(assetsDir, file);
    const outputPath = path.join(assetsDir, file.replace('.png', '.webp'));

    try {
      // Skip if WebP already exists and is newer than PNG
      if (fs.existsSync(outputPath)) {
        const pngStat = fs.statSync(inputPath);
        const webpStat = fs.statSync(outputPath);
        if (webpStat.mtime > pngStat.mtime) {
          console.log(`⏭️  Skipping ${file} (WebP already exists and is up to date)`);
          skippedCount++;
          continue;
        }
      }

      const inputStats = fs.statSync(inputPath);
      const inputSizeMB = (inputStats.size / 1024 / 1024).toFixed(2);
      totalInputSize += inputStats.size;

      console.log(`Converting: ${file} (${inputSizeMB}MB)`);
      
      await sharp(inputPath)
        .webp({ quality: 85 })
        .toFile(outputPath);

      const outputStats = fs.statSync(outputPath);
      const outputSizeMB = (outputStats.size / 1024 / 1024).toFixed(2);
      const savings = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);
      totalOutputSize += outputStats.size;

      console.log(`✅ Created: ${file.replace('.png', '.webp')} (${outputSizeMB}MB) - ${savings}% smaller\n`);
      convertedCount++;
    } catch (error) {
      console.error(`❌ Error converting ${file}:`, error.message, '\n');
    }
  }

  const totalInputMB = (totalInputSize / 1024 / 1024).toFixed(2);
  const totalOutputMB = (totalOutputSize / 1024 / 1024).toFixed(2);
  const totalSavings = ((1 - totalOutputSize / totalInputSize) * 100).toFixed(1);

  console.log('━'.repeat(60));
  console.log('✨ Conversion complete!');
  console.log(`📊 Summary:`);
  console.log(`   • Converted: ${convertedCount} images`);
  console.log(`   • Skipped: ${skippedCount} images (already up to date)`);
  console.log(`   • Total input size: ${totalInputMB}MB`);
  console.log(`   • Total output size: ${totalOutputMB}MB`);
  console.log(`   • Total savings: ${totalSavings}%`);
  console.log('━'.repeat(60));
  console.log('\n📝 Next steps:');
  console.log('1. Update all component imports to use .webp instead of .png');
  console.log('2. Test the site to ensure all images load correctly');
  console.log('3. Once verified, optionally delete the old .png files to save space');
}

convertAllImages();
