import Footer from "@/components/ui/footer";
import NavBar from "@/components/ui/navigation-menu";
import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <div className="max-w-6xl mx-auto">
        {/* Founder's Message Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-black mb-6">Founder&apos;s  Message</h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Dear users, Wheelfix began as a personal mission after I experienced being
            stranded at night, unsure where to turn for help. I founded Wheelfix with one simple
            goal: to ensure that quick, safe, and trusted roadside assistance is never more
            than a few clicks away. Thank you for believing in us. – Akshat Sharma, Founder
          </p>
        </section>

        {/* Timeline Section */}
        <section className="mb-20 space-y-8">
          <div className="flex justify-between items-center border-b border-gray-200 pb-6">
            <h3 className="text-xl font-semibold text-black">Wheelfix Idea Conceived</h3>
            <span className="text-xl text-gray-400">2021</span>
          </div>

          <div className="flex justify-between items-center border-b border-gray-200 pb-6">
            <h3 className="text-xl font-semibold text-black">Platform Prototype Launched</h3>
            <span className="text-xl text-gray-400">2022</span>
          </div>

          <div className="flex justify-between items-center border-b border-gray-200 pb-6">
            <h3 className="text-xl font-semibold text-black">Reached 1000 Customers</h3>
            <span className="text-xl text-gray-400">2023</span>
          </div>

          <div className="flex justify-between items-center border-b border-gray-200 pb-6">
            <h3 className="text-xl font-semibold text-black">Expanded to New Cities</h3>
            <span className="text-xl text-gray-400">2024</span>
          </div>

          <div className="flex justify-between items-center border-b border-gray-200 pb-6">
            <h3 className="text-xl font-semibold text-black">24/7 Assistance Rollout</h3>
            <span className="text-xl text-gray-400">2025</span>
          </div>

          <div className="flex justify-between items-center border-b border-gray-200 pb-6">
            <h3 className="text-xl font-semibold text-black">Crossed 500 Verified Mechanics</h3>
            <span className="text-xl text-gray-400">2025</span>
          </div>
        </section>

        {/* Story Behind Wheelfix Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-black mb-6">Story Behind Wheelfix</h2>
          <div className="space-y-6 text-lg text-gray-500 leading-relaxed">
            <p>
              Wheelfix was born when our founder faced a daunting roadside breakdown
              and struggled to find swift, reliable help. Realizing the need for a dependable
              platform that connects vehicle owners with certified mechanics anytime,
              anywhere, Wheelfix set out to transform the roadside repair experience.
              Our growth has been fuelled by a commitment to service and innovation.
            </p>
            <p>
              Since our launch, customer trust and mechanic empowerment have guided our every
              step. We&apos;ve helped thousands get back on the road safely and quickly, while supporting
              a growing network of skilled professionals who share our vision of hassle-free mobility.
            </p>
            <p>
              Every day, we strive to redefine roadside assistance with transparency,
              speed, and safety. Our story continues, powered by the hope that
              no one should ever be left stranded when help is just a tap away.
            </p>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-6">Vision & Mission</h2>
          <div className="space-y-6 text-lg text-gray-500 leading-relaxed">
            <p>
              Our vision is to make roadside repair quick, safe, and reliable for
              everyone in India. We believe in a future where trustworthy help
              is always within reach, empowering confidence for every journey.
            </p>
            <p>
              Our mission is to bridge vehicle owners and certified mechanics
              with a seamless digital platform, ensuring 24/7 assistance,
              transparent services, and fair opportunities for all our partners.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;