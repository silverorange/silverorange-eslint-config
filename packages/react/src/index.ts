import { defineConfig } from 'eslint/config';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import nodeConfig from '@silverorange/eslint-config-node';
import { reactConfig } from './configs/react.js';

export default defineConfig([
  nodeConfig,
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  reactHooks.configs.flat.recommended,
  reactConfig,
]);
