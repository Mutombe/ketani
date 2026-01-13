import { motion } from 'framer-motion';
import { Target, Eye, Globe, MapPin, TrendingUp, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function About() {
  return (
    <>
      <SEO title="About Us" description="Ketani Logistics - Leading global provider of integrated logistics solutions with over 50 years combined experience." />

      {/* 1. NEW HERO SECTION */}
      <section className="relative h-[80vh] flex items-center justify-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 to-slate-900/90 z-10" />
          <img 
            src="/k18.jpg" 
            className="w-full h-full object-cover" 
            alt="About Ketani" 
          />
        </div>
        <div className="relative z-20 text-center max-w-4xl px-6 pt-10">
          <motion.span 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-ketani-400 font-bold tracking-widest uppercase mb-4 block"
          >
            Our Story
          </motion.span>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            className="text-5xl md:text-7xl font-bold text-white mb-8"
          >
            Driven by <span className="text-ketani-500">Excellence</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto"
          >
            We are a global provider of transportation, logistics, and procurement services, revolutionizing the movement of bulk commodities across Southern Africa and beyond.
          </motion.p>
        </div>
      </section>

      {/* 2. VISION & MISSION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
                <motion.div {...fadeIn} className="bg-slate-900 text-white p-12 rounded-3xl relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 p-8 opacity-10"><Eye size={120} /></div>
                    <h3 className="text-2xl font-bold mb-4 text-ketani-400">Our Vision</h3>
                    <p className="text-lg leading-relaxed opacity-90">
                        To be the leading global provider of integrated logistics solutions, revolutionizing the transportation of bulk commodities and enhancing supply chain efficiency across Southern Africa and beyond.
                    </p>
                </motion.div>
                <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="bg-ketani-50 p-12 rounded-3xl relative overflow-hidden border border-ketani-100 shadow-lg">
                    <div className="absolute top-0 right-0 p-8 opacity-10 text-ketani-600"><Target size={120} /></div>
                    <h3 className="text-2xl font-bold mb-4 text-ketani-700">Our Mission</h3>
                    <p className="text-lg leading-relaxed text-slate-700">
                        We are committed to optimizing the movement of mineral products and agricultural inputs through multimodal logistics. We aim to offer seamless coordination of rail, port, and sea freight operations.
                    </p>
                </motion.div>
            </div>
        </div>
      </section>

      {/* 3. REPLACEMENT SECTION: STRATEGIC FOOTPRINT (Replaces Team) */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Strategic Footprint</h2>
                <p className="text-slate-600 text-lg">
                    Ketani Logistics maintains a strong operational footprint across Southern Africa, supporting export-oriented supply chains serving global markets.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
                {/* Card 1: Regional Origins */}
                <motion.div 
                    {...fadeIn}
                    className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
                >
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 mb-6">
                        <MapPin size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Regional Origins</h3>
                    <p className="text-slate-600 mb-4 text-sm">
                        We coordinate materials emanating to and from key Southern African hubs:
                    </p>
                    <ul className="space-y-2">
                        {['Zimbabwe', 'South Africa', 'Mozambique', 'Zambia', 'Namibia', 'Botswana'].map(c => (
                            <li key={c} className="flex items-center gap-2 text-slate-700 font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> {c}
                            </li>
                        ))}
                    </ul>
                </motion.div>

                 {/* Card 2: Global Markets */}
                 <motion.div 
                    {...fadeIn}
                    transition={{ delay: 0.1 }}
                    className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
                >
                    <div className="w-12 h-12 bg-ketani-100 rounded-full flex items-center justify-center text-ketani-600 mb-6">
                        <Globe size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Global Destinations</h3>
                    <p className="text-slate-600 mb-4 text-sm">
                        Connecting African resources to major industrial markets worldwide:
                    </p>
                    <ul className="space-y-2">
                        {['China & Hong Kong', 'Europe (Netherlands, Germany)', 'USA & Canada', 'Turkey', 'Singapore', 'Indonesia'].map(c => (
                            <li key={c} className="flex items-center gap-2 text-slate-700 font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-ketani-500"></span> {c}
                            </li>
                        ))}
                    </ul>
                </motion.div>

                 {/* Card 3: Value Proposition */}
                 <motion.div 
                    {...fadeIn}
                    transition={{ delay: 0.2 }}
                    className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl"
                >
                    <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center text-white mb-6">
                        <ShieldCheck size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Why We Lead</h3>
                    <p className="text-slate-400 mb-6 text-sm">
                        With over 50 years of combined experience, we offer:
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <TrendingUp size={18} className="text-ketani-500 mt-1"/>
                            <span className="text-sm">Rail-centric bulk logistics capability </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <TrendingUp size={18} className="text-ketani-500 mt-1"/>
                            <span className="text-sm">Integrated rail-port-sea solutions </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <TrendingUp size={18} className="text-ketani-500 mt-1"/>
                            <span className="text-sm">End-to-end cargo visibility and control </span>
                        </li>
                    </ul>
                </motion.div>
            </div>
        </div>
      </section>
    </>
  );
}