import chalk from "chalk";
import chroma from "chroma-js";
import { Cl } from "./types";

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

function fromAnsi(seed: AnsiSeed) {
  
}

async function main(m: chroma.InterpolationMode) {
  const [prop, param, vari] = chroma
    .scale([seed.propBase, seed.variBase])
    .mode(m)
    .colors(3, undefined);
  const vs = [prop, param, vari];
  printC({ prop, param, vari });

  const [_propF, _paramF, _variF] = chroma
    .scale([seed.functionBase, seed.variBase])
    .mode(m)
    .colors(4, undefined);
  const fs = [_propF, _paramF, _variF];
  const [propF, paramF, variF] = fs.map((c, i) => chroma.mix(c, vs[i], 0.5, m));

  printC({ _propF: _propF, _paramF, _variF });
  printC({ propF, paramF, variF });

  /* const [propF, paramF, variF] = [prop, param, vari].map((c) =>
    chroma.mix(c, seed.functionBase, 0.5, m)
  );*/

  // chroma.mix(prop, seed.functionBase, 0.5, m);
  /* const [, param, vari] = chroma
    .scale([seed.propBase, seed.variBase])
    .mode(m)
    .colors(3, undefined); */
  /* const [, _fun] = chroma
    .scale([seed.classBase, seed.variBase])
    .mode(m)
    .colors(5, undefined); */
  /* const [fun, , , , method] = chroma
    .scale([seed.functionBase, seed.propBase])
    .mode(m)
    .colors(10, undefined); */

  /* ["method", method]
    .map((e) => (typeof e === "string" ? e : toS(e)))
    .forEach((e) => console.log(e)); */
}

function toS(c: chroma.Color) {
  return [
    // "origin",
    chalk.hex(c.hex()).inverse("__ " + c + " __"),
    // "bright",
    chalk.hex(c.brighten().hex()).inverse("__ " + c.brighten() + " __"),
    // "dark",
    chalk.hex(c.darken().hex()).inverse("__ " + c.darken() + " __"),
  ].join(" ");
}

function printC(colors: Record<string, chroma.Color>) {
  Object.entries(colors).forEach(([key, value]) =>
    console.log(`${key.padEnd(10)}: ${toS(value)}`)
  );
}

console.log("rgb");
main("rgb").catch(console.error);
console.log("lch");
main("lch").catch(console.error);
