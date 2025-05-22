import React, { useState } from 'react';
import CafeHeader from './components/CafeHeader';
import AboutSection from './components/AboutSection';
import MenuSection from './components/MenuSection';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import CafeFooter from './components/CafeFooter';

const App = () => {
  const [activeSection, setActiveSection] = useState('inicio');

  const renderSection = () => {
    switch(activeSection) {
      case 'inicio':
        return <CafeHeader />;
      case 'nosotros':
        return <AboutSection />;
      case 'menu':
        return <MenuSection />;
      case 'galeria':
        return <GallerySection />;
      case 'testimonios':
        return <TestimonialsSection />;
      case 'contacto':
        return <ContactSection />;
      default:
        return <CafeHeader />;
    }
  };

  return (
    <div className="font-sans text-gray-800">
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-serif font-bold text-amber-800">Café Bruma</h1>
          <div className="hidden md:flex gap-8">
            {['inicio', 'nosotros', 'menu', 'galeria', 'testimonios', 'contacto'].map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item)}
                className={`capitalize ${activeSection === item ? 'text-amber-800 font-medium' : 'text-gray-600 hover:text-amber-700'}`}
              >
                {item}
              </button>
            ))}
          </div>
          <button className="md:hidden text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      <main>
        {renderSection()}
      </main>

      <CafeFooter />
    </div>
  );
};

export default App;

// DONE