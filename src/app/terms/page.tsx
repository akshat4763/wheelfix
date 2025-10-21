
import { Metadata } from 'next';
import TermsPage from './terms';
export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Read WheelFix's terms and conditions for roadside assistance services. Understand user responsibilities, refund policy, liability terms, and dispute resolution procedures.",
  openGraph: {
    title: "Terms & Conditions | WheelFix",
    description: "Terms of service for WheelFix roadside assistance platform. User agreements, mechanic responsibilities, and service policies.",
    url: "https://www.wheelfix.in/terms",
  },
  alternates: {
    canonical: "https://www.wheelfix.in/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
};
export default function TermsPageWrapper() {
  return <TermsPage />;
}