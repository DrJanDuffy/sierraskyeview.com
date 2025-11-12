import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About Dr. Jan Duffy - Sierra at Skyeview | Real Estate Expert</title>
        <meta name="description" content="Learn about Dr. Jan Duffy, your trusted real estate expert specializing in new home construction and independent advocacy for Century Communities buyers in Las Vegas." />
        <meta property="og:title" content="About Dr. Jan Duffy - Sierra at Skyeview" />
        <meta property="og:description" content="Learn about Dr. Jan Duffy, your trusted real estate expert specializing in new home construction and independent advocacy for Century Communities buyers." />
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
              <Link href="/about" className="text-blue-600 font-semibold">About Dr. Jan</Link>
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
              Dr. Jan Duffy: Your Century Communities Buyer Advocate at Sierra at Skyeview
            </h1>
            <p className="text-xl mb-6 max-w-3xl mx-auto">
              New construction moves in weeks, not months. You need someone who knows which lots appreciate fastest, what upgrades to fund versus skip, how to negotiate incentives Century doesn’t advertise, and why your contract matters more than the sales pitch. With 20+ years in Las Vegas real estate, Dr. Jan works directly with Century’s team—she spots opportunity other buyers miss. Let her walk you through every option before you sign anything.
            </p>
            <p className="text-sm uppercase tracking-wide text-blue-100 mb-6">
              Nevada License S.0197614 | New Construction Specialist | Las Vegas Real Estate Expert
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:7025001955" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                📞 Call NOW: (702) 500-1955
              </a>
              <a href="mailto:DrDuffy@SierraSkyeview.com" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                📧 Email Dr. Jan
              </a>
            </div>
          </div>
        </section>

        {/* About Dr. Jan */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <img 
                  src="/dr-jan-duffy-portrait.jpg" 
                  alt="Dr. Jan Duffy - Professional Real Estate Agent" 
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="lg:order-1">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Meet Dr. Jan Duffy
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Dr. Jan Duffy is a Featured New Home Construction & Buyer Representation Specialist, proudly representing homebuyers interested in Century Communities—one of the nation's top 10 homebuilders—at Sierra at Skyeview in Skye Canyon, Las Vegas, NV.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  With deep expertise in the Las Vegas real estate market and a proven track record of success, Dr. Jan Duffy provides expert guidance to homebuyers seeking luxury new construction homes. Her close working relationships with Century Communities sales teams give clients early insight into the best lots, upcoming releases, and negotiation opportunities—all while she remains the buyer's independent advocate.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-green-600 mr-3">✓</span>
                    <span className="text-gray-700">Nevada License S.0197614</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-3">✓</span>
                    <span className="text-gray-700">Century Communities Buyer Advocate</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-3">✓</span>
                    <span className="text-gray-700">Las Vegas Real Estate Expert</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-3">✓</span>
                    <span className="text-gray-700">New Construction Specialist</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                <span className="text-gray-500">Dr. Jan Duffy Photo</span>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Areas */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Areas of Expertise
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Dr. Jan Duffy specializes in new home construction and provides comprehensive real estate services throughout the Las Vegas area.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-lg text-center">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">New Home Construction</h3>
                <p className="text-gray-600">Expert guidance through the entire new construction process from lot selection to closing day.</p>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-lg text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Century Communities Buyer Advocacy</h3>
                <p className="text-gray-600">Independent advocacy providing insider knowledge of Century Communities developments while protecting your interests.</p>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-lg text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Buyer Representation</h3>
                <p className="text-gray-600">Comprehensive buyer representation to protect your interests and maximize your investment.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Dr. Jan */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose Dr. Jan Duffy?
              </h2>
              <p className="text-lg mb-8">
                Get expert, unbiased guidance—I'm your trusted advisor, not the builder's sales agent
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-2">Century Communities Buyer Advocacy</h3>
                <p className="text-gray-300">I collaborate with Century Communities teams to give you insider access while exclusively representing YOUR interests.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold mb-2">Market Expertise</h3>
                <p className="text-gray-300">I'll show you comparable communities and help you understand true market value—not just what the builder tells you.</p>
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

        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Clients Say
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Hear from satisfied clients who have worked with Dr. Jan Duffy for their new home construction needs.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-yellow-400 mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-600 mb-4">
                  "Dr. Jan Duffy made our new home buying process seamless. Her expertise with Century Communities and negotiation skills saved us thousands of dollars."
                </p>
                <p className="font-semibold text-gray-900">- Sarah & Mike Johnson</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-yellow-400 mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-600 mb-4">
                  "We couldn't have asked for a better real estate agent. Dr. Jan's knowledge of the Las Vegas market and her insider access to Century Communities communities was invaluable."
                </p>
                <p className="font-semibold text-gray-900">- Robert & Lisa Chen</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-yellow-400 mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-600 mb-4">
                  "Dr. Jan Duffy is the ultimate professional. She guided us through every step of the construction process and ensured we got the best deal possible."
                </p>
                <p className="font-semibold text-gray-900">- David & Maria Rodriguez</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-red-600 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Work With Dr. Jan Duffy?
            </h2>
            <p className="text-lg mb-8">
              Experience the difference that expert guidance and independent buyer advocacy can make in your new home buying journey.
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
                <Link href="/floor-plans" className="block text-gray-300 hover:text-white">Available Homes</Link>
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

export default About;






