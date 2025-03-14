const jsxStylistic = require('@stylistic/eslint-plugin-jsx');

const rules = {

  // Specify whether double or single quotes should be used in JSX attributes
  // https://eslint.org/docs/rules/jsx-quotes
  '@stylistic/js/jsx-quotes': ['error', 'prefer-double'],

  // Validate closing bracket location in JSX
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
  '@stylistic/jsx/jsx-closing-bracket-location': ['error', 'line-aligned'],

  // Validate closing tag location in JSX
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
  '@stylistic/jsx/jsx-closing-tag-location': 'error',

  // Enforce or disallow spaces inside curly braces in JSX attributes
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
  '@stylistic/jsx/jsx-curly-spacing': ['error', 'never', { allowMultiline: true }],

  // Validate props indentation in JSX
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
  '@stylistic/jsx/jsx-indent-props': ['error', 2],

  // Limit maximum of props on a single line in JSX
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
  '@stylistic/jsx/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],

  // Enforce props alphabetical sorting
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
  '@stylistic/jsx/jsx-sort-props': ['off', {
    ignoreCase: true,
    callbacksLast: false,
    shorthandFirst: false,
    shorthandLast: false,
    noSortAlphabetically: false,
    reservedFirst: true,
  }],

  // Prevent missing parentheses around multilines JSX
  // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/jsx-wrap-multilines.md
  '@stylistic/jsx/jsx-wrap-multilines': ['error', {
    declaration: 'parens-new-line',
    assignment: 'parens-new-line',
    return: 'parens-new-line',
    arrow: 'parens-new-line',
    condition: 'parens-new-line',
    logical: 'parens-new-line',
    prop: 'parens-new-line',
  }],

  // Require that the first prop in a JSX element be on a new line when the element is multiline
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
  '@stylistic/jsx/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],

  // Enforce spacing around jsx equals signs
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
  '@stylistic/jsx/jsx-equals-spacing': ['error', 'never'],

  // Enforce JSX indentation
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
  '@stylistic/jsx/jsx-indent': ['error', 2],

  // Validate whitespace in and around the JSX opening and closing brackets
  // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/jsx-tag-spacing.md
  '@stylistic/jsx/jsx-tag-spacing': ['error', {
    closingSlash: 'never',
    beforeSelfClosing: 'always',
    afterOpening: 'never',
    beforeClosing: 'never',
  }],

  // Enforce curly braces or disallow unnecessary curly braces in JSX props and/or children
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
  '@stylistic/jsx/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],

  // One JSX Element Per Line
  // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/jsx-one-expression-per-line.md
  '@stylistic/jsx/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],

  // Ensures inline tags are not rendered without spaces between them
  '@stylistic/jsx/jsx-child-element-spacing': 'off',

  // Disallow multiple spaces between inline JSX props
  // https://github.com/yannickcr/eslint-plugin-react/blob/ac102885765be5ff37847a871f239c6703e1c7cc/docs/rules/jsx-props-no-multi-spaces.md
  '@stylistic/jsx/jsx-props-no-multi-spaces': 'error',

  // Enforce linebreaks in curly braces in JSX attributes and expressions.
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-newline.md
  '@stylistic/jsx/jsx-curly-newline': ['error', {
    multiline: 'consistent',
    singleline: 'consistent',
  }],

  // Enforce a new line after jsx elements and expressions
  // https://github.com/yannickcr/eslint-plugin-react/blob/e2eaadae316f9506d163812a09424eb42698470a/docs/rules/jsx-newline.md
  '@stylistic/jsx/jsx-newline': 'off',
};

const configs = [
  {
    plugins: {
      '@stylistic/jsx': jsxStylistic,
    },
    rules,
  },
];

module.exports = {
  rules,
  configs,
};
