import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const QuickMoveIn: NextPage = () => {
  const availableHomes = [
    {
      id: 1,
      address: "9002 Rimerton ST",
      lot: "SRA021",
      floorPlan: "Residence 1602",
      sqft: "1,602",
      bedrooms: "3",
      bathrooms: "2.5",
      garage: "2",
      price: "$419,990",
      estCompletion: "November 2024",
      features: ["Two-tone paint", "LVP Flooring", "Smart home package"],
      status: "Pending"
    },
    {
      id: 2,
      address: "9018 Rimerton ST",
      lot: "SRA017",
      floorPlan: "Residence 1965",
      sqft: "1,965",
      bedrooms: "3",
      bathrooms: "2.5",
      garage: "2",
      price: "$488,290",
      estCompletion: "December 2024",
      features: ["Downstairs Den", "LVP Flooring", "Premium finishes"],
      status: "Available"
    }
  ];

  return (
    <>
      <Head>
        <title>Quick Move-In Homes Available | Sierra at Skyeview at Skye Canyon | Homes by Dr. Jan Duffy</title>
        <meta name="description" content="Discover quick move-in homes available now at Sierra at Skyeview in Skye Canyon, Las Vegas. New homes ready for immediate occupancy with Dr. Jan Duffy's expert guidance." />
        <meta property="og:title" content="Quick Move-In Homes Available | Sierra at Skyeview at Skye Canyon" />
        <meta property="og:description" content="Discover quick move-in homes available now at Sierra at Skyeview in Skye Canyon, Las Vegas. New homes ready for immediate occupancy." />
        <meta name="keywords" content="quick move-in homes Las Vegas, Sierra at Skyeview available homes, Skye Canyon new homes ready, Century Communities move-in ready, Las Vegas new construction available" />
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
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
              <Link href="/floor-plans" className="text-gray-700 hover:text-blue-600 font-medium">Floor Plans</Link>
              <Link href="/community" className="text-gray-700 hover:text-blue-600 font-medium">Community</Link>
              <Link href="/mortgage-calculator" className="text-gray-700 hover:text-blue-600 font-medium">Mortgage Calculator</Link>
              <Link href="/quick-move-in" className="text-blue-600 font-medium">Quick Move-In</Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-600 font-medium">Services</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">About Dr. Jan</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
            </div>
            <div className="md:hidden">
              <button className="text-gray-700">
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
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Don't wait months for construction! Discover move-in ready homes at Sierra at Skyeview in Skye Canyon, Las Vegas. Get expert guidance from Dr. Jan Duffy for Century Communities new homes available for immediate occupancy.
            </p>
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

        {/* Available Homes */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Move-In Ready Homes at Sierra at Skyeview
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                These carefully selected homes are available for quick move-in at Sierra at Skyeview in Skye Canyon. Each home features premium finishes, smart home technology, and access to world-class community amenities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {availableHomes.map((home) => (
                <div key={home.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="h-48 bg-green-100 flex items-center justify-center">
                    <span className="text-green-600 font-semibold">Home Image</span>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{home.floorPlan}</h3>
                        <p className="text-gray-600">{home.address} | Lot {home.lot}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        home.status === 'Available' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {home.status}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <span className="font-semibold">{home.sqft}</span><br />
                        <span className="text-gray-600">Square Feet</span>
                      </div>
                      <div>
                        <span className="font-semibold">{home.bedrooms}</span><br />
                        <span className="text-gray-600">Bedrooms</span>
                      </div>
                      <div>
                        <span className="font-semibold">{home.bathrooms}</span><br />
                        <span className="text-gray-600">Bathrooms</span>
                      </div>
                      <div>
                        <span className="font-semibold">{home.garage}</span><br />
                        <span className="text-gray-600">Car Garage</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-2xl font-bold text-green-600">{home.price}</p>
                      <p className="text-sm text-gray-600">Est. Completion: {home.estCompletion}</p>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Included Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {home.features.map((feature, index) => (
                          <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <a href="tel:7025001955" className="flex-1 bg-green-600 text-white text-center py-3 rounded-lg hover:bg-green-700 transition-colors">
                        📞 Call Now
                      </a>
                      <Link href="/contact" className="flex-1 bg-gray-200 text-gray-800 text-center py-3 rounded-lg hover:bg-gray-300 transition-colors">
                        📧 Inquire
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Quick Move-In */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Benefits of Quick Move-In Homes at Sierra at Skyeview
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Quick move-in homes offer numerous advantages for buyers who want to start enjoying their new home immediately without waiting for construction completion.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Immediate Occupancy</h3>
                <p className="text-gray-600">Move in right away and start enjoying your new home at Sierra at Skyeview without waiting months for construction to complete.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No Construction Delays</h3>
                <p className="text-gray-600">Avoid potential construction delays, weather issues, or supply chain problems that can extend your move-in timeline.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Finishes</h3>
                <p className="text-gray-600">These homes feature carefully selected upgrades and finishes that showcase the quality and craftsmanship of Century Communities.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sierra at Skyeview Community Details */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Sierra at Skyeview at Skye Canyon - New Homes in Las Vegas
              </h2>
              <p className="text-lg mb-8">
                Located at 8925 Vanhoy Creek St., Las Vegas, NV 89166, Sierra at Skyeview offers exceptional new homes within the prestigious Skye Canyon master-planned community.
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

        {/* Dr. Jan Duffy Partnership */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Work With Dr. Jan Duffy for Quick Move-In Homes
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Dr. Jan Duffy's partnership with Century Communities provides exclusive access to quick move-in homes and expert guidance throughout the home buying process.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Century Communities Partnership Benefits</h3>
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
                      <p className="text-gray-600">Access to special pricing, incentives, and upgrades that may not be available to other buyers through Dr. Jan's partnership.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">📋</div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Streamlined Process</h4>
                      <p className="text-gray-600">Direct communication with Century Communities ensures a smooth, efficient home buying experience for quick move-in homes.</p>
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
                      <a href="mailto:drjan@sierraskyeview.com" className="text-blue-600 hover:text-blue-700">drjan@sierraskyeview.com</a>
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
              Quick move-in homes at Sierra at Skyeview are in high demand. Contact Dr. Jan Duffy today to check availability and secure your new home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:7025001955" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                📞 CHECK AVAILABILITY: (702) 500-1955
              </a>
              <a href="mailto:drjan@sierraskyeview.com" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg font-semibold transition-colors">
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
              <p className="text-gray-300">
                8925 Vanhoy Creek St.<br />
                Las Vegas, NV 89166<br />
                (702) 500-1955
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/" className="block text-gray-300 hover:text-white">Home</Link>
                <Link href="/floor-plans" className="block text-gray-300 hover:text-white">Floor Plans</Link>
                <Link href="/community" className="block text-gray-300 hover:text-white">Community</Link>
                <Link href="/quick-move-in" className="block text-gray-300 hover:text-white">Quick Move-In</Link>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Dr. Jan Duffy</h4>
              <div className="space-y-2 text-gray-300">
                <p><strong>Primary Phone:</strong><br />(702) 500-1955</p>
                <p><strong>Email:</strong><br />drjan@sierraskyeview.com</p>
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
            <p>&copy; 2025 Sierra at Skyeview | Homes by Dr Jan Duffy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default QuickMoveIn;
