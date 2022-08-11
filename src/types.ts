export type ColorLiteral = `#${string}`;
export type Cl = ColorLiteral;
export type Styles = "italic" | "bold" | "underline";
export type FontStyle =
  | ""
  | Styles
  | `${Styles} ${Styles}`
  | `${Styles} ${Styles} ${Styles}`;

export interface Theme {
  name: string;
  type: "dark";
  semanticHighlighting: boolean;
  tokenColors: {
    name?: string;
    scope: string[];
    settings: {
      fontStyle?: FontStyle;
      foreground?: ColorLiteral;
    };
  }[];
  semanticTokenColors: any;
}

export interface SeedConfig {
  variableBase: Cl;
  classBase: Cl;
  functionBase: Cl;
  primitiveValueBase: Cl; // string, number, boolean
  operators: Cl;
  keywords: Cl;
}

export interface Config {
  comment: Cl;
  variables: Cl;
  // types
  class: Cl;
  function: Cl;
  property: Cl;
  parameter: Cl;
  string: Cl;
  number: Cl;
  boolean: Cl;
  nulliysh: Cl;
  keywords: Cl;
  operators: Cl;
  primitiveType: Cl;
  "parameter.label": Cl | undefined;
}
