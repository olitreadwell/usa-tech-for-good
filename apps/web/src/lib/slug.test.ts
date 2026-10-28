import { describe, expect, it } from 'vitest';

import { toSlug } from '@/lib/slug';

describe('toSlug', () => {
  it('lowercases and hyphenates names', () => {
    expect(toSlug('Housing & Homelessness Tech')).toBe('housing-homelessness-tech');
    expect(toSlug('New England')).toBe('new-england');
  });

  it('trims leading and trailing separators', () => {
    expect(toSlug('  Pacific Northwest!  ')).toBe('pacific-northwest');
  });
});
