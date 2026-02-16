import React from 'react';
import { Mail, MapPin, Clock, Phone } from 'lucide-react';
import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';

interface FooterProps {
  navigateToSection: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ navigateToSection }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-extralight tracking-widest text-white mb-4">
                Elay Bachar
              </h3>
              <p className="text-slate-400 font-light leading-relaxed">
                Capturing moments, creating memories. Professional photography services in Rishon LeZion and beyond.
              </p>
            </div>      
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-sm font-medium text-slate-300 tracking-wider mb-6">NAVIGATION</h4>
            <nav aria-label="Footer navigation">
              <ul className="space-y-[-10px] mt-[-10px]">
                <li>
                  <button 
                    onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })} 
                    className="text-slate-400 hover:text-white transition-colors duration-300 font-light"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('portrait')?.scrollIntoView({ behavior: 'smooth' })} 
                    className="text-slate-400 hover:text-white transition-colors duration-300 font-light"
                  >
                    Portrait Photography
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('concept')?.scrollIntoView({ behavior: 'smooth' })} 
                    className="text-slate-400 hover:text-white transition-colors duration-300 font-light"
                  >
                    Concept Photography
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('love')?.scrollIntoView({ behavior: 'smooth' })} 
                    className="text-slate-400 hover:text-white transition-colors duration-300 font-light"
                  >
                    Love Photography
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} 
                    className="text-slate-400 hover:text-white transition-colors duration-300 font-light"
                  >
                    About Me
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
                    className="text-slate-400 hover:text-white transition-colors duration-300 font-light"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-sm font-medium text-slate-300 tracking-wider mb-6">CONTACT INFO</h4>
            <div className="space-y-4">
              <a 
                href="mailto:contact@elaybachar.com"
                className="flex items-center space-x-3 text-slate-400 hover:text-white transition-colors duration-300 group"
              >
                <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center transition-colors duration-300">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-300">Email</p>
                  <p className="text-xs text-slate-500">contact@elaybachar.com</p>
                </div>
              </a>

              <div className="flex items-center space-x-3 text-slate-400 group">
                <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center transition-colors duration-300">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-300">Location</p>
                  <p className="text-xs text-slate-500">Rishon LeZion, Israel</p>
                </div>
              </div>

              <a 
                href="https://wa.me/972549905700"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-slate-400 hover:text-white transition-colors duration-300 group"
              >
                <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center transition-colors duration-300">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-300">WhatsApp</p>
                  <p className="text-xs text-slate-500">054-990-5700</p>
                </div>
              </a>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-sm font-medium text-slate-300 tracking-wider mb-6">FOLLOW ME</h4>
            <div className="space-y-4">
              <a 
                href="https://www.instagram.com/elaybacharrr/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-slate-400 hover:text-white transition-colors duration-300 group"
              >
                <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center transition-colors duration-300">
                  <FaInstagram className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-300">Instagram</p>
                  <p className="text-xs text-slate-500">@elaybacharrr</p>
                </div>
              </a>

              <a 
                href="https://www.tiktok.com/@elaybacharrr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-slate-400 hover:text-white transition-colors duration-300 group"
              >
                <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center transition-colors duration-300">
                  <FaTiktok className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-300">TikTok</p>
                  <p className="text-xs text-slate-500">@elaybacharrr</p>
                </div>
              </a>

              <a 
                href="https://wa.me/972549905700"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-slate-400 hover:text-white transition-colors duration-300 group"
              >
                <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center transition-colors duration-300">
                  <FaWhatsapp className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-300">WhatsApp</p>
                  <p className="text-xs text-slate-500">054-990-5700</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm font-light text-slate-400 tracking-wide">
              © {currentYear} Elay Bachar Photography. All rights reserved.
            </p>
            <a 
              href="https://lynor.co.il" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-light text-slate-400 hover:text-white transition-colors duration-300 tracking-wide flex items-center space-x-2 group"
            >
              <span>Created With Lots Of ❤️ By Lynor Group</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
