import { Briefcase, MapPin, Clock, ArrowRight, Zap, Users, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const jobs = [
];

export default function Careers() {
  return (
    <>
      <SEO title="Careers" description="Join the Ketani Logistics team. We are looking for talented individuals to help us revolutionize logistics." />
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[70vh] flex items-center justify-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-ketani-900/50 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop" 
            className="w-full h-full object-cover" 
            alt="Careers Team" 
          />
        </div>
        <div className="relative z-20 container mx-auto px-6 pt-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
                <span className="text-ketani-400 font-bold tracking-widest uppercase mb-4 block">Work With Us</span>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Build the Future of <br/><span className="text-ketani-500">Logistics</span></h1>
                <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                    Join a team boasting over 50 years of combined experience.We are revolutionizing bulk commodity transport across Africa
                </p>
            </motion.div>
        </div>
      </section>

      {/* 2. VALUES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12">
                {[
                    { icon: Zap, title: "Innovation", text: "We leverage modern tech for end-to-end visibility." },
                    { icon: Users, title: "Collaboration", text: "We work as one unit across borders and timezones." },
                    { icon: Globe, title: "Impact", text: "We facilitate trade that drives African economies." },
                ].map((item, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="text-center">
                        <div className="w-16 h-16 bg-ketani-50 rounded-2xl flex items-center justify-center text-ketani-600 mx-auto mb-6">
                            <item.icon size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-slate-600">{item.text}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* 3. JOB LISTINGS */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Open Positions</h2>
            <p className="text-slate-600">
              We are always looking for talented individuals to help us optimize the movement of mineral products and agricultural inputs.
            </p>
          </div>

          <div className="grid gap-4 max-w-4xl mx-auto">
            {jobs.map((job, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 hover:border-ketani-300 hover:shadow-lg transition-all flex flex-col md:flex-row justify-between items-center gap-6 group"
              >
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-ketani-600 transition-colors">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 mt-3 text-slate-500 text-sm font-medium">
                    <span className="flex items-center gap-1.5"><MapPin size={16} className="text-ketani-500"/> {job.location}</span>
                    <span className="flex items-center gap-1.5"><Clock size={16} className="text-ketani-500"/> {job.type}</span>
                    <span className="flex items-center gap-1.5"><Briefcase size={16} className="text-ketani-500"/> {job.dept}</span>
                  </div>
                </div>
                <button className="px-8 py-3 bg-slate-50 text-slate-900 font-bold rounded-xl group-hover:bg-ketani-600 group-hover:text-white transition-all whitespace-nowrap flex items-center gap-2">
                  Apply Now <ArrowRight size={16} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}