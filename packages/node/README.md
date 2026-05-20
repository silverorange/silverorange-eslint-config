# Node.js ESLint Configuration

This configuration should be used for projects built on Node.js. This extends:

- the [ESLint JavaScript recommended configuration](https://eslint.org/docs/latest/use/configure/configuration-files#use-predefined-configurations),
- the [TypeScript ESlint recommended configuration](https://typescript-eslint.io/users/configs#recommended),
- the [Prettier configuration](https://github.com/prettier/eslint-config-prettier),

# Installation

```sh
# Add required ESLint peer dependency
pnpm add -D eslint@^9.39.4

# Add package dependency
pnpm add -D @silverorange/eslint-config-node
```

# Configuration

Then create an `eslint.config.js` in the project root:

```js
import { defineConfig } from 'eslint/config';
import { nodeConfig } from '@silverorange/eslint-config-node';

export default defineConfig([nodeConfig]);
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
