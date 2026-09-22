import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Montserrat, Lora } from 'next/font/google'
import JsonLd from './components2/json-ld'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#050505',
}

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  preload: false,
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-montserrat',
  display: 'swap',
  preload: true,
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
  preload: false,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://marcelodaltro.com.br'),
  title: {
    default: 'Dr. Marcelo Daltro | Reabilitação Oral e Odontologia Estética em Goiânia',
    template: '%s | Dr. Marcelo Daltro - Reabilitação Oral e Estética',
  },
  description: 'Consultório Odontológico do Dr. Marcelo Daltro no Setor Bueno, Goiânia - GO. Especialista em Reabilitação Oral, Lentes de Contato Dentais em Cerâmica, Implantes Dentários 3D sem cortes, Alinhadores Invisíveis e Sedação Consciente.',
  keywords: [
    'dentista goiania',
    'dentista setor bueno',
    'dr marcelo daltro',
    'lentes de contato dental goiania',
    'implante dentario guiado 3d goiania',
    'reabilitacao oral goiania',
    'alinhadores invisiveis goiania',
    'faceta em resina goiania',
    'sedacao consciente dentista goiania',
    'odontologia estetica setor bueno',
    'melhor dentista lentes de contato goiania',
    'estetizzacao do sorriso goiania'
  ],
  authors: [{ name: 'Dr. Marcelo Daltro', url: 'https://marcelodaltro.com.br' }],
  creator: 'Dr. Marcelo Daltro',
  publisher: 'Dr. Marcelo Daltro',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: 'https://marcelodaltro.com.br',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Dr. Marcelo Daltro | Reabilitação Oral e Odontologia Estética em Goiânia',
    description:
      'Recuperando autoestimas; Redesenhando sorrisos. Consultório especializado em Lentes de Contato, Implantes Guiados 3D e Reabilitação Oral no Setor Bueno, Goiânia.',
    url: 'https://marcelodaltro.com.br',
    siteName: 'Dr. Marcelo Daltro - Odontologia Estética',
    images: [
      {
        url: 'https://marcelodaltro.com.br/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Consultório Dr. Marcelo Daltro - Reabilitação Oral em Goiânia',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Marcelo Daltro | Reabilitação Oral e Odontologia Estética em Goiânia',
    description:
      'Recuperando autoestimas; Redesenhando sorrisos. Especialista em Lentes de Contato Dentais e Implantes 3D no Setor Bueno, Goiânia.',
    images: ['https://marcelodaltro.com.br/hero.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/logo1-sm.png', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/logo1-sm.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="selection:bg-white bg-black" suppressHydrationWarning>
      <head>
        <link rel="preload" href="/logo2-opt.webp" as="image" type="image/webp" media="(min-width: 641px)" fetchPriority="high" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="author" href="https://marcelodaltro.com.br/llms.txt" />
      </head>
      <body
        suppressHydrationWarning
        className={`font-sans ${playfairDisplay.variable} ${montserrat.variable} ${lora.variable} antialiased`}
      >
        {children}
        <JsonLd />
        {/* Google Tag (gtag.js) - Carregado exclusivamente em produção de forma não bloqueante */}
        <script
          id="google-tag-analytics"
          dangerouslySetInnerHTML={{
            __html: `
            if (typeof window !== 'undefined' && (window.location.hostname === 'marcelodaltro.com.br' || window.location.hostname.endsWith('.marcelodaltro.com.br'))) {
              const loadGtag = () => {
                const script = document.createElement('script');
                script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-17696626474';
                script.async = true;
                document.head.appendChild(script);

                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'AW-17696626474');
              };
              if ('requestIdleCallback' in window) {
                requestIdleCallback(loadGtag, { timeout: 2500 });
              } else {
                setTimeout(loadGtag, 1500);
              }
            }
          `,
          }}
        />
      </body>
    </html>
  )
}

