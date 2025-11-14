export const metadata = {
    title: "Layanan - Solusi Air Bersih Komprehensif",
    description: "Jelajahi layanan pemboran sumur komprehensif FERDIBOR. Dari sumur rumah tangga hingga komersial, perawatan rutin, dan konsultasi ahli. Solusi air bersih terpercaya untuk semua kebutuhan Anda.",
    keywords: "layanan pemboran sumur, sumur rumah tangga, sumur komersial, perawatan sumur, konsultasi air bersih, layanan sumur bor profesional Jakarta",
    openGraph: {
        title: "Layanan - Solusi Air Bersih Komprehensif",
        description: "Jelajahi layanan pemboran sumur komprehensif FERDIBOR. Dari sumur rumah tangga hingga komersial, perawatan rutin, dan konsultasi ahli.",
        url: "https://ferdibor.com/services",
        siteName: "FERDIBOR",
        images: [
            {
                url: "/og-services.jpg",
                width: 1200,
                height: 630,
                alt: "Layanan",
            },
        ],
        locale: "id_ID",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Layanan - Solusi Air Bersih Komprehensif",
        description: "Jelajahi layanan pemboran sumur komprehensif FERDIBOR. Dari sumur rumah tangga hingga komersial, perawatan rutin, dan konsultasi ahli.",
        images: ["/og-services.jpg"],
    },
    alternates: {
        canonical: "https://ferdibor.com/services",
    },
    structuredData: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Layanan",
        "description": "Layanan pemboran sumur profesional dan komprehensif",
        "url": "https://ferdibor.com/services",
        "provider": {
            "@type": "Organization",
            "name": "FERDIBOR"
        },
        "serviceType": "Well Drilling Services",
        "areaServed": {
            "@type": "Place",
            "name": "Indonesia"
        }
    }
};

export default function Services() {


    return (
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen text-black">
            Layanan Kami
        </div>
    );
}
