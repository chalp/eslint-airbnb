const globals = require('globals');
const airbnbBase = require('./base');

module.exports = [
  { ignores: ['node_modules/'] },
  ...airbnbBase,
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
    },
  },
];
