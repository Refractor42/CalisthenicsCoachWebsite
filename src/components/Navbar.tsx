import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import LanguageToggle from './LanguageToggle';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const navLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.results'), href: '#transformations' },
    { name: t('nav.pricing'), href: '#pricing' },
    { name: t('nav.schedule'), href: '#schedule' },
    { name: t('nav.faq'), href: '#faq' },
  ];
  
  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-dark/95 backdrop-blur-sm text-white py-2' 
          : 'bg-transparent text-white py-4'
      } top-0`}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 text-xl font-display font-black">
          <Dumbbell className="h-8 w-8 text-primary" />
          <span>ILYA FITNESS</span>
        </a>
        
        <div className="flex items-center gap-4">
          <LanguageToggle />
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-sm font-semibold hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="btn btn-primary"
            >
              {t('nav.bookNow')}
            </a>
          </div>
          
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-dark bg-opacity-95 md:hidden pt-20">
          <div className="container-custom flex flex-col space-y-4 p-4">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-xl font-semibold py-2 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="btn btn-primary mt-4"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.bookNow')}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;