const jsFiles = ['**/*.js', '**/*.mjs', '**/*.cjs'];
const jsxFiles = ['**/*.jsx', '**/*.mjsx'];

const tsFiles = ['**/*.ts', '**/*.mts', '**/*.cts'];
const tsxFiles = ['**/*.tsx', '**/*.mtsx'];

const allTsFiles = [...tsxFiles, ...tsFiles];
const allSxFiles = [...jsxFiles, ...tsxFiles];

module.exports = {
  jsFiles,
  jsxFiles,
  tsxFiles,
  allSxFiles,
  allTsFiles,
};
