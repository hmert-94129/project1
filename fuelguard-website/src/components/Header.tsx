import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleLanguage = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      {/* Top Bar */}
      <div className="hidden lg:block bg-primary text-white py-2">
        <div className="container flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a href="tel:4442762" className="flex items-center space-x-2 hover:text-secondary transition-colors">
              <FaPhone />
              <span>444 2 762</span>
            </a>
            <a href="mailto:info@fuelguard.com.tr" className="flex items-center space-x-2 hover:text-secondary transition-colors">
              <FaEnvelope />
              <span>info@fuelguard.com.tr</span>
            </a>
          </div>
          <div className="relative">
            <button 
              onClick={toggleLanguage}
              className="flex items-center space-x-2 hover:text-secondary transition-colors"
            >
              <span>Türkçe</span>
              <FaChevronDown className={`transition-transform ${isLanguageOpen ? 'rotate-180' : ''}`} />
            </button>
            {isLanguageOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white text-primary rounded-md shadow-lg overflow-hidden">
                <a href="?lang=tr" className="block px-4 py-2 hover:bg-primary hover:text-white transition-colors">Türkçe</a>
                <a href="?lang=en" className="block px-4 py-2 hover:bg-primary hover:text-white transition-colors">English</a>
                <a href="?lang=ar" className="block px-4 py-2 hover:bg-primary hover:text-white transition-colors">العربية</a>
                <a href="?lang=ru" className="block px-4 py-2 hover:bg-primary hover:text-white transition-colors">Русский</a>
                <a href="?lang=de" className="block px-4 py-2 hover:bg-primary hover:text-white transition-colors">Deutsch</a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="z-10">
          <div className="h-12 w-auto">
            {/* Logo will be added later */}
            <div className="text-primary font-bold text-2xl">FUEL GUARD</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link href="/" className="text-primary-dark hover:text-secondary font-medium transition-colors">
            Ana Sayfa
          </Link>
          <Link href="/fuelguard" className="text-primary-dark hover:text-secondary font-medium transition-colors">
            FuelGuard
          </Link>
          <Link href="/arac-gruplari" className="text-primary-dark hover:text-secondary font-medium transition-colors">
            Araç Grupları
          </Link>
          <Link href="/cozumler" className="text-primary-dark hover:text-secondary font-medium transition-colors">
            Çözümler
          </Link>
          <Link href="/urunler" className="text-primary-dark hover:text-secondary font-medium transition-colors">
            Ürünler
          </Link>
          <Link href="/referanslar" className="text-primary-dark hover:text-secondary font-medium transition-colors">
            Referanslar
          </Link>
          <Link href="/haberler" className="text-primary-dark hover:text-secondary font-medium transition-colors">
            Haberler
          </Link>
          <Link href="/iletisim" className="text-primary-dark hover:text-secondary font-medium transition-colors">
            İletişim
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden z-10 text-primary"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Mobile Navigation */}
        <div className={`fixed inset-0 bg-white z-0 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}>
          <div className="container flex flex-col items-center justify-center h-full space-y-8 text-xl">
            <Link href="/" className="text-primary-dark hover:text-secondary font-medium transition-colors" onClick={toggleMenu}>
              Ana Sayfa
            </Link>
            <Link href="/fuelguard" className="text-primary-dark hover:text-secondary font-medium transition-colors" onClick={toggleMenu}>
              FuelGuard
            </Link>
            <Link href="/arac-gruplari" className="text-primary-dark hover:text-secondary font-medium transition-colors" onClick={toggleMenu}>
              Araç Grupları
            </Link>
            <Link href="/cozumler" className="text-primary-dark hover:text-secondary font-medium transition-colors" onClick={toggleMenu}>
              Çözümler
            </Link>
            <Link href="/urunler" className="text-primary-dark hover:text-secondary font-medium transition-colors" onClick={toggleMenu}>
              Ürünler
            </Link>
            <Link href="/referanslar" className="text-primary-dark hover:text-secondary font-medium transition-colors" onClick={toggleMenu}>
              Referanslar
            </Link>
            <Link href="/haberler" className="text-primary-dark hover:text-secondary font-medium transition-colors" onClick={toggleMenu}>
              Haberler
            </Link>
            <Link href="/iletisim" className="text-primary-dark hover:text-secondary font-medium transition-colors" onClick={toggleMenu}>
              İletişim
            </Link>
            
            <div className="pt-8 flex flex-col items-center space-y-4">
              <a href="tel:4442762" className="flex items-center space-x-2 text-primary">
                <FaPhone />
                <span>444 2 762</span>
              </a>
              <a href="mailto:info@fuelguard.com.tr" className="flex items-center space-x-2 text-primary">
                <FaEnvelope />
                <span>info@fuelguard.com.tr</span>
              </a>
              
              <div className="flex space-x-4 pt-4">
                <a href="?lang=tr" className="px-2 py-1 border border-primary text-primary rounded">TR</a>
                <a href="?lang=en" className="px-2 py-1 border border-primary text-primary rounded">EN</a>
                <a href="?lang=ar" className="px-2 py-1 border border-primary text-primary rounded">AR</a>
                <a href="?lang=ru" className="px-2 py-1 border border-primary text-primary rounded">RU</a>
                <a href="?lang=de" className="px-2 py-1 border border-primary text-primary rounded">DE</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
