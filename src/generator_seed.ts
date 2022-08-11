import chalk from "chalk";
import chroma from "chroma-js";
import * as fs from "fs";
import { Config, Theme } from "./types";

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

async function main() {
  // const chalk = await import("chalk");
  // console.log('chalk', chalk)
  const path = process.argv[2];
  const seed = JSON.parse(fs.readFileSync(path).toString()) as Config;
  console.log(seed);
  seed.function;
  const colors = chroma
    .scale([seed.function, seed.variables])
    .mode("lch")
    .colors(4);
  colors.forEach((c) => {
    console.log(chalk.hex(c)(c));
  });
}

main().catch(console.error);
