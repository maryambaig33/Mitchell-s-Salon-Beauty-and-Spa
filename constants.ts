import React from 'react';

// Icons for services
// FIX: Replaced JSX with React.createElement calls to resolve parsing errors in a .ts file.
const HairIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 11c0-3.517 3.28-4 5-4s5 .483 5 4c0 3.517-1.49 4-5 4-3.51 0-5-.483-5-4z" }),
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 11c0-3.517-3.28-4-5-4s-5 .483-5 4c0 3.517 1.49 4 5 4 3.51 0 5-.483 5-4zm0 0v10" })
  )
);
const SpaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" })
  )
);
const NailIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M20.665 3.335a12 12 0 10-17.33 17.33 12 12 0 0017.33-17.33zM12 18.001c-3.314 0-6-2.686-6-6 0-1.57.604-3.007 1.586-4.065M12 6.001c3.314 0 6 2.686 6 6 0 1.57-.604 3.007-1.586 4.065" })
  )
);
const MedSpaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547a2 2 0 00-.547 1.806l.477 2.387a6 6 0 00.517 3.86l.158.318a6 6 0 00.517 3.86l2.387.477a2 2 0 001.806.547a2 2 0 00.547-1.806l-.477-2.387a6 6 0 00-.517-3.86l-.158-.318a6 6 0 00-.517-3.86l-2.387-.477a2 2 0 00-.547-1.806zM15 9a3 3 0 11-6 0 3 3 0 016 0z" })
  )
);

export const NAV_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#location', label: 'Location' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#', label: 'Careers' },
];

export const LOCATION_DETAILS = {
  address: '9344 Union Centre Blvd, West Chester Township, OH 45069',
  phone: '513-779-3700',
  hours: [
    { days: 'Monday - Thursday', time: '9am - 9pm' },
    { days: 'Friday', time: '8am - 7pm' },
    { days: 'Saturday', time: '8am - 6pm' },
    { days: 'Sunday', time: '10am - 6pm' },
  ]
};

export const SERVICES = [
  {
    icon: HairIcon,
    name: 'Hair Design',
    description: 'Expert cuts, vibrant color, and specialty styling for any occasion.',
  },
  {
    icon: SpaIcon,
    name: 'Spa Treatments',
    description: 'Rejuvenating facials, massages, and body treatments for ultimate relaxation.',
  },
  {
    icon: NailIcon,
    name: 'Nail Care',
    description: 'Luxurious manicures and pedicures to perfect your look.',
  },
  {
    icon: MedSpaIcon,
    name: 'MedSpa',
    description: 'Advanced, non-invasive treatments to enhance your natural beauty.',
  },
];

export const GALLERY_IMAGES = [
    { src: 'https://picsum.photos/400/500?image=1060', alt: 'Salon Interior' },
    { src: 'https://picsum.photos/400/500?image=202', alt: 'Hair Styling' },
    { src: 'https://picsum.photos/400/500?image=305', alt: 'Relaxing Spa Room' },
    { src: 'https://picsum.photos/400/500?image=431', alt: 'Manicure Station' },
    { src: 'https://picsum.photos/400/500?image=550', alt: 'Happy Client' },
    { src: 'https://picsum.photos/400/500?image=642', alt: 'Salon Products' },
    { src: 'https://picsum.photos/400/500?image=777', alt: 'Pedicure Area' },
    { src: 'https://picsum.photos/400/500?image=823', alt: 'Exterior View' },
];

export const TESTIMONIALS = [
  {
    quote: 'Absolutely the best salon experience I have ever had. The attention to detail and care from the staff was incredible. I left feeling like a new person!',
    name: 'Jessica M.',
    service: 'Haircut & Color',
  },
  {
    quote: 'My massage was pure bliss. From the moment I walked in, the atmosphere was so calming and luxurious. Highly recommend for anyone needing to de-stress.',
    name: 'David L.',
    service: 'Deep Tissue Massage',
  },
  {
    quote: 'I am so particular about my nails and they exceeded all my expectations. The technician was meticulous and the results are flawless. I will definitely be back!',
    name: 'Sarah P.',
    service: 'Gel Manicure',
  },
];