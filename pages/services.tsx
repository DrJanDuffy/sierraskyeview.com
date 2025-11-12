import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Services: NextPage = () => {
  const services = [
    {
      icon: "🏠",
      title: "New Home Construction Guidance",
      description: "Expert guidance through the entire new construction process from lot selection to closing.",
      features: [
        "Builder negotiation and representation",
        "Construction timeline management",
        "Quality control inspections",
        "Design center assistance",
        "Closing coordination"
      ]
    },
    {
      icon: "💰",
      title: "Buyer Representation",
      description: "Comprehensive buyer representation to protect your interests and maximize your investment.",
      features: [
        "Market analysis and pricing",
        "Property inspections",
        "Contract negotiation",
        "Financing coordination",
        "Closing support"
      ]
    },
    {
      icon: "🎯",
      title: "Century Communities Buyer Advocacy",
      description: "Independent representation with deep Century Communities insight to help you secure the right home.",
      features: [
        "Early phase updates",
        "Priority lot strategies",
        "Collaborative builder relationships",
        "Exclusive buyer incentives",
        "Negotiation focused on your interests"
      ]
    },
    {
      icon: "📊",
      title: "Market Expertise",
      description: "Deep knowledge of the Las Vegas real estate market and Skye Canyon area.",
      features: [
        "Neighborhood analysis",
        "Investment potential assessment",
        "Comparable market studies",
        "Future development insights",
        "Property value projections"
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Services - Sierra at Skyeview | Dr. Jan Duffy</title>
        <meta name="description" content="Professional real estate services from Dr. Jan Duffy. New home construction guidance, buyer representation, and independent advocacy for Century Communities buyers." />
        <meta property="og:title" content="Services - Sierra at Skyeview" />
        <meta property="og:description" content="Professional real estate services from Dr. Jan Duffy. New home construction guidance and buyer representation expertise." />
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
              <Link href="/services" className="text-blue-600 font-medium">Services</Link>
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
              Professional Real Estate Services
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Expert guidance from Dr. Jan Duffy for all your real estate needs. Specializing in new home construction, buyer representation, and Century Communities buyer advocacy.
            </p>
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

        {/* Services Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Comprehensive Real Estate Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Dr. Jan Duffy provides expert real estate services with a focus on new home construction and buyer representation. Your trusted advisor throughout the entire process.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-8 shadow-lg">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <h4 className="font-semibold text-gray-900 mb-3">Services Include:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
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
                Why Choose Dr. Jan Duffy?
              </h2>
              <p className="text-lg mb-8">
                Get expert, unbiased guidance—I'm your trusted advisor, not the builder's sales agent
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-2">Century Communities Buyer Advocacy</h3>
                <p className="text-gray-300">I collaborate with Century Communities while exclusively representing YOUR interests as an independent agent.</p>
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
            </div>
          </div>
        </section>

        {/* VIP Partnership Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-12 text-center">
              <img 
                src="/real-estate-services.jpg" 
                alt="Professional real estate services by Dr. Jan Duffy at Sierra at Skyeview" 
                className="w-full max-w-4xl mx-auto h-64 object-cover rounded-lg shadow-lg mb-8"
              />
            </div>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                ⭐ CENTURY COMMUNITIES INSIDER ACCESS ⭐
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Dr. Jan Duffy offers insider insight into Century Communities—with independent representation, priority lot strategies, and expert negotiation backed by trusted relationships.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-lg text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Early Phase Access</h3>
                <p className="text-gray-600">First access to new phases before public release</p>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-lg text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Priority Treatment</h3>
                <p className="text-gray-600">VIP status throughout the entire process</p>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-lg text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Negotiation</h3>
                <p className="text-gray-600">Premier relationship-backed negotiation power</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Your Home Buying Journey
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From initial consultation to closing day, Dr. Jan Duffy guides you through every step of the process.
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Initial Consultation</h3>
                <p className="text-gray-600 text-sm">Discuss your needs, budget, and preferences</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Community Tour</h3>
                <p className="text-gray-600 text-sm">Explore Sierra Skyview and available lots</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Contract & Design</h3>
                <p className="text-gray-600 text-sm">Secure your lot and design your home</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Construction</h3>
                <p className="text-gray-600 text-sm">Monitor progress and quality control</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">5</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Closing</h3>
                <p className="text-gray-600 text-sm">Final walkthrough and move-in day</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-red-600 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Home Buying Journey?
            </h2>
            <p className="text-lg mb-8">
              Get expert guidance from Dr. Jan Duffy and discover why so many homebuyers choose her for their new construction needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:7025001955" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                📞 CALL NOW: (702) 500-1955
              </a>
              <a href="mailto:DrJanSells@SierraSkyeview.com" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                📧 EMAIL DR. JAN
              </a>
              <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                📋 CONTACT FORM
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
                <Link href="/community" className="block text-gray-300 hover:text-white">Community</Link>
                <Link href="/services" className="block text-blue-400">Services</Link>
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

export default Services;
