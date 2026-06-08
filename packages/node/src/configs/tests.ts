import type { Config } from 'eslint/config';

export const testsConfig = {
  name: 'silverorange/tests',
  files: ['**/*.{spec,test}.{js,ts,jsx,tsx}'],
  rules: {
    /** tests that use assertions on mock functions will cause false positives on this rule */
    '@typescript-eslint/unbound-method': 'off',
  },
} satisfies Config;
