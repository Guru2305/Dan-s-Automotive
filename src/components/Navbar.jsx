import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Wrench, MapPin } from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['home', 'about', 'services', 'whyus', 'reviews', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home', id: 'home', code: '01' },
    { name: 'ABOUT', href: '#about', id: 'about', code: '02' },
    { name: 'SERVICES', href: '#services', id: 'services', code: '03' },
    { name: 'WHY US', href: '#whyus', id: 'whyus', code: '04' },
    { name: 'REVIEWS', href: '#reviews', id: 'reviews', code: '05' },
    { name: 'CONTACT', href: '#contact', id: 'contact', code: '06' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-3' : 'bg-[#0A0A0A]/80 backdrop-blur-sm border-b border-white/5 py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-11 h-11 bg-[#C21F2E] btn-clipped group-hover:bg-[#E61C24] transition-colors">
              <Wrench className="w-6 h-6 text-white transform group-hover:rotate-12 transition-transform" />
              <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-white border border-[#0A0A0A]"></div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display text-2xl sm:text-3xl text-white tracking-wider leading-none">
                  DAN'S <span className="text-[#C21F2E]">AUTOMOTIVE</span>
                </span>
              </div>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="font-mono-spec text-[10px] sm:text-xs text-[#9A9A95] tracking-widest uppercase">
                  SERVICES <span className="text-white/40">//</span> SITTINGBOURNE, KENT
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3 py-1.5 font-mono-spec text-xs uppercase tracking-wider transition-all duration-200 relative group flex items-center gap-1.5 ${
                    isActive 
                      ? 'text-[#C21F2E] bg-white/5 border border-[#C21F2E]/30' 
                      : 'text-[#EDEDEA]/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="text-[10px] text-[#9A9A95] opacity-60 group-hover:text-[#C21F2E] transition-colors">
                    {link.code}
                  </span>
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="absolute -bottom-[1px] left-0 right-0 h-[2px] bg-[#C21F2E]"></span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="btn-clipped px-4 py-2 bg-[#C21F2E] hover:bg-[#E61C24] text-white font-mono-spec text-xs tracking-wider uppercase font-bold flex items-center gap-2 transition-all shadow-lg hover:shadow-[#C21F2E]/20 cursor-pointer"
            >
              <Wrench className="w-3.5 h-3.5" />
              <span>BOOK A SERVICE</span>
            </button>
            <a
              href="tel:+447487575483"
              className="btn-clipped-reverse px-3.5 py-2 bg-[#161616] hover:bg-[#222222] border border-white/10 text-white font-mono-spec text-xs tracking-wider uppercase flex items-center gap-2 transition-all cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-[#C21F2E]" />
              <span className="hidden xl:inline">07487 575483</span>
              <span className="xl:hidden">CALL</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="btn-clipped px-2.5 py-1.5 bg-[#C21F2E] text-white font-mono-spec text-[11px] font-bold uppercase flex items-center gap-1"
            >
              <Wrench className="w-3 h-3" />
              <span>BOOK</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#EDEDEA] hover:text-white bg-[#161616] border border-white/10 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6 text-[#C21F2E]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#0A0A0A] border-b border-[#C21F2E]/30 px-4 pt-4 pb-6 mt-3 space-y-3 font-mono-spec animate-in slide-in-from-top duration-200">
          <div className="text-[10px] text-[#9A9A95] border-b border-white/10 pb-2 flex justify-between items-center">
            <span>DAN'S AUTOMOTIVE SERVICES MENU</span>
            <span className="text-[#C21F2E]">4.8★ (165+ REVIEWS)</span>
          </div>

          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 text-sm uppercase tracking-wider text-[#EDEDEA] hover:text-white hover:bg-[#C21F2E]/10 border-l-2 border-transparent hover:border-[#C21F2E] flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs text-[#9A9A95]">{link.code} //</span>
                  <span>{link.name}</span>
                </div>
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenBooking();
              }}
              className="btn-clipped w-full py-2.5 bg-[#C21F2E] text-white text-xs font-bold text-center uppercase flex items-center justify-center gap-2"
            >
              <Wrench className="w-4 h-4" />
              BOOK SERVICE
            </button>
            <a
              href="tel:+447487575483"
              className="btn-clipped-reverse w-full py-2.5 bg-[#161616] border border-white/20 text-white text-xs font-bold text-center uppercase flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#C21F2E]" />
              07487 575483
            </a>
          </div>

          <div className="pt-2 text-[10px] text-[#9A9A95] flex items-center gap-1">
            <MapPin className="w-3 h-3 text-[#C21F2E]" />
            <span>Unit 1, 172a New Farm, High St, Newington, Sittingbourne ME9 7JH</span>
          </div>
        </div>
      )}
    </header>
  );
}
