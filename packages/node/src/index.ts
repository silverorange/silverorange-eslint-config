import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import { jsConfig } from './configs/js.js';
import { tsConfig } from './configs/ts.js';

export const config = defineConfig([
  js.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  eslintConfigPrettier,
  jsConfig,
  tsConfig,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },
  // Turn off type-aware rules for JS files.
  // See https://typescript-eslint.io/troubleshooting/typed-linting/#how-can-i-disable-type-aware-linting-for-a-set-of-files
  {
    files: ['**/*.js', '**/*.mjs', '**/*.cjs'],
    ...tseslint.configs.disableTypeChecked,
  },
]);
