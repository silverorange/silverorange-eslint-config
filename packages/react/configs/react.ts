import type { Config } from 'eslint/config';

export const reactConfig = {
  rules: {
    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-no-bind': [
      'error',
      { allowArrowFunctions: true, allowFunctions: true },
    ],
    'react/self-closing-comp': 'error',
    'react/jsx-curly-brace-presence': 'error',
  },
} satisfies Config;
