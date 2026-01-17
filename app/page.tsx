import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Process from '@/components/Process';
import Safety from '@/components/Safety';
import Benefits from '@/components/Benefits';

import Footer from '@/components/Footer';
import FloatingChat from '@/components/FloatingChat';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <Features />
      <Process />
      <Safety />
      <Benefits />

      <Footer />
      <FloatingChat />
    </main>
  );
}
