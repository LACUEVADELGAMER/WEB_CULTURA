import React from 'react';

const CafeHeader = () => {
  return (
    <header className="relative h-screen flex items-center justify-center bg-gray-50 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
          Café Bruma
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8">
          Donde cada taza cuenta una historia
        </p>
        <button className="px-8 py-3 bg-amber-800 text-white rounded-full hover:bg-amber-700 transition-colors">
          Descubre nuestro menú
        </button>
      </div>
    </header>
  );
};

export default CafeHeader;