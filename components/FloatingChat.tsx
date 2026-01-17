'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

export default function FloatingChat() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="fixed bottom-24 right-6 w-80 bg-surface border border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden"
                    >
                        <div className="bg-primary p-4 flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white text-xs font-bold">
                                    OR
                                </div>
                                <h4 className="font-bold text-white">Chat with us!</h4>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white/80 hover:text-white transition-colors"
                            >
                                <X size={18} />
                            </button>
                        </div>
                        <div className="p-4 h-64 bg-black flex flex-col justify-end">
                            <div className="bg-surface p-3 rounded-lg rounded-tl-none self-start max-w-[80%] mb-4 border border-white/5">
                                <p className="text-sm text-gray-300">Hi there! Any questions about ORIX? 👋</p>
                            </div>
                        </div>
                        <div className="p-3 bg-surface border-t border-white/10 flex gap-2">
                            <input
                                type="text"
                                placeholder="Type a message..."
                                className="flex-1 bg-black border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                            />
                            <button className="p-2 bg-primary rounded-lg text-white hover:bg-red-600 transition-colors">
                                <Send size={16} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 w-14 h-14 bg-primary text-white rounded-full shadow-[0_4px_20px_rgba(255,0,0,0.4)] flex items-center justify-center z-50 hover:bg-red-600 transition-colors"
            >
                <MessageCircle size={28} />
            </motion.button>
        </>
    );
}
