import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, Cookie, FileText, Lock } from 'lucide-react';

export default function PolicyModal({ isOpen, onClose, type }) {
  if (!isOpen) return null;

  // Content derived from profile legal section
  const policies = {
    privacy: {
      title: "Privacy Policy",
      icon: Shield,
      updated: "January 2026",
      content: (
        <>
          <h4 className="font-bold text-slate-900 mb-2">1. Data Collection & Usage</h4>
          <p className="mb-4">
            Ketani Logistics collects information necessary to facilitate the transportation of bulk commodities, including but not limited to shipper details, cargo specifications, and tracking data. We ensure all data handling complies with local and international logistics standards.
          </p>
          
          <h4 className="font-bold text-slate-900 mb-2">2. Compliance & Legal</h4>
          <p className="mb-4">
            Our data practices are overseen by our Legal Department to ensure compliance with the legal and statutory provisions of Zimbabwean law and international trade regulations.
          </p>

          <h4 className="font-bold text-slate-900 mb-2">3. Contact Information</h4>
          <p className="mb-4">
            For any privacy-related inquiries or to exercise your data rights, please contact our Legal Advisor at:<br/>
            <a href="mailto:legal@ketanilogistics.com" className="text-ketani-600 font-bold hover:underline">legal@ketanilogistics.com</a>
          </p>
        </>
      )
    },
    cookies: {
      title: "Cookie Policy",
      icon: Cookie,
      updated: "January 2026",
      content: (
        <>
          <h4 className="font-bold text-slate-900 mb-2">1. Use of Cookies</h4>
          <p className="mb-4">
            We use cookies to enhance user experience, track shipment query performance, and analyze traffic to our digital platforms. These small text files allow us to remember your preferences for regional services (e.g., Mozambique vs. South Africa ports).
          </p>

          <h4 className="font-bold text-slate-900 mb-2">2. Essential vs. Analytics</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1">
            <li><strong>Essential Cookies:</strong> Required for the "Track Shipment" and "Get Quote" functionalities.</li>
            <li><strong>Analytics Cookies:</strong> Help us understand global traffic sources from our markets in Asia, Europe, and the Americas.</li>
          </ul>

          <h4 className="font-bold text-slate-900 mb-2">3. Managing Preferences</h4>
          <p className="mb-4">
            You can disable cookies via your browser settings, though this may impact the functionality of our tracking tools.
          </p>
        </>
      )
    }
  };

  const current = policies[type] || policies.privacy;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        <motion.div 
          initial={{ scale: 0.95, opacity: 0, y: 20 }} 
          animate={{ scale: 1, opacity: 1, y: 0 }} 
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          className="bg-white rounded-3xl max-w-2xl w-full relative shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-slate-50 border-b border-slate-100 p-6 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-ketani-100 rounded-full flex items-center justify-center text-ketani-600">
                    <current.icon size={24} />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-slate-900">{current.title}</h2>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">Last Updated: {current.updated}</p>
                </div>
            </div>
            <button onClick={onClose} className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-all">
              <X size={20} />
            </button>
          </div>
          
          {/* Scrollable Body */}
          <div className="p-8 overflow-y-auto text-slate-600 leading-relaxed text-sm md:text-base">
            {current.content}
            
            <div className="mt-8 p-4 bg-slate-50 rounded-xl border border-slate-100 flex gap-3 items-start">
                <Lock className="text-ketani-500 shrink-0 mt-1" size={18} />
                <p className="text-xs text-slate-500">
                    This document is drafted in compliance with applicable data protection laws. 
                    For official legal correspondence, please write to our registered office at Number 7 Kings' Row, Northgate, Borrowdale, Harare.
                </p>
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-end shrink-0">
            <button onClick={onClose} className="bg-slate-900 hover:bg-ketani-600 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg">
                I Acknowledge
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}