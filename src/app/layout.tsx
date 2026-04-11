import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/config/links";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sumaya — Your Pocket of Peace",
    template: "%s | Sumaya",
  },
  description:
    "Sumaya is a free meditation and breathing exercise app for iOS and Android. Find calm, manage stress, and build a daily mindfulness habit.",
  openGraph: {
    type: "website",
    siteName: "Sumaya",
    images: [{ url: "/icon.png", width: 1024, height: 1024, alt: "Sumaya" }],
  },
  twitter: {
    card: "summary",
    title: "Sumaya — Your Pocket of Peace",
    description:
      "Free meditation and breathing exercises for everyday life. Available on iOS and Android.",
    images: ["/icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
