import type { Config } from 'eslint/config';
import { tsFilesPattern } from './tsFilesPattern.js';

/** This config can contain type-aware linting as it will only be applied to TypeScript files. */
export const tsTypeScriptOnlyConfig = {
  name: 'silverorange/typescript-typescript-only',
  files: tsFilesPattern,
  languageOptions: {
    parserOptions: {
      projectService: true,
    },
  },
} satisfies Config;
