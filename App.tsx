import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { Testimonials } from './components/Testimonials';
import { Location } from './components/Location';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-brand-black min-h-screen text-white font-sans selection:bg-brand-red selection:text-white">
      <Navbar />
      <Hero />
      <Menu />
      <Testimonials />
      <Location />
      <Footer />
    </div>
  );
}

export default App;