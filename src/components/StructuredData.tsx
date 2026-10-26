import React from "react";
import { siteConfig } from "@/config/site";

export function StructuredData() {
  const clinicSchema = {
    "@context": "https://schema.org",
    "@type": ["Dentist", "LocalBusiness", "MedicalBusiness"],
    name: siteConfig.fullName,
    alternateName: siteConfig.name,
    image: `${siteConfig.url}/logo-clinica.png`,
    logo: `${siteConfig.url}/logo-clinica.png`,
    description: siteConfig.seo.description,
    telephone: siteConfig.phoneRaw,
    email: siteConfig.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -8.7909,
      longitude: -63.8824,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:00",
        closes: "11:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "14:00",
        closes: "18:00",
      },
    ],
    medicalSpecialty: [
      "Dentistry",
      "Orthodontics",
      "Endodontics",
      "Prosthodontics",
      "Periodontics",
    ],
    employee: {
      "@type": "Person",
      name: siteConfig.professional,
      jobTitle: "Cirurgiã-Dentista Responsável Técnica",
      identifier: siteConfig.cro,
    },
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.facebook,
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Como faço para agendar uma avaliação?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "É só chamar a nossa equipe pelo WhatsApp (69) 99602-1979. Verificamos os horários disponíveis e confirmamos a sua consulta.",
        },
      },
      {
        "@type": "Question",
        name: "Qual tratamento é indicado para o meu caso?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A indicação depende de uma avaliação clínica. Na consulta, a Dra. Magna examina o seu caso e explica as opções de tratamento.",
        },
      },
      {
        "@type": "Question",
        name: "Quais são os horários de atendimento?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "De segunda a sexta, das 08h às 11h30 e das 14h às 18h. Aos sábados e domingos a clínica geralmente fica fechada, salvo datas especiais ou plantões combinados previamente.",
        },
      },
      {
        "@type": "Question",
        name: "Onde fica a clínica?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Na Av. Jatuarana, nº 4941, Sala 01, bairro Nova Floresta, em Porto Velho. Região central da Zona Sul, com fácil acesso e estacionamento nas proximidades.",
        },
      },
      {
        "@type": "Question",
        name: "Posso tirar dúvidas antes de marcar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Claro. Envie sua dúvida pelo WhatsApp e nossa equipe responde no horário de atendimento.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
