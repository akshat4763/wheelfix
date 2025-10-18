import Footer from "@/components/ui/footer";
import NavBar from "@/components/ui/navigation-menu";
import React from "react";

const RefundCancellationPolicyPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      {/* Hero Section */}
      <section className="text-center py-32 px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-black mb-4">
          Refund & Cancellation.
        </h1>
        <p className="text-4xl md:text-5xl font-bold text-gray-400">
          Understand our policy for users and mechanics.
        </p>
      </section>

      {/* Policy Content */}
      <div className="max-w-4xl mx-auto px-4 md:px-20 pb-20">
        {/* Refund and Cancellation Policy Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-black mb-6">
            Refund and Cancellation Policy
          </h2>
          <div className="space-y-6 text-lg text-gray-500 leading-relaxed">
            <p>
              Wheelfix is committed to providing transparent, fair, and prompt refund and cancellation
              policies for both users and mechanics. This policy is tailored to comply with MSME
              regulations, app platform requirements, and to ensure trust for all service interactions.
            </p>
            <p>
              1. User Cancellations: If a user cancels a booking before a mechanic has
              started the journey or accepted the job, a full refund will be issued. If a
              cancellation occurs after the mechanic has accepted and is en route, only
              a partial refund will be processed to cover basic service and transit costs.
              No refund is available if cancellation occurs after service commencement.
            </p>
            <p>
              2. Mechanic Cancellations: If the assigned mechanic cancels the job before arriving,
              the user is eligible for a full refund. Wheelfix may reassign another mechanic
              upon user request or provide an immediate refund, as preferred by the user.
            </p>
          </div>
        </section>

        {/* Refund Processing & MSME Compliance Section */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-6">
            Refund Processing & MSME Compliance
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            All refunds are processed within 5-7 business days to the original payment
            method. Wheelfix adheres to MSME and app platform guidelines for transaction
            clarity, record-keeping, and dispute resolution. For any concerns, users
            and mechanics can contact support@wheelfix.in for further assistance.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default RefundCancellationPolicyPage;