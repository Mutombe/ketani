import { motion } from "framer-motion";
import {
  Play,
  Calendar,
  ExternalLink,
  Image as ImageIcon,
  Video,
} from "lucide-react";
import SEO from "../components/SEO";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const videos = [
  { id: "QB7Ve5HEKhA", title: "Ketani Logistics Overview" },
  { id: "8d5d_HXGeMA", title: "Port Operations Explained" },
  { id: "9-IEcZOa4rg", title: "Cross-Border Rail Solutions" },
  { id: "dfmEYpCHfCg", title: "Strategic Logistics Management" },
];

const news = [
  {
    title: "Expansion of Beira Corridor Capacity",
    date: "Jan 05, 2026",
    category: "Infrastructure",
    image:
      "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?q=80&w=2009&auto=format&fit=crop",
  },
  {
    title: "Record Ferrochrome Volumes Transported via Rail",
    date: "Dec 12, 2025",
    category: "Company News",
    image: "/15.jpg",
  },
  {
    title: "New Sustainable Shipping Practices Adopted",
    date: "Nov 28, 2025",
    category: "Sustainability",
    image:
      "https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=2071&auto=format&fit=crop",
  },
];

const gallery = [
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=2076&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop",
  "7.jpg",
  "/11.jpg",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
];

export default function Hypermedia() {
  return (
    <>
      <SEO
        title="Media & Insights"
        description="Latest news, videos, and media from Ketani Logistics."
      />

      {/* HERO SECTION */}
      <section className="relative h-[50vh] flex items-center justify-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent z-10" />
          <img
            src="/20.jpg"
            className="w-full h-full object-cover grayscale"
            alt="Media Center"
          />
        </div>
        <div className="relative z-20 container mx-auto px-6 text-center">
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Insights & <span className="text-ketani-500">Media</span>
          </motion.h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Explore our latest projects, video tours, and company news.
          </p>
        </div>
      </section>

      {/* 1. VIDEO GALLERY */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-3 bg-red-100 rounded-xl text-red-600">
              <Video size={24} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">
              Featured Videos
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200"
              >
                <div className="aspect-video relative bg-black">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-ketani-600 transition-colors">
                    {video.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. NEWS FEED */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-ketani-100 rounded-xl text-ketani-600">
                <Calendar size={24} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Latest News</h2>
            </div>
            <button className="hidden md:flex items-center gap-2 text-ketani-600 font-bold hover:gap-4 transition-all">
              View Archive <ExternalLink size={18} />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4 relative">
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-all z-10" />
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-900 z-20">
                    {item.category}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                  <Calendar size={14} /> {item.date}
                </div>
                <h3 className="text-xl font-bold text-slate-900 leading-snug group-hover:text-ketani-600 transition-colors">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. IMAGE GALLERY (Masonry-ish) */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Operational Gallery
            </h2>
            <p className="text-slate-400">
              A glimpse into our daily logistics operations.
            </p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {gallery.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl overflow-hidden shadow-2xl border border-slate-700 break-inside-avoid"
              >
                <img
                  src={src}
                  alt={`Gallery ${i}`}
                  className="w-full hover:scale-110 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
