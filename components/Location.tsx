import React from 'react';
import { SectionId } from '../types';
import { ADDRESS, PHONE_NUMBER, GOOGLE_MAPS_LINK } from '../constants';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';

export const Location: React.FC = () => {
  return (
    <section id={SectionId.LOCATION} className="py-24 bg-[#121212] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <h2 className="text-5xl font-display text-white mb-6">Visit Us Today!</h2>
            <p className="text-gray-400 text-lg">
                We are located in the heart of Barangay Banago. Perfect stop for your road trips or just a casual dinner with family and friends.
            </p>
            
            <div className="space-y-6">
                <div className="flex items-start">
                    <div className="bg-brand-red p-3 rounded-full mr-4 shrink-0">
                        <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-1">Our Location</h3>
                        <p className="text-gray-300">{ADDRESS}</p>
                        <a 
                          href={GOOGLE_MAPS_LINK} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center mt-2 text-brand-yellow hover:text-white transition-colors text-sm font-bold uppercase tracking-wider"
                        >
                          <ExternalLink size={16} className="mr-1" />
                          Get Directions via Google Maps
                        </a>
                    </div>
                </div>

                <div className="flex items-start">
                    <div className="bg-brand-red p-3 rounded-full mr-4 shrink-0">
                        <Phone className="text-white" size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-1">Contact Us</h3>
                        <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="text-gray-300 hover:text-brand-yellow transition-colors text-lg font-mono">
                            {PHONE_NUMBER}
                        </a>
                    </div>
                </div>

                <div className="flex items-start">
                    <div className="bg-brand-red p-3 rounded-full mr-4 shrink-0">
                        <Clock className="text-white" size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-1">Opening Hours</h3>
                        <p className="text-gray-300">Mon - Sun: 11:00 AM - 9:00 PM</p>
                    </div>
                </div>
            </div>
          </div>

          <div className="relative h-96 w-full rounded-3xl overflow-hidden border-4 border-brand-red/30 shadow-2xl group">
            {/* Embedded Google Map focusing on Nagcarlan/Banago area */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3868.583492716309!2d121.4137254!3d14.1352469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd5bd27fa98719%3A0x280f555193910543!2sDace's%20Samgyeopsal!5e0!3m2!1sen!2sph!4v1709904221532!5m2!1sen!2sph" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Dace's Samgyeopsal Location"
              className="filter grayscale group-hover:grayscale-0 transition-all duration-500"
            ></iframe>
            
            <a 
              href={GOOGLE_MAPS_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 bg-brand-red hover:bg-brand-darkRed text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg flex items-center justify-center transition-colors z-10"
            >
                <MapPin size={18} className="mr-2" />
                Open in Google Maps
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};