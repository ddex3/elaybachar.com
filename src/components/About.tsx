import React, { useEffect, useRef } from 'react';
import { FaHandPeace, FaInstagram, FaTiktok, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatedElements = entry.target.querySelectorAll('[data-animate]');
            animatedElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-fade-in');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative section-padding-lg bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden"
      aria-labelledby="about-title"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-24 sm:w-32 h-24 sm:h-32 bg-black rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 sm:w-40 h-32 sm:h-40 bg-black rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-60 h-48 sm:h-60 bg-black rounded-full blur-3xl"></div>
      </div>

      <div className="relative container-responsive">
        <div className="text-center mb-16 sm:mb-20 opacity-0" data-animate>
          <h2 
            id="about-title" 
            className="text-responsive-5xl sm:text-responsive-6xl lg:text-responsive-7xl font-extralight tracking-widest text-slate-800 mb-6 text-balance"
          >
            ABOUT
          </h2>
          <div className="w-20 sm:w-24 h-px bg-slate-300 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 opacity-0" data-animate>
            <div className="relative group">
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl">
                <img
                  src="/images/general/elayProfile.jpg"
                  alt="Elay Bachar - Professional Photographer"
                  className="w-full aspect-responsive object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>
              
              <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-gradient-to-br from-white/95 to-slate-50/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/50 transform rotate-3">
                <div className="text-center">
                  <div className="flex justify-center mb-1">
                    <FaHandPeace className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600" />
                  </div>
                  <div className="text-xs sm:text-sm font-light text-slate-800 leading-tight text-balance">
                    Yepp,<br/>Thats Me
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 space-y-8 sm:space-y-12 opacity-0" data-animate>
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-block">
                <span className="text-responsive-2xl sm:text-responsive-3xl lg:text-responsive-4xl font-light text-slate-800">hey!</span>
                <div className="w-full h-0.5 bg-gradient-to-r from-slate-400 to-transparent mt-2"></div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8 text-slate-700">
              <p className="text-responsive-xl sm:text-responsive-2xl font-light leading-relaxed text-balance">
                My name is <span className="font-medium text-slate-900">Elay Bachar</span>, I'm 19 years old and currently serving as a photographer and editor in the IDF. Photography is more than just a craft for me, it's a way to translate emotions and ideas into visual stories.
              </p>
              
              <p className="text-responsive-xl sm:text-responsive-2xl font-light leading-relaxed text-balance">
                I'm in love with creating deep, expressive portraits, exploring the elegance of fashion photography, and bringing to life 'out of this world' concepts that blur the line between reality and imagination.
              </p>
              
              <p className="text-responsive-xl sm:text-responsive-2xl font-light leading-relaxed text-balance">
                Through my lens, I aim to capture moments that feel timeless, striking, and unforgettable. I would love to work with you on your next project.
              </p>
            </div>

            <div className="grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 pt-6 sm:pt-8">
              <a 
                href="https://www.instagram.com/elaybacharrr/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-center p-3 sm:p-6 bg-white/60 backdrop-blur-sm rounded-lg sm:rounded-xl border border-slate-200 hover:bg-white/80 transition-all duration-300 group btn-touch aspect-square flex flex-col items-center justify-center"
              >
                <div className="flex justify-center mb-0 sm:mb-3">
                  <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600 group-hover:text-pink-500 transition-colors duration-300" />
                </div>
                <div className="hidden sm:block text-xs sm:text-sm font-medium text-slate-500 tracking-wider">INSTAGRAM</div>
              </a>
              
              <a 
                href="https://www.tiktok.com/@elaybacharrr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-center p-3 sm:p-6 bg-white/60 backdrop-blur-sm rounded-lg sm:rounded-xl border border-slate-200 hover:bg-white/80 transition-all duration-300 group btn-touch aspect-square flex flex-col items-center justify-center"
              >
                <div className="flex justify-center mb-0 sm:mb-3">
                  <FaTiktok className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600 group-hover:text-black transition-colors duration-300" />
                </div>
                <div className="hidden sm:block text-xs sm:text-sm font-medium text-slate-500 tracking-wider">TIKTOK</div>
              </a>
              
              <a 
                href="mailto:contact@elaybachar.com" 
                className="text-center p-3 sm:p-6 bg-white/60 backdrop-blur-sm rounded-lg sm:rounded-xl border border-slate-200 hover:bg-white/80 transition-all duration-300 group btn-touch aspect-square flex flex-col items-center justify-center"
              >
                <div className="flex justify-center mb-0 sm:mb-3">
                  <FaEnvelope className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600 group-hover:text-blue-500 transition-colors duration-300" />
                </div>
                <div className="hidden sm:block text-xs sm:text-sm font-medium text-slate-500 tracking-wider">EMAIL</div>
              </a>
              
              <a 
                href="https://wa.me/972549905700" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-center p-3 sm:p-6 bg-white/60 backdrop-blur-sm rounded-lg sm:rounded-xl border border-slate-200 hover:bg-white/80 transition-all duration-300 group btn-touch aspect-square flex flex-col items-center justify-center"
              >
                <div className="flex justify-center mb-0 sm:mb-3">
                  <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600 group-hover:text-green-500 transition-colors duration-300" />
                </div>
                <div className="hidden sm:block text-xs sm:text-sm font-medium text-slate-500 tracking-wider">WHATSAPP</div>
              </a>
            </div>

            <div className="pt-6 sm:pt-8 opacity-0" data-animate>
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-slate-800 text-white font-light tracking-wider rounded-full hover:bg-slate-700 transition-all duration-300 btn-touch"
              >
                <span className="text-sm sm:text-base">Let's Create Together</span>
                <svg 
                  className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;