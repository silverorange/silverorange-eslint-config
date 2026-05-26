# React ESLint Configuration

This configuration should be used for projects using React. This extends:

- the [silverorange Node configuration](../../node/README.md),
- the [React Hooks recommended configuration](https://react.dev/reference/eslint-plugin-react-hooks),
- the [JSX Accessibility recommended configuration](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#shareable-configs), and
- the [React ESLint recommended configuration](https://github.com/jsx-eslint/eslint-plugin-react/#shareable-configs).

# Installation

```sh
# Add required ESLint peer dependency
pnpm add -D eslint@^9.39.4

# Add package dependency
pnpm add -D @silverorange-inc/eslint-config-react
```

# Configuration

Then create an `eslint.config.js` in the project root:

```js
import { defineConfig } from 'eslint/config';
import { config } from '@silverorange-inc/eslint-config-react';

export default defineConfig([config]);
```

Lastly, add a `lint` script to `package.json`:

```json
{
  // ...
  "scripts": {
    "lint": "eslint"
  }
  // ...
}
```
