
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../ui/Logo';
import CustomButton from '../ui/CustomButton';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-cheese-black py-4 px-6 sticky top-0 z-50 border-b border-cheese-lightGray">
      <div className="container-custom mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="z-50">
            <Logo />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-cheese-white hover:text-cheese-gold transition-colors">
              Inicio
            </Link>
            <a href="#about" className="text-cheese-white hover:text-cheese-gold transition-colors">
              Sobre Nosotros
            </a>
            <a href="#contact" className="text-cheese-white hover:text-cheese-gold transition-colors">
              Contacto
            </a>
            <Link to="/login">
              <CustomButton variant="secondary" size="sm">Acceso</CustomButton>
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-cheese-white z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X size={24} className="text-cheese-gold" />
            ) : (
              <Menu size={24} />
            )}
          </button>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="fixed inset-0 bg-cheese-black flex flex-col items-center justify-center gap-8 animate-fade-in">
              <Link 
                to="/" 
                className="text-xl text-cheese-white hover:text-cheese-gold transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Inicio
              </Link>
              <a 
                href="#about" 
                className="text-xl text-cheese-white hover:text-cheese-gold transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sobre Nosotros
              </a>
              <a 
                href="#contact" 
                className="text-xl text-cheese-white hover:text-cheese-gold transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contacto
              </a>
              <Link 
                to="/login" 
                onClick={() => setMobileMenuOpen(false)}
              >
                <CustomButton variant="secondary">Acceso</CustomButton>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
