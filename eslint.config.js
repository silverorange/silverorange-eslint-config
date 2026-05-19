import { defineConfig, globalIgnores } from 'eslint/config';

import nodeConfig from '@silverorange/eslint-config-node';

export default defineConfig([
  nodeConfig,
  globalIgnores(['packages/*/dist/**/*']),
]);
