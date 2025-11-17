
import React from 'react';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section
      className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-center text-white bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/1600/900?image=1025')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair-display font-bold mb-4 leading-tight">
          Experience Luxury in West Chester
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-200">
          Discover a sanctuary of beauty and wellness. Your journey to rejuvenation starts here.
        </p>
        <Button variant="primary" size="lg">Book Your Appointment</Button>
      </div>
    </section>
  );
};

export default Hero;
