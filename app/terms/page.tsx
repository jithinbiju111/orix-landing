'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingChat from '@/components/FloatingChat';

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-primary selection:text-white">
            <Navbar />

            <section className="py-24 md:py-32 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="p-8 md:p-12 rounded-2xl bg-surface border border-white/5"
                    >
                        <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2 text-center">Terms & Conditions</h1>
                        <p className="text-gray-400 text-center mb-12">Last Updated: January 2026</p>

                        <div className="prose prose-invert max-w-none space-y-12">
                            <section>
                                <h3 className="text-xl font-bold text-white mb-4">Welcome to ORIX</h3>
                                <p className="text-gray-400">
                                    ORIX is a dedicated ride-sharing coordination platform designed exclusively for the college community. Our goal is to facilitate safe, affordable, and eco-friendly commuting for students and staff.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-xl font-bold text-white mb-4">1. Eligibility & Verification</h3>
                                <p className="text-gray-400">
                                    To use ORIX, you must be a verifiable student or staff member of a supported educational institution. You must register using a valid college-issued email address (.ac.in or similar). By registering, you confirm you are at least 18 years of age.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-xl font-bold text-white mb-4">2. Cost Sharing & Payments</h3>
                                <p className="text-gray-400">
                                    ORIX is a coordination tool ONLY. We do not process payments within the app. All cost-sharing arrangements (fuel costs, tolls) are to be settled directly between the Rider and Passenger via cash, UPI, or other mutual agreement.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-xl font-bold text-white mb-4">3. Ad-Supported Service</h3>
                                <p className="text-gray-400">
                                    To keep the platform free for the college community, ORIX displays advertisements served by Google Mobile Ads. By using the app, you consent to the display of these ads.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-xl font-bold text-white mb-4">4. Community Guidelines</h3>
                                <div className="text-gray-400">
                                    <p className="mb-2">As a member of the ORIX community, you agree to:</p>
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li>Use your real identity (verified by college email)</li>
                                        <li>Be punctual and respectful</li>
                                        <li>Maintain a clean and safe vehicle (Riders)</li>
                                        <li>Follow all campus rules and local traffic laws</li>
                                        <li>Not engage in harassment, discrimination, or unsafe behavior</li>
                                    </ul>
                                </div>
                            </section>

                            <section>
                                <h3 className="text-xl font-bold text-white mb-4">5. Safety & Liability Disclaimer</h3>
                                <p className="text-gray-400">
                                    ORIX is a technology platform that connects users; we do not provide transportation services. Users travel at their own risk. We strongly encourage checking college IDs before starting a ride. ORIX is not liable for accidents, damages, losses, or disputes arising from rides coordinated through the platform.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-xl font-bold text-white mb-4">6. Privacy & Data</h3>
                                <p className="text-gray-400">
                                    We collect minimal data necessary for ride matching (Location, Name, College Email). Your location is shared only during active ride coordination. We do not sell your personal data to third parties.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-xl font-bold text-white mb-4">7. Account Termination</h3>
                                <p className="text-gray-400">
                                    We reserve the right to suspend or ban users who violate these terms, falsify their student status, or are reported for unsafe/inappropriate conduct.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-xl font-bold text-white mb-4">8. Contact</h3>
                                <p className="text-gray-400">
                                    For support or to report safety concerns, please use the "Help & Support" section in the app.
                                </p>
                            </section>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
            <FloatingChat />
        </main>
    );
}
