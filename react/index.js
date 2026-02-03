import { configs as react } from './react.js';
import { configs as imports } from './imports.js';
import { configs as reactA11y } from './react-a11y.js';
import { configs as reactHooks } from './react-hooks.js';
import { configs as stylisticJsx } from './jsx-stylistic.js';

const configs = [
  ...react,
  ...imports,
  ...reactHooks,
  ...reactA11y,
  ...stylisticJsx,
];

export default configs;
