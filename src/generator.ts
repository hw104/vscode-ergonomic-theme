import { Config, SemanticTokenColor, Theme, Variant } from "./types";

export function generateTheme(variant: Variant): Theme {
  const { name, config, type, uiTheme } = variant;
  return {
    name,
    type: type,
    semanticHighlighting: true,
    semanticTokenColors: {
      // types
      class: config.class,
      type: config.class,
      interface: config.class,
      enum: config.class,
      enumMember: config.variables,
      typeParameter: config.class,
      namespace: config.class,
      struct: config.class,
      // functions
      function: {
        italic: true,
        foreground: config.function,
      },
      method: {
        italic: true,
        foreground: config.function,
      },
      macro: {
        italic: true,
        foreground: config.function,
      },
      // variables
      variable: config.variables,
      parameter: config.parameter,
      property: config.property,
      "property.annotation": config.keywords,
      "parameter.label": config["parameter.label"],
      comment: config.comment,
      string: config.string,
      operator: config.operators,
      keyword: config.keywords,
      stringLiteral: config.string,
      newOperator: config.keywords,
      numberLiteral: config.number,
      number: config.number,
      // NO WORKING
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
        bold: true,
      },
      "variable.defaultLibrary": {
        bold: true,
        foreground: config.primitiveType,
      },
      "*.global": {
        bold: true,
      },
      "*.static": {
        bold: true,
      },
      /* "*.modification": {},
      "*.readonly": {},
      "*.abstract": {},
      "*.async": {},
      "*.declaration": {},
      "*.deprecated": {},
      "*.documentation": {},
      "*.local": {}, */
    },
    tokenColors: [
      // variable =================================================
      {
        scope: ["string.quoted", "string.template"],
        settings: {
          foreground: config.string,
        },
      },
      {
        scope: ["constant.numeric"],
        settings: {
          foreground: config.number,
        },
      },
      {
        scope: ["constant.language.boolean"],
        settings: {
          foreground: config.boolean,
        },
      },
      {
        name: "this",
        scope: ["variable.language.this"],
        settings: {
          fontStyle: "bold",
          foreground: config.property,
        },
      },
      {
        name: "value: null, undefined",
        scope: ["constant.language.null", "constant.language.undefined"],
        settings: {
          fontStyle: "bold",
          foreground: config.nulliysh,
        },
      },
      {
        name: "xxx.xxxx.XXXX",
        scope: ["variable.other.property"],
        settings: {
          foreground: config.property,
        },
      },
      {
        name: "json key",
        scope: ["support.type.property-name"],
        settings: {
          foreground: config.property,
        },
      },
      // keyword =================================================
      {
        name: "interface, type, const, class, constructor, let",
        scope: ["storage.type"],
        settings: {
          foreground: config.keywords,
        },
      },
      {
        name: "private, public, readonly, extends",
        scope: ["storage.modifier"],
        settings: {
          foreground: config.keywords,
        },
      },
      {
        name: "export, if, return, new, :, =, +, |, <,, ++,",
        scope: ["keyword"],
        settings: {
          foreground: config.keywords,
        },
      },
      {
        name: "new, :, =, +, |, <,, ++,",
        scope: ["keyword.operator"],
        settings: {
          foreground: config.operators,
        },
      },
      {
        name: "new, :, =, +, |, <,, ++,",
        scope: ["keyword.operator.new", "keyword.operator.expression"],
        settings: {
          foreground: config.keywords,
        },
      },
      // support.type.primitive =================================================
      {
        name: "number, string, boolean, any, unknown",
        scope: ["support.type.primitive"],
        settings: {
          fontStyle: "bold",
          foreground: config.primitiveType,
        },
      },
      {
        name: "undefined, null",
        scope: ["support.type.builtin"],
        settings: {
          fontStyle: "bold",
          foreground: config.primitiveType,
        },
      },
      // Symbol =================================================
      {
        name: "{, }, ;, ${}, `, \", ', :, .",
        scope: ["punctuation.definition", "punctuation.section", "meta.brace"],
        settings: {
          foreground: "#FFFFFF",
        },
      },
      ...(config.lineTerminator != null
        ? [
            {
              name: "terminators, i.e: ;",
              scope: ["punctuation.terminator"],
              settings: {
                foreground: config.lineTerminator ?? config.operators,
              },
            },
          ]
        : []),
      {
        name: "`, \", '",
        scope: ["punctuation.definition.string"],
        settings: {
          foreground: config.string,
        },
      },
      // other =================================================
      {
        name: "Comment",
        scope: ["comment", "punctuation.definition.comment"],
        settings: {
          fontStyle: "italic",
          foreground: config.comment,
        },
      },
      {
        scope: ["entity.name.function"],
        settings: {
          fontStyle: "italic",
          foreground: config.function,
        },
      },
      // JSX ===================================================
      {
        name: "jsx string",
        scope: ["meta.jsx.children"],
        settings: {
          foreground: config.string,
        },
      },
      {
        name: "jsx tag",
        scope: ["entity.name.tag"],
        settings: {
          foreground: config.primitiveType,
        },
      },
      {
        name: "jsx class tag",
        scope: ["support.class.component"],
        settings: {
          fontStyle: "bold",
          foreground: config.class,
        },
      },
      {
        name: "jsx class tag param",
        scope: ["entity.other.attribute-name"],
        settings: {
          foreground: config.property,
        },
      },
      // MARKDOWN ====================================
      {
        scope: ["entity.name.section.markdown"],
        settings: {
          foreground: config.class,
        },
      },
      {
        scope: ["markup.inline.raw.string"],
        settings: {
          foreground: config.string,
        },
      },
    ],
  };
}
