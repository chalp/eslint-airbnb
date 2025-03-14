# eslint airbnb

Enhances Airbnb's ESLint config with TypeScript support

> [!IMPORTANT]
>
>
> This project is a fork of eslint-config-airbnb-typescript. It modernizes it and introduces several breaking changes:
>
> - Only flat config (eslint.config.mjs) is supported
> - Minimum ESLint version of `9.0.0`
> - Minimum typescript-eslint version of `8.0.0`
>
> The benefits are that it supports the latest ESLint ecosystem versions:
>
> - ESLint 9
> - typescript-eslint 8
> - Includes eslint-config-airbnb-base, eslint-config-airbnb packages rewritten to take into account the new @stylistic rules
> - Uses @stylistic rules in preparation for ESLint deprecation of formatting rules

---

## Migration from eslint-config-airbnb-typescript

1. Ensure that your ESLint packages are within the compatible version range, most notably:

   ```txt
   node: >=22
   eslint: >=9.0.0
   typescript-eslint: >=8.0.0
   @stylistic/eslint-plugin-js: >= 3.0.0,
   @stylistic/eslint-plugin-jsx: >= 3.0.0,
   @stylistic/eslint-plugin-ts": >= 3.0.0,
   eslint-plugin-import": >= 2.0.0,
   eslint-plugin-jsx-a11y": >= 6.0.0,
   eslint-plugin-react": >= 7.0.0,
   eslint-plugin-react-hooks": >= 5.0.0
   ```

1. Run this command to bootstrap a flat config file:

   ```sh
   npx @eslint/migrate-config .eslintrc.cjs
   ```

1. Since most dependencies support flat config now, you can likely remove the `compat` variable and its dependent code. Likely you'll only need to install `globals` to replace `env: {node: true}`.

   ```sh
   npm install globals -D
   ```

1. Now you'll work through the `compat.extends` params and replace them with proper flat config imports. You can delete the `eslint-config-airbnb-base` and `eslint-config-airbnb` parameters, and then add the `@chalp/eslint-airbnb` config to the array:

   ```ts
   import airbnbBase from '@chalp/eslint-airbnb/base';
   import airbnbReact from '@chalp/eslint-airbnb/react';
   import airbnbTypescript from '@chalp/eslint-airbnb/typescript';
   

   export default [
     ...airbnbBase,
     ...airbnbReact,
     ...airbnbTypescript,
     {
       languageOptions: {
         parserOptions: {
           projectService: true,
         },
       },
     },
   ];
   ```
