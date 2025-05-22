import React, { useState } from 'react';

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('cafes');

  const menuItems = {
    cafes: [
      { name: 'Espresso', price: 35, description: 'Intenso y aromático' },
      { name: 'Capuccino', price: 45, description: 'Equilibrado y cremoso' },
      { name: 'Cold Brew', price: 50, description: 'Suave y refrescante' }
    ],
    tes: [
      { name: 'Té Verde', price: 30, description: 'Fresco y antioxidante' },
      { name: 'Manzanilla', price: 30, description: 'Relajante y digestivo' }
    ],
    postres: [
      { name: 'Pay de Queso', price: 55, description: 'Clásico y cremoso' },
      { name: 'Brownie', price: 45, description: 'Chocolate intenso' }
    ]
  };

  return (
    <section className="py-20 px-6 bg-amber-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-gray-800 mb-8 text-center">
          Nuestro Menú
        </h2>
        
        <div className="flex justify-center gap-4 mb-12">
          {Object.keys(menuItems).map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full capitalize ${activeCategory === category ? 'bg-amber-800 text-white' : 'bg-white text-amber-800'}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {menuItems[activeCategory].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-medium text-gray-800">{item.name}</h3>
                <span className="text-amber-800 font-medium">${item.price}</span>
              </div>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;