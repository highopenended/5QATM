/**
 * One-time script to convert large PNG images to WebP format
 * Run with: node convert-images.js
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imagesToConvert = [
  {
    input: 'src/assets/weekly-care-background.png',
    output: 'src/assets/weekly-care-background.webp',
    quality: 85
  },
  {
    input: 'src/assets/daily-care-background.png',
    output: 'src/assets/daily-care-background.webp',
    quality: 85
  },
  {
    input: 'src/assets/review-background.png',
    output: 'src/assets/review-background.webp',
    quality: 85
  },
  {
    input: 'src/assets/gang-parade-background.png',
    output: 'src/assets/gang-parade-background.webp',
    quality: 85
  },
  {
    input: 'src/assets/light-products-background.png',
    output: 'src/assets/light-products-background.webp',
    quality: 85
  }
];

async function convertImages() {
  console.log('🖼️  Starting image conversion to WebP...\n');

  for (const image of imagesToConvert) {
    try {
      if (!fs.existsSync(image.input)) {
        console.log(`⚠️  Skipping ${image.input} (file not found)`);
        continue;
      }

      const inputStats = fs.statSync(image.input);
      const inputSizeMB = (inputStats.size / 1024 / 1024).toFixed(2);

      console.log(`Converting: ${image.input} (${inputSizeMB}MB)`);
      
      await sharp(image.input)
        .webp({ quality: image.quality })
        .toFile(image.output);

      const outputStats = fs.statSync(image.output);
      const outputSizeMB = (outputStats.size / 1024 / 1024).toFixed(2);
      const savings = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);

      console.log(`✅ Created: ${image.output} (${outputSizeMB}MB) - ${savings}% smaller\n`);
    } catch (error) {
      console.error(`❌ Error converting ${image.input}:`, error.message, '\n');
    }
  }

  console.log('✨ Conversion complete!');
  console.log('\n📝 Next steps:');
  console.log('1. Update component imports to use .webp files');
  console.log('2. Optionally delete the old .png files to save space');
}

convertImages();
