import type { Config } from 'eslint/config';

/** This config should NOT contain any type-aware linting as it will be applied to all files. For example, the naming convention rule should apply to both TypeScript and JavaScript. */
export const tsUniversalConfig = {
  name: 'silverorange/typescript-universal',
  rules: {
    // disable JS rules that are overridden by Typescript variants
    'no-shadow': 'off',
    'no-unused-vars': 'off',

    /** disallow variables that shadow variables in outer scope */
    '@typescript-eslint/no-shadow': 'error',

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
        format: ['camelCase', 'UPPER_CASE', 'PascalCase', 'snake_case'],
        leadingUnderscore: 'allow',
      },
      {
        // Allow any format in object literals (like this one)
        selector: ['objectLiteralProperty'],
        format: null,
      },
      {
        selector: ['function'],
        format: ['camelCase', 'PascalCase'],
      },
      { selector: 'typeLike', format: ['PascalCase'] },
      {
        selector: ['parameter'],
        modifiers: ['unused'],
        format: ['camelCase', 'snake_case'],
        leadingUnderscore: 'require', // force _ on unused params
      },
      {
        selector: ['parameter'],
        format: ['camelCase', 'snake_case'],
        leadingUnderscore: 'forbid', // forbid _ on used params
      },
      {
        selector: 'enumMember',
        format: ['PascalCase'],
      },
    ],
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      { assertionStyle: 'as' },
    ],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/unified-signatures': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
  },
} satisfies Config;
