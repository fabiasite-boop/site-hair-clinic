const SITE_URL = "https://hairclinic.pt";

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "@id": `${SITE_URL}/#business`,
  name: "Hair Clinic by Fábia Oliveira",
  alternateName: "Hair Clinic Porto",
  description:
    "Clínica capilar especializada em tricologia, diagnóstico avançado por microcâmara e rituais sensoriais para o couro cabeludo.",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: [`${SITE_URL}/og-image.png`],
  telephone: "+351-910-000-000",
  email: "info@hairclinic.pt",
  priceRange: "€€€",
  founder: {
    "@type": "Person",
    name: "Fábia Oliveira",
    jobTitle: "Tricologista",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Porto",
    addressRegion: "Porto",
    addressCountry: "PT",
  },
  areaServed: {
    "@type": "City",
    name: "Porto",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "14:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/hairclinicporto",
    "https://www.facebook.com/hairclinicporto",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Tratamentos",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Cabelo & Couro Cabeludo",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Diagnóstico Capilar & Anamnese",
              description:
                "Avaliação profissional com microcâmara que identifica a origem de cada problema capilar.",
              serviceType: "Diagnóstico Tricológico",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Ritual de Introdução Tricológica",
              description:
                "Primeiro contacto com a tricologia. Momento de relaxamento que prepara o couro cabeludo.",
              serviceType: "Tratamento Capilar",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Ritual Terapêutico Intensivo",
              description:
                "Protocolo direcionado para queda, oleosidade ou dermatite, com ativos específicos e tecnologia LED.",
              serviceType: "Tratamento Capilar Intensivo",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Ritual Clínico Premium",
              description:
                "Tratamento capilar profundo com escalda-pés, argila, vapor e massagem.",
              serviceType: "Tratamento Capilar Premium",
            },
          },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Experiências Corpo",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Massagem Relaxante" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Massagem com Pindas" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Esfoliação & Argila" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Banho Terapêutico" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Escalda-Pés" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Programa Completo" } },
        ],
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "3",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Cliente Hair Clinic" },
      reviewBody:
        "Está fantástico mesmo. A cara da riqueza, chiquérrimo, muito confortável e super acolhedor. Relaxei completamente, mesmo estando com imensa gente à volta.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Cliente Hair Clinic" },
      reviewBody: "Adorei! O espaço é muito muito lindo, mesmo relaxante.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Cliente Hair Clinic — Gaia" },
      reviewBody:
        "É algo que não temos aqui em Gaia e é bastante necessário. Trouxeste um conceito totalmente diferente. Não é um simples tratamento de rampa no salão, é uma avaliação profissional e completa. O espaço está lindo!",
    },
  ],
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Hair Clinic by Fábia Oliveira",
  description:
    "Clínica capilar especializada em tricologia e diagnóstico avançado no Porto.",
  inLanguage: "pt-PT",
  publisher: { "@id": `${SITE_URL}/#business` },
};

const faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "O que é tricologia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tricologia é o ramo da dermatologia dedicado ao estudo e tratamento do couro cabeludo e do cabelo. Na Hair Clinic, abordamos cada caso com diagnóstico avançado por microcâmara para identificar a origem dos problemas — queda, oleosidade, dermatite ou caspa — antes de propor qualquer tratamento.",
      },
    },
    {
      "@type": "Question",
      name: "Como é feito o diagnóstico capilar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O diagnóstico começa com uma anamnese completa do histórico, rotinas e estilo de vida. Em seguida usamos microcâmara de alta ampliação para examinar o couro cabeludo, a densidade folicular e o estado dos fios. Com base nessa avaliação, criamos um plano de tratamento personalizado.",
      },
    },
    {
      "@type": "Question",
      name: "Quanto tempo demora a ver resultados?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Os primeiros sinais de melhoria — couro cabeludo mais equilibrado, menos oleosidade, redução de comichão — costumam aparecer entre 4 e 8 semanas. Resultados visíveis no cabelo (densidade, brilho, redução de queda) tipicamente entre 3 e 6 meses de acompanhamento consistente.",
      },
    },
    {
      "@type": "Question",
      name: "A Hair Clinic é um salão de cabeleireiro?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Não. A Hair Clinic é um espaço clínico especializado em tricologia. Não fazemos corte, coloração nem alisamentos. Focamo-nos exclusivamente na saúde do couro cabeludo e do cabelo, com protocolos baseados em ciência tricológica.",
      },
    },
    {
      "@type": "Question",
      name: "Onde fica a clínica?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Hair Clinic by Fábia Oliveira fica no Porto, Portugal. Para marcações: +351 910 000 000 ou info@hairclinic.pt.",
      },
    },
  ],
};

export default function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  );
}
