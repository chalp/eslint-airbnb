import tsEsLint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';
import { rules as baseStylisticRules } from '../base/stylistic.js';
import { allTsFiles } from '../lib/files.js';

const files = allTsFiles;

const rules = {
  '@stylistic/brace-style': baseStylisticRules['@stylistic/brace-style'],

  '@stylistic/comma-dangle': [
    baseStylisticRules['@stylistic/comma-dangle'][0],
    {
      ...baseStylisticRules['@stylistic/comma-dangle'][1],
      enums: baseStylisticRules['@stylistic/comma-dangle'][1].arrays,
      generics: baseStylisticRules['@stylistic/comma-dangle'][1].arrays,
      tuples: baseStylisticRules['@stylistic/comma-dangle'][1].arrays,
    },
  ],

  '@stylistic/comma-spacing': baseStylisticRules['@stylistic/comma-spacing'],

  '@stylistic/function-call-spacing': baseStylisticRules['@stylistic/function-call-spacing'],

  indent: 'off',
  '@stylistic/indent': baseStylisticRules['@stylistic/indent'],

  'keyword-spacing': 'off',
  '@stylistic/keyword-spacing': baseStylisticRules['@stylistic/keyword-spacing'],

  'lines-between-class-members': 'off',
  '@stylistic/lines-between-class-members': baseStylisticRules['@stylistic/lines-between-class-members'],

  'no-extra-parens': 'off',
  '@stylistic/no-extra-parens': baseStylisticRules['@stylistic/no-extra-parens'],

  'no-extra-semi': 'off',
  '@stylistic/no-extra-semi': baseStylisticRules['@stylistic/no-extra-semi'],

  'space-before-blocks': 'off',
  '@stylistic/space-before-blocks': baseStylisticRules['@stylistic/space-before-blocks'],

  quotes: 'off',
  '@stylistic/quotes': baseStylisticRules['@stylistic/quotes'],

  semi: 'off',
  '@stylistic/semi': baseStylisticRules['@stylistic/semi'],

  'space-before-function-paren': 'off',
  '@stylistic/space-before-function-paren': baseStylisticRules['@stylistic/space-before-function-paren'],

  'space-infix-ops': 'off',
  '@stylistic/space-infix-ops': baseStylisticRules['@stylistic/space-infix-ops'],

  'object-curly-spacing': 'off',
  '@stylistic/object-curly-spacing': baseStylisticRules['@stylistic/object-curly-spacing'],
  '@stylistic/padding-line-between-statements': baseStylisticRules['@stylistic/padding-line-between-statements'],
};

const configs = [
  {
    files,
    plugins: {
      '@stylistic': stylistic,
    },
    languageOptions: {
      parser: tsEsLint.parser,
      sourceType: 'module',
    },
    rules,
  },
];

export {
  rules,
  configs,
};
