const { configs: tsEsLint } = require('./ts-es-lint');
const { configs: tsImport } = require('./imports');
const { configs: tsStylistic } = require('./ts-stylistic');

const configs = [
  ...tsEsLint,
  ...tsImport,
  ...tsStylistic,
];

module.exports = configs;
