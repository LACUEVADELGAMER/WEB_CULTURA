import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "El mejor café de la ciudad con el ambiente más acogedor.",
      author: "María G."
    },
    {
      quote: "Me encanta su enfoque en sostenibilidad y productos locales.",
      author: "Carlos R."
    },
    {
      quote: "Un lugar perfecto para trabajar o encontrarse con amigos.",
      author: "Ana L."
    }
  ];
  
  return (
    <section className="py-20 px-6 bg-amber-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-gray-800 mb-12 text-center">
          Lo que dicen nuestros clientes
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
              <p className="text-amber-800 font-medium">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;