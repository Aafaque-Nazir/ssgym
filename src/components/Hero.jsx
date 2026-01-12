import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight, Play, Zap, Dumbbell, Trophy } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[110vh] w-full flex items-center justify-center overflow-hidden bg-dark-950">
      {/* Background Image with Deep Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950/40 via-dark-950/60 to-dark-950 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-transparent to-dark-950 z-10" />
        <motion.div 
            initial={{ scale: 1.15, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.5 }}
            transition={{ duration: 3, ease: "easeOut" }}
            className="w-full h-full"
        >
            <img
            src="https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=1974&auto=format&fit=crop"
            alt="Best Gym Experience"
            className="w-full h-full object-cover grayscale contrast-125"
            />
        </motion.div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 relative z-20 pt-20">
        <div className="flex flex-col items-center text-center">
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="flex items-center gap-3 mb-8"
            >
                <div className="w-8 h-[1px] bg-gold-400" />
                <span className="text-gold-400 font-bold tracking-[0.5em] uppercase text-[10px] md:text-xs">
                    Best Gym in Panvel & Navi Mumbai
                </span>
                <div className="w-8 h-[1px] bg-gold-400" />
            </motion.div>

            <div className="relative mb-10">
                <h1 className="text-[14vw] md:text-[12vw] lg:text-[160px] font-heading font-black leading-[0.85] tracking-tighter text-white uppercase italic select-none">
                    <motion.span
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 1, type: "spring" }}
                        className="block translate-x-[-2vw] md:translate-x-[-4vw]"
                    >
                        GET
                    </motion.span>
                    <motion.span
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1, type: "spring" }}
                        className="block gold-gradient filter drop-shadow-[0_10px_30px_rgba(255,215,0,0.2)]"
                    >
                        STRONGER.
                    </motion.span>
                </h1>
            </div>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-white/50 text-base md:text-lg lg:text-xl max-w-2xl mx-auto font-medium leading-relaxed mb-12 px-4"
            >
                Transform your body with expert training and world-class equipment. Join Shree Samarth Gym today for a better, healthier lifestyle.
            </motion.p>
            
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3, duration: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-8"
            >
                <Link to="contact" smooth={true} className="w-full sm:w-auto">
                    <button className="group relative w-full sm:w-auto bg-white text-black px-14 py-6 rounded-full font-black text-xs uppercase tracking-widest overflow-hidden transition-all duration-500 hover:shadow-[0_0_50px_rgba(255,255,255,0.2)] active:scale-95">
                        <span className="relative z-10 flex items-center justify-center gap-3">
                            Join Now <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </span>
                        <div className="absolute inset-x-0 bottom-0 h-0 bg-gold-400 group-hover:h-full transition-all duration-500" />
                    </button>
                </Link>

                <div className="flex items-center gap-12 sm:gap-6">
                    <button className="flex items-center gap-4 group">
                        <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:border-gold-400 group-hover:bg-gold-400/5 transition-all duration-500 overflow-hidden relative">
                             <Play className="w-5 h-5 fill-white group-hover:fill-gold-400 transition-all z-10" />
                             <div className="absolute inset-0 bg-gold-400/10 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
                        </div>
                        <div className="text-left">
                            <span className="block text-[10px] text-white/40 font-bold uppercase tracking-widest">Video</span>
                            <span className="block text-sm font-bold uppercase tracking-widest text-white group-hover:text-gold-400 transition-colors">Gym Tour</span>
                        </div>
                    </button>
                </div>
            </motion.div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/20 select-none"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-gold-400/50 to-transparent" />
        <span className="text-[10px] uppercase tracking-[0.5em] font-bold">Scroll Down</span>
      </motion.div>

      {/* Radial Glows */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-gold-400/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[60vw] h-[60vh] bg-gold-400/10 blur-[200px] rounded-full pointer-events-none" />
    </section>
  );
};

export default Hero;
