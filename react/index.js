const { configs: react } = require('./react');
const { configs: imports } = require('./imports');
const { configs: reactA11y } = require('./react-a11y');
const { configs: reactHooks } = require('./react-hooks');
const { configs: stylisticJsx } = require('./jsx-stylistic');

const configs = [
  ...react,
  ...imports,
  ...reactHooks,
  ...reactA11y,
  ...stylisticJsx,
];

module.exports = configs;
