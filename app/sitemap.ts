import { MetadataRoute } from 'next';

import { getAllPosts } from '@/lib/posts';
import { SITE_URL } from '@/lib/utils';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  // Generate entries for blog posts
  const posts = getAllPosts();
  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/writing/${post.slug}/`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [
    {
      url: `${SITE_URL}/`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...postEntries,
  ];
}
