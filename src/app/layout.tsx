import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ConsentProvider } from "@/components/gdpr/ConsentProvider";
import { GdprRoot } from "@/components/gdpr/GdprRoot";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Dr. Mihaela Vladu — Top Diabet | Clinică de diabet",
    template: "%s | Dr. Mihaela Vladu — Top Diabet",
  },
  description: SITE.description,
  keywords: [
    "diabet",
    "clinică diabet",
    "Dr. Mihaela Vladu",
    "diabetolog Craiova",
    "nutriție diabet",
    "monitorizare glicemie",
    "Top Diabet",
  ],
  authors: [{ name: SITE.doctor }],
  creator: SITE.title,
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: SITE.url,
    siteName: SITE.title,
    title: "Dr. Mihaela Vladu — Top Diabet | Controlul diabetului",
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Mihaela Vladu — Top Diabet",
    description: SITE.description,
  },
  alternates: {
    canonical: SITE.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0E7490",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className={inter.variable}>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <ConsentProvider>
          <JsonLd />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <GdprRoot />
        </ConsentProvider>
      </body>
    </html>
  );
}
