import { readdir, writeFile } from "fs/promises";
import path from "path";
import { generate as generateDarkPlus } from "./from_dark_plus";
import { generateTheme } from "./generator";

async function main() {
  const variants = await readdir(path.resolve(__dirname, "../variants"));

  for (const variant of variants) {
    const vpath = path.resolve(__dirname, `../variants/${variant}`);
    const theme = require(vpath);
    const variantName = path.basename(variant, path.extname(variant));
    const name = `ergonomic-${variantName}`;
    console.log(name);
    // console.log(variant);
    // console.log(theme);
    const toPath = path.resolve(
      __dirname,
      `../themes/${name}-color-theme.json`
    );
    await writeFile(
      toPath,
      JSON.stringify(generateTheme(theme, name), undefined, 2)
    );
  }

  const toPath = path.resolve(
    __dirname,
    `../themes/ergonomic-dark-plus-color-theme.json`
  );
  await writeFile(
    toPath,
    JSON.stringify(generateDarkPlus('ergonomic-dark-plus'), undefined, 2)
  );
  console.log('ergonomic-dark-plus');
}

main().catch(console.error);
