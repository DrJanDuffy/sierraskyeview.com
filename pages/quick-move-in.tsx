import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const QuickMoveIn: NextPage = () => {
  return (
    <>
      <Head>
        <title>Quick Move-In Homes Available | Sierra at Skyeview Homes at Skye Canyon | Homes by Dr. Jan Duffy</title>
        <meta name="description" content="Quick move-in homes available now at Sierra at Skyeview Homes Skye Canyon Las Vegas. Residence 1602 starting at $420,240 with 1,602 sqft. Expert guidance from Dr. Jan Duffy for new homes ready for immediate occupancy." />
        <meta property="og:title" content="Quick Move-In Homes Available | Sierra at Skyeview Homes at Skye Canyon" />
        <meta property="og:description" content="Discover quick move-in homes available now at Sierra at Skyeview Homes in Skye Canyon, Las Vegas. New homes ready for immediate occupancy." />
        <meta name="keywords" content="quick move-in homes Las Vegas, Sierra at Skyeview Homes available homes, Skye Canyon new homes ready, Las Vegas new construction available" />
        <link rel="canonical" href="https://www.sierraskyeview.com/quick-move-in" />
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
              <Link href="/quick-move-in" className="text-blue-600 font-medium">Quick Move-In</Link>
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
        <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Quick Move-In Homes Available Now
            </h1>
            <div className="flex flex-col items-center gap-4 mb-8">
              <p className="text-xl max-w-3xl mx-auto">
                Don't wait months for construction! Discover move-in ready homes in the <Link href="/community" className="text-green-300 hover:text-green-200 underline">Sierra at Skyeview Area, located within Skye Canyon, Las Vegas</Link>. Currently available: <Link href="/model-1602" className="text-green-300 hover:text-green-200 underline">Residence 1602</Link> starting at $420,240 with 1,602 sqft. Get expert guidance from <Link href="/about" className="text-green-300 hover:text-green-200 underline">Dr. Jan Duffy</Link> for new homes available for immediate occupancy. Browse all <Link href="/floor-plans" className="text-green-300 hover:text-green-200 underline">available homes</Link> and <Link href="/new-build-homes" className="text-green-300 hover:text-green-200 underline">new construction opportunities</Link>.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:7025001955" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                📞 Check Availability: (702) 500-1955
              </a>
              <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                Schedule Tour Today
              </Link>
            </div>
          </div>
        </section>

        {/* Available Homes - RealScout Widgets */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Move-In Ready Homes at Sierra at Skyeview Homes
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore these carefully selected homes available for quick move-in in the <Link href="/community" className="text-blue-600 hover:text-blue-700 underline">Sierra at Skyeview Area in Skye Canyon</Link>. Each home features premium finishes, smart home technology, and access to world-class <Link href="/community" className="text-blue-600 hover:text-blue-700 underline">community amenities</Link>. Learn more about <Link href="/services" className="text-blue-600 hover:text-blue-700 underline">buyer representation services</Link> and <Link href="/new-build-homes" className="text-blue-600 hover:text-blue-700 underline">new construction homes</Link>.
                <span className="sr-only">Community address: 8925 Vanhoy Creek St., Las Vegas, NV 89166</span>
              </p>
            </div>

            {/* 8990 Rimerton Street - RealScout Widget */}
            <div className="mb-12">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6 border-b">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">8990 Rimerton Street</h3>
                  <p className="text-gray-600">Residence 1602 | Lot SRA024</p>
                </div>
                <div className="bg-gray-50" style={{ minHeight: '700px' }}>
                  <iframe
                    src="https://drjanduffy.realscout.com/homesearch/listings/p-8990-rimerton-street-las-vegas-89166-glvartrestle-875"
                    width="100%"
                    height="700"
                    style={{ border: 0 }}
                    title="RealScout Listing - 8990 Rimerton Street"
                    allowFullScreen
                    loading="lazy"
                    className="w-full"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* 9026 Rimerton Street - RealScout Widget */}
            <div className="mb-12">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6 border-b">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">9026 Rimerton Street</h3>
                  <p className="text-gray-600">Residence 1602 | Lot SRA015</p>
                </div>
                <div className="bg-gray-50" style={{ minHeight: '700px' }}>
                  <iframe
                    src="https://drjanduffy.realscout.com/homesearch/listings/p-9026-rimerton-street-las-vegas-89166-glvartrestle-6"
                    width="100%"
                    height="700"
                    style={{ border: 0 }}
                    title="RealScout Listing - 9026 Rimerton Street"
                    allowFullScreen
                    loading="lazy"
                    className="w-full"
                  ></iframe>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* RealScout Office Search Widget */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                🏠 Explore All Available Homes
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Use Dr. Jan Duffy's private home finder to explore all available homes, pricing, photos, and detailed information in real time.
                <span className="sr-only">This service uses RealScout</span>
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden" style={{ minHeight: '800px' }}>
              <iframe
                src="https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0xNDE5NA=="
                width="100%"
                height="800"
                style={{ border: 0 }}
                title="RealScout Home Search - All Available Homes"
                allowFullScreen
                loading="lazy"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Why Choose Quick Move-In */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Benefits of Quick Move-In Homes at Sierra at Skyeview Homes
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Quick move-in homes offer numerous advantages for buyers who want to start enjoying their new home immediately without waiting for construction completion.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Immediate Occupancy</h3>
                <p className="text-gray-600">Move in right away and start enjoying your new home in the Sierra at Skyeview Area without waiting months for construction to complete.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No Construction Delays</h3>
                <p className="text-gray-600">Avoid potential construction delays, weather issues, or supply chain problems that can extend your move-in timeline.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Finishes</h3>
                      <p className="text-gray-600">These homes feature carefully selected upgrades and finishes that showcase the quality and craftsmanship of Sierra at Skyeview Homes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sierra at Skyeview Homes Community Details */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Sierra at Skyeview Homes at Skye Canyon - New Homes in Las Vegas
              </h2>
              <p className="text-lg mb-8">
                Located at 8925 Vanhoy Creek St., Las Vegas, NV 89166, the Sierra at Skyeview Area offers exceptional new homes within the prestigious Skye Canyon master-planned community.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Community Features</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">🏞️</div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Skye Canyon Master-Planned Community</h4>
                      <p className="text-gray-300">Part of a 1,700-acre master-planned community with parks, trails, recreational facilities, and neighborhood schools.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">🏊</div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">World-Class Amenities</h4>
                      <p className="text-gray-300">Access to pools, clubhouse, sports courts, playgrounds, and community events throughout the year.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">🏫</div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Excellent Schools</h4>
                      <p className="text-gray-300">Neighborhood schools provide quality education for families with children of all ages.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6">Floor Plan Options</h3>
                <div className="space-y-4">
                  <div className="bg-gray-800 rounded-lg p-4">
                    <h4 className="text-lg font-semibold mb-2">Residence 1602</h4>
                    <p className="text-gray-300">1,602 sq ft, 3 bed, 2.5 bath - Starting from $419,990</p>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4">
                    <h4 className="text-lg font-semibold mb-2">Residence 1708</h4>
                    <p className="text-gray-300">1,708 sq ft, 3 bed, 2.5 bath - Starting from $429,990</p>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4">
                    <h4 className="text-lg font-semibold mb-2">Residence 1965</h4>
                    <p className="text-gray-300">1,965 sq ft, 3 bed, 2.5 bath - Starting from $449,990</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Dr. Jan Duffy Buyer Representation */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Work With Dr. Jan Duffy for Quick Move-In Homes
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Dr. Jan Duffy's buyer representation provides early insight into quick move-in homes in the Sierra at Skyeview Area and expert guidance throughout the home buying process. Located at 3,000+ foot elevation in Skye Canyon with access to Mount Charleston, this premier community offers a unique Las Vegas lifestyle. As your Buyer's Agent, Dr. Jan represents YOUR interests exclusively—not the builder's.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Sierra at Skyeview Homes Buyer Benefits</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">🤝</div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Exclusive Access</h4>
                      <p className="text-gray-600">Get first access to quick move-in homes before they're listed publicly, ensuring you have the best selection available.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">💰</div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Better Pricing</h4>
                      <p className="text-gray-600">Access to special pricing, incentives, and upgrades that may not be available to other buyers thanks to Dr. Jan's buyer-focused advocacy.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">📋</div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Streamlined Process</h4>
                      <p className="text-gray-600">Buyer's Agent representation ensures a smooth, efficient home buying experience for quick move-in homes in the Sierra at Skyeview Area.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Dr. Jan Duffy</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="text-2xl mr-4">📞</div>
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <a href="tel:7025001955" className="text-blue-600 hover:text-blue-700">(702) 500-1955</a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-2xl mr-4">📧</div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <a href="mailto:DrDuffy@SierraSkyeview.com" className="text-blue-600 hover:text-blue-700">DrDuffy@SierraSkyeview.com</a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-2xl mr-4">📍</div>
                    <div>
                      <p className="font-semibold text-gray-900">Address</p>
                      <p className="text-gray-600">8925 Vanhoy Creek St.<br />Las Vegas, NV 89166</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-2xl mr-4">🏛️</div>
                    <div>
                      <p className="font-semibold text-gray-900">License</p>
                      <p className="text-gray-600">Nevada License S.0197614</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-green-600 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Don't Miss Out on Quick Move-In Homes!
            </h2>
            <p className="text-lg mb-8">
              Quick move-in homes in the Sierra at Skyeview Area are in high demand. Contact Dr. Jan Duffy today to check availability and secure your new home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:7025001955" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                📞 CHECK AVAILABILITY: (702) 500-1955
              </a>
              <a href="mailto:DrDuffy@SierraSkyeview.com" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg font-semibold transition-colors">
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
                The Sierra at Skyeview Area, located within Skye Canyon, connects Las Vegas home buyers with new construction opportunities, guided by Buyer's Agent Dr. Jan Duffy.
              </p>
              <p className="text-gray-300">Call to schedule: (702) 500-1955</p>
              <p className="sr-only">8925 Vanhoy Creek St., Las Vegas, NV 89166</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/floor-plans" className="block text-gray-300 hover:text-white">Available Homes</Link>
                <Link href="/community" className="block text-gray-300 hover:text-white">Skye Canyon Guide</Link>
                <Link href="/quick-move-in" className="block text-gray-300 hover:text-white">Quick Move-In Homes</Link>
                <Link href="/services" className="block text-gray-300 hover:text-white">Buyer Representation Services</Link>
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
            <p>&copy; 2025 Sierra at Skyeview Homes | Homes by Dr Jan Duffy. All rights reserved.</p>
            <div className="flex flex-col items-center gap-4 mt-4">
              <div className="flex items-center justify-center gap-4">
                <p className="text-gray-400">Dr. Jan Duffy | Nevada Real Estate License #S.0197614</p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Image
                  src="/bhhs-logo.png"
                  alt="Berkshire Hathaway HomeServices Logo"
                  width={200}
                  height={40}
                  className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default QuickMoveIn;





