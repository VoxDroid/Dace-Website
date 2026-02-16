import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Facebook } from 'lucide-react';
import { SectionId } from '../types';
import { FACEBOOK_URL } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', id: SectionId.HOME },
    { name: 'Menu', id: SectionId.MENU },
    { name: 'Location', id: SectionId.LOCATION },
    { name: 'Contact', id: SectionId.LOCATION }, // Point Contact to Location section where details are
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-black/95 backdrop-blur-sm border-b border-brand-red/30 py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => scrollToSection(SectionId.HOME)}>
             <span className="font-display text-2xl tracking-wider text-white">
               DACE'S <span className="text-brand-red">BBQ</span>
             </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className="hover:text-brand-yellow text-white px-3 py-2 rounded-md text-sm font-medium transition-colors uppercase tracking-widest"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
             <a 
                href={FACEBOOK_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors"
             >
                <Facebook size={20} />
             </a>
             <a href={`tel:09384752514`} className="flex items-center space-x-2 bg-brand-red hover:bg-brand-darkRed text-white px-4 py-2 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-brand-red/50">
                <Phone size={18} />
                <span>Call Us</span>
             </a>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-brand-darkRed focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-black border-t border-brand-red/20 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className="text-gray-300 hover:text-brand-yellow hover:bg-gray-900 block px-3 py-4 rounded-md text-base font-bold w-full text-left uppercase"
                >
                  {link.name}
                </button>
              ))}
               <div className="flex space-x-2 mt-4 px-3">
                  <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 bg-blue-600 text-white w-full py-3 rounded-md font-bold">
                    <Facebook size={18} />
                    <span>Facebook</span>
                 </a>
               </div>
               <div className="px-3 pb-4 pt-2">
                 <a href={`tel:09384752514`} className="flex items-center justify-center space-x-2 bg-brand-red text-white w-full py-3 rounded-md font-bold">
                  <Phone size={18} />
                  <span>0938 475 2514</span>
               </a>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};