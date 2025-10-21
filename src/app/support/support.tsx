'use client';

import React, { useState } from 'react';
import { MessageSquare, Mail, MapPin, Clock, Send } from 'lucide-react';
import NavBar from '@/components/ui/navigation-menu';
import Footer from '@/components/ui/footer';


const SupportPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Add your form submission logic here
      // Example: await fetch('/api/support', { method: 'POST', body: JSON.stringify(formData) });
      
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 leading-tight">
            Need Help?<br />
            <span className="text-gray-400">We&apos;re Here 24/7</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Get instant support for roadside assistance, service inquiries, or technical help. 
            Our team responds quickly to ensure you&apos;re never stranded.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://wa.me/918604067805"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-black text-white text-lg font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-xl"
              aria-label="Contact WheelFix support via WhatsApp"
            >
              <MessageSquare size={24} />
              WhatsApp Support
            </a>
            <a 
              href="mailto:support@wheelfix.in"
              className="group px-8 py-4 bg-white text-black text-lg font-semibold rounded-full border-2 border-gray-200 hover:bg-gray-50 transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-xl"
              aria-label="Email WheelFix support team"
            >
              <Mail size={24} />
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-xl text-gray-600">
              Choose your preferred contact method
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group flex flex-col items-center p-8 bg-gray-50 rounded-3xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 mb-6 text-black group-hover:scale-110 transition-transform duration-300">
                <MessageSquare size={80} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">WhatsApp Chat</h3>
              <p className="text-gray-600 text-center mb-4">
                Instant messaging support for quick queries
              </p>
              <a 
                href="https://wa.me/918604067805" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black font-semibold hover:underline"
              >
                Start Chat →
              </a>
            </div>

            <div className="group flex flex-col items-center p-8 bg-gray-50 rounded-3xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 mb-6 text-black group-hover:scale-110 transition-transform duration-300">
                <Mail size={80} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">Email Support</h3>
              <p className="text-gray-600 text-center mb-4">
                Detailed inquiries and documentation
              </p>
              <a 
                href="mailto:support@wheelfix.in"
                className="text-black font-semibold hover:underline"
              >
                support@wheelfix.in →
              </a>
            </div>

            <div className="group flex flex-col items-center p-8 bg-gray-50 rounded-3xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 mb-6 text-black group-hover:scale-110 transition-transform duration-300">
                <MapPin size={80} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">Visit Us</h3>
              <p className="text-gray-600 text-center mb-4">
                Office locations across India
              </p>
              <span className="text-black font-semibold">
                Pan-India Service
              </span>
            </div>

            <div className="group flex flex-col items-center p-8 bg-gray-50 rounded-3xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 mb-6 text-black group-hover:scale-110 transition-transform duration-300">
                <Clock size={80} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">24/7 Available</h3>
              <p className="text-gray-600 text-center mb-4">
                Round-the-clock emergency support
              </p>
              <span className="text-black font-semibold">
                Always Open
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-12 text-center">
            Quick Help Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-2xl hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-black mb-2">Emergency Assistance</h3>
              <p className="text-gray-600">Need immediate roadside help? Learn how to request emergency service.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-black mb-2">Service Coverage</h3>
              <p className="text-gray-600">Check if WheelFix operates in your area and view our service zones.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-black mb-2">Pricing & Payments</h3>
              <p className="text-gray-600">Understand our transparent pricing and available payment methods.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-black mb-2">Partner with Us</h3>
              <p className="text-gray-600">Interested in becoming a WheelFix mechanic or partner? Get started here.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Send Us a Message
            </h2>
            <p className="text-xl text-gray-600">
              Fill out the form and we&apos;ll respond within 24 hours
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-8 md:p-12 rounded-3xl shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full px-6 py-4 bg-white rounded-xl text-gray-900 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full px-6 py-4 bg-white rounded-xl text-gray-900 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black transition-all"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-gray-700 text-sm font-semibold mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full px-6 py-4 bg-white rounded-xl text-gray-900 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black transition-all"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-gray-700 text-sm font-semibold mb-2">
                Subject *
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-white rounded-xl text-gray-900 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black transition-all"
              >
                <option value="">Select a topic</option>
                <option value="emergency">Emergency Assistance</option>
                <option value="service">Service Inquiry</option>
                <option value="partnership">Partnership Opportunity</option>
                <option value="feedback">Feedback</option>
                <option value="technical">Technical Support</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us how we can help you..."
                rows={6}
                required
                className="w-full px-6 py-4 bg-white rounded-xl text-gray-900 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black transition-all resize-none"
              />
            </div>

            {submitStatus === 'success' && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-800 text-center">
                ✓ Message sent successfully! We&apos;ll get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-800 text-center">
                ✗ Something went wrong. Please try again or contact us directly.
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-5 bg-black text-white text-lg font-semibold rounded-xl hover:bg-gray-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              {isSubmitting ? (
                <>Processing...</>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </button>

            <p className="text-sm text-gray-500 text-center mt-4">
              By submitting this form, you agree to our privacy policy and terms of service.
            </p>
          </form>
        </div>
      </section>

      {/* Emergency Contact Banner */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Emergency Roadside Assistance?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Don&apos;t wait – get help immediately through our mobile app or WhatsApp
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://wa.me/918604067805"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-black text-lg font-semibold rounded-full hover:bg-gray-100 transition-all duration-300"
            >
              Emergency WhatsApp
            </a>
            <button className="px-8 py-4 bg-transparent text-white text-lg font-semibold rounded-full border-2 border-white hover:bg-white hover:text-black transition-all duration-300">
              Download App
            </button>
          </div>
        </div>
      </section>

      {/* Structured Data for ContactPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "WheelFix Support & Contact",
            "description": "Contact WheelFix for 24/7 roadside assistance support",
            "url": "https://www.wheelfix.in/support",
            "mainEntity": {
              "@type": "Organization",
              "name": "WheelFix",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-8604067805",
                "contactType": "Customer Support",
                "availableLanguage": ["English", "Hindi"],
                "areaServed": "IN",
                "hoursAvailable": "Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59"
              }
            }
          })
        }}
      />

      <Footer />
    </div>
  );
};

export default SupportPage;