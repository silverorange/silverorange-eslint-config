import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import { jsConfig } from './configs/js.js';
import { tsConfig } from './configs/ts.js';
import { testsConfig } from './configs/tests.js';

const tsFiles = ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'];

export const config = defineConfig([
  js.configs.recommended,
  tseslint.configs.recommendedTypeChecked.map((tsConfig) => ({
    files: tsFiles,
    ...tsConfig,
  })),
  eslintConfigPrettier,
  jsConfig,
  {
    files: tsFiles,
    ...tsConfig,
  },
  testsConfig,
  {
    files: tsFiles,
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },
]);
