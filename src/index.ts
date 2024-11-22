import { readdir, writeFile } from "fs/promises";
import path from "path";
import packageJson from "../package.json";
import { generateTokenColorsFromVsDarkPlus } from "./from_dark_plus";
import { generateTheme } from "./generator";
import { Variant } from "./types";

async function main() {
  const variants = await readdir(path.resolve(__dirname, "../variants"));

  const contributesThemes: any[] = [];

  for (const variantPath of variants) {
    const variant = require(`../variants/${variantPath}`) as Variant;
    variant.name = `ergonomic-${variant.name}`;
    const { name, uiTheme, from } = variant;

    const theme = generateTheme(variant);
    theme.tokenColors = [
      ...generateTokenColorsFromVsDarkPlus(variant.config),
      ...(theme.tokenColors ?? []),
    ];
    if (from != null) {
      const baseTheme = require(`../themes/${from}`);
      theme.colors = { ...baseTheme.colors, ...theme.colors };
    }

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
