import React from 'react';
import { APP_NAME, FACEBOOK_URL } from '../constants';
import { Facebook, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black py-8 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-display text-white">{APP_NAME}</h3>
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()}. All Rights Reserved.</p>
        </div>
        
        <div className="flex space-x-6">
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-yellow transition-colors">
                <Facebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-brand-yellow transition-colors">
                <Instagram size={24} />
            </a>
        </div>
      </div>
    </footer>
  );
};