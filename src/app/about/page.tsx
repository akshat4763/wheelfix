import { Metadata } from "next";
import AboutPage from "./about";

export const metadata: Metadata = {
  title: "About WheelFix - Our Story & Mission | 24/7 Roadside Assistance",
  description:
    "Learn about WheelFix's journey from a personal mission to India's trusted roadside assistance platform. Founded in 2021, we connect vehicle owners with 500+ verified mechanics for 24/7 emergency help.",
  keywords: [
    "about wheelfix",
    "wheelfix story",
    "roadside assistance company India",
    "vehicle breakdown service history",
    "mobile mechanic platform",
    "trusted roadside help",
    "wheelfix founder",
    "verified mechanics network",
    "emergency vehicle service company",
    "automotive assistance platform"
  ],
  alternates: {
    canonical: "https://www.wheelfix.in/about",
  },
  openGraph: {
    title: "About WheelFix - Trusted Roadside Assistance Since 2021",
    description:
      "Discover how WheelFix transformed roadside assistance in India. 500+ verified mechanics, 24/7 service, and thousands of satisfied customers.",
    url: "https://www.wheelfix.in/about",
    type: "website",
    images: [
      {
        url: "/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "WheelFix - About Our Roadside Assistance Mission",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About WheelFix - Our Story & Mission",
    description:
      "From a personal breakdown to India's trusted roadside assistance platform. 500+ mechanics, 24/7 service.",
    images: ["/about-twitter.jpg"],
  },
};

export default function AboutPageWrapper() {
  return <AboutPage />;
}