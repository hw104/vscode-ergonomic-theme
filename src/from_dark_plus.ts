import * as fs from "fs";
import * as JSONC from "jsonc-parser";
import { Cl, Config, Theme, TokenColor } from "./types";

const VsDarkPlusDist = {
  keywords: "#569CD6",
  "keyword.control": "#C586C0",
  class: "#4EC9B0",
  primitiveType: "#4EC9B0",
  function: "#DCDCAA",
  property: "#9CDCFE",
  "property.readonly": "#4FC1FF",
  string: "#CE9178",
  number: "#B5CEA8",
  comment: "#6A9955",
  regexp: "#D16969",
} as const;

const mapping: Partial<Record<keyof typeof VsDarkPlusDist, keyof Config>> = {
  keywords: "keywords",
  "keyword.control": "keywords",
  class: "class",
  primitiveType: "primitiveType",
  function: "function",
  property: "property",
  "property.readonly": "property",
  string: "string",
  number: "number",
  comment: "comment",
} as const;

export function generateTokenColorsFromVsDarkPlus(
  config: Config
): TokenColor[] {
  const theme = JSONC.parse(
    fs.readFileSync("themes/vscode-dark-plus.json").toString()
  ) as Theme;

  let newTokenColors = [...(theme.tokenColors ?? [])];
  for (const k of Object.keys(
    VsDarkPlusDist
  ) as (keyof typeof VsDarkPlusDist)[]) {
    const key = mapping[k];
    if (key != null) {
      const c = config[key];
      if (c != null) {
        newTokenColors = replaceColor(newTokenColors, VsDarkPlusDist[k], c);
      }
    }
  }
  return newTokenColors;
}

function replaceColor(
  tokenColors: TokenColor[],
  from: Cl,
  to: Cl
): TokenColor[] {
  return tokenColors.map((tc) =>
    tc.settings.foreground === from
      ? { ...tc, settings: { ...tc.settings, foreground: to } }
      : tc
  );
}
