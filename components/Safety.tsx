'use client';

import { motion } from 'framer-motion';
import { UserCheck, Activity, MessageSquareLock, BellRing } from 'lucide-react';

const safetyFeatures = [
    {
        title: 'Verified Students Only',
        description: 'A closed, campus-based community accessible only with college email verification.',
        icon: UserCheck,
    },
    {
        title: 'ELO Reputation Score',
        description: 'Community-driven ratings reflecting completed rides, punctuality, and peer feedback.',
        icon: Activity,
    },
    {
        title: 'Encrypted In-App Chat',
        description: 'Communicate securely with ride mates—no phone numbers shared until you\'re ready.',
        icon: MessageSquareLock,
    },
    {
        title: 'Quick SOS & Ride Sharing',
        description: 'Easy emergency help and shareable tracking links for peace of mind.',
        icon: BellRing,
    },
];

export default function Safety() {
    return (
        <section id="safety" className="py-24 bg-surface text-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Safety and trust, <br />built into every ride.</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Only verified students join ORIX, and community ratings reward reliability.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {safetyFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start p-8 rounded-2xl bg-black border border-white/10 hover:border-primary/50 transition-colors group"
                        >
                            <div className="mr-6 p-4 rounded-xl bg-surface border border-white/5 group-hover:bg-primary/10 group-hover:border-primary transition-colors">
                                <feature.icon size={28} className="text-white group-hover:text-primary transition-colors" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
