import { default as stylisticPlugin } from '@stylistic/eslint-plugin';

import { allSxFiles } from '../lib/files.js';

const files = allSxFiles;

// These @stylistic rules are intentionally applied only to JSX/TSX files
// to enforce JSX-specific formatting (e.g. double quotes in JSX attributes)
// and to override base stylistic defaults where required.
const rules = {

  // Specify whether double or single quotes should be used in JSX attributes
  // https://eslint.org/docs/rules/jsx-quotes
  '@stylistic/jsx-quotes': ['error', 'prefer-double'],

  // Validate closing bracket location in JSX
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
  '@stylistic/jsx-closing-bracket-location': ['error', 'line-aligned'],

  // Validate closing tag location in JSX
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
  '@stylistic/jsx-closing-tag-location': 'error',

  // Enforce or disallow spaces inside curly braces in JSX attributes
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
  '@stylistic/jsx-curly-spacing': ['error', 'never', { allowMultiline: true }],

  // Validate props indentation in JSX
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
  '@stylistic/jsx-indent-props': ['error', 2],

  // Limit maximum of props on a single line in JSX
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
  '@stylistic/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],

  // Enforce props alphabetical sorting
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
  '@stylistic/jsx-sort-props': ['off', {
    ignoreCase: true,
    callbacksLast: false,
    shorthandFirst: false,
    shorthandLast: false,
    noSortAlphabetically: false,
    reservedFirst: true,
  }],

  // Prevent missing parentheses around multilines JSX
  // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/jsx-wrap-multilines.md
  '@stylistic/jsx-wrap-multilines': ['error', {
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
  '@stylistic/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],

  // Enforce spacing around jsx equals signs
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
  '@stylistic/jsx-equals-spacing': ['error', 'never'],

  // Enforce JSX indentation
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
  '@stylistic/jsx-indent': ['error', 2],

  // Validate whitespace in and around the JSX opening and closing brackets
  // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/jsx-tag-spacing.md
  '@stylistic/jsx-tag-spacing': ['error', {
    closingSlash: 'never',
    beforeSelfClosing: 'always',
    afterOpening: 'never',
    beforeClosing: 'never',
  }],

  // Enforce curly braces or disallow unnecessary curly braces in JSX props and/or children
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
  '@stylistic/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],

  // One JSX Element Per Line
  // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/jsx-one-expression-per-line.md
  '@stylistic/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],

  // Ensures inline tags are not rendered without spaces between them
  '@stylistic/jsx-child-element-spacing': 'off',

  // Disallow multiple spaces between inline JSX props
  // https://github.com/yannickcr/eslint-plugin-react/blob/ac102885765be5ff37847a871f239c6703e1c7cc/docs/rules/jsx-props-no-multi-spaces.md
  '@stylistic/jsx-props-no-multi-spaces': 'error',

  // Enforce linebreaks in curly braces in JSX attributes and expressions.
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-newline.md
  '@stylistic/jsx-curly-newline': ['error', {
    multiline: 'consistent',
    singleline: 'consistent',
  }],

  // Enforce a new line after jsx elements and expressions
  // https://github.com/yannickcr/eslint-plugin-react/blob/e2eaadae316f9506d163812a09424eb42698470a/docs/rules/jsx-newline.md
  '@stylistic/jsx-newline': 'off',
};

const configs = [
  {
    files,
    plugins: {
      '@stylistic': stylisticPlugin,
    },
    rules,
  },
];

export {
  rules,
  configs,
};
