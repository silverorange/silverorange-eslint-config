import type { Config } from 'eslint/config';

export const jsConfig = {
  rules: {
    /** require braces for all control statements */
    curly: 'error',

    /** prefer obj.foo over obj['foo'] where possible */
    'dot-notation': 'error',

    /** prefer { foo } over { foo: foo } */
    'object-shorthand': 'error',

    /** require const when a variable is never reassigned */
    'prefer-const': 'error',

    /** require Number.isNaN() instead of comparing to NaN directly */
    'use-isnan': 'error',

    'constructor-super': 'error',
    'guard-for-in': 'error',
    'new-parens': 'error',
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-cond-assign': 'error',
    'no-console': 'warn',
    'no-debugger': 'error',
    'no-empty': 'error',
    'no-empty-function': 'error',
    'no-new-wrappers': 'error',
    'no-shadow': 'error',
    'no-throw-literal': 'error',
    'no-undef-init': 'error',
    'no-unsafe-finally': 'error',
    'no-unused-expressions': 'error',
    'no-unused-labels': 'error',
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    'one-var': ['error', 'never'],
    radix: 'error',
  },
} satisfies Config;
