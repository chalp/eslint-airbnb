const tsEsLint = require('typescript-eslint');
const stylisticTs = require('@stylistic/eslint-plugin-ts');
const { rules: baseStylisticRules } = require('../base/stylistic');
const { allTsFiles } = require('../lib/files');

const files = allTsFiles;

const rules = {
  '@stylistic/ts/brace-style': baseStylisticRules['@stylistic/js/brace-style'],

  '@stylistic/ts/comma-dangle': [
    baseStylisticRules['@stylistic/js/comma-dangle'][0],
    {
      ...baseStylisticRules['@stylistic/js/comma-dangle'][1],
      enums: baseStylisticRules['@stylistic/js/comma-dangle'][1].arrays,
      generics: baseStylisticRules['@stylistic/js/comma-dangle'][1].arrays,
      tuples: baseStylisticRules['@stylistic/js/comma-dangle'][1].arrays,
    },
  ],

  '@stylistic/ts/comma-spacing': baseStylisticRules['@stylistic/js/comma-spacing'],

  '@stylistic/ts/func-call-spacing': baseStylisticRules['@stylistic/js/func-call-spacing'],

  indent: 'off',
  '@stylistic/ts/indent': baseStylisticRules['@stylistic/js/indent'],

  'keyword-spacing': 'off',
  '@stylistic/ts/keyword-spacing': baseStylisticRules['@stylistic/js/keyword-spacing'],

  'lines-between-class-members': 'off',
  '@stylistic/ts/lines-between-class-members': baseStylisticRules['@stylistic/js/lines-between-class-members'],

  'no-extra-parens': 'off',
  '@stylistic/ts/no-extra-parens': baseStylisticRules['@stylistic/js/no-extra-parens'],

  'no-extra-semi': 'off',
  '@stylistic/ts/no-extra-semi': baseStylisticRules['@stylistic/js/no-extra-semi'],

  'space-before-blocks': 'off',
  '@stylistic/ts/space-before-blocks': baseStylisticRules['@stylistic/js/space-before-blocks'],

  quotes: 'off',
  '@stylistic/ts/quotes': baseStylisticRules['@stylistic/js/quotes'],

  semi: 'off',
  '@stylistic/ts/semi': baseStylisticRules['@stylistic/js/semi'],

  'space-before-function-paren': 'off',
  '@stylistic/ts/space-before-function-paren': baseStylisticRules['@stylistic/js/space-before-function-paren'],

  'space-infix-ops': 'off',
  '@stylistic/ts/space-infix-ops': baseStylisticRules['@stylistic/js/space-infix-ops'],

  'object-curly-spacing': 'off',
  '@stylistic/ts/object-curly-spacing': baseStylisticRules['@stylistic/js/object-curly-spacing'],
};

const configs = [
  {
    files,
    plugins: {
      '@stylistic/ts': stylisticTs,
    },
    languageOptions: {
      parser: tsEsLint.parser,
      sourceType: 'module',
    },
    rules,
  },
];

module.exports = {
  rules,
  configs,
};
