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
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
            <div className="container mx-auto px-4 py-16">
                {/* Hero Section */}
                <section className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent leading-tight">
                        Tentang FERDIBOR
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Pelajari tentang keahlian kami dalam pemboran sumur, komitmen kami terhadap kualitas, dan dedikasi kami untuk menyediakan solusi air bersih.
                    </p>
                </section>

                {/* Story Section */}
                <section className="mb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">Cerita Kami</h2>
                            <p className="text-base text-gray-700 mb-6 leading-relaxed">
                                Didirikan pada tahun 2024, FERDIBOR dimulai dengan misi untuk menyediakan layanan pemboran sumur yang handal dan profesional
                                kepada masyarakat yang membutuhkan solusi air bersih. Pendiri kami menyadari pentingnya akses terhadap air bersih
                                dan kebutuhan akan layanan pemboran ahli.
                            </p>
                            <p className="text-base text-gray-700 mb-6 leading-relaxed">
                                Dimulai dengan tim kecil ahli pembor dan geolog, kami telah berkembang menjadi nama terpercaya dalam pemboran sumur.
                                Kami mempertahankan komitmen kami terhadap keselamatan, kualitas, dan tanggung jawab lingkungan di setiap proyek yang kami lakukan.
                            </p>
                            <p className="text-base text-gray-700 leading-relaxed">
                                Hari ini, kami telah berhasil menyelesaikan ratusan proyek pemboran, melayani pemilik rumah, properti komersial,
                                dan operasi pertanian. Rekam jejak kami berbicara sendiri dalam menyediakan solusi air yang handal.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-lg">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-600 mb-2 leading-tight">200+</div>
                                    <div className="text-gray-700 text-sm leading-relaxed">Sumur Dibor</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-green-600 mb-2 leading-tight">150+</div>
                                    <div className="text-gray-700 text-sm leading-relaxed">Pelanggan Puas</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-600 mb-2 leading-tight">24/7</div>
                                    <div className="text-gray-700 text-sm leading-relaxed">Layanan Darurat</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-green-600 mb-2 leading-tight">100%</div>
                                    <div className="text-gray-700 text-sm leading-relaxed">Tingkat Keberhasilan</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 leading-tight">Nilai-Nilai Kami</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                            <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">Safety First</h3>
                            <p className="text-gray-700 text-sm leading-relaxed">Safety is our top priority in every drilling operation, following strict industry standards.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                            <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">Expert Team</h3>
                            <p className="text-gray-700 text-sm leading-relaxed">Our certified drillers and geologists bring decades of combined experience to every project.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                            <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">Modern Equipment</h3>
                            <p className="text-gray-700 text-sm leading-relaxed">We use state-of-the-art drilling rigs and technology for efficient, reliable results.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                            <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">Environmental Care</h3>
                            <p className="text-gray-700 text-sm leading-relaxed">We prioritize environmental protection and sustainable drilling practices in all our work.</p>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 leading-tight">Temui Tim Kami</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">Ahmad Santoso</h3>
                            <p className="text-blue-600 mb-2 text-sm">CEO & Founder</p>
                            <p className="text-gray-700 text-sm leading-relaxed">Certified driller with 15+ years experience in water well drilling.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">Dr. Maya Sari</h3>
                            <p className="text-blue-600 mb-2 text-sm">Chief Geologist</p>
                            <p className="text-gray-700 text-sm leading-relaxed">PhD in Geology, specializes in groundwater exploration and well site selection.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">Budi Rahman</h3>
                            <p className="text-blue-600 mb-2 text-sm">Operations Manager</p>
                            <p className="text-gray-700 text-sm leading-relaxed">Experienced drilling supervisor ensuring safety and quality in every operation.</p>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="text-center bg-gradient-to-r from-blue-600 to-green-600 text-white py-12 rounded-3xl">
                    <h2 className="text-3xl font-bold mb-6 leading-tight">Butuh Pemboran Sumur Profesional?</h2>
                    <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                        Percayakan FERDIBOR untuk layanan pemboran sumur yang handal dan profesional. Dapatkan konsultasi gratis Anda hari ini.
                    </p>
                    <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                        Dapatkan Penawaran Gratis
                    </button>
                </section>
            </div>
        </div>
    );
}
