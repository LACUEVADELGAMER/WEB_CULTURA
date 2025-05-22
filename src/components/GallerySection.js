import React from 'react';

const GallerySection = () => {
  const images = Array(6).fill(null); // Placeholder para imágenes
  
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-gray-800 mb-12 text-center">
          Nuestro Espacio
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((_, index) => (
            <div key={index} className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                [Imagen {index + 1}]
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;