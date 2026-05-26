import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/utils';

export default function robots(): MetadataRoute.Robots {
  const aiCrawlers = [
    'GPTBot', 'ChatGPT-User', 'OAI-SearchBot',
    'anthropic-ai', 'Claude-Web', 'ClaudeBot',
    'PerplexityBot', 'YouBot',
    'Google-Extended', 'Googlebot', 'Bingbot', 'DuckDuckBot'
  ];

  return {
    rules: [
      { userAgent: '*', allow: '/' },
      ...aiCrawlers.map((userAgent) => ({ userAgent, allow: '/' }))
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`
  };
}
