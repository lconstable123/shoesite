const sharp = require("sharp");
const path = require("path");
const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the directory containing images: ", (dirPath) => {
  const folder = path.resolve(dirPath);

  if (!fs.existsSync(folder)) {
    console.error("❌ Directory does not exist.");
    rl.close();
    return;
  }

  const files = fs.readdirSync(folder);

  // Supported image extensions
  const validExt = [".webp"];

  const imageFiles = files.filter((file) =>
    validExt.includes(path.extname(file).toLowerCase())
  );

  if (imageFiles.length === 0) {
    console.log("No images found in that directory.");
    rl.close();
    return;
  }

  console.log(`Processing ${imageFiles.length} images...\n`);

  imageFiles.forEach((file) => {
    const inputFile = path.join(folder, file);

    const outputFile = path.join(
      folder,
      `${path.basename(file, path.extname(file))}_tiny.png`
    );

    sharp(inputFile)
      .resize(10, 10)
      .toFile(outputFile)
      .then(() => {
        console.log(`✅ Resized: ${file} → ${path.basename(outputFile)}`);
      })
      .catch((err) => {
        console.error(`❌ Error processing ${file}:`, err);
      });
  });

  rl.close();
});
