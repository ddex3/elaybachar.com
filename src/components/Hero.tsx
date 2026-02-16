import React from 'react';
import { ArrowRight, Camera, Instagram, Mail } from 'lucide-react';

interface HeroProps {
  onScrollToPortfolio: () => void;
  navigateToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onScrollToPortfolio, navigateToSection }) => {
  return (
    <section 
      id="home" 
      className="hero-responsive"
      aria-label="Hero section - Elay Bachar Photography"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/general/mainImage.png)',
        }}
        role="img"
        aria-label="Professional photography background image"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
      </div>
      
      <div className="relative z-10 w-full container-responsive">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-16 sm:py-20 lg:py-24">
          
          <div className="text-white space-y-6 sm:space-y-8 mt-16 sm:mt-20 lg:mt-0">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-responsive-6xl sm:text-responsive-7xl lg:text-responsive-8xl font-thin tracking-wider leading-none flex flex-col sm:flex-row sm:items-center">
                <span className="text-balance">ELAY</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 sm:ml-4 text-balance">BACHAR</span>
              </h1>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              <p className="text-responsive-xl sm:text-responsive-2xl font-light tracking-wide opacity-90 text-balance">
                Photography & Visual Storytelling
              </p>
              <div className="w-16 sm:w-20 h-px bg-gradient-to-r from-white to-transparent"></div>
            </div>
            
            <p className="text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-lg opacity-80 text-balance">
              Capturing moments that tell stories. Specializing in portrait photography, 
              concept photography, and visual storytelling from Rishon LeZion, Israel.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={onScrollToPortfolio}
                className="group inline-flex items-center justify-center space-x-3 bg-white text-black px-6 sm:px-8 py-3 sm:py-4 font-medium tracking-wider uppercase hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 btn-touch"
                aria-label="View portfolio gallery"
              >
                <span className="text-sm sm:text-base">View Portfolio</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </button>
              
              <button
                onClick={() => navigateToSection('contact')}
                className="group inline-flex items-center justify-center space-x-3 border-2 border-white/50 text-white px-6 sm:px-8 py-3 sm:py-4 font-medium tracking-wider uppercase hover:bg-white hover:text-black transition-all duration-300 btn-touch"
                aria-label="Contact me"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">Get In Touch</span>
              </button>
            </div>
          </div>
          
          <div className="hidden lg:flex flex-col items-end justify-center space-y-8">
            <div className="space-y-6 mt-[calc(40rem-175px)] -mr-[-100px]">
              <div className="w-32 h-px bg-gradient-to-l from-white/50 to-transparent"></div>
              <div className="text-right text-white/60 text-sm font-light tracking-wider">
                PORTRAIT • CONCEPT • LOVE
              </div>
              <div className="w-20 h-px bg-gradient-to-l from-white/30 to-transparent ml-auto"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2" aria-hidden="true">
        <div className="flex flex-col items-center space-y-2">
          <div className="text-white/50 text-xs font-light tracking-wider uppercase">
            Scroll
          </div>
          <div className="w-px h-12 sm:h-16 bg-gradient-to-b from-white/50 to-transparent animate-pulse"></div>
        </div>
      </div>
      
      <div className="hidden sm:block absolute top-8 left-8 w-24 sm:w-32 h-24 sm:h-32 border-l-2 border-t-2 border-white/20"></div>
      <div className="hidden sm:block absolute bottom-8 right-8 w-24 sm:w-32 h-24 sm:h-32 border-r-2 border-b-2 border-white/20"></div>
      
      <div className="sm:hidden absolute top-4 left-4 w-16 h-16 border-l border-t border-white/10"></div>
      <div className="sm:hidden absolute bottom-4 right-4 w-16 h-16 border-r border-b border-white/10"></div>
    </section>
  );
};

export default Hero;