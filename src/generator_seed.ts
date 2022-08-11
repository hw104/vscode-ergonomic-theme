import chalk from "chalk";
import chroma from "chroma-js";
import { SeedConfig, Theme } from "./types";

export function generateFromSeed(seed: any, name: string): Theme {
  return {
    name: `ergonomic-${name}`,
    type: "dark",
    semanticHighlighting: true,
    semanticTokenColors: {
      // types
      class: {
        fontStyle: "bold",
        foreground: seed.class,
      },
      type: {
        fontStyle: "bold",
        foreground: seed.class,
      },
      interface: {
        fontStyle: "bold",
        foreground: seed.class,
      },
      enum: {
        fontStyle: "bold",
        foreground: seed.class,
      },
      enumMember: seed.variables,
      typeParameter: {
        fontStyle: "bold",
        foreground: seed.class,
      },
      namespace: {
        fontStyle: "bold",
        foreground: seed.class,
      },
      // functions
      function: {
        fontStyle: "bold",
        foreground: seed.function,
      },
      method: {
        fontStyle: "bold",
        foreground: seed.function,
      },
      // variables
      variable: seed.variables,
      parameter: seed.parameter,
      property: seed.property,
      "property.annotation": seed.keywords,
      "parameter.label": seed["parameter.label"],
      // NO WORKING
      comment: seed.comment,
      string: seed.string,
      operator: seed.operators,
      keyword: seed.keywords,
      stringLiteral: seed.string,
      struct: {
        fontStyle: "bold",
        foreground: seed.class,
      },
      macro: {
        fontStyle: "italic bold",
        foreground: seed.function,
      },
      newOperator: seed.keywords,
      numberLiteral: seed.number,
      number: seed.number,
      customLiteral: "#ff0000",
      decorator: "#ff0000",
      event: "#ff0000",
      genericType: "#ff0000",
      label: "#ff0000",
      memberOperatorOverload: "#ff0000",
      operatorOverload: "#ff0000",
      referenceType: "#ff0000",
      regexp: "#ff0000",
      templateFunction: "#ff0000",
      templateType: "#ff0000",
      valueType: "#ff0000",
      cliProperty: "#ff0000",
      // =============================================
      // =============================================
      "*.defaultLibrary": {
        // fontStyle: "italic bold underline",
        fontStyle: "italic bold",
      },
      "variable.defaultLibrary": {
        // fontStyle: "italic bold underline",
        fontStyle: "italic bold",
        foreground: seed.primitiveType,
      },
      "*.global": {
        // fontStyle: "italic bold underline",
        fontStyle: "italic bold",
      },
      "*.static": {
        fontStyle: "italic bold",
      },
      "*.modification": {},
      "*.readonly": {},
      "*.abstract": {},
      "*.async": {},
      "*.declaration": {},
      "*.deprecated": {},
      "*.documentation": {},
      "*.local": {},
    },
  } as any;
}

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

  printC({ _propF, _paramF, _variF });
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

console.log('rgb');
main('rgb').catch(console.error);
console.log('lch');
main('lch').catch(console.error);
