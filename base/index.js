const { configs: bestPractices } = require('./best-practices');
const { configs: errors } = require('./errors');
const { configs: es6 } = require('./es6');
const { configs: imports } = require('./imports');
const { configs: node } = require('./node');
const { configs: strict } = require('./strict');
const { configs: style } = require('./style');
const { configs: stylistic } = require('./stylistic');
const { configs: variables } = require('./variables');

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

module.exports = configs;
