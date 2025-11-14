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
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
            <div className="container mx-auto px-4 py-16">
                {/* Hero Section */}
                <section className="text-center mb-16">
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                        Hubungi FERDIBOR
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        Siap mendapatkan solusi air bersih untuk properti Anda? Hubungi kami hari ini untuk layanan pemboran sumur profesional.
                    </p>
                </section>

                {/* Contact Form & Info */}
                <section className="mb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Kirim Pesan kepada Kami</h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                                            Nama Depan
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                                            Nama Belakang
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                        Subjek
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                                        placeholder="Pertanyaan Pemboran Sumur"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Pesan
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={6}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors resize-none"
                                        placeholder="Ceritakan tentang kebutuhan air Anda dan detail properti..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                                >
                                    Kirim Pesan
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="bg-white p-8 rounded-2xl shadow-lg">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Hubungi Kami</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mr-4">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900">Email</p>
                                            <p className="text-gray-600">info@ferdibor.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mr-4">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900">Phone</p>
                                            <p className="text-gray-600">(021) 555-0123</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mr-4">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900">Address</p>
                                            <p className="text-gray-600">Jl. Sumur Bor No. 123, Jakarta Selatan, Indonesia</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-lg">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Jam Kerja</h3>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Senin - Jumat</span>
                                        <span className="font-semibold text-gray-900">09:00 - 18:00</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Sabtu</span>
                                        <span className="font-semibold text-gray-900">10:00 - 16:00</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Minggu</span>
                                        <span className="font-semibold text-gray-900">Tutup</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-lg">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Ikuti Kami</h3>
                                <div className="flex space-x-4">
                                    <a href="#" className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center text-white hover:shadow-lg transform hover:scale-110 transition-all duration-300">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center text-white hover:shadow-lg transform hover:scale-110 transition-all duration-300">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center text-white hover:shadow-lg transform hover:scale-110 transition-all duration-300">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Map Section */}
                <section className="mb-16">
                    <div className="bg-white p-8 rounded-2xl shadow-lg">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Temukan Kami</h2>
                        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
                            <div className="text-center">
                                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                </svg>
                                <p className="text-gray-500">Interactive map would be embedded here</p>
                                <p className="text-sm text-gray-400 mt-2">Jl. Sumur Bor No. 123, Jakarta Selatan, Indonesia</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section>
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Pertanyaan yang Sering Diajukan</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-2xl shadow-lg">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Seberapa dalam sumur yang bisa Anda bor?</h3>
                            <p className="text-gray-600">Kami dapat membor sumur hingga kedalaman 300 meter, tergantung pada kondisi geologi dan tingkat air tanah.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-lg">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Apakah Anda menyediakan layanan perawatan sumur?</h3>
                            <p className="text-gray-600">Ya, kami menawarkan perawatan sumur yang komprehensif, perbaikan, dan peningkatan untuk memastikan sumur Anda tetap produktif.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-lg">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Berapa lama waktu pemboran?</h3>
                            <p className="text-gray-600">Sumur rumah tangga biasanya memakan waktu 3-7 hari, sedangkan proyek komersial yang lebih besar mungkin memakan waktu 1-3 minggu.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-lg">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Apakah Anda menjamin kualitas air?</h3>
                            <p className="text-gray-600">Kami menguji kualitas air dan dapat merekomendasikan sistem filtrasi yang sesuai untuk air minum yang aman.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
