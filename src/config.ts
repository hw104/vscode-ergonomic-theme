export type ColorLiteral = `#${string}`;
type Cl = ColorLiteral;

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
}

// - 型は寒色
// - 値は暖色

export const defaultConfig: Config = {
  comment: "#AAFFAA",
  // type
  class: "#00FFFF",
  function: "#00ff00",
  // variables
  variables: "#ffd6a7",
  parameter: "#ffaa00",
  property: "#ffff00",
  // value
  string: "#89CA78",
  number: "#aaffff",
  boolean: "#aaaaff",
  nulliysh: "#ddaaff",
  // symbol
  operators: "#FFFFFF",
  keywords: "#ff56e8",
  primitiveType: "#77bdff",
};
