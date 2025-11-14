import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FERDIBOR - Layanan Pemboran Sumur Profesional",
  description: "Layanan pemboran sumur ahli untuk kebutuhan residensial, komersial, dan industri. Solusi pemboran berkualitas dengan peralatan modern.",
  keywords: "pemboran sumur, sumur bor, layanan sumur, air bersih, pemboran profesional, sumur rumah, sumur komersial, perawatan sumur",
  authors: [{ name: "FERDIBOR" }],
  creator: "FERDIBOR",
  publisher: "FERDIBOR",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ferdibor.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "FERDIBOR - Layanan Pemboran Sumur Profesional",
    description: "Layanan pemboran sumur ahli untuk kebutuhan residensial, komersial, dan industri. Solusi pemboran berkualitas dengan peralatan modern.",
    url: "https://ferdibor.com",
    siteName: "FERDIBOR",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FERDIBOR - Layanan Pemboran Sumur Profesional",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FERDIBOR - Layanan Pemboran Sumur Profesional",
    description: "Layanan pemboran sumur ahli untuk kebutuhan residensial, komersial, dan industri. Solusi pemboran berkualitas dengan peralatan modern.",
    images: ["/og-image.jpg"],
    creator: "@ferdibor",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
