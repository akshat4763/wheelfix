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
      answer: "Wheelfix offers roadside assistance including tyre repair, jump starts, towing, and general maintenance."
    },
    {
      question: "How quickly can a mechanic arrive?",
      answer: "Our mechanics typically arrive within 15-30 minutes of booking in most areas."
    },
    {
      question: "Are your services available 24/7?",
      answer: "Yes, Wheelfix provides round-the-clock roadside assistance every day."
    }
  ];

  const services = [
    { icon: <Bike className="w-12 h-12 text-gray-400" />, title: "Two-wheelers" },
    { icon: <Car className="w-12 h-12 text-gray-400" />, title: "Four-wheelers" },
    { icon: <Zap className="w-12 h-12 text-gray-400" />, title: "Electric vehicles" },
    { icon: <Diamond className="w-12 h-12 text-gray-400" />, title: "Luxury cars" },
    { icon: <Wrench className="w-12 h-12 text-gray-400" />, title: "General maintenance" },
    { icon: <Disc className="w-12 h-12 text-gray-400" />, title: "Brake system" },
    { icon: <LucideCog className="w-12 h-12 text-gray-400" />, title: "Clutch & transmission" },
    { icon: <LucideGauge className="w-12 h-12 text-gray-400" />, title: "Engine & performance" },
    { icon: <Droplets className="w-12 h-12 text-gray-400" />, title: "Oil Change" },
    { icon: <Wrench className="w-12 h-12 text-gray-400" />, title: "Minor Repairs" },
    { icon: <FuelIcon className="w-12 h-12 text-gray-400" />, title: "Fuel Delivery" },
    { icon: <Clock className="w-12 h-12 text-gray-400" />, title: "24/7 Support" }
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
      icon: <svg className="w-32 h-32 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /></svg>,
      title: "Tyre Puncture Repair.",
      description: "On-spot tyre puncture repair and replacement. Starts at ₹199."
    },
    {
      icon: <Battery className="w-32 h-32 text-gray-400" />,
      title: "Battery Jump Start.",
      description: "Quick jump start for dead batteries. Starts at ₹299."
    },
    {
      icon: <Truck className="w-32 h-32 text-gray-400" />,
      title: "Towing Service.",
      description: "Get professional towing to nearby garages. Starts at ₹599."
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
      <div className="min-h-screen bg-white flex flex-col items-center justify-center gap-8">
        <Image src="/logo.svg" alt="Wheelfix" width={160} height={160} className="w-40 h-40" />
        
        <div className="w-64">
          <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-black transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <NavBar />

      {/* Hero Section */}
      <section className="px-6 py-20 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-black mb-4">
          What We Fix.
        </h1>
        <p className="text-4xl md:text-5xl font-bold text-gray-400 mb-12">Expert roadside service, anytime.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-3 bg-black text-white rounded-full text-lg font-medium hover:bg-gray-800 transition">
            Book Now
          </button>
          <button className="px-8 py-3 bg-gray-200 text-black rounded-full text-lg font-medium hover:bg-gray-300 transition">
            See Pricing
          </button>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {pricingCards.map((card, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-8">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
                <p className="text-gray-500 text-lg leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {services.map((service, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-medium">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-3">What customers say</h2>
          <p className="text-4xl md:text-5xl font-bold text-center text-gray-400 mb-12">Trusted by thousands on the road.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl">
                <p className="text-gray-600 mb-16 leading-relaxed">{testimonial.text}</p>
                <div>
                  <p className="font-semibold text-lg">{testimonial.name}</p>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index}>
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full bg-white p-6 rounded-2xl text-left flex items-center justify-between hover:bg-gray-100 transition"
                >
                  <span className="text-lg font-medium flex items-center gap-4">
                    <ChevronDown className={`w-6 h-6 text-gray-400 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                    {faq.question}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="bg-white px-6 pb-6 border-t border-gray-200 rounded-b-2xl">
                    <p className="text-gray-600 pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 text-center bg-black text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-3">Ready to Book?</h2>
        <p className="text-xl text-gray-300 mb-8">Fast fixes, expert care. Get help in minutes.</p>
        <button className="px-12 py-4 bg-white text-black rounded-full font-medium text-lg hover:bg-gray-200 transition">
          Book Now
        </button>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ServicePage;