import { describe, test, expect } from '@jest/globals';

describe('This is an example test suite', () => {
  test('This is an example test', () => {
    const ok = 'ok';

    expect(ok).toBe('ok');
  });
});
