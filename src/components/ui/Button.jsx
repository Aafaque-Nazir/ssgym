import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export const Button = ({ children, className, variant = 'primary', ...props }) => {
  const variants = {
    primary: 'bg-gold-500 text-black hover:bg-gold-400',
    secondary: 'bg-dark-700 text-white hover:bg-dark-800 border border-white/10',
    outline: 'bg-transparent text-gold-400 border border-gold-400 hover:bg-gold-400/10',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        'px-8 py-3 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
};
