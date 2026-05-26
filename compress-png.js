const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const INPUT_DIR  = './assets/images/printables';
const OUTPUT_DIR = './assets/images/printables';
const TARGET_KB  = 200;

async function compressAll() {
  const files = fs.readdirSync(INPUT_DIR).filter(f => f.endsWith('.png'));
  console.log(`Total file: ${files.length}`);

  let totalBefore = 0, totalAfter = 0;

  for (const file of files) {
    const inputPath  = path.join(INPUT_DIR, file);
    const tempPath   = inputPath + '.tmp';
    const sizeBefore = fs.statSync(inputPath).size;
    totalBefore += sizeBefore;

    await sharp(inputPath)
      .png({ compressionLevel: 9, quality: 80 })
      .toFile(tempPath);

    const sizeAfter = fs.statSync(tempPath).size;
    totalAfter += sizeAfter;

    fs.renameSync(tempPath, inputPath);
    console.log(`${file}: ${(sizeBefore/1024).toFixed(0)}KB → ${(sizeAfter/1024).toFixed(0)}KB`);
  }

  console.log('─────────────────────────────────────────');
  console.log(`Total sebelum : ${(totalBefore/1024/1024).toFixed(2)} MB`);
  console.log(`Total sesudah : ${(totalAfter/1024/1024).toFixed(2)} MB`);
  console.log(`Penghematan   : ${((1 - totalAfter/totalBefore)*100).toFixed(1)}%`);
}

compressAll().catch(console.error);
