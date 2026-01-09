import { motion } from "framer-motion";
import {
  Box,
  Layers,
  Hammer,
  Gem,
  Sprout,
  Factory,
  CheckCircle2,
} from "lucide-react";
import SEO from "../components/SEO";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const commodities = [
  {
    category: "Mineral Concentrates",
    icon: Gem,
    items: [
      "Ferrochrome (High Carbon)",
      "Lumpy Chrome & Chrome Concentrates",
      "Lithium Concentrates",
      "Nickel & Cobalt Concentrates",
    ],
    // Emerald/Teal Theme for Minerals
    image: "/24.jpg",
    overlay: "from-emerald-950 via-emerald-900/90 to-emerald-900/20",
    accent: "bg-emerald-500",
    iconColor: "text-emerald-400",
  },
  {
    category: "Metals & Mining",
    icon: Hammer,
    items: ["Copper Metal & Concentrates", "Coal & Coke", "Fluorspar"],
    // Amber/Copper Theme for Metals
    image: "/16.jpg",
    overlay: "from-amber-950 via-amber-900/90 to-amber-900/20",
    accent: "bg-amber-500",
    iconColor: "text-amber-400",
  },
  {
    category: "Industrial & Agriculture",
    icon: Sprout,
    items: [
      "Fertilizers & Agricultural Inputs",
      "Clinker",
      "Capital Goods & Project Cargo",
    ],
    // Lime/Green Theme for Agriculture
    image: "/25.jpg",
    overlay: "from-lime-950 via-lime-900/90 to-lime-900/20",
    accent: "bg-lime-500",
    iconColor: "text-lime-400",
  },
];

export default function Commodities() {
  return (
    <>
      <SEO
        title="Commodities Handled"
        description="Specialized transport for Ferrochrome, Lithium, Copper, and Agricultural Inputs across Southern Africa."
      />

      {/* HERO */}
      <section className="relative h-[70vh] flex items-center justify-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent z-10 " />
          <img
            src="/14.jpg"
            className="w-full h-full object-cover"
            alt="Mineral Stockpiles"
          />
        </div>
        <div className="relative z-20 container mx-auto px-6 pt-10">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="max-w-3xl"
          >
            <span className="text-ketani-400 font-bold tracking-widest uppercase mb-4 block">
              What We Move
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Bulk Commodity <br />
              <span className="text-ketani-500">Expertise</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              We specialize in the efficient movement of mineral products,
              agricultural inputs, and project cargo across Southern
              Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* COMMODITY GRID */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 -mt-32 relative z-30">
            {commodities.map((group, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group relative bg-slate-900 rounded-3xl shadow-xl overflow-hidden min-h-[400px] border border-slate-800"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={group.image}
                    alt={group.category}
                    className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Color Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${group.overlay} opacity-90 transition-opacity duration-500`}
                  />
                </div>

                {/* Content */}
                <div className="relative p-8 h-full flex flex-col">
                  {/* Top Accent Line */}
                  <div
                    className={`w-12 h-1 ${group.accent} mb-6 rounded-full`}
                  />

                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center ${group.iconColor} border border-white/10 shadow-lg`}
                    >
                      <group.icon size={28} />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-6">
                    {group.category}
                  </h3>

                  <ul className="space-y-4 mt-auto">
                    {group.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2
                          className={`${group.iconColor} shrink-0 mt-1`}
                          size={18}
                        />
                        <span className="text-slate-200 font-medium text-sm leading-relaxed border-b border-white/5 pb-2 w-full">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* PROJECT CARGO FEATURE */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 font-bold text-xs uppercase tracking-wider mb-6">
                <Factory size={14} /> Specialized Handling
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Project Cargo & Capital Goods
              </h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Beyond bulk minerals, Ketani Logistics handles complex capital
                goods and project cargo. Whether it's heavy mining
                machinery or agricultural equipment, we ensure safe and timely
                delivery to inland locations.
              </p>
              <button className="text-ketani-600 font-bold flex items-center gap-2 hover:gap-4 transition-all">
                Request Handling Specs <Box size={18} />
              </button>
            </motion.div>
            <motion.div
              {...fadeIn}
              className="relative h-[400px] bg-slate-100 rounded-3xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop"
                className="w-full h-full object-cover"
                alt="Project Cargo"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
