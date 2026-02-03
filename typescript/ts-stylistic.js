import parser from '@typescript-eslint/parser';
import stylisticPlugin from '@stylistic/eslint-plugin';
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

  '@stylistic/indent': baseStylisticRules['@stylistic/indent'],

  '@stylistic/keyword-spacing': baseStylisticRules['@stylistic/keyword-spacing'],

  '@stylistic/lines-between-class-members': baseStylisticRules['@stylistic/lines-between-class-members'],

  '@stylistic/no-extra-parens': baseStylisticRules['@stylistic/no-extra-parens'],

  '@stylistic/no-extra-semi': baseStylisticRules['@stylistic/no-extra-semi'],

  '@stylistic/space-before-blocks': baseStylisticRules['@stylistic/space-before-blocks'],

  '@stylistic/quotes': baseStylisticRules['@stylistic/quotes'],

  '@stylistic/semi': baseStylisticRules['@stylistic/semi'],

  '@stylistic/space-before-function-paren': baseStylisticRules['@stylistic/space-before-function-paren'],

  '@stylistic/space-infix-ops': baseStylisticRules['@stylistic/space-infix-ops'],

  '@stylistic/object-curly-spacing': baseStylisticRules['@stylistic/object-curly-spacing'],
  '@stylistic/padding-line-between-statements': baseStylisticRules['@stylistic/padding-line-between-statements'],
};

const configs = [
  {
    files,
    plugins: {
      '@stylistic': stylisticPlugin,
    },
    languageOptions: {
      parser,
      sourceType: 'module',
    },
    rules,
  },
];

export {
  rules,
  configs,
};
