import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Sierra Skye View - Beautiful landscape photography showcasing the Sierra Nevada mountains."
          />
          <meta property="og:site_name" content="sierraskyeview.com" />
          <meta
            property="og:description"
            content="Sierra at Skyeview - Luxury New Homes in Skye Canyon, Las Vegas. Expert guidance from independent buyer advocate Dr. Jan Duffy. Starting at $419,990."
          />
          <meta property="og:title" content="Sierra at Skyeview - Luxury New Homes in Skye Canyon" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Sierra at Skyeview - Luxury New Homes in Skye Canyon" />
          <meta
            name="twitter:description"
            content="Sierra at Skyeview - Luxury New Homes in Skye Canyon, Las Vegas. Expert guidance from Dr. Jan Duffy."
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


