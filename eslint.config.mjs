import globals from 'globals';
import airbnbBase from './base/index.js';
import airbnbTypescript from './typescript/index.js';
import airbnbReact from './react/index.js';

export default [
  ...airbnbBase,
  ...airbnbTypescript,
  ...airbnbReact,
  {
    languageOptions: {
      ecmaVersion: 2022,
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
