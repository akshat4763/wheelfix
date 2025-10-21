
import { Metadata } from 'next';
import ContactPage from './contact';

// Note: Export this metadata from page.tsx for proper Next.js handling
export const metadata: Metadata = {
  title: "Contact Us - Get in Touch",
  description: "Contact WheelFix for roadside assistance queries, partnerships, or support. Available 24/7 via WhatsApp, email, or phone. Office located in Thane, Maharashtra.",
  openGraph: {
    title: "Contact WheelFix | 24/7 Roadside Assistance Support",
    description: "Get in touch with WheelFix team for instant roadside help, business inquiries, or support.",
    url: "https://www.wheelfix.in/contact",
  },
  alternates: {
    canonical: "https://www.wheelfix.in/contact",
  },
};
export default function ContactPageWrapper() {
  return <ContactPage />;
}