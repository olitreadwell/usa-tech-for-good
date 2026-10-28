import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import DirectoryClient from '@/components/DirectoryClient';

const entries = Array.from({ length: 25 }, (_, index) => ({
  slug: `org-${index + 1}`,
  name: `${index === 0 ? 'Alpha' : 'Beta'} Organisation ${index + 1}`,
  domain: 'civic-tech',
  domainLabel: 'Civic Tech',
  what: 'Civic technology work in the United States.',
  region: 'national',
  website: '',
  github: '',
  linkedin_org: '',
  community_url: '',
  events_url: '',
  tags: [],
  related_to: [],
  source: 'test',
  founding_year: null,
  takes_contributors: null,
  careers_url: '',
  last_verified: '2026-10-29',
}));

const domains = [{ key: 'civic-tech', label: 'Civic Tech', slug: 'civic-tech', count: 25 }];
const regions = [{ name: 'national', slug: 'national', count: 25 }];

describe('DirectoryClient', () => {
  afterEach(cleanup);
  beforeEach(() => {
    window.history.replaceState(null, '', '/directory');
  });

  it('restores filters from the URL and keeps them shareable', async () => {
    window.history.replaceState(null, '', '/directory?q=Alpha&per_page=40');
    render(<DirectoryClient entries={entries} domains={domains} regions={regions} />);
    expect(await screen.findByDisplayValue('Alpha')).toBeInTheDocument();
    expect(screen.queryByText('Beta Organisation 2')).not.toBeInTheDocument();
  });

  it('clears search and returns focus when Escape is pressed', async () => {
    render(<DirectoryClient entries={entries} domains={domains} regions={regions} />);
    const search = screen.getByRole('searchbox', { name: 'Search entries' });
    fireEvent.change(search, { target: { value: 'Alpha' } });
    expect(screen.queryByText('Beta Organisation 2')).not.toBeInTheDocument();
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(search).toHaveValue('');
    expect(search).toHaveFocus();
    expect(await screen.findByText('Beta Organisation 2')).toBeInTheDocument();
  });
});
