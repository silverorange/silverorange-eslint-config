import type { Config } from 'eslint/config';

export const tsConfig = {
  files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'],
  rules: {
    // disable JS rules that are overridden by Typescript variants
    'no-shadow': 'off',
    'no-unused-expressions': 'off',
    'no-unused-vars': 'off',

    /** disallow the any type */
    '@typescript-eslint/no-explicit-any': 'error',

    /** disallow CJS require() in favour of ESM import */
    '@typescript-eslint/no-require-imports': 'error',

    /** disallow variables that shadow variables in outer scope */
    '@typescript-eslint/no-shadow': 'error',

    /** disallow expressions that have no effect */
    '@typescript-eslint/no-unused-expressions': 'error',

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
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
  },
} satisfies Config;
