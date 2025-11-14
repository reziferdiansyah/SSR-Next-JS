'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold hover:text-green-200 transition-colors">
                    SumurBor Pro
                </Link>
                <nav className="hidden md:flex space-x-8">
                    <Link href="/" className="hover:text-green-200 transition-colors">Beranda</Link>
                    <Link href="/about" className="hover:text-green-200 transition-colors">Tentang</Link>
                    <Link href="/contact" className="hover:text-green-200 transition-colors">Kontak</Link>
                    <Link href="/testimonials" className="hover:text-green-200 transition-colors">Testimoni</Link>
                </nav>
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-gradient-to-r from-blue-600 to-green-600 border-t border-green-500">
                    <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                        <Link
                            href="/"
                            className="hover:text-green-200 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Beranda
                        </Link>
                        <Link
                            href="/about"
                            className="hover:text-green-200 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Tentang
                        </Link>
                        <Link
                            href="/contact"
                            className="hover:text-green-200 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Kontak
                        </Link>
                        <Link
                            href="/testimonials"
                            className="hover:text-green-200 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Testimoni
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
