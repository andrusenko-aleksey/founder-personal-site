import { describe, expect, it } from 'vitest';

import { SITE_URL } from '@/lib/utils';
import sitemap from '../sitemap';

describe('sitemap', () => {
  it('lists the one-page home with a trailing slash', () => {
    const entries = sitemap();

    expect(entries[0]).toEqual(
      expect.objectContaining({ url: `${SITE_URL}/`, priority: 1 }),
    );
  });

  it('does not list removed standalone pages', () => {
    const urls = sitemap().map((entry) => entry.url);

    for (const path of ['about', 'resume', 'projects', 'stats', 'contact']) {
      expect(urls).not.toContain(`${SITE_URL}/${path}/`);
    }
  });

  it('uses trailing slashes for post routes when posts exist', () => {
    const entries = sitemap();
    const postEntries = entries.filter(
      (entry) =>
        entry.url.startsWith(`${SITE_URL}/writing/`) &&
        entry.url !== `${SITE_URL}/writing/`,
    );

    // If posts exist, they must have trailing slashes
    if (postEntries.length > 0) {
      expect(postEntries.every((entry) => entry.url.endsWith('/'))).toBe(true);
    }
  });
});
