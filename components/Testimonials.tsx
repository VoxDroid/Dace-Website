import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-brand-darkRed relative overflow-hidden">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-white font-display text-4xl md:text-5xl mb-4">Mga Ka-Buchog Says</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <motion.div 
              key={t.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 relative"
            >
              <Quote size={40} className="text-brand-yellow opacity-50 absolute top-4 right-4" />
              <p className="text-white text-lg italic mb-6">"{t.comment}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-brand-yellow flex items-center justify-center text-brand-darkRed font-bold text-xl mr-3">
                    {t.name.charAt(0)}
                </div>
                <div>
                    <h4 className="text-white font-bold">{t.name}</h4>
                    <div className="flex text-brand-yellow text-xs">
                        {'★'.repeat(t.rating)}
                    </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};