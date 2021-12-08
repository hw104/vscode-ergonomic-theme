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
