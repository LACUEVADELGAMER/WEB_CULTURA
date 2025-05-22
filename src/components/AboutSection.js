import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-gray-800 mb-8 text-center">
          Nuestra Historia
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-600 mb-4">
              En Café Bruma, creemos en el poder de una buena taza de café para conectar personas y crear momentos memorables.
            </p>
            <p className="text-gray-600 mb-4">
              Desde 2015, hemos trabajado directamente con pequeños productores de Chiapas y Oaxaca para traer los mejores granos orgánicos a tu mesa.
            </p>
            <p className="text-gray-600">
              Nuestro compromiso va más allá del café - es con la tierra, las comunidades y la experiencia auténtica.
            </p>
          </div>
          <div className="bg-gray-100 h-80 rounded-lg overflow-hidden">
            {/* Imagen placeholder */}
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              [Imagen del equipo o local]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;