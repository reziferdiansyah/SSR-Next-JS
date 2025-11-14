export default function About() {
    return (
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
            <div className="container mx-auto px-4 py-16">
                {/* Hero Section */}
                <section className="text-center mb-16">
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                        Tentang SumurBor Pro
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        Pelajari tentang keahlian kami dalam pemboran sumur, komitmen kami terhadap kualitas, dan dedikasi kami untuk menyediakan solusi air bersih.
                    </p>
                </section>

                {/* Story Section */}
                <section className="mb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Cerita Kami</h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Didirikan pada tahun 2024, SumurBor Pro dimulai dengan misi untuk menyediakan layanan pemboran sumur yang handal dan profesional
                                kepada masyarakat yang membutuhkan solusi air bersih. Pendiri kami menyadari pentingnya akses terhadap air bersih
                                dan kebutuhan akan layanan pemboran ahli.
                            </p>
                            <p className="text-lg text-gray-600 mb-6">
                                Dimulai dengan tim kecil ahli pembor dan geolog, kami telah berkembang menjadi nama terpercaya dalam pemboran sumur.
                                Kami mempertahankan komitmen kami terhadap keselamatan, kualitas, dan tanggung jawab lingkungan di setiap proyek yang kami lakukan.
                            </p>
                            <p className="text-lg text-gray-600">
                                Hari ini, kami telah berhasil menyelesaikan ratusan proyek pemboran, melayani pemilik rumah, properti komersial,
                                dan operasi pertanian. Rekam jejak kami berbicara sendiri dalam menyediakan solusi air yang handal.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
                                    <div className="text-gray-600">Wells Drilled</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-green-600 mb-2">150+</div>
                                    <div className="text-gray-600">Happy Customers</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                                    <div className="text-gray-600">Emergency Service</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
                                    <div className="text-gray-600">Success Rate</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="mb-16">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Nilai-Nilai Kami</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Safety First</h3>
                            <p className="text-gray-600">Safety is our top priority in every drilling operation, following strict industry standards.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
                            <p className="text-gray-600">Our certified drillers and geologists bring decades of combined experience to every project.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Modern Equipment</h3>
                            <p className="text-gray-600">We use state-of-the-art drilling rigs and technology for efficient, reliable results.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Environmental Care</h3>
                            <p className="text-gray-600">We prioritize environmental protection and sustainable drilling practices in all our work.</p>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="mb-16">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Temui Tim Kami</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                            <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Ahmad Santoso</h3>
                            <p className="text-blue-600 mb-2">CEO & Founder</p>
                            <p className="text-gray-600">Certified driller with 15+ years experience in water well drilling.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                            <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Dr. Maya Sari</h3>
                            <p className="text-blue-600 mb-2">Chief Geologist</p>
                            <p className="text-gray-600">PhD in Geology, specializes in groundwater exploration and well site selection.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                            <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Budi Rahman</h3>
                            <p className="text-blue-600 mb-2">Operations Manager</p>
                            <p className="text-gray-600">Experienced drilling supervisor ensuring safety and quality in every operation.</p>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="text-center bg-gradient-to-r from-blue-600 to-green-600 text-white py-16 rounded-3xl">
                    <h2 className="text-4xl font-bold mb-6">Butuh Pemboran Sumur Profesional?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Percayakan SumurBor Pro untuk layanan pemboran sumur yang handal dan profesional. Dapatkan konsultasi gratis Anda hari ini.
                    </p>
                    <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                        Dapatkan Penawaran Gratis
                    </button>
                </section>
            </div>
        </div>
    );
}
