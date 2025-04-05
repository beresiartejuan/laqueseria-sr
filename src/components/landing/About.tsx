
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-cheese-darkGray">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Nuestra <span className="text-cheese-gold">Historia</span></h2>
          <div className="h-1 w-24 bg-cheese-gold mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h3 className="font-serif text-2xl mb-4">Tradición e <span className="text-cheese-gold">Innovación</span></h3>
            <p className="mb-4">
              Fundada en 2010 por un grupo de apasionados queseros, Queso Moderno nació con la misión de preservar los métodos tradicionales de elaboración mientras incorporamos técnicas modernas que mejoran la calidad y el sabor.
            </p>
            <p className="mb-4">
              Nuestro equipo de artesanos trabaja directamente con pequeños productores locales para garantizar leche de la más alta calidad, que es la base de nuestros excepcionales quesos.
            </p>
            <p>
              Cada pieza que elaboramos combina siglos de sabiduría quesera con una visión contemporánea del gusto, resultando en productos únicos que han sido reconocidos internacionalmente.
            </p>
            
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center">
                <p className="font-serif text-3xl text-cheese-gold">12+</p>
                <p className="text-sm text-cheese-white opacity-70">Años de experiencia</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-3xl text-cheese-gold">20+</p>
                <p className="text-sm text-cheese-white opacity-70">Variedades de queso</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-3xl text-cheese-gold">5</p>
                <p className="text-sm text-cheese-white opacity-70">Premios internacionales</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 aspect-square bg-cheese-lightGray rounded-lg overflow-hidden relative">
            {/* Placeholder for cheese artisan image */}
            <div className="absolute inset-0 bg-[url('/src/assets/cheese-artisan.jpg')] bg-cover bg-center opacity-70">
              {/* This would be replaced with an actual image in production */}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-cheese-black via-transparent to-transparent"></div>
          </div>
        </div>
        
        {/* Philosophy section */}
        <div className="mt-20 md:mt-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-cheese-black p-8 rounded-lg border border-cheese-lightGray">
              <div className="w-12 h-12 bg-cheese-gold rounded-full flex items-center justify-center mb-4">
                <span className="font-serif text-2xl text-cheese-black">1</span>
              </div>
              <h4 className="font-serif text-xl mb-3">Calidad Excepcional</h4>
              <p className="text-cheese-white opacity-80">
                Seleccionamos cuidadosamente cada ingrediente para asegurar que nuestros quesos alcancen la máxima expresión de sabor y textura.
              </p>
            </div>
            
            <div className="bg-cheese-black p-8 rounded-lg border border-cheese-lightGray">
              <div className="w-12 h-12 bg-cheese-gold rounded-full flex items-center justify-center mb-4">
                <span className="font-serif text-2xl text-cheese-black">2</span>
              </div>
              <h4 className="font-serif text-xl mb-3">Sostenibilidad</h4>
              <p className="text-cheese-white opacity-80">
                Trabajamos con granjas locales comprometidas con el bienestar animal y prácticas agrícolas sostenibles que protegen nuestro entorno.
              </p>
            </div>
            
            <div className="bg-cheese-black p-8 rounded-lg border border-cheese-lightGray">
              <div className="w-12 h-12 bg-cheese-gold rounded-full flex items-center justify-center mb-4">
                <span className="font-serif text-2xl text-cheese-black">3</span>
              </div>
              <h4 className="font-serif text-xl mb-3">Innovación Constante</h4>
              <p className="text-cheese-white opacity-80">
                Exploramos continuamente nuevos sabores y técnicas para ofrecer experiencias gustativas únicas que sorprendan a los paladares más exigentes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
