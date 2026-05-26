import type { Config } from 'eslint/config';

interface Globals {
  [key: string]: 'readonly' | 'writeable' | 'off';
}

export function defineGlobals(...globals: Globals[]) {
  return {
    name: 'silverorange/defined-globals',
    languageOptions: {
      globals: globals.reduce(
        (previous, current) => ({ ...previous, ...current }),
        {},
      ),
    },
  } satisfies Config;
}
