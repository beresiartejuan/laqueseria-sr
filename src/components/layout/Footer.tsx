
import React from 'react';
import Logo from '../ui/Logo';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cheese-darkGray py-12 px-6 border-t border-cheese-lightGray">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Logo variant="small" />
            <p className="mt-4 text-cheese-white opacity-70 max-w-xs">
              Elaboramos quesos artesanales con técnicas modernas para ofrecer sabores excepcionales.
            </p>
          </div>
          
          <div>
            <h3 className="font-serif text-xl mb-4">Contacto</h3>
            <address className="not-italic text-cheese-white opacity-70">
              <p>Calle Manchego 123</p>
              <p>Barcelona, España</p>
              <p className="mt-2">+34 123 456 789</p>
              <p>info@quesomoderno.com</p>
            </address>
          </div>
          
          <div>
            <h3 className="font-serif text-xl mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="text-cheese-white hover:text-cheese-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook />
              </a>
              <a 
                href="#" 
                className="text-cheese-white hover:text-cheese-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram />
              </a>
              <a 
                href="#" 
                className="text-cheese-white hover:text-cheese-gold transition-colors"
                aria-label="Twitter"
              >
                <Twitter />
              </a>
            </div>
            
            <div className="mt-6">
              <h4 className="font-medium mb-2">Horario</h4>
              <p className="text-cheese-white opacity-70">Lun - Vie: 9:00 - 18:00</p>
              <p className="text-cheese-white opacity-70">Sáb: 10:00 - 15:00</p>
            </div>
          </div>
        </div>
        
        <div className="pt-6 border-t border-cheese-lightGray text-center text-sm text-cheese-white opacity-50">
          <p>© {new Date().getFullYear()} Queso Moderno. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
