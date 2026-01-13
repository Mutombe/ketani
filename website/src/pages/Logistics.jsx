import { motion } from 'framer-motion';
import { Train, Anchor, Ship, ArrowRight, ShieldCheck, Map } from 'lucide-react';
import SEO from '../components/SEO';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Logistics() {
  return (
    <>
      <SEO title="Logistics Operations" description="Integrated rail, port, and ocean freight logistics across Southern Africa and Global Markets." />

      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-slate-900/60 z-10" />
          <img 
            src="/k3.jpeg" 
            className="w-full h-full object-cover" 
            alt="Logistics Network" 
          />
        </div>
        <div className="relative z-20 container mx-auto px-6 text-center">
          <motion.h1 
            initial={{ scale: 0.9, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            End-to-End <span className="text-ketani-500">Execution</span>
          </motion.h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto">
            Providing seamless coordination from inland origin to global destination.
          </p>
        </div>
      </section>

      {/* 1. RAIL LOGISTICS [cite: 20-27] */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div {...fadeIn}>
                    <div className="w-16 h-16 bg-ketani-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-ketani-500/30">
                        <Train size={32} />
                    </div>
                    <h2 className="text-4xl font-bold text-slate-900 mb-6">Rail Logistics</h2>
                    <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                        Rail forms a core pillar of our capability. We specialize in rail-based bulk solutions for high-volume commodities moving from inland producers to export gateways.
                    </p>
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                        <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2"><ShieldCheck className="text-ketani-500"/> Key Capabilities</h4>
                        <ul className="grid sm:grid-cols-2 gap-4">
                            {[
                                "Bulk mineral transport", // [cite: 23]
                                "Siding & loading coordination", // [cite: 24]
                                "Cross-border corridor mgmt", // [cite: 25]
                                "Rail-to-port integration", // [cite: 26]
                                "Tracking & Oversight" // [cite: 27]
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                                    <div className="w-1.5 h-1.5 rounded-full bg-ketani-500"></div> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
                <motion.div {...fadeIn} className="h-full min-h-[400px] relative rounded-3xl overflow-hidden shadow-2xl">
                     <img src="/11.jpg" className="w-full h-full object-cover" alt="Rail Transport" />
                </motion.div>
            </div>
        </div>
      </section>

      {/* 2. PORT OPERATIONS [cite: 29-36] */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse">
                <motion.div {...fadeIn} className="lg:order-2">
                    <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-amber-500/30">
                        <Anchor size={32} />
                    </div>
                    <h2 className="text-4xl font-bold text-slate-900 mb-6">Port & Terminal Operations</h2>
                    <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                        We manage warehousing and terminal operations across key Southern African export gateways for materials emanating to and from Zimbabwe.
                    </p>
                    <ul className="space-y-4">
                        {[
                            "Bulk & Break-bulk cargo handling", // [cite: 32]
                            "Stockpile management & Sampling", // [cite: 32, 35]
                            "Clearing and forwarding", // [cite: 33]
                            "Vessel loading co-ordination" // [cite: 34]
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-slate-800 font-medium p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                                <ArrowRight className="text-amber-500" size={18} /> {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>
                <motion.div {...fadeIn} className="lg:order-1 h-full min-h-[400px] relative rounded-3xl overflow-hidden shadow-2xl">
                     <img src="/k19.jpg" className="w-full h-full object-cover" alt="Port Operations" />
                </motion.div>
            </div>
        </div>
      </section>

      {/* 3. OCEAN FREIGHT [cite: 37-43] */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <Ship size={48} className="text-ketani-600 mx-auto mb-6" />
                <h2 className="text-4xl font-bold text-slate-900 mb-4">Global Ocean Freight</h2>
                <p className="text-slate-600 text-lg">
                    Connecting Southern African exports to global markets in Europe, Asia, and the Americas.
                </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { title: "Vessel Chartering", desc: "Full vessel chartering and scheduling support for bulk shipments." }, // [cite: 42]
                    { title: "Container Solutions", desc: "Flexible containerised shipping options for smaller consignments." }, // [cite: 41]
                    { title: "Cargo Insurance", desc: "Comprehensive coverage from Port of Loading to Port of Discharge." } // [cite: 43]
                ].map((card, i) => (
                    <motion.div 
                        key={i} 
                        whileHover={{ y: -10 }}
                        className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-ketani-200 transition-all"
                    >
                        <h3 className="text-xl font-bold text-slate-900 mb-3">{card.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{card.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>
    </>
  );
}