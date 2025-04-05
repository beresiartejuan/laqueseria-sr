
import React from 'react';
import { Button } from '../ui/button';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-padding bg-cheese-black">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">
            Ponte en <span className="text-cheese-gold">Contacto</span>
          </h2>
          <div className="h-1 w-24 bg-cheese-gold mx-auto"></div>
          <p className="mt-6 max-w-2xl mx-auto text-cheese-white opacity-80">
            ¿Tienes alguna pregunta o comentario? Estaremos encantados de escucharte. Completa el formulario
            y nos pondremos en contacto contigo lo antes posible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="order-2 lg:order-1">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="input-field"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="input-field"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  className="input-field"
                  placeholder="Asunto de tu mensaje"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="input-field resize-none"
                  placeholder="Escribe tu mensaje aquí..."
                ></textarea>
              </div>
              
              <Button type="button" size="lg" className="w-full sm:w-auto">
                Enviar Mensaje
              </Button>
            </form>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="h-64 md:h-full min-h-[320px] bg-cheese-darkGray rounded-lg overflow-hidden relative mb-8">
              {/* Map placeholder */}
              <div className="absolute inset-0 bg-[url('/src/assets/map-placeholder.jpg')] bg-cover bg-center opacity-40">
                {/* This would be replaced with an actual map in production */}
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-lg text-cheese-gold">Mapa Interactivo</span>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cheese-gold rounded-full text-cheese-black">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Dirección</h4>
                  <p className="text-cheese-white opacity-70">Calle Manchego 123, Barcelona, España</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cheese-gold rounded-full text-cheese-black">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Teléfono</h4>
                  <p className="text-cheese-white opacity-70">+34 123 456 789</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cheese-gold rounded-full text-cheese-black">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p className="text-cheese-white opacity-70">info@quesomoderno.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
