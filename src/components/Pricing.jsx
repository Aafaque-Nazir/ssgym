import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Link } from 'react-scroll';

const plans = [
  {
    name: 'Basic',
    price: '1499',
    period: '/month',
    features: ['Gym Access', 'Cardio Area', 'Locker Room', 'Basic Support'],
    recommended: false,
  },
  {
    name: 'Standard',
    price: '3999',
    period: '/3 months',
    features: ['Everything in Basic', '2 Personal Sessions', 'Diet Chart', 'Steam Bath'],
    recommended: true,
  },
  {
    name: 'Premium',
    price: '9999',
    period: '/year',
    features: ['Everything in Standard', 'Full PT Support', 'Weekly Tracking', 'Priority Help'],
    recommended: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-dark-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-gold-400 font-bold tracking-widest uppercase mb-2">Our Plans</h2>
          <h3 className="text-4xl font-heading font-black text-white uppercase italic">Choose Your Plan</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative p-8 rounded-2xl backdrop-blur-sm border ${
                plan.recommended 
                  ? 'bg-dark-700/60 border-gold-400 transform md:-translate-y-4 shadow-2xl shadow-gold-400/10' 
                  : 'bg-dark-900/40 border-white/10'
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold-400 text-black font-bold px-4 py-1 rounded-full text-sm uppercase tracking-wide">
                  Most Popular
                </div>
              )}

              <h4 className="text-xl font-bold text-white mb-2">{plan.name}</h4>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold text-white">₹{plan.price}</span>
                <span className="text-white/40 text-sm ml-2">{plan.period}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-white/70">
                    <Check className="w-5 h-5 text-gold-400 mr-3 flex-shrink-0" />
                    <span className="text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to="contact" smooth={true}>
                <button className={`w-full py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300 ${
                    plan.recommended 
                    ? 'bg-gold-400 text-black hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]' 
                    : 'bg-white/5 text-white border border-white/10 hover:border-gold-400'
                }`}>
                    Get Started
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
