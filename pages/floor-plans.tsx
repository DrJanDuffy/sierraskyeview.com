import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const FloorPlans: NextPage = () => {
  const floorPlans = [
    {
      id: 1,
      name: "Residence 1602",
      price: "From $419,990",
      sqft: "1,602",
      bedrooms: "3",
      bathrooms: "2.5",
      garage: "2",
      image: "/floorplan-1602.jpg",
      features: [
        "Open Floor Plan design",
        "Open-concept layout connecting great room, nook, and kitchen",
        "Generous center island and walk-in pantry",
        "Private owner's suite with walk-in closet plus slider closet",
        "Dual vanities and walk-in shower in primary bath",
        "Optional separate tub/shower at primary bath",
        "Laundry room with upper cabinets",
        "Two-tone interior paint throughout"
      ],
      popular: false
    },
    {
      id: 2,
      name: "Residence 1708",
      price: "From $429,990",
      sqft: "1,708",
      bedrooms: "3",
      bathrooms: "2.5",
      garage: "2",
      image: "/floorplan-1708.jpg",
      features: [
        "Stunning Model with Loft",
        "Loft area for flexible living space",
        "Enhanced kitchen with premium finishes",
        "Spacious primary suite",
        "Modern open concept design",
        "Upgraded features throughout",
        "Two-story design with shared private driveways"
      ],
      popular: true
    },
    {
      id: 3,
      name: "Residence 1965",
      price: "From $449,990",
      sqft: "1,965",
      bedrooms: "3",
      bathrooms: "2.5",
      garage: "2",
      image: "/floorplan-1965.jpg",
      features: [
        "Optional Downstairs Bed for flexibility",
        "Largest floor plan in the community",
        "Spacious great room perfect for entertaining",
        "Gourmet kitchen with large island",
        "Expansive primary suite",
        "Downstairs Den for additional living space",
        "Premium finishes throughout"
      ],
      popular: false
    }
  ];

  return (
    <>
      <Head>
        <title>Floor Plans - Sierra at Skyeview | Dr. Jan Duffy</title>
        <meta name="description" content="Explore luxury floor plans at Sierra at Skyeview in Skye Canyon. 3 beautiful two-story homes from $447,690. Expert guidance from Dr. Jan Duffy." />
        <meta property="og:title" content="Floor Plans - Sierra at Skyeview" />
        <meta property="og:description" content="Explore luxury floor plans at Sierra at Skyeview in Skye Canyon. 3 beautiful two-story homes from $447,690." />
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
              <Link href="/floor-plans" className="text-blue-600 font-medium">Floor Plans</Link>
              <Link href="/community" className="text-gray-700 hover:text-blue-600 font-medium">Community</Link>
              <Link href="/mortgage-calculator" className="text-gray-700 hover:text-blue-600 font-medium">Mortgage Calculator</Link>
              <Link href="/quick-move-in" className="text-gray-700 hover:text-blue-600 font-medium">Quick Move-In</Link>
              <Link href="/new-build-homes" className="text-gray-700 hover:text-blue-600 font-medium">New Build Homes</Link>
              <Link href="/reviews" className="text-gray-700 hover:text-blue-600 font-medium">Reviews</Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-600 font-medium">Services</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">About Dr. Jan</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
              <Link href="/qa" className="text-gray-700 hover:text-blue-600 font-medium">Q&A</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sierra at Skyeview Floor Plans - Now Selling!
            </h1>
            <div className="flex flex-col items-center gap-4 mb-8">
              <p className="text-xl max-w-3xl mx-auto">
                Limited Availability! Choose from 3 two-story floor plans with 3 bedrooms and up to 1,965 sq. ft. Each home features expansive living spaces, premium finishes, and smart tech included with the Century Connect® package. Starting from $419,990.
              </p>
              <div className="flex items-center gap-3">
                <span className="text-gray-300">Built by</span>
                <img src="/century-communities-logo.png" alt="Century Communities" className="h-6" />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:7025001955" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                📞 Call NOW: (702) 500-1955
              </a>
              <a href="mailto:DrJanSells@SierraSkyeview.com" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                📧 Email Dr. Jan
              </a>
            </div>
          </div>
        </section>

        {/* Floor Plans Grid */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {floorPlans.map((plan) => (
                <div key={plan.id} className="bg-white rounded-lg shadow-lg overflow-hidden relative">
                  {plan.popular && (
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                      MOST POPULAR
                    </div>
                  )}
                  
                  <div className="h-64 relative overflow-hidden">
                    <img 
                      src={plan.name === "Residence 1602" ? "/floorplan-1602.jpg" : 
                           plan.name === "Residence 1708" ? "/floorplan-1708.jpg" : 
                           "/floorplan-1965.jpg"} 
                      alt={`${plan.name} floor plan`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-blue-600 font-semibold text-xl mb-4">{plan.price}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-gray-900">{plan.sqft}</div>
                        <div className="text-sm text-gray-600">Square Feet</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-gray-900">{plan.bedrooms}</div>
                        <div className="text-sm text-gray-600">Bedrooms</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-gray-900">{plan.bathrooms}</div>
                        <div className="text-sm text-gray-600">Bathrooms</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-gray-900">{plan.garage}</div>
                        <div className="text-sm text-gray-600">Car Garage</div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-green-600 mr-2">✓</span>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <a href="tel:7025001955" className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                        📞 Schedule Tour
                      </a>
                      <Link href={`/model-${plan.name.toLowerCase().replace(' ', '-')}`} className="block w-full bg-transparent border-2 border-blue-600 text-blue-600 text-center py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-semibold">
                        🏠 View Details
                      </Link>
                      <a href="mailto:DrJanSells@SierraSkyeview.com" className="block w-full bg-gray-100 text-gray-700 text-center py-3 rounded-lg hover:bg-gray-200 transition-colors font-semibold">
                        📧 Get More Info
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Century Connect Features */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Century Connect® Smart Home Package
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Every home at Sierra Skyview comes with the innovative Century Connect® package, featuring smart home technology and modern conveniences.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Smart Home Technology</h3>
                <p className="text-gray-600">Integrated smart home features for convenience and energy efficiency.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Finishes</h3>
                <p className="text-gray-600">High-quality materials and finishes throughout your home.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Energy Efficient</h3>
                <p className="text-gray-600">Modern construction techniques for optimal energy performance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Floor Plans Q&A Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Floor Plans Questions & Answers
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Get answers to common questions about Sierra at Skyeview floor plans and features.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Which floor plan is most popular?</h3>
                <p className="text-gray-700 mb-4">
                  Residence 1708 with the stunning loft is our most popular choice, offering 1,708 sq ft and flexible living space starting from $429,990.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">What's the largest floor plan?</h3>
                <p className="text-gray-700 mb-4">
                  Residence 1965 is our largest at 1,965 sq ft, featuring an optional downstairs bed and starting from $449,990.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Can I customize the floor plans?</h3>
                <p className="text-gray-700 mb-4">
                  Yes! Century Communities offers various customization options and upgrades. Dr. Jan Duffy can help you explore available options.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Do all homes have garages?</h3>
                <p className="text-gray-700 mb-4">
                  Yes, all Sierra at Skyeview homes include a 2-car garage and feature shared private driveways for added convenience.
                </p>
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
              ⚡ ACT NOW - LIMITED TIME OFFER!
            </h2>
            <p className="text-lg mb-8">
              Get VIP access to Sierra Skyview floor plans with Dr. Jan Duffy's expert guidance. Schedule your private tour today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:7025001955" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                📞 CALL NOW: (702) 500-1955
              </a>
              <a href="mailto:DrJanSells@SierraSkyeview.com" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 rounded-lg font-semibold transition-colors">
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
                <Link href="/floor-plans" className="block text-blue-400">Floor Plans</Link>
                <Link href="/community" className="block text-gray-300 hover:text-white">Community</Link>
                <Link href="/services" className="block text-gray-300 hover:text-white">Services</Link>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Dr. Jan Duffy</h4>
              <div className="space-y-2 text-gray-300">
                <p><strong>Primary Phone:</strong><br />(702) 500-1955</p>
                <p><strong>Email:</strong><br />DrJanSells@SierraSkyeview.com</p>
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
          </div>
        </div>
      </footer>
    </>
  );
};

export default FloorPlans;
