'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import HeroIllustration from './HeroIllustration';

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 overflow-hidden bg-tech-mesh">
            {/* Background Grid - Enhanced with CSS class */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#ff000010,transparent)]" />

            {/* Car and Hills Illustration */}
            <HeroIllustration />

            {/* Red Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6"
                >
                    A smarter, safer way for <br />
                    <span className="text-primary italic">students to share rides.</span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
                >
                    Find ride mates, save money, and build trust within your college community.
                    Join the exclusive network for verified students.
                </motion.p>

                {/* Action Area */}
                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto"
                    action="https://formspree.io/f/mzdddonl"
                    method="POST"
                >
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your college email"
                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    />
                    <button type="submit" className="w-full md:w-auto px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2 group">
                        <span>Join Waitlist</span>
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </motion.form>
            </div>
        </section>
    );
}
