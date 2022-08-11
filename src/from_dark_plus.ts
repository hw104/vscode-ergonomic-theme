import chalk from "chalk";
import * as fs from "fs";
import chroma from "chroma-js";
import { Cl, Theme, TokenColor } from "./types";
import * as JSONC from "jsonc-parser";
import { json } from "stream/consumers";

// '#ffc0cb', '#fa72bb', '#cb17d2', '#0000ff'

const seed = {
  classBase: "#0000FF",
  functionBase: "#00FF00",
  propBase: "#FF0000",
  variBase: "#FFFFFF",
  //
  keywords: "#FF00FF",
  operators: "#FFFFFF",
  // primitiveValueBase:
};
const ansiKeys = [
  "red",
  "green",
  "yellow",
  "blue",
  "purple",
  "cyan",
  "white",
  "black",
  "redDark",
  "greenDark",
  "yellowDark",
  "blueDark",
  "purpleDark",
  "cyanDark",
  "whiteDark",
  "blackDark",
] as const;
type AnsiKey = typeof ansiKeys[number];
type AnsiSeed = Record<AnsiKey, Cl>;

function main() {
  const jsonSt = fs.readFileSync(process.argv[2]).toString();
  const theme = JSONC.parse(jsonSt) as Theme;

  const colors = new Set(extColors2(theme));
  console.log("colors:" + colors.size);

  colors.forEach((c) => {
    const tokenColors = extTokenColors(theme, c);
    const a = tokenColors.map((c) => `[${c.scope}]`).join(" ");
    console.log(chalk.hex(c).inverse("__ " + c + " __") + ": " + a);
  });
}

function extColors2(theme: Theme): Cl[] {
  return (theme.tokenColors ?? [])
    .map<Cl | undefined>((c) => c.settings.foreground)
    .filter((c): c is Cl => c != null);
}

function extTokenColors(theme: Theme, color: Cl): TokenColor[] {
  return (theme.tokenColors ?? []).filter(
    (c) => c.settings.foreground === color
  );
}

main();
