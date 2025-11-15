import tinify from "tinify";
import fs from "fs";
import path from "path";

tinify.key = "cGWd6Qs5PpGFWczzfn4TYm9W09h5Z1pG";

const inputFolder = path.join(process.cwd(), "src/Images");
const outputFolder = path.join(process.cwd(), "src/ImagesCompressed");

if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder);
}

const files = fs.readdirSync(inputFolder);

for (const file of files) {
  const ext = path.extname(file).toLowerCase();
  if (ext === ".png" || ext === ".jpg" || ext === ".jpeg") {
    const source = tinify.fromFile(path.join(inputFolder, file));
    await source.toFile(path.join(outputFolder, file));
    console.log(`Compressed: ${file}`);
  }
}
