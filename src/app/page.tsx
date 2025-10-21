
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roadside Assistance Services - 24/7 Mobile Mechanic | WheelFix",
  description:
    "Get instant roadside assistance with WheelFix. 24/7 mobile mechanic service for jump starts, tyre repair, battery replacement, towing & emergency car repairs across India. Transparent pricing, verified mechanics.",
  keywords: [
    "roadside assistance services",
    "mobile mechanic near me",
    "emergency car repair service",
    "24/7 towing service India",
    "jump start service",
    "tyre puncture repair",
    "battery replacement near me",
    "on-demand mechanic",
    "vehicle breakdown service",
    "instant mechanic booking",
    "car repair at doorstep",
    "bike mechanic service",
    "emergency vehicle help",
    "verified mechanic service"
  ],
  alternates: {
    canonical: "https://www.wheelfix.in/services",
  },
  openGraph: {
    title: "24/7 Roadside Assistance Services | WheelFix",
    description:
      "Instant roadside repair anywhere. Get verified mechanics for jump starts, tyre repair, battery issues & towing. Transparent pricing, 24/7 availability.",
    url: "https://www.wheelfix.in/services",
    type: "website",
    images: [
      {
        url: "/services-og.jpg",
        width: 1200,
        height: 630,
        alt: "WheelFix Roadside Assistance Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "24/7 Roadside Assistance Services | WheelFix",
    description:
      "Instant roadside repair anywhere. Verified mechanics, transparent pricing, 24/7 service.",
    images: ["/services-twitter.jpg"],
  },
};
// Import the client component
import ServicePageClient from './home/ServicePageClient';

export default function ServicePage() {
  return <ServicePageClient />;
}
