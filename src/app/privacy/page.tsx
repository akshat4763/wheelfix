import React from 'react';

export default function PrivacyPolicy() {
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
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
        <div className="mb-4">
          <p className="text-sm font-semibold tracking-wide">REAL</p>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Privacy Policy.
        </h2>
        <p className="text-xl md:text-2xl text-gray-400 mb-8">
          Your privacy matters to us.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800">
            Get Help
          </button>
          <button className="border border-gray-300 px-8 py-3 rounded-full font-medium hover:bg-gray-50">
            Contact Support
          </button>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Introduction */}
        <section className="mb-16">
          <p className="text-gray-600 leading-relaxed mb-4">
            At Wheelfix, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our roadside assistance platform and services.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            By using Wheelfix, you agree to the collection and use of information in accordance with this policy. We respect your privacy and are committed to protecting your personal data.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Last updated: October 2025
          </p>
        </section>

        {/* Information We Collect */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Information We Collect</h3>
          
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-3">Personal Information</h4>
            <p className="text-gray-600 leading-relaxed mb-3">
              When you create an account or use our services, we collect personal information that you provide to us, including:
            </p>
            <ul className="space-y-2 text-gray-600 ml-4">
              <li className="leading-relaxed">• Full name and contact details (email address, phone number)</li>
              <li className="leading-relaxed">• Account credentials (username, password)</li>
              <li className="leading-relaxed">• Profile information and preferences</li>
              <li className="leading-relaxed">• Emergency contact information</li>
            </ul>
          </div>

          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-3">Vehicle Information</h4>
            <p className="text-gray-600 leading-relaxed mb-3">
              To provide roadside assistance, we collect information about your vehicle:
            </p>
            <ul className="space-y-2 text-gray-600 ml-4">
              <li className="leading-relaxed">• Vehicle make, model, year, and color</li>
              <li className="leading-relaxed">• License plate number and VIN (when applicable)</li>
              <li className="leading-relaxed">• Vehicle maintenance history and service records</li>
            </ul>
          </div>

          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-3">Location Data</h4>
            <p className="text-gray-600 leading-relaxed">
              We collect real-time GPS location data when you request assistance to dispatch the nearest available mechanic to your location. Location tracking is only active when you use our service and can be controlled through your device settings.
            </p>
          </div>

          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-3">Payment Information</h4>
            <p className="text-gray-600 leading-relaxed">
              We process payment information including credit card details, billing address, and transaction history. Payment data is securely processed through our encrypted payment partners and is never stored directly on our servers.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3">Usage Data</h4>
            <p className="text-gray-600 leading-relaxed">
              We automatically collect information about how you interact with our app and services, including service requests, response times, mechanic ratings, app features used, and device information.
            </p>
          </div>
        </section>

        {/* How We Use Your Information */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-6">How We Use Your Information</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            We use the collected information for various purposes to provide and improve our services:
          </p>
          <ul className="space-y-3 text-gray-600 ml-4">
            <li className="leading-relaxed">• <span className="font-semibold">Service Delivery:</span> To connect you with verified mechanics and provide roadside assistance at your location</li>
            <li className="leading-relaxed">• <span className="font-semibold">Communication:</span> To send service updates, notifications, and respond to your inquiries</li>
            <li className="leading-relaxed">• <span className="font-semibold">Payment Processing:</span> To process transactions and send billing information</li>
            <li className="leading-relaxed">• <span className="font-semibold">Safety and Security:</span> To verify identities, prevent fraud, and ensure platform safety</li>
            <li className="leading-relaxed">• <span className="font-semibold">Service Improvement:</span> To analyze usage patterns and enhance user experience</li>
            <li className="leading-relaxed">• <span className="font-semibold">Customer Support:</span> To provide assistance and resolve issues</li>
            <li className="leading-relaxed">• <span className="font-semibold">Legal Compliance:</span> To comply with legal obligations and enforce our terms</li>
          </ul>
        </section>

        {/* Information Sharing */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Information Sharing and Disclosure</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            We do not sell your personal information. We may share your information only in the following circumstances:
          </p>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">With Service Providers</h4>
              <p className="text-gray-600 leading-relaxed">
                We share necessary information with verified mechanics to provide roadside assistance. Mechanics only receive information required to complete your service request.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">With Business Partners</h4>
              <p className="text-gray-600 leading-relaxed">
                We work with trusted third-party service providers for payment processing, analytics, and customer support who are bound by confidentiality agreements.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">For Legal Reasons</h4>
              <p className="text-gray-600 leading-relaxed">
                We may disclose information when required by law, to protect our rights, or in response to legal processes.
              </p>
            </div>
          </div>
        </section>

        {/* Data Security */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Data Security</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. Our security practices include:
          </p>
          <ul className="space-y-2 text-gray-600 ml-4">
            <li className="leading-relaxed">• End-to-end encryption for data transmission</li>
            <li className="leading-relaxed">• Secure data storage with regular backups</li>
            <li className="leading-relaxed">• Regular security audits and vulnerability assessments</li>
            <li className="leading-relaxed">• Strict access controls and authentication requirements</li>
            <li className="leading-relaxed">• Employee training on data protection practices</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mt-4">
            However, no method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
          </p>
        </section>

        {/* Your Rights */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Your Privacy Rights</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            You have the following rights regarding your personal information:
          </p>
          <ul className="space-y-3 text-gray-600 ml-4">
            <li className="leading-relaxed">• <span className="font-semibold">Access:</span> Request access to the personal data we hold about you</li>
            <li className="leading-relaxed">• <span className="font-semibold">Correction:</span> Request correction of inaccurate or incomplete information</li>
            <li className="leading-relaxed">• <span className="font-semibold">Deletion:</span> Request deletion of your personal data, subject to legal requirements</li>
            <li className="leading-relaxed">• <span className="font-semibold">Data Portability:</span> Request a copy of your data in a structured format</li>
            <li className="leading-relaxed">• <span className="font-semibold">Opt-Out:</span> Unsubscribe from marketing communications at any time</li>
            <li className="leading-relaxed">• <span className="font-semibold">Withdraw Consent:</span> Withdraw consent for data processing where applicable</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mt-4">
            To exercise these rights, please contact us at privacy@wheelfix.com or through your account settings.
          </p>
        </section>

        {/* Data Retention */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Data Retention</h3>
          <p className="text-gray-600 leading-relaxed">
            We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements. When data is no longer needed, we securely delete or anonymize it.
          </p>
        </section>

        {/* Cookies */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Cookies and Tracking Technologies</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            We use cookies and similar tracking technologies to enhance your experience, analyze usage patterns, and personalize content. You can control cookie preferences through your browser settings.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our cookies include essential cookies for platform functionality, analytics cookies to understand usage, and preference cookies to remember your settings.
          </p>
        </section>

        {/* Children's Privacy */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Children&apos;s Privacy</h3>
          <p className="text-gray-600 leading-relaxed">
            Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected data from a child without parental consent, we will take steps to delete that information.
          </p>
        </section>

        {/* Changes to Policy */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Changes to This Privacy Policy</h3>
          <p className="text-gray-600 leading-relaxed">
            We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of significant changes through email or app notifications. Continued use of our services after changes constitutes acceptance of the updated policy.
          </p>
        </section>

        {/* Contact */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
          </p>
          <div className="bg-gray-50 rounded-2xl p-6 space-y-2 text-gray-600">
            <p><span className="font-semibold">Email:</span> privacy@wheelfix.com</p>
            <p><span className="font-semibold">Phone:</span> 1-800-WHEELFIX</p>
            <p><span className="font-semibold">Address:</span> Wheelfix Inc., 123 Road Street, City, State 12345</p>
            <p><span className="font-semibold">Hours:</span> Monday - Friday, 9:00 AM - 6:00 PM EST</p>
          </div>
        </section>

        {/* Compliance */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Regulatory Compliance</h3>
          <p className="text-gray-600 leading-relaxed">
            This Privacy Policy complies with applicable data protection laws including GDPR (General Data Protection Regulation), CCPA (California Consumer Privacy Act), and other relevant privacy regulations. We are committed to maintaining compliance as regulations evolve.
          </p>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t">
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