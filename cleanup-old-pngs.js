/**
 * Safely delete old PNG files after converting to WebP
 * Run with: node cleanup-old-pngs.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, 'src', 'assets');

function cleanupOldPngs() {
  console.log('🧹 Cleaning up old PNG files...\n');

  const files = fs.readdirSync(assetsDir).filter(file => file.endsWith('.png'));
  
  let deletedCount = 0;
  let keptCount = 0;
  let totalSizeFreed = 0;

  for (const file of files) {
    const pngPath = path.join(assetsDir, file);
    const webpPath = path.join(assetsDir, file.replace('.png', '.webp'));

    // Only delete if corresponding WebP exists
    if (fs.existsSync(webpPath)) {
      const stats = fs.statSync(pngPath);
      const sizeMB = (stats.size / 1024 / 1024).toFixed(2);
      
      console.log(`🗑️  Deleting: ${file} (${sizeMB}MB)`);
      fs.unlinkSync(pngPath);
      
      deletedCount++;
      totalSizeFreed += stats.size;
    } else {
      console.log(`⚠️  Keeping: ${file} (no WebP equivalent found)`);
      keptCount++;
    }
  }

  const totalFreedMB = (totalSizeFreed / 1024 / 1024).toFixed(2);

  console.log('\n' + '━'.repeat(60));
  console.log('✨ Cleanup complete!');
  console.log(`📊 Summary:`);
  console.log(`   • Deleted: ${deletedCount} PNG files`);
  console.log(`   • Kept: ${keptCount} PNG files (no WebP equivalent)`);
  console.log(`   • Disk space freed: ${totalFreedMB}MB`);
  console.log('━'.repeat(60));
}

cleanupOldPngs();
