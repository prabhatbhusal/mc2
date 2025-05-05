import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import { Orbitron, Carrois_Gothic_SC } from "next/font/google";
import Contact from "@/components/page/landing/contact";
import MapSection from "@/components/page/landing/MapSection";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-orbitron",
});

const carroisGothicSC = Carrois_Gothic_SC({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-carroisGothicSC",
});

export const metadata: Metadata = {
  title: {
    default: 'Polk Roadside',
    template: '%s | Polk Roadside',
  },
  description: 'Polk Roadside',
  keywords: ['car service', 'car', 'interior design', 'cars'],
  authors: [{ name: 'Your Name' }],
  creator: 'Polk Roadside',
  metadataBase: new URL('https://polkroadsideassist.com/'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://polkroadsideassist.com/',
    siteName: 'Polk Roadside',
    title: 'Polk Roadside',
    description: 'Polk Roadside',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Polk Roadside',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="/icons/favicon.ico" href="/icons/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-TMCR696C18');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Polk Roadside',
              url: 'https://polkroadsideassist.com/',
              logo: '/images/logo.png',
            }),
          }}
        />
      </head>

      <body
        className={`${orbitron.variable} ${carroisGothicSC.variable} ${orbitron.className} ${carroisGothicSC.className} antialiased`}
      >
        <Navbar />
        {children}
        
        <MapSection />
        <Footer />
      </body>
    </html>
  );
}
