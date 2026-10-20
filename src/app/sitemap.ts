import type { MetadataRoute } from 'next';
import { posts } from './content/posts';
import { circles } from './content/circles';

export const dynamic = 'force-static';

const BASE = 'https://tereziealder.cz';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticUrls: MetadataRoute.Sitemap = [
    { url: BASE, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/en`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/faq`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/en/faq`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/blog`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE}/en/blog`, changeFrequency: 'weekly', priority: 0.6 },
  ];

  const csPosts: MetadataRoute.Sitemap = posts.cs.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: p.date,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const enPosts: MetadataRoute.Sitemap = posts.en.map((p) => ({
    url: `${BASE}/en/blog/${p.slug}`,
    lastModified: p.date,
    changeFrequency: 'monthly',
    priority: 0.5,
  }));

  const circleUrls: MetadataRoute.Sitemap = [
    { url: `${BASE}/kruhy`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE}/en/kruhy`, changeFrequency: 'weekly', priority: 0.5 },
    ...circles.map((c) => ({
      url: `${BASE}/kruhy/${c.slug}`,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
  ];

  return [...staticUrls, ...csPosts, ...enPosts, ...circleUrls];
}
