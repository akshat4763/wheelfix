import React from 'react';
import { Battery, Wrench, Droplet, Car, Clock, ShieldCheck, MessageSquare, Star, Instagram, Linkedin, Facebook } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center relative">
      <div className="flex items-center justify-center">
        <img
          className="max-h-screen max-w-full w-auto h-auto px-8"
          style={{ maxHeight: '80vh' }}
          src="/logo.svg"
          alt="WheelFix Logo"
          
          
        />
       <blockquote className="mt-6 border-l-2 pl-6 italic">
  &quot;We&apos;ll fix, your ride, WheelFix — hitting the road soon.&quot;
</blockquote>


      </div>

      {/* Privacy Policy - Bottom Left */}
      <div className="absolute bottom-8 left-8">
        <a href="/privacypolicy" className="text-gray-600 hover:text-gray-900 text-sm">
          Privacy Policy
        </a>
      </div>

      {/* Social Links - Bottom Right */}
      <div className="absolute bottom-8 right-8 flex gap-4">
        <a href="https://www.instagram.com/_wheelfix/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600 transition-colors">
          <Instagram size={24} />
        </a>
        <a href="https://www.linkedin.com/company/wheelfix-india/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600 transition-colors">
          <Linkedin size={24} />
        </a>
        <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600 transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600 transition-colors">
          <Facebook size={24} />
        </a>
      </div>
    </div>
  );
}