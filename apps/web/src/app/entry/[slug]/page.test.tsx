import { afterEach, describe, it, expect, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

vi.mock('@/lib/data', () => ({
  getAllEntries: () => [
    {
      slug: 'test-org',
      name: 'Test Organisation',
      domain: 'civic-tech',
      domainLabel: 'Civic Tech',
      what: 'Test Organisation does civic tech work.',
      region: 'south-central',
      website: 'https://test.org',
      github: '',
      linkedin_org: '',
      community_url: '',
      events_url: '',
      tags: [],
      related_to: [],
      source: 'manual',
      founding_year: 2020,
      takes_contributors: null,
      careers_url: '',
      last_verified: '2026-08-01',
    },
  ],
}));

import EntryPage, { generateMetadata } from '@/app/entry/[slug]/page';

describe('EntryPage', () => {
  afterEach(cleanup);
  it('renders a feedback link with entry name and slug', async () => {
    const element = await EntryPage({
      params: Promise.resolve({ slug: 'test-org' }),
    });
    render(element);

    const link = screen.getByRole('link', {
      name: /Spot a mistake or update this entry/i,
    });
    expect(link).toBeInTheDocument();
    expect(link.getAttribute('href')).toContain('issues/new');
    expect(link.getAttribute('href')).toContain(
      encodeURIComponent('Entry update: Test Organisation')
    );
    expect(link.getAttribute('href')).toContain(encodeURIComponent('/entry/test-org'));
  });

  it('gives each entry unique metadata', async () => {
    const metadata = await generateMetadata({ params: Promise.resolve({ slug: 'test-org' }) });
    expect(metadata.title).toBe('Test Organisation');
    expect(metadata.description).toBe('Test Organisation does civic tech work.');
    expect(metadata.alternates?.canonical).toBe(
      'https://olitreadwell.github.io/usa-tech-for-good/entry/test-org'
    );
  });

  it('offers a save control on the entry page', async () => {
    const element = await EntryPage({
      params: Promise.resolve({ slug: 'test-org' }),
    });
    render(element);
    expect(screen.getByRole('button', { name: /Save/ })).toBeInTheDocument();
  });
});
