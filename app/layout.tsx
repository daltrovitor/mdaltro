import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Dentista Marcelo Daltro',
    template: '%s | Marcelo Daltro - Recuperando autoestimas',
  },
  description: 'Recuperando autoestimas; Redesenhando sorrisos — Consultório odontológico do Dr. Marcelo Daltro.',
  keywords: ['dentista', 'consultório odontológico', 'odontologia estética', 'implante dentário', 'clareamento dental'],
  openGraph: {
    title: 'Dentista Marcelo Daltro',
    description:
      'Recuperando autoestimas; Redesenhando sorrisos — Consultório odontológico do Dr. Marcelo Daltro.',
    url: 'https://marcelodaltro.com.br',
    siteName: 'Marcelo Daltro - Dentista',
    images: [
      {
        url: 'https://marcelodaltro.com.br/logo.ico',
        width: 512,
        height: 512,
        alt: 'Marcelo Daltro - Dentista',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dentista Marcelo Daltro',
    description:
      'Recuperando autoestimas; Redesenhando sorrisos — Consultório odontológico do Dr. Marcelo Daltro.',
    images: ['https://marcelodaltro.com.br/logo.ico'],
  },
  icons: {
    icon: '/logo.ico',
    shortcut: '/logo.ico',
    apple: '/logo.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className="selection:bg-white bg-black">
      <head>
        <link rel="shortcut icon" href="/logo.ico" type="image/x-icon" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0f172a" />

        {/* JSON-LD Schema for LocalBusiness (Dentista) - substitua os placeholders */}
        <Script id="ld-json" type="application/ld+json" strategy="afterInteractive">
          {`{
            "@context": "https://schema.org",
            "@type": "Dentist",
            "name": "Dr. Marcelo Daltro",
            "description": "Recuperando autoestimas; Redesenhando sorrisos — Consultório odontológico do Dr. Marcelo Daltro.",
            "url": "https://marcelodaltro.com.br",
            "logo": "https://marcelodaltro.com.br/logo.ico",
            "image": ["https://marcelodaltro.com.br/logo.ico"],
            "priceRange": "$$",
            "telephone": "+55-11-99999-9999",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Rua Exemplo, 123",
              "addressLocality": "Cidade",
              "addressRegion": "Estado",
              "postalCode": "00000-000",
              "addressCountry": "BR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -23.55052,
              "longitude": -46.633308
            },
            "openingHoursSpecification": [
              {"@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "18:00"}
            ],
            "sameAs": [
              "https://www.facebook.com/",
              "https://www.instagram.com/"
            ]
          }`}
        </Script>
        {/* Google Tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17696626474"
          strategy="afterInteractive"
        />
        <Script id="google-tag-inline" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-17696626474');
          `}
        </Script>
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
      </body>
    </html>
  )
}

