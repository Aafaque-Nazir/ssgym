import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Instagram, Twitter } from 'lucide-react';

const Contact = () => {
    const whatsappNumber = "919833769885";
    const whatsappMessage = "Hi Samarth Gym, I want to join the gym. Please share more details.";

  return (
    <section id="contact" className="py-32 bg-dark-950 px-6 relative">
      <div className="container mx-auto px-6">
        <div className="glass-morphism rounded-[40px] p-8 md:p-20 overflow-hidden relative">
          {/* Background Highlight */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gold-400/10 blur-[100px] rounded-full" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
            >
                <div className="inline-block px-4 py-1 rounded-full bg-gold-400/10 border border-gold-400/20 text-gold-400 text-xs font-bold uppercase tracking-[0.3em] mb-6">
                    Join Today
                </div>
                <h2 className="text-[50px] md:text-[70px] font-heading font-black tracking-tighter text-white uppercase italic leading-[0.9] mb-8">
                    READY TO <br /><span className="gold-gradient">START?</span>
                </h2>
                
                <p className="text-white/50 text-xl max-w-md mb-12">
                    Send us a message and start your transformation today. We are here to help you.
                </p>

                <div className="space-y-8">
                    <div className="flex items-center gap-6 group cursor-pointer">
                        <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:border-gold-400 group-hover:bg-gold-400 transition-all duration-500">
                            <MapPin className="w-6 h-6 group-hover:text-black transition-colors" />
                        </div>
                        <div>
                            <p className="text-white/40 text-xs uppercase tracking-widest mb-1 font-bold">Location</p>
                            <p className="text-white font-medium group-hover:text-gold-400 transition-colors">Panvel, Navi Mumbai</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-6 group cursor-pointer">
                        <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:border-gold-400 group-hover:bg-gold-400 transition-all duration-500">
                            <Phone className="w-6 h-6 group-hover:text-black transition-colors" />
                        </div>
                        <div>
                            <p className="text-white/40 text-xs uppercase tracking-widest mb-1 font-bold">Call Us</p>
                            <p className="text-white font-medium group-hover:text-gold-400 transition-colors">+91 98337 69885</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative"
            >
                <div className="bg-white/5 rounded-3xl p-10 border border-white/5">
                    <h3 className="text-2xl font-heading font-black text-white mb-8 uppercase italic">Contact Form</h3>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input type="text" placeholder="FULL NAME" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-xs font-bold tracking-widest focus:outline-none focus:border-gold-400 transition-all" />
                            <input type="tel" placeholder="PHONE" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-xs font-bold tracking-widest focus:outline-none focus:border-gold-400 transition-all" />
                        </div>
                        <textarea placeholder="ANY QUESTIONS?" rows="4" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-xs font-bold tracking-widest focus:outline-none focus:border-gold-400 transition-all resize-none"></textarea>
                        
                        <div className="pt-4 flex flex-col gap-4">
                            <button className="w-full bg-white text-black py-5 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-gold-400 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,215,0,0.2)]">
                                Send Message
                            </button>
                            
                            <a 
                                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                                target="_blank" 
                                rel="noreferrer"
                                className="w-full inline-block"
                            >
                                <button type="button" className="w-full bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 py-5 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-[#25D366] hover:text-white transition-all duration-500">
                                    WhatsApp Inquiry
                                </button>
                            </a>
                        </div>
                    </form>
                </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
