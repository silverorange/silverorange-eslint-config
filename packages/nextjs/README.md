# Next.js ESLint Configuration

This configuration should be used for projects built on Next.js. This extends:

- the [silverorange React configuration](../../react/README.md), and
- the Next.js [Core Web Vitals configuration](https://nextjs.org/docs/pages/api-reference/config/eslint#with-core-web-vitals).

# Installation

```sh
# Add required ESLint peer dependency
pnpm add -D eslint@^9.39.4

# Add package dependency
pnpm add -D @silverorange/eslint-config-nextjs
```

# Configuration

Then create an `eslint.config.js` in the project root:

```js
import { defineConfig } from 'eslint/config';
import { config } from '@silverorange/eslint-config-nextjs';

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
