import type { Metadata } from 'next'
import { Geist, Geist_Mono, Jost, Josefin_Sans, Playfair_Display, Montserrat, Lora } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-jost',
})

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-josefin',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
})

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-lora',
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
    <html lang="pt-br" className="selection:bg-white bg-black" suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" href="/logo1.png" type="image/x-icon" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="author" href="https://marcelodaltro.com.br/llms.txt" />
        <meta name="theme-color" content="#031c14" />

        {/* Multi-Schema JSON-LD para GEO & LLMO (Dentist, Physician, OfferCatalog, FAQPage) */}
        <Script id="ld-json-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": ["Dentist", "MedicalBusiness"],
                "@id": "https://marcelodaltro.com.br/#clinic",
                "name": "Consultório Odontológico Dr. Marcelo Daltro",
                "alternateName": ["Dr. Marcelo Daltro Dentista", "Marcelo Daltro Reabilitação Oral"],
                "description": "Consultório odontológico de alta performance no Setor Bueno em Goiânia - GO. Especialista em Reabilitação Oral, Lentes de Contato Dentais em Cerâmica, Implantes Guiados 3D sem cortes, Alinhadores Invisíveis e Sedação Consciente com Anestesiologista.",
                "url": "https://marcelodaltro.com.br",
                "logo": "https://marcelodaltro.com.br/logo1.jpg",
                "image": [
                  "https://marcelodaltro.com.br/hero.jpg",
                  "https://marcelodaltro.com.br/doutor.jpg",
                  "https://marcelodaltro.com.br/clinica1.jpeg"
                ],
                "priceRange": "$$",
                "telephone": "+55-62-99187-3755",
                "email": "daltroodonto@gmail.com",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Rua T-55, nº 930 - Sala 1608, Edifício Walk Bueno Business",
                  "addressLocality": "Goiânia",
                  "addressRegion": "GO",
                  "postalCode": "74215-170",
                  "addressCountry": "BR"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": -16.705485,
                  "longitude": -49.274006
                },
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "08:00",
                    "closes": "18:00"
                  }
                ],
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "5.0",
                  "reviewCount": "150",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "sameAs": [
                  "https://www.instagram.com/daltrolp2",
                  "https://maps.app.goo.gl/ca8b1e646dc89a22"
                ],
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Tratamentos Odontológicos Especializados",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "MedicalProcedure",
                        "name": "Lentes de Contato Dentais Cerâmicas",
                        "description": "Lentes de porcelana pura minimamente invasivas para correção perfeita de cor, formato e proporção dos dentes."
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "MedicalProcedure",
                        "name": "Implantes Dentários Guiados 3D",
                        "description": "Cirurgia de implantes dentários planejada digitalmente em 3D, realizada sem cortes extensos de bisturi nem pontos, garantindo rápida recuperação."
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "MedicalProcedure",
                        "name": "Reabilitação Oral Estética e Funcional",
                        "description": "Restauração integral da mastigação e estética facial combinando implantes, facetas e coroas computadorizadas."
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "MedicalProcedure",
                        "name": "Sedação Consciente com Anestesiologista",
                        "description": "Acompanhamento médico anestesiologista em sala para procedimentos odontológicos sem estresse, ansiedade ou dor."
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "MedicalProcedure",
                        "name": "Alinhadores Invisíveis / Invisalign",
                        "description": "Aparelhos ortodônticos transparentes customizados via escaneamento bucal 3D para alinhamento dental discreto."
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "MedicalProcedure",
                        "name": "Facetas em Resina Composta",
                        "description": "Transformação estética do sorriso realizada em sessão única com resinas de alta densidade."
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "MedicalProcedure",
                        "name": "Tratamento de Bruxismo e Placas Miorrelaxantes",
                        "description": "Placas de proteção dental contra bruxismo, prevenindo desgaste nos dentes e dores na ATM."
                      }
                    }
                  ]
                }
              },
              {
                "@type": ["Physician", "Person"],
                "@id": "https://marcelodaltro.com.br/#doctor",
                "name": "Dr. Marcelo Daltro",
                "jobTitle": "Cirurgião-Dentista Especialista em Reabilitação Oral e Odontologia Estética",
                "worksFor": {
                  "@id": "https://marcelodaltro.com.br/#clinic"
                },
                "medicalSpecialty": [
                  "Dentistry",
                  "Cosmetic Dentistry",
                  "Implantology",
                  "Prosthodontics"
                ],
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Rua T-55, nº 930 - Sala 1608, Edifício Walk Bueno Business",
                  "addressLocality": "Goiânia",
                  "addressRegion": "GO",
                  "postalCode": "74215-170",
                  "addressCountry": "BR"
                },
                "telephone": "+55-62-99187-3755",
                "sameAs": [
                  "https://www.instagram.com/daltrolp2"
                ]
              },
              {
                "@type": "FAQPage",
                "@id": "https://marcelodaltro.com.br/#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "O implante dentário guiado por computador dói?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Não. A cirurgia guiada é planejada em software 3D antes do procedimento. Por não exigir cortes clássicos para procurar o osso, é um processo minimamente invasivo, rápido e o pós-operatório é extremamente confortável e sem inchaços na maioria dos casos."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Como funciona o tratamento com sedação consciente no Dr. Marcelo Daltro?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Temos um médico anestesiologista dedicado em sala durante todo o procedimento. O paciente recebe medicamentos intravenosos de forma controlada que promovem sono leve e relaxamento profundo, acordando sem lembranças do procedimento."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Quanto tempo dura o tratamento com lentes de contato dentais em porcelana?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Lentes de contato em cerâmica (porcelana) possuem vida útil longa, frequentemente ultrapassando 10 a 15 anos com boa higiene oral e visitas periódicas. Elas não mudam de cor nem mancham como a resina."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Onde fica o consultório do Dr. Marcelo Daltro em Goiânia?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "O consultório está localizado no Edifício Walk Bueno Business, na Rua T-55, nº 930, Sala 1608, Setor Bueno, Goiânia - GO (CEP 74215-170)."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "O edifício do consultório possui estacionamento?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Sim. Os pacientes contam com serviço de estacionamento rotativo com manobrista no próprio Edifício Walk Bueno Business durante as consultas."
                    }
                  }
                ]
              }
            ]
          })}
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
      <body
        suppressHydrationWarning
        className={`font-sans ${geistSans.variable} ${geistMono.variable} ${jost.variable} ${josefinSans.variable} ${playfairDisplay.variable} ${montserrat.variable} ${lora.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}

