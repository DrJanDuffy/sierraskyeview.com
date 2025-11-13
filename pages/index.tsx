import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

const Home: NextPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Sierra Skyview - Luxury New Homes in Skye Canyon",
      subtitle: "Now Selling! Starting at $459,790 - Luxury Homes in Gated Community",
      description: "Expert Guidance from Dr. Jan Duffy | Buyer's Agent for Sierra at Skyeview Homes",
      image: "/hero-1.jpg"
    },
    {
      title: "Limited Availability - Act Fast!",
      subtitle: "Only 3 Homes remaining! Sierra Skyview is selling out fast.",
      description: "Get your VIP tour with Dr. Jan Duffy before these luxury homes are gone.",
      image: "/hero-2.jpg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <>
      <Head>
        <title>Sierra at Skyeview Homes | Skye Canyon Las Vegas | Dr. Jan Duffy Real Estate</title>
        <meta name="description" content="Luxury new homes at Sierra at Skyeview Homes in Skye Canyon, Las Vegas NV. New homes starting at $419,990. Expert real estate guidance from Dr. Jan Duffy. Quick move-in homes available now." />
        <meta property="og:title" content="Sierra at Skyeview Homes | Skye Canyon Las Vegas | Dr. Jan Duffy Real Estate" />
        <meta property="og:description" content="Luxury new homes at Sierra at Skyeview Homes in Skye Canyon, Las Vegas NV. New homes starting at $419,990. Expert real estate guidance from Dr. Jan Duffy." />
        <meta property="og:image" content="https://sierraskyeview.com/luxury-home-exterior.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://sierraskyeview.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sierra at Skyeview Homes" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@DrJanSells" />
        <meta name="twitter:title" content="Sierra at Skyeview Homes | Skye Canyon Las Vegas | Dr. Jan Duffy Real Estate" />
        <meta name="twitter:description" content="Luxury new homes at Sierra at Skyeview Homes in Skye Canyon, Las Vegas NV. New homes starting at $419,990." />
        <meta name="twitter:image" content="https://sierraskyeview.com/luxury-home-exterior.jpg" />
        <link rel="canonical" href="https://sierraskyeview.com/" />
        
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Dr. Jan Duffy",
              "description": "Expert real estate agent specializing in new home construction and independent advocacy for Sierra at Skyeview Homes buyers in Las Vegas",
              "url": "https://sierraskyeview.com",
              "telephone": "(702) 500-1955",
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
                "latitude": "36.2565",
                "longitude": "-115.2848"
              },
              "areaServed": {
                "@type": "City",
                "name": "Las Vegas",
                "containedInPlace": {
                  "@type": "State",
                  "name": "Nevada"
                }
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Sierra at Skyeview Homes",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "House",
                      "name": "Residence 1602",
                      "floorSize": "1602 sq ft",
                      "numberOfRooms": "3 bedrooms, 2.5 bathrooms",
                      "offers": {
                        "@type": "Offer",
                        "price": "419990",
                        "priceCurrency": "USD"
                      }
                    }
                  }
                ]
              }
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
            <div className="md:hidden">
              <button className="text-gray-700" aria-label="Open menu">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-700">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sierra at Skyeview Homes - New Construction in Las Vegas
            </h1>
            <p className="text-xl md:text-2xl mb-4">
              Now Selling! Starting at $419,990 - Two-Story Homes up to 1,965 sq ft
            </p>
            <div className="flex items-center justify-center gap-4 mb-8">
              <p className="text-lg">Expert Guidance from Dr. Jan Duffy</p>
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
                🏠 Explore Active Homes & Quick Closings
              </a>
            </div>
          </div>
        </section>

        {/* Limited Availability Alert */}
        <section className="bg-red-600 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              🚨 LIMITED AVAILABILITY - ACT FAST!
            </h2>
            <p className="text-lg mb-4">
              Discover the most up-to-date Homes and quick-move opportunities curated by Dr. Jan Duffy&apos;s private home finder.
              <span className="sr-only">Powered by RealScout</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:7025001955" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                📞 SECURE YOUR HOME: (702) 500-1955
              </a>
              <a
                href="https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0xNDE5NA=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                👀 Browse Current Availability Online
              </a>
            </div>
          </div>
        </section>

        {/* Floor Plan Search CTA */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Explore Every Floor Plan & Homesite in One Place
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Access Dr. Jan Duffy&apos;s private home finder for Sierra at Skyeview Homes. See current Homes, elevations, quick move-in opportunities, photos, pricing, and availability updated in real time.
              <span className="sr-only">Powered by RealScout</span>
            </p>
            <a
              href="https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0xNDE5NA=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              🔍 Open the Live Home Finder
            </a>
          </div>
        </section>

        {/* Community Gallery */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Sierra at Skyeview Homes Gallery
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore the stunning homes and beautiful community at Sierra at Skyeview Homes. From modern exteriors to luxurious interiors, discover why Sierra at Skyeview Homes is the perfect place to call home in Skye Canyon.
              </p>
            </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src="/luxury-home-exterior.jpg" alt="Luxury home exterior at Sierra at Skyeview Homes" className="aspect-square object-cover rounded-lg hover:scale-105 transition-transform duration-300" loading="lazy" />
          <img src="/luxury-kitchen.jpg" alt="Modern luxury kitchen with premium appliances" className="aspect-square object-cover rounded-lg hover:scale-105 transition-transform duration-300" loading="lazy" />
          <img src="/luxury-living-room.jpg" alt="Spacious luxury living room with modern design" className="aspect-square object-cover rounded-lg hover:scale-105 transition-transform duration-300" loading="lazy" />
          <img src="/luxury-master-bedroom.jpg" alt="Elegant master bedroom with premium finishes" className="aspect-square object-cover rounded-lg hover:scale-105 transition-transform duration-300" loading="lazy" />
          <img src="/luxury-bathroom.jpg" alt="Luxury bathroom with modern fixtures" className="aspect-square object-cover rounded-lg hover:scale-105 transition-transform duration-300" loading="lazy" />
          <img src="/community-pool-luxury.jpg" alt="Resort-style community pool at Skye Canyon" className="aspect-square object-cover rounded-lg hover:scale-105 transition-transform duration-300" loading="lazy" />
          <img src="/community-fitness-center.jpg" alt="State-of-the-art community fitness center" className="aspect-square object-cover rounded-lg hover:scale-105 transition-transform duration-300" loading="lazy" />
          <img src="/skye-canyon-master-plan.jpg" alt="Skye Canyon master planned community" className="aspect-square object-cover rounded-lg hover:scale-105 transition-transform duration-300" loading="lazy" />
        </div>

            <div className="text-center mt-8">
              <Link href="/community" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Explore Community
              </Link>
            </div>
          </div>
        </section>

        {/* Why Work With Dr. Jan Duffy */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Work With Dr. Jan Duffy?
              </h2>
              <p className="text-lg mb-8">
                Get expert, unbiased guidance—I'm your trusted advisor, not the builder's sales agent
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-2">Buyer's Agent Representation</h3>
                <p className="text-gray-300">I represent YOU—not the builder. As your Buyer's Agent for Sierra at Skyeview Homes in Skye Canyon, I provide insider access to this premier 3,000+ foot elevation community while protecting your interests.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold mb-2">Skye Canyon Market Expertise</h3>
                <p className="text-gray-300">I'll show you comparable Las Vegas communities and help you understand true market value for Skye Canyon homes—not just what sales teams tell you. My expertise includes the unique benefits of 3,000+ foot elevation living and proximity to Mount Charleston.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-2">Negotiation Power</h3>
                <p className="text-gray-300">Even with new construction, there's room to negotiate. I know how to maximize your leverage and protect your interests.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-2">Las Vegas Specialist</h3>
                <p className="text-gray-300">Nevada License S.0197614. Deep knowledge of Skye Canyon and the entire metro area.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Q&A Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Get quick answers to common questions about Sierra at Skyeview Homes and community.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">What are the HOA fees?</h3>
                <p className="text-gray-700 mb-4">
                  Skye Canyon master community HOA fee is approximately $83/month. Sierra at Skyeview Homes may have additional sub-HOA fees for enhanced amenities.
                </p>
                <a href="/qa" className="text-blue-600 hover:text-blue-700 font-semibold">View all HOA questions →</a>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">What's included in the homes?</h3>
                <p className="text-gray-700 mb-4">
                  Every home at Sierra at Skyeview Homes in Skye Canyon comes with integrated smart home technology, premium finishes, and energy-efficient features. Located at 3,000+ foot elevation with access to Mount Charleston just 30 minutes away.
                </p>
                <a href="/qa" className="text-blue-600 hover:text-blue-700 font-semibold">Learn more about features →</a>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Are there quick move-in homes?</h3>
                <p className="text-gray-700 mb-4">
                  Yes! Several quick move-in homes are available starting from $447,690 with estimated completion dates in December 2024.
                </p>
                <a href="/quick-move-in" className="text-blue-600 hover:text-blue-700 font-semibold">View available homes →</a>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">How does Dr. Jan Duffy help?</h3>
                <p className="text-gray-700 mb-4">
                  As your Buyer's Agent, Dr. Jan represents YOUR interests exclusively—not the builder's. She provides expert guidance on Sierra at Skyeview Homes in Skye Canyon, deep market knowledge of this 3,000+ foot elevation community, and negotiation power focused on protecting your investment.
                </p>
                <a href="/about" className="text-blue-600 hover:text-blue-700 font-semibold">Meet Dr. Jan Duffy →</a>
              </div>
            </div>

            <div className="text-center">
              <Link href="/qa" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                View All Questions & Answers
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-red-600 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              🚨 DON'T MISS OUT - SIERRA AT SKYEVIEW IS SELLING FAST!
            </h2>
            <p className="text-lg mb-8">
              Only 3 Homes remaining! Get VIP access to Sierra at Skyeview Homes with Dr. Jan Duffy's expert guidance. Schedule your private tour today before these homes are gone forever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:7025001955" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                📞 SECURE YOUR HOME NOW (702) 500-1955
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
              <h3 className="text-xl font-bold mb-4">Sierra at Skyeview Homes</h3>
              <p className="text-gray-300 mb-4">
                Featured New Home Construction & Buyer Representation Specialist
              </p>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                Sierra at Skyeview Homes connects Las Vegas home buyers with new construction opportunities in Skye Canyon, guided by Buyer's Agent Dr. Jan Duffy.
              </p>
              <p className="text-gray-300 mb-4">(702) 500-1955</p>
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
                  Independent real estate resource. Dr. Jan Duffy is an independent real estate agent providing expert guidance to home buyers.
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

export default Home;






