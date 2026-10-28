import { SavedClient } from '@/app/saved/SavedClient';
import { getAllEntries } from '@/lib/data';

export default function SavedPage() {
  const entries = getAllEntries().map((entry) => ({ slug: entry.slug, name: entry.name }));
  return <SavedClient entries={entries} />;
}
