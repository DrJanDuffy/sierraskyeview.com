import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const Model1602: NextPage = () => {
  const [showMobileCTA, setShowMobileCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      setShowMobileCTA(scrollPosition > windowHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Residence 1602 at Sierra at Skyeview | Homes for Sale | Northwest Las Vegas 89166</title>
        <meta
          name="description"
          content="Residence 1602 at Sierra at Skyeview Homes for sale in Northwest Las Vegas, zip code 89166. Located in Skye Canyon near Mount Charleston. View live availability, pricing starting at $420,240, incentives, and lot releases. Realtor service when buying a new home from buyer's agent Dr. Jan Duffy."
        />
        <meta property="og:title" content="Residence 1602 at Sierra at Skyeview | Homes for Sale" />
        <meta
          property="og:description"
          content="Residence 1602 at Sierra at Skyeview Homes for sale in Northwest Las Vegas. Located in Skye Canyon near Mount Charleston. View real-time availability, pricing, and incentives. Expert realtor service when buying a new home."
        />
        <link rel="canonical" href="https://www.sierraskyeview.com/model-1602" />
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
                  "item": "https://www.sierraskyeview.com/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Floor Plans",
                  "item": "https://www.sierraskyeview.com/floor-plans"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Residence 1602",
                  "item": "https://www.sierraskyeview.com/model-1602"
                }
              ]
            })
          }}
        />
        {/* RealEstateAgent Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Dr. Jan Duffy",
              "description": "Buyer's agent for Residence 1602 at Sierra at Skyeview Homes in Northwest Las Vegas",
              "url": "https://www.sierraskyeview.com/model-1602",
              "telephone": "(702) 500-1955",
              "email": "DrDuffy@SierraSkyeview.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "8925 Vanhoy Creek St.",
                "addressLocality": "Las Vegas",
                "addressRegion": "NV",
                "postalCode": "89166",
                "addressCountry": "US"
              }
            })
          }}
        />
        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is the starting price for Residence 1602 at Sierra at Skyeview?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Residence 1602 starts at $420,240 for 1,602 sq ft with 3 bedrooms and 2.5 bathrooms. This two-story home features an open-concept layout and premium finishes."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are there quick move-in Residence 1602 homes available?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Residence 1602 quick move-in homes are available for immediate occupancy. Dr. Jan Duffy tracks each release to help you reserve the right elevation and delivery date."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What features are included in Residence 1602?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Residence 1602 includes integrated smart home technology, premium finishes, energy-efficient features, and is located at 3,000+ foot elevation in Skye Canyon near Mount Charleston."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does Dr. Jan Duffy help with Residence 1602 purchases?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Dr. Jan represents the buyer—not the builder. She verifies pricing, negotiates incentives, surfaces lot premiums and delivery dates not published on public portals, and stays onsite for walkthroughs to protect your investment."
                  }
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
              <a href="tel:7025001955" className="text-2xl font-bold text-blue-600">
                (702) 500-1955
              </a>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
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
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Residence 1602 at Sierra at Skyeview: Real-Time Availability & Pricing
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-6">
              Explore every Residence 1602 release in real time via <Link href="/about" className="text-blue-300 hover:text-blue-200 underline">Dr. Jan Duffy's</Link> private home finder. Browse all <Link href="/floor-plans" className="text-blue-300 hover:text-blue-200 underline">available homes</Link> and learn about <Link href="/services" className="text-blue-300 hover:text-blue-200 underline">buyer representation services</Link>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:7025001955" className="btn-primary text-sm px-6 py-2">
                📞 Call: (702) 500-1955
              </a>
              <a href="mailto:DrDuffy@SierraSkyeview.com" className="btn-secondary text-sm px-6 py-2">
                📧 Email Dr. Jan
              </a>
            </div>
          </div>
        </section>

        {/* Home Search Widget */}
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Live Residence 1602 Inventory Feed
            </h2>
            <p className="text-gray-700 text-center max-w-3xl mx-auto mb-8">
              This home search is curated by Dr. Jan Duffy and surfaces lot premiums, incentive notes, and delivery dates that are not published on public portals. Compare each release with{" "}
              <Link href="/quick-move-in" className="text-blue-600 hover:text-blue-700 underline">
                current quick move-in homes
              </Link>{" "}
              or review{" "}
              <Link href="/services" className="text-blue-600 hover:text-blue-700 underline">
                buyer representation services
              </Link>{" "}
              before reserving your homesite.
            </p>
            <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden" style={{ minHeight: '800px' }}>
              <iframe
                src="https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0xNDE5NA=="
                width="100%"
                height="800"
                style={{ border: 0 }}
                title="Homes for Sale - Residence 1602 Availability"
                allowFullScreen
                loading="lazy"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Related Floor Plans */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Explore Other Sierra at Skyeview Floor Plans
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Residence 1708</h3>
                <p className="text-gray-600 mb-4">1,708 sq ft | 3 Bed | 2.5 Bath | Starting at $429,990</p>
                <p className="text-gray-700 mb-4">Perfect for families seeking more space with an open-concept design and premium finishes.</p>
                <Link href="/model-1708" className="btn-primary inline-block px-6 py-2 text-sm">
                  View Residence 1708 →
                </Link>
              </div>
              <div className="card p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Residence 1965</h3>
                <p className="text-gray-600 mb-4">1,965 sq ft | 3 Bed | 2.5 Bath | Starting at $449,990</p>
                <p className="text-gray-700 mb-4">Largest floor plan with spacious living areas and luxury features throughout.</p>
                <Link href="/model-1965" className="btn-primary inline-block px-6 py-2 text-sm">
                  View Residence 1965 →
                </Link>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link href="/floor-plans" className="text-blue-600 hover:text-blue-700 font-semibold text-lg">
                View All Sierra at Skyeview Floor Plans →
              </Link>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-12 bg-red-600 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Reserve Residence 1602?
            </h2>
            <p className="text-lg mb-6">
              Dr. Jan Duffy represents YOU—not the builder. As your <Link href="/services" className="text-red-300 hover:text-red-200 underline">Buyer's Agent</Link> for the <Link href="/floor-plans" className="text-red-300 hover:text-red-200 underline">Sierra at Skyeview Area</Link> in <Link href="/community" className="text-red-300 hover:text-red-200 underline">Skye Canyon</Link>, she provides strategy, negotiation, and concierge support from first visit through closing. Located at 3,000+ foot elevation with access to Mount Charleston, this premier community offers a unique Las Vegas lifestyle. Explore <Link href="/quick-move-in" className="text-red-300 hover:text-red-200 underline">quick move-in homes</Link> and <Link href="/new-build-homes" className="text-red-300 hover:text-red-200 underline">new construction opportunities</Link>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:7025001955" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                📞 CALL NOW: (702) 500-1955
              </a>
              <a href="mailto:DrDuffy@SierraSkyeview.com" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                📧 EMAIL DR. JAN
              </a>
              <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                📋 CONTACT FORM
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Sierra at Skyeview Homes</h3>
              <p className="text-gray-300 mb-4">
                Featured New Home Construction & Buyer Representation Specialist
              </p>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                The Sierra at Skyeview Area, located within Skye Canyon, connects Las Vegas home buyers with new construction opportunities, guided by Buyer's Agent Dr. Jan Duffy.
              </p>
              <p className="text-gray-300 mb-4">Call to schedule: (702) 500-1955</p>
              <p className="sr-only">8925 Vanhoy Creek St., Las Vegas, NV 89166</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/floor-plans" className="block text-gray-300 hover:text-white">Available Homes</Link>
                <Link href="/community" className="block text-gray-300 hover:text-white">Skye Canyon Guide</Link>
                <Link href="/services" className="block text-gray-300 hover:text-white">Buyer Representation Services</Link>
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
                  Independent real estate resource. Dr. Jan Duffy is an independent real estate agent providing expert guidance to home buyers.
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Sierra Skyview | Homes by Dr Jan Duffy. All rights reserved.</p>
            <div className="flex flex-col items-center gap-4 mt-4">
              <div className="flex items-center justify-center gap-4">
                <p className="text-gray-400">Dr. Jan Duffy | Nevada Real Estate License #S.0197614</p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Image
                  src="/Berkshire Hathaway HomeServices_Quality Seal_White.png"
                  alt="Berkshire Hathaway HomeServices Logo"
                  width={200}
                  height={40}
                  className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity"
                  priority={false}
                  unoptimized
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <span className="text-gray-400 text-sm">Berkshire Hathaway HomeServices</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div
        className={`fixed bottom-0 left-0 right-0 bg-red-600 text-white shadow-2xl z-50 transition-transform duration-300 md:hidden ${
          showMobileCTA ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-3">
            <div className="flex-1">
              <p className="text-sm font-semibold">Ready to Reserve?</p>
              <p className="text-xs text-red-100">Call Dr. Jan Now</p>
            </div>
            <a
              href="tel:7025001955"
              className="bg-white text-red-600 hover:bg-gray-100 px-6 py-2 rounded-lg font-bold transition-colors whitespace-nowrap"
            >
              📞 (702) 500-1955
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Model1602;






