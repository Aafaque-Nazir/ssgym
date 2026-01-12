import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Dumbbell, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'Services', to: 'about' },
    { name: 'Reviews', to: 'reviews' },
    { name: 'Pricing', to: 'pricing' },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
          isScrolled ? 'py-4 translate-y-2' : 'py-8'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-center">
          <div className={`flex items-center justify-between w-full max-w-6xl px-6 py-3 rounded-full transition-all duration-500 
            ${isScrolled ? 'glass-morphism shadow-2xl backdrop-blur-xl' : 'bg-transparent'}`}>
            
            <Link to="home" smooth={true} className="cursor-pointer group flex items-center gap-2">
              <div className="w-10 h-10 bg-gold-400 rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500 shadow-[0_0_15px_rgba(255,215,0,0.3)]">
                <Dumbbell className="text-black w-6 h-6" />
              </div>
              <span className="text-xl font-heading font-black tracking-tighter text-white uppercase italic">
                SAMARTH<span className="text-gold-400">.</span>
              </span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  spy={true}
                  activeClass="text-gold-400 !font-bold"
                  className="text-white/60 hover:text-white cursor-pointer font-medium transition-all duration-300 text-xs uppercase tracking-widest relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold-400 transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:block">
              <Link to="contact" smooth={true}>
                <button className="bg-gold-400 text-black px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white hover:scale-105 transition-all duration-500 shadow-xl shadow-gold-400/20 active:scale-95">
                  Join Now
                </button>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2 z-50">
              {isOpen ? <X className="w-6 h-6 text-gold-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Moved outside <nav> to prevent transform inheritance issues */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-dark-950/98 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={link.to}
                  smooth={true}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-heading font-black text-white hover:text-gold-400 transition-colors uppercase italic"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
            >
                <Link to="contact" smooth={true} onClick={() => setIsOpen(false)}>
                <button className="bg-gold-400 text-black px-10 py-4 rounded-full font-bold text-lg uppercase tracking-widest hover:bg-white transition-all active:scale-95 shadow-2xl shadow-gold-400/20">
                    Start Today
                </button>
                </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;