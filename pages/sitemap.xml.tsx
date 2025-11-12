import type { GetServerSideProps } from "next";

const Sitemap = () => null;

const createSitemap = () => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.sierraskyeview.com/</loc>
  </url>
  <url>
    <loc>https://www.sierraskyeview.com/floor-plans</loc>
  </url>
  <url>
    <loc>https://www.sierraskyeview.com/community</loc>
  </url>
  <url>
    <loc>https://www.sierraskyeview.com/new-build-homes</loc>
  </url>
  <url>
    <loc>https://www.sierraskyeview.com/quick-move-in</loc>
  </url>
  <url>
    <loc>https://www.sierraskyeview.com/reviews</loc>
  </url>
  <url>
    <loc>https://www.sierraskyeview.com/services</loc>
  </url>
  <url>
    <loc>https://www.sierraskyeview.com/contact</loc>
  </url>
  <url>
    <loc>https://www.sierraskyeview.com/about</loc>
  </url>
  <url>
    <loc>https://www.sierraskyeview.com/qa</loc>
  </url>
  <url>
    <loc>https://www.sierraskyeview.com/mortgage-calculator</loc>
  </url>
  <url>
    <loc>https://www.sierraskyeview.com/model-1602</loc>
  </url>
  <url>
    <loc>https://www.sierraskyeview.com/model-1708</loc>
  </url>
  <url>
    <loc>https://www.sierraskyeview.com/model-1965</loc>
  </url>
  <url>
    <loc>https://www.sierraskyeview.com/model-residence-1602</loc>
  </url>
  <url>
    <loc>https://www.sierraskyeview.com/model-residence-1708</loc>
  </url>
  <url>
    <loc>https://www.sierraskyeview.com/model-residence-1965</loc>
  </url>
  <url>
    <loc>https://www.sierraskyeview.com/robots.txt</loc>
  </url>
</urlset>`;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemap = createSitemap();

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;


