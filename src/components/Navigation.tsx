import React, { useState, useEffect } from 'react';
import { Camera, Menu, X } from 'lucide-react';
import { useRouter } from '../hooks/useRouter';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { activeSection, navigateToSection, routes } = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (sectionId: string) => {
    navigateToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    navigateToSection('home');
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className={`nav-responsive text-white ${
        isScrolled ? 'bg-black/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container-responsive">
          <div className="flex items-center justify-between py-4">
            <button
              onClick={handleLogoClick}
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200 btn-touch"
              aria-label="Navigate to home page"
            >
              <Camera className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-lg sm:text-xl font-light tracking-wide">Elay Bachar</span>
            </button>
            
            <ul className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {routes.map((route) => (
                <li key={route.sectionId}>
                  <button
                    onClick={() => handleNavClick(route.sectionId)}
                    className={`text-sm font-light tracking-wide transition-all duration-200 hover:text-gray-300 nav-link ${
                      activeSection === route.sectionId ? 'text-white' : 'text-white/80'
                    }`}
                  >
                    {route.label}
                  </button>
                </li>
              ))}
            </ul>

            <button 
              onClick={toggleMobileMenu}
              className="lg:hidden btn-touch text-white hover:text-gray-300 transition-colors duration-200"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <div 
        className={`mobile-menu lg:hidden ${isMobileMenuOpen ? 'open' : 'closed'}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-end p-6 border-b border-white/10">
            <button 
              onClick={toggleMobileMenu}
              className="btn-touch text-white hover:text-gray-300 transition-colors duration-200"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex-1 px-6 py-8">
            <ul className="space-y-6">
              {routes.map((route, index) => (
                <li key={route.sectionId}>
                  <button
                    onClick={() => handleNavClick(route.sectionId)}
                    className={`w-full text-left text-2xl font-light tracking-wide transition-all duration-300 hover:text-gray-300 ${
                      activeSection === route.sectionId ? 'text-white' : 'text-white/70'
                    }`}
                    style={{
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    {route.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-6 border-t border-white/10">
            <div className="text-white/60 text-sm font-light tracking-wide">
              Photography & Visual Storytelling
            </div>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={toggleMobileMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Navigation;