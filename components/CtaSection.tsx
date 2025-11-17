
import React from 'react';
import Button from './Button';

const CtaSection: React.FC = () => {
  return (
    <section className="bg-cover bg-center py-20" style={{backgroundImage: "url('https://picsum.photos/1200/400?image=998')"}}>
      <div className="absolute inset-0 bg-black bg-opacity-60 mix-blend-multiply"></div>
      <div className="container mx-auto px-6 text-center relative">
        <h2 className="text-3xl md:text-4xl font-playfair-display text-white mb-4">Ready to Be Pampered?</h2>
        <p className="text-gray-200 max-w-xl mx-auto mb-8">
          Your moment of bliss is just a click away. Schedule your appointment today and let us take care of the rest.
        </p>
        <Button variant="primary" size="lg">Book Now</Button>
      </div>
    </section>
  );
};

export default CtaSection;
