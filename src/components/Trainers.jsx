import React from 'react';
import { motion } from 'framer-motion';

const trainers = [
  {
    name: 'Rahul Patil',
    role: 'Head Trainer',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1287&auto=format&fit=crop',
  },
  {
    name: 'Priya Sharma',
    role: 'Yoga & Nutrition',
    image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1470&auto=format&fit=crop',
  },
  {
    name: 'Amit Deshmukh',
    role: 'Strength Coach',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop',
   }
];

const Trainers = () => {
  return (
    <section id="trainers" className="py-24 bg-dark-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-gold-400 font-bold tracking-widest uppercase mb-2">Expert Team</h2>
          <h3 className="text-4xl font-heading font-bold text-white">Meet The Trainers</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-2xl h-[400px]"
            >
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-2xl font-bold text-white mb-1">{trainer.name}</h4>
                <p className="text-gold-400 font-medium">{trainer.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
