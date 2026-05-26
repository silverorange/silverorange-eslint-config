import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import { jsConfig } from './configs/js.js';
import { tsUniversalConfig } from './configs/tsUniversal.js';
import { testsConfig } from './configs/tests.js';
import { tsFilesPattern } from './configs/tsFilesPattern.js';
import { tsTypeScriptOnlyConfig } from './configs/tsTypeScriptOnly.js';
import { defineGlobals } from './defineGlobals.js';

export const config = defineConfig([
  js.configs.recommended,
  tseslint.configs.recommended,
  tseslint.configs.recommendedTypeCheckedOnly
    // Filter out only the type-aware rules. The base config will be added by
    // the standard recommended set above.
    .filter(
      ({ name }) => name === 'typescript-eslint/recommended-type-checked-only',
    )
    // Make sure type-aware rules are scoped to TypeScript files. They are not
    // scoped by default, and will cause issues on projects with mixed
    // TypeScript and JavaScript source files.
    .map((tsConfig) => ({
      files: tsFilesPattern,
      ...tsConfig,
    })),
  {
    name: 'eslint-config-prettier',
    ...eslintConfigPrettier,
  },
  jsConfig,
  tsUniversalConfig,
  tsTypeScriptOnlyConfig,
  testsConfig,
]);

export { defineGlobals };
