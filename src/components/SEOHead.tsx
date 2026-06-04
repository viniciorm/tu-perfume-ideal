import { Helmet } from 'react-helmet-async';

export function SEOHead() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Cuál es el mejor perfume para regalar el Día del Padre?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Black Parfums Aventus y Black Silver Mountain Water son excelentes opciones para quienes buscan una fragancia elegante y de alta duración."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué perfume masculino dura más?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Las fragancias de la línea Black Parfums destacan por su fijación y proyección, especialmente las inspiradas en Aventus, Ombré Leather y Althair."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué diferencia existe entre Black Parfums y De André?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Black Parfums corresponde a la línea premium inspirada en fragancias exclusivas de nicho. De André corresponde a la línea clásica diseñada para uso diario, manteniendo una excelente relación precio-calidad."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué perfume elegir para un hombre de 40 años?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Para hombres de 40 años se recomiendan perfiles amaderados, elegantes y sofisticados como: Aventus, Bleu Chanel, Acqua Di Gio Profondo, Silver Mountain Water y Carolina Herrera Men."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué perfume masculino sirve para oficina?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fragancias frescas y profesionales como Acqua Di Gio, Silver Mountain Water, Polo Blue, CK One y 212 Men son ideales para la oficina."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué perfume masculino es más seductor?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Para seducir se recomiendan fragancias intensas y dulces como One Million, Bad Boy, Eros, Stronger With You y Ombré Leather."
        }
      }
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Parfums",
    "url": "https://parfums.cl",
    "logo": "https://parfums.cl/logo.png"
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://parfums.cl",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://parfums.cl/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Black Aventus" },
      { "@type": "ListItem", "position": 2, "name": "Black Silver Mountain Water" },
      { "@type": "ListItem", "position": 3, "name": "Acqua Di Gio Profondo" },
      { "@type": "ListItem", "position": 4, "name": "Bleu Chanel" },
      { "@type": "ListItem", "position": 5, "name": "Sauvage" },
      { "@type": "ListItem", "position": 6, "name": "Ombré Leather" },
      { "@type": "ListItem", "position": 7, "name": "One Million" },
      { "@type": "ListItem", "position": 8, "name": "Y YSL" },
      { "@type": "ListItem", "position": 9, "name": "Stronger With You" },
      { "@type": "ListItem", "position": 10, "name": "Carolina Herrera Men" }
    ]
  };

  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Black Parfums Aventus",
    "description": "Perfume premium inspirado en Aventus. La mejor opción para regalar a papá.",
    "brand": {
      "@type": "Brand",
      "name": "Black Parfums"
    },
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Cliente Satisfecho"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "89"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Inicio",
      "item": "https://parfums.cl"
    },{
      "@type": "ListItem",
      "position": 2,
      "name": "Regalos Día del Padre",
      "item": "https://parfums.cl/dia-del-padre"
    }]
  };

  return (
    <Helmet>
      <title>El Mejor Perfume para Regalar el Día del Padre | Parfums</title>
      <meta name="description" content="Descubre los mejores perfumes masculinos para regalar el Día del Padre. Encuentra fragancias inspiradas en Creed Aventus, Silver Mountain Water y más." />
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
    </Helmet>
  );
}
