import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Model1965: NextPage = () => {
  return (
    <>
      <Head>
        <title>Residence 1965 - Sierra at Skyeview | Dr. Jan Duffy</title>
        <meta name="description" content="Residence 1965 at Sierra at Skyeview - 1,965 sq ft, 3 bed, 2.5 bath starting from $449,990. Largest floor plan with optional downstairs bed. Expert guidance from Dr. Jan Duffy." />
        <meta property="og:title" content="Residence 1965 - Sierra at Skyeview" />
        <meta property="og:description" content="Residence 1965 at Sierra at Skyeview - 1,965 sq ft, 3 bed, 2.5 bath starting from $449,990." />
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
              Residence 1965 - Largest Floor Plan
            </h1>
            <div className="flex flex-col items-center gap-4 mb-8">
              <p className="text-xl max-w-3xl mx-auto">
                Starting from $449,990 - 1,965 sq ft, 3 bed, 2.5 bath two-story home with optional downstairs bed and premium finishes.
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

        {/* Model Details */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Model Image */}
              <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="h-96 rounded-lg overflow-hidden mb-6">
          <img
            src="/luxury-master-bedroom.jpg"
            alt="Residence 1965 Luxury Master Bedroom"
            className="w-full h-full object-cover"
          />
        </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Specifications</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">1,965</div>
                      <div className="text-gray-600">Square Feet</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">3</div>
                      <div className="text-gray-600">Bedrooms</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">2.5</div>
                      <div className="text-gray-600">Bathrooms</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">2</div>
                      <div className="text-gray-600">Car Garage</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 text-xl">✓</span>
                    <span className="text-gray-700">Optional Downstairs Bed for flexibility</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 text-xl">✓</span>
                    <span className="text-gray-700">Largest floor plan in the community</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 text-xl">✓</span>
                    <span className="text-gray-700">Spacious great room perfect for entertaining</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 text-xl">✓</span>
                    <span className="text-gray-700">Gourmet kitchen with large island</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 text-xl">✓</span>
                    <span className="text-gray-700">Expansive primary suite</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 text-xl">✓</span>
                    <span className="text-gray-700">Downstairs Den for additional living space</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 text-xl">✓</span>
                    <span className="text-gray-700">Premium finishes throughout</span>
                  </li>
                </ul>

                <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                  <h4 className="text-lg font-semibold text-blue-900 mb-2">Century Connect® Package Included</h4>
                  <p className="text-blue-800 text-sm">
                    Every home comes with smart home technology, premium finishes, and energy-efficient features.
                  </p>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Lifestyle Benefits</h4>
                  <p className="text-gray-700 mb-4">
                    Residence 1965 represents the pinnacle of luxury living at Sierra at Skyeview, offering the most spacious floor plan with exceptional flexibility. The optional downstairs bed and downstairs den provide perfect solutions for multi-generational living, guest accommodations, or home office space. This versatility makes it ideal for families who need adaptable spaces that can evolve with their changing needs over time.
                  </p>
                  <p className="text-gray-700 mb-4">
                    The expansive great room provides ample space for entertaining large groups, while the gourmet kitchen with large island serves as the perfect gathering spot for family meals and social events. The spacious primary suite offers a true retreat with premium finishes and ample closet space. With 1,965 square feet of thoughtfully designed space, this home provides room to breathe and grow without compromising on quality or attention to detail.
                  </p>
                  <p className="text-gray-700">
                    Located in the prestigious Sierra at Skyeview community within Skye Canyon, this home offers access to world-class amenities and the natural beauty of the surrounding mountains. The higher elevation provides cooler temperatures and stunning views, while the master-planned community ensures convenient access to shopping, dining, and entertainment. This home represents exceptional value in the Las Vegas market, with strong appreciation potential in the rapidly growing Skye Canyon area. The combination of size, quality, and location makes Residence 1965 the ultimate choice for discerning homebuyers seeking the best of Las Vegas living.
                  </p>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Luxury Living Features</h4>
                  <p className="text-gray-700 mb-4">
                    Residence 1965 represents the pinnacle of luxury living with its generous 1,965 square feet of thoughtfully designed space. The gourmet kitchen features premium appliances, custom cabinetry, and a large center island that serves as both a functional workspace and an elegant entertaining area. The open-concept design seamlessly connects the kitchen, dining area, and great room, creating an expansive living space perfect for large gatherings and intimate family moments.
                  </p>
                  <p className="text-gray-700 mb-4">
                    The spacious primary suite offers a true retreat with premium finishes, ample closet space, and a luxurious bathroom featuring dual vanities and a separate tub and shower. The optional downstairs bed and den provide exceptional flexibility for multi-generational living, home offices, or guest accommodations. This adaptability ensures your home can evolve with your changing needs without requiring expensive renovations or moves.
                  </p>
                  <p className="text-gray-700">
                    The two-story design provides clear separation between living and sleeping areas, creating privacy and quiet when needed while maintaining the open, connected feel that defines modern luxury living. The premium finishes throughout, including two-tone interior paint, energy-efficient windows, and high-quality flooring, create an atmosphere of elegance and sophistication that reflects the quality of life you deserve.
                  </p>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Exclusive Community Benefits</h4>
                  <p className="text-gray-700 mb-4">
                    As a resident of Sierra at Skyeview, you'll enjoy exclusive access to the Skye Canyon master-planned community's world-class amenities. The community's focus on outdoor living and wellness includes over 50 miles of hiking and biking trails, multiple parks and playgrounds, and the Skye Center recreation complex. The higher elevation location provides natural advantages including cleaner air, cooler temperatures, and stunning mountain views that create a unique living experience in the Las Vegas area.
                  </p>
                  <p className="text-gray-700 mb-4">
                    The community's proximity to major employment centers, shopping, dining, and entertainment options ensures convenience while maintaining the peaceful, suburban feel that makes Skye Canyon so desirable. With easy access to the Las Vegas Strip, downtown Las Vegas, and major highways, residents can enjoy the best of both worlds - quiet community living with urban amenities just minutes away. This strategic location provides excellent commute options and access to all the entertainment and cultural attractions that make Las Vegas a world-class city.
                  </p>
                  <p className="text-gray-700">
                    The master-planned community approach ensures coordinated development, maintained property values, and continued investment in community infrastructure. This planned growth strategy creates a stable, desirable neighborhood that attracts quality residents and maintains high property values over time. The combination of natural beauty, modern amenities, and strategic location makes Sierra at Skyeview an exceptional choice for discerning homebuyers who demand the very best in Las Vegas living.
                  </p>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Premium Upgrades & Features</h4>
                  <p className="text-gray-700 mb-4">
                    Residence 1965 offers extensive upgrade options that elevate the home to true luxury status. Premium hardwood flooring, upgraded countertops, and high-end appliances transform the already impressive space into a showpiece home. The gourmet kitchen can be enhanced with professional-grade appliances, custom cabinetry, and luxury finishes that create a chef's dream workspace.
                  </p>
                  <p className="text-gray-700 mb-4">
                    The primary suite can be upgraded with luxury bathroom features including soaking tubs, walk-in showers with multiple shower heads, and premium fixtures. The optional downstairs bed and den can be customized with built-in features, specialty lighting, and high-end finishes that maximize functionality and appeal. These premium upgrades create a home that stands out in the market and provides exceptional value.
                  </p>
                  <p className="text-gray-700">
                    Century Communities' design center offers exclusive upgrade packages specifically designed for Residence 1965, ensuring that your luxury home reflects the highest standards of quality and design. From smart home automation to premium lighting systems, these upgrades create a home that's both beautiful and technologically advanced. The result is a residence that exceeds expectations and provides the ultimate in Las Vegas luxury living.
                  </p>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Market Position & Value</h4>
                  <p className="text-gray-700 mb-4">
                    Residence 1965 represents exceptional value in the Las Vegas luxury home market. At 1,965 square feet starting from $449,990, this home offers more space and features than comparable properties in the area. The combination of size, quality, and location creates a compelling value proposition that appeals to both primary homeowners and investors.
                  </p>
                  <p className="text-gray-700 mb-4">
                    The Skye Canyon location provides natural advantages that maintain property desirability and value over time. The higher elevation, mountain views, and master-planned community status ensure continued appeal to quality buyers. This market position, combined with Century Communities' reputation for quality construction, creates a strong foundation for long-term appreciation and market stability.
                  </p>
                  <p className="text-gray-700">
                    Dr. Jan Duffy's market expertise provides valuable insight into the investment potential and market position of Residence 1965. Her independent analysis helps you understand the true value proposition and make informed decisions about your purchase. This professional guidance ensures you're making a sound investment decision that aligns with your financial goals and lifestyle preferences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Residence 1965 Q&A Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Residence 1965 Questions & Answers
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Get answers to common questions about the largest floor plan at Sierra at Skyeview.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">What makes Residence 1965 the largest floor plan?</h3>
                <p className="text-gray-700 mb-4">
                  Residence 1965 offers 1,965 sq ft with an optional downstairs bed, downstairs den, and the most spacious great room perfect for entertaining large groups.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">What's included in the downstairs den?</h3>
                <p className="text-gray-700 mb-4">
                  The downstairs den provides additional flexible living space that can be used as a home office, playroom, or guest room, perfect for growing families.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Is the downstairs bed optional?</h3>
                <p className="text-gray-700 mb-4">
                  Yes! The optional downstairs bed provides flexibility for guests or family members who prefer single-story living, making this floor plan perfect for multi-generational families.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">What premium finishes are included?</h3>
                <p className="text-gray-700 mb-4">
                  Residence 1965 comes with premium finishes throughout, including a gourmet kitchen with large island, expansive primary suite, and the Century Connect® smart home package.
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
              ⚡ ACT NOW - RESIDENCE 1965 IS SELLING FAST!
            </h2>
            <p className="text-lg mb-8">
              Starting from $449,990. Get VIP access to Residence 1965 with Dr. Jan Duffy's expert guidance. Schedule your private tour today!
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
                <Link href="/floor-plans" className="block text-gray-300 hover:text-white">Floor Plans</Link>
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

export default Model1965;
