import React from 'react';
import { motion } from 'framer-motion';

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* 
        NOTE: Replace the src below with the actual path to your uploaded logo file.
        Example: src="/logo.png" if you place logo.png in the public folder.
      */}
      <motion.img 
        src="/DS-LOGO.jpg" 
        alt="Dace's Samgyeopsal Logo"
        className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-[0_0_15px_rgba(217,4,41,0.5)]"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
};