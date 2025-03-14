const eslintPluginImport = require('eslint-plugin-import');

const rules = {};

const configs = [
  eslintPluginImport.flatConfigs.react,
];

module.exports = {
  rules,
  configs,
};
