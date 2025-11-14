'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <footer className="bg-white text-gray-900 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 right-0 w-24 h-24 bg-blue-400 rounded-full translate-x-12"></div>
                <div className="absolute bottom-0 left-1/4 w-20 h-20 bg-blue-300 rounded-full"></div>
                <div className="absolute bottom-10 right-1/3 w-16 h-16 bg-blue-200 rounded-full"></div>
            </div>

            <div className="container mx-auto px-4 py-12 relative z-10">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center mb-4">
                            <div>
                                <Image
                                    src="/images/logo.png"
                                    alt="FERDIBOR Logo"
                                    width={100}
                                    height={100}
                                    className="rounded-lg"
                                />
                            </div>
                            <span className="text-3xl font-bold ml-2 text-[#154367]">FERDI</span>
                            <span className="text-3xl font-bold text-[#cd9f59]">BOR</span>
                        </div>
                        <p className="text-black mb-6 leading-relaxed">
                            Layanan pemboran sumur profesional sejak 2024. Kami berkomitmen memberikan solusi air bersih berkualitas tinggi untuk rumah tangga dan bisnis Anda.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-bold mb-6 text-black">Tautan Cepat</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-black hover:text-blue-500 hover:translate-x-2 transition-all duration-300 flex items-center group">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3  transition-colors"></span>
                                    Beranda
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-black hover:text-blue-500 hover:translate-x-2 transition-all duration-300 flex items-center group">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3  transition-colors"></span>
                                    Layanan Kami
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-black hover:text-blue-500 hover:translate-x-2 transition-all duration-300 flex items-center group">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3  transition-colors"></span>
                                    Tentang Kami
                                </Link>
                            </li>
                            <li>
                                <Link href="/testimonials" className="text-black hover:text-blue-500 hover:translate-x-2 transition-all duration-300 flex items-center group">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3  transition-colors"></span>
                                    Testimoni
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-black hover:text-blue-500 hover:translate-x-2 transition-all duration-300 flex items-center group">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3  transition-colors"></span>
                                    Hubungi Kami
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-xl font-bold mb-6 text-black">Layanan Kami</h4>
                        <ul className="space-y-2">
                            <li className="flex items-center group">
                                <svg className="w-4 h-4 text-blue-400 mr-3  transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-black group-hover:text-blue-500 transition-colors">Sumur Rumah Tangga</span>
                            </li>
                            <li className="flex items-center group">
                                <svg className="w-4 h-4 text-blue-400 mr-3  transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-black group-hover:text-blue-500 transition-colors">Sumur Komersial</span>
                            </li>
                            <li className="flex items-center group">
                                <svg className="w-4 h-4 text-blue-400 mr-3  transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-black group-hover:text-blue-500 transition-colors">Perawatan Sumur</span>
                            </li>
                            <li className="flex items-center group">
                                <svg className="w-4 h-4 text-blue-400 mr-3  transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-black group-hover:text-blue-500 transition-colors">Konsultasi Air</span>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-xl font-bold mb-6 text-black">Info Kontak</h4>
                        <div className="space-y-1">
                            <div className="flex items-start">
                                <div className="w-8 h-8 bg-gradient-to-r bg-blue-500 rounded-full flex items-center justify-center mr-3 mt-1">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className='mt-2'>
                                    <p className="text-black font-medium">Email</p>
                                    <p className="text-white">info@ferdibor.com</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="w-8 h-8 bg-gradient-to-r bg-blue-500 rounded-full flex items-center justify-center mr-3 mt-1">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div className='mt-2'>
                                    <p className="text-black font-medium">Telepon</p>
                                    <p className="text-white">(021) 123-4567</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="w-8 h-8 bg-gradient-to-r bg-blue-500 rounded-full flex items-center justify-center mr-3 mt-1">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div className='mt-2'>
                                    <p className="text-black font-medium">Alamat</p>
                                    <p className="text-white">Jl. Sumur Bor No. 123<br />Jakarta, Indonesia</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-700 pt-8">
                    <div className="items-center">
                        <p className="text-gray-400 text-center mb-2 md:mb-0">
                            &copy; 2024 FERDIBOR. Seluruh hak cipta dilindungi.
                        </p>
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            {showButton && (
                <button
                    className="fixed bottom-4 right-4 z-50 bg-blue-800 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                    aria-label="Scroll to Top"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7"></path>
                    </svg>
                </button>
            )}
        </footer>
    );
}
