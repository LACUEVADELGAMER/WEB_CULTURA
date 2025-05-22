import React from 'react';

const CafeFooter = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-serif font-medium mb-4">Café Bruma</h3>
            <p className="text-gray-300">
              Un espacio para disfrutar del mejor café con conciencia y comunidad.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-serif font-medium mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Menú</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Eventos</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-serif font-medium mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Instagram</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Facebook</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Twitter</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Café Bruma. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default CafeFooter;