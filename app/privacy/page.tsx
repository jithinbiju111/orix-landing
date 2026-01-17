'use client';

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingChat from '@/components/FloatingChat';

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-primary selection:text-white">
            <Navbar />

            <section className="py-24 md:py-32 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="p-8 rounded-2xl bg-surface border border-white/5"
                    >
                        <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Data & Privacy</h1>
                        <div className="prose prose-invert mx-auto">
                            <p className="text-gray-400 mb-6 text-lg">
                                To permanently delete your account and data, please raise a support ticket within the Orix app.
                                We are committed to ensuring your data is handled securely and transparently.
                            </p>

                            <div className="flex justify-center mt-8">
                                <a
                                    href="mailto:support@orix.app"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-primary hover:border-primary transition-all font-medium"
                                >
                                    <Mail size={18} />
                                    <span>Contact Support</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
            <FloatingChat />
        </main>
    );
}
