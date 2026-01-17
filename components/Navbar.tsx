'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { name: 'Why ORIX', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Safety', href: '#safety' },
    { name: 'Community', href: '#community' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 20);
    });

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <img src="/orix-logo.jpg" alt="ORIX Logo" className="h-10 w-auto rounded-md" />
                    <span className="text-2xl font-serif font-bold text-white tracking-wide">ORIX</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm text-gray-300 hover:text-primary transition-colors font-medium"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="#hero"
                        className="px-5 py-2.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300"
                    >
                        Join Waitlist
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white hover:text-primary transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-20 left-0 right-0 bg-black border-b border-white/10 p-6 md:hidden flex flex-col space-y-4"
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-lg text-gray-300 hover:text-primary transition-colors font-medium"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="#hero"
                        onClick={() => setIsOpen(false)}
                        className="w-full text-center px-5 py-3 bg-primary text-white text-lg font-semibold rounded-lg hover:bg-red-600 transition-colors"
                    >
                        Join Waitlist
                    </Link>
                </motion.div>
            )}
        </nav>
    );
}
