import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  Anchor,
  Train,
  Truck,
  ShieldCheck,
  Globe,
  Clock,
  BarChart3,
  CheckCircle2,
  Mail,
} from "lucide-react";
import InteractiveMap from "../components/InteractiveMap";
import SEO from "../components/SEO";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useInView, animate } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const handleAction = (action) => {
  if (action === "call") {
    window.location.href = "tel:+263785948128";
  } else if (action === "email") {
    window.location.href = "mailto:info@ketanilogistics.com";
  } else if (action === "whatsapp") {
    window.location.href =
      "https://wa.me/263785948128?text=Hello%20NTS!%20I%27d%20like%20to%20order!";
  }
};

const heroImages = [
  "/23.jpg", // Container Port
  "/4.jpg", // Rail Transport
  "/12.jpg", // Ocean/Ship
];

// Helper Component for CountUp Animation
const Counter = ({ from = 0, to, suffix = "" }) => {
  const nodeRef = useRef();
  // Animation triggers only when element is in view
  const isInView = useInView(nodeRef, {
    once: true,
    margin: "-10% 0px -10% 0px",
  });

  useEffect(() => {
    const node = nodeRef.current;

    if (isInView) {
      const controls = animate(from, to, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate: (value) => {
          // Determine decimal places based on the target number
          // (e.g., if target is 1.5, show 1 decimal; otherwise 0)
          const hasDecimal = to % 1 !== 0;
          node.textContent = value.toFixed(hasDecimal ? 1 : 0) + suffix;
        },
      });
      return () => controls.stop();
    }
  }, [isInView, from, to, suffix]);

  return <span ref={nodeRef} />;
};

// Updated Stats Data (Separating numbers for animation)
const stats = [
  { value: 50, suffix: "+", label: "Years Combined Experience", icon: Clock },
  { value: 6, suffix: "", label: "Global Hubs", icon: Globe },
  { value: 1, suffix: "M+", label: "Tons Moved Annually", icon: BarChart3 },
  { value: 100, suffix: "%", label: "Compliance Rate", icon: ShieldCheck },
];

