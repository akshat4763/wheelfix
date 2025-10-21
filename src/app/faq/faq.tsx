'use client';

import Footer from "@/components/ui/footer";
import NavBar from "@/components/ui/navigation-menu";
import React, { useState } from "react";
import { ChevronDown, Search, HelpCircle, Wrench, CreditCard, Clock, Shield, MapPin } from "lucide-react";


interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const faqs: FAQItem[] = [
    {
      category: "services",
      question: "What services does WheelFix provide?",
      answer: "WheelFix offers comprehensive roadside assistance including jump starts, tyre repair and replacement, battery replacement, vehicle towing, oil changes, brake repairs, fuel delivery, locksmith services, and general mechanical repairs. Our verified mechanics are available 24/7 across India."
    },
    {
      category: "services",
      question: "How quickly can a mechanic reach me?",
      answer: "Our average response time is 15-30 minutes in urban areas and 30-60 minutes in suburban locations. During emergencies, we prioritize urgent requests and dispatch the nearest available mechanic to your location immediately."
    },
    {
      category: "services",
      question: "Do you provide services for both cars and bikes?",
      answer: "Yes! WheelFix provides roadside assistance for all types of vehicles including cars, bikes, SUVs, and commercial vehicles. Our mechanics are trained to handle various vehicle makes and models."
    },
    {
      category: "pricing",
      question: "How much does WheelFix service cost?",
      answer: "Our pricing is transparent and varies based on the service required. You'll see the estimated cost before confirming the service. Basic services like jump starts start from ₹299, while more complex repairs are quoted after initial diagnosis. No hidden charges."
    },
    {
      category: "pricing",
      question: "What payment methods do you accept?",
      answer: "We accept all major payment methods including UPI, credit/debit cards, digital wallets (Paytm, PhonePe, Google Pay), and cash on service completion. All payments are processed securely through our app."
    },
    {
      category: "pricing",
      question: "Can I get a refund if I cancel my service?",
      answer: "Yes. Full refunds are provided if you cancel before the mechanic is dispatched or if the mechanic cannot fulfill the service. Partial refunds apply if you cancel after dispatch but before service begins. Refunds are processed within 5-7 business days."
    },
    {
      category: "coverage",
      question: "Which cities does WheelFix operate in?",
      answer: "WheelFix currently operates across major cities in India including Mumbai, Delhi, Bangalore, Hyderabad, Chennai, Pune, Kolkata, and expanding to more locations. Check our app for service availability in your area."
    },
    {
      category: "coverage",
      question: "Is WheelFix available 24/7?",
      answer: "Absolutely! WheelFix provides round-the-clock roadside assistance 365 days a year. Whether it's 3 AM or a public holiday, our mechanics are ready to help you anytime, anywhere."
    },
    {
      category: "coverage",
      question: "Do you provide services on highways?",
      answer: "Yes, we provide emergency roadside assistance on highways and expressways. Our mechanics are equipped to handle breakdowns in remote locations, though response times may vary based on distance."
    },
    {
      category: "safety",
      question: "Are your mechanics verified and trained?",
      answer: "All WheelFix mechanics undergo thorough background checks, verification, and training programs. They carry valid identification, proper tools, and maintain updated credentials as required by law. Your safety is our priority."
    },
    {
      category: "safety",
      question: "What if I'm not satisfied with the service?",
      answer: "Customer satisfaction is paramount. If you're not satisfied, contact our support team immediately. We'll investigate the issue, provide appropriate resolution, and may offer service credits or refunds based on the situation."
    },
    {
      category: "safety",
      question: "Is my vehicle safe during the service?",
      answer: "Yes. Our mechanics are trained professionals who handle vehicles with care. However, users are responsible for the safe custody of their vehicle. We recommend staying present during service and securing valuables."
    },
    {
      category: "booking",
      question: "How do I book a service on WheelFix?",
      answer: "Simply download the WheelFix app, create an account, select your service type, provide your location, and confirm booking. You can also contact us via WhatsApp at +91 86040 67805 for immediate assistance."
    },
    {
      category: "booking",
      question: "Can I schedule a service for later?",
      answer: "Yes, you can schedule services in advance through our app. This is ideal for non-emergency repairs, routine maintenance, or when you know you'll need assistance at a specific time."
    },
    {
      category: "booking",
      question: "What information do I need to provide when booking?",
      answer: "You'll need to provide your location, vehicle details (make, model, year), description of the problem, and contact information. The more details you provide, the better we can prepare and serve you."
    }
  ];

  const categories = [
    { id: "all", name: "All Questions", icon: HelpCircle },
    { id: "services", name: "Services", icon: Wrench },
    { id: "pricing", name: "Pricing", icon: CreditCard },
    { id: "coverage", name: "Coverage", icon: MapPin },
    { id: "safety", name: "Safety", icon: Shield },
    { id: "booking", name: "Booking", icon: Clock },
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-black rounded-full mb-6">
            <HelpCircle size={40} className="text-white" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Find quick answers to common questions about WheelFix roadside assistance services
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-16 pr-6 py-5 bg-white border-2 border-gray-200 rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-black transition-all shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 px-4 bg-white border-y border-gray-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-hide">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold whitespace-nowrap transition-all ${
                    activeCategory === category.id
                      ? 'bg-black text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon size={20} />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-2xl text-gray-400 mb-4">No questions found</p>
              <p className="text-gray-600">Try adjusting your search or category filter</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-lg md:text-xl font-bold text-black pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={24}
                      className={`flex-shrink-0 text-gray-600 transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="px-8 pb-6 pt-2">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Our support team is available 24/7 to help you with any queries
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <a
              href="https://wa.me/918604067805"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-white/10 backdrop-blur rounded-2xl hover:bg-white/20 transition-all"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Search size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">WhatsApp Chat</h3>
              <p className="text-gray-300 text-sm">Instant messaging support</p>
            </a>

            <a
              href="mailto:support@wheelfix.in"
              className="group p-8 bg-white/10 backdrop-blur rounded-2xl hover:bg-white/20 transition-all"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Search size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Support</h3>
              <p className="text-gray-300 text-sm">support@wheelfix.in</p>
            </a>

            <a
              href="/contact"
              className="group p-8 bg-white/10 backdrop-blur rounded-2xl hover:bg-white/20 transition-all"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <HelpCircle size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Contact Form</h3>
              <p className="text-gray-300 text-sm">Detailed inquiries</p>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/918604067805"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-all"
            >
              Chat with Support
            </a>
            <a
              href="/contact"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-black transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Structured Data */}
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

      <Footer />
    </div>
  );
};

export default FAQPage;