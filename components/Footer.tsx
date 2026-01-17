import Link from 'next/link';
import { Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-surface border-t border-white/10 py-12">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                <div className="col-span-1 md:col-span-2">
                    <Link href="/" className="text-3xl font-serif font-bold text-white tracking-wide mb-4 block">
                        ORIX
                    </Link>
                    <p className="text-gray-400 max-w-sm mb-6">
                        A smarter, safer way for students to share rides.
                    </p>
                </div>

                <div>
                    <h4 className="font-bold text-white mb-6">Product</h4>
                    <ul className="space-y-4">
                        <li><Link href="#features" className="text-gray-400 hover:text-primary transition-colors">Why ORIX</Link></li>
                        <li><Link href="#how-it-works" className="text-gray-400 hover:text-primary transition-colors">How It Works</Link></li>
                        <li><Link href="#safety" className="text-gray-400 hover:text-primary transition-colors">Safety</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-white mb-6">Legal</h4>
                    <ul className="space-y-4">
                        <li><Link href="/privacy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">Privacy Policy & Account Deletion</Link></li>
                        <li><Link href="/terms" className="text-gray-400 hover:text-primary transition-colors">Terms of Service</Link></li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-white/5 pt-8 text-center text-gray-500 text-sm">
                <p>© 2026 ORIX. College-only ride sharing. All rights reserved.</p>
                <div className="mt-4 mb-2">
                    <Link href="/privacy" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white hover:underline transition-all text-xs">
                        Privacy Policy & Account Deletion
                    </Link>
                </div>
                <p className="mt-2 text-xs">We never sell personal data. Verified email requirement protects campus safety and community trust :)</p>
            </div>
        </footer>
    );
}
