import type { Config } from 'eslint/config';

export const tsConfig = {
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: ['variableLike', 'memberLike'],
        format: ['camelCase'],
      },
      {
        selector: ['property', 'variable'],
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
      },
      {
        // Allow any format in object literals (like this one)
        selector: ['objectLiteralProperty'],
        format: null,
      },
      {
        selector: ['function', 'parameter'],
        format: ['camelCase', 'PascalCase'],
      },
      { selector: 'typeLike', format: ['PascalCase'] },
    ],
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        overrides: {
          constructors: 'no-public',
        },
      },
    ],
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      { assertionStyle: 'as' },
    ],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/unified-signatures': 'error',
  },
} satisfies Config;
