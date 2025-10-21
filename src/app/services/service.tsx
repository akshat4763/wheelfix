'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Bike, Car, Zap, Diamond, Wrench, Disc, Cog as LucideCog, Gauge as LucideGauge, Droplets, FuelIcon, Clock, ChevronDown } from "lucide-react";
import { Battery, Truck } from "lucide-react";
import Footer from '@/components/ui/footer';
import NavBar from '@/components/ui/navigation-menu';


const ServicePage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [progress, setProgress] = useState(0);

  const faqs = [
    {
      question: "What services does Wheelfix offer?",
      answer: "Wheelfix offers comprehensive roadside assistance including tyre repair and replacement, battery jump starts, vehicle towing, oil changes, minor repairs, fuel delivery, and 24/7 emergency support for both two-wheelers and four-wheelers including electric and luxury vehicles."
    },
    {
      question: "How quickly can a mechanic arrive?",
      answer: "Our verified mechanics typically arrive within 15-30 minutes of booking in most urban areas. Response time may vary based on your location and current traffic conditions, but we always dispatch the nearest available professional immediately."
    },
    {
      question: "Are your services available 24/7?",
      answer: "Yes, Wheelfix provides round-the-clock roadside assistance every day of the year. Whether it's early morning or late night, our network of verified mechanics is always ready to help you get back on the road safely."
    },
    {
      question: "What types of vehicles do you service?",
      answer: "We service all types of vehicles including two-wheelers (bikes, scooters), four-wheelers (cars, SUVs), electric vehicles, and luxury cars. Our mechanics are trained to handle various makes and models."
    },
    {
      question: "How much do your services cost?",
      answer: "Pricing varies by service type. Tyre puncture repair starts at ₹199, battery jump start at ₹299, and towing services start at ₹599. Final costs depend on your specific situation and location. All pricing is transparent with no hidden charges."
    }
  ];

  const services = [
    { icon: <Bike className="w-12 h-12 text-gray-400" />, title: "Two-wheelers", description: "Bikes & scooters" },
    { icon: <Car className="w-12 h-12 text-gray-400" />, title: "Four-wheelers", description: "Cars & SUVs" },
    { icon: <Zap className="w-12 h-12 text-gray-400" />, title: "Electric vehicles", description: "EV support" },
    { icon: <Diamond className="w-12 h-12 text-gray-400" />, title: "Luxury cars", description: "Premium service" },
    { icon: <Wrench className="w-12 h-12 text-gray-400" />, title: "General maintenance", description: "Regular checkups" },
    { icon: <Disc className="w-12 h-12 text-gray-400" />, title: "Brake system", description: "Brake repairs" },
    { icon: <LucideCog className="w-12 h-12 text-gray-400" />, title: "Clutch & transmission", description: "Transmission fixes" },
    { icon: <LucideGauge className="w-12 h-12 text-gray-400" />, title: "Engine & performance", description: "Engine diagnostics" },
    { icon: <Droplets className="w-12 h-12 text-gray-400" />, title: "Oil Change", description: "Fast oil service" },
    { icon: <Wrench className="w-12 h-12 text-gray-400" />, title: "Minor Repairs", description: "Quick fixes" },
    { icon: <FuelIcon className="w-12 h-12 text-gray-400" />, title: "Fuel Delivery", description: "Emergency fuel" },
    { icon: <Clock className="w-12 h-12 text-gray-400" />, title: "24/7 Support", description: "Always available" }
  ];

  const testimonials = [
    {
      text: "Quick, hassle-free tyre repair. Mechanic arrived in just 20 minutes!",
      name: "Rahul",
      role: "Bike owner"
    },
    {
      text: "Battery jump start was so easy—professional and fast roadside help.",
      name: "Sneha",
      role: "Car driver"
    },
    {
      text: "Needed towing late at night. Great communication and secure towing.",
      name: "Harsh",
      role: "SUV owner"
    },
    {
      text: "Excellent service. Got my car fixed within an hour on the highway!",
      name: "Priya",
      role: "Traveller"
    }
  ];

  const pricingCards = [
    {
      icon: <svg className="w-32 h-32 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="9" /></svg>,
      title: "Tyre Puncture Repair",
      description: "On-spot tyre puncture repair and replacement. Starts at ₹199.",
      price: "₹199+"
    },
    {
      icon: <Battery className="w-32 h-32 text-gray-400" aria-hidden="true" />,
      title: "Battery Jump Start",
      description: "Quick jump start for dead batteries. Starts at ₹299.",
      price: "₹299+"
    },
    {
      icon: <Truck className="w-32 h-32 text-gray-400" aria-hidden="true" />,
      title: "Towing Service",
      description: "Get professional towing to nearby garages. Starts at ₹599.",
      price: "₹599+"
    }
  ];

  useEffect(() => {
    setIsClient(true);
    
    const interval = setInterval(() => {
      setProgress(prev => (prev >= 90 ? prev : prev + Math.random() * 40));
    }, 300);

    const timer = setTimeout(() => {
      setProgress(100);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  if (!isClient) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center gap-8 px-4">
        <Image src="/logo.svg" alt="Wheelfix - 24/7 Roadside Assistance" width={160} height={160} className="w-32 sm:w-40 h-32 sm:h-40" priority />
        
        <div className="w-48 sm:w-64">
          <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-black transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-center text-sm text-gray-600 mt-2">{Math.round(progress)}%</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data - Service Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Roadside Assistance Services",
            "description": "24/7 mobile mechanic and roadside assistance services",
            "url": "https://www.wheelfix.in/services",
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@type": "Service",
                    "name": "Tyre Puncture Repair",
                    "description": "On-spot tyre puncture repair and replacement",
                    "offers": {
                      "@type": "Offer",
                      "priceSpecification": {
                        "@type": "PriceSpecification",
                        "price": "199",
                        "priceCurrency": "INR"
                      }
                    }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "item": {
                    "@type": "Service",
                    "name": "Battery Jump Start",
                    "description": "Emergency battery jump start service",
                    "offers": {
                      "@type": "Offer",
                      "priceSpecification": {
                        "@type": "PriceSpecification",
                        "price": "299",
                        "priceCurrency": "INR"
                      }
                    }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "item": {
                    "@type": "Service",
                    "name": "Vehicle Towing",
                    "description": "Professional vehicle towing service",
                    "offers": {
                      "@type": "Offer",
                      "priceSpecification": {
                        "@type": "PriceSpecification",
                        "price": "599",
                        "priceCurrency": "INR"
                      }
                    }
                  }
                }
              ]
            }
          })
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.wheelfix.in"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "https://www.wheelfix.in/services"
              }
            ]
          })
        }}
      />

      {/* Navigation */}
      <NavBar />

      <main>
        {/* Hero Section */}
        <header className="px-4 sm:px-6 py-12 sm:py-20 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4">
            What We Fix.
          </h1>
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-400 mb-8 sm:mb-12">
            Expert roadside service, anytime.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              className="px-6 sm:px-8 py-3 bg-black text-white rounded-full text-base sm:text-lg font-medium hover:bg-gray-800 active:scale-95 transition"
              aria-label="Book roadside assistance now"
            >
              Book Now
            </button>
            <button 
              className="px-6 sm:px-8 py-3 bg-gray-200 text-black rounded-full text-base sm:text-lg font-medium hover:bg-gray-300 active:scale-95 transition"
              onClick={() => {
                const pricing = document.getElementById('pricing-section');
                if (pricing) pricing.scrollIntoView({ behavior: 'smooth' });
              }}
              aria-label="View service pricing"
            >
              See Pricing
            </button>
          </div>
        </header>

        {/* Pricing Cards Section */}
        <section id="pricing-section" className="py-12 sm:py-20 px-4" aria-labelledby="pricing-heading">
          <h2 id="pricing-heading" className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Our Services & Pricing
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              {pricingCards.map((card, index) => (
                <article key={index} className="text-center bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:shadow-lg transition">
                  <div className="flex justify-center mb-6 sm:mb-8">
                    {card.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3">{card.title}</h3>
                  <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-4">{card.description}</p>
                  <p className="text-2xl font-bold text-black">{card.price}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 sm:py-20 px-4 bg-gray-50" aria-labelledby="services-heading">
          <h2 id="services-heading" className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Complete Vehicle Care
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
              {services.map((service, index) => (
                <article key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-medium mb-1">{service.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-500">{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 sm:py-20 px-4" aria-labelledby="testimonials-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="testimonials-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3">
              What customers say
            </h2>
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-400 mb-8 sm:mb-12">
              Trusted by thousands on the road.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {testimonials.map((testimonial, index) => (
                <article key={index} className="bg-gray-50 p-6 sm:p-8 rounded-2xl hover:shadow-md transition">
                  <p className="text-gray-600 mb-12 sm:mb-16 leading-relaxed">{testimonial.text}</p>
                  <div>
                    <p className="font-semibold text-base sm:text-lg">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 sm:py-20 px-4 bg-gray-50" aria-labelledby="faq-heading">
          <div className="max-w-2xl mx-auto">
            <h2 id="faq-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <article key={index} className="bg-white rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-4 sm:p-6 text-left flex items-center justify-between hover:bg-gray-50 transition"
                    aria-expanded={openFaq === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className="text-base sm:text-lg font-medium flex items-center gap-3 sm:gap-4 pr-4">
                      <ChevronDown 
                        className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-transform flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`} 
                        aria-hidden="true"
                      />
                      {faq.question}
                    </span>
                  </button>
                  {openFaq === index && (
                    <div id={`faq-answer-${index}`} className="px-4 sm:px-6 pb-4 sm:pb-6 border-t border-gray-200">
                      <p className="text-sm sm:text-base text-gray-600 pt-4 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-12 sm:py-20 px-4 text-center bg-black text-white">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">Ready to Book?</h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
            Fast fixes, expert care. Get help in minutes.
          </p>
          <button 
            className="px-8 sm:px-12 py-3 sm:py-4 bg-white text-black rounded-full font-medium text-base sm:text-lg hover:bg-gray-200 active:scale-95 transition"
            aria-label="Book roadside assistance service"
          >
            Book Now
          </button>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ServicePage;