import { defineConfig } from 'eslint/config';
import type { Linter } from 'eslint';
import nextVitals from 'eslint-config-next/core-web-vitals';
import reactConfig from '@silverorange/eslint-config-react';

// eslint-config-next registers react, react-hooks, and jsx-a11y — filter them
// out of the react config to avoid "Cannot redefine plugin" errors in flat config.
const NEXT_PLUGINS = new Set(['react', 'react-hooks', 'jsx-a11y']);

function hasNoNextPlugin(config: Linter.Config): boolean {
  return (
    config.plugins == null ||
    Object.keys(config.plugins).every((p) => !NEXT_PLUGINS.has(p))
  );
}

const reactWithoutNextPlugins = (reactConfig as Linter.Config[]).filter(
  hasNoNextPlugin
);

export default defineConfig([reactWithoutNextPlugins, nextVitals]);
