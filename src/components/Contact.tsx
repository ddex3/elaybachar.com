import React, { useState, useEffect, useRef } from 'react';
import { Mail, MapPin, Send, Clock } from 'lucide-react';
import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const isFormValid = formData.name.trim() !== '' && 
                     formData.email.trim() !== '' && 
                     formData.subject.trim() !== '' && 
                     formData.message.trim() !== '';

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="relative section-padding-lg bg-gradient-to-br from-white via-slate-50/30 to-white overflow-hidden"
      aria-labelledby="contact-title"
    >
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-32 left-16 w-20 sm:w-24 h-20 sm:h-24 bg-slate-200 rounded-full blur-2xl"></div>
        <div className="absolute bottom-32 right-16 w-24 sm:w-32 h-24 sm:h-32 bg-slate-200 rounded-full blur-2xl"></div>
      </div>

      <div className="relative container-responsive">
        <div className="text-center mb-12 sm:mb-16 opacity-0" data-animate>
          <h2 
            id="contact-title" 
            className="text-responsive-4xl sm:text-responsive-5xl lg:text-responsive-6xl font-extralight tracking-widest text-slate-700 mb-6 text-balance"
          >
            Get In Touch
          </h2>
          <div className="w-16 sm:w-20 h-px bg-slate-300 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-responsive-xl sm:text-responsive-2xl font-light text-slate-500 tracking-wide max-w-2xl mx-auto text-balance">
            Let's create something beautiful together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
          <div className="lg:col-span-5 space-y-8 sm:space-y-10 opacity-0" data-animate>
            <div className="space-y-4 sm:space-y-5">
              <div className="bg-white/40 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-100 hover:bg-white/60 transition-all duration-500 group">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 bg-slate-50 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-slate-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xs sm:text-sm font-medium text-slate-400 tracking-wider mb-1 sm:mb-2">EMAIL</h3>
                    <a 
                      href="mailto:contact@elaybachar.com"
                      className="text-sm sm:text-base font-light text-slate-600 hover:text-slate-800 transition-colors duration-300 break-all"
                    >
                      contact@elaybachar.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white/40 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-100 hover:bg-white/60 transition-all duration-500 group">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 bg-slate-50 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-slate-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xs sm:text-sm font-medium text-slate-400 tracking-wider mb-1 sm:mb-2">LOCATION</h3>
                    <address className="text-sm sm:text-base font-light text-slate-600 not-italic">
                      Rishon LeZion, Israel
                    </address>
                  </div>
                </div>
              </div>

              <div className="bg-white/40 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-100 hover:bg-white/60 transition-all duration-500 group">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 bg-slate-50 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-slate-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xs sm:text-sm font-medium text-slate-400 tracking-wider mb-1 sm:mb-2">AVAILABILITY</h3>
                    <div className="space-y-1 sm:space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm font-light text-slate-600">Sunday - Thursday</span>
                        <span className="text-xs sm:text-sm font-light text-slate-600">9:00 - 18:00</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm font-light text-slate-600">Friday</span>
                        <span className="text-xs sm:text-sm font-light text-slate-600">9:00 - 14:00</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm font-light text-slate-600">Saturday</span>
                        <span className="text-xs sm:text-sm font-light text-slate-500">Closed</span>
                      </div>
                      <div className="pt-1 border-t border-slate-200">
                        <span className="text-xs font-light text-slate-400 tracking-wide">Israel Time</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 max-w-xs sm:max-w-none mx-auto sm:mx-0">
              <a 
                href="https://www.instagram.com/elaybacharrr/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-center p-3 sm:p-5 bg-white/40 backdrop-blur-sm rounded-lg sm:rounded-xl border border-slate-100 hover:bg-white/60 transition-all duration-500 group btn-touch aspect-square flex flex-col items-center justify-center"
              >
                <div className="flex justify-center mb-0 sm:mb-2">
                  <FaInstagram className="w-5 h-5 sm:w-5 sm:h-5 text-slate-500 group-hover:text-pink-400 transition-colors duration-300" />
                </div>
                <div className="hidden sm:block text-xs sm:text-sm font-medium text-slate-400 tracking-wider">INSTAGRAM</div>
              </a>
              
              <a 
                href="https://www.tiktok.com/@elaybacharrr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-center p-3 sm:p-5 bg-white/40 backdrop-blur-sm rounded-lg sm:rounded-xl border border-slate-100 hover:bg-white/60 transition-all duration-500 group btn-touch aspect-square flex flex-col items-center justify-center"
              >
                <div className="flex justify-center mb-0 sm:mb-2">
                  <FaTiktok className="w-5 h-5 sm:w-5 sm:h-5 text-slate-500 group-hover:text-slate-700 transition-colors duration-300" />
                </div>
                <div className="hidden sm:block text-xs sm:text-sm font-medium text-slate-400 tracking-wider">TIKTOK</div>
              </a>
              
              <a 
                href="https://wa.me/972549905700" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-center p-3 sm:p-5 bg-white/40 backdrop-blur-sm rounded-lg sm:rounded-xl border border-slate-100 hover:bg-white/60 transition-all duration-500 group btn-touch aspect-square flex flex-col items-center justify-center"
              >
                <div className="flex justify-center mb-0 sm:mb-2">
                  <FaWhatsapp className="w-5 h-5 sm:w-5 sm:h-5 text-slate-500 group-hover:text-green-500 transition-colors duration-300" />
                </div>
                <div className="hidden sm:block text-xs sm:text-sm font-medium text-slate-400 tracking-wider">WHATSAPP</div>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 opacity-0" data-animate>
            <div className="bg-white/40 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-7 border border-slate-100">
              <h3 className="text-responsive-2xl sm:text-responsive-3xl font-light text-slate-700 mb-4 sm:mb-6 tracking-wide">
                Send a Message
              </h3>
              
              <form action="https://formsubmit.co/contact@elaybachar.com" method="POST" className="space-y-4 sm:space-y-6">
                <input type="hidden" name="_next" value="http://localhost:5173/thanks" />
                <input type="hidden" name="_subject" value="New Contact Form Submission" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="text" name="_honey" style={{ display: 'none' }} />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs sm:text-sm font-medium text-slate-500 tracking-wider">NAME</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2.5 bg-white/50 border border-slate-200 rounded-lg sm:rounded-xl focus:border-black transition-all duration-300 placeholder-slate-400 text-sm sm:text-base"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs sm:text-sm font-medium text-slate-500 tracking-wider">EMAIL</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2.5 bg-white/50 border border-slate-200 rounded-lg sm:rounded-xl focus:border-black transition-all duration-300 placeholder-slate-400 text-sm sm:text-base"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs sm:text-sm font-medium text-slate-500 tracking-wider">SUBJECT</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2.5 bg-white/50 border border-slate-200 rounded-lg sm:rounded-xl focus:border-black transition-all duration-300 placeholder-slate-400 text-sm sm:text-base"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs sm:text-sm font-medium text-slate-500 tracking-wider">MESSAGE</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-3 py-2.5 bg-white/50 border border-slate-200 rounded-lg sm:rounded-xl focus:border-black transition-all duration-300 placeholder-slate-400 text-sm sm:text-base resize-none"
                    placeholder="Tell me about your project or idea..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={!isFormValid}
                  className="group flex items-center justify-center space-x-2 sm:space-x-3 w-full bg-slate-600 text-white font-light tracking-wider py-3 sm:py-3.5 rounded-lg sm:rounded-xl hover:bg-slate-700 disabled:bg-slate-400 disabled:cursor-not-allowed transition-all duration-300 btn-touch"
                >
                  <span className="text-sm sm:text-base">Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;