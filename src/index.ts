import { readdir, writeFile } from "fs/promises";
import path from "path";
import { generateTokenColorsFromVsDarkPlus } from "./from_dark_plus";
import { generateTheme } from "./generator";
import { Variant } from "./types";
import packageJson from "../package.json";

async function main() {
  const variants = await readdir(path.resolve(__dirname, "../variants"));

  const contributesThemes: any[] = [];

  for (const variantPath of variants) {
    const variant = require(`../variants/${variantPath}`) as Variant;
    variant.name = `ergonomic-${variant.name}`;
    const { name, type, uiTheme } = variant;
    const theme = generateTheme(variant);
    const tokenColors = generateTokenColorsFromVsDarkPlus(variant.config);
    theme.tokenColors = [...tokenColors, ...(theme.tokenColors ?? [])];

    const basePath = `themes/${name}-color-theme.json`;
    const toPath = path.resolve(__dirname, `../${basePath}`);
    await writeFile(toPath, JSON.stringify(theme, undefined, 2));

    contributesThemes.push({
      label: name,
      uiTheme,
      path: `./${basePath}`,
    });
  }

  await writeFile(
    path.resolve(__dirname, "../package.json"),
    JSON.stringify(
      {
        ...packageJson,
        contributes: {
          ...packageJson.contributes,
          themes: contributesThemes,
        },
      },
      undefined,
      2
    )
  );
}

main().catch(console.error);
