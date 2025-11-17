
import React from 'react';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-[#1a1a1a]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-playfair-display mb-12">A Glimpse Inside</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {GALLERY_IMAGES.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg group">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
