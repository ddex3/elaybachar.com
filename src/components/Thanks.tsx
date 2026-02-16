import React, { useEffect, useRef } from 'react';
import { CheckCircle, ArrowLeft, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Thanks: React.FC = () => {
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
      className="relative min-h-screen py-28 px-6 bg-gradient-to-br from-white via-slate-50/30 to-white overflow-hidden flex items-center justify-center"
    >
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-32 left-16 w-24 h-24 bg-slate-200 rounded-full blur-2xl"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-slate-200 rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-2xl mx-auto text-center">
        <div className="mb-8 opacity-0" data-animate>
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
        </div>

        <div className="space-y-6 opacity-0" data-animate>
          <h1 className="text-4xl md:text-5xl font-extralight tracking-widest text-slate-700 mb-4">
            Thank You!
          </h1>
          
          <div className="w-20 h-px bg-slate-300 mx-auto mb-6"></div>
          
          <p className="text-lg md:text-xl font-light text-slate-600 tracking-wide leading-relaxed">
            Your message has been sent successfully. I'll get back to you as soon as possible.
          </p>
          
          <div className="flex items-center justify-center space-x-2 text-sm text-slate-500 mt-4">
            <Mail className="w-4 h-4" />
            <span>You'll receive a confirmation email shortly</span>
          </div>
        </div>

        <div className="mt-12 space-y-4 opacity-0" data-animate>
          <Link 
            to="/"
            className="inline-flex items-center space-x-2 px-8 py-3 bg-slate-600 text-white font-light tracking-wider rounded-xl hover:bg-slate-700 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Thanks;
