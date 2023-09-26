// @ts-check

import { defineConfig } from 'tsup';

export default [
  defineConfig({
    format: ['esm'],
    entry: ['./src/index.mts'],
    outExtension: () => ({ js: '.mjs' }),
  }),
  defineConfig({
    format: ['esm'],
    entry: ['./src/cli.mts'],
    outExtension: () => ({ js: '.mjs' }),
  }),
];
