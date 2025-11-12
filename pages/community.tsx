import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Community: NextPage = () => {
  const amenities = [
    { icon: "🏞️", title: "Recreation Center", description: "A recreational playground with inspiring scenery and an emotionally appealing setting" },
    { icon: "🏊", title: "Fitness Center", description: "State-of-the-art fitness facilities for active living and wellness" },
    { icon: "🏃", title: "Parks & Trails", description: "Beautiful parks and walking trails throughout the 1,700-acre community" },
    { icon: "🏀", title: "Sports Courts & Fields", description: "Sports courts and fields for active living and community engagement" },
    { icon: "🎯", title: "Splash Pads", description: "Family-friendly splash pads and water features for all ages" },
    { icon: "🏫", title: "Neighborhood Schools", description: "Convenient access to local schools within the community" }
  ];

  const nearbyAttractions = [
    { icon: "🏪", title: "Sprouts Farmers Market", distance: "Las Vegas, NV 89128", description: "Fresh organic groceries and health foods" },
    { icon: "🛒", title: "Smith's Food and Drug", distance: "Las Vegas, NV 89106", description: "Full-service grocery store and pharmacy" },
    { icon: "🏬", title: "Montecito Marketplace", distance: "Las Vegas, NV 89149", description: "Shopping center with retail and dining" },
    { icon: "🍽️", title: "Mimi's Cafe", distance: "Las Vegas, NV 89149", description: "Casual dining with American comfort food" },
    { icon: "☕", title: "Starbucks", distance: "Las Vegas, NV 89102", description: "Coffee and light meals" },
    { icon: "🏫", title: "Local Schools", distance: "Nearby", description: "William & Mary Scherbenbach Elementary, James Bilbray Elementary, Kenneth Divich Elementary, Ralph Cadwallader Middle School, Edmundo Escobedo Middle School, Arbor View High School, Somerset Academy-Skye Canyon Campus" }
  ];

  return (
    <>
      <Head>
        <title>Sierra at Skyeview Community | Skye Canyon Las Vegas | Dr. Jan Duffy</title>
        <meta name="description" content="Discover Sierra at Skyeview community in Skye Canyon Las Vegas. 1,700-acre master-planned community with resort-style amenities, parks, and top-rated schools. Expert guidance from Dr. Jan Duffy." />
        <meta property="og:title" content="Community - Sierra at Skyeview" />
        <meta property="og:description" content="Discover the beautiful community of Sierra at Skyeview in Skye Canyon, Las Vegas. 1,700-acre master-planned community with premium amenities." />
        <link rel="canonical" href="https://sierraskyeview.com/community" />
        
        {/* Video Schema for Virtual Tours */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VideoObject",
              "name": "Sierra at Skyeview Community Virtual Tour",
              "description": "Take a virtual tour of Sierra at Skyeview community in Skye Canyon, Las Vegas. See the beautiful homes, amenities, and lifestyle that awaits you in this master-planned community.",
              "thumbnailUrl": "https://sierraskyeview.com/skye-canyon-master-plan.jpg",
              "uploadDate": "2025-01-27",
              "duration": "PT3M30S",
              "contentUrl": "https://www.youtube.com/watch?v=example",
              "embedUrl": "https://www.youtube.com/embed/example",
              "publisher": {
                "@type": "Organization",
                "name": "Dr. Jan Duffy Real Estate",
                "url": "https://sierraskyeview.com"
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
              <Link href="/" className="text-2xl font-bold text-blue-600">
                Sierra at Skyeview
              </Link>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
              <Link href="/floor-plans" className="text-gray-700 hover:text-blue-600 font-medium">Homes</Link>
              <Link href="/community" className="text-blue-600 font-medium">Community</Link>
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
              Sierra at Skyeview Community
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Discover new Skyeview homes for sale in Las Vegas, NV, at Sierra at Skyeview! Offering exciting, two-story Homes with up to 1,965 square feet, Sierra at Skyeview is the perfect place to plant roots. Residents enjoy incredible amenities at this 1,700-acre neighborhood, from a stunning central clubhouse to pools, parks, playgrounds, and much more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:7025001955" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                📞 Schedule Tour: (702) 500-1955
              </a>
              <a
                href="https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0xNDE5NA=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                🏠 View RealScout Homes
              </a>
            </div>
          </div>
        </section>

        {/* Community Amenities Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Community Amenities
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                A recreational playground with inspiring scenery and an emotionally appealing setting, Skye Canyon's 1,700 acres are designed for a more engaged community—where work-life balance, a sense of well-being, and a vital active life are the norm. Living here, you'll enjoy incredible amenities including:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-3xl mb-3">🏊</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Stunning Central Clubhouse</h3>
                <p className="text-gray-600 text-sm">A beautiful clubhouse as the heart of community life</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-3xl mb-3">🏊‍♀️</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Community Pools</h3>
                <p className="text-gray-600 text-sm">Resort-style pools for relaxation and recreation</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-3xl mb-3">🌳</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Parks & Green Spaces</h3>
                <p className="text-gray-600 text-sm">Beautiful parks throughout the 1,700-acre community</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-3xl mb-3">🎪</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Playgrounds</h3>
                <p className="text-gray-600 text-sm">Family-friendly playgrounds for children of all ages</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-3xl mb-3">🏃‍♂️</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Trails & Walking Paths</h3>
                <p className="text-gray-600 text-sm">Extensive trail system for walking, jogging, and biking</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Splash Pads</h3>
                <p className="text-gray-600 text-sm">Water features and splash pads for cooling off</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-3xl mb-3">🏀</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Sports Courts & Fields</h3>
                <p className="text-gray-600 text-sm">Basketball courts, tennis courts, and sports fields</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-3xl mb-3">🏫</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Neighborhood Schools</h3>
                <p className="text-gray-600 text-sm">Convenient access to quality educational facilities</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-3xl mb-3">💪</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Fitness Center</h3>
                <p className="text-gray-600 text-sm">State-of-the-art fitness facilities for active living</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-gray-700 mb-6">
                <strong>Contact us and let us help you find your dream home here!</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:7025001955" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  📞 Call Dr. Jan: (702) 500-1955
                </a>
                <a href="mailto:DrDuffy@SierraSkyeview.com" className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  📧 Email for More Info
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Community Gallery */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Explore the Stunning Homes and Beautiful Community
              </h2>
              <div className="flex flex-col items-center gap-4">
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  From modern exteriors to luxurious interiors, discover why Sierra at Skyeview is the perfect place to call home in Skye Canyon. Experience the exceptional quality and attention to detail that defines our luxury new construction homes.
                </p>
              </div>
            </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <img src="/community-pool-luxury.jpg" alt="Resort-style community pool and amenities at Skye Canyon" className="aspect-square object-cover rounded-lg hover:scale-105 transition-transform duration-300" loading="lazy" />
          <img src="/community-fitness-center.jpg" alt="State-of-the-art community fitness center in Skye Canyon" className="aspect-square object-cover rounded-lg hover:scale-105 transition-transform duration-300" loading="lazy" />
          <img src="/community-clubhouse.jpg" alt="Luxury community clubhouse and gathering spaces" className="aspect-square object-cover rounded-lg hover:scale-105 transition-transform duration-300" loading="lazy" />
          <img src="/community-playground.jpg" alt="Family-friendly playground and recreational areas" className="aspect-square object-cover rounded-lg hover:scale-105 transition-transform duration-300" loading="lazy" />
          <img src="/family-lifestyle.jpg" alt="Active family lifestyle at Skye Canyon community" className="aspect-square object-cover rounded-lg hover:scale-105 transition-transform duration-300" loading="lazy" />
          <img src="/outdoor-activities.jpg" alt="Outdoor activities and recreation in Las Vegas" className="aspect-square object-cover rounded-lg hover:scale-105 transition-transform duration-300" loading="lazy" />
          <img src="/community-events.jpg" alt="Community events and social gatherings" className="aspect-square object-cover rounded-lg hover:scale-105 transition-transform duration-300" loading="lazy" />
          <img src="/shopping-dining.jpg" alt="Nearby shopping and dining options in Las Vegas" className="aspect-square object-cover rounded-lg hover:scale-105 transition-transform duration-300" loading="lazy" />
        </div>

            <div className="text-center">
              <a href="tel:7025001955" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                📞 Schedule Your Tour Today
              </a>
            </div>
          </div>
        </section>

        {/* Community Amenities */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                🏘️ Community Features
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Sierra at Skyeview offers an exceptional lifestyle within Skye Canyon's 1,700-acre master-planned community. A recreational playground with inspiring scenery and an emotionally appealing setting, Skye Canyon is designed for a more engaged community—where work-life balance, a sense of well-being, and a vital active life are the norm.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {amenities.map((amenity, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">{amenity.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{amenity.title}</h3>
                  <p className="text-gray-600">{amenity.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Prime Location */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Prime Skye Canyon Location
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Strategically located in Skye Canyon's 1,700-acre master-planned community, Sierra at Skyeview offers unparalleled access to recreation, entertainment, and convenience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Nearby Attractions</h3>
                <div className="space-y-4">
                  {nearbyAttractions.map((attraction, index) => (
                    <div key={index} className="flex items-start">
                      <div className="text-2xl mr-4">{attraction.icon}</div>
                      <div>
                        <div className="flex items-center">
                          <h4 className="font-semibold text-gray-900">{attraction.title}</h4>
                          <span className="ml-2 text-blue-600 font-semibold text-sm">{attraction.distance}</span>
                        </div>
                        <p className="text-gray-600 text-sm">{attraction.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/skye-canyon-community-map.jpg" 
                  alt="Skye Canyon Master Planned Community Map showing neighborhoods, amenities, and Sierra at Skyeview location" 
                  className="w-full h-96 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" 
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-white bg-opacity-90 rounded-lg p-3">
                  <h4 className="font-bold text-gray-900 text-sm">Sierra at Skyeview</h4>
                  <p className="text-xs text-gray-600">Premium new construction homes</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lifestyle & Recreation */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                🌳 Amenities & Lifestyle
              </h2>
              <p className="text-lg mb-8 max-w-3xl mx-auto">
                A recreational playground with inspiring scenery and an emotionally appealing setting, Skye Canyon's 1,700 acres are designed for a more engaged community—where work-life balance, a sense of well-being, and a vital active life are the norm. Living here, you'll enjoy a recreation center, a fitness center, parks, trails, splash pads, sports courts and fields, neighborhood schools and more!
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🏔️</div>
                <h3 className="text-xl font-bold mb-2">5 Miles to Skye Canyon Park</h3>
                <p className="text-gray-300">World-class recreational facilities, sports fields, and community events at your doorstep</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🌆</div>
                <h3 className="text-xl font-bold mb-2">20 Miles to Las Vegas Strip</h3>
                <p className="text-gray-300">Easy access to world-class entertainment, dining, and culture</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">⛰️</div>
                <h3 className="text-xl font-bold mb-2">35 Miles to Mount Charleston</h3>
                <p className="text-gray-300">Alpine escape with skiing, hiking, and 20°F cooler temperatures</p>
              </div>
            </div>
          </div>
        </section>

        {/* Smart Home Features */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                🏠 Smart Home Tech
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Every home at Sierra at Skyeview comes equipped with the Century Connect® smart home package for modern convenience and energy efficiency.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Smart Controls</h3>
                <p className="text-gray-600 text-sm">Control your home from anywhere with your smartphone</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Security System</h3>
                <p className="text-gray-600 text-sm">Advanced security features for peace of mind</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Energy Efficient</h3>
                <p className="text-gray-600 text-sm">Smart features to reduce energy consumption</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Premium Finishes</h3>
                <p className="text-gray-600 text-sm">High-quality materials throughout your home</p>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Community Map */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                🗺️ Explore Skye Canyon Master Plan
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover the 1,700-acre master-planned community where Sierra at Skyeview is located. This comprehensive map shows neighborhoods, amenities, schools, and recreational facilities throughout Skye Canyon.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative">
                <img 
                  src="/skye-canyon-community-map.jpg" 
                  alt="Skye Canyon Master Planned Community Map showing neighborhoods, amenities, parks, schools, and Sierra at Skyeview location in Las Vegas" 
                  className="w-full h-auto object-contain" 
                  loading="lazy"
                />
                <div className="absolute top-6 left-6 bg-blue-600 text-white rounded-lg p-4 shadow-lg">
                  <h4 className="font-bold text-lg">📍 Sierra at Skyeview</h4>
                  <p className="text-sm opacity-90">Premium Century Communities homes</p>
                  <p className="text-xs opacity-75 mt-1">Starting from $419,990</p>
                </div>
              </div>
              
              <div className="p-6 bg-gray-50">
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-2xl mb-2">🏞️</div>
                    <h4 className="font-semibold text-gray-900">Parks & Recreation</h4>
                    <p className="text-sm text-gray-600">Multiple parks, trails, and open spaces</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">🏫</div>
                    <h4 className="font-semibold text-gray-900">Top-Rated Schools</h4>
                    <p className="text-sm text-gray-600">Elementary, middle, and high schools</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">🛍️</div>
                    <h4 className="font-semibold text-gray-900">Shopping & Dining</h4>
                    <p className="text-sm text-gray-600">Retail centers and restaurants nearby</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">🚗</div>
                    <h4 className="font-semibold text-gray-900">Easy Access</h4>
                    <p className="text-sm text-gray-600">Near major highways and employment centers</p>
                  </div>
                </div>
                
                <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/skye-canyon-community-map.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    📄 Download Full Community Map (PDF)
                  </a>
                  <a 
                    href="https://www.google.com/maps/search/Skye+Canyon,+Las+Vegas,+NV" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                  >
                    🗺️ View on Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Google Maps Location */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                📍 Visit Sierra at Skyeview
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Located in the heart of Skye Canyon, Sierra at Skyeview offers easy access to the Las Vegas Strip, Downtown Las Vegas, and major employment centers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Location Details</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">📍</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Address</h4>
                      <p className="text-gray-600">8925 Vanhoy Creek St.<br />Las Vegas, NV 89166</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">🚗</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Distance to Key Locations</h4>
                      <p className="text-gray-600">• Las Vegas Strip: 25 minutes<br />• Downtown Las Vegas: 20 minutes<br />• McCarran Airport: 30 minutes<br />• Red Rock Canyon: 15 minutes</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">🛣️</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Major Highways</h4>
                      <p className="text-gray-600">• US-95: 5 minutes<br />• I-215 Beltway: 10 minutes<br />• Skye Canyon Blvd: Direct access</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <a 
                    href="https://www.google.com/maps/dir/?api=1&destination=8925+Vanhoy+Creek+St,+Las+Vegas,+NV+89166"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    🚗 Get Directions
                  </a>
                </div>
              </div>
              
              <div className="relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.234567890123!2d-115.2848!3d36.2565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8b4b5b5b5b5b5%3A0x1234567890abcdef!2sSkye%20Canyon%2C%20Las%20Vegas%2C%20NV!5e0!3m2!1sen!2sus!4v1234567890123"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Skye Canyon Community Location in Las Vegas"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Community Q&A Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Community Questions & Answers
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Get answers to common questions about Skye Canyon community and amenities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Is Skye Canyon a gated community?</h3>
                <p className="text-gray-700 mb-4">
                  Many newer communities within Skye Canyon, including Sierra at Skyeview, offer gated access for added security and exclusivity.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">What's the elevation of Skye Canyon?</h3>
                <p className="text-gray-700 mb-4">
                  Skye Canyon is located at 3,000+ foot elevation, providing cooler temperatures and stunning mountain views compared to the Las Vegas valley floor.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">How many homes will be in Skye Canyon?</h3>
                <p className="text-gray-700 mb-4">
                  Upon completion, Skye Canyon will feature approximately 6,500 homes across four meticulously planned phases.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">What schools are nearby?</h3>
                <p className="text-gray-700 mb-4">
                  Excellent schools include William & Mary Scherbenbach Elementary, Arbor View High School, and Somerset Academy-Skye Canyon Campus.
                </p>
              </div>
            </div>

            <div className="text-center">
              <Link href="/qa" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                View All Community Questions
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-red-600 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Experience Sierra Skyview in Person?
            </h2>
            <p className="text-lg mb-8">
              These features showcase just a glimpse of the luxury and quality you'll find at Sierra Skyview. Schedule your personal tour today to see these stunning homes and community features up close.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:7025001955" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                📞 Call Dr. Jan: (702) 500-1955
              </a>
              <a href="mailto:DrDuffy@SierraSkyeview.com" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                📧 Email for Tour Info
              </a>
              <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                📋 Contact Form
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
                <Link href="/floor-plans" className="block text-gray-300 hover:text-white">Homes</Link>
                <Link href="/community" className="block text-blue-400">Community</Link>
                <Link href="/services" className="block text-gray-300 hover:text-white">Services</Link>
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
          </div>
        </div>
      </footer>
    </>
  );
};

export default Community;



