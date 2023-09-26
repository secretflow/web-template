// @ts-check
import { mergeConfig } from 'vitest/config';

import rootConfig from '../../vitest.config.mjs';

export default mergeConfig(
  rootConfig,
  /** @type {import('vitest/config').UserConfig} */
  ({
    test: {
      environment: 'jsdom',
    },
  }),
);
