import { defineConfig } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import {
  config as nodeConfig,
  defineGlobals,
} from '@silverorange-inc/eslint-config-node';
import { reactConfig } from '@silverorange-inc/eslint-config-react/config';

export const config = defineConfig([nextVitals, nodeConfig, reactConfig]);

export { defineGlobals };
