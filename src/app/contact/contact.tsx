'use client';

import React, { useState } from 'react';
import { MessageSquare, Mail, MapPin, Clock, Phone, Send } from 'lucide-react';
import NavBar from '@/components/ui/navigation-menu';
import Footer from '@/components/ui/footer';


const ContactPage = () => {
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
      // Add your API endpoint here
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      
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
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-4">
            Contact WheelFix
          </h1>
          <p className="text-3xl md:text-4xl font-bold text-gray-400 mb-12">
            We&apos;re here to help you 24/7
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://wa.me/918604067805"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-black text-white text-lg font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 inline-flex items-center gap-2 shadow-lg"
            >
              <MessageSquare size={24} />
              WhatsApp Us
            </a>
            <a 
              href="mailto:support@wheelfix.in"
              className="group px-8 py-4 bg-white text-black text-lg font-semibold rounded-full border-2 border-gray-200 hover:bg-gray-50 transition-all duration-300 inline-flex items-center gap-2 shadow-lg"
            >
              <Mail size={24} />
              Email Support
            </a>
          </div>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group flex flex-col items-center p-8 bg-gray-50 rounded-3xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-20 h-20 mb-6 text-black group-hover:scale-110 transition-transform">
                <MessageSquare size={80} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Chat on WhatsApp</h3>
              <p className="text-gray-600 text-center text-sm mb-4">
                Quick responses for urgent queries
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

            <div className="group flex flex-col items-center p-8 bg-gray-50 rounded-3xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-20 h-20 mb-6 text-black group-hover:scale-110 transition-transform">
                <Mail size={80} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Email Support</h3>
              <p className="text-gray-600 text-center text-sm mb-4">
                support@wheelfix.in
              </p>
              <a 
                href="mailto:support@wheelfix.in"
                className="text-black font-semibold hover:underline"
              >
                Send Email →
              </a>
            </div>

            <div className="group flex flex-col items-center p-8 bg-gray-50 rounded-3xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-20 h-20 mb-6 text-black group-hover:scale-110 transition-transform">
                <MapPin size={80} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Business Address</h3>
              <p className="text-gray-600 text-center text-sm">
                Thane, Maharashtra
              </p>
            </div>

            <div className="group flex flex-col items-center p-8 bg-gray-50 rounded-3xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-20 h-20 mb-6 text-black group-hover:scale-110 transition-transform">
                <Clock size={80} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">24/7 Support</h3>
              <p className="text-gray-600 text-center text-sm">
                Always available for emergencies
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Address Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">
                Our Office Location
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin size={24} className="text-black flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-black mb-1">Registered Address</h3>
                    <p className="text-gray-600 leading-relaxed">
                      502, Summit, IT Park, Wagle Estate,<br />
                      Thane (W), Maharashtra - 400604
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone size={24} className="text-black flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-black mb-1">Phone Support</h3>
                    <p className="text-gray-600">+91 86040 67805</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail size={24} className="text-black flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-black mb-1">Email</h3>
                    <p className="text-gray-600">support@wheelfix.in</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold text-black mb-4">
                Business Hours
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">Emergency Support</span>
                  <span className="font-semibold text-black">24/7 Available</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">Office Hours</span>
                  <span className="font-semibold text-black">Mon-Sat, 9 AM - 6 PM</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Response Time</span>
                  <span className="font-semibold text-black">Within 24 hours</span>
                </div>
              </div>
              
              <p className="text-sm text-gray-500 mt-6">
                For any inquiries, partnership opportunities or support, our team is just 
                a message away via WhatsApp or email. We strive to respond to all queries 
                as quickly as possible.
              </p>
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
              We respond fast. Fill out the form below
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
                  placeholder="Jane Smith"
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
                  placeholder="jane@example.com"
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
                placeholder="Your message..."
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
                  Submit Message
                </>
              )}
            </button>
          </form>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact WheelFix",
            "description": "Contact WheelFix for roadside assistance and support",
            "url": "https://www.wheelfix.in/contact",
            "mainEntity": {
              "@type": "Organization",
              "name": "WheelFix",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "502, Summit, IT Park, Wagle Estate",
                "addressLocality": "Thane",
                "addressRegion": "Maharashtra",
                "postalCode": "400604",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-8604067805",
                "contactType": "Customer Support",
                "email": "support@wheelfix.in",
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

export default ContactPage;