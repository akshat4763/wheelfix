'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Instagram, Linkedin, Facebook, ChevronDown } from 'lucide-react';

export default function Home() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white relative">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Image 
                src="/logo.svg" 
                alt="WheelFix" 
                width={200}
                height={50}
                className="object-contain"
              />
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/mechanic" className="text-gray-900 hover:text-gray-600 text-sm font-medium transition-colors">
                Join as Mechanic
              </a>
              
              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="text-gray-900 hover:text-gray-600 text-sm font-medium transition-colors flex items-center gap-1">
                  Services
                  <ChevronDown size={16} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50">
                    <a href="/bikes" className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 transition-colors">
                      Bikes
                    </a>
                    <a href="/scooty" className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 transition-colors">
                      Scootys
                    </a>
                    <a href="/cars" className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 transition-colors">
                      Cars
                    </a>
                    <a href="/luxury" className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 transition-colors">
                      Luxury
                    </a>
                  </div>
                )}
              </div>
              
              <a href="/business" className="text-gray-900 hover:text-gray-600 text-sm font-medium transition-colors">
                Business
              </a>
              
              {/* About Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setAboutOpen(true)}
                onMouseLeave={() => setAboutOpen(false)}
              >
                <button className="text-gray-900 hover:text-gray-600 text-sm font-medium transition-colors flex items-center gap-1">
                  About
                  <ChevronDown size={16} className={`transition-transform ${aboutOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {aboutOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50">
                    <a href="/blogs" className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 transition-colors">
                      Blogs
                    </a>
                    <a href="#how-we-work" className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 transition-colors">
                      How We Work
                    </a>
                    <a href="#investor" className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 transition-colors">
                      Become an Investor
                    </a>
                    <a href="/terms" className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 transition-colors">
                      Terms of Service
                    </a>
                    <a href="/careers" className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 transition-colors">
                      Careers
                    </a>
                  </div>
                )}
              </div>
            </div>
            
            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              <button className="text-gray-900 hover:text-gray-600 text-sm font-medium transition-colors">
                EN
              </button>
              <a href="/support" className="text-gray-900 hover:text-gray-600 text-sm font-medium transition-colors">
                Help
              </a>
              <button className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center relative">
        <div className="flex flex-col items-center justify-center px-8">
          <Image
            className="max-h-screen max-w-full w-auto h-auto"
            style={{ maxHeight: '60vh', maxWidth: '500px' }}
            src="/logo.svg"
            alt="WheelFix Logo"
            width={500}
            height={500}
            priority
          />
          <blockquote className="mt-8 border-l-2 border-gray-300 pl-6 italic text-gray-700 text-lg max-w-xl text-center">
            &quot;We&apos;ll fix your ride, WheelFix — hitting the road soon.&quot;
          </blockquote>
        </div>

        </div>
      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            {/* Logo Section */}
            <div className="flex items-start">
              <Image 
                src="/logo.svg" 
                alt="WheelFix" 
                width={160}
                height={160}
                className="object-contain"
              />
            </div>

            {/* All Text Sections */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {/* Company Section */}
              <div>
                <h3 className="text-gray-900 font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/about" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/mechanic" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                    Join as Mechanic
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources Section */}
            <div>
              <h3 className="text-gray-900 font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#services" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/support" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                    Support
                  </a>
                </li>
                <li>
                  <a href="/faq" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal & Social Section */}
            <div>
              <h3 className="text-gray-900 font-semibold mb-4">Legal & Social</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/terms" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                    Privacy
                  </a>
                </li>
                <li className="flex gap-3 mt-3">
                  <a 
                    href="https://www.instagram.com/_wheelfix/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/wheelfix-india/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="https://x.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                    aria-label="X (Twitter)"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          </div>
        </div>
      </footer>
    </div>
  );
}