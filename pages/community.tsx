import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Community: NextPage = () => {
  const amenities = [
    { icon: "🏞️", title: "Recreation Center", description: "A recreational playground with inspiring scenery and emotionally appealing setting" },
    { icon: "🏊", title: "Fitness Center", description: "State-of-the-art fitness facilities for active living" },
    { icon: "🏃", title: "Parks & Trails", description: "Beautiful parks and walking trails throughout the 1,700-acre community" },
    { icon: "🏀", title: "Sports Courts & Fields", description: "Sports courts and fields for active living and community engagement" },
    { icon: "🎯", title: "Splash Pads", description: "Family-friendly splash pads and water features" },
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
        <title>Community - Sierra at Skyeview | Dr. Jan Duffy</title>
        <meta name="description" content="Discover the beautiful community of Sierra at Skyeview in Skye Canyon, Las Vegas. 1,700-acre master-planned community with premium amenities." />
        <meta property="og:title" content="Community - Sierra at Skyeview" />
        <meta property="og:description" content="Discover the beautiful community of Sierra at Skyeview in Skye Canyon, Las Vegas. 1,700-acre master-planned community with premium amenities." />
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
              Discover the beautiful community of Sierra at Skyeview in Skye Canyon, Las Vegas. Experience luxury living in a 1,700-acre master-planned community with premium amenities and vibrant lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:7025001955" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                📞 Schedule Tour: (702) 500-1955
              </a>
              <Link href="/floor-plans" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                🏠 View Floor Plans
              </Link>
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
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From modern exteriors to luxurious interiors, discover why Sierra at Skyeview is the perfect place to call home in Skye Canyon. Experience the exceptional quality and attention to detail that defines our luxury new construction homes.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Community Image {i}</span>
                </div>
              ))}
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
                Sierra at Skyeview offers an exceptional lifestyle within Skye Canyon's 1,700-acre master-planned community with world-class amenities and convenient access to everything Las Vegas has to offer.
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
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                <span className="text-gray-500">Map Image</span>
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
                Experience the perfect balance of suburban tranquility and urban excitement at Sierra at Skyeview within Skye Canyon's 1,700-acre master-planned community.
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
              <a href="mailto:drjan@sierraskyeview.com" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 rounded-lg font-semibold transition-colors">
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
                <Link href="/floor-plans" className="block text-gray-300 hover:text-white">Floor Plans</Link>
                <Link href="/community" className="block text-blue-400">Community</Link>
                <Link href="/services" className="block text-gray-300 hover:text-white">Services</Link>
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
            <p>&copy; 2025 Sierra Skyview | Homes by Dr Jan Duffy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Community;
