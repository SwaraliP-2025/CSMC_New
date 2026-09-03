/*
  tools/optimize-images.cjs (CommonJS)
  Same as the .js script but saved as .cjs so Node runs it under CommonJS when project uses "type":"module".
*/

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const SRC_DIR = process.argv[2] ? path.resolve(process.argv[2]) : path.resolve(process.cwd(), 'import_images');

const IMAGES = [
  'bibi-ka-maqbara',
  'ellora-caves',
  'ajanta-caves',
  'daulatabad-fort',
  'grishneshwar-temple',
  'panchakki',
  'siddharth-garden',
  'soneri-mahal',
  'bhadra-maruti-temple',
  'salim-ali-lake',
  'gautala-wildlife-sanctuary',
  'pitalkhora-caves',
];

const SIZES = [400, 800, 1200];
const HEIGHT_RATIO = 2/3; // keep 3:2 aspect (width:height)
const JPEG_QUALITY = 80;
const WEBP_QUALITY = 75;

const OUT_DIRS = [
  path.resolve(__dirname, '..', 'src', 'assets', 'tourist'),
  path.resolve(__dirname, '..', 'public', 'assets', 'tourist'),
];

OUT_DIRS.forEach((dir) => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

(async () => {
  console.log('Source dir:', SRC_DIR);
  for (const slug of IMAGES) {
    // Try common extensions (case-insensitive on Windows via direct listing)
    const candidates = [slug + '.jpg', slug + '.jpeg', slug + '.png', slug + '.webp'];
    let src = candidates.map(n => path.join(SRC_DIR, n)).find(p => fs.existsSync(p));
    if (!src) {
      // fallback: scan directory for case-insensitive match
      const files = fs.readdirSync(SRC_DIR);
      const match = files.find((f) => candidates.some((c) => f.toLowerCase() === c.toLowerCase()));
      if (match) src = path.join(SRC_DIR, match);
    }
    if (!src) {
      console.warn(`Skipping ${slug}: no source file found in ${SRC_DIR} (tried ${candidates.join(', ')})`);
      continue;
    }

    try {
      const written = [];
      for (const OUT_DIR of OUT_DIRS) {
        // base full-size cover for JSON image path
        const baseJpg = path.join(OUT_DIR, `${slug}.jpg`);
        const baseWebp = path.join(OUT_DIR, `${slug}.webp`);
        await sharp(src)
          .resize(1200, 800, { fit: 'cover' })
          .jpeg({ quality: JPEG_QUALITY })
          .toFile(baseJpg);
        await sharp(src)
          .resize(1200, 800, { fit: 'cover' })
          .webp({ quality: WEBP_QUALITY })
          .toFile(baseWebp);
        written.push(path.relative(process.cwd(), baseJpg));

        for (const w of SIZES) {
          const h = Math.round(w * HEIGHT_RATIO);
          const outJpg = path.join(OUT_DIR, `${slug}-${w}.jpg`);
          const outWebp = path.join(OUT_DIR, `${slug}-${w}.webp`);

          await sharp(src)
            .resize(w, h, { fit: 'cover' })
            .jpeg({ quality: JPEG_QUALITY })
            .toFile(outJpg);

          await sharp(src)
            .resize(w, h, { fit: 'cover' })
            .webp({ quality: WEBP_QUALITY })
            .toFile(outWebp);
        }
      }
      console.log(`Processed ${slug}`);
    } catch (e) {
      console.error(`Failed to process ${slug}:`, e);
    }
  }
  console.log('Done.');
})();
