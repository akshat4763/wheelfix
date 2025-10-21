'use client';

import Footer from "@/components/ui/footer";
import NavBar from "@/components/ui/navigation-menu";
import React, { useState } from "react";
import { Building2, Users, TrendingUp, Shield, Clock, CheckCircle, Mail, ArrowRight } from "lucide-react";


const BusinessPage = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Waitlist email:", email);
    setIsSubmitted(true);
    setTimeout(() => {
      setEmail("");
      setIsSubmitted(false);
    }, 3000);
  };

  const features = [
    {
      icon: Users,
      title: "Fleet Management",
      description: "Comprehensive solutions for managing your entire vehicle fleet with priority support"
    },
    {
      icon: Clock,
      title: "24/7 Priority Service",
      description: "Dedicated support team and faster response times for your business operations"
    },
    {
      icon: TrendingUp,
      title: "Cost Optimization",
      description: "Bulk pricing and customized plans to reduce your operational costs"
    },
    {
      icon: Shield,
      title: "Verified Mechanics",
      description: "Background-checked professionals ensuring quality service every time"
    }
  ];

  const benefits = [
    "Dedicated account manager",
    "Custom pricing plans",
    "Priority dispatch system",
    "Detailed analytics & reports",
    "Multi-location coverage",
    "Flexible payment terms",
    "Preventive maintenance programs",
    "Integration with existing systems"
  ];

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 pt-32 pb-24 px-4 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 rounded-full text-sm font-semibold text-yellow-800 mb-6">
              <Clock size={16} />
              Coming Soon
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 leading-tight">
              WheelFix for<br />
              <span className="text-gray-400">Business</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Partner with us to revolutionize your business operations. We&apos;re building
              comprehensive roadside assistance solutions tailored for enterprises.
            </p>

            {/* Waitlist Form */}
            <div className="max-w-md mx-auto mb-8">
              <form onSubmit={handleWaitlistSubmit} className="flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  required
                  className="flex-1 px-6 py-4 bg-white border-2 border-gray-200 rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-black transition-all"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-all whitespace-nowrap"
                >
                  Join Waitlist
                </button>
              </form>
              {isSubmitted && (
                <p className="mt-4 text-green-600 font-semibold">
                  ✓ Thanks! We&apos;ll notify you when we launch.
                </p>
              )}
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:business@wheelfix.in"
                className="px-8 py-4 bg-white text-black rounded-full font-semibold border-2 border-gray-200 hover:bg-gray-50 transition-all inline-flex items-center gap-2"
              >
                <Mail size={20} />
                business@wheelfix.in
              </a>
              <a
                href="/contact"
                className="px-8 py-4 bg-transparent text-black rounded-full font-semibold border-2 border-gray-200 hover:bg-gray-50 transition-all inline-flex items-center gap-2"
              >
                Learn More
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Why Choose WheelFix for Business?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Enterprise-grade roadside solutions designed to keep your fleet moving
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group p-8 bg-gray-50 rounded-3xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Everything Your Business Needs
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                From startups to large enterprises, we provide scalable solutions 
                that grow with your business. Get access to premium features and 
                dedicated support.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow"
                  >
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle size={16} className="text-green-600" />
                    </div>
                    <span className="text-lg text-gray-700 font-medium">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-black to-gray-800 p-12 rounded-3xl text-white shadow-2xl">
                <Building2 size={64} className="mb-6 opacity-80" />
                <h3 className="text-3xl font-bold mb-4">
                  Trusted by Leading Businesses
                </h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Join hundreds of companies that rely on WheelFix for their 
                  roadside assistance needs. From logistics companies to corporate 
                  fleets, we&apos;ve got you covered.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-4xl font-bold mb-2">500+</div>
                    <div className="text-sm text-gray-400">Businesses</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">10K+</div>
                    <div className="text-sm text-gray-400">Vehicles</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">24/7</div>
                    <div className="text-sm text-gray-400">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Fleet Management?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the waitlist and be the first to experience WheelFix for Business. 
            Get early access and exclusive launch offers.
          </p>
          <div className="max-w-md mx-auto">
            <form onSubmit={handleWaitlistSubmit} className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email"
                required
                className="flex-1 px-6 py-4 bg-gray-800 text-white border-2 border-gray-700 rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-white transition-all"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all whitespace-nowrap"
              >
                Join Waitlist
              </button>
            </form>
            {isSubmitted && (
              <p className="mt-4 text-green-400 font-semibold">
                ✓ Thanks! We&apos;ll notify you when we launch.
              </p>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BusinessPage;