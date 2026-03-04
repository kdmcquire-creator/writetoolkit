import type { MetadataRoute } from 'next';
import { tools } from '@/lib/tools';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL 
    || (process.env.VERCEL_URL ? 'https://' + process.env.VERCEL_URL : 'https://writetoolkit-wtt2.vercel.app');

  const toolUrls = tools.map((tool) => ({
    url: baseUrl + '/tools/' + tool.slug,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: baseUrl + '/tools',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    ...toolUrls,
  ];
}
