
import { Metadata } from "next";
import BusinessPage from "./business";
export const metadata: Metadata = {
  title: "WheelFix for Business - Enterprise Roadside Solutions",
  description: "Partner with WheelFix for enterprise roadside assistance solutions. Fleet management, corporate partnerships, and bulk service plans for businesses across India.",
  openGraph: {
    title: "WheelFix for Business | Enterprise Roadside Assistance",
    description: "Comprehensive roadside assistance solutions for businesses, fleets, and corporate partners.",
    url: "https://www.wheelfix.in/business",
  },
  alternates: {
    canonical: "https://www.wheelfix.in/business",
  },
};
export default function BusinessPageWrapper() {
  return <BusinessPage />;
}