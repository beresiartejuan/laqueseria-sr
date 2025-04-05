
import React from 'react';
import { Button } from '../ui/button';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-[url('/src/assets/cheese-hero.jpg')] bg-cover bg-center opacity-40 z-0">
        {/* This would be replaced with an actual image in production */}
      </div>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-cheese-black via-cheese-black/90 to-transparent z-10"></div>
      
      {/* Content */}
      <div className="container-custom relative z-20 text-center px-4">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl mb-6">
          <span className="block">Artesanía Quesera</span>
          <span className="block text-cheese-gold mt-2">Con Visión Moderna</span>
        </h1>
        
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-cheese-white opacity-90">
          Descubre nuestra exclusiva selección de quesos artesanales elaborados con pasión, tradición e innovación.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">Nuestra Historia</Button>
          <Button variant="secondary" size="lg">Contactar</Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-8 h-12 border-2 border-cheese-white rounded-full relative flex justify-center">
          <div className="w-1.5 h-3 bg-cheese-gold rounded-full absolute top-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
