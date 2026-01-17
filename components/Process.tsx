'use client';

import { motion } from 'framer-motion';

const steps = [
    {
        id: '01',
        title: 'Download & Login',
        description: "Confirm your college email to join ORIX's campus community.",
    },
    {
        id: '02',
        title: 'Create a Ride',
        description: 'Add destination, time, group size and privacy preferences.',
    },
    {
        id: '03',
        title: 'Find Ride Mates',
        description: "Get matched with students on similar routes. Approve requests or join others' rides.",
    },
    {
        id: '04',
        title: 'Share & Rate',
        description: 'Share the fare, complete the trip, and leave feedback to build trust.',
    },
];

export default function Process() {
    return (
        <section id="how-it-works" className="py-24 bg-black relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">How It Works</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Four simple steps to start riding with trusted classmates.
                    </p>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative flex flex-col items-center text-center"
                        >
                            <div className="w-16 h-16 rounded-full bg-surface border-2 border-primary text-primary flex items-center justify-center text-xl font-bold mb-6 z-10 shadow-[0_0_20px_rgba(255,0,0,0.3)]">
                                {step.id}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
