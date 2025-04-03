import { configs as tsEsLint } from './ts-es-lint.js';
import { configs as tsImport } from './imports.js';
import { configs as tsStylistic } from './ts-stylistic.js';

const configs = [
  ...tsEsLint,
  ...tsImport,
  ...tsStylistic,
];

export default configs;
