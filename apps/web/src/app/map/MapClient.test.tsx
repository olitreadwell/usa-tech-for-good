import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import { MapClient } from '@/app/map/MapClient';

const entries = [
  {
    slug: 'alpha-org',
    name: 'Alpha Org',
    domainLabel: 'Civic Tech',
    region: 'national',
    what: 'Civic data work.',
    tags: ['open data'],
  },
];

describe('MapClient', () => {
  it('renders search results as links without injecting HTML', () => {
    render(<MapClient entries={entries} />);
    fireEvent.change(screen.getByRole('searchbox'), { target: { value: 'alpha' } });
    expect(screen.getByRole('link', { name: 'Alpha Org' })).toHaveAttribute(
      'href',
      '/entry/alpha-org'
    );
    expect(screen.getByText('Results (1)')).toBeInTheDocument();
  });
});
