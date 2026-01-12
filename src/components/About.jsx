import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Shield, Crown, Dumbbell, Star, Activity, Heart, Users } from 'lucide-react';

const BentoGrid = () => {
  const items = [
    {
      title: "Personal Training",
      desc: "Work with expert trainers to reach your goals faster.",
      icon: <Crown className="w-8 h-8 text-gold-400" />,
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=687&auto=format&fit=crop",
      tag: "1-on-1 Help"
    },
    {
      title: "Pro Equipment",
      desc: "Top quality machines and weights for all your needs.",
      icon: <Dumbbell className="w-6 h-6 text-gold-400" />,
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop",
      tag: "Strength Area"
    },
    {
       title: "Diet Plans",
       desc: "Get customized food charts to stay healthy and fit.",
       icon: <Shield className="w-6 h-6 text-gold-400" />,
       image: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=1470&auto=format&fit=crop",
       tag: "Eat Right"
    },
    {
      title: "Fast Recovery",
      desc: "Relax your muscles after a hard workout.",
      icon: <Zap className="w-8 h-8 text-gold-400" />,
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1470&auto=format&fit=crop",
      tag: "Rest Area"
    },
    {
      title: "Great Vibes",
      desc: "Meet motivated people and train in a friendly environment.",
      icon: <Users className="w-6 h-6 text-gold-400" />,
      image: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1471&auto=format&fit=crop",
      tag: "Join Today"
    }
  ];

  return (
    <section id="about" className="py-32 bg-dark-950 px-6 overflow-hidden">
      <div className="container mx-auto">
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-24 flex flex-col md:flex-row items-end justify-between gap-8 border-l-2 border-gold-400/30 pl-8"
        >
          <div>
            <h2 className="text-[60px] md:text-[100px] font-heading font-black tracking-tighter text-white uppercase leading-[0.85]">
                FITNESS <br />
                <span className="gold-gradient">FOR ALL</span>
            </h2>
            <p className="text-white/40 max-w-xl mt-8 text-lg md:text-xl font-medium leading-relaxed">
                Start your fitness journey with us. We have everything you need to transform your body and mind in a professional way.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/5 flex flex-col items-center min-w-[120px]">
                <span className="text-gold-400 text-[2.5rem] font-black italic">24/7</span>
                <span className="text-white/30 text-[10px] font-bold uppercase tracking-widest">Open</span>
            </div>
          </div>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[1000px]">
          {/* Personal Training */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="md:col-span-2 md:row-span-1 bento-card rounded-3xl p-12 flex flex-col justify-end group cursor-pointer"
          >
             <div className="absolute inset-0 z-0">
                <img src={items[0].image} className="w-full h-full object-cover opacity-40 group-hover:opacity-70 transition-all duration-1000 scale-105 group-hover:scale-110" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent" />
             </div>
             <div className="relative z-10">
                <div className="mb-6 inline-block px-4 py-1.5 rounded-full bg-gold-400 text-black text-[10px] font-black uppercase tracking-[0.2em]">{items[0].tag}</div>
                <h3 className="text-5xl font-heading font-black text-white mb-6 uppercase italic leading-tight">{items[0].title}</h3>
                <p className="text-white/70 max-w-sm text-lg font-medium leading-relaxed">{items[0].desc}</p>
             </div>
          </motion.div>

          {/* Recovery */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="md:col-span-1 md:row-span-2 bento-card rounded-3xl p-10 flex flex-col justify-between group cursor-pointer"
          >
             <div className="absolute inset-0">
                <img src={items[3].image} className="w-full h-full object-cover opacity-30 grayscale-[0.2] filter contrast-125 transition-transform duration-1000 group-hover:scale-110" alt="" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-950/40 to-dark-950" />
             </div>
             <div className="relative z-10 p-5 bg-gold-400/10 border border-gold-400/30 rounded-3xl w-fit group-hover:bg-gold-400 group-hover:text-black transition-all duration-500">
                {items[3].icon}
             </div>
             <div className="relative z-10">
                <div className="mb-4 text-gold-400 text-[10px] font-black uppercase tracking-widest">{items[3].tag}</div>
                <h3 className="text-3xl font-heading font-black text-white mb-4 uppercase italic leading-none">{items[3].title}</h3>
                <p className="text-white/50 text-base leading-relaxed">{items[3].desc}</p>
             </div>
          </motion.div>

          {/* Pro Equipment */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="md:col-span-1 bento-card rounded-3xl p-10 flex flex-col justify-between group cursor-pointer"
          >
             <div className="absolute inset-0">
                <img src={items[1].image} className="w-full h-full object-cover opacity-30 transition-all duration-700 group-hover:opacity-60" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 to-transparent" />
             </div>
             <div className="relative z-10 p-4 bg-white/5 rounded-2xl w-fit group-hover:border-gold-400 transition-all">
                {items[1].icon}
             </div>
             <div className="relative z-10">
                <h3 className="text-2xl font-heading font-black text-white mb-2 uppercase italic">{items[1].title}</h3>
                <p className="text-white/40 text-xs font-bold uppercase tracking-widest italic">{items[1].tag}</p>
             </div>
          </motion.div>

          {/* Vibes */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="md:col-span-2 bento-card rounded-3xl p-12 group cursor-pointer overflow-hidden"
          >
             <div className="flex flex-col md:flex-row h-full gap-12 items-center">
                <div className="flex-1 flex flex-col justify-center text-center md:text-left">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 text-white/40 text-[10px] font-black uppercase tracking-widest w-fit mb-6 mx-auto md:mx-0">{items[4].tag}</div>
                    <h3 className="text-4xl font-heading font-black text-white mb-6 uppercase italic">{items[4].title}</h3>
                    <p className="text-white/60 text-lg leading-relaxed">{items[4].desc}</p>
                </div>
                <div className="flex-1 w-full h-full min-h-[250px] rounded-2xl overflow-hidden border border-white/5 group-hover:border-gold-400/20 transition-all duration-700 relative">
                    <img src={items[4].image} className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700" alt="" />
                </div>
             </div>
          </motion.div>

          {/* Diet Plans */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="md:col-span-1 bento-card rounded-3xl p-10 flex flex-col justify-end group cursor-pointer"
          >
              <div className="absolute inset-0">
                <img src={items[2].image} className="w-full h-full object-cover opacity-20 filter grayscale-[0.3] group-hover:opacity-50 transition-all duration-700" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 to-transparent" />
              </div>
              <div className="relative z-10">
                <div className="p-4 bg-white/5 rounded-2xl w-fit mb-6">
                    {items[2].icon}
                </div>
                <h3 className="text-2xl font-heading font-black text-white mb-2 uppercase italic">{items[2].title}</h3>
                <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">{items[2].tag}</p>
              </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
