'use client';
import Footer from '@/components/ui/footer';
import NavBar from '@/components/ui/navigation-menu';

import React from 'react';
import { Shield, FileText, Scale, AlertCircle } from 'lucide-react';


const TermsPage = () => {
  const lastUpdated = "October 21, 2025";

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-black rounded-full mb-6">
            <Scale size={40} className="text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-4">
            Terms & Conditions
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            Please read these terms carefully before using WheelFix services
          </p>
          <p className="text-sm text-gray-500">
            Last Updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 px-4 bg-gray-50 border-y border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#agreement" className="px-6 py-2 bg-white rounded-full text-sm font-semibold text-gray-700 hover:bg-gray-100 transition">
              Agreement of Use
            </a>
            <a href="#payments" className="px-6 py-2 bg-white rounded-full text-sm font-semibold text-gray-700 hover:bg-gray-100 transition">
              Payments & Refunds
            </a>
            <a href="#liability" className="px-6 py-2 bg-white rounded-full text-sm font-semibold text-gray-700 hover:bg-gray-100 transition">
              Liability
            </a>
            <a href="#disputes" className="px-6 py-2 bg-white rounded-full text-sm font-semibold text-gray-700 hover:bg-gray-100 transition">
              Dispute Resolution
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Introduction */}
        <div className="mb-16 p-8 bg-blue-50 border-l-4 border-blue-500 rounded-r-xl">
          <div className="flex items-start gap-4">
            <AlertCircle size={24} className="text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Important Notice</h3>
              <p className="text-gray-700 leading-relaxed">
                By using WheelFix&apos;s roadside mechanic services or mobile application, you agree to
                comply with all terms outlined in this document. If you do not agree with these terms, 
                please discontinue use of our services immediately.
              </p>
            </div>
          </div>
        </div>

        {/* Agreement of Use Section */}
        <section id="agreement" className="mb-16 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
              <FileText size={24} className="text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Agreement of Use & Responsibilities
            </h2>
          </div>
          
          <div className="space-y-6 text-gray-700 leading-relaxed pl-0 md:pl-15">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">User Responsibilities</h3>
              <p>
                By using WheelFix&apos;s roadside mechanic services or mobile application, you agree to
                comply with all the terms outlined herein. Users must provide accurate information,
                follow instructions given by WheelFix and its mechanics, and are responsible for the safe
                custody of their vehicle during service.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mechanic Obligations</h3>
              <p>
                Mechanics must perform services professionally, respect client property, and maintain 
                updated credentials as required by law. All service providers on the WheelFix platform 
                are verified and must adhere to our quality standards.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Platform Facilitation</h3>
              <p>
                WheelFix acts as a facilitator connecting users with service providers. The platform 
                is not liable for damages or losses caused by third-party mechanics, except where 
                mandated by law. Use of WheelFix implies agreement to these terms and all updates 
                posted here.
              </p>
            </div>
          </div>
        </section>

        {/* Payments & Refunds Section */}
        <section id="payments" className="mb-16 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
              <Shield size={24} className="text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Payments & Refund Policy
            </h2>
          </div>
          
          <div className="space-y-6 text-gray-700 leading-relaxed pl-0 md:pl-15">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Payment Terms</h3>
              <p className="mb-3">
                WheelFix facilitates payment through secure channels. All service payments must
                be made through the app or platform. Users must complete payment upon service
                confirmation.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>All payments processed through secure gateway</li>
                <li>Multiple payment options available (UPI, Cards, Wallets)</li>
                <li>Transparent pricing with no hidden charges</li>
                <li>Digital invoice provided for all transactions</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Refund Conditions</h3>
              <p className="mb-3">Refunds are applicable in the following scenarios:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li><strong>Full Refund:</strong> Services canceled before a mechanic begins work</li>
                <li><strong>Full Refund:</strong> Mechanic is unable to fulfill the service</li>
                <li><strong>Partial Refund:</strong> User cancels after mechanic dispatch but before service begins</li>
                <li><strong>Processing Time:</strong> Refunds processed within 5-7 business days</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cancellation Policy</h3>
              <p>
                If a user cancels after a mechanic has been dispatched but before service begins,
                only a partial refund applies to cover the mechanic&apos;s travel costs and time.
              </p>
            </div>
          </div>
        </section>

        {/* Liability Section */}
        <section id="liability" className="mb-16 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
              <Scale size={24} className="text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Liability & Legal Compliance
            </h2>
          </div>
          
          <div className="space-y-6 text-gray-700 leading-relaxed pl-0 md:pl-15">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">User & Mechanic Responsibility</h3>
              <p>
                Users and mechanics are individually responsible for following all government 
                regulations and local laws while availing or providing services via WheelFix. 
                User and mechanic data is protected and processed as per the Privacy Policy.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Limitation of Liability</h3>
              <p className="mb-3">
                All services are provided on an <strong>as-is</strong> basis. Liability for damage, theft, injury, 
                or non-performance is limited to the fullest extent permitted by law.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>WheelFix mediates disputes but is not directly liable for third-party actions</li>
                <li>Platform not responsible for mechanic negligence unless explicitly specified</li>
                <li>Insurance coverage may apply in certain circumstances</li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Account Suspension</h3>
              <p>
                In case of violation of these terms, accounts may be suspended or terminated 
                without prior notice. Repeated violations may result in permanent ban from the platform.
              </p>
            </div>
          </div>
        </section>

        {/* Dispute Resolution Section */}
        <section id="disputes" className="mb-16 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
              <AlertCircle size={24} className="text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Dispute Resolution
            </h2>
          </div>
          
          <div className="space-y-6 text-gray-700 leading-relaxed pl-0 md:pl-15">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Resolution Process</h3>
              <p className="mb-4">
                By using WheelFix, you agree to resolve disputes through the following process:
              </p>
              <ol className="list-decimal list-inside space-y-3 text-gray-600">
                <li><strong>Step 1:</strong> Contact us via email at <a href="mailto:support@wheelfix.in" className="text-blue-600 hover:underline">support@wheelfix.in</a></li>
                <li><strong>Step 2:</strong> We will respond and attempt resolution within 48 hours</li>
                <li><strong>Step 3:</strong> If unresolved within 30 days, disputes may be escalated</li>
                <li><strong>Step 4:</strong> Escalation to MSME mediation panels or other legal bodies</li>
              </ol>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mediation & Arbitration</h3>
              <p>
                Disputes will be resolved through negotiation, and if unresolved, via mediation 
                or as per applicable MSME dispute forums. All parties agree to participate in 
                good faith mediation before pursuing legal action.
              </p>
            </div>
          </div>
        </section>

        {/* Terms Updates Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 rounded-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Terms Updates & Modifications
            </h2>
            <p className="leading-relaxed mb-4">
              Terms may be updated as per statutory compliance or app governance needs. 
              Continued use of WheelFix constitutes acceptance of such changes. We will notify 
              users of significant changes via email or in-app notification.
            </p>
            <p className="text-gray-300 text-sm">
              We recommend reviewing these terms periodically to stay informed of any updates.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center p-8 bg-gray-50 rounded-2xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Questions About These Terms?
          </h2>
          <p className="text-gray-600 mb-6">
            For legal concerns or clarifications, please contact our legal team
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="mailto:legal@wheelfix.in"
              className="px-8 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition"
            >
              legal@wheelfix.in
            </a>
            <a 
              href="mailto:support@wheelfix.in"
              className="px-8 py-3 bg-white text-black rounded-full font-semibold border-2 border-gray-200 hover:bg-gray-50 transition"
            >
              support@wheelfix.in
            </a>
          </div>
        </section>
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Terms and Conditions - WheelFix",
            "description": "Terms of service for WheelFix roadside assistance platform",
            "url": "https://www.wheelfix.in/terms",
            "dateModified": lastUpdated,
            "publisher": {
              "@type": "Organization",
              "name": "WheelFix"
            }
          })
        }}
      />

      <Footer />
    </div>
  );
};

export default TermsPage;