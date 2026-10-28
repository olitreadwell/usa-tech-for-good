import { afterEach, describe, expect, it } from 'vitest';

import { getBasePath, getSiteUrl, withBasePath } from '@/lib/site';

describe('site URLs', () => {
  const originalOrigin = process.env.NEXT_PUBLIC_SITE_URL;
  const originalBasePath = process.env.NEXT_PUBLIC_BASE_PATH;

  afterEach(() => {
    if (originalOrigin === undefined) delete process.env.NEXT_PUBLIC_SITE_URL;
    else process.env.NEXT_PUBLIC_SITE_URL = originalOrigin;
    if (originalBasePath === undefined) delete process.env.NEXT_PUBLIC_BASE_PATH;
    else process.env.NEXT_PUBLIC_BASE_PATH = originalBasePath;
  });

  it('uses the USA GitHub Pages base path by default', () => {
    delete process.env.NEXT_PUBLIC_BASE_PATH;
    expect(getBasePath()).toBe('/usa-tech-for-good');
    expect(withBasePath('/directory')).toBe('/usa-tech-for-good/directory');
  });

  it('builds absolute URLs without duplicate slashes', () => {
    process.env.NEXT_PUBLIC_SITE_URL = 'https://example.org/';
    process.env.NEXT_PUBLIC_BASE_PATH = '/usa/';
    expect(getSiteUrl('/entry/test-org')).toBe('https://example.org/usa/entry/test-org');
  });
});
