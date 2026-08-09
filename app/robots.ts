import type { MetadataRoute } from 'next'

const site = 'https://marcelodaltro.com.br'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/private'],
      },
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'ClaudeBot',
          'Claude-Web',
          'PerplexityBot',
          'Google-Extended',
          'GoogleOther',
          'Applebot-Extended',
          'Meta-ExternalAgent',
          'Bytespider',
          'CCBot',
        ],
        allow: ['/', '/llms.txt', '/llms-full.txt'],
      },
    ],
    sitemap: `${site}/sitemap.xml`,
  }
}

