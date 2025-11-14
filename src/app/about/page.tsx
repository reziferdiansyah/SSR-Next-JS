export const metadata = {
    title: "Tentang FERDIBOR - Ahli Pemboran Sumur Terpercaya | Tim Profesional",
    description: "Pelajari tentang keahlian kami dalam pemboran sumur, komitmen kami terhadap kualitas, dan dedikasi kami untuk menyediakan solusi air bersih. Tim ahli dengan pengalaman bertahun-tahun dalam layanan pemboran profesional.",
    keywords: "tentang FERDIBOR, ahli pemboran sumur, tim pemboran profesional, pengalaman pemboran sumur, komitmen kualitas sumur bor, solusi air bersih",
    openGraph: {
        title: "Tentang FERDIBOR - Ahli Pemboran Sumur Terpercaya",
        description: "Pelajari tentang keahlian kami dalam pemboran sumur, komitmen kami terhadap kualitas, dan dedikasi kami untuk menyediakan solusi air bersih. Tim ahli dengan pengalaman bertahun-tahun.",
        url: "https://ferdibor.com/about",
        siteName: "FERDIBOR",
        images: [
            {
                url: "/og-about.jpg",
                width: 1200,
                height: 630,
                alt: "Tentang FERDIBOR - Tim Ahli Pemboran Sumur",
            },
        ],
        locale: "id_ID",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Tentang FERDIBOR - Ahli Pemboran Sumur Terpercaya",
        description: "Pelajari tentang keahlian kami dalam pemboran sumur, komitmen kami terhadap kualitas, dan dedikasi kami untuk menyediakan solusi air bersih.",
        images: ["/og-about.jpg"],
    },
    alternates: {
        canonical: "https://ferdibor.com/about",
    },
    structuredData: {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "Tentang FERDIBOR",
        "description": "Pelajari tentang keahlian kami dalam pemboran sumur, komitmen kami terhadap kualitas, dan dedikasi kami untuk menyediakan solusi air bersih",
        "url": "https://ferdibor.com/about",
        "mainEntity": {
            "@type": "Organization",
            "name": "FERDIBOR",
            "description": "Layanan pemboran sumur profesional dengan tim ahli berpengalaman",
            "foundingDate": "2024",
            "numberOfEmployees": "15",
            "serviceArea": {
                "@type": "Place",
                "name": "Jakarta dan sekitarnya"
            }
        }
    }
};

export default function About() {
    return (
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen text-black">
            Tentang Kami
        </div>
    );
}
