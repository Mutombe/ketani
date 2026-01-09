import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Globe, Send, Building2 } from 'lucide-react';
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import SEO from '../components/SEO';

const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

// Specific markers for the offices
const officeMarkers = [
  { name: "Harare (Regional)", coordinates: [31.054, -17.829], type: "office" },
  { name: "Mauritius (HQ)", coordinates: [57.5, -20.2], type: "hq" }, 
];

function OfficeMap() {
  return (
    <div className="w-full h-full bg-slate-900 relative overflow-hidden rounded-3xl border border-slate-800 shadow-2xl">
      <ComposableMap projection="geoMercator" projectionConfig={{ scale: 800, center: [40, -20] }}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const isHighlighted = ["Zimbabwe", "Mauritius"].includes(geo.properties.name);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={isHighlighted ? "#0ea5e9" : "#1e293b"}
                    stroke="#0f172a"
                    strokeWidth={1}
                    style={{
                        default: { outline: "none" },
                        hover: { fill: isHighlighted ? "#38bdf8" : "#334155", outline: "none" },
                        pressed: { outline: "none" },
                    }}
                  />
                );
              })
            }
          </Geographies>
          {officeMarkers.map(({ name, coordinates, type }) => (
            <Marker key={name} coordinates={coordinates}>
              <g className="cursor-pointer group">
                <circle r={8} fill={type === 'hq' ? "#f59e0b" : "#0ea5e9"} className="opacity-40 animate-ping" />
                <circle r={4} fill={type === 'hq' ? "#f59e0b" : "#0ea5e9"} />
                <text textAnchor="middle" y={-15} className="font-bold text-[10px] fill-white bg-black/50" style={{textShadow: "0px 2px 4px black"}}>
                    {name}
                </text>
              </g>
            </Marker>
          ))}
      </ComposableMap>
      <div className="absolute bottom-4 right-4 bg-slate-900/80 backdrop-blur p-3 rounded-lg border border-slate-700 text-xs text-white">
        <div className="flex items-center gap-2 mb-1"><span className="w-2 h-2 rounded-full bg-amber-500"></span> HQ (Mauritius)</div>
        <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-ketani-500"></span> Regional (Harare)</div>
      </div>
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'General Inquiry',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Determine which email to use based on service type
    const emailAddress = formData.service === 'Legal/Compliance Matter' 
      ? 'legal@ketanilogistics.com' 
      : 'info@ketanilogistics.com';
    
    // Create the email subject
    const subject = encodeURIComponent(`${formData.service} - From ${formData.name}`);
    
    // Create the email body
    const body = encodeURIComponent(
      `Hello Ketani Logistics Team,\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Service Interest: ${formData.service}\n\n` +
      `Message:\n${formData.message}\n\n` +
      `Best regards,\n${formData.name}`
    );
    
    // Open default email client with prefilled data
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <SEO title="Contact Us" description="Get in touch with Ketani Logistics. Offices in Zimbabwe and Mauritius." />
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[70vh] flex items-center justify-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover" 
            alt="Corporate Office" 
          />
        </div>
        <div className="relative z-20 text-center max-w-4xl px-6">
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-5xl md:text-6xl font-bold text-white mb-4">
            Get in Touch
          </motion.h1>
          <p className="text-xl text-slate-300">
            Global expertise, local presence. We are ready to move your business forward.
          </p>
        </div>
      </section>

      {/* 2. MAIN CONTENT GRID */}
      <div className="bg-slate-50 min-h-screen py-20">
        <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
                
                {/* LEFT: Contact Info & Map */}
                <div className="space-y-8">
                    {/* Office Cards */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 group hover:border-ketani-500 transition-colors">
                            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 mb-4 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                                <Globe size={20}/>
                            </div>
                            <h3 className="font-bold text-slate-900 uppercase tracking-wider text-sm mb-2">Head Office</h3>
                            <p className="text-slate-800 font-bold mb-1">Mauritius</p>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                3rd Floor Carleton Tower,<br/>Wall Street, Cybercity, Ebene 
                            </p>
                        </motion.div>

                        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 group hover:border-ketani-500 transition-colors">
                            <div className="w-10 h-10 bg-ketani-100 rounded-lg flex items-center justify-center text-ketani-600 mb-4 group-hover:bg-ketani-500 group-hover:text-white transition-colors">
                                <Building2 size={20}/>
                            </div>
                            <h3 className="font-bold text-slate-900 uppercase tracking-wider text-sm mb-2">Regional Office</h3>
                            <p className="text-slate-800 font-bold mb-1">Zimbabwe</p>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                7 Kings' Row, Northgate,<br/>Borrowdale, Harare 
                            </p>
                        </motion.div>
                    </div>

                    {/* Interactive Map */}
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="h-[400px]">
                         <OfficeMap />
                    </motion.div>

                    {/* Direct Contact List */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <h3 className="font-bold text-slate-900 mb-6">Direct Lines</h3>
                        <div className="space-y-4">
                            <a 
                                href="mailto:info@ketanilogistics.com?subject=General%20Inquiry%20-%20Ketani%20Logistics&body=Hello%20Ketani%20Logistics%20Team%2C%0A%0AI%20am%20reaching%20out%20regarding%3A%0A%0A%5BPlease%20describe%20your%20inquiry%20here%5D%0A%0AThank%20you%2C%0A%5BYour%20Name%5D" 
                                className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl hover:bg-ketani-50 transition-colors group"
                            >
                                <Mail className="text-ketani-500 group-hover:scale-110 transition-transform" size={20} />
                                <div className="flex-1">
                                    <span className="text-slate-700 text-sm font-medium block">info@ketanilogistics.com</span>
                                    <span className="text-slate-500 text-xs">General inquiries & quotes</span>
                                </div>
                            </a>
                            <a 
                                href="mailto:legal@ketanilogistics.com?subject=Legal%20Inquiry%20-%20Ketani%20Logistics&body=Dear%20Legal%20Team%2C%0A%0AI%20am%20writing%20regarding%20a%20legal%20matter%3A%0A%0A%5BPlease%20describe%20your%20legal%20inquiry%20here%5D%0A%0ABest%20regards%2C%0A%5BYour%20Name%5D%0A%5BYour%20Company%5D" 
                                className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl hover:bg-ketani-50 transition-colors group"
                            >
                                <Mail className="text-ketani-500 group-hover:scale-110 transition-transform" size={20} />
                                <div className="flex-1">
                                    <span className="text-slate-700 text-sm font-medium block">legal@ketanilogistics.com</span>
                                    <span className="text-slate-500 text-xs">Legal & compliance matters</span>
                                </div>
                            </a>
                            <a href="tel:+263772285647" className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl hover:bg-ketani-50 transition-colors group">
                                <Phone className="text-ketani-500 group-hover:scale-110 transition-transform" size={20} />
                                <div className="flex-1">
                                    <span className="text-slate-700 text-sm font-medium block">+263 772 285 647</span>
                                    <span className="text-slate-500 text-xs">Zimbabwe office</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                {/* RIGHT: Form */}
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 h-fit"
                >
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-slate-900 mb-2">Send a Message</h2>
                        <p className="text-slate-500">Need a quote or have a question? We respond within 24 hours.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Name</label>
                                <input 
                                    type="text" 
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-ketani-500 outline-none transition-all" 
                                    placeholder="John Doe"
                                    required 
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-ketani-500 outline-none transition-all" 
                                    placeholder="john@company.com"
                                    required 
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Service Interest</label>
                            <select 
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-ketani-500 outline-none transition-all"
                            >
                                <option>General Inquiry</option>
                                <option>Rail Logistics</option>
                                <option>Ocean Freight</option>
                                <option>Warehousing</option>
                                <option>Legal/Compliance Matter</option>
                            </select>
                            {formData.service === 'Legal/Compliance Matter' && (
                              <p className="mt-2 text-xs text-amber-600 flex items-center gap-1">
                                <Mail size={12} /> This will be sent to our legal team at legal@ketanilogistics.com
                              </p>
                            )}
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                            <textarea 
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={5} 
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-ketani-500 outline-none transition-all" 
                                placeholder="Tell us about your cargo..."
                                required
                            ></textarea>
                        </div>
                        <button 
                            type="submit"
                            className="w-full bg-slate-900 hover:bg-ketani-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
                        >
                            Send Message <Send size={18} />
                        </button>
                    </form>
                </motion.div>

            </div>
        </div>
      </div>
    </>
  );
}