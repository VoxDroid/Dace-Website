import React from 'react';
import { motion } from 'framer-motion';
import { SectionId } from '../types';
import { MENU_ITEMS } from '../constants';
import { Flame, Star } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const Menu: React.FC = () => {
  return (
    <section id={SectionId.MENU} className="py-24 bg-brand-black relative">
       {/* Decorative element */}
       <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/20 rounded-full filter blur-[80px] -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-brand-yellow font-display text-5xl md:text-6xl mb-4 tracking-wide">Our Best Sellers</h2>
            <div className="h-1 w-24 bg-brand-red mx-auto rounded-full mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Authentic taste, generous servings, price that fits your budget.
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {MENU_ITEMS.map((item) => (
            <motion.div 
              key={item.id} 
              variants={itemVariant}
              className="group bg-[#1e1e1e] rounded-2xl overflow-hidden border border-gray-800 hover:border-brand-red transition-colors duration-300 shadow-xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                {item.popular && (
                  <div className="absolute top-4 right-4 bg-brand-yellow text-brand-black font-bold px-3 py-1 rounded-full text-xs flex items-center shadow-lg">
                    <Flame size={14} className="mr-1 fill-brand-red text-brand-red" />
                    BEST SELLER
                  </div>
                )}
                <div className="absolute bottom-4 left-4">
                    {item.price && (
                        <span className="bg-brand-red text-white font-bold px-4 py-1 rounded-lg text-lg shadow-lg">
                            {item.price}
                        </span>
                    )}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2 font-display tracking-wide">{item.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                <div className="mt-4 pt-4 border-t border-gray-700 flex justify-between items-center">
                   <div className="flex text-brand-yellow">
                       {[...Array(5)].map((_, i) => (
                           <Star key={i} size={16} fill="currentColor" />
                       ))}
                   </div>
                   <span className="text-gray-500 text-xs uppercase tracking-widest font-bold">Must Try</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
            <p className="text-2xl font-display text-white italic">
                "...Abot Kaya Pa!!"
            </p>
        </div>
      </div>
    </section>
  );
};