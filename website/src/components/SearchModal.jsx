import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, FileText, Truck, Package, Download, Layers, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const SearchModal = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const inputRef = useRef(null);

  // Color palette from Ketani Logistics (assuming ketani-500 is an orange/coral color)
  const colors = {
    slate900: '#0f172a',
    slate800: '#1e293b',
    slate700: '#334155',
    slate600: '#475569',
    slate300: '#cbd5e1',
    ketani500: '#f97316', // Assuming orange-500
    ketani600: '#ea580c', // Assuming orange-600
  };

  // Searchable content for Ketani Logistics
  const searchableContent = [
    {
      title: 'Home',
      path: '/',
      description: 'Ketani Logistics - Your trusted logistics partner',
      keywords: ['home', 'main', 'landing', 'start', 'ketani', 'logistics'],
      category: 'Page'
    },
    {
      title: 'Logistics Services',
      path: '/logistics',
      description: 'Comprehensive logistics and transportation solutions',
      keywords: ['logistics', 'transport', 'shipping', 'delivery', 'freight'],
      category: 'Service'
    },
    {
      title: 'Commodities',
      path: '/commodities',
      description: 'Commodity trading and handling services',
      keywords: ['commodities', 'trading', 'goods', 'products', 'materials'],
      category: 'Service'
    },
    {
      title: 'About Us',
      path: '/about',
      description: 'Learn about Ketani Logistics and our expertise',
      keywords: ['about', 'company', 'who we are', 'team', 'history'],
      category: 'Page'
    },
    {
      title: 'Contact Us',
      path: '/contact',
      description: 'Get in touch with our team',
      keywords: ['contact', 'reach', 'get quote', 'inquiry', 'support'],
      category: 'Page'
    },
    {
      title: 'Careers',
      path: '/careers',
      description: 'Join our team - explore career opportunities',
      keywords: ['careers', 'jobs', 'employment', 'work', 'join'],
      category: 'Page'
    },
    {
      title: 'Services',
      path: '/services',
      description: 'Our range of logistics and transportation services',
      keywords: ['services', 'solutions', 'offerings', 'what we do'],
      category: 'Page'
    },
    {
      title: 'Hypermedia & News',
      path: '/hypermedia',
      description: 'Latest news, updates, and media resources',
      keywords: ['news', 'media', 'hypermedia', 'updates', 'press'],
      category: 'Resource'
    },
    // Logistics Services
    {
      title: 'Freight Transportation',
      path: '/logistics',
      description: 'Reliable freight transport across Southern Africa',
      keywords: ['freight', 'transport', 'trucking', 'haulage', 'cargo'],
      category: 'Service'
    },
    {
      title: 'Warehousing',
      path: '/logistics',
      description: 'Secure warehousing and storage solutions',
      keywords: ['warehouse', 'storage', 'facility', 'distribution'],
      category: 'Service'
    },
    {
      title: 'Supply Chain Management',
      path: '/logistics',
      description: 'End-to-end supply chain solutions',
      keywords: ['supply chain', 'management', 'logistics', 'coordination'],
      category: 'Service'
    },
    {
      title: 'Cross-Border Logistics',
      path: '/logistics',
      description: 'International and cross-border transportation',
      keywords: ['cross-border', 'international', 'imports', 'exports'],
      category: 'Service'
    },
    // Resources
    {
      title: 'Company Profile',
      path: '/Ketani_Logistics_Company_Profile.pdf',
      description: 'Download our company profile (PDF)',
      keywords: ['profile', 'download', 'document', 'company', 'brochure'],
      category: 'Resource',
      isDownload: true
    },
    // Action
    {
      title: 'Get Quote',
      path: '/contact',
      description: 'Request a quote for our services',
      keywords: ['quote', 'pricing', 'cost', 'request', 'inquiry'],
      category: 'Action'
    }
  ];

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Handle search
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const timer = setTimeout(() => {
      const query = searchQuery.toLowerCase();
      const results = searchableContent.filter(item => {
        const titleMatch = item.title.toLowerCase().includes(query);
        const descriptionMatch = item.description.toLowerCase().includes(query);
        const keywordsMatch = item.keywords.some(keyword => 
          keyword.toLowerCase().includes(query)
        );
        return titleMatch || descriptionMatch || keywordsMatch;
      });
      setSearchResults(results);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleClose = () => {
    setSearchQuery('');
    setSearchResults([]);
    onClose();
  };

  const handleResultClick = () => {
    handleClose();
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Service':
        return <Truck className="w-4 h-4" />;
      case 'Resource':
        return <Layers className="w-4 h-4" />;
      case 'Action':
        return <Briefcase className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Service':
        return 'bg-orange-50 text-orange-700 group-hover:bg-orange-100';
      case 'Resource':
        return 'bg-blue-50 text-blue-700 group-hover:bg-blue-100';
      case 'Action':
        return 'bg-green-50 text-green-700 group-hover:bg-green-100';
      default:
        return 'bg-gray-50 text-gray-700 group-hover:bg-gray-100';
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[110]"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-32 left-1/2 -translate-x-1/2 w-full max-w-2xl z-[120] px-4"
          >
            <div 
              className="rounded-2xl shadow-2xl overflow-hidden"
              style={{ 
                background: colors.slate900,
                border: `2px solid ${colors.ketani500}` 
              }}
            >
              {/* Search Input */}
              <div 
                className="flex items-center gap-3 p-4 border-b"
                style={{
                  background: `linear-gradient(to right, ${colors.slate800}, ${colors.slate900})`,
                  borderColor: colors.slate700,
                }}
              >
                <Truck className="w-5 h-5 flex-shrink-0" style={{ color: colors.ketani500 }} />
                <input
                  ref={inputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search services, resources, or pages..."
                  className="flex-1 outline-none text-white placeholder-slate-400 text-lg bg-transparent niveau-font"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="p-1 hover:bg-slate-800 rounded-full transition-colors"
                  >
                    <X className="w-4 h-4 text-slate-400" />
                  </button>
                )}
                <button
                  onClick={handleClose}
                  className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" style={{ color: colors.ketani500 }} />
                </button>
              </div>

              {/* Search Results */}
              <div className="max-h-[60vh] overflow-y-auto" style={{ background: colors.slate900 }}>
                {searchQuery.trim() === '' ? (
                  <div className="p-8 text-center">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{
                        background: `linear-gradient(135deg, ${colors.slate800}, ${colors.slate700})`,
                      }}
                    >
                      <Truck className="w-8 h-8" style={{ color: colors.ketani500 }} />
                    </div>
                    <p className="text-white font-semibold mb-2 niveau-font">
                      Start searching...
                    </p>
                    <p className="text-slate-400 text-sm niveau-font">
                      Try "logistics", "freight", "warehousing", or "quote"
                    </p>
                  </div>
                ) : isSearching ? (
                  <div className="p-8 text-center">
                    <div className="flex items-center justify-center space-x-2">
                      {[0, 0.2, 0.4].map((delay, index) => (
                        <motion.div
                          key={index}
                          animate={{
                            opacity: [0.3, 1, 0.3],
                            scale: [0.8, 1.3, 0.8],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: delay,
                            ease: "easeInOut",
                          }}
                          className="w-2 h-2 rounded-full"
                          style={{
                            background: colors.ketani500,
                          }}
                        />
                      ))}
                    </div>
                    <p className="text-slate-400 text-sm mt-3 niveau-font">Searching...</p>
                  </div>
                ) : searchResults.length > 0 ? (
                  <div className="py-2">
                    {searchResults.map((result, index) => (
                      result.isDownload ? (
                        <a
                          key={index}
                          href={result.path}
                          download
                          onClick={handleResultClick}
                          className="flex items-center gap-4 p-4 transition-colors duration-200 group border-b last:border-0"
                          style={{
                            background: colors.slate900,
                            borderColor: colors.slate800,
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = colors.slate800;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = colors.slate900;
                          }}
                        >
                          <div className={`p-2.5 rounded-lg transition-colors ${getCategoryColor(result.category)}`}>
                            <Download className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 
                                className="text-sm font-bold truncate niveau-font"
                                style={{ color: colors.ketani500 }}
                              >
                                {result.title}
                              </h3>
                              <span 
                                className="px-2 py-0.5 text-xs font-semibold rounded-full flex-shrink-0 niveau-font"
                                style={{
                                  background: colors.ketani500 + '20',
                                  color: colors.ketani500,
                                }}
                              >
                                {result.category}
                              </span>
                            </div>
                            <p className="text-xs text-slate-400 line-clamp-1 niveau-font">
                              {result.description}
                            </p>
                          </div>
                          <Download className="w-4 h-4 text-slate-400 flex-shrink-0 transition-colors" />
                        </a>
                      ) : (
                        <Link
                          key={index}
                          to={result.path}
                          onClick={handleResultClick}
                          className="flex items-center gap-4 p-4 transition-colors duration-200 group border-b last:border-0"
                          style={{
                            background: colors.slate900,
                            borderColor: colors.slate800,
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = colors.slate800;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = colors.slate900;
                          }}
                        >
                          <div className={`p-2.5 rounded-lg transition-colors ${getCategoryColor(result.category)}`}>
                            {getCategoryIcon(result.category)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 
                                className="text-sm font-bold truncate niveau-font"
                                style={{ color: colors.ketani500 }}
                              >
                                {result.title}
                              </h3>
                              <span 
                                className="px-2 py-0.5 text-xs font-semibold rounded-full flex-shrink-0 niveau-font"
                                style={{
                                  background: colors.ketani500 + '20',
                                  color: colors.ketani500,
                                }}
                              >
                                {result.category}
                              </span>
                            </div>
                            <p className="text-xs text-slate-400 line-clamp-1 niveau-font">
                              {result.description}
                            </p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-orange-500 flex-shrink-0 transition-colors" />
                        </Link>
                      )
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3"
                      style={{ background: colors.slate800 }}
                    >
                      <Search className="w-8 h-8 text-slate-500" />
                    </div>
                    <p className="text-white font-semibold mb-1 niveau-font">No results found</p>
                    <p className="text-slate-400 text-sm niveau-font">
                      Try searching with different keywords
                    </p>
                  </div>
                )}
              </div>

              {/* Footer */}
              {searchQuery.trim() === '' && (
                <div 
                  className="border-t px-4 py-3"
                  style={{
                    borderColor: colors.slate800,
                    background: colors.slate900,
                  }}
                >
                  <div className="flex items-center justify-between text-xs text-slate-400 niveau-font">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <kbd 
                          className="px-2 py-1 rounded text-xs font-semibold"
                          style={{
                            background: colors.slate800,
                            border: `2px solid ${colors.ketani500}`,
                            color: colors.ketani500,
                          }}
                        >
                          ↵
                        </kbd>
                        to select
                      </span>
                      <span className="flex items-center gap-1">
                        <kbd 
                          className="px-2 py-1 rounded text-xs font-semibold"
                          style={{
                            background: colors.slate800,
                            border: `2px solid ${colors.ketani500}`,
                            color: colors.ketani500,
                          }}
                        >
                          ESC
                        </kbd>
                        to close
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;