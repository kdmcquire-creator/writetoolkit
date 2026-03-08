import type { MetadataRoute } from 'next';


export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tools.aiproductivityhub.co';


  const tools = [
    'word-counter',
    'ai-detector',
    'grammar-checker',
    'case-converter',
    'invoice-generator',
    'reading-time',
    'roi-calculator',
    'salary-hourly-converter',
    'lorem-ipsum-generator',
    'password-generator',
    'hashtag-generator',
    'resume-scorer',
    'headline-analyzer',
    'markdown-to-html',
  ];


  const toolUrls = tools.map((tool) => ({
    url: `${baseUrl}/tools/${tool}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));


  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
