import { configs as bestPractices } from './best-practices.js';
import { configs as errors } from './errors.js';
import { configs as es6 } from './es6.js';
import { configs as imports } from './imports.js';
import { configs as node } from './node.js';
import { configs as strict } from './strict.js';
import { configs as style } from './style.js';
import { configs as stylistic } from './stylistic.js';
import { configs as variables } from './variables.js';

const configs = [
  ...bestPractices,
  ...errors,
  ...es6,
  ...imports,
  ...node,
  ...strict,
  ...style,
  ...stylistic,
  ...variables,
];

export default configs;
