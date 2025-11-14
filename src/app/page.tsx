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
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent leading-tight">
            FERDIBOR
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Layanan pemboran sumur profesional untuk solusi air bersih. Kami menyediakan layanan pemboran yang handal,
            efisien untuk kebutuhan residensial, komersial, dan pertanian.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Dapatkan Penawaran Gratis
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300">
              Layanan Kami
            </button>
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 leading-tight">Layanan Pemboran Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-snug">Sumur Rumah Tangga</h3>
              <p className="text-gray-700 text-base leading-relaxed">Solusi air bersih untuk rumah dan keluarga. Kami membor sumur untuk air minum, irigasi, dan penggunaan rumah tangga.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-snug">Sumur Komersial</h3>
              <p className="text-gray-700 text-base leading-relaxed">Pemboran skala besar untuk bisnis, pertanian, dan fasilitas industri. Pasokan air yang handal untuk operasional.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-snug">Perawatan Sumur</h3>
              <p className="text-gray-700 text-base leading-relaxed">Perawatan rutin, perbaikan, dan peningkatan untuk menjaga sumur Anda beroperasi efisien dan aman.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-green-600 text-white py-12 rounded-3xl">
          <h2 className="text-3xl font-bold mb-6 leading-tight">Butuh Solusi Air Bersih?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Dapatkan penawaran gratis hari ini dan temukan bagaimana FERDIBOR dapat menyediakan solusi air yang handal untuk properti Anda.
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            Dapatkan Penawaran Gratis
          </button>
        </section>
      </div>
    </div>
  );
}
