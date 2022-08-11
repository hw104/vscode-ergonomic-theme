import { readdir, writeFile } from "fs/promises";
import path from "path";
import { generateTokenColorsFromVsDarkPlus } from "./from_dark_plus";
import { generateTheme } from "./generator";

async function main() {
  const variants = await readdir(path.resolve(__dirname, "../variants"));

  for (const variant of variants) {
    const vpath = path.resolve(__dirname, `../variants/${variant}`);
    const config = require(vpath);
    const variantName = path.basename(variant, path.extname(variant));
    const name = `ergonomic-${variantName}`;
    console.log(name);

    let theme = generateTheme(config, name);
    const tokenColors = generateTokenColorsFromVsDarkPlus(config);
    theme = {
      ...theme,
      tokenColors: [...tokenColors, ...(theme.tokenColors ?? [])],
    };

    const toPath = path.resolve(
      __dirname,
      `../themes/${name}-color-theme.json`
    );
    await writeFile(toPath, JSON.stringify(theme, undefined, 2));
  }
}

main().catch(console.error);
