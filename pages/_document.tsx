import Document, { Head, Html, Main, NextScript } from "next/document";

const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Sierra at Skyeview",
  "url": "https://www.sierraskyeview.com",
  "logo": "https://www.sierraskyeview.com/favicon.ico",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-702-500-1955",
    "contactType": "customer service",
    "areaServed": "US",
    "availableLanguage": ["English"]
  }
};

const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Sierra at Skyeview",
  "url": "https://www.sierraskyeview.com",
  "publisher": {
    "@type": "Organization",
    "name": "Dr. Jan Duffy Real Estate"
  }
};

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="robots" content="index, follow" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
          <meta
            name="description"
            content="Sierra at Skyeview connects Las Vegas home buyers with new construction opportunities in Skye Canyon, guided by independent buyer advocate Dr. Jan Duffy."
          />
          <meta property="og:site_name" content="Sierra at Skyeview" />
          <meta
            property="og:description"
            content="Discover Sierra at Skyeview new construction homes in Skye Canyon, Las Vegas with expert guidance from Dr. Jan Duffy."
          />
          <meta property="og:title" content="Sierra at Skyeview - New Construction Homes in Skye Canyon" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Sierra at Skyeview - New Construction Homes in Skye Canyon" />
          <meta
            name="twitter:description"
            content="Independent buyer advocacy from Dr. Jan Duffy for Sierra at Skyeview homes in Skye Canyon, Las Vegas."
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }}
          />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;


