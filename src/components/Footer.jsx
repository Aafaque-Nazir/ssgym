import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 bg-dark-950 border-t border-white/5">
      <div className="container mx-auto px-6 text-center">
        <p className="text-white/30 text-xs font-medium uppercase tracking-[0.3em]">
          &copy; {new Date().getFullYear()} Shree Samarth Gym. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
