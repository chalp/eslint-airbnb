import stylisticPlugin from '@stylistic/eslint-plugin';

const rules = {
  // disallow the use of leading or trailing decimal points in numeric literals
  // https://eslint.org/docs/rules/no-floating-decimal
  '@stylistic/no-floating-decimal': 'error',

  // enforces consistent newlines before or after dots
  // https://eslint.org/docs/rules/dot-location
  '@stylistic/dot-location': ['error', 'property'],

  // disallow use of multiple spaces
  // https://eslint.org/docs/rules/no-multi-spaces
  '@stylistic/no-multi-spaces': ['error', {
    ignoreEOLComments: false,
  }],

  // require immediate function invocation to be wrapped in parentheses
  // https://eslint.org/docs/rules/wrap-iife.html
  '@stylistic/wrap-iife': ['error', 'any', { functionPrototypeMethods: true }],

  // disallow unnecessary parentheses
  // https://eslint.org/docs/rules/no-extra-parens
  '@stylistic/no-extra-parens': ['off', 'all', {
    conditionalAssign: true,
    nestedBinaryExpressions: false,
    returnAssign: false,
    ignoreJSX: 'all', // delegate to eslint-plugin-react
    enforceForArrowConditionals: false,
  }],

  // disallow unnecessary semicolons
  '@stylistic/no-extra-semi': 'error',

  // require parens in arrow function arguments
  // https://eslint.org/docs/rules/arrow-parens
  '@stylistic/arrow-parens': ['error', 'always'],

  // require space before/after arrow function's arrow
  // https://eslint.org/docs/rules/arrow-spacing
  '@stylistic/arrow-spacing': ['error', { before: true, after: true }],

  // enforce the spacing around the * in generator functions
  // https://eslint.org/docs/rules/generator-star-spacing
  '@stylistic/generator-star-spacing': ['error', { before: false, after: true }],

  // disallow arrow functions where they could be confused with comparisons
  // https://eslint.org/docs/rules/no-confusing-arrow
  '@stylistic/no-confusing-arrow': ['error', {
    allowParens: true,
  }],

  // enforce spacing between object rest-spread
  // https://eslint.org/docs/rules/rest-spread-spacing
  '@stylistic/rest-spread-spacing': ['error', 'never'],

  // enforce usage of spacing in template strings
  // https://eslint.org/docs/rules/template-curly-spacing
  '@stylistic/template-curly-spacing': 'error',

  // enforce spacing around the * in yield* expressions
  // https://eslint.org/docs/rules/yield-star-spacing
  '@stylistic/yield-star-spacing': ['error', 'after'],

  // enforce line breaks after opening and before closing array brackets
  // https://eslint.org/docs/rules/array-bracket-newline
  // TODO: enable? semver-major
  '@stylistic/array-bracket-newline': ['off', 'consistent'], // object option alternative: { multiline: true, minItems: 3 }

  // enforce line breaks between array elements
  // https://eslint.org/docs/rules/array-element-newline
  // TODO: enable? semver-major
  '@stylistic/array-element-newline': ['off', { multiline: true, minItems: 3 }],

  // enforce spacing inside array brackets
  '@stylistic/array-bracket-spacing': ['error', 'never'],

  // enforce spacing inside single-line blocks
  // https://eslint.org/docs/rules/block-spacing
  '@stylistic/block-spacing': ['error', 'always'],

  // enforce one true brace style
  '@stylistic/brace-style': ['error', '1tbs'],

  // require trailing commas in multiline object literals
  '@stylistic/comma-dangle': ['error', {
    arrays: 'always-multiline',
    objects: 'always-multiline',
    imports: 'always-multiline',
    exports: 'always-multiline',
    functions: 'always-multiline',
  }],

  // enforce spacing before and after comma
  '@stylistic/comma-spacing': ['error', { before: false, after: true }],

  // enforce one true comma style
  '@stylistic/comma-style': ['error', 'last', {
    exceptions: {
      ArrayExpression: false,
      ArrayPattern: false,
      ArrowFunctionExpression: false,
      CallExpression: false,
      FunctionDeclaration: false,
      FunctionExpression: false,
      ImportDeclaration: false,
      ObjectExpression: false,
      ObjectPattern: false,
      VariableDeclaration: false,
      NewExpression: false,
    },
  }],

  // disallow padding inside computed properties
  '@stylistic/computed-property-spacing': ['error', 'never'],

  // enforce newline at the end of file, with no multiple empty lines
  '@stylistic/eol-last': ['error', 'always'],

  // https://eslint.org/docs/rules/function-call-argument-newline
  '@stylistic/function-call-argument-newline': ['error', 'consistent'],

  // enforce spacing between functions and their invocations
  // https://eslint.org/docs/rules/func-call-spacing
  '@stylistic/function-call-spacing': ['error', 'never'],

  // require line breaks inside function parentheses if there are line breaks between parameters
  // https://eslint.org/docs/rules/function-paren-newline
  '@stylistic/function-paren-newline': ['error', 'multiline-arguments'],

  // Enforce the location of arrow function bodies with implicit returns
  // https://eslint.org/docs/rules/implicit-arrow-linebreak
  '@stylistic/implicit-arrow-linebreak': ['error', 'beside'],

  // this option sets a specific tab width for your code
  // https://eslint.org/docs/rules/indent'
  '@stylistic/indent': ['error', 2, {
    SwitchCase: 1,
    VariableDeclarator: 1,
    outerIIFEBody: 1,
    // MemberExpression: null,
    FunctionDeclaration: {
      parameters: 1,
      body: 1,
    },
    FunctionExpression: {
      parameters: 1,
      body: 1,
    },
    CallExpression: {
      arguments: 1,
    },
    ArrayExpression: 1,
    ObjectExpression: 1,
    ImportDeclaration: 1,
    flatTernaryExpressions: false,
    // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
    ignoredNodes: ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXFragment', 'JSXOpeningFragment', 'JSXClosingFragment', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
    ignoreComments: false,
  }],

  // specify whether double or single quotes should be used in JSX attributes
  // https://eslint.org/docs/rules/jsx-quotes
  '@stylistic/jsx-quotes': ['off', 'prefer-double'],

  // enforces spacing between keys and values in object literal properties
  '@stylistic/key-spacing': ['error', { beforeColon: false, afterColon: true }],

  // require a space before & after certain keywords
  '@stylistic/keyword-spacing': ['error', {
    before: true,
    after: true,
    overrides: {
      return: { after: true },
      throw: { after: true },
      case: { after: true },
    },
  }],

  // disallow mixed 'LF' and 'CRLF' as linebreaks
  // https://eslint.org/docs/rules/linebreak-style
  '@stylistic/linebreak-style': ['error', 'unix'],

  // require or disallow an empty line between class members
  // https://eslint.org/docs/rules/lines-between-class-members
  '@stylistic/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: false }],

  // enforces empty lines around comments
  '@stylistic/lines-around-comment': 'off',

  // specify the maximum length of a line in your program
  // https://eslint.org/docs/rules/max-len
  '@stylistic/max-len': ['error', 100, 2, {
    ignoreUrls: true,
    ignoreComments: false,
    ignoreRegExpLiterals: true,
    ignoreStrings: true,
    ignoreTemplateLiterals: true,
  }],

  // restrict the number of statements per line
  // https://eslint.org/docs/rules/max-statements-per-line
  '@stylistic/max-statements-per-line': ['off', { max: 1 }],

  // require multiline ternary
  // https://eslint.org/docs/rules/multiline-ternary
  // TODO: enable?
  '@stylistic/multiline-ternary': ['off', 'never'],

  // disallow the omission of parentheses when invoking a constructor with no arguments
  // https://eslint.org/docs/rules/new-parens
  '@stylistic/new-parens': 'error',

  // enforces new line after each method call in the chain to make it
  // more readable and easy to maintain
  // https://eslint.org/docs/rules/newline-per-chained-call
  '@stylistic/newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],

  // disallow un-paren'd mixes of different operators
  // https://eslint.org/docs/rules/no-mixed-operators
  '@stylistic/no-mixed-operators': ['error', {
    // the list of arithmetic groups disallows mixing `%` and `**`
    // with other arithmetic operators.
    groups: [
      ['%', '**'],
      ['%', '+'],
      ['%', '-'],
      ['%', '*'],
      ['%', '/'],
      ['/', '*'],
      ['&', '|', '<<', '>>', '>>>'],
      ['==', '!=', '===', '!=='],
      ['&&', '||'],
    ],
    allowSamePrecedence: false,
  }],

  // disallow mixed spaces and tabs for indentation
  '@stylistic/no-mixed-spaces-and-tabs': 'error',

  // disallow multiple empty lines, only one newline at the end, and no new lines at the beginning
  // https://eslint.org/docs/rules/no-multiple-empty-lines
  '@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],

  // disallow tab characters entirely
  '@stylistic/no-tabs': 'error',

  // disallow trailing whitespace at the end of lines
  '@stylistic/no-trailing-spaces': ['error', {
    skipBlankLines: false,
    ignoreComments: false,
  }],

  // disallow whitespace before properties
  // https://eslint.org/docs/rules/no-whitespace-before-property
  '@stylistic/no-whitespace-before-property': 'error',

  // enforce the location of single-line statements
  // https://eslint.org/docs/rules/nonblock-statement-body-position
  '@stylistic/nonblock-statement-body-position': ['error', 'beside', { overrides: {} }],

  // require padding inside curly braces
  '@stylistic/object-curly-spacing': ['error', 'always'],

  // enforce line breaks between braces
  // https://eslint.org/docs/rules/object-curly-newline
  '@stylistic/object-curly-newline': ['error', {
    ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
    ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
    ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
    ExportDeclaration: { minProperties: 4, multiline: true, consistent: true },
  }],

  // enforce "same line" or "multiple line" on object properties.
  // https://eslint.org/docs/rules/object-property-newline
  '@stylistic/object-property-newline': ['error', {
    allowAllPropertiesOnSameLine: true,
  }],

  // require a newline around variable declaration
  // https://eslint.org/docs/rules/one-var-declaration-per-line
  '@stylistic/one-var-declaration-per-line': ['error', 'always'],
  // Requires operator at the beginning of the line in multiline statements
  // https://eslint.org/docs/rules/operator-linebreak
  '@stylistic/operator-linebreak': ['error', 'before', { overrides: { '=': 'none' } }],

  // disallow padding within blocks
  '@stylistic/padded-blocks': ['error', {
    blocks: 'never',
    classes: 'never',
    switches: 'never',
  }, {
    allowSingleLineBlocks: true,
  }],

  // Require or disallow padding lines between statements
  // https://eslint.org/docs/rules/padding-line-between-statements
  '@stylistic/padding-line-between-statements': ['error',
    // require a blank line after any block (e.g. function, if, loop) before the next statement
    { blankLine: 'always', prev: 'block-like', next: '*' },
  ],

  // require quotes around object literal property names
  // https://eslint.org/docs/rules/quote-props.html
  '@stylistic/quote-props': ['error', 'as-needed', { keywords: false, unnecessary: true, numbers: false }],

  // specify whether double or single quotes should be used
  '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],

  // require or disallow use of semicolons instead of ASI
  '@stylistic/semi': ['error', 'always'],

  // enforce spacing before and after semicolons
  '@stylistic/semi-spacing': ['error', { before: false, after: true }],

  // Enforce location of semicolons
  // https://eslint.org/docs/rules/semi-style
  '@stylistic/semi-style': ['error', 'last'],

  // require or disallow space before blocks
  '@stylistic/space-before-blocks': 'error',

  // require or disallow space before function opening parenthesis
  // https://eslint.org/docs/rules/space-before-function-paren
  '@stylistic/space-before-function-paren': ['error', {
    anonymous: 'always',
    named: 'never',
    asyncArrow: 'always',
  }],

  // require or disallow spaces inside parentheses
  '@stylistic/space-in-parens': ['error', 'never'],

  // require spaces around operators
  '@stylistic/space-infix-ops': 'error',

  // Require or disallow spaces before/after unary operators
  // https://eslint.org/docs/rules/space-unary-ops
  '@stylistic/space-unary-ops': ['error', {
    words: true,
    nonwords: false,
    overrides: {
    },
  }],

  // require or disallow a space immediately following the // or /* in a comment
  // https://eslint.org/docs/rules/spaced-comment
  '@stylistic/spaced-comment': ['error', 'always', {
    line: {
      exceptions: ['-', '+'],
      markers: ['=', '!', '/'], // space here to support sprockets directives, slash for TS /// comments
    },
    block: {
      exceptions: ['-', '+'],
      markers: ['=', '!', ':', '::'], // space here to support sprockets directives and flow comment types
      balanced: true,
    },
  }],

  // Enforce spacing around colons of switch statements
  // https://eslint.org/docs/rules/switch-colon-spacing
  '@stylistic/switch-colon-spacing': ['error', { after: true, before: false }],

  // Require or disallow spacing between template tags and their literals
  // https://eslint.org/docs/rules/template-tag-spacing
  '@stylistic/template-tag-spacing': ['error', 'never'],

  // require or disallow the Unicode Byte Order Mark
  // https://eslint.org/docs/rules/unicode-bom
  'unicode-bom': ['error', 'never'],

  // require regex literals to be wrapped in parentheses
  '@stylistic/wrap-regex': 'off',
};

const configs = [
  {
    plugins: {
      '@stylistic': stylisticPlugin,
    },
    rules,
  },
];

export {
  rules,
  configs,
};
