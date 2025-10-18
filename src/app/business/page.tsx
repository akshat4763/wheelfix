import Footer from "@/components/ui/footer";
import NavBar from "@/components/ui/navigation-menu";
import React from "react";

const BusinessPage = () => {
  return (
    <div>
      <div className="min-h-screen bg-white flex flex-col" suppressHydrationWarning={true}>
        <NavBar />
        {/* Hero Section - Centered */}
        <section className="flex-1 flex items-center justify-center px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-4xl md:text-5xl font-bold text-gray-400 mb-12">
              Coming Soon...
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-black-400 mb-6">
              Wheelfix for Business
            </h1>
            <p className="text-4xl md:text-5xl font-bold text-gray-400 mb-12">
              Partner with us to boost your business. We&apos;re working hard to bring you the best roadside assistance solutions.
            </p>
            <div className="flex gap-4 flex-wrap justify-center">
              <button className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition">
                Join Waitlist
              </button>
              <button className="px-8 py-3 bg-gray-200 text-black rounded-full font-medium hover:bg-gray-300 transition">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default BusinessPage;