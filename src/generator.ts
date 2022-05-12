import { Config, ColorLiteral } from "./config";

type Styles = "italic" | "bold" | "underline";
type FontStyle =
  | ""
  | Styles
  | `${Styles} ${Styles}`
  | `${Styles} ${Styles} ${Styles}`;

interface Theme {
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

export function generateTheme(config: Config, name: string): Theme {
  return {
    name: "ergonomic-theme",
    type: "dark",
    semanticHighlighting: true,
    semanticTokenColors: {
      // types
      class: {
        fontStyle: "bold",
        foreground: config.class,
      },
      type: {
        fontStyle: "bold",
        foreground: config.class,
      },
      interface: {
        fontStyle: "bold",
        foreground: config.class,
      },
      enum: {
        fontStyle: "bold",
        foreground: config.class,
      },
      enumMember: config.variables,
      typeParameter: {
        fontStyle: "bold",
        foreground: config.class,
      },
      namespace: {
        fontStyle: "bold",
        foreground: config.class,
      },
      // functions
      function: {
        fontStyle: "bold",
        foreground: config.function,
      },
      method: {
        fontStyle: "bold",
        foreground: config.function,
      },
      // variables
      variable: config.variables,
      parameter: config.parameter,
      property: {
        // fontStyle: "bold",
        foreground: config.property,
      },
      // NO WORKING
      comment: config.comment,
      string: config.string,
      operator: config.operators,
      keyword: config.keywords,
      stringLiteral: config.string,
      struct: {
        fontStyle: "bold",
        foreground: config.class,
      },
      macro: {
        fontStyle: "italic bold",
        foreground: config.function,
      },
      newOperator: config.keywords,
      numberLiteral: config.number,
      number: config.number,
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
        foreground: config.primitiveType,
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
          fontStyle: "bold italic",
          foreground: config.property,
        },
      },
      {
        name: "value: null, undefined",
        scope: ["constant.language.null", "constant.language.undefined"],
        settings: {
          fontStyle: "bold italic",
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
          // "fontStyle": "italic underline",
          foreground: "#FFFFFF",
        },
      },
      /* {
        "name": "${}",
        "scope": [
          "punctuation.definition.template-expression"
        ],
        "settings": {
          // "fontStyle": "italic underline",
          "foreground": "#4be4ff"
        }
      }, */
      {
        name: "`, \", '",
        scope: ["punctuation.definition.string"],
        settings: {
          // "fontStyle": "italic underline",
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
        // name: "Comment",
        scope: ["entity.name.function"],
        settings: {
          fontStyle: "bold",
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

/* "tokenColors": [
      {
        "name": "Comment",
        "scope": [
          "comment",
          "punctuation.definition.comment"
        ],
        "settings": {
          "fontStyle": "italic",
          "foreground": "#00EE00"
        }
      },
      {
        "name": "Variables",
        "scope": [
          "variable",
          "string constant.other.placeholder"
        ],
        "settings": {
          "foreground": "#EEFFFF"
        }
      },
      {
        "name": "Colors",
        "scope": [
          "constant.other.color"
        ],
        "settings": {
          "foreground": "#FF0000",
          "fontStyle": "italic bold underline"
        }
      },
      {
        "name": "Invalid",
        "scope": [
          "invalid",
          "invalid.illegal"
        ],
        "settings": {
          "foreground": "#FF5370"
        }
      },
      {
        "name": "Keyword, Storage",
        "scope": [
          "keyword",
          "storage.type",
          "storage.modifier"
        ],
        "settings": {
          "foreground": "#C792EA"
        }
      },
      {
        "name": "Operator, Misc",
        "scope": [
          "keyword.control",
          "constant.other.color",
          "punctuation",
          "meta.tag",
          "punctuation.definition.tag",
          "punctuation.separator.inheritance.php",
          "punctuation.definition.tag.html",
          "punctuation.definition.tag.begin.html",
          "punctuation.definition.tag.end.html",
          "punctuation.section.embedded",
          "keyword.other.template",
          "keyword.other.substitution"
        ],
        "settings": {
          "foreground": "#89DDFF"
        }
      },
      {
        "name": "Tag",
        "scope": [
          "entity.name.tag",
          "meta.tag.sgml",
          "markup.deleted.git_gutter"
        ],
        "settings": {
          "foreground": "#f07178"
        }
      },
      {
        "name": "Function, Special Method",
        "scope": [
          "entity.name.function",
          "meta.function-call",
          "variable.function",
          "support.function",
          "keyword.other.special-method"
        ],
        "settings": {
          "foreground": "#82AAFF"
        }
      },
      {
        "name": "Block Level Variables",
        "scope": [
          "meta.block variable.other"
        ],
        "settings": {
          "foreground": "#f07178"
        }
      },
      {
        "name": "Other Variable, String Link",
        "scope": [
          "support.other.variable",
          "string.other.link"
        ],
        "settings": {
          "foreground": "#f07178"
        }
      },
      {
        "name": "Number, Constant, Function Argument, Tag Attribute, Embedded",
        "scope": [
          "constant.numeric",
          "constant.language",
          "support.constant",
          "constant.character",
          "constant.escape",
          "variable.parameter",
          "keyword.other.unit",
          "keyword.other"
        ],
        "settings": {
          "foreground": "#F78C6C"
        }
      },
      {
        "name": "String, Symbols, Inherited Class, Markup Heading",
        "scope": [
          "string",
          "constant.other.symbol",
          "constant.other.key",
          "entity.other.inherited-class",
          "markup.heading",
          "markup.inserted.git_gutter",
          "meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js"
        ],
        "settings": {
          "foreground": "#C3E88D"
        }
      },
      {
        "name": "Class, Support",
        "scope": [
          "entity.name",
          "support.type",
          "support.class",
          "support.other.namespace.use.php",
          "meta.use.php",
          "support.other.namespace.php",
          "markup.changed.git_gutter",
          "support.type.sys-types"
        ],
        "settings": {
          "foreground": "#FFCB6B"
        }
      },
      {
        "name": "Entity Types",
        "scope": [
          "support.type"
        ],
        "settings": {
          "foreground": "#B2CCD6"
        }
      },
      {
        "name": "CSS Class and Support",
        "scope": [
          "source.css support.type.property-name",
          "source.sass support.type.property-name",
          "source.scss support.type.property-name",
          "source.less support.type.property-name",
          "source.stylus support.type.property-name",
          "source.postcss support.type.property-name"
        ],
        "settings": {
          "foreground": "#B2CCD6"
        }
      },
      {
        "name": "Sub-methods",
        "scope": [
          "entity.name.module.js",
          "variable.import.parameter.js",
          "variable.other.class.js"
        ],
        "settings": {
          "foreground": "#FF5370"
        }
      },
      {
        "name": "Language methods",
        "scope": [
          "variable.language"
        ],
        "settings": {
          "fontStyle": "italic",
          "foreground": "#FF5370"
        }
      },
      {
        "name": "entity.name.method.js",
        "scope": [
          "entity.name.method.js"
        ],
        "settings": {
          "fontStyle": "italic",
          "foreground": "#82AAFF"
        }
      },
      {
        "name": "meta.method.js",
        "scope": [
          "meta.class-method.js entity.name.function.js",
          "variable.function.constructor"
        ],
        "settings": {
          "foreground": "#82AAFF"
        }
      },
      {
        "name": "Attributes",
        "scope": [
          "entity.other.attribute-name"
        ],
        "settings": {
          "foreground": "#C792EA"
        }
      },
      {
        "name": "HTML Attributes",
        "scope": [
          "text.html.basic entity.other.attribute-name.html",
          "text.html.basic entity.other.attribute-name"
        ],
        "settings": {
          "fontStyle": "italic",
          "foreground": "#FFCB6B"
        }
      },
      {
        "name": "CSS Classes",
        "scope": [
          "entity.other.attribute-name.class"
        ],
        "settings": {
          "foreground": "#FFCB6B"
        }
      },
      {
        "name": "CSS ID's",
        "scope": [
          "source.sass keyword.control"
        ],
        "settings": {
          "foreground": "#82AAFF"
        }
      },
      {
        "name": "Inserted",
        "scope": [
          "markup.inserted"
        ],
        "settings": {
          "foreground": "#C3E88D"
        }
      },
      {
        "name": "Deleted",
        "scope": [
          "markup.deleted"
        ],
        "settings": {
          "foreground": "#FF5370"
        }
      },
      {
        "name": "Changed",
        "scope": [
          "markup.changed"
        ],
        "settings": {
          "foreground": "#C792EA"
        }
      },
      {
        "name": "Regular Expressions",
        "scope": [
          "string.regexp"
        ],
        "settings": {
          "foreground": "#89DDFF"
        }
      },
      {
        "name": "Escape Characters",
        "scope": [
          "constant.character.escape"
        ],
        "settings": {
          "foreground": "#89DDFF"
        }
      },
      {
        "name": "URL",
        "scope": [
          "*url*",
          "*link*",
          "*uri*"
        ],
        "settings": {
          "fontStyle": "underline"
        }
      },
      {
        "name": "Decorators",
        "scope": [
          "tag.decorator.js entity.name.tag.js",
          "tag.decorator.js punctuation.definition.tag.js"
        ],
        "settings": {
          "fontStyle": "italic",
          "foreground": "#82AAFF"
        }
      },
      {
        "name": "ES7 Bind Operator",
        "scope": [
          "source.js constant.other.object.key.js string.unquoted.label.js"
        ],
        "settings": {
          "fontStyle": "italic",
          "foreground": "#FF5370"
        }
      },
      {
        "name": "JSON Key - Level 0",
        "scope": [
          "source.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        "settings": {
          "foreground": "#C792EA"
        }
      },
      {
        "name": "JSON Key - Level 1",
        "scope": [
          "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        "settings": {
          "foreground": "#FFCB6B"
        }
      },
      {
        "name": "JSON Key - Level 2",
        "scope": [
          "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        "settings": {
          "foreground": "#F78C6C"
        }
      },
      {
        "name": "JSON Key - Level 3",
        "scope": [
          "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        "settings": {
          "foreground": "#FF5370"
        }
      },
      {
        "name": "JSON Key - Level 4",
        "scope": [
          "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        "settings": {
          "foreground": "#C17E70"
        }
      },
      {
        "name": "JSON Key - Level 5",
        "scope": [
          "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        "settings": {
          "foreground": "#82AAFF"
        }
      },
      {
        "name": "JSON Key - Level 6",
        "scope": [
          "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        "settings": {
          "foreground": "#f07178"
        }
      },
      {
        "name": "JSON Key - Level 7",
        "scope": [
          "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        "settings": {
          "foreground": "#C792EA"
        }
      },
      {
        "name": "JSON Key - Level 8",
        "scope": [
          "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        "settings": {
          "foreground": "#C3E88D"
        }
      },
      {
        "name": "Markdown - Plain",
        "scope": [
          "text.html.markdown",
          "punctuation.definition.list_item.markdown"
        ],
        "settings": {
          "foreground": "#EEFFFF"
        }
      },
      {
        "name": "Markdown - Markup Raw Inline",
        "scope": [
          "text.html.markdown markup.inline.raw.markdown"
        ],
        "settings": {
          "foreground": "#C792EA"
        }
      },
      {
        "name": "Markdown - Markup Raw Inline Punctuation",
        "scope": [
          "text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown"
        ],
        "settings": {
          "foreground": "#65737E"
        }
      },
      {
        "name": "Markdown - Heading",
        "scope": [
          "markdown.heading",
          "markup.heading | markup.heading entity.name",
          "markup.heading.markdown punctuation.definition.heading.markdown"
        ],
        "settings": {
          "foreground": "#C3E88D"
        }
      },
      {
        "name": "Markup - Italic",
        "scope": [
          "markup.italic"
        ],
        "settings": {
          "fontStyle": "italic",
          "foreground": "#f07178"
        }
      },
      {
        "name": "Markup - Bold",
        "scope": [
          "markup.bold",
          "markup.bold string"
        ],
        "settings": {
          "fontStyle": "bold",
          "foreground": "#f07178"
        }
      },
      {
        "name": "Markup - Bold-Italic",
        "scope": [
          "markup.bold markup.italic",
          "markup.italic markup.bold",
          "markup.quote markup.bold",
          "markup.bold markup.italic string",
          "markup.italic markup.bold string",
          "markup.quote markup.bold string"
        ],
        "settings": {
          "fontStyle": "bold",
          "foreground": "#f07178"
        }
      },
      {
        "name": "Markup - Underline",
        "scope": [
          "markup.underline"
        ],
        "settings": {
          "fontStyle": "underline",
          "foreground": "#F78C6C"
        }
      },
      {
        "name": "Markdown - Blockquote",
        "scope": [
          "markup.quote punctuation.definition.blockquote.markdown"
        ],
        "settings": {
          "foreground": "#65737E"
        }
      },
      {
        "name": "Markup - Quote",
        "scope": [
          "markup.quote"
        ],
        "settings": {
          "fontStyle": "italic"
        }
      },
      {
        "name": "Markdown - Link",
        "scope": [
          "string.other.link.title.markdown"
        ],
        "settings": {
          "foreground": "#82AAFF"
        }
      },
      {
        "name": "Markdown - Link Description",
        "scope": [
          "string.other.link.description.title.markdown"
        ],
        "settings": {
          "foreground": "#C792EA"
        }
      },
      {
        "name": "Markdown - Link Anchor",
        "scope": [
          "constant.other.reference.link.markdown"
        ],
        "settings": {
          "foreground": "#FFCB6B"
        }
      },
      {
        "name": "Markup - Raw Block",
        "scope": [
          "markup.raw.block"
        ],
        "settings": {
          "foreground": "#C792EA"
        }
      },
      {
        "name": "Markdown - Raw Block Fenced",
        "scope": [
          "markup.raw.block.fenced.markdown"
        ],
        "settings": {
          "foreground": "#00000050"
        }
      },
      {
        "name": "Markdown - Fenced Bode Block",
        "scope": [
          "punctuation.definition.fenced.markdown"
        ],
        "settings": {
          "foreground": "#00000050"
        }
      },
      {
        "name": "Markdown - Fenced Bode Block Variable",
        "scope": [
          "markup.raw.block.fenced.markdown",
          "variable.language.fenced.markdown",
          "punctuation.section.class.end"
        ],
        "settings": {
          "foreground": "#EEFFFF"
        }
      },
      {
        "name": "Markdown - Fenced Language",
        "scope": [
          "variable.language.fenced.markdown"
        ],
        "settings": {
          "foreground": "#65737E"
        }
      },
      {
        "name": "Markdown - Separator",
        "scope": [
          "meta.separator"
        ],
        "settings": {
          "fontStyle": "bold",
          "foreground": "#65737E"
        }
      },
      {
        "name": "Markup - Table",
        "scope": [
          "markup.table"
        ],
        "settings": {
          "foreground": "#EEFFFF"
        }
      }
    ] */
