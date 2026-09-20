import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { MotionProvider } from "@/components/mpp/motion-provider";
import { MotionScenes } from "@/components/mpp/motion-scenes";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600"]
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mpp-recruit.com"),
  title: "MPP — People. Performance. Systems.",
  description:
    "MPP verbindet Menschen, Leistung und Systeme zu einer klaren Grundlage für nachhaltiges Wachstum.",
  robots: {
    index: false,
    follow: false
  }
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MPP - Recruit",
  url: "https://www.mpp-recruit.com/",
  email: "mpp-recruit@web.de",
  telephone: "+49 176 4516719",
  founder: {
    "@type": "Person",
    name: "Mattias Pedro Panthel"
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Benfleetstraße 11",
    postalCode: "50858",
    addressLocality: "Köln",
    addressCountry: "DE"
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body className={`${display.variable} ${sans.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <MotionProvider>
          <MotionScenes />
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
