import "./globals.css";
import { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "WheelFix — we’ll fix your wheels",
  description:
    "Instant roadside repair, 24/7 — wherever you are. Get your vehicle back on the road quickly and safely.",
  keywords: ["roadside assistance", "car repair", "towing", "WheelFix", "mechanic"],
  authors: [{ name: "WheelFix" }],
  openGraph: {
    title: "WheelFix — 24/7 roadside repair",
    description:
      "Stuck on the road? WheelFix connects you with nearby mechanics instantly.",
    url: "https://www.wheelfix.com",
    siteName: "WheelFix",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
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
