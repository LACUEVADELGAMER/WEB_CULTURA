import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-gray-800 mb-12 text-center">
          Visítanos
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-medium text-gray-800 mb-4">Horario</h3>
            <p className="text-gray-600 mb-6">Lunes a Viernes: 7am - 9pm</p>
            <p className="text-gray-600 mb-8">Sábado y Domingo: 8am - 10pm</p>
            
            <h3 className="text-xl font-medium text-gray-800 mb-4">Dirección</h3>
            <p className="text-gray-600">Calle Café 123, Colonia Centro</p>
            <p className="text-gray-600 mb-8">Ciudad de México</p>
            
            <div className="bg-gray-100 h-48 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                [Mapa interactivo]
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-medium text-gray-800 mb-4">Reservaciones</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-600 mb-1">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-600 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-600 mb-1">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-amber-800 text-white py-3 rounded-lg hover:bg-amber-700 transition-colors"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;