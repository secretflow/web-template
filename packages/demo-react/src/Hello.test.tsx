import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { test, expect } from 'vitest';

import { Hello } from './Hello.js';

test('loads and displays greeting', async () => {
  // ARRANGE
  render(<Hello />);

  // ACT
  await screen.findByText(/hello/i);

  // ASSERT
  expect(screen.findByText(/hello/i)).toBeTruthy();
});
