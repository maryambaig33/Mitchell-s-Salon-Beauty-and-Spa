
import React from 'react';
import { LOCATION_DETAILS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-[#1a1a1a]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-playfair-display mb-6 border-l-4 border-[#c0a062] pl-4">
              Our West Chester Salon
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Welcome to Mitchell's Salon & Day Spa in West Chester, where luxury meets tranquility. Our team of expert stylists, therapists, and technicians are dedicated to providing you with an unparalleled experience. We invite you to escape the everyday and indulge in a world of personalized care and relaxation.
            </p>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start">
                <LocationIcon className="w-6 h-6 mr-4 mt-1 text-[#c0a062] flex-shrink-0" />
                <span>{LOCATION_DETAILS.address}</span>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="w-6 h-6 mr-4 text-[#c0a062] flex-shrink-0" />
                <a href={`tel:${LOCATION_DETAILS.phone}`} className="hover:text-white">{LOCATION_DETAILS.phone}</a>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-2xl">
            <h3 className="text-2xl font-playfair-display mb-4 text-white">Hours of Operation</h3>
            <ul className="space-y-2">
              {LOCATION_DETAILS.hours.map((item, index) => (
                <li key={index} className="flex justify-between border-b border-gray-700 py-2">
                  <span className="text-gray-300">{item.days}</span>
                  <span className="font-medium text-gray-200">{item.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const LocationIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const PhoneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);


export default About;
