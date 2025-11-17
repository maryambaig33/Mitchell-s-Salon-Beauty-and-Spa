
import React, { useState } from 'react';
import { NAV_LINKS } from '../constants';
import Button from './Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black bg-opacity-80 backdrop-blur-sm sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold font-serif italic text-white tracking-wider">
          Mitchell's
        </div>
        <nav className="hidden md:flex space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="secondary">Gift Cards</Button>
          <Button variant="primary">Book Now</Button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-90">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col space-y-4 pt-4 w-full px-6">
              <Button variant="secondary" fullWidth>Gift Cards</Button>
              <Button variant="primary" fullWidth>Book Now</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
