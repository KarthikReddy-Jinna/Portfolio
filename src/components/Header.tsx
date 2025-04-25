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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-400">J Karthik Reddy</h1>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
              <li key={item}>
                <button 
                  onClick={() => scrollToSection(item)} 
                  className="text-gray-600 hover:text-pink-400 capitalize transition-colors duration-300"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="py-4">
            {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
              <li key={item} className="py-2">
                <button 
                  onClick={() => scrollToSection(item)} 
                  className="block w-full text-center text-gray-600 hover:text-pink-400 capitalize py-2 transition-colors duration-300"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;