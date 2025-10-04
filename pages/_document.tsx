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
            content="Sierra Skye View - Beautiful landscape photography showcasing the Sierra Nevada mountains."
          />
          <meta property="og:title" content="Sierra Skye View Photography" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Sierra Skye View Photography" />
          <meta
            name="twitter:description"
            content="Sierra Skye View - Beautiful landscape photography showcasing the Sierra Nevada mountains."
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
