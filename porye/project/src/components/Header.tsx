import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary-700">
              PronosticosPro
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-primary-900 hover:text-primary-700 font-medium transition-colors">
              Inicio
            </a>
            <a href="#predicciones" className="text-primary-900 hover:text-primary-700 font-medium transition-colors">
              Predicciones
            </a>
            <a href="#estadisticas" className="text-primary-900 hover:text-primary-700 font-medium transition-colors">
              Estadísticas
            </a>
          </nav>

          <div className="hidden md:block">
            <a 
              href="#premium" 
              className="bg-primary-600 hover:bg-primary-700 text-white py-2 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              Hazte Premium
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-primary-900 focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#inicio" 
                className="text-primary-900 hover:text-primary-700 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </a>
              <a 
                href="#predicciones" 
                className="text-primary-900 hover:text-primary-700 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Predicciones
              </a>
              <a 
                href="#estadisticas" 
                className="text-primary-900 hover:text-primary-700 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Estadísticas
              </a>
              <a 
                href="#premium" 
                className="bg-primary-600 hover:bg-primary-700 text-white py-2 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Hazte Premium
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;