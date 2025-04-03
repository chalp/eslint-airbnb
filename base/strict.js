const rules = {
  // babel inserts `'use strict';` for us
  strict: ['error', 'never'],
};

const configs = [
  {
    rules,
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 2018,
    },
  },
];

export {
  rules,
  configs,
};
