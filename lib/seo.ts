import type { Metadata } from 'next'

const baseUrl = 'https://marcelodaltro.com.br'

export function generateMetadataForPage({
  title,
  description,
  image = '/logo.ico',
  path = '/',
}: {
  title: string
  description: string
  image?: string
  path?: string
}): Metadata {
  const fullTitle = `${title} | Marcelo Daltro`

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url: `${baseUrl}${path}`,
      images: [
        {
          url: `${baseUrl}${image}`,
          width: 512,
          height: 512,
          alt: fullTitle,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [`${baseUrl}${image}`],
    },
  }
}
