// app/head.tsx
import Script from "next/script";

export default function Head() {
  return (
    <>
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" href="/favicon.png" />

      {/* Meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="UTF-8" />
      <meta
        name="description"
        content="Izopresto furnizează materiale de construcții premium în București: BCA, fier beton, ciment, adezivi și multe altele, cu livrare rapidă."
      />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ro_RO" />
      <meta property="og:url" content="https://izopresto.ro" />
      <meta
        property="og:title"
        content="IzoPresto – Materiale de Construcții de Top în București"
      />
      <meta
        property="og:description"
        content="Izopresto furnizează materiale de construcții premium în București cu livrare rapidă."
      />
      <meta property="og:image" content="https://izopresto.ro/og-image.jpg" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@IzoprestoRO" />
      <meta
        name="twitter:title"
        content="IzoPresto – Materiale de Construcții de Top în București"
      />
      <meta
        name="twitter:description"
        content="Izopresto furnizează materiale de construcții premium în București cu livrare rapidă."
      />
      <meta
        name="twitter:image"
        content="https://izopresto.ro/og-image.jpg"
      />

      {/* JSON-LD Structured Data */}
      <Script
        id="ld-json-organization"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "IzoPresto",
            url: "https://izopresto.ro",
            logo: "https://izopresto.ro/logo.png",
            sameAs: [
              "https://www.facebook.com/IzoprestoRO",
              "https://www.linkedin.com/company/izopresto"
            ],
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+40-721-379-761",
                contactType: "customer service",
                areaServed: "RO",
                availableLanguage: ["Romanian", "English"]
              }
            ]
          })
        }}
      />
    </>
  );
}
