'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-white text-gray-900 shadow-lg border-b-2 border-blue-100">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
                    <div>
                        <Image
                            src="/images/logo.png"
                            alt="FERDIBOR Logo"
                            width={55}
                            height={55}
                        />
                    </div>
                    <span className="text-3xl font-bold ml-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">FERDIBOR</span>
                </Link>
                <nav className="hidden md:flex space-x-8">
                    <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Beranda</Link>
                    <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Layanan</Link>
                    <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Tentang</Link>
                    <Link href="/testimonials" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Testimoni</Link>
                    <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Kontak</Link>
                </nav>
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-700 focus:outline-none hover:text-blue-600 transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
                    <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                        <Link
                            href="/"
                            className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                            onClick={() => setIsOpen(false)}
                        >
                            Beranda
                        </Link>
                        <Link
                            href="/services"
                            className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                            onClick={() => setIsOpen(false)}
                        >
                            Layanan
                        </Link>
                        <Link
                            href="/about"
                            className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                            onClick={() => setIsOpen(false)}
                        >
                            Tentang
                        </Link>
                        <Link
                            href="/testimonials"
                            className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                            onClick={() => setIsOpen(false)}
                        >
                            Testimoni
                        </Link>
                        <Link
                            href="/contact"
                            className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                            onClick={() => setIsOpen(false)}
                        >
                            Kontak
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
