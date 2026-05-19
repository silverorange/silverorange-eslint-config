import { defineConfig } from 'eslint/config';
import type { Linter } from 'eslint';
import nextVitals from 'eslint-config-next/core-web-vitals';
import reactConfig from '@silverorange/eslint-config-react';

// eslint-config-next already registers the react-hooks plugin via core-web-vitals,
// so strip it from reactConfig to avoid the duplicate-plugin error in flat config.
const reactConfigWithoutHooks = (reactConfig as Linter.Config[]).filter(
  (config) => config.plugins?.['react-hooks'] == null
);

export default defineConfig([reactConfigWithoutHooks, nextVitals]);
