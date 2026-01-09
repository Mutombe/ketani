import { motion } from 'framer-motion';
import { Train, Ship, Anchor, Package, Warehouse, Globe, ArrowRight, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Services() {
  return (
    <>
      <SEO title="Our Services" description="Multimodal logistics including Rail, Port Operations, and Ocean Freight for bulk commodities." />
      
      {/* HERO */}
      <section className="relative h-[70vh] flex items-center justify-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-slate-900/80 z-10" />
          <img 
            src="/12.jpg" 
            className="w-full h-full object-cover" 
            alt="Services Hero" 
          />
        </div>
        <div className="relative z-20 text-center max-w-4xl px-6 pt-10">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-ketani-400 font-bold tracking-widest uppercase mb-4 block">
            Integrated Solutions
          </motion.span>
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-5xl md:text-6xl font-bold text-white mb-6">
            Multimodal <span className="text-ketani-500">Logistics Strength</span>
          </motion.h1>
          <p className="text-xl text-slate-300">
            Ketani Logistics integrates rail, road, port, and sea freight into a single coordinated solution.
          </p>
        </div>
      </section>

{/* 1. RAIL LOGISTICS (Background: White) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <div className="w-16 h-16 bg-ketani-100 rounded-2xl flex items-center justify-center text-ketani-600 mb-6">
                <Train size={32} />
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Rail Logistics</h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Rail forms a core pillar of our capability, particularly for high-volume bulk commodities moving from inland producers to export gateways. We specialize in rail-based bulk and break-bulk transport solutions.
              </p>
              <ul className="space-y-4">
                {[
                  "Bulk mineral and commodity rail transport ",
                  "Rail siding and loading coordination ",
                  "Cross-border rail corridor management ",
                  "Rail-to-port logistics integration"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="text-ketani-500 shrink-0 mt-1" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            {/* Image Container */}
            <motion.div {...fadeIn} className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img src="/11.jpg" className="w-full h-full object-cover" alt="Rail Logistics" />
              
              {/* Top Fade (Mobile & Desktop) */}
              <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent" />
              
              {/* Bottom Fade (Mobile & Desktop) */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
              
              {/* Left Fade (Desktop Only - facing text) */}
              <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent hidden lg:block" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. PORT & TERMINAL (Background: Slate-50) */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse">
            <motion.div {...fadeIn} className="lg:order-2">
              <div className="w-16 h-16 bg-ketani-100 rounded-2xl flex items-center justify-center text-ketani-600 mb-6">
                <Warehouse size={32} />
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Warehousing & Port Operations</h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                We manage and coordinate warehousing and terminal operations across key Southern African export gateways for materials emanating to and from Zimbabwe.
              </p>
              <ul className="space-y-4">
                {[
                  "Bulk and Break-bulk cargo handling",
                  "Stockpile management & Sampling ",
                  "Clearing and forwarding services",
                  "Vessel loading co-ordination"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="text-ketani-500 shrink-0 mt-1" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            {/* Image Container */}
            <motion.div {...fadeIn} className="lg:order-1 relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1590247813693-5541d1c609fd?q=80&w=2009&auto=format&fit=crop" className="w-full h-full object-cover" alt="Port Operations" />
              
              {/* Top Fade */}
              <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-slate-50 to-transparent" />
              
              {/* Bottom Fade */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent" />
              
              {/* Right Fade (Desktop Only - facing text) */}
              <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent hidden lg:block" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. OCEAN FREIGHT (Background: White) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <div className="w-16 h-16 bg-ketani-100 rounded-2xl flex items-center justify-center text-ketani-600 mb-6">
                <Ship size={32} />
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Ocean Freight</h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Ketani Logistics provides ocean freight solutions connecting Southern African exports to global markets, ensuring reliability and cost-effectiveness.
              </p>
              <ul className="space-y-4">
                {[
                  "Bulk and break-bulk ocean freight",
                  "Containerised shipping solutions",
                  "Vessel chartering and scheduling support",
                  "Cargo insurance (Port of Loading to Discharge)"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="text-ketani-500 shrink-0 mt-1" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            {/* Image Container */}
            <motion.div {...fadeIn} className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=2071&auto=format&fit=crop" className="w-full h-full object-cover" alt="Ocean Freight" />
              
              {/* Top Fade */}
              <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent" />
              
              {/* Bottom Fade */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
              
              {/* Left Fade (Desktop Only - facing text) */}
              <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent hidden lg:block" />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}