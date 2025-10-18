'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Battery, Wrench, Car, DollarSign, User, Clock, X } from 'lucide-react';
import NavBar from '@/components/ui/navigation-menu';
import Footer from '@/components/ui/footer';
import { ClipboardList, UserCog, CreditCard } from "lucide-react";

export default function ServicePage() {
  const [isClient, setIsClient] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = () => {
    if (email && phone) {
      setSubmitted(true);
      setTimeout(() => {
        setIsOpen(false);
        setEmail('');
        setPhone('');
        setSubmitted(false);
      }, 2000);
    }
  };

  if (!isClient) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center gap-12 px-4">
        <Image src="/logo.svg" alt="Wheelfix" width={192} height={192} className="w-32 sm:w-48 h-32 sm:h-48 object-contain" />
        
        <div className="w-64 sm:w-80">
          <div className="h-2 bg-gray-300 rounded-full overflow-hidden shadow-md">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-center text-sm font-semibold text-gray-700 mt-4">{Math.round(progress)}%</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white" suppressHydrationWarning={true}>
      <NavBar />
      
      {/* Hero Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-20 max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-black mb-4">
          We Fix Anywhere.
        </h1>
        <p className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-400 mb-8 sm:mb-12">
          Instant roadside repair, 24/7.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <button 
            className="px-6 sm:px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 active:scale-95 transition"
            onClick={() => {
              const form = document.getElementById('excitement-section');
              if (form) form.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Book Now
          </button>
          <button 
            className="px-6 sm:px-8 py-3 bg-gray-200 text-black rounded-full font-medium hover:bg-gray-300 active:scale-95 transition"
            onClick={() => {
              const form = document.getElementById('download-section');
              if (form) form.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Download App
          </button>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 sm:py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center">
            <div className="w-24 sm:w-32 h-24 sm:h-32 bg-gray-100 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
              <ClipboardList className="w-12 sm:w-16 h-12 sm:h-16 text-gray-400" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Select your issue.</h3>
            <p className="text-sm sm:text-base text-gray-500">Open the Wheelfix app and easily pick your vehicle problem or breakdown type.</p>
          </div>
          
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center">
            <div className="w-24 sm:w-32 h-24 sm:h-32 bg-gray-100 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
              <UserCog className="w-12 sm:w-16 h-12 sm:h-16 text-gray-400" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Get a nearby mechanic.</h3>
            <p className="text-sm sm:text-base text-gray-500">Our verified mechanic partner is dispatched to your location instantly.</p>
          </div>
          
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center">
            <div className="w-24 sm:w-32 h-24 sm:h-32 bg-gray-100 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
              <CreditCard className="w-12 sm:w-16 h-12 sm:h-16 text-gray-400" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Pay and relax.</h3>
            <p className="text-sm sm:text-base text-gray-500">Pay securely with transparent pricing and relax&mdash;help is on the way.</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-12 text-center">
          <div>
            <div className="flex justify-center mb-3 sm:mb-4">
              <svg className="w-10 sm:w-12 h-10 sm:h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-lg sm:text-xl font-bold">24/7 Service</h4>
          </div>
          
          <div>
            <div className="flex justify-center mb-3 sm:mb-4">
              <User className="w-10 sm:w-12 h-10 sm:h-12 text-gray-400" />
            </div>
            <h4 className="text-lg sm:text-xl font-bold">Verified Pros</h4>
          </div>
          
          <div>
            <div className="flex justify-center mb-3 sm:mb-4">
              <Clock className="w-10 sm:w-12 h-10 sm:h-12 text-gray-400" />
            </div>
            <h4 className="text-lg sm:text-xl font-bold">Instant Help</h4>
          </div>
          
          <div>
            <div className="flex justify-center mb-3 sm:mb-4">
              <DollarSign className="w-10 sm:w-12 h-10 sm:h-12 text-gray-400" />
            </div>
            <h4 className="text-lg sm:text-xl font-bold">Transparent Rates</h4>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8">
            <div className="w-20 sm:w-24 h-20 sm:h-24 bg-gray-100 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
              <svg className="w-10 sm:w-12 h-10 sm:h-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor">
                <rect x="3" y="3" width="18" height="18" rx="2" />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Minor repairs.</h3>
            <p className="text-sm sm:text-base text-gray-500">Quick fixes for common car and bike issues, anytime&mdash;anywhere.</p>
          </div>
          
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8">
            <div className="w-20 sm:w-24 h-20 sm:h-24 bg-gray-100 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
              <svg className="w-10 sm:w-12 h-10 sm:h-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="9" />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Vehicle towing.</h3>
            <p className="text-sm sm:text-base text-gray-500">Get safe, reliable towing assistance for accidents or breakdowns.</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
          <div>
            <Car className="w-10 sm:w-12 h-10 sm:h-12 text-gray-400 mx-auto mb-2 sm:mb-3" />
            <h4 className="text-sm sm:text-base font-bold">Jump Start</h4>
          </div>
          
          <div>
            <svg className="w-10 sm:w-12 h-10 sm:h-12 text-gray-400 mx-auto mb-2 sm:mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <circle cx="12" cy="12" r="10" strokeWidth={2} />
            </svg>
            <h4 className="text-sm sm:text-base font-bold">Tyre Fix</h4>
          </div>
          
          <div>
            <Battery className="w-10 sm:w-12 h-10 sm:h-12 text-gray-400 mx-auto mb-2 sm:mb-3" />
            <h4 className="text-sm sm:text-base font-bold">Battery Issue</h4>
          </div>
          
          <div>
            <Wrench className="w-10 sm:w-12 h-10 sm:h-12 text-gray-400 mx-auto mb-2 sm:mb-3" />
            <h4 className="text-sm sm:text-base font-bold">Oil Change</h4>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-12 sm:py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl sm:text-3xl font-bold mb-3 sm:mb-4">
            {`"My car stopped at midnight. Wheelfix arrived in 20 minutes. Truly a lifesaver!"`}
          </p>
          <p className="text-sm sm:text-base text-gray-500">Riya S.</p>
        </div>
      </section>

      {/* App Download CTA */}
      <section id="download-section" className="py-12 sm:py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3">It&apos;s easier in the app.</h2>
            <p className="text-lg sm:text-4xl md:text-5xl font-bold text-gray-400">Download now and get instant roadside help.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {/* Customer App */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center">
              <h3 className="text-lg sm:text-2xl font-bold mb-2">Download the Wheelfix app</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">Get instant roadside assistance</p>
              
              <div className="mb-6 sm:mb-8">
                <div className="relative inline-block">
                  <div className="w-40 sm:w-48 h-40 sm:h-48 bg-gray-300 rounded-lg blur-sm flex items-center justify-center">
                    <span className="text-gray-600 font-semibold text-sm">QR Code</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-white px-3 sm:px-4 py-2 rounded-lg font-bold text-base">Coming Soon</span>
                  </div>
                </div>
              </div>
              
              <p className="text-xs sm:text-sm text-gray-500">Scan to download</p>
            </div>

            {/* Partner App */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center">
              <h3 className="text-lg sm:text-2xl font-bold mb-2">Download the Wheelfix Partner app</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">Join our mechanic network</p>
              
              <div className="mb-6 sm:mb-8">
                <div className="relative inline-block">
                  <div className="w-40 sm:w-48 h-40 sm:h-48 bg-gray-300 rounded-lg blur-sm flex items-center justify-center">
                    <span className="text-gray-600 font-semibold text-sm">QR Code</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-white px-3 sm:px-4 py-2 rounded-lg font-bold text-base">Coming Soon</span>
                  </div>
                </div>
              </div>
              
              <p className="text-xs sm:text-sm text-gray-500">Scan to download</p>
            </div>
          </div>
        </div>
      </section>

      {/* Excitement Section */}
      <section id="excitement-section" className="py-12 sm:py-20 px-4 bg-black text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Excited?</h2>
          <p className="text-base sm:text-xl text-gray-400 mb-6 sm:mb-8">Let us know you&apos;re interested and we&apos;ll notify you when we launch.</p>

          <button
            onClick={() => setIsOpen(true)}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-black rounded-full font-semibold text-base sm:text-lg hover:bg-gray-100 active:scale-95 transition"
          >
            I&apos;m Excited, Notify Me
          </button>
        </div>
      </section>

      {/* Modal Dialog */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 max-w-md w-full relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 sm:top-6 right-4 sm:right-6 text-gray-400 hover:text-gray-600"
            >
              <X size={24} />
            </button>

            {submitted ? (
              <div className="text-center py-8">
                <div className="text-4xl mb-4">✓</div>
                <h3 className="text-xl sm:text-2xl font-bold text-green-600 mb-2">Thank You!</h3>
                <p className="text-sm sm:text-base text-gray-600">We&apos;ll notify you when Wheelfix launches.</p>
              </div>
            ) : (
              <>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-center">Get Notified</h3>
                <p className="text-sm sm:text-base text-gray-600 text-center mb-6">Enter your details to be notified when we launch.</p>
                
                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 sm:px-6 py-3 rounded-full bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-base"
                  />
                  
                  <input
                    type="tel"
                    placeholder="Your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 sm:px-6 py-3 rounded-full bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-base"
                  />
                  
                  <button
                    onClick={handleSubmit}
                    className="w-full px-6 sm:px-8 py-3 bg-black text-white rounded-full font-semibold text-base hover:bg-gray-800 active:scale-95 transition"
                  >
                    Notify Me
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}