export default function Home() {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  // 2. Carousel Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => prev + 1);
    }, 6000); // Change slide every 6 seconds
    return () => clearInterval(timer);
  }, []);

  const currentIndex = step % heroImages.length;
  // Alternating Logic: Even steps = Top to Bottom, Odd steps = Left to Right
  const isVertical = step % 2 === 0;

  const slideVariants = {
    initial: {
      y: isVertical ? "-100%" : 0,
      x: isVertical ? 0 : "-100%",
      opacity: 0.5,
      scale: 1.1,
      zIndex: 1,
    },
    animate: {
      y: 0,
      x: 0,
      opacity: 1,
      scale: 1,
      zIndex: 2,
      transition: {
        y: { type: "spring", stiffness: 50, damping: 20 },
        x: { type: "spring", stiffness: 50, damping: 20 },
        opacity: { duration: 0.8 },
        scale: { duration: 6 }, // Slow zoom effect while active
      },
    },
    exit: {
      opacity: 0,
      zIndex: 0,
      transition: { duration: 1 }, // Fade out smoothly
    },
  };
  return (
    <>
      <SEO
        title="Global Logistics Solutions"
        description="Ketani Logistics - Integrated logistics solutions optimizing the movement of mineral products and agricultural inputs across Southern Africa and beyond."
      />

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900">
        {/* A. Carousel Background */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="popLayout">
            <motion.img
              key={step} // Key change triggers animation
              src={heroImages[currentIndex]}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              alt={`Hero Slide ${currentIndex + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Static Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-ketani-900/30 z-10" />
        </div>

        {/* B. Content */}
        <div className="container mx-auto px-6 relative z-20 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="h-px w-10 bg-ketani-400"></span>
              <span className="text-ketani-400 font-bold tracking-widest uppercase text-sm">
                Ketani Logistics
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              We Keep Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ketani-300 to-white">
                Business Moving
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
              Seamless coordination of rail, port, and ocean freight operations.
              We connect Southern Africa's resources to the global market with
              precision and reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="bg-ketani-600 hover:bg-ketani-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg shadow-ketani-500/25 flex items-center justify-center gap-2 group"
                onClick={() => navigate("/contact")}
              >
                Get a Quote{" "}
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                className="border border-slate-600 hover:border-white hover:bg-white/5 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all"
                onClick={() => navigate("/services")}
              >
                Our Services
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 hidden md:block z-20"
        >
          <div className="text-[10px] uppercase tracking-widest mb-2 text-center">
            Scroll
          </div>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent mx-auto"></div>
        </motion.div>
      </section>

      {/* 2. STATS BANNER */}
      <section className="bg-ketani-600 py-12 relative z-20 -mt-8 shadow-2xl">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center text-white border-r border-ketani-500 last:border-0"
              >
                <stat.icon className="mx-auto mb-3 opacity-80" size={24} />
                <div className="text-3xl md:text-5xl font-bold mb-1 font-mono tracking-tighter">
                  <Counter from={0} to={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs md:text-sm text-ketani-100 uppercase tracking-wider font-medium mt-2">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION (Text Heavy) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <h4 className="text-ketani-600 font-bold uppercase tracking-wider mb-2">
                Our Mission
              </h4>
              <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-snug">
                Optimizing the movement of <br />
                mineral & agricultural products.
              </h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Ketani Logistics is a global provider of transportation,
                logistics, and procurement services with a focus on multimodal
                bulk and commodity logistics.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                We aim to offer seamless coordination of rail, port, and sea
                freight operations, ensuring cost-effectiveness, reliability,
                and end-to-end visibility. Our experienced team leverages
                in-depth industry knowledge to empower our clients to thrive in
                complex trade corridors.
              </p>
              <a
                href="/about"
                className="text-ketani-700 font-bold border-b-2 border-ketani-200 hover:border-ketani-600 transition-all pb-1 inline-flex items-center gap-1"
              >
                Read Our Full Profile <ArrowRight size={16} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden">
                <img
                  src="/1.jpg"
                  alt="Container Ship"
                  className="w-full h-full object-cover rounded-2xl"
                />

                {/* 1. Top Fade Overlay (Always visible) */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white via-white/90 to-transparent" />

                {/* 2. Left Fade Overlay (Hidden on Mobile, Visible on Desktop) */}
                <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/90 to-transparent hidden md:block" />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl max-w-xs border-l-4 border-ketani-500 hidden md:block z-10">
                <p className="text-slate-800 font-serif italic text-lg">
                  "To be the leading global provider of integrated logistics
                  solutions."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. ENHANCED SERVICES GRID (With Colored Overlays) */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              {...fadeInUp}
              className="text-3xl md:text-5xl font-bold text-slate-900 mb-4"
            >
              Multimodal <span className="text-ketani-600">Capabilities</span>
            </motion.h2>
            <motion.p {...fadeInUp} className="text-slate-600 text-lg">
              We integrate rail, road, port, and sea freight into a single
              coordinated logistics solution.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Train,
                title: "Rail Logistics",
                desc: "Specialized rail-based bulk solutions for mineral and commodity producers.",
                image: "/8.jpg",
                // Cyan/Teal Overlay for Rail
                overlay: "from-cyan-950 via-cyan-900/80 to-cyan-900/10",
                accent: "bg-cyan-500",
              },
              {
                icon: Anchor,
                title: "Ocean Freight",
                desc: "Connecting Southern African exports to global markets via strategic sea routes.",
                image: "/ship.jpg",
                // Deep Blue Overlay for Ocean
                overlay: "from-blue-950 via-blue-900/80 to-blue-900/10",
                accent: "bg-blue-500",
              },
              {
                icon: ShieldCheck,
                title: "Port Operations",
                desc: "Warehousing and terminal operations across key export gateways like Beira and Durban.",
                image: "/17.jpg",
                // Indigo/Slate Overlay for Port
                overlay: "from-slate-950 via-slate-900/80 to-slate-900/10",
                accent: "bg-slate-500",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative h-[450px] rounded-3xl overflow-hidden shadow-xl cursor-pointer"
              >
                {/* Background Image with Zoom Effect */}
                <div className="absolute inset-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* DYNAMIC COLORED OVERLAY */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${service.overlay} opacity-90 transition-opacity duration-500 group-hover:opacity-95`}
                  />
                </div>

                {/* Content Layer */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  {/* Decorative Top Accent Line */}
                  <div
                    className={`absolute top-0 left-8 w-1 h-0 group-hover:h-24 ${service.accent} transition-all duration-500`}
                  />

                  {/* Icon */}
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white mb-6 border border-white/20 transition-all duration-300 group-hover:bg-white group-hover:text-slate-900 group-hover:-translate-y-2 shadow-lg">
                    <service.icon size={28} />
                  </div>

                  {/* Text */}
                  <h3 className="text-2xl font-bold text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-200 leading-relaxed mb-6 translate-y-4 opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 font-medium">
                    {service.desc}
                  </p>

                  {/* Button */}
                  <div
                    className="flex items-center gap-2 text-white/70 font-bold uppercase tracking-wider text-sm group-hover:text-white transition-colors"
                    onClick={() => navigate("/services")}
                  >
                    Learn More{" "}
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-2 transition-transform duration-300"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Action Elements */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <button
          className="group bg-gradient-to-r from-slate-700 to-blue-300 text-white hover:bg-blue-700 text-white p-3 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300"
          onClick={() => handleAction("email")}
        >
          <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        </button>
      </div>

{/* 5. FULL WIDTH MAP SECTION */}
<section className="py-12 sm:py-16 md:py-24 bg-slate-900 overflow-hidden relative">
  {/* Background Elements */}
  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
  
  <div className="container mx-auto px-4 sm:px-6 mb-8 sm:mb-12 text-center">
    <motion.h2
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6"
    >
      Global Operational Reach
    </motion.h2>
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed"
    >
      From inland mines in Zimbabwe to ports in China and Europe. We
      bridge the gap between supply and demand.
    </motion.p>
  </div>
  
  <div className="w-full max-w-[1400px] mx-auto px-3 sm:px-4 md:px-8">
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="shadow-2xl shadow-black/50 rounded-2xl sm:rounded-3xl overflow-hidden"
    >
      <InteractiveMap />
    </motion.div>
  </div>
</section>

      {/* 6. WHY CHOOSE US (List) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Why Partner with Ketani?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Rail-centric Capability",
                    text: "We specialize in moving high-volume bulk commodities efficiently via rail.",
                  },
                  {
                    title: "End-to-End Visibility",
                    text: "Tracking and operational oversight from inland origin to final destination.",
                  },
                  {
                    title: "Regional Expertise",
                    text: "Deep knowledge of cross-border corridors in Zimbabwe, Mozambique, and SA.",
                  },
                  {
                    title: "Integrated Solutions",
                    text: "One partner for rail, road, port, clearing, and sea freight.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-ketani-100 flex items-center justify-center text-ketani-600">
                        <CheckCircle2 size={18} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg">
                        {item.title}
                      </h3>
                      <p className="text-slate-600">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Ready to move your cargo?
              </h3>
              <p className="text-slate-600 mb-8">
                Our team is ready to design a custom logistics solution for your
                mineral or agricultural products.
              </p>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-ketani-500 focus:border-ketani-500 outline-none transition-all"
                    placeholder="name@company.com"
                  />
                </div>
                <button className="w-full bg-slate-900 hover:bg-ketani-600 text-white font-bold py-4 rounded-lg transition-colors shadow-lg">
                  Request a Proposal
                </button>
                <p className="text-xs text-center text-slate-500 mt-4">
                  By clicking, you agree to our privacy policy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
