import { Html, Head, Main, NextScript } from "next/document";

const siteUrl = "https://sparkshot.github.io";
const businessName = "Sparkshot Media";
const instagramUrl = "https://www.instagram.com/sparkshott/";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Photographer",
      "@id": `${siteUrl}/#photographer`,
      "name": businessName,
      "url": siteUrl,
      "logo": `${siteUrl}/sparkshot-logo-1.svg`,
      "sameAs": [instagramUrl],
      "description": "Luxury Real Estate & Portrait Photography & Videography",
      "areaServed": {
        "@type": "City",
        "name": "Your City"
      },
      "priceRange": "$$$",
      "knowsAbout": [
        "Real Estate Photography",
        "Portrait Photography",
        "Event Photography",
        "Videography"
      ]
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      "url": siteUrl,
      "name": businessName,
      "publisher": { "@id": `${siteUrl}/#photographer` },
      "potentialAction": {
        "@type": "SearchAction",
        "target": { "@type": "EntryPoint", "urlTemplate": `${siteUrl}/?s={search_term_string}` },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "ImageGallery",
      "@id": `${siteUrl}/#gallery`,
      "name": `${businessName} Portfolio`,
      "description": "Luxury real estate, portrait, and event photography portfolio",
      "url": siteUrl,
      "publisher": { "@id": `${siteUrl}/#photographer` },
    }
  ]
};

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="description"
          content="Sparkshot Media: Luxury Real Estate & Portrait | Photography & Videography"
        />
        <link
          rel="icon"
          href={`${process.env.NEXT_PUBLIC_FAVICON}icons8-camera-snap.gif`}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Titan+One&family=Sacramento&family=Alata&family=Archivo+Black&family=DM+Serif+Display&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
