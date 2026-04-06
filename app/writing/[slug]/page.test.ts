import { describe, expect, it } from 'vitest';

import { getAllPosts } from '@/lib/posts';

describe('writing post metadata', () => {
  it('returns the correct posts list', () => {
    const posts = getAllPosts();
    expect(Array.isArray(posts)).toBe(true);
  });
});
