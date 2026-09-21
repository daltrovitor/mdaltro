// Hello World

import React from "react";

const schemaData = {
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
};

export default function JsonLd() {
  return (
    <script
      id="ld-json-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
