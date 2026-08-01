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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#E5E3DC]/95 backdrop-blur-md border-b-2 border-[#111111] shadow-md py-3' : 'bg-[#E5E3DC]/85 backdrop-blur-sm border-b border-[#111111]/20 py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-11 h-11 bg-[#111111] btn-editorial group-hover:bg-[#E53925] transition-colors">
              <Wrench className="w-6 h-6 text-[#E5E3DC] transform group-hover:rotate-12 transition-transform" />
              <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-[#E53925] border border-[#111111]"></div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display text-2xl sm:text-3xl text-[#111111] tracking-wider leading-none">
                  DAN'S <span className="text-[#E53925]">AUTOMOTIVE</span>
                </span>
              </div>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="font-mono-spec text-[10px] sm:text-xs text-[#555550] tracking-widest uppercase font-bold">
                  SERVICES <span className="text-[#111111]/40">//</span> SITTINGBOURNE, KENT
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
                      ? 'text-[#E53925] font-bold border-b-2 border-[#E53925]' 
                      : 'text-[#111111]/80 hover:text-[#111111] hover:bg-[#111111]/5'
                  }`}
                >
                  <span className="text-[10px] text-[#555550] font-mono-spec group-hover:text-[#E53925] transition-colors">
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
              className="btn-editorial px-5 py-2.5 bg-[#E53925] hover:bg-[#CC2D1B] text-white font-mono-spec text-xs tracking-wider uppercase font-bold flex items-center gap-2 transition-all shadow-md cursor-pointer"
            >
              <Wrench className="w-3.5 h-3.5" />
              <span>BOOK A SERVICE</span>
            </button>
            <a
              href="tel:+447487575483"
              className="btn-editorial-reverse px-4 py-2.5 bg-[#111111] hover:bg-[#222222] text-[#E5E3DC] font-mono-spec text-xs tracking-wider uppercase flex items-center gap-2 transition-all cursor-pointer font-bold"
            >
              <Phone className="w-3.5 h-3.5 text-[#E53925]" />
              <span className="hidden xl:inline">07487 575483</span>
              <span className="xl:hidden">CALL</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="btn-editorial px-3 py-1.5 bg-[#E53925] text-white font-mono-spec text-[11px] font-bold uppercase flex items-center gap-1"
            >
              <Wrench className="w-3 h-3" />
              <span>BOOK</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#111111] hover:bg-[#111111]/10 border border-[#111111]/30 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6 text-[#E53925]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#E5E3DC] border-b-2 border-[#111111] px-4 pt-4 pb-6 mt-3 space-y-3 font-mono-spec animate-in slide-in-from-top duration-200">
          <div className="text-[10px] text-[#555550] border-b border-[#111111]/20 pb-2 flex justify-between items-center font-bold">
            <span>DAN'S AUTOMOTIVE SERVICES MENU</span>
            <span className="text-[#E53925]">4.8★ (165+ REVIEWS)</span>
          </div>

          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 text-sm uppercase tracking-wider text-[#111111] hover:bg-[#E53925]/10 border-l-2 border-transparent hover:border-[#E53925] flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs text-[#555550]">{link.code} —</span>
                  <span className="font-bold">{link.name}</span>
                </div>
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#111111]/20 grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenBooking();
              }}
              className="btn-editorial w-full py-2.5 bg-[#E53925] text-white text-xs font-bold text-center uppercase flex items-center justify-center gap-2"
            >
              <Wrench className="w-4 h-4" />
              BOOK SERVICE
            </button>
            <a
              href="tel:+447487575483"
              className="btn-editorial-reverse w-full py-2.5 bg-[#111111] text-white text-xs font-bold text-center uppercase flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#E53925]" />
              07487 575483
            </a>
          </div>

          <div className="pt-2 text-[10px] text-[#555550] flex items-center gap-1 font-bold">
            <MapPin className="w-3 h-3 text-[#E53925]" />
            <span>Unit 1, 172a New Farm, High St, Newington, Sittingbourne ME9 7JH</span>
          </div>
        </div>
      )}
    </header>
  );
}
