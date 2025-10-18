import Footer from '@/components/ui/footer';
import NavBar from '@/components/ui/navigation-menu';
import React from 'react';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <div className="max-w-full">
        <div className="p-8 md:p-16 lg:p-20 space-y-12">
          {/* Agreement of Use and Responsibilities Section */}
          <section>
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              Agreement of Use and Responsibilities
            </h1>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                By using Wheelfix&apos;s roadside mechanic services or mobile application, you agree to
                comply with all the terms outlined herein. Users must provide accurate information,
                follow instructions given by Wheelfix and its mechanics, and are responsible for the safe
                custody of their vehicle during service. Mechanics must perform services professionally,
                respect client property, and maintain updated credentials as required by law.
              </p>
              
              <p>
                Wheelfix facilitates payment through secure channels. All service payments must
                be made through the app or platform. Users must complete payment upon service
                confirmation. Refunds are applicable in cases where services are canceled before
                a mechanic begins work or where a mechanic is unable to fulfil the service. If a
                user cancels after a mechanic has been dispatched but before service begins,
                only a partial refund applies. Refunds are processed within 5-7 business days.
              </p>
              
              <p>
                Wheelfix acts as a facilitator and is not liable for damages or losses caused by
                third-party mechanics, except where mandated by law. Disputes will be resolved
                through negotiation, and if unresolved, via mediation or as per applicable
                MSME dispute forums. Use of Wheelfix implies agreement to these terms
                and all updates posted here. For legal concerns, contact legal@wheelfix.in.
              </p>
            </div>
          </section>

          {/* Liability, Refunds & Dispute Resolution Section */}
          <section>
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              Liability, Refunds & Dispute Resolution
            </h1>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Users and mechanics are individually responsible for following all
                government regulations and local laws while availing or providing services
                via Wheelfix. Vulnerable user or mechanic data is protected and processed
                as per the Privacy Policy. All services are provided on an as-is basis.
              </p>
              
              <p>
                Liability for damage, theft, injury, or non-performance is limited to the fullest
                extent permitted by law. Wheelfix will only mediate disputes and is not directly
                liable for third-party actions unless explicitly specified. In case of violation of
                these terms, accounts may be suspended or terminated without prior notice.
              </p>
              
              <p>
                By using Wheelfix, you agree to resolve disputes first via email at support@wheelfix.in.
                If not resolved within 30 days, disputes may be escalated to MSME mediation panels
                or other legal bodies. Terms may be updated as per statutory compliance or app
                governance needs. Continued use of Wheelfix constitutes acceptance of such changes.
              </p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsPage;