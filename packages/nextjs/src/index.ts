import { defineConfig } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import { config as nodeConfig } from '@silverorange/eslint-config-node';
import { reactConfig } from '@silverorange/eslint-config-react/config';

export const config = defineConfig([nodeConfig, nextVitals, reactConfig]);
