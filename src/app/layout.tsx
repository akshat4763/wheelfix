import "./globals.css";
import { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: {
    default: "WheelFix - 24/7 Roadside Assistance & Mobile Mechanic Service in India",
    template: "%s | WheelFix - On-Demand Roadside Repair"
  },
  description:
    "WheelFix provides instant 24/7 roadside assistance across India. Get mobile mechanic service, towing, jump starts, tyre repair, battery replacement & emergency car repair at your location. Download the app for instant help.",
  keywords: [
    "roadside assistance India",
    "mobile mechanic service",
    "24/7 car repair",
    "emergency towing service",
    "on-demand mechanic",
    "vehicle breakdown assistance",
    "jump start service",
    "tyre puncture repair",
    "battery replacement service",
    "car mechanic near me",
    "bike mechanic service",
    "roadside repair app",
    "emergency vehicle service",
    "instant mechanic booking",
    "WheelFix India",
    "automobile roadside help",
    "vehicle emergency service",
    "doorstep car repair",
    "mobile auto repair"
  ],
  authors: [{ name: "WheelFix", url: "https://www.wheelfix.in" }],
  creator: "WheelFix",
  publisher: "WheelFix",
  metadataBase: new URL("https://www.wheelfix.in"),
  alternates: {
    canonical: "https://www.wheelfix.in",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.wheelfix.in",
    siteName: "WheelFix",
    title: "WheelFix - 24/7 Roadside Assistance & Mobile Mechanic Service",
    description:
      "Instant roadside repair service anywhere in India. Get verified mechanics, towing, jump starts & emergency repairs 24/7. Download WheelFix app for quick assistance.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WheelFix - 24/7 Roadside Assistance Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@wheelfix",
    creator: "@wheelfix",
    title: "WheelFix - 24/7 Roadside Assistance & Mobile Mechanic",
    description:
      "Get instant roadside repair anywhere in India. Verified mechanics, towing & emergency services 24/7.",
    images: ["/twitter-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  category: "Automotive Services",
  classification: "Roadside Assistance, Mobile Mechanic Service, Emergency Vehicle Repair",
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "format-detection": "telephone=no",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "WheelFix",
              "url": "https://www.wheelfix.in",
              "logo": "https://www.wheelfix.in/logo.svg",
              "description": "24/7 roadside assistance and mobile mechanic service across India",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-XXXXXXXXXX",
                "contactType": "Customer Service",
                "availableLanguage": ["English", "Hindi"],
                "areaServed": "IN"
              },
              "sameAs": [
                "https://www.facebook.com/wheelfix",
                "https://www.instagram.com/wheelfix",
                "https://twitter.com/wheelfix",
                "https://www.linkedin.com/company/wheelfix"
              ]
            })
          }}
        />
        
        {/* Structured Data - Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRepair",
              "name": "WheelFix",
              "image": "https://www.wheelfix.in/logo.svg",
              "description": "24/7 mobile mechanic and roadside assistance service",
              "priceRange": "₹₹",
              "areaServed": {
                "@type": "Country",
                "name": "India"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
              }
            })
          }}
        />
        
        {/* Structured Data - Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Roadside Assistance",
              "provider": {
                "@type": "Organization",
                "name": "WheelFix"
              },
              "areaServed": {
                "@type": "Country",
                "name": "India"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Roadside Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Jump Start Service"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Tyre Repair & Replacement"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Battery Replacement"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Vehicle Towing"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Oil Change Service"
                    }
                  }
                ]
              }
            })
          }}
        />
        
        {/* Structured Data - Mobile Application */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MobileApplication",
              "name": "WheelFix",
              "operatingSystem": "Android, iOS",
              "applicationCategory": "UtilitiesApplication",
              "description": "Book instant roadside assistance and mobile mechanic service",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "INR"
              }
            })
          }}
        />
      </head>
      <body suppressHydrationWarning={true}>
        <GoogleTagManager gtmId="GTM-TQ6BMRFP" />
        {children}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TQ6BMRFP"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
      </body>
    </html>
  );
}