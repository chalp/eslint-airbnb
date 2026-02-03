import parser from '@typescript-eslint/parser';
import eslintPluginImport from 'eslint-plugin-import';

const rules = {
  // The following rules are enabled in Airbnb config,
  // but are recommended to be disabled within TypeScript projects
  // See: https://typescript-eslint.io/troubleshooting/typed-linting/performance/#eslint-plugin-import
  'import/named': 'warn',
  'import/namespace': 'warn',
  'import/default': 'warn',
  'import/no-named-as-default-member': 'warn',
  // Disable `import/no-unresolved`
  // The rule offers little value in a TypeScript world,
  // as the TypeScript compiler will catch these errors
  'import/no-unresolved': 'off',
};

const configs = [
  {
    ...eslintPluginImport.flatConfigs.typescript,
    languageOptions: {
      parser,
      sourceType: 'module',
    },
    rules,
  },
];

export {
  rules,
  configs,
};
