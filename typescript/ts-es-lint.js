import tsEsLint from '@typescript-eslint/eslint-plugin';
import { rules as baseBestPracticesRules } from '../base/best-practices.js';
import { rules as baseES6Rules } from '../base/es6.js';
import { rules as baseStyleRules } from '../base/style.js';
import { rules as baseVariablesRules } from '../base/variables.js';
import { allTsFiles } from '../lib/files.js';

const files = allTsFiles;

// Собираем правила из конфигурации `eslint-recommended` плагина.
// В некоторых сборках `configs['eslint-recommended'].overrides` — массив с объектами
// вида { files, rules }, поэтому нужно аккуратно собрать все `rules`.
const eslintRecommendedRules = (() => {
  const cfg = tsEsLint && tsEsLint.configs && tsEsLint.configs['eslint-recommended'];

  if (!cfg) {
    return {};
  }

  const overrides = cfg.overrides || [];

  // overrides может быть объектом с полем rules или массивом
  if (Array.isArray(overrides)) {
    const merged = {};
    overrides.forEach((o) => Object.assign(merged, o.rules || {}));

    return merged;
  }

  // если overrides — объект
  return overrides.rules || {};
})();

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
      ...eslintRecommendedRules,

    },
  },
];

export {
  rules,
  configs,
};
