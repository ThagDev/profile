#!/usr/bin/env node

/**
 * Script to optimize logo image for different sizes
 * Run with: node scripts/optimize-logo.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeLogo() {
  const inputPath = path.join(process.cwd(), 'public', 'logo.jpg');
  const outputDir = path.join(process.cwd(), 'public', 'optimized');

  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Check if input file exists
  if (!fs.existsSync(inputPath)) {
    console.log('❌ logo.jpg not found in public directory');
    return;
  }

  const sizes = [
    { width: 32, height: 32, name: 'logo-32.webp' },
    { width: 48, height: 48, name: 'logo-48.webp' },
    { width: 64, height: 64, name: 'logo-64.webp' },
    { width: 96, height: 96, name: 'logo-96.webp' },
    { width: 128, height: 128, name: 'logo-128.webp' },
  ];

  try {
    console.log('🖼️  Optimizing logo...');
    
    for (const size of sizes) {
      await sharp(inputPath)
        .resize(size.width, size.height, {
          fit: 'cover',
          position: 'center'
        })
        .webp({ quality: 85 })
        .toFile(path.join(outputDir, size.name));
      
      console.log(`✅ Created ${size.name} (${size.width}x${size.height})`);
    }

    // Also create AVIF versions for better compression
    for (const size of sizes) {
      const avifName = size.name.replace('.webp', '.avif');
      await sharp(inputPath)
        .resize(size.width, size.height, {
          fit: 'cover',
          position: 'center'
        })
        .avif({ quality: 80 })
        .toFile(path.join(outputDir, avifName));
      
      console.log(`✅ Created ${avifName} (${size.width}x${size.height})`);
    }

    console.log('🎉 Logo optimization complete!');
    console.log('💡 Update your components to use optimized images from /optimized/ folder');
    
  } catch (error) {
    console.error('❌ Error optimizing logo:', error);
  }
}

if (require.main === module) {
  optimizeLogo();
}

module.exports = optimizeLogo;
