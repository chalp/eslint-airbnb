const tsEsLint = require('typescript-eslint');
const { rules: baseBestPracticesRules } = require('../base/best-practices');
const { rules: baseES6Rules } = require('../base/es6');
const { rules: baseStyleRules } = require('../base/style');
const { rules: baseVariablesRules } = require('../base/variables');
const { allTsFiles } = require('../lib/files');

const files = allTsFiles;

const rules = {
  camelcase: 'off',
  '@typescript-eslint/naming-convention': [
    'error',
    // Allow camelCase variables (23.2), PascalCase
    // variables (23.8), and UPPER_CASE variables (23.10)
    {
      selector: 'variable',
      format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
    },
    // Allow camelCase functions (23.2), and PascalCase functions (23.8)
    {
      selector: 'function',
      format: ['camelCase', 'PascalCase'],
    },
    // Airbnb recommends PascalCase for classes (23.3), and although Airbnb
    // does not make TypeScript recommendations, we are assuming this rule
    // would similarly apply to anything "type like", including interfaces,
    // type aliases, and enums
    {
      selector: 'typeLike',
      format: ['PascalCase'],
    },
  ],

  'default-param-last': 'off',
  '@typescript-eslint/default-param-last': baseBestPracticesRules['default-param-last'],

  '@typescript-eslint/consistent-type-imports': 'error',

  'dot-notation': 'off',
  '@typescript-eslint/dot-notation': baseBestPracticesRules['dot-notation'],

  'no-array-constructor': 'off',
  '@typescript-eslint/no-array-constructor': baseStyleRules['no-array-constructor'],

  'no-dupe-class-members': 'off',
  '@typescript-eslint/no-dupe-class-members': baseES6Rules['no-dupe-class-members'],

  'no-empty-function': 'off',
  '@typescript-eslint/no-empty-function': baseBestPracticesRules['no-empty-function'],

  'no-implied-eval': 'off',
  'no-new-func': 'off',
  '@typescript-eslint/no-implied-eval': baseBestPracticesRules['no-implied-eval'],

  'no-loop-func': 'off',
  '@typescript-eslint/no-loop-func': baseBestPracticesRules['no-loop-func'],

  'no-magic-numbers': 'off',
  '@typescript-eslint/no-magic-numbers': baseBestPracticesRules['no-magic-numbers'],

  'no-redeclare': 'off',
  '@typescript-eslint/no-redeclare': baseBestPracticesRules['no-redeclare'],

  'no-shadow': 'off',
  '@typescript-eslint/no-shadow': baseVariablesRules['no-shadow'],

  'no-throw-literal': 'off',
  '@typescript-eslint/only-throw-error': baseBestPracticesRules['no-throw-literal'],

  'no-unused-expressions': 'off',
  '@typescript-eslint/no-unused-expressions': baseBestPracticesRules['no-unused-expressions'],

  'no-unused-vars': 'off',
  '@typescript-eslint/no-unused-vars': baseVariablesRules['no-unused-vars'],

  'no-use-before-define': 'off',
  '@typescript-eslint/no-use-before-define': baseVariablesRules['no-use-before-define'],

  'no-useless-constructor': 'off',
  '@typescript-eslint/no-useless-constructor': baseES6Rules['no-useless-constructor'],

  'require-await': 'off',
  '@typescript-eslint/require-await': baseBestPracticesRules['require-await'],

  'no-return-await': 'off',
  '@typescript-eslint/return-await': [
    baseBestPracticesRules['no-return-await'],
    'in-try-catch',
  ],
};

const configs = [
  ...(tsEsLint.configs.recommended.map((conf) => ({
    ...conf,
    files,
  }))),
  {
    files,
    rules,
  },
  {
    files,
    rules: {
      // The following rules are enabled in Airbnb config, but are
      // already checked (more thoroughly) by the TypeScript compiler
      // Some of the rules also fail in TypeScript files, for example:
      // https://github.com/typescript-eslint/typescript-eslint/issues/662#issuecomment-507081586
      // Rules are inspired by:
      // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/eslint-recommended.ts
      ...tsEsLint.plugin.configs['eslint-recommended'].overrides.rules,

    },
  },
];

module.exports = {
  rules,
  configs,
};
