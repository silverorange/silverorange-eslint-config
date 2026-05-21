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
]);
