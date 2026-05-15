import type { Config } from 'eslint/config';

export const reactConfig = {
  rules: {
    /** disallow unnecessary fragment wrappers <>...</> */
    'react/jsx-no-useless-fragment': 'error',

    /** require explicit true value for boolean props e.g. disabled={true} */
    'react/jsx-boolean-value': ['error', 'always'],

    /** enforce self-closing tags for components with no children */
    'react/self-closing-comp': 'error',

    /** disallow unnecessary curly braces in JSX */
    'react/jsx-curly-brace-presence': 'error',

    'react/jsx-no-bind': [
      'error',
      { allowArrowFunctions: true, allowFunctions: true },
    ],
  },
} satisfies Config;
