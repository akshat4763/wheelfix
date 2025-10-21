
import { Metadata } from "next";
import FAQPage from "./faq";

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions",
  description: "Find answers to common questions about WheelFix roadside assistance services. Learn about our services, pricing, coverage areas, and how to get emergency help 24/7.",
  openGraph: {
    title: "FAQ | WheelFix Roadside Assistance",
    description: "Get instant answers to your questions about WheelFix roadside mechanic services.",
    url: "https://www.wheelfix.in/faq",
  },
  alternates: {
    canonical: "https://www.wheelfix.in/faq",
  },
};
export default function FAQPageWrapper() {
  return <FAQPage />;
}