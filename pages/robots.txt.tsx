import { GetServerSideProps } from 'next';

function generateRobotsTxt() {
  return `User-agent: *
Allow: /

# Sitemap
Sitemap: https://www.sierraskyeview.com/sitemap.xml

# Crawl-delay
Crawl-delay: 1

# Allow all important pages
Allow: /floor-plans
Allow: /community
Allow: /services
Allow: /about
Allow: /contact
Allow: /reviews
Allow: /quick-move-in
Allow: /new-build-homes
Allow: /mortgage-calculator
Allow: /qa
Allow: /model-1602
Allow: /model-1708
Allow: /model-1965
Allow: /model-residence-1602
Allow: /model-residence-1708
Allow: /model-residence-1965

# Disallow admin areas (if any)
# Disallow: /admin/
# Disallow: /private/`;
}

function RobotsTxt() {
  // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // Generate the robots.txt content
  const robotsTxt = generateRobotsTxt();

  res.setHeader('Content-Type', 'text/plain');
  // Write the robots.txt to the response
  res.write(robotsTxt);
  res.end();

  return {
    props: {},
  };
};

export default RobotsTxt;
