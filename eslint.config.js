import { defineConfig, globalIgnores } from 'eslint/config';
import { config } from '@silverorange/eslint-config-node';

export default defineConfig([config, globalIgnores(['packages/*/dist/**/*'])]);
