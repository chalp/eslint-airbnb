# eslint airbnb

This package provides a set of ESLint configurations (flat config) compatible with ESLint 9 and above.

Key points

- Supports flat configuration format (`eslint.config.mjs`).
- Works for both JavaScript and TypeScript projects.
- Requires ESLint v9 or newer.

Dependencies

Recommended versions (or newer):

```
node: >=22
eslint: >=9.0.0
@typescript-eslint/parser: >=8.0.0
@typescript-eslint/eslint-plugin: >=8.0.0
@stylistic/eslint-plugin: >=4.0.0
eslint-plugin-import: >=2.0.0
eslint-plugin-jsx-a11y: >=6.0.0
eslint-plugin-react: >=7.0.0
eslint-plugin-react-hooks: >=5.0.0
```

Usage

1) Install the dependencies in your project (example using npm):

```
npm install -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin @stylistic/eslint-plugin eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
```

2) Example `eslint.config.mjs` for JavaScript + React:

```js
import airbnbBase from '@chalp/eslint-airbnb/base';
import airbnbReact from '@chalp/eslint-airbnb/react';

export default [
  ...airbnbBase,
  ...airbnbReact,
];
```

3) Example `eslint.config.mjs` for TypeScript + React:

```js
import airbnbBase from '@chalp/eslint-airbnb/base';
import airbnbReact from '@chalp/eslint-airbnb/react';
import airbnbTypescript from '@chalp/eslint-airbnb/typescript';

export default [
  ...airbnbBase,
  ...airbnbReact,
  ...airbnbTypescript,
];
```

Notes

- This configuration suite targets modern versions of the ESLint ecosystem and recommends using `@stylistic/eslint-plugin` for formatting-related rules.
- When upgrading dependencies, watch plugin versions — incompatible plugin versions may cause configuration loading errors.

If you want, I can also prepare a small example project with a working `eslint.config.mjs` and commands for local verification.
