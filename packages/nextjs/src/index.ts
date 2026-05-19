import { defineConfig } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import reactConfig from '@silverorange/eslint-config-react';

export default defineConfig([reactConfig, nextVitals]);
