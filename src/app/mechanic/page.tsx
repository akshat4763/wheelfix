import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join as Mechanic - Earn More with Flexible Work | WheelFix Partner",
  description:
    "Join WheelFix as a mechanic partner and increase your earnings with flexible work hours. Get verified customer requests, work on your schedule, and grow your business across India. Apply now for individual mechanics and auto repair shops.",
  keywords: [
    "mechanic jobs India",
    "auto mechanic partner",
    "join as mechanic",
    "mechanic partnership",
    "roadside mechanic jobs",
    "mobile mechanic work",
    "mechanic earning opportunities",
    "auto repair shop partnership",
    "freelance mechanic jobs",
    "car mechanic jobs near me",
    "bike mechanic jobs",
    "vehicle repair jobs",
    "mechanic business opportunity",
    "verified mechanic platform",
    "flexible mechanic work",
    "WheelFix partner program",
    "mechanic registration India",
    "on-demand mechanic jobs"
  ],
  alternates: {
    canonical: "https://www.wheelfix.in/mechanic",
  },
  openGraph: {
    title: "Join WheelFix as Mechanic Partner - Earn More with Flexible Work",
    description:
      "Partner with WheelFix and get access to verified customer requests. Flexible schedule, increased earnings, and secure payments for mechanics across India.",
    url: "https://www.wheelfix.in/mechanic",
    type: "website",
    images: [
      {
        url: "/mechanic-og.jpg",
        width: 1200,
        height: 630,
        alt: "Join WheelFix as Mechanic Partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Join as Mechanic Partner | WheelFix",
    description:
      "Earn more with flexible work. Get verified customer requests and grow your mechanic business.",
    images: ["/mechanic-twitter.jpg"],
  },
};

import MechanicPage from './mechnaic';

export default function MechanicPageWrapper() {
  return <MechanicPage />;
}