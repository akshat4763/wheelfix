'use client';

import React, { useState } from 'react';
import { MessageSquare, Mail, MapPin, Clock,  } from 'lucide-react';
import NavBar from '@/components/ui/navigation-menu';
import Footer from '@/components/ui/footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
        <NavBar />
      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        {/* Logo */}
        <div className="flex justify-center items-center gap-2 mb-12">
         
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-black mb-2">
          Contact Wheelfix.
        </h1>
        <p className="text-4xl md:text-5xl font-bold text-gray-400">
          We&apos;re here to help you 24/7.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-12">
         <a 
  href="https://wa.me/918604067805"
  target="_blank"
  rel="noopener noreferrer"
  className="px-8 py-4 bg-black text-white text-lg font-semibold rounded-full hover:bg-gray-800 transition inline-block"
>
  WhatsApp Us
</a>
          <a href="mailto:support@wheelfix.in">
            <button className="px-8 py-4 bg-white text-black text-lg font-semibold rounded-full border-2 border-gray-200 hover:bg-gray-50 transition">
              Email Support
            </button>
          </a>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 mb-4 text-gray-400">
              <MessageSquare size={64} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-black">Chat on WhatsApp</h3>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 mb-4 text-gray-400">
              <Mail size={64} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-black">Email: support@wheelfix.in</h3>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 mb-4 text-gray-400">
              <MapPin size={64} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-black">Business Address</h3>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 mb-4 text-gray-400">
              <Clock size={64} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-black">24/7 Support</h3>
          </div>
        </div>
      </section>

      {/* Address Section */}
      <section className="py-16 px-4 md:px-20">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold text-black mb-6">Our Address and Support</h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Business Address: 502, Summit, IT Park, Wagle Estate, Thane (W),
            Maharashtra, 400604. For any inquiries, partnership opportunities
            or support, our team is just a message away via WhatsApp or
            email. We strive to respond to all queries as quickly as possible.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-4xl font-bold text-black mb-2">Contact Us</h2>
          <p className="text-3xl font-bold text-gray-400 mb-12">We respond fast.</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-left">
              <label className="block text-gray-500 text-sm mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Jane Smith"
                className="w-full px-6 py-4 bg-gray-100 rounded-2xl text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>

            <div className="text-left">
              <label className="block text-gray-500 text-sm mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="jane@framer.com"
                className="w-full px-6 py-4 bg-gray-100 rounded-2xl text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>

            <div className="text-left">
              <label className="block text-gray-500 text-sm mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                rows={6}
                className="w-full px-6 py-4 bg-gray-100 rounded-2xl text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-black text-white text-lg font-semibold rounded-2xl hover:bg-gray-800 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactPage;