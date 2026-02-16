import React from 'react';
import { motion } from 'framer-motion';
import { SectionId } from '../types';
import { Logo } from './Logo';
import { TAGLINE } from '../constants';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id={SectionId.HOME} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-black">
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/1920/1080?blur=5')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-darkRed/80 to-brand-purple/40 mix-blend-multiply"></div>
        
        {/* Animated Orbs for Fire Effect */}
        <motion.div 
            animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-red rounded-full filter blur-[120px] opacity-30"
        />
        <motion.div 
            animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="absolute top-1/4 right-1/4 w-64 h-64 bg-brand-yellow rounded-full filter blur-[100px] opacity-20"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="mb-8"
        >
            <Logo className="scale-150 md:scale-125 mb-8 mt-12" />
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-3xl"
        >
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight drop-shadow-lg">
                <span className="text-brand-yellow block mb-2">SAMGYUP NA PANG MASA</span>
                <span className="text-3xl md:text-5xl">NA MABU-BUCHOG KA!</span>
            </h2>
            
            <p className="font-sans text-xl md:text-2xl text-gray-200 mb-10 font-light italic border-l-4 border-brand-red pl-6 text-left md:text-center md:border-l-0 md:border-t-4 md:pt-6">
                "{TAGLINE}"
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => document.getElementById(SectionId.MENU)?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-8 py-4 bg-brand-red text-white font-bold rounded-full text-lg shadow-[0_0_20px_rgba(217,4,41,0.5)] hover:bg-brand-yellow hover:text-brand-darkRed transition-colors uppercase tracking-widest"
                >
                    View Menu
                </motion.button>
                <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => document.getElementById(SectionId.LOCATION)?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full text-lg hover:bg-white hover:text-brand-black transition-colors uppercase tracking-widest"
                >
                    Visit Us
                </motion.button>
            </div>
        </motion.div>

      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 cursor-pointer"
        onClick={() => document.getElementById(SectionId.MENU)?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown size={40} />
      </motion.div>
    </section>
  );
};