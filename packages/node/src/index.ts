import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import { jsConfig } from './configs/js.js';
import { tsUniversalConfig } from './configs/tsUniversal.js';
import { testsConfig } from './configs/tests.js';
import { tsFilesPattern } from './configs/tsFilesPattern.js';
import { tsTypeScriptOnlyConfig } from './configs/tsTypeScriptOnly.js';

export const config = defineConfig([
  js.configs.recommended,
  // Make sure type-aware rules are scoped to TypeScript files. They are not
  // scoped by default, and will cause issues on projects with mixed TypeScript
  // and JavaScript source files.
  tseslint.configs.recommendedTypeChecked.map(({ name, ...rest }) =>
    name === 'typescript-eslint/recommended-type-checked'
      ? {
          files: tsFilesPattern,
          name,
          ...rest,
        }
      : { name, ...rest },
  ),
  {
    name: 'eslint-config-prettier',
    ...eslintConfigPrettier,
  },
  jsConfig,
  tsUniversalConfig,
  tsTypeScriptOnlyConfig,
  testsConfig,
]);
