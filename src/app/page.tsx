export const metadata = {
  title: "FERDIBOR - Layanan Pemboran Sumur Profesional | Solusi Air Bersih Terpercaya",
  description: "Layanan pemboran sumur profesional untuk solusi air bersih. Kami menyediakan layanan pemboran yang handal, efisien untuk kebutuhan residensial, komersial, dan pertanian. Dapatkan penawaran gratis hari ini!",
  keywords: "pemboran sumur Jakarta, layanan sumur bor profesional, sumur air bersih, pemboran sumur rumah, sumur komersial, perawatan sumur, konsultasi air gratis",
  openGraph: {
    title: "FERDIBOR - Layanan Pemboran Sumur Profesional",
    description: "Layanan pemboran sumur profesional untuk solusi air bersih. Kami menyediakan layanan pemboran yang handal, efisien untuk kebutuhan residensial, komersial, dan pertanian.",
    url: "https://ferdibor.com",
    siteName: "FERDIBOR",
    images: [
      {
        url: "/og-home.jpg",
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
    description: "Layanan pemboran sumur profesional untuk solusi air bersih. Kami menyediakan layanan pemboran yang handal, efisien untuk kebutuhan residensial, komersial, dan pertanian.",
    images: ["/og-home.jpg"],
  },
  alternates: {
    canonical: "https://ferdibor.com",
  },
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "FERDIBOR",
    "url": "https://ferdibor.com",
    "logo": "https://ferdibor.com/logo.png",
    "description": "Layanan pemboran sumur profesional untuk solusi air bersih",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Sumur Bor No. 123",
      "addressLocality": "Jakarta",
      "addressRegion": "DKI Jakarta",
      "postalCode": "12345",
      "addressCountry": "ID"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+62-21-555-0123",
      "contactType": "customer service",
      "availableLanguage": "Indonesian"
    },
    "sameAs": [
      "https://www.facebook.com/ferdibor",
      "https://www.instagram.com/ferdibor",
      "https://www.linkedin.com/company/ferdibor"
    ]
  }
};

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen text-black">
      Home Page
    </div>
  );
}
