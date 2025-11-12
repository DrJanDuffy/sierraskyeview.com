import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const FloorPlans: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sierra at Skyeview Homes & Inventory | Live Home Finder</title>
        <meta name="description" content="Browse every Sierra at Skyeview floor plan and quick move-in home through Dr. Jan Duffy's curated RealScout search. Real-time availability, pricing, photos, and more." />
        <meta property="og:title" content="Sierra at Skyeview Homes & Inventory" />
        <meta property="og:description" content="View current Homes and quick move-in homes via Dr. Jan Duffy's RealScout search for Century Communities at Sierra at Skyeview." />
        <link rel="canonical" href="https://sierraskyeview.com/floor-plans" />
        
        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://sierraskyeview.com/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Homes",
                  "item": "https://sierraskyeview.com/floor-plans"
                }
              ]
            })
          }}
        />
      </Head>

      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                Sierra at Skyeview
              </Link>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/floor-plans" className="text-gray-700 hover:text-blue-600 font-medium">Available Homes</Link>
              <Link href="/community" className="text-gray-700 hover:text-blue-600 font-medium">Skye Canyon Guide</Link>
              <Link href="/mortgage-calculator" className="text-gray-700 hover:text-blue-600 font-medium">Mortgage Calculator</Link>
              <Link href="/quick-move-in" className="text-gray-700 hover:text-blue-600 font-medium">Quick Move-In</Link>
              <Link href="/new-build-homes" className="text-gray-700 hover:text-blue-600 font-medium">New Construction</Link>
              <Link href="/reviews" className="text-gray-700 hover:text-blue-600 font-medium">Reviews</Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-600 font-medium">Services</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">About Dr. Jan</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
              <Link href="/qa" className="text-gray-700 hover:text-blue-600 font-medium">Q&amp;A</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Explore Sierra at Skyeview Homes & Move-In Homes
            </h1>
            <div className="flex flex-col items-center gap-4 mb-8">
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Instantly see every available floor plan, elevation, quick move-in opportunity, pricing update, and builder incentive using Dr. Jan Duffy&apos;s private home finder. Updated in real time directly from Century Communities.
                <span className="sr-only">Powered by RealScout</span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:7025001955" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                📞 Call NOW: (702) 500-1955
              </a>
              <a href="mailto:DrDuffy@SierraSkyeview.com" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                📧 Email Dr. Jan
              </a>
              <a
                href="https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0xNDE5NA=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                🔍 Explore Available Homes & Quick Closings
                <span className="sr-only">Powered by RealScout</span>
              </a>
            </div>
          </div>
        </section>

        {/* RealScout CTA */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              One Click to Every Home & Quick Move-In
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Skip outdated PDFs and static brochures. Dr. Jan&apos;s private home finder keeps you updated with real-time inventory direct from the Century Communities sales database, including:
              <span className="sr-only">This experience uses RealScout technology</span>
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left mb-10">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Live Availability</h3>
                <p className="text-gray-600">See which Homes, elevations, and lots are currently released or coming soon.</p>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Pricing & Incentives</h3>
                <p className="text-gray-600">Track price changes, incentive updates, and lender promotions curated by Dr. Jan.</p>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Tours & Alerts</h3>
                <p className="text-gray-600">Request a tour or set instant alerts when new inventory is released—right from the search.</p>
              </div>
            </div>
            <a
              href="https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0xNDE5NA=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              🔍 Launch the Live Home Finder
              <span className="sr-only">RealScout link</span>
            </a>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-red-600 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ⚡ ACT NOW - LIMITED TIME OFFER!
            </h2>
            <p className="text-lg mb-8">
              Get VIP access to Sierra Skyview Homes with Dr. Jan Duffy's expert guidance. Schedule your private tour today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:7025001955" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                📞 CALL NOW: (702) 500-1955
              </a>
              <a href="mailto:DrDuffy@SierraSkyeview.com" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                📧 EMAIL DR. JAN
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Sierra at Skyeview</h3>
              <p className="text-gray-300 mb-4">
                Featured New Home Construction & Buyer Representation Specialist
              </p>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                Sierra at Skyeview connects Las Vegas home buyers with new construction opportunities in Skye Canyon, guided by independent Century Communities advocate Dr. Jan Duffy.
              </p>
              <p className="text-gray-300">Call to schedule: (702) 500-1955</p>
              <p className="sr-only">8925 Vanhoy Creek St., Las Vegas, NV 89166</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/floor-plans" className="block text-blue-400">Available Homes</Link>
                <Link href="/community" className="block text-gray-300 hover:text-white">Skye Canyon Guide</Link>
                <Link href="/services" className="block text-gray-300 hover:text-white">Buyer Advocacy Services</Link>
                <Link href="/qa" className="block text-gray-300 hover:text-white">Buyer FAQs</Link>
              </div>
              <h5 className="text-sm font-semibold text-gray-200 mt-6 uppercase tracking-wide">Buyer Resources</h5>
              <div className="space-y-2 text-sm">
                <Link href="/services" className="block text-gray-400 hover:text-white">Las Vegas New Construction Tips</Link>
                <Link href="/community" className="block text-gray-400 hover:text-white">Skye Canyon Amenities &amp; Lifestyle</Link>
                <Link href="/mortgage-calculator" className="block text-gray-400 hover:text-white">New Home Financing Calculator</Link>
                <a
                  href="https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0xNDE5NA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-400 hover:text-white"
                >
                  View Live Sierra Skyeview Inventory
                  <span className="sr-only">Powered by RealScout</span>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Dr. Jan Duffy</h4>
              <div className="space-y-2 text-gray-300">
                <p><strong>Primary Phone:</strong><br />(702) 500-1955</p>
                <p><strong>Email:</strong><br />DrDuffy@SierraSkyeview.com</p>
                <p><strong>Nevada License:</strong><br />S.0197614</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Business Hours</h4>
              <div className="text-gray-300">
                <p>Monday-Sunday: 10:00 AM - 6:00 PM</p>
                <p className="mt-4 text-sm">
                  Independent real estate resource. Not affiliated with or endorsed by Century Communities. Dr. Jan Duffy is an independent real estate agent providing expert guidance to home buyers.
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Sierra Skyview | Homes by Dr Jan Duffy. All rights reserved.</p>
            <p className="text-gray-400 mt-2">Dr. Jan Duffy | Nevada Real Estate License #S.0197614 | Berkshire Hathaway HomeServices</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FloorPlans;






