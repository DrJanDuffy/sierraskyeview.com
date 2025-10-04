import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const QuickMoveIn: NextPage = () => {
  const availableHomes = [
    {
      id: 1,
      address: "8990 Rimerton ST",
      lot: "SRA024",
      floorPlan: "Residence 1602",
      sqft: "1,602",
      bedrooms: "3",
      bathrooms: "2.5",
      garage: "2",
      price: "$420,240",
      pricePerSqft: "$262",
      estCompletion: "Under Construction",
      daysOnSite: "10",
      listingDate: "Sep 18, 2025",
      mlsNumber: "2721611",
      realScoutUrl: "https://drjanduffy.realscout.com/homesearch/listings/p-8990-rimerton-street-las-vegas-89166-glvartrestle-875",
      features: [
        "Open-concept layout with great room, nook, and kitchen",
        "Generous center island and walk-in pantry",
        "Two secondary bedrooms upstairs with full bath",
        "Convenient upstairs laundry room",
        "Private owner's suite with walk-in closet and slider closet",
        "Dual vanities and walk-in shower in master bath",
        "Patio cover and BBQ stub",
        "Century Home Connect smart home features",
        "Upgraded whole house electrical package",
        "42\" cabinets (java) with fawn glossy full backsplash",
        "Laundry cabinet uppers",
        "Upgraded appliance package",
        "Two-tone paint throughout",
        "Gas cooktop, dishwasher, disposal, microwave",
        "Tankless water heater",
        "Double pane, low-emissivity windows",
        "Desert landscaping with drip irrigation",
        "Attached 2-car garage"
      ],
      amenities: [
        "Community pool and spa/hot tub",
        "Fitness center",
        "Clubhouse",
        "Basketball and tennis courts",
        "Dog park",
        "Playground",
        "Jogging paths"
      ],
      schools: [
        "Kenneth Divich Elementary (K-5)",
        "Edmundo Eddie Escobedo Sr Middle School (6-8)",
        "Arbor View High School (9-12)"
      ],
      hoaFee: "$250 quarterly",
      taxes: "$943 annually",
      status: "Available",
      yearBuilt: "2025",
      construction: "Frame, Stucco, and Drywall",
      roof: "Pitched and Tile"
    },
    {
      id: 2,
      address: "9026 Rimerton ST",
      lot: "SRA015",
      floorPlan: "Residence 1602",
      sqft: "1,602",
      bedrooms: "3",
      bathrooms: "2.5",
      garage: "2",
      price: "$453,940",
      pricePerSqft: "$283",
      estCompletion: "Under Construction",
      daysOnSite: "2",
      listingDate: "Oct 1, 2025",
      mlsNumber: "2722264",
      realScoutUrl: "https://drjanduffy.realscout.com/homesearch/listings/p-9026-rimerton-street-las-vegas-89166-glvartrestle-876",
      features: [
        "Cul-de-sac location with charming living",
        "Open-concept layout connecting great room, nook, and kitchen",
        "Generous center island and walk-in pantry",
        "Upstairs laundry room with gas dryer hookup",
        "Private owner's suite with walk-in closet plus slider closet",
        "Dual vanities and walk-in shower in primary bathroom",
        "Patio cover and barbecue stub",
        "Upgraded whole house electrical package",
        "42\" cabinets (snow) with full backsplash",
        "Upgraded stainless steel appliance package",
        "Two-tone paint and upgraded LVP flooring",
        "Double pane windows with low emissivity",
        "Block fencing with backyard privacy",
        "Desert landscaping with drip irrigation",
        "Community amenities: basketball court, clubhouse, dog park, fitness center, pool"
      ],
      amenities: [
        "Basketball Court",
        "Clubhouse", 
        "Dog Park",
        "Fitness Center",
        "Jogging Path",
        "Playground",
        "Pool",
        "Spa/Hot Tub",
        "Tennis Court(s)"
      ],
      schools: [
        "Kenneth Divich Elementary (K-5)",
        "Edmundo Eddie Escobedo Sr Middle School (6-8)",
        "Arbor View High School (9-12)"
      ],
      hoa: {
        fee: "$250",
        frequency: "Quarterly",
        includes: "Association Management"
      },
      taxes: "$943 annually",
      status: "Available"
    },
    {
      id: 3,
      address: "9002 Rimerton ST",
      lot: "SRA021",
      floorPlan: "Residence 1602",
      sqft: "1,602",
      bedrooms: "3",
      bathrooms: "2.5",
      garage: "2",
      price: "$419,990",
      estCompletion: "November 2024",
      realScoutUrl: null,
      features: ["Two-tone paint", "Open Floor Plan", "Century Connect® package"],
      status: "Pending"
    },
    {
      id: 4,
      address: "9018 Rimerton ST",
      lot: "SRA017",
      floorPlan: "Residence 1965",
      sqft: "1,965",
      bedrooms: "3",
      bathrooms: "2.5",
      garage: "2",
      price: "$488,290",
      estCompletion: "December 2024",
      realScoutUrl: null,
      features: ["Optional Downstairs Bed", "Downstairs Den", "LVP Flooring", "Premium finishes", "Largest floor plan"],
      status: "Available"
    }
  ];

  return (
    <>
      <Head>
        <title>Quick Move-In Homes Available | Sierra at Skyeview at Skye Canyon | Homes by Dr. Jan Duffy</title>
        <meta name="description" content="Quick move-in homes available now at Sierra at Skyeview Skye Canyon Las Vegas. Residence 1602 starting at $420,240 with 1,602 sqft. Expert guidance from Dr. Jan Duffy for Century Communities new homes ready for immediate occupancy." />
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
              <Link href="/qa" className="text-gray-700 hover:text-blue-600 font-medium">Q&A</Link>
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
                Don't wait months for construction! Discover move-in ready homes at Sierra at Skyeview in Skye Canyon, Las Vegas. Currently available: Residence 1602 starting at $420,240 with 1,602 sqft. Get expert guidance from Dr. Jan Duffy for Century Communities new homes available for immediate occupancy.
              </p>
              <div className="flex items-center gap-3">
                <span className="text-gray-300">Built by</span>
                <img src="/century-communities-logo.png" alt="Century Communities" className="h-6" />
              </div>
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
        <div className="h-48 overflow-hidden">
          <img
            src={home.id === 1 ? "/8990-rimerton-street-exterior.jpg" :
                 home.id === 2 ? "/9026-rimerton-street-exterior.jpg" :
                 home.floorPlan === "Residence 1602" ? "/residence-1602-floor-plan.jpg" :
                 home.floorPlan === "Residence 1965" ? "/residence-1965-floor-plan.jpg" :
                 "/residence-1708-floor-plan.jpg"}
            alt={home.id === 1 ? "8990 Rimerton Street exterior view" : 
                 home.id === 2 ? "9026 Rimerton Street exterior view" : 
                 `${home.floorPlan} at ${home.address}`}
            className="w-full h-full object-cover"
          />
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
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-2xl font-bold text-green-600">{home.price}</p>
                          {home.pricePerSqft && (
                            <p className="text-sm text-gray-600">{home.pricePerSqft} per sqft</p>
                          )}
                        </div>
                        {home.daysOnSite && (
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                            {home.daysOnSite} days
                          </span>
                        )}
                      </div>
                      <div className="mt-2 space-y-1">
                        <p className="text-sm text-gray-600">Status: {home.estCompletion}</p>
                        {home.listingDate && (
                          <p className="text-sm text-gray-600">Listed: {home.listingDate}</p>
                        )}
                        {home.mlsNumber && (
                          <p className="text-sm text-gray-600">MLS: {home.mlsNumber}</p>
                        )}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {home.features.slice(0, 6).map((feature, index) => (
                          <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {feature}
                          </span>
                        ))}
                        {home.features.length > 6 && (
                          <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                            +{home.features.length - 6} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Community Amenities */}
                    {home.amenities && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Community Amenities:</h4>
                        <div className="flex flex-wrap gap-2">
                          {home.amenities.slice(0, 4).map((amenity, index) => (
                            <span key={index} className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                              {amenity}
                            </span>
                          ))}
                          {home.amenities.length > 4 && (
                            <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                              +{home.amenities.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Schools */}
                    {home.schools && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Nearby Schools:</h4>
                        <div className="text-sm text-gray-600">
                          {home.schools.map((school, index) => (
                            <div key={index}>{school}</div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* HOA & Taxes */}
                    {(home.hoaFee || home.taxes) && (
                      <div className="mb-4 text-sm">
                        {home.hoaFee && (
                          <div className="flex justify-between">
                            <span className="text-gray-600">HOA Fee:</span>
                            <span className="font-semibold">{home.hoaFee}</span>
                          </div>
                        )}
                        {home.taxes && (
                          <div className="flex justify-between">
                            <span className="text-gray-600">Property Tax:</span>
                            <span className="font-semibold">{home.taxes}</span>
                          </div>
                        )}
                      </div>
                    )}

                    <div className="space-y-2">
                      {/* Primary Actions */}
                      <div className="flex space-x-2">
                        <a href="tel:7025001955" className="flex-1 bg-green-600 text-white text-center py-3 rounded-lg hover:bg-green-700 transition-colors">
                          📞 Call Now
                        </a>
                        <Link href="/contact" className="flex-1 bg-gray-200 text-gray-800 text-center py-3 rounded-lg hover:bg-gray-300 transition-colors">
                          📧 Inquire
                        </Link>
                      </div>
                      
                      {/* RealScout Link */}
                      {home.realScoutUrl && (
                        <a 
                          href={home.realScoutUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm flex items-center justify-center gap-2"
                        >
                          🏠 View Full Listing Details
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RealScout Integration */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                🏠 Advanced Home Search with RealScout
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Get detailed property information, market analysis, and personalized recommendations through Dr. Jan Duffy's RealScout platform. Access comprehensive listing data, neighborhood insights, and expert guidance all in one place.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Market Analysis</h3>
                <p className="text-gray-600">Get detailed market data, price trends, and neighborhood comparisons to make informed decisions.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Detailed Listings</h3>
                <p className="text-gray-600">Access comprehensive property details, photos, floor plans, and neighborhood information in one platform.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Guidance</h3>
                <p className="text-gray-600">Work directly with Dr. Jan Duffy for personalized recommendations and professional real estate expertise.</p>
              </div>
            </div>

            <div className="text-center">
              <a 
                href="https://drjanduffy.realscout.com/homesearch/listings/p-8990-rimerton-street-las-vegas-89166-glvartrestle-875"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
              >
                🏠 View 8990 Rimerton Street on RealScout
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            
            {/* 8990 Rimerton Street Gallery */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
                📸 8990 Rimerton Street Photo Gallery
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="group cursor-pointer">
                  <img 
                    src="/8990-rimerton-street-exterior.jpg" 
                    alt="8990 Rimerton Street exterior view"
                    className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <p className="text-sm text-gray-600 mt-2 text-center">Exterior View</p>
                </div>
                <div className="group cursor-pointer">
                  <img 
                    src="/8990-rimerton-kitchen.jpg" 
                    alt="Modern kitchen with island"
                    className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <p className="text-sm text-gray-600 mt-2 text-center">Modern Kitchen</p>
                </div>
                <div className="group cursor-pointer">
                  <img 
                    src="/8990-rimerton-living-room.jpg" 
                    alt="Open concept living room"
                    className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <p className="text-sm text-gray-600 mt-2 text-center">Living Room</p>
                </div>
                <div className="group cursor-pointer">
                  <img 
                    src="/8990-rimerton-master-bedroom.jpg" 
                    alt="Master bedroom"
                    className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <p className="text-sm text-gray-600 mt-2 text-center">Master Bedroom</p>
                </div>
                <div className="group cursor-pointer">
                  <img 
                    src="/8990-rimerton-bathroom.jpg" 
                    alt="Modern bathroom"
                    className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <p className="text-sm text-gray-600 mt-2 text-center">Modern Bathroom</p>
                </div>
                <div className="group cursor-pointer">
                  <img 
                    src="/8990-rimerton-garage.jpg" 
                    alt="Two-car garage"
                    className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <p className="text-sm text-gray-600 mt-2 text-center">Two-Car Garage</p>
                </div>
                <div className="group cursor-pointer">
                  <img 
                    src="/8990-rimerton-neighborhood.jpg" 
                    alt="Sierra at Skyeview neighborhood"
                    className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <p className="text-sm text-gray-600 mt-2 text-center">Neighborhood</p>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <a 
                  href="https://drjanduffy.realscout.com/homesearch/listings/p-8990-rimerton-street-las-vegas-89166-glvartrestle-875"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  🏠 View All Photos on RealScout
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
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
                      <a href="mailto:DrJanSells@SierraSkyeview.com" className="text-blue-600 hover:text-blue-700">DrJanSells@SierraSkyeview.com</a>
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
              <a href="mailto:DrJanSells@SierraSkyeview.com" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg font-semibold transition-colors">
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
            <p>&copy; 2025 Sierra at Skyeview | Homes by Dr Jan Duffy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default QuickMoveIn;
