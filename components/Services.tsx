
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-[#111111]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-playfair-display mb-4">Our Signature Services</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          From classic styles to the latest trends, our services are designed to make you look and feel your absolute best.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-lg text-center transform hover:-translate-y-2 transition-transform duration-300 shadow-lg group"
            >
              <div className="inline-block p-4 bg-gray-700 rounded-full mb-6 group-hover:bg-[#c0a062] transition-colors duration-300">
                <service.icon className="w-8 h-8 text-[#c0a062] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold font-playfair-display mb-2 text-white">{service.name}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
