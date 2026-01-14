import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, ChevronDown, Home, Truck, Info, Briefcase, Phone, Package, Download, Layers, FolderOpen, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SearchModal from './SearchModal';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus when route changes
  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
    setMobileResourcesOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Logistics', path: '/logistics', icon: Truck },
    { name: 'Commodities', path: '/commodities', icon: Package },
    { name: 'About Us', path: '/about', icon: Info },
  ];

  const resourceLinks = [
    //{ name: 'Company Profile', icon: Download, action: 'download', path: '/Ketani_Logistics_Company_Profile.pdf' },
    { name: 'Hypermedia & News', icon: Layers, path: '/hypermedia' }
  ];

  return (
    <>
        {/* Search Modal */}
        <SearchModal isOpen={showSearch} onClose={() => setShowSearch(false)} />

        <nav className={`fixed w-full z-[100] transition-all duration-300 ${scrolled || isOpen ? 'bg-slate-900/95 backdrop-blur-md shadow-xl py-3 border-b border-white/5' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group z-[110]">
                <img src="/logo.png" alt="Ketani Logistics Logo" className="w-10 h-10" />
                <span className={`text-xl md:text-2xl font-bold tracking-tight transition-colors text-white`}>
                    Ketani {" "}<span className="text-ketani-500">Logistics</span>
                </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
                <Link 
                key={link.name} 
                to={link.path}
                className={`relative px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium transition-all hover:bg-white/10 ${scrolled ? 'text-slate-300 hover:text-white' : 'text-slate-200 hover:text-white'}`}
                >
                <link.icon size={16} className="opacity-70" />
                <span>{link.name}</span>
                </Link>
            ))}

            {/* Resources Dropdown */}
            <div 
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
            >
                <button 
                    className={`relative px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium transition-all hover:bg-white/10 ${scrolled ? 'text-slate-300 hover:text-white' : 'text-slate-200 hover:text-white'}`}
                >
                    <FolderOpen size={16} className="opacity-70" />
                    <span>Resources</span>
                    <ChevronDown size={14} className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                    {dropdownOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full right-0 mt-2 w-60 bg-slate-900 border border-slate-700 rounded-2xl shadow-xl overflow-hidden p-2"
                        >
                            {resourceLinks.map((item, i) => (
                                item.action === 'download' ? (
                                    <a 
                                        key={i}
                                        href={item.path}
                                        download
                                        className="flex items-center gap-3 px-4 py-3 text-sm text-slate-300 hover:bg-white/10 hover:text-white rounded-xl transition-colors cursor-pointer"
                                    >
                                        <div className="p-1.5 bg-ketani-500/20 rounded-lg text-ketani-500"><item.icon size={16} /></div>
                                        <span>{item.name}</span>
                                    </a>
                                ) : (
                                    <Link 
                                        key={i}
                                        to={item.path}
                                        className="flex items-center gap-3 px-4 py-3 text-sm text-slate-300 hover:bg-white/10 hover:text-white rounded-xl transition-colors"
                                    >
                                        <div className="p-1.5 bg-slate-700 rounded-lg"><item.icon size={16} /></div>
                                        <span>{item.name}</span>
                                    </Link>
                                )
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Desktop Search Button */}
            <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowSearch(true)}
                className={`relative px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium transition-all hover:bg-white/10 ${scrolled ? 'text-slate-300 hover:text-white' : 'text-slate-200 hover:text-white'}`}
                aria-label="Search"
            >
                <Search size={16} className="opacity-70" />
            </motion.button>

            <Link to="/contact" className="ml-4">
                <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-ketani-600 hover:bg-ketani-500 text-white px-6 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg shadow-ketani-500/20"
                >
                Get Quote <ChevronRight size={16} />
                </motion.button>
            </Link>
            </div>

            {/* Mobile Search & Toggle */}
            <div className="lg:hidden flex items-center gap-2 z-[110]">
                {/* Mobile Search Button */}
                <motion.button 
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowSearch(true)}
                    className="text-white bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors"
                    aria-label="Search"
                >
                    <Search size={20} />
                </motion.button>

                {/* Mobile Menu Toggle */}
                <button 
                    className="text-white bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors" 
                    onClick={() => setIsOpen(!isOpen)}
                >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </div>
        </nav>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
            {isOpen && (
            <motion.div 
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed inset-0 z-[90] bg-slate-950 lg:hidden pt-24 px-6 overflow-y-auto"
            >
                <div className="flex flex-col gap-2 pb-10">
                    {navLinks.map((link, idx) => (
                        <motion.div
                            key={link.name}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <Link 
                            to={link.path}
                            className="flex items-center gap-4 text-slate-300 p-4 rounded-xl hover:bg-white/5 active:bg-white/10 transition-colors border border-transparent hover:border-white/5"
                            >
                            <link.icon size={22} className="text-ketani-500" />
                            <span className="font-medium text-xl">{link.name}</span>
                            </Link>
                        </motion.div>
                    ))}

                    {/* Mobile Resources Accordion */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="border-t border-slate-800 my-2 pt-4"
                    >
                        <button 
                            onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                            className="w-full flex items-center justify-between text-slate-300 p-4 rounded-xl hover:bg-white/5 transition-colors"
                        >
                            <div className="flex items-center gap-4">
                                <FolderOpen size={22} className="text-ketani-500" />
                                <span className="font-medium text-xl">Resources</span>
                            </div>
                            <ChevronDown size={20} className={`transition-transform duration-300 ${mobileResourcesOpen ? 'rotate-180' : ''}`} />
                        </button>
                        
                        <AnimatePresence>
                            {mobileResourcesOpen && (
                                <motion.div 
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden pl-4"
                                >
                                    {resourceLinks.map((item, i) => (
                                        item.action === 'download' ? (
                                            <a 
                                                key={i}
                                                href={item.path}
                                                download
                                                className="flex items-center gap-4 text-slate-400 p-4 rounded-xl hover:text-white transition-colors"
                                            >
                                                <div className="w-1 h-8 bg-ketani-500/20 rounded-full"></div>
                                                <span className="text-lg">{item.name}</span>
                                            </a>
                                        ) : (
                                            <Link 
                                                key={i}
                                                to={item.path}
                                                className="flex items-center gap-4 text-slate-400 p-4 rounded-xl hover:text-white transition-colors"
                                            >
                                                <div className="w-1 h-8 bg-ketani-500/20 rounded-full"></div>
                                                <span className="text-lg">{item.name}</span>
                                            </Link>
                                        )
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mt-6"
                    >
                        <Link to="/contact">
                            <button className="w-full bg-ketani-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-ketani-500 transition-colors">
                            Get Quote
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
            )}
        </AnimatePresence>
    </>
  );
}