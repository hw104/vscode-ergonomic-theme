import { readdir, writeFile } from "fs/promises";
import path from "path";
import { generateTheme } from "./generator";

async function main() {
  const variants = await readdir(path.resolve(__dirname, "../variants"));

  for (const variant of variants) {
    const vpath = path.resolve(__dirname, `../variants/${variant}`);
    const theme = require(vpath);
    const name = path.basename(variant, path.extname(variant));
    console.log(name);
    // console.log(variant);
    // console.log(theme);
    const toPath = path.resolve(
      __dirname,
      `../themes/ergonomic-${name}-color-theme.json`
    );
    await writeFile(
      toPath,
      JSON.stringify(
        generateTheme(theme, `ergonomic-${name}`),
        undefined,
        2
      )
    );
  }
}

main().catch(console.error);
