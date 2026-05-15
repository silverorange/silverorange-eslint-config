import { defineConfig } from 'eslint/config';
import nodeConfig from '@silverorange/eslint-config-node';
import { reactConfig } from './configs/react.js';

export default defineConfig([nodeConfig, reactConfig]);
