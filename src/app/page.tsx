import React from 'react';
import { Battery, Wrench, Droplet, Car, Clock, ShieldCheck, MessageSquare, Star } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-bold">Wheelfix</h1>
            <nav className="hidden md:flex gap-6 text-sm text-gray-600">
              <a href="#" className="hover:text-gray-900">How it Works</a>
              <a href="#" className="hover:text-gray-900">Services</a>
              <a href="#" className="hover:text-gray-900">Join Us Mechanic</a>
            </nav>
          </div>
          <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800">
            Book Now
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
       
        <h2 className="text-5xl md:text-7xl font-bold mb-4">
          We Fix Anywhere.
        </h2>
        <p className="text-3xl md:text-5xl text-gray-400 mb-8">
          Instant roadside repair, 24/7.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800">
            Book Now
          </button>
          <button className="border border-gray-300 px-8 py-3 rounded-full font-medium hover:bg-gray-50">
            Download App
          </button>
        </div>
      </section>

      {/* How it Works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-3xl p-8 min-h-[280px] flex flex-col">
            <div className="bg-white rounded-2xl w-20 h-20 flex items-center justify-center mb-6">
              <Car className="w-10 h-10 text-gray-700" />
            </div>
            <h3 className="text-xl font-bold mb-3">Select your issue.</h3>
            <p className="text-gray-600 text-sm">
              Share the Wheelfix app and choose from tire repair, battery problem or breakdown type.
            </p>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 min-h-[280px] flex flex-col">
            <div className="bg-white rounded-2xl w-20 h-20 flex items-center justify-center mb-6">
              <Wrench className="w-10 h-10 text-gray-700" />
            </div>
            <h3 className="text-xl font-bold mb-3">Get a nearby mechanic.</h3>
            <p className="text-gray-600 text-sm">
              Get verified mechanics dispatched to arrive at your location instantly.
            </p>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 min-h-[280px] flex flex-col">
            <div className="bg-white rounded-2xl w-20 h-20 flex items-center justify-center mb-6">
              <Star className="w-10 h-10 text-gray-700" />
            </div>
            <h3 className="text-xl font-bold mb-3">Pay and relax.</h3>
            <p className="text-gray-600 text-sm">
              Effortlessly settle payment online, and relax—help is on the way.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-gray-50 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Car className="w-8 h-8 text-gray-700" />
            </div>
            <h4 className="font-semibold">Jump Start</h4>
          </div>

          <div className="text-center">
            <div className="bg-gray-50 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Battery className="w-8 h-8 text-gray-700" />
            </div>
            <h4 className="font-semibold">Tyre Fix</h4>
          </div>

          <div className="text-center">
            <div className="bg-gray-50 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Battery className="w-8 h-8 text-gray-700" />
            </div>
            <h4 className="font-semibold">Battery Issue</h4>
          </div>

          <div className="text-center">
            <div className="bg-gray-50 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Droplet className="w-8 h-8 text-gray-700" />
            </div>
            <h4 className="font-semibold">Oil Change</h4>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-3xl p-8 min-h-[280px] flex flex-col">
            <div className="bg-white rounded-2xl w-20 h-20 flex items-center justify-center mb-6">
              <Wrench className="w-10 h-10 text-gray-700" />
            </div>
            <h3 className="text-xl font-bold mb-3">Minor repairs.</h3>
            <p className="text-gray-600 text-sm">
              Quick fixes for common car and bike issues, anytime—anywhere.
            </p>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 min-h-[280px] flex flex-col">
            <div className="bg-white rounded-2xl w-20 h-20 flex items-center justify-center mb-6">
              <Car className="w-10 h-10 text-gray-700" />
            </div>
            <h3 className="text-xl font-bold mb-3">Vehicle towing.</h3>
            <p className="text-gray-600 text-sm">
              Get safe, reliable towing assistance for accidents or breakdowns.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-gray-50 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-gray-700" />
            </div>
            <h4 className="font-semibold">24/7 Service</h4>
          </div>

          <div className="text-center">
            <div className="bg-gray-50 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="w-8 h-8 text-gray-700" />
            </div>
            <h4 className="font-semibold">Verified Pros</h4>
          </div>

          <div className="text-center">
            <div className="bg-gray-50 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-8 h-8 text-gray-700" />
            </div>
            <h4 className="font-semibold">Instant Help</h4>
          </div>

          <div className="text-center">
            <div className="bg-gray-50 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-gray-700" />
            </div>
            <h4 className="font-semibold">Transparent Rates</h4>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <blockquote className="text-2xl md:text-3xl font-bold">
          &ldquo;My car stopped at midnight. Wheelfix arrived in 20 minutes. Truly a lifesaver!&rdquo;
        </blockquote>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Get the app.</h2>
        <p className="text-xl text-gray-400 mb-8">Book help instantly.</p>
        <div className="mb-8">
          <input
            type="tel"
            placeholder="Enter phone number"
            className="border border-gray-300 rounded-full px-6 py-3 w-full max-w-sm text-center mb-4"
          />
        </div>
        <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 w-full max-w-sm">
          Send me a link
        </button>
      </section>

      {/* Footer */}
      <footer className="border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">REAL</h3>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">About Us</a></li>
                <li><a href="#" className="hover:text-gray-900">Careers</a></li>
                <li><a href="#" className="hover:text-gray-900">Get Job Application</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Help center</a></li>
                <li><a href="#" className="hover:text-gray-900">Blog</a></li>
                <li><a href="#" className="hover:text-gray-900">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal & Social</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Terms</a></li>
                <li><a href="#" className="hover:text-gray-900">Privacy</a></li>
                <li><a href="#" className="hover:text-gray-900">Instagram / YouTube</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}