import { Metadata } from "next";
import PrivacyPage from "./privacy";

export const metadata: Metadata = {
  title: "Privacy Policy - Data Protection & Security | WheelFix Roadside Assistance",
  description:
    "WheelFix Privacy Policy: Learn how we protect your personal information, vehicle data, and location details. GDPR & CCPA compliant. Updated October 2025.",
  keywords: [
    "wheelfix privacy policy",
    "data protection roadside assistance",
    "vehicle data security",
    "location privacy",
    "personal information safety",
    "GDPR compliance India",
    "user data protection",
    "mechanic platform privacy",
    "secure payment information",
    "privacy rights India"
  ],
  alternates: {
    canonical: "https://www.wheelfix.in/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy - WheelFix Data Protection",
    description:
      "Understand how WheelFix protects your privacy. Comprehensive data security, GDPR compliance, and transparent practices.",
    url: "https://www.wheelfix.in/privacy-policy",
    type: "website",
    images: [
      {
        url: "/privacy-og.jpg",
        width: 1200,
        height: 630,
        alt: "WheelFix Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | WheelFix",
    description:
      "Your privacy matters. Learn about our data protection practices and security measures.",
    images: ["/privacy-twitter.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};
export default function PrivacyPageWrapper() {
  return <PrivacyPage />;
}