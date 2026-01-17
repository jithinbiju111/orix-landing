'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, MapPin, BadgeDollarSign } from 'lucide-react';

const features = [
    {
        title: 'College Email Verification',
        description: 'Exclusive access for verified students — closed community, safer connections.',
        icon: ShieldCheck,
    },
    {
        title: 'ELO Rating System',
        description: 'Community-driven ratings so you can choose reliable ride mates.',
        icon: TrendingUp,
    },
    {
        title: 'Smart Ride Matching',
        description: 'Matches students heading the same way based on route, time and preferences.',
        icon: MapPin,
    },
    {
        title: 'Transparent Fare Splitting',
        description: 'Clear fare estimates and even cost splitting so everyone pays their share.',
        icon: BadgeDollarSign,
    },
];

export default function Features() {
    return (
        <section id="features" className="py-24 bg-surface relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Why <span className="text-primary">ORIX</span>?</h2>
                    <p className="text-gray-400 max-w-2xl text-lg">
                        College-only ride sharing that helps students ride together, save money, and stay safe.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/50 transition-colors group cursor-default"
                        >
                            <div className="w-12 h-12 rounded-full border border-dashed border-gray-600 flex items-center justify-center mb-6 group-hover:border-primary group-hover:bg-primary/10 transition-colors">
                                <feature.icon className="text-white group-hover:text-primary transition-colors" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
