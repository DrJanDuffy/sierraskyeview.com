import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

const Home: NextPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Sierra Skyview - Luxury New Homes in Skye Canyon",
      subtitle: "Now Selling! Starting at $459,790 - Luxury Homes in Gated Community",
      description: "Expert Guidance from Dr. Jan Duffy | Century Communities Partnership",
      image: "/hero-1.jpg"
    },
    {
      title: "Limited Availability - Act Fast!",
      subtitle: "Only 3 floor plans remaining! Sierra Skyview is selling out fast.",
      description: "Get your VIP tour with Dr. Jan Duffy before these luxury homes are gone.",
      image: "/hero-2.jpg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <>
      <Head>
        <title>Sierra Skyview - Luxury New Homes in Skye Canyon | Dr. Jan Duffy</title>
        <meta name="description" content="Luxury new homes in Skye Canyon, Las Vegas. Expert guidance from Dr. Jan Duffy. Starting at $459,790 with Century Communities partnership." />
        <meta property="og:title" content="Sierra Skyview - Luxury New Homes in Skye Canyon" />
        <meta property="og:description" content="Luxury new homes in Skye Canyon, Las Vegas. Expert guidance from Dr. Jan Duffy. Starting at $459,790 with Century Communities partnership." />
        <meta property="og:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sierra Skyview - Luxury New Homes in Skye Canyon" />
        <meta name="twitter:description" content="Luxury new homes in Skye Canyon, Las Vegas. Expert guidance from Dr. Jan Duffy." />
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
        <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-700">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sierra at Skyeview - New Homes in Las Vegas
            </h1>
            <p className="text-xl md:text-2xl mb-4">
              Now Selling! Starting at $419,990 - Two-Story Homes up to 1,965 sq ft
            </p>
            <p className="text-lg mb-8">
              Expert Guidance from Dr. Jan Duffy | Century Communities Partnership
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:7025001955" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                📞 Call NOW: (702) 500-1955
              </a>
              <a href="mailto:drjan@sierraskyeview.com" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                📧 Email Dr. Jan
              </a>
              <Link href="/floor-plans" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                🏠 View Floor Plans
              </Link>
            </div>
            <p className="mt-4 text-lg font-semibold">
              5060 Wind Springs Street, North Las Vegas, NV 89031
            </p>
          </div>
        </section>

        {/* Limited Availability Alert */}
        <section className="bg-red-600 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              🚨 LIMITED AVAILABILITY - ACT FAST!
            </h2>
            <p className="text-lg mb-4">
              Only 3 floor plans remaining! Sierra at Skyeview is selling out fast. Get your VIP tour with Dr. Jan Duffy before these homes are gone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:7025001955" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                📞 SECURE YOUR HOME: (702) 500-1955
              </a>
              <Link href="/floor-plans" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                👀 VIEW AVAILABLE FLOOR PLANS
              </Link>
            </div>
          </div>
        </section>

        {/* Floor Plans Preview */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Sierra at Skyeview Floor Plans - Now Selling!
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Limited Availability! Choose from 3 two-story floor plans with 3 bedrooms and up to 1,965 sq. ft. Each home features expansive living spaces, premium finishes, and smart tech included with the Century Connect® package.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Floor Plan 1 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">Floor Plan Image</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Residence 1602</h3>
                  <p className="text-blue-600 font-semibold text-lg mb-4">From $419,990</p>
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="font-semibold">1,602</span><br />
                      <span className="text-gray-600">Square Feet</span>
                    </div>
                    <div>
                      <span className="font-semibold">3</span><br />
                      <span className="text-gray-600">Bedrooms</span>
                    </div>
                    <div>
                      <span className="font-semibold">2.5</span><br />
                      <span className="text-gray-600">Bathrooms</span>
                    </div>
                    <div>
                      <span className="font-semibold">2</span><br />
                      <span className="text-gray-600">Car Garage</span>
                    </div>
                  </div>
                  <Link href="/floor-plans" className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    View Details
                  </Link>
                </div>
              </div>

              {/* Floor Plan 2 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">Floor Plan Image</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Residence 1708</h3>
                  <p className="text-blue-600 font-semibold text-lg mb-4">From $429,990</p>
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="font-semibold">1,708</span><br />
                      <span className="text-gray-600">Square Feet</span>
                    </div>
                    <div>
                      <span className="font-semibold">3</span><br />
                      <span className="text-gray-600">Bedrooms</span>
                    </div>
                    <div>
                      <span className="font-semibold">2.5</span><br />
                      <span className="text-gray-600">Bathrooms</span>
                    </div>
                    <div>
                      <span className="font-semibold">2</span><br />
                      <span className="text-gray-600">Car Garage</span>
                    </div>
                  </div>
                  <Link href="/floor-plans" className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    View Details
                  </Link>
                </div>
              </div>

              {/* Floor Plan 3 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">Floor Plan Image</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Residence 1965</h3>
                  <p className="text-blue-600 font-semibold text-lg mb-4">From $449,990</p>
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="font-semibold">1,965</span><br />
                      <span className="text-gray-600">Square Feet</span>
                    </div>
                    <div>
                      <span className="font-semibold">3</span><br />
                      <span className="text-gray-600">Bedrooms</span>
                    </div>
                    <div>
                      <span className="font-semibold">2.5</span><br />
                      <span className="text-gray-600">Bathrooms</span>
                    </div>
                    <div>
                      <span className="font-semibold">2</span><br />
                      <span className="text-gray-600">Car Garage</span>
                    </div>
                  </div>
                  <Link href="/floor-plans" className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    View Details
            </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Gallery */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Sierra at Skyeview Community Gallery
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore the stunning homes and beautiful community at Sierra at Skyeview. From modern exteriors to luxurious interiors, discover why Sierra at Skyeview is the perfect place to call home in Skye Canyon.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Gallery Image {i}</span>
                </div>
          ))}
        </div>

            <div className="text-center mt-8">
              <Link href="/community" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Explore Community
              </Link>
            </div>
          </div>
        </section>

        {/* Why Work With Dr. Jan Duffy */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Work With Dr. Jan Duffy?
              </h2>
              <p className="text-lg mb-8">
                Get expert, unbiased guidance—I'm your trusted advisor, not the builder's sales agent
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-2">Century Communities Partnership</h3>
                <p className="text-gray-300">I work directly with Century Communities to give you insider access while representing YOUR interests, not theirs.</p>
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

        {/* Call to Action */}
        <section className="py-16 bg-red-600 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              🚨 DON'T MISS OUT - SIERRA AT SKYEVIEW IS SELLING FAST!
            </h2>
            <p className="text-lg mb-8">
              Only 3 floor plans remaining! Get VIP access to Sierra at Skyeview with Dr. Jan Duffy's expert guidance. Schedule your private tour today before these homes are gone forever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:7025001955" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                📞 SECURE YOUR HOME NOW (702) 500-1955
              </a>
              <a href="mailto:drjan@sierraskyeview.com" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 rounded-lg font-semibold transition-colors">
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
                <Link href="/community" className="block text-gray-300 hover:text-white">Community</Link>
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

export default Home;
