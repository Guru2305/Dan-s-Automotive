import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Wrench, MapPin, ShieldCheck, Award } from 'lucide-react';

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0B0B0C]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-3' : 'bg-[#0B0B0C]/85 backdrop-blur-sm border-b border-white/5 py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          
          {/* Logo & Hallmark Automotive Identity */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 bg-[#DC2626] btn-hallmark group-hover:bg-[#EF4444] transition-colors shrink-0 shadow-lg shadow-[#DC2626]/20">
              <Wrench className="w-5 h-5 text-white transform group-hover:rotate-12 transition-transform" />
              <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-[#C5A059] border border-[#0B0B0C]"></div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display text-2xl sm:text-3xl text-white tracking-wider leading-none">
                  DAN'S <span className="text-[#DC2626]">AUTOMOTIVE</span>
                </span>
              </div>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="font-mono-spec text-[10px] sm:text-xs text-[#8A8F9E] tracking-widest uppercase font-semibold">
                  HALLMARK GARAGE <span className="text-white/30">//</span> SITTINGBOURNE, KENT
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3 py-1.5 font-mono-spec text-xs uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 ${
                    isActive 
                      ? 'text-[#DC2626] font-bold bg-white/5 border-b-2 border-[#DC2626]' 
                      : 'text-[#E2E4E9]/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="text-[10px] text-[#8A8F9E] font-mono-spec">
                    {link.code} —
                  </span>
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="btn-hallmark px-5 py-2.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-mono-spec text-xs tracking-wider uppercase font-bold flex items-center gap-2 transition-all shadow-lg shadow-[#DC2626]/20 cursor-pointer"
            >
              <Wrench className="w-3.5 h-3.5" />
              <span>BOOK SERVICE</span>
            </button>
            <a
              href="tel:+447487575483"
              className="btn-hallmark-reverse px-4 py-2.5 bg-[#1A1A1E] hover:bg-[#26262C] border border-white/10 text-white font-mono-spec text-xs tracking-wider uppercase flex items-center gap-2 transition-all cursor-pointer font-bold"
            >
              <Phone className="w-3.5 h-3.5 text-[#DC2626]" />
              <span className="hidden xl:inline">07487 575483</span>
              <span className="xl:hidden">CALL</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="btn-hallmark px-3 py-1.5 bg-[#DC2626] text-white font-mono-spec text-[11px] font-bold uppercase flex items-center gap-1"
            >
              <Wrench className="w-3 h-3" />
              <span>BOOK</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white bg-[#1A1A1E] border border-white/10 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-5 h-5 text-[#DC2626]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#0B0B0C] border-b border-white/10 px-4 pt-4 pb-6 mt-3 space-y-3 font-mono-spec animate-in slide-in-from-top duration-200">
          <div className="text-[10px] text-[#8A8F9E] border-b border-white/10 pb-2 flex justify-between items-center font-bold">
            <span>DAN'S AUTOMOTIVE SERVICES MENU</span>
            <span className="text-[#C5A059]">4.8★ GOOGLE RATED</span>
          </div>

          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 text-sm uppercase tracking-wider text-white hover:bg-white/5 border-l-2 border-transparent hover:border-[#DC2626] flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs text-[#8A8F9E]">{link.code} —</span>
                  <span className="font-bold">{link.name}</span>
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
              className="btn-hallmark w-full py-2.5 bg-[#DC2626] text-white text-xs font-bold text-center uppercase flex items-center justify-center gap-2"
            >
              <Wrench className="w-4 h-4" />
              BOOK SERVICE
            </button>
            <a
              href="tel:+447487575483"
              className="btn-hallmark-reverse w-full py-2.5 bg-[#1A1A1E] border border-white/10 text-white text-xs font-bold text-center uppercase flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#DC2626]" />
              07487 575483
            </a>
          </div>

          <div className="pt-2 text-[10px] text-[#8A8F9E] flex items-center gap-1 font-semibold">
            <MapPin className="w-3 h-3 text-[#DC2626]" />
            <span>Unit 1, 172a New Farm, High St, Newington, Sittingbourne ME9 7JH</span>
          </div>
        </div>
      )}
    </header>
  );
}
