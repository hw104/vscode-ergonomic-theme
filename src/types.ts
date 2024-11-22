export type ColorLiteral = `#${string}`;
export type Cl = ColorLiteral;
export type Styles = "italic" | "bold" | "underline";
export type FontStyle =
  | ""
  | Styles
  | `${Styles} ${Styles}`
  | `${Styles} ${Styles} ${Styles}`;

export type TokenColor = {
  name?: string;
  scope: string[];
  settings: {
    fontStyle?: FontStyle;
    foreground?: ColorLiteral;
  };
};

export type SemanticTokenColor =
  | Cl
  | {
      foreground?: Cl;
      bold?: boolean;
      italic?: boolean;
      underline?: boolean;
    }
  | {
      foreground?: Cl;
      fontStyle?: FontStyle;
    };

export interface Theme {
  name: string;
  type: "dark" | "light";
  semanticHighlighting?: boolean;
  colors?: Record<string, Cl>;
  tokenColors?: TokenColor[];
  semanticTokenColors?: {
    [K: string]: SemanticTokenColor | undefined;
  };
}

export interface SeedConfig {
  variableBase: Cl;
  classBase: Cl;
  functionBase: Cl;
  // primitiveValueBase: Cl; // string, number, boolean
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
  // default is operators
  lineTerminator?: Cl;
  "parameter.label": Cl | undefined;
}

export type Variant = {
  uiTheme: "vs-dark" | "vs" | "hc-black" | "hc-light";
  type: "light" | "dark";
  name: string;
  config: Config;
  from?: string;
};
