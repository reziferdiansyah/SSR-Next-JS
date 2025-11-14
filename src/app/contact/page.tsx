export const metadata = {
    title: "Hubungi FERDIBOR - Konsultasi Pemboran Sumur Gratis | Penawaran Harga",
    description: "Hubungi FERDIBOR untuk layanan pemboran sumur profesional. Dapatkan konsultasi gratis, penawaran harga, dan informasi lengkap tentang solusi air bersih untuk properti Anda. Tim ahli siap membantu!",
    keywords: "hubungi FERDIBOR, konsultasi pemboran sumur gratis, penawaran harga sumur bor, kontak layanan sumur, informasi pemboran sumur Jakarta, solusi air bersih",
    openGraph: {
        title: "Hubungi FERDIBOR - Konsultasi Pemboran Sumur Gratis",
        description: "Hubungi FERDIBOR untuk layanan pemboran sumur profesional. Dapatkan konsultasi gratis, penawaran harga, dan informasi lengkap tentang solusi air bersih untuk properti Anda.",
        url: "https://ferdibor.com/contact",
        siteName: "FERDIBOR",
        images: [
            {
                url: "/og-contact.jpg",
                width: 1200,
                height: 630,
                alt: "Hubungi FERDIBOR - Konsultasi Gratis",
            },
        ],
        locale: "id_ID",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Hubungi FERDIBOR - Konsultasi Pemboran Sumur Gratis",
        description: "Hubungi FERDIBOR untuk layanan pemboran sumur profesional. Dapatkan konsultasi gratis, penawaran harga, dan informasi lengkap tentang solusi air bersih.",
        images: ["/og-contact.jpg"],
    },
    alternates: {
        canonical: "https://ferdibor.com/contact",
    },
    structuredData: {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Hubungi FERDIBOR",
        "description": "Halaman kontak untuk layanan pemboran sumur profesional",
        "url": "https://ferdibor.com/contact",
        "mainEntity": {
            "@type": "Organization",
            "name": "FERDIBOR",
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+62-21-555-0123",
                "contactType": "customer service",
                "areaServed": "ID",
                "availableLanguage": "Indonesian",
                "contactOption": "TollFree"
            },
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jl. Sumur Bor No. 123",
                "addressLocality": "Jakarta",
                "addressRegion": "DKI Jakarta",
                "postalCode": "12345",
                "addressCountry": "ID"
            }
        }
    }
};

export default function Contact() {
    return (
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen text-black">
            Kontak Kami
        </div>
    );
}
