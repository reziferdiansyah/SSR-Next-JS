export const metadata = {
    title: "Layanan Pemboran Sumur FERDIBOR - Solusi Air Bersih Komprehensif",
    description: "Jelajahi layanan pemboran sumur komprehensif FERDIBOR. Dari sumur rumah tangga hingga komersial, perawatan rutin, dan konsultasi ahli. Solusi air bersih terpercaya untuk semua kebutuhan Anda.",
    keywords: "layanan pemboran sumur, sumur rumah tangga, sumur komersial, perawatan sumur, konsultasi air bersih, layanan sumur bor profesional Jakarta",
    openGraph: {
        title: "Layanan Pemboran Sumur FERDIBOR - Solusi Air Bersih Komprehensif",
        description: "Jelajahi layanan pemboran sumur komprehensif FERDIBOR. Dari sumur rumah tangga hingga komersial, perawatan rutin, dan konsultasi ahli.",
        url: "https://ferdibor.com/services",
        siteName: "FERDIBOR",
        images: [
            {
                url: "/og-services.jpg",
                width: 1200,
                height: 630,
                alt: "Layanan Pemboran Sumur FERDIBOR",
            },
        ],
        locale: "id_ID",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Layanan Pemboran Sumur FERDIBOR - Solusi Air Bersih Komprehensif",
        description: "Jelajahi layanan pemboran sumur komprehensif FERDIBOR. Dari sumur rumah tangga hingga komersial, perawatan rutin, dan konsultasi ahli.",
        images: ["/og-services.jpg"],
    },
    alternates: {
        canonical: "https://ferdibor.com/services",
    },
    structuredData: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Layanan Pemboran Sumur FERDIBOR",
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
    const services = [
        {
            title: "Sumur Rumah Tangga",
            description: "Solusi air bersih untuk rumah dan keluarga. Kami membor sumur untuk air minum, irigasi, dan penggunaan rumah tangga dengan kedalaman optimal.",
            features: ["Kedalaman hingga 100m", "Kualitas air terjamin", "Garansi 2 tahun", "Konsultasi gratis"],
            icon: "🏠",
            price: "Mulai dari Rp 15.000.000"
        },
        {
            title: "Sumur Komersial",
            description: "Pemboran skala besar untuk bisnis, pertanian, dan fasilitas industri. Pasokan air yang handal untuk operasional perusahaan Anda.",
            features: ["Kedalaman hingga 300m", "Debit air tinggi", "Sistem monitoring", "Maintenance paket"],
            icon: "🏢",
            price: "Mulai dari Rp 50.000.000"
        },
        {
            title: "Perawatan Sumur",
            description: "Perawatan rutin, perbaikan, dan peningkatan untuk menjaga sumur Anda beroperasi efisien dan aman. Layanan emergency 24/7.",
            features: ["Pembersihan rutin", "Perbaikan pompa", "Peningkatan debit", "Emergency service"],
            icon: "🔧",
            price: "Mulai dari Rp 500.000"
        },
        {
            title: "Konsultasi Air Bersih",
            description: "Konsultasi ahli untuk analisis tanah, survey geologi, dan rekomendasi solusi air terbaik untuk properti Anda.",
            features: ["Survey geologi", "Analisis tanah", "Rekomendasi teknis", "Laporan lengkap"],
            icon: "📊",
            price: "Rp 1.000.000"
        },
        {
            title: "Sistem Filtrasi Air",
            description: "Instalasi sistem filtrasi dan treatment air untuk memastikan kualitas air yang aman diminum dan digunakan.",
            features: ["Filtrasi RO", "Softener air", "UV sterilization", "Monitoring kualitas"],
            icon: "💧",
            price: "Mulai dari Rp 5.000.000"
        },
        {
            title: "Pengeboran Darurat",
            description: "Layanan pengeboran emergency untuk situasi krisis air. Tim siaga 24/7 siap menangani kebutuhan mendadak.",
            features: ["Response < 24 jam", "Tim dedicated", "Equipment siaga", "Prioritas tinggi"],
            icon: "🚨",
            price: "Biaya khusus"
        }
    ];

    return (
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
            <div className="container mx-auto px-4 py-16">
                {/* Hero Section */}
                <section className="text-center mb-16">
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                        Layanan Kami
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        Solusi pemboran sumur komprehensif untuk semua kebutuhan air bersih Anda. Dari rumah tangga hingga industri, kami siap melayani dengan profesionalisme tinggi.
                    </p>
                </section>

                {/* Services Grid */}
                <section className="mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="text-6xl mb-6">{service.icon}</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                                <p className="text-gray-600 mb-6">{service.description}</p>

                                <div className="mb-6">
                                    <h4 className="font-semibold text-gray-900 mb-3">Fitur Utama:</h4>
                                    <ul className="space-y-2">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-sm text-gray-600">
                                                <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="border-t pt-4">
                                    <div className="text-lg font-bold text-blue-600 mb-4">{service.price}</div>
                                    <button className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                                        Dapatkan Penawaran
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Process Section */}
                <section className="mb-16">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Proses Kerja Kami</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-bold text-xl">1</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Konsultasi</h3>
                            <p className="text-gray-600">Survey lokasi dan analisis kebutuhan air Anda</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-bold text-xl">2</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Perencanaan</h3>
                            <p className="text-gray-600">Desain teknis dan perijinan pemboran</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-bold text-xl">3</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Pemboran</h3>
                            <p className="text-gray-600">Eksekusi pemboran dengan peralatan modern</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-bold text-xl">4</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Testing & Handover</h3>
                            <p className="text-gray-600">Pengujian kualitas air dan serah terima</p>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="text-center bg-gradient-to-r from-blue-600 to-green-600 text-white py-16 rounded-3xl">
                    <h2 className="text-4xl font-bold mb-6">Siap Memulai Proyek Anda?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Dapatkan konsultasi gratis dan penawaran harga terbaik untuk layanan pemboran sumur Anda. Tim ahli kami siap membantu mewujudkan solusi air bersih yang Anda butuhkan.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                            Konsultasi Gratis
                        </button>
                        <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                            Lihat Portofolio
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
}
