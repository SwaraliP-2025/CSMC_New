/*
  tools/optimize-images.js

  Usage:
    1. Place your source images in a folder named `import_images` at the repo root,
       and name them exactly as the slugs used in `tourist-places.json`, e.g.
       `bibi-ka-maqbara.jpg`, `ellora-caves.jpg`, etc. Keep original extensions.
    2. Install sharp: `npm install sharp` (or `pnpm add -D sharp`).
    3. Run: `node tools/optimize-images.js import_images`

  What it does:
    - Reads the mapping of expected tourist files
    - Produces resized JPEG (1200x800) and WebP versions in `src/assets/tourist/`
    - Overwrites files with the slug-based filenames used in the app

  Notes:
    - If a source filename isn't found, the script will try common extensions (.jpg, .jpeg, .png).
    - Adjust sizes or quality variables below as needed.
*/

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const SRC_DIR = process.argv[2] ? path.resolve(process.argv[2]) : path.resolve(process.cwd(), 'import_images');
const OUT_DIR = path.resolve(__dirname, '..', 'src', 'assets', 'tourist');

const IMAGES = [
  'bibi-ka-maqbara',
  'ellora-caves',
  'ajanta-caves',
  'daulatabad-fort',
  'grishneshwar-temple',
  'panchakki',
  'siddharth-garden',
  'soneri-mahal',
];

const WIDTH = 1200;
const HEIGHT = 800;
const JPEG_QUALITY = 80;
const WEBP_QUALITY = 75;

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

(async () => {
  console.log('Source dir:', SRC_DIR);
  for (const slug of IMAGES) {
    // Try common extensions
    const candidates = [slug + '.jpg', slug + '.jpeg', slug + '.png', slug + '.webp'];
    const src = candidates.map(n => path.join(SRC_DIR, n)).find(p => fs.existsSync(p));
    if (!src) {
      console.warn(`Skipping ${slug}: no source file found in ${SRC_DIR} (tried ${candidates.join(', ')})`);
      continue;
    }

    try {
      const outJpg = path.join(OUT_DIR, `${slug}.jpg`);
      const outWebp = path.join(OUT_DIR, `${slug}.webp`);

      await sharp(src)
        .resize(WIDTH, HEIGHT, { fit: 'cover' })
        .jpeg({ quality: JPEG_QUALITY })
        .toFile(outJpg);

      await sharp(src)
        .resize(WIDTH, HEIGHT, { fit: 'cover' })
        .webp({ quality: WEBP_QUALITY })
        .toFile(outWebp);

      console.log(`Written ${path.relative(process.cwd(), outJpg)} and ${path.relative(process.cwd(), outWebp)}`);
    } catch (e) {
      console.error(`Failed to process ${slug}:`, e);
    }
  }
  console.log('Done.');
})();
