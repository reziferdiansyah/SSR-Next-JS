export const metadata = {
    title: "Testimoni - Cerita Sukses Pemboran Sumur | Ulasan Pelanggan",
    description: "Baca testimoni klien puas FERDIBOR. Lihat bagaimana kami membantu ribuan pelanggan mendapatkan solusi air bersih dengan layanan pemboran sumur profesional dan terpercaya. Pengalaman nyata dari pelanggan kami.",
    keywords: "testimoni FERDIBOR, ulasan pelanggan sumur bor, cerita sukses pemboran sumur, klien puas layanan sumur, review pemboran profesional, pengalaman pelanggan air bersih",
    openGraph: {
        title: "Testimoni - Cerita Sukses Pemboran Sumur",
        description: "Baca testimoni klien puas FERDIBOR. Lihat bagaimana kami membantu ribuan pelanggan mendapatkan solusi air bersih dengan layanan pemboran sumur profesional dan terpercaya.",
        url: "https://ferdibor.com/testimonials",
        siteName: "FERDIBOR",
        images: [
            {
                url: "/og-testimonials.jpg",
                width: 1200,
                height: 630,
                alt: "Testimoni - Cerita Sukses",
            },
        ],
        locale: "id_ID",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Testimoni - Cerita Sukses Pemboran Sumur",
        description: "Baca testimoni klien puas FERDIBOR. Lihat bagaimana kami membantu ribuan pelanggan mendapatkan solusi air bersih dengan layanan pemboran sumur profesional.",
        images: ["/og-testimonials.jpg"],
    },
    alternates: {
        canonical: "https://ferdibor.com/testimonials",
    },
    structuredData: {
        "@context": "https://schema.org",
        "@type": "Review",
        "name": "Testimoni",
        "description": "Koleksi testimoni dan ulasan dari klien puas FERDIBOR",
        "url": "https://ferdibor.com/testimonials",
        "author": {
            "@type": "Organization",
            "name": "FERDIBOR"
        },
        "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
        },
        "publisher": {
            "@type": "Organization",
            "name": "FERDIBOR"
        }
    }
};

export default function Testimonials() {


    return (
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen text-black">
            Testimoni
        </div>
    );
}
