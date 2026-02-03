import globals from 'globals';
import base from './base/index.js';

export default [
  { ignores: ['node_modules/'] },
  ...base,
  {
    languageOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
    },
  },

  {
    files: ['**/*.*js'],
    rules: {
      'import/no-unresolved': 'off', // Doesn't support imports without a "main" field
      'import/extensions': ['error', 'always'],
    },
  },
];
