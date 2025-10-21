'use client';
import Footer from "@/components/ui/footer";
import NavBar from "@/components/ui/navigation-menu";
import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data - About Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About WheelFix",
            "description": "Learn about WheelFix's mission to provide reliable roadside assistance across India",
            "url": "https://www.wheelfix.in/about",
            "mainEntity": {
              "@type": "Organization",
              "name": "WheelFix",
              "foundingDate": "2021",
              "founder": {
                "@type": "Person",
                "name": "Akshat Sharma"
              },
              "description": "24/7 roadside assistance platform connecting vehicle owners with verified mechanics"
            }
          })
        }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.wheelfix.in"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "About",
                "item": "https://www.wheelfix.in/about"
              }
            ]
          })
        }}
      />

      <NavBar />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Hero Section */}
        <header className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4">
            About WheelFix
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-400">
            Trusted roadside assistance since 2021
          </p>
        </header>

        {/* Founder's Message Section */}
        <section className="mb-16 sm:mb-20" aria-labelledby="founder-message">
          <h2 id="founder-message" className="text-2xl sm:text-3xl font-bold text-black mb-6">
            Founder&apos;s Message
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Dear users, Wheelfix began as a personal mission after I experienced being
            stranded at night, unsure where to turn for help. I founded Wheelfix with one simple
            goal: to ensure that quick, safe, and trusted roadside assistance is never more
            than a few clicks away. Thank you for believing in us. – Akshat Sharma, Founder
          </p>
        </section>

        {/* Timeline Section */}
        <section className="mb-16 sm:mb-20" aria-labelledby="company-timeline">
          <h2 id="company-timeline" className="text-2xl sm:text-3xl font-bold text-black mb-8 text-center">
            Our Journey
          </h2>
          <div className="space-y-6 sm:space-y-8">
            <article className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-200 pb-6">
              <h3 className="text-lg sm:text-xl font-semibold text-black mb-2 sm:mb-0">
                Wheelfix Idea Conceived
              </h3>
              <time className="text-lg sm:text-xl text-gray-400" dateTime="2021">
                2021
              </time>
            </article>

            <article className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-200 pb-6">
              <h3 className="text-lg sm:text-xl font-semibold text-black mb-2 sm:mb-0">
                Platform Prototype Launched
              </h3>
              <time className="text-lg sm:text-xl text-gray-400" dateTime="2022">
                2022
              </time>
            </article>

            <article className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-200 pb-6">
              <h3 className="text-lg sm:text-xl font-semibold text-black mb-2 sm:mb-0">
                Reached 1000 Customers
              </h3>
              <time className="text-lg sm:text-xl text-gray-400" dateTime="2023">
                2023
              </time>
            </article>

            <article className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-200 pb-6">
              <h3 className="text-lg sm:text-xl font-semibold text-black mb-2 sm:mb-0">
                Expanded to New Cities
              </h3>
              <time className="text-lg sm:text-xl text-gray-400" dateTime="2024">
                2024
              </time>
            </article>

            <article className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-200 pb-6">
              <h3 className="text-lg sm:text-xl font-semibold text-black mb-2 sm:mb-0">
                24/7 Assistance Rollout
              </h3>
              <time className="text-lg sm:text-xl text-gray-400" dateTime="2025">
                2025
              </time>
            </article>

            <article className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-200 pb-6">
              <h3 className="text-lg sm:text-xl font-semibold text-black mb-2 sm:mb-0">
                Crossed 500 Verified Mechanics
              </h3>
              <time className="text-lg sm:text-xl text-gray-400" dateTime="2025">
                2025
              </time>
            </article>
          </div>
        </section>

        {/* Story Behind Wheelfix Section */}
        <section className="mb-16 sm:mb-20" aria-labelledby="our-story">
          <h2 id="our-story" className="text-2xl sm:text-3xl font-bold text-black mb-6">
            Story Behind Wheelfix
          </h2>
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
        <section aria-labelledby="vision-mission">
          <h2 id="vision-mission" className="text-2xl sm:text-3xl font-bold text-black mb-6">
            Vision & Mission
          </h2>
          <div className="space-y-6 text-lg text-gray-500 leading-relaxed">
            <div>
              <h3 className="text-xl font-semibold text-black mb-3">Our Vision</h3>
              <p>
                Our vision is to make roadside repair quick, safe, and reliable for
                everyone in India. We believe in a future where trustworthy help
                is always within reach, empowering confidence for every journey.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-black mb-3">Our Mission</h3>
              <p>
                Our mission is to bridge vehicle owners and certified mechanics
                with a seamless digital platform, ensuring 24/7 assistance,
                transparent services, and fair opportunities for all our partners.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;