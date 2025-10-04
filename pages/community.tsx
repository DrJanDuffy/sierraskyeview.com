import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Community: NextPage = () => {
  const amenities = [
    { icon: "🏞️", title: "Skye Canyon Park", description: "Beautiful parks and recreational facilities" },
    { icon: "🏊", title: "Community Pool", description: "Resort-style swimming pool and spa" },
    { icon: "🏃", title: "Walking Trails", description: "Scenic walking and jogging trails" },
    { icon: "🏀", title: "Sports Courts", description: "Basketball and tennis courts" },
    { icon: "🎯", title: "Clubhouse", description: "Community clubhouse for events" },
    { icon: "🛒", title: "Shopping", description: "Nearby shopping and dining options" }
  ];

  const nearbyAttractions = [
    { icon: "🏔️", title: "Mount Charleston", distance: "35 Miles", description: "Alpine escape with skiing and hiking" },
    { icon: "🎰", title: "Las Vegas Strip", distance: "20 Miles", description: "World-class entertainment and dining" },
    { icon: "🛍️", title: "Premium Outlets", distance: "15 Miles", description: "Shopping and dining destinations" },
    { icon: "🏌️", title: "Golf Courses", distance: "5 Miles", description: "Championship golf courses nearby" },
    { icon: "🎭", title: "Downtown Las Vegas", distance: "25 Miles", description: "Arts, culture, and entertainment" },
    { icon: "✈️", title: "McCarran Airport", distance: "30 Miles", description: "Easy access to air travel" }
  ];

  return (
    <>
      <Head>
        <title>Community - Sierra Skyview | Dr. Jan Duffy</title>
        <meta name="description" content="Discover the beautiful community of Sierra Skyview in Skye Canyon, Las Vegas. Premium amenities, great location, and luxury lifestyle." />
        <meta property="og:title" content="Community - Sierra Skyview" />
        <meta property="og:description" content="Discover the beautiful community of Sierra Skyview in Skye Canyon, Las Vegas. Premium amenities and luxury lifestyle." />
      </Head>

      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                Sierra Skyview
              </Link>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
              <Link href="/floor-plans" className="text-gray-700 hover:text-blue-600 font-medium">Floor Plans</Link>
              <Link href="/community" className="text-blue-600 font-medium">Community</Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-600 font-medium">Services</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">About Dr. Jan</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sierra Skyview Community
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Discover the beautiful community of Sierra Skyview in Skye Canyon, Las Vegas. Experience luxury living with premium amenities, great location, and a vibrant lifestyle.
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
                From modern exteriors to luxurious interiors, discover why Sierra Skyview is the perfect place to call home in Skye Canyon. Experience the exceptional quality and attention to detail that defines our luxury new construction homes.
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
                Sierra Skyview offers an exceptional lifestyle with world-class amenities and convenient access to everything Skye Canyon and Las Vegas have to offer.
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
                Strategically located in Skye Canyon, Sierra Skyview offers unparalleled access to recreation, entertainment, and convenience.
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
                          <span className="ml-2 text-blue-600 font-semibold">{attraction.distance}</span>
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
                Experience the perfect balance of suburban tranquility and urban excitement at Sierra Skyview.
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
                Every home at Sierra Skyview comes equipped with the Century Connect® smart home package for modern convenience and energy efficiency.
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
              <h3 className="text-xl font-bold mb-4">Sierra Skyview</h3>
              <p className="text-gray-300 mb-4">
                Featured New Home Construction & Buyer Representation Specialist
              </p>
              <p className="text-gray-300">
                5060 Wind Springs Street<br />
                North Las Vegas, NV 89031<br />
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
