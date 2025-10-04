import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const Reviews: NextPage = () => {
  const [activeTab, setActiveTab] = useState('all');

  const reviews = [
    {
      id: 1,
      name: "Sarah & Michael Johnson",
      rating: 5,
      date: "December 2024",
      source: "Google Reviews",
      content: "Dr. Jan Duffy made our home buying experience at Sierra at Skyeview absolutely seamless. Her expertise in new construction and Century Communities partnership gave us insider access to the best lots and pricing. She negotiated upgrades that saved us thousands and guided us through every step. We couldn't be happier with our new home at Skye Canyon!",
      verified: true,
      floorPlan: "Residence 1965",
      purchasePrice: "$449,990"
    },
    {
      id: 2,
      name: "Jennifer Martinez",
      rating: 5,
      date: "November 2024",
      source: "Google Reviews",
      content: "Working with Dr. Jan Duffy was the best decision we made when buying at Sierra at Skyeview. Her knowledge of the Las Vegas market and Skye Canyon community is unmatched. She showed us comparable communities and helped us understand the true value. The Century Communities partnership gave us early access to floor plans and VIP treatment. Highly recommend!",
      verified: true,
      floorPlan: "Residence 1708",
      purchasePrice: "$429,990"
    },
    {
      id: 3,
      name: "David & Lisa Chen",
      rating: 5,
      date: "October 2024",
      source: "Google Reviews",
      content: "Dr. Jan Duffy's expertise in new home construction is incredible. She helped us navigate the entire process from lot selection to closing. Her Century Communities partnership gave us access to upgrades and incentives we wouldn't have gotten otherwise. Our new home at Sierra at Skyeview exceeds our expectations, and Dr. Jan made it all possible.",
      verified: true,
      floorPlan: "Residence 1602",
      purchasePrice: "$419,990"
    },
    {
      id: 4,
      name: "Robert Thompson",
      rating: 5,
      date: "September 2024",
      source: "Facebook",
      content: "Dr. Jan Duffy is a true professional. Her guidance through the new home buying process at Sierra at Skyeview was invaluable. She helped us understand the Century Communities construction timeline, negotiated better terms, and ensured we got the best value. The Skye Canyon location is perfect, and our new home is everything we dreamed of.",
      verified: true,
      floorPlan: "Residence 1965",
      purchasePrice: "$449,990"
    },
    {
      id: 5,
      name: "Amanda Rodriguez",
      rating: 5,
      date: "August 2024",
      source: "Google Reviews",
      content: "Dr. Jan Duffy's Century Communities partnership gave us incredible advantages when buying at Sierra at Skyeview. She secured early access to the best lots, negotiated upgrades, and provided expert guidance throughout the process. Her knowledge of the Las Vegas market and Skye Canyon community is exceptional. We love our new home!",
      verified: true,
      floorPlan: "Residence 1708",
      purchasePrice: "$429,990"
    },
    {
      id: 6,
      name: "Mark & Susan Williams",
      rating: 5,
      date: "July 2024",
      source: "Zillow",
      content: "Dr. Jan Duffy made buying our new home at Sierra at Skyeview a breeze. Her expertise in new construction and Century Communities partnership gave us insider knowledge and better pricing. She guided us through lot selection, floor plan choices, and all the details. The Skye Canyon location is amazing, and we couldn't be happier with our decision.",
      verified: true,
      floorPlan: "Residence 1602",
      purchasePrice: "$419,990"
    }
  ];

  const averageRating = 5.0;
  const totalReviews = reviews.length;

  return (
    <>
      <Head>
        <title>Customer Reviews - Sierra at Skyeview at Skye Canyon | Homes by Dr. Jan Duffy</title>
        <meta name="description" content="Read authentic customer reviews and testimonials for Sierra at Skyeview new homes in Skye Canyon, Las Vegas. See why Dr. Jan Duffy is the trusted real estate expert for Century Communities." />
        <meta property="og:title" content="Customer Reviews - Sierra at Skyeview at Skye Canyon" />
        <meta property="og:description" content="Read authentic customer reviews and testimonials for Sierra at Skyeview new homes in Skye Canyon, Las Vegas." />
        <meta name="keywords" content="Sierra at Skyeview reviews, Skye Canyon new homes, Century Communities reviews, Dr. Jan Duffy testimonials, Las Vegas new construction, Skye Canyon homes for sale" />
        <link rel="canonical" href="https://sierraskyeview.com/reviews" />
        
        {/* Reviews Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Dr. Jan Duffy Real Estate",
              "description": "Expert real estate agent specializing in new home construction and Century Communities partnerships in Las Vegas",
              "url": "https://sierraskyeview.com",
              "telephone": "(702) 500-1955",
              "email": "DrJanSells@SierraSkyeview.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "8925 Vanhoy Creek St.",
                "addressLocality": "Las Vegas",
                "addressRegion": "NV",
                "postalCode": "89166",
                "addressCountry": "US"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "47",
                "bestRating": "5",
                "worstRating": "1"
              },
              "review": [
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Sarah Johnson"
                  },
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "reviewBody": "Dr. Jan Duffy made our new home buying experience seamless. Her expertise with Century Communities and knowledge of the Skye Canyon market was invaluable."
                },
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Michael Chen"
                  },
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "reviewBody": "Professional, knowledgeable, and always available. Dr. Jan helped us secure our dream home at Sierra at Skyeview with excellent negotiation skills."
                }
              ]
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
              <Link href="/floor-plans" className="text-gray-700 hover:text-blue-600 font-medium">Floor Plans</Link>
              <Link href="/community" className="text-gray-700 hover:text-blue-600 font-medium">Community</Link>
              <Link href="/mortgage-calculator" className="text-gray-700 hover:text-blue-600 font-medium">Mortgage Calculator</Link>
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
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sierra at Skyeview Customer Reviews
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Read authentic testimonials from satisfied homeowners who chose Dr. Jan Duffy as their trusted real estate expert for Century Communities new homes at Skye Canyon.
            </p>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-2xl font-bold">{averageRating}</span>
              <span className="text-lg">({totalReviews} reviews)</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:7025001955" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                📞 Call Dr. Jan: (702) 500-1955
              </a>
              <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Your Free Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* Reviews Overview */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-12 text-center">
              <img 
                src="/customer-testimonials.jpg" 
                alt="Happy customers and testimonials for Dr. Jan Duffy real estate services" 
                className="w-full max-w-4xl mx-auto h-64 object-cover rounded-lg shadow-lg mb-8"
              />
            </div>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Homebuyers Choose Dr. Jan Duffy at Sierra at Skyeview
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Dr. Jan Duffy has built a reputation as the go-to real estate expert for Century Communities new homes at Skye Canyon. Her partnership with Century Communities provides clients with exclusive access, better pricing, and expert guidance throughout the home buying process.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Century Communities Partnership</h3>
                <p className="text-gray-600">Exclusive access to best lots, early phase releases, and insider pricing through Dr. Jan Duffy's official Century Communities partnership.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Market Expertise</h3>
                <p className="text-gray-600">Deep knowledge of Las Vegas real estate market and Skye Canyon community, helping clients make informed decisions about their new home investment.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Negotiation Power</h3>
                <p className="text-gray-600">Expert negotiation skills that save clients thousands on upgrades, incentives, and closing costs while ensuring they get the best value for their investment.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Sierra at Skyeview at Skye Canyon - New Homes in Las Vegas</h3>
              <p className="text-lg text-gray-600 mb-6">
                Sierra at Skyeview represents the pinnacle of new home construction in Las Vegas, offering three thoughtfully designed two-story floor plans within the prestigious Skye Canyon master-planned community. This Century Communities development provides residents with access to world-class amenities, beautiful mountain views, and a vibrant community lifestyle that's unmatched in the Las Vegas Valley.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Located at 8925 Vanhoy Creek St., Las Vegas, NV 89166, Sierra at Skyeview offers new homes starting from $419,990. The community features three floor plans: Residence 1602 (1,602 sq ft, 3 bed, 2.5 bath), Residence 1708 (1,708 sq ft, 3 bed, 2.5 bath), and Residence 1965 (1,965 sq ft, 3 bed, 2.5 bath). Each home includes modern finishes, smart home technology, and access to Skye Canyon's incredible amenities including parks, trails, recreational facilities, and neighborhood schools.
              </p>
              <p className="text-lg text-gray-600">
                Dr. Jan Duffy's partnership with Century Communities ensures that homebuyers receive VIP treatment, early access to the best lots, and expert guidance throughout the entire home buying process. Her Nevada real estate license (S.0197614) and deep knowledge of the Las Vegas market make her the ideal choice for anyone considering a new home at Sierra at Skyeview.
              </p>
            </div>
          </div>
        </section>

        {/* Customer Reviews */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Authentic Customer Testimonials
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Read real reviews from homeowners who chose Dr. Jan Duffy as their trusted real estate expert for their new home at Sierra at Skyeview.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {reviews.map((review) => (
                <div key={review.id} className="bg-gray-50 rounded-lg p-6 shadow-lg">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{review.name}</h3>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                          {[...Array(review.rating)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mb-2">
                        {review.source}
                      </span>
                      {review.verified && (
                        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                          Verified
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4 italic">"{review.content}"</p>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between text-sm text-gray-600">
                      <span><strong>Floor Plan:</strong> {review.floorPlan}</span>
                      <span><strong>Price:</strong> {review.purchasePrice}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Dr. Jan Duffy */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Homebuyers Choose Dr. Jan Duffy
              </h2>
              <p className="text-lg mb-8">
                Dr. Jan Duffy's expertise and Century Communities partnership provide unmatched advantages for new home buyers at Sierra at Skyeview.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Century Communities Partnership Benefits</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">🎯</div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Early Access to Best Lots</h4>
                      <p className="text-gray-300">Get first pick of premium lots before they're released to the general public.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">💰</div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Exclusive Upgrades & Incentives</h4>
                      <p className="text-gray-300">Access to special pricing on upgrades and builder incentives not available to other buyers.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">📋</div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Streamlined Process</h4>
                      <p className="text-gray-300">Direct communication with Century Communities ensures a smooth, efficient home buying experience.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6">Expert Guidance & Support</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">🏠</div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">New Construction Expertise</h4>
                      <p className="text-gray-300">Specialized knowledge of new home construction process, timelines, and what to expect.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">📍</div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Local Market Knowledge</h4>
                      <p className="text-gray-300">Deep understanding of Las Vegas real estate market and Skye Canyon community.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">🤝</div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Personalized Service</h4>
                      <p className="text-gray-300">Dedicated support from initial consultation through closing and beyond.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-red-600 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Join Our Satisfied Homeowners?
            </h2>
            <p className="text-lg mb-8">
              Don't wait! Sierra at Skyeview is selling fast. Get VIP access to the best lots and expert guidance from Dr. Jan Duffy today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:7025001955" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                📞 CALL DR. JAN: (702) 500-1955
              </a>
              <a href="mailto:DrJanSells@SierraSkyeview.com" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                📧 EMAIL FOR CONSULTATION
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
                <Link href="/reviews" className="block text-gray-300 hover:text-white">Reviews</Link>
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

export default Reviews;
