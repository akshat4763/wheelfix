import SupportPage from './support';

import { Metadata } from 'next';

// Note: Move this to a separate support/page.tsx file for proper Next.js metadata
export const metadata: Metadata = {
  title: "24/7 Support & Help Center",
  description: "Get instant support for WheelFix roadside assistance services. Contact us via WhatsApp, email, or our contact form. Available 24/7 for emergency roadside help across India.",
  openGraph: {
    title: "24/7 Support & Help Center | WheelFix",
    description: "Need help? Contact WheelFix support team for roadside assistance queries, service information, and emergency help across India.",
    url: "https://www.wheelfix.in/support",
  },
  alternates: {
    canonical: "https://www.wheelfix.in/support",
  },
};
export default function SupportPageWrapper() {
  return <SupportPage />;
}