import React from "react";
import Image from 'next/image';
import { Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
    return (
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
                    <a href="/cancellation" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                      Refund & Cancellation Policy
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

              {/* Legal Section */}
              <div>
                <h3 className="text-gray-900 font-semibold mb-4">Legal</h3>
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
                </ul>
              </div>
            </div>

            {/* Download App Badges & Social - Right Side */}
            <div className="flex flex-col gap-4 items-start md:items-end">
              {/* App Store Badges */}
              <div className="flex flex-col gap-2">
                <a 
                  href="https://play.google.com/store" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105"
                >
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Get it on Google Play"
                    width={135}
                    height={40}
                    className="w-auto h-10"
                  />
                </a>
                <a 
                  href="https://apps.apple.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105"
                >
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                    alt="Download on the App Store"
                    width={135}
                    height={40}
                    className="w-auto h-10"
                  />
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
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
              </div>
            </div>
          </div>
        </div>
      </footer>
    )  
}

export default Footer;