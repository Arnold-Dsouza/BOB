import { useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const heroImages = [
  'https://images.unsplash.com/photo-1739723745132-97df9db49db2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwY2FmZSUyMGludGVyaW9yfGVufDF8fHx8MTc2NDgyNTcxOXww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1619540158662-bb74607515f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBjdXAlMjBwYXN0cnl8ZW58MXx8fHwxNzY0ODQ3MTYwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1555932450-31a8aec2adf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBmcmVzaCUyMGJyZWFkfGVufDF8fHx8MTc2NDc3MzY5NHww&ixlib=rb-4.1.0&q=80&w=1080',
];

export function HeroSection() {
  const [randomImage] = useState(() => {
    return heroImages[Math.floor(Math.random() * heroImages.length)];
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="cafe" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src={randomImage}
          alt="Café background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-6xl mb-8">Not just a Café</h1>
        
        <nav className="flex flex-col gap-4 items-center">
          <button
            onClick={() => scrollToSection('cafe')}
            className="hover:opacity-70 transition-opacity text-xl"
          >
            Café
          </button>
          <button
            onClick={() => scrollToSection('backladen')}
            className="hover:opacity-70 transition-opacity text-xl"
          >
            Backladen
          </button>
          <button
            onClick={() => scrollToSection('kurse')}
            className="hover:opacity-70 transition-opacity text-xl"
          >
            Kurse
          </button>
        </nav>
      </div>

      {/* Opening Times and Address */}
      <div className="absolute bottom-8 right-8 text-right text-white text-sm z-10">
        <div className="space-y-1">
          <p>Mo-Fr: 8:00 - 18:00</p>
          <p>Sa: 9:00 - 17:00</p>
          <p>So: 10:00 - 16:00</p>
          <p className="mt-3">Musterstraße 123</p>
          <p>12345 Musterstadt</p>
        </div>
      </div>
    </section>
  );
}
