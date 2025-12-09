import Document, { Head, Html, Main, NextScript } from "next/document";

const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Sierra at Skyeview Homes",
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
  "name": "Sierra at Skyeview Homes",
  "url": "https://www.sierraskyeview.com",
  "publisher": {
    "@type": "Organization",
    "name": "Dr. Jan Duffy Real Estate"
  }
};

const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Dr. Jan Duffy",
  "image": "https://www.sierraskyeview.com/design%2004_new%202.jpg",
  "jobTitle": "Buyer's Agent & New Home Construction Specialist",
  "url": "https://www.sierraskyeview.com/about",
  "worksFor": {
    "@type": "Organization",
    "name": "Sierra at Skyeview Homes"
  },
  "areaServed": {
    "@type": "City",
    "name": "Las Vegas"
  },
  "knowsAbout": [
    "Sierra at Skyeview Homes",
    "Skye Canyon new construction",
    "Las Vegas real estate",
    "Buyer's agent representation"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-702-500-1955",
    "contactType": "sales",
    "areaServed": "US",
    "availableLanguage": "English"
  }
};

const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Sierra at Skyeview Homes",
  "description": "New construction homes in Skye Canyon, Northwest Las Vegas. Expert buyer representation from Dr. Jan Duffy.",
  "url": "https://www.sierraskyeview.com",
  "telephone": "+1-702-500-1955",
  "email": "DrDuffy@SierraSkyeview.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "8925 Vanhoy Creek St.",
    "addressLocality": "Las Vegas",
    "addressRegion": "NV",
    "postalCode": "89166",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "36.2844",
    "longitude": "-115.3153"
  },
  "areaServed": {
    "@type": "City",
    "name": "Las Vegas",
    "containedInPlace": {
      "@type": "State",
      "name": "Nevada"
    }
  },
  "priceRange": "$$",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "10:00",
    "closes": "18:00"
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
          <link rel="sitemap" type="application/xml" href="https://www.sierraskyeview.com/sitemap.xml" />
          {/* Google Search Console Verification - Add meta tag here when provided */}
          {/* <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE_HERE" /> */}
          <meta
            name="description"
            content="Sierra at Skyeview Homes for sale in Northwest Las Vegas. New construction homes located in Skye Canyon near Mount Charleston, guided by Buyer's Agent Dr. Jan Duffy."
          />
          <meta property="og:site_name" content="Sierra at Skyeview Homes" />
          <meta
            property="og:description"
            content="Sierra at Skyeview Homes for sale in Northwest Las Vegas. New construction homes located in Skye Canyon near Mount Charleston with expert guidance from Dr. Jan Duffy."
          />
          <meta property="og:title" content="Sierra at Skyeview Homes - New Construction Northwest Las Vegas" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Sierra at Skyeview Homes - New Construction Northwest Las Vegas" />
          <meta
            name="twitter:description"
            content="Sierra at Skyeview Homes for sale in Northwest Las Vegas. Located in Skye Canyon near Mount Charleston. Buyer's Agent representation from Dr. Jan Duffy."
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_SCHEMA) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }}
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


