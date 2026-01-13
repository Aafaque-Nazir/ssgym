import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

const testimonials = [
  {
    name: "Irazul Bagwan",
    role: "Regular Member",
    content: "My gym trainer Abhishek Sir is very professional, knowledgeable, and supportive. His guidance has helped me stay consistent, improve strength, and remain motivated. He genuinely cares about results.",
    rating: 5,
    source: "Google Maps"
  },
  {
    name: "Swapna Khot",
    role: "Regular Member",
    content: "Best gym to reach out for fitness because it is well equipped... the owner Umesh sir is too helpful focusing on what is required based on physical and medical condition. Highly professional and motivating.",
    rating: 5,
    source: "Google Maps"
  },
  {
    name: "Rushikesh Patil",
    role: "Regular Member",
    content: "Best gym for working out! Staff are very supportive, also owner Mr. Umesh Patil has good knowledge about fitness and nutrition. Overall good atmosphere and highly recommended.",
    rating: 5,
    source: "Google Maps"
  },
  {
    name: "Raj Pawshe",
    role: "Regular Member",
    content: "Fantastic gym! The equipment is top class, atmosphere is motivating and there's always a friendly vibe. Perfect place for anyone serious about fitness. Seen great results!",
    rating: 5,
    source: "Google Maps"
  },
  {
    name: "Mohdshahbaz",
    role: "Regular Member",
    content: "Really good equipments and spacious gym. Trainers are also very helpful especially Mr. Aniket Kamble Sir. Really experienced, knowledgeable and trains properly.",
    rating: 5,
    source: "Google Maps"
  },
  {
    name: "Ketaki Joshi",
    role: "Regular Member",
    content: "Great gym for beginners as well as fitness enthusiasts. Super energetic and positive vibes. All the equipments are well maintained. A very productive environment.",
    rating: 5,
    source: "Google Maps"
  }
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.9
    })
  };

  return (
    <section id="reviews" className="py-32 bg-dark-900 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-gold-400/5 blur-[120px] rounded-full" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-400/10 border border-gold-400/20 text-gold-400 text-xs font-bold uppercase tracking-[0.2em] mb-6">
              <Star className="w-3 h-3 fill-current" />
              Trusted by 850+ Members
            </div>
            <h2 className="text-[50px] md:text-[80px] font-heading font-black tracking-tighter text-white uppercase italic leading-[0.85] mb-8">
              WHAT OUR <br />
              <span className="gold-gradient">FAMILY SAYS</span>
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 p-8 rounded-[30px] flex flex-col items-center text-center glass-morphism min-w-[280px]"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-gold-400 text-gold-400" />
              ))}
            </div>
            <div className="text-5xl font-heading font-black text-white mb-2">4.8</div>
            <div className="text-white/40 text-xs font-bold uppercase tracking-widest mb-6">Google Maps Rating</div>
            <div className="flex items-center gap-2 text-gold-400 bg-gold-400/10 px-4 py-2 rounded-full border border-gold-400/20 text-[10px] font-black uppercase tracking-widest">
              <MapPin className="w-3 h-3 fill-current" />
              Panvel's Highest Rated
            </div>
          </motion.div>
        </div>

        {/* Custom Slider */}
        <div className="relative h-[450px] md:h-[350px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 }
              }}
              className="absolute w-full max-w-4xl"
            >
              <div className="bg-dark-800/50 border border-white/5 p-10 md:p-16 rounded-[40px] glass-morphism relative group">
                <Quote className="absolute top-10 right-10 w-20 h-20 text-white/5 pointer-events-none group-hover:text-gold-400/5 transition-colors duration-700" />
                
                <div className="relative z-10 flex flex-col md:flex-row gap-8 md:items-center">
                    <div className="w-20 h-20 rounded-2xl bg-gold-400 flex items-center justify-center text-black text-3xl font-black italic shadow-[0_10px_30px_rgba(255,215,0,0.2)]">
                        {testimonials[index].name[0]}
                    </div>
                    
                    <div className="flex-1">
                        <div className="flex gap-1 mb-4">
                            {[...Array(testimonials[index].rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                            ))}
                        </div>
                        <p className="text-white/80 text-xl md:text-2xl font-medium leading-relaxed italic mb-8">
                            "{testimonials[index].content}"
                        </p>
                        <div className="flex items-center justify-between">
                            <div>
                                <h4 className="text-white font-bold text-lg uppercase tracking-tight">{testimonials[index].name}</h4>
                                <p className="text-white/30 text-xs font-bold uppercase tracking-[0.2em]">{testimonials[index].role}</p>
                            </div>
                            <div className="flex items-center gap-2 opacity-30 group-hover:opacity-100 transition-opacity">
                                <span className="text-[10px] font-bold text-white uppercase tracking-widest">via {testimonials[index].source}</span>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 md:bottom-auto md:left-auto md:translate-x-0 md:-right-10 md:top-1/2 md:-translate-y-1/2 flex md:flex-col gap-5 z-20">
            <button 
              onClick={prev}
              className="w-16 h-16 rounded-full border-2 border-white/10 bg-dark-900/50 backdrop-blur-md flex items-center justify-center hover:bg-gold-400 hover:border-gold-400 hover:text-black transition-all duration-500 group shadow-2xl active:scale-90"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-7 h-7 transform group-hover:-translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={next}
              className="w-16 h-16 rounded-full border-2 border-white/10 bg-dark-900/50 backdrop-blur-md flex items-center justify-center hover:bg-gold-400 hover:border-gold-400 hover:text-black transition-all duration-500 group shadow-2xl active:scale-90"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-7 h-7 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-24">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                i === index ? 'w-12 bg-gold-400' : 'w-4 bg-white/10 hover:bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
