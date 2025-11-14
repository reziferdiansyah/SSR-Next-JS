export default function Testimonials() {
    const testimonials = [
        {
            name: "Sari Wijaya",
            position: "CEO, TechStart Indonesia",
            content: "SumurBor Pro mengubah kehadiran online kami secara menyeluruh. Perhatian mereka terhadap detail dan pendekatan inovatif menghasilkan peningkatan keterlibatan pengguna sebesar 300%. Sangat direkomendasikan!",
            rating: 5,
            avatar: "SW"
        },
        {
            name: "Michael Tan",
            position: "Direktur Marketing, GrowthCo",
            content: "Bekerja dengan SumurBor Pro adalah game-changer untuk brand kami. Mereka memberikan hasil di luar ekspektasi kami, menciptakan website yang sempurna menangkap visi kami dan mendorong konversi.",
            rating: 5,
            avatar: "MT"
        },
        {
            name: "Emily Sari",
            position: "Pendiri, CreativeStudio",
            content: "Kreativitas dan keahlian teknis tim mereka tidak tertandingi. Mereka mengambil persyaratan kompleks kami dan mengubahnya menjadi website yang indah dan fungsional yang disukai klien kami.",
            rating: 5,
            avatar: "ES"
        },
        {
            name: "David Putra",
            position: "CTO, InnovateLabs",
            content: "Proses pengembangan SumurBor Pro sangat lancar. Mereka terus memberi informasi kepada kami, memberikan hasil tepat waktu, dan produk akhir melebihi semua persyaratan teknis kami.",
            rating: 5,
            avatar: "DP"
        },
        {
            name: "Lisa Permata",
            position: "Manager E-commerce, ShopSmart",
            content: "Penjualan online kami berlipat ganda setelah SumurBor Pro mendesain ulang platform e-commerce kami. Pengalaman pengguna sekarang sangat lancar, dan pelanggan kami tidak bisa berhenti memujinya.",
            rating: 5,
            avatar: "LP"
        },
        {
            name: "Robert Kim",
            position: "Pendiri Startup, NextGen",
            content: "Sebagai startup, kami membutuhkan partner yang memahami visi dan keterbatasan anggaran kami. SumurBor Pro memberikan produk kelas dunia yang membantu kami mendapatkan putaran pendanaan berikutnya.",
            rating: 5,
            avatar: "RK"
        }
    ];

    const stats = [
        { number: "500+", label: "Proyek Selesai" },
        { number: "98%", label: "Kepuasan Klien" },
        { number: "50+", label: "Klien Puas" },
        { number: "24/7", label: "Dukungan Tersedia" }
    ];

    return (
        <div className="bg-gradient-to-br from-blue-50 to-green-50 min-h-screen">
            <div className="container mx-auto px-4 py-16">
                {/* Hero Section */}
                <section className="text-center mb-16">
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                        Apa Kata Klien Kami
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        Jangan hanya percaya kata kami. Berikut adalah apa yang dikatakan klien puas kami tentang bekerja dengan SumurBor Pro.
                    </p>
                </section>

                {/* Stats Section */}
                <section className="mb-16">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                                <div className="text-gray-600 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Testimonials Grid */}
                <section className="mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="flex items-center mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                                        {testimonial.avatar}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                                        <div className="text-sm text-gray-600">{testimonial.position}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Case Studies Section */}
                <section className="mb-16">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Cerita Sukses</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">TechStart Indonesia - Pertumbuhan 300%</h3>
                            <p className="text-gray-600 mb-6">
                                TechStart Indonesia datang kepada kami dengan website yang sudah ketinggalan zaman dan tidak mengkonversi pengunjung. Kami mendesain ulang seluruh kehadiran digital mereka,
                                menerapkan prinsip UX modern dan sistem manajemen konten yang kuat.
                            </p>
                            <div className="grid grid-cols-3 gap-4 text-center">
                                <div>
                                    <div className="text-2xl font-bold text-blue-600">300%</div>
                                    <div className="text-sm text-gray-600">Peningkatan Traffic</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-blue-600">150%</div>
                                    <div className="text-sm text-gray-600">Tingkat Konversi</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-blue-600">95%</div>
                                    <div className="text-sm text-gray-600">Kepuasan Pengguna</div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">ShopSmart - Revolusi E-commerce</h3>
                            <p className="text-gray-600 mb-6">
                                ShopSmart membutuhkan overhaul e-commerce yang lengkap. Kami membangun platform kustom dengan fitur-fitur canggih,
                                integrasi pembayaran yang lancar, dan desain mobile-first yang meningkatkan penjualan mereka secara dramatis.
                            </p>
                            <div className="grid grid-cols-3 gap-4 text-center">
                                <div>
                                    <div className="text-2xl font-bold text-blue-600">200%</div>
                                    <div className="text-sm text-gray-600">Peningkatan Penjualan</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-blue-600">75%</div>
                                    <div className="text-sm text-gray-600">Traffic Mobile</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-blue-600">50%</div>
                                    <div className="text-sm text-gray-600">Konversi Keranjang</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Trust Indicators */}
                <section className="mb-16">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Dipercaya Oleh Pemimpin Industri</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {['Perusahaan A', 'Perusahaan B', 'Perusahaan C', 'Perusahaan D', 'Perusahaan E', 'Perusahaan F', 'Perusahaan G', 'Perusahaan H'].map((company, index) => (
                            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-lg">{company.charAt(0)}</span>
                                </div>
                                <div className="font-semibold text-gray-900">{company}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="text-center bg-gradient-to-r from-blue-600 to-green-600 text-white py-16 rounded-3xl">
                    <h2 className="text-4xl font-bold mb-6">Siap Bergabung dengan Cerita Sukses Kami?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Mari buat cerita sukses Anda. Hubungi kami hari ini untuk membahas bagaimana kami dapat membantu mentransformasi bisnis Anda.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                            Mulai Proyek Anda
                        </button>
                        <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                            Lihat Pekerjaan Kami
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
}
