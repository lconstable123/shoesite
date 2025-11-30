const sharp = require("sharp");
const path = require("path");
const fs = require("fs");
const readline = require("readline");
const inputFile = path.join(
  __dirname,
  "public/assets/placeholders/img/mid/men.png"
); // change to your image path

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the input image path: ", (inputPath) => {
  const inputFile = path.resolve(inputPath); // resolve to absolute path
  const outputFile = path.join(
    path.dirname(inputFile),
    `${path.basename(inputFile).split(".")[0]}_tiny.png`
  ); // optional 10x10 output file
  console.log(`Processing image: ${inputFile}`);

  console.log(inputFile);
  sharp(inputFile)
    .resize(10, 10) // width 10px, height 10px
    .toFile(outputFile)
    .then(() => {
      console.log("✅ Image resized to 10x10: tiny.png");
    })
    .catch((err) => {
      console.error("❌ Error resizing image:", err);
    });
});
