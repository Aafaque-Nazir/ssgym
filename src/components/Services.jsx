import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, HeartPulse, Bike, Zap, Users, Waves } from 'lucide-react';

const services = [
  {
    icon: Dumbbell,
    title: 'Strength Training',
    description: 'Top-tier free weights and resistance machines for muscle building.',
  },
  {
    icon: Bike,
    title: 'Cardio Zone',
    description: 'Advanced treadmills, ellipticals, and bikes to boost endurance.',
  },
  {
    icon: Zap,
    title: 'CrossFit',
    description: 'High-intensity functional movements to forge elite fitness.',
  },
  {
    icon: HeartPulse,
    title: 'Personal Training',
    description: 'Customized plans from certified experts to hit your goals fast.',
  },
  {
    icon: Users,
    title: 'Group Classes',
    description: 'Energetic sessions including Yoga, Zumba, and HIIT.',
  },
  {
    icon: Waves,
    title: 'Recovery',
    description: 'Steam and relaxation areas to recover after a hard session.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-dark-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-gold-400 font-bold tracking-widest uppercase mb-2">Our Facilities</h2>
          <h3 className="text-4xl font-heading font-bold text-white">World-Class Equipment</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-dark-900/50 p-8 rounded-2xl border border-white/5 hover:border-gold-400/30 transition-all group duration-300"
            >
              <div className="w-14 h-14 bg-dark-800 rounded-xl flex items-center justify-center mb-6 text-gold-400 group-hover:bg-gold-400 group-hover:text-black transition-colors duration-300">
                <service.icon className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-gold-400 transition-colors">
                {service.title}
              </h4>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
