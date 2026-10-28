import { describe, expect, it } from 'vitest';

import { escapeXml } from '@/lib/xml';

describe('escapeXml', () => {
  it('escapes XML metacharacters', () => {
    expect(escapeXml(`Tom & Jerry's <tag> "quoted"`)).toBe(
      'Tom &amp; Jerry&apos;s &lt;tag&gt; &quot;quoted&quot;'
    );
  });

  it('leaves non-ASCII text intact', () => {
    expect(escapeXml('Café · Español')).toBe('Café · Español');
  });
});
