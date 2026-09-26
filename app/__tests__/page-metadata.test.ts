import { describe, expect, it } from 'vitest';

import { AUTHOR_NAME } from '@/lib/utils';
import { metadata as notFoundMetadata } from '../not-found';
import { metadata as homeMetadata } from '../page';

describe('page metadata', () => {
  it('overrides 404 share metadata without inventing a canonical url', () => {
    expect(notFoundMetadata.openGraph?.url).toBeUndefined();
    expect(notFoundMetadata.openGraph?.description).toBe(
      notFoundMetadata.description,
    );
    expect(notFoundMetadata.openGraph?.title).toBe(
      `${notFoundMetadata.title} | ${AUTHOR_NAME}`,
    );
    expect(notFoundMetadata.twitter?.description).toBe(
      notFoundMetadata.description,
    );
    expect(notFoundMetadata.twitter?.title).toBe(
      `${notFoundMetadata.title} | ${AUTHOR_NAME}`,
    );
  });

  it('gives the one-page home a description', () => {
    expect(homeMetadata.description).toContain('GrowPad');
  });

  it('advertises the rss feed from the home page', () => {
    expect(homeMetadata.alternates?.types?.['application/rss+xml']).toBe(
      '/feed.xml',
    );
  });
});
