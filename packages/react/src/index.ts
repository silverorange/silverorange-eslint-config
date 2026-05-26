import { defineConfig } from 'eslint/config';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import {
  config as nodeConfig,
  defineGlobals,
} from '@silverorange-inc/eslint-config-node';
import { reactConfig } from './configs/react.js';

export const config = defineConfig([
  nodeConfig,
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  reactHooks.configs.flat.recommended,
  jsxA11y.flatConfigs.recommended,
  reactConfig,
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
]);

export { defineGlobals };
