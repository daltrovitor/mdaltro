import type { MetadataRoute } from 'next'

const baseUrl = 'https://marcelodaltro.com.br'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ['/', '/sobre', '/servicos', '/contato', '/blog']

  return staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))
}
