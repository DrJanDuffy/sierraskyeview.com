import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const NewBuildHomes: NextPage = () => {
  const constructionPhases = [
    {
      phase: "Foundation & Framing",
      duration: "4-6 weeks",
      description: "Site preparation, foundation pour, and structural framing completion",
      features: ["Excavation and grading", "Foundation installation", "Structural framing", "Roof installation"]
    },
    {
      phase: "Mechanical & Electrical",
      duration: "3-4 weeks", 
      description: "Installation of all mechanical, electrical, and plumbing systems",
      features: ["HVAC installation", "Electrical rough-in", "Plumbing installation", "Insulation"]
    },
    {
      phase: "Interior Finishes",
      duration: "4-5 weeks",
      description: "Drywall, flooring, cabinets, and final interior details",
      features: ["Drywall and texturing", "Flooring installation", "Cabinet installation", "Paint and trim"]
    },
    {
      phase: "Final Inspections",
      duration: "1-2 weeks",
      description: "Quality inspections, final walkthrough, and closing preparation",
      features: ["Quality control inspections", "Final walkthrough", "Punch list completion", "Closing preparation"]
    }
  ];

  const floorPlans = [
    {
      name: "Residence 1602",
      sqft: "1,602",
      bedrooms: "3",
      bathrooms: "2.5",
      garage: "2",
      startingPrice: "$419,990",
      features: ["Open floor plan", "Modern kitchen with island", "Upstairs loft", "Primary suite with walk-in closet"],
      constructionTime: "12-16 weeks"
    },
    {
      name: "Residence 1708", 
      sqft: "1,708",
      bedrooms: "3",
      bathrooms: "2.5",
      garage: "2",
      startingPrice: "$429,990",
      features: ["Loft area", "Enhanced kitchen", "Spacious primary suite", "Modern open concept"],
      constructionTime: "12-16 weeks"
    },
    {
      name: "Residence 1965",
      sqft: "1,965", 
      bedrooms: "3",
      bathrooms: "2.5",
      garage: "2",
      startingPrice: "$449,990",
      features: ["Optional downstairs bed", "Largest floor plan", "Gourmet kitchen", "Expansive primary suite"],
      constructionTime: "14-18 weeks"
    }
  ];

  return (
    <>
      <Head>
        <title>New Build Homes Available Now | Sierra at Skyeview at Skye Canyon | Homes by Dr. Jan Duffy</title>
        <meta name="description" content="Explore new build homes available now at Sierra at Skyeview in Skye Canyon, Las Vegas. Century Communities new construction with Dr. Jan Duffy's expert guidance and VIP access." />
        <meta property="og:title" content="New Build Homes Available Now | Sierra at Skyeview at Skye Canyon" />
        <meta property="og:description" content="Explore new build homes available now at Sierra at Skyeview in Skye Canyon, Las Vegas. Century Communities new construction with expert guidance." />
        <meta name="keywords" content="new build homes Las Vegas, Sierra at Skyeview new construction, Century Communities new homes, Skye Canyon new builds, Las Vegas new home construction, Dr. Jan Duffy new homes" />
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
              <Link href="/new-build-homes" className="text-blue-600 font-medium">New Build Homes</Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-600 font-medium">Services</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">About Dr. Jan</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
              <Link href="/qa" className="text-gray-700 hover:text-blue-600 font-medium">Q&A</Link>
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
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              New Build Homes Available Now
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Discover exceptional new build homes at Sierra at Skyeview in Skye Canyon, Las Vegas. Century Communities new construction with Dr. Jan Duffy's expert guidance, VIP access, and exclusive benefits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:7025001955" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                📞 Start Your Build: (702) 500-1955
              </a>
              <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                Get VIP Access
              </Link>
            </div>
          </div>
        </section>

        {/* New Build Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose New Build Homes at Sierra at Skyeview
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                New build homes offer the latest in design, technology, and energy efficiency, perfectly tailored to modern living in Skye Canyon's master-planned community.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Customizable Design</h3>
                <p className="text-gray-600">Choose from premium finishes, upgrades, and design options to create your perfect home at Sierra at Skyeview.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Modern Technology</h3>
                <p className="text-gray-600">Smart home features, energy-efficient systems, and latest building materials for optimal comfort and savings.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Builder Warranty</h3>
                <p className="text-gray-600">Comprehensive warranty coverage from Century Communities, one of America's most trusted homebuilders.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Available Floor Plans */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                New Build Floor Plans Available Now
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose from three exceptional floor plans designed for modern living at Sierra at Skyeview in Skye Canyon.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {floorPlans.map((plan, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-2xl font-bold text-blue-600 mb-4">Starting at {plan.startingPrice}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="font-semibold">{plan.sqft}</span><br />
                      <span className="text-gray-600">Square Feet</span>
                    </div>
                    <div>
                      <span className="font-semibold">{plan.bedrooms}</span><br />
                      <span className="text-gray-600">Bedrooms</span>
                    </div>
                    <div>
                      <span className="font-semibold">{plan.bathrooms}</span><br />
                      <span className="text-gray-600">Bathrooms</span>
                    </div>
                    <div>
                      <span className="font-semibold">{plan.garage}</span><br />
                      <span className="text-gray-600">Car Garage</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-600">
                      <strong>Construction Time:</strong> {plan.constructionTime}
                    </p>
                  </div>

                  <div className="flex space-x-2">
                    <a href="tel:7025001955" className="flex-1 bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition-colors">
                      📞 Start Building
                    </a>
                    <Link href="/floor-plans" className="flex-1 bg-gray-200 text-gray-800 text-center py-3 rounded-lg hover:bg-gray-300 transition-colors">
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Construction Process */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Century Communities Construction Process
              </h2>
              <p className="text-lg mb-8">
                Century Communities follows a proven construction process to ensure quality, efficiency, and timely completion of your new home at Sierra at Skyeview.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {constructionPhases.map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{phase.phase}</h3>
                  <p className="text-sm text-blue-200 mb-2">{phase.duration}</p>
                  <p className="text-sm text-gray-300 mb-4">{phase.description}</p>
                  <ul className="text-xs text-gray-300 space-y-1">
                    {phase.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>• {feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sierra at Skyeview Community Information */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Sierra at Skyeview at Skye Canyon - New Homes in Las Vegas
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Located at 8925 Vanhoy Creek St., Las Vegas, NV 89166, Sierra at Skyeview offers exceptional new build homes within the prestigious Skye Canyon master-planned community.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Skye Canyon Master-Planned Community</h3>
                <p className="text-gray-600 mb-4">
                  Sierra at Skyeview is part of Skye Canyon's 1,700-acre master-planned community, offering residents access to world-class amenities, beautiful mountain views, and a vibrant community lifestyle that's unmatched in the Las Vegas Valley.
                </p>
                <p className="text-gray-600 mb-6">
                  The community features parks, trails, recreational facilities, neighborhood schools, and a stunning central clubhouse. Residents enjoy a perfect balance of suburban tranquility and urban convenience, with easy access to shopping, dining, and entertainment throughout Las Vegas.
                </p>
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Community Amenities Include:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Central Clubhouse
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Swimming Pools & Water Features
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Parks & Walking Trails
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Sports Courts & Fields
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Neighborhood Schools
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Playgrounds & Recreation Areas
                    </li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Century Communities Quality & Warranty</h3>
                <p className="text-gray-600 mb-4">
                  Century Communities is one of America's most trusted homebuilders, with over 30 years of experience in creating exceptional new homes. Their commitment to quality, innovation, and customer satisfaction is evident in every home they build.
                </p>
                <p className="text-gray-600 mb-6">
                  All new build homes at Sierra at Skyeview come with comprehensive warranty coverage, including structural warranty, systems warranty, and workmanship warranty. Century Communities stands behind their construction with dedicated customer service and warranty support.
                </p>
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Warranty Coverage Includes:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="text-blue-500 mr-2">🛡️</span>
                      Structural Warranty (10 years)
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-500 mr-2">🔧</span>
                      Systems Warranty (2 years)
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-500 mr-2">✨</span>
                      Workmanship Warranty (1 year)
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-500 mr-2">📞</span>
                      Dedicated Customer Service
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dr. Jan Duffy Partnership Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Dr. Jan Duffy for New Build Homes
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Dr. Jan Duffy's partnership with Century Communities provides exclusive benefits and expert guidance for new build home buyers at Sierra at Skyeview.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Exclusive Partnership Benefits</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">🎯</div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Early Lot Selection</h4>
                      <p className="text-gray-600">Get first access to the best lots and home sites before they're released to the general public.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">💰</div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Special Pricing & Incentives</h4>
                      <p className="text-gray-600">Access to exclusive pricing, builder incentives, and upgrade packages not available to other buyers.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">📋</div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Streamlined Process</h4>
                      <p className="text-gray-600">Direct communication with Century Communities ensures smooth coordination throughout the build process.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">🤝</div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Expert Negotiation</h4>
                      <p className="text-gray-600">Professional negotiation on your behalf to secure the best terms, pricing, and upgrade options.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Guidance & Support</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">🏠</div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">New Construction Expertise</h4>
                      <p className="text-gray-600">Specialized knowledge of new home construction process, timelines, and what to expect at each phase.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">📍</div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Local Market Knowledge</h4>
                      <p className="text-gray-600">Deep understanding of Las Vegas real estate market and Skye Canyon community development.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">📊</div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Investment Guidance</h4>
                      <p className="text-gray-600">Expert advice on home features, upgrades, and market trends to maximize your investment value.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">🎓</div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Licensed Professional</h4>
                      <p className="text-gray-600">Nevada real estate license S.0197614 with ongoing education and professional development.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start Building Your Dream Home Today!
            </h2>
            <p className="text-lg mb-8">
              Don't wait! New build homes at Sierra at Skyeview are in high demand. Contact Dr. Jan Duffy today to get VIP access and start your new home construction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:7025001955" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                📞 START BUILDING: (702) 500-1955
              </a>
              <a href="mailto:drjan@sierraskyeview.com" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
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
                <Link href="/new-build-homes" className="block text-gray-300 hover:text-white">New Build Homes</Link>
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

export default NewBuildHomes;
