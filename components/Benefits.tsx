'use client';

import { motion } from 'framer-motion';
import { Banknote, Users, HandHeart } from 'lucide-react';

const benefits = [
    {
        title: 'Save Money',
        description: 'Split fares with classmates and cut your commuting costs substantially—often up to 50–70% versus solo rides.',
        icon: Banknote,
    },
    {
        title: 'Ride with Trust',
        description: 'Only verified students join ORIX, and community ratings reward reliability and good behavior every trip.',
        icon: Users,
    },
    {
        title: 'Make Connections',
        description: 'Turn commutes into study partners, club buddies, and new friendships within your college community.',
        icon: HandHeart,
    },
];

export default function Benefits() {
    return (
        <section id="community" className="py-24 bg-black text-center relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-16">Ride together. Save together.</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center"
                        >
                            <div className="w-16 h-16 mb-6 rounded-full bg-surface flex items-center justify-center text-primary border border-white/5 shadow-lg">
                                <benefit.icon size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                            <p className="text-gray-400 leading-relaxed max-w-sm">
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
