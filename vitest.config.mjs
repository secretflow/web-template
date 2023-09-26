/** @type {import('vitest/config').UserConfig} */
export default {
  test: {
    globals: true,
    coverage: {
      enabled: true,
      provider: 'v8',
      reporter: ['text', 'html', 'lcov', 'json'],
    },
  },
};
