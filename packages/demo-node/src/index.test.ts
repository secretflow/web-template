import { test, expect, vi } from 'vitest';

import { cli } from './index.js';

test('cli', () => {
  const consoleSpy = vi.spyOn(console, 'log');
  cli();
  expect(consoleSpy).toHaveBeenCalledWith('Hello!');
});